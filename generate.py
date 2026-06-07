"""
Ortho question bank generator.
Reads topics.json, generates questions via OpenRouter, saves to questions.json.
Resumes from where it left off if interrupted.

Usage:
  pip install openai python-dotenv
  python generate.py

Requires OPENROUTER_API_KEY in .env
"""

import json
import os
import time
import re
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

TOPICS_FILE   = Path("topics.json")
OUTPUT_FILE   = Path("questions.json")
PROGRESS_FILE = Path(".generate_progress.json")

MODEL         = "qwen/qwen-2.5-72b-instruct"
QUESTIONS_PER_TOPIC = 5
RETRY_ATTEMPTS      = 3
RETRY_DELAY         = 3  # seconds

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ["OPENROUTER_API_KEY"],
)

SYSTEM_PROMPT = """You are an expert orthopedic educator writing a question bank for pre-medical students who want to understand orthopedics from first principles — not memorize facts, but genuinely understand the logic.

Your job is to write questions that:
1. Present a real clinical scenario (specific patient, specific complaint, specific context)
2. Require understanding WHY something happens, not just WHAT it is called
3. Have 4 answer choices: one clearly correct, two plausible-but-wrong
4. Explain every answer from first principles — use physics, anatomy, cell biology, mechanics, whatever gets to the root

The tone should be like a brilliant attending talking to a curious student. Smart but never condescending. Feynman-style: if you can't explain it simply, you don't understand it yet.

CRITICAL: Output ONLY a valid JSON array. No markdown, no code fences, no commentary before or after. Just the raw JSON array."""

def build_user_prompt(topic: str, category: str) -> str:
    return f"""Generate exactly {QUESTIONS_PER_TOPIC} orthopedic questions about: {topic} (category: {category})

Output a JSON array of {QUESTIONS_PER_TOPIC} question objects. Each object must follow this exact structure:

{{
  "id": "kebab-case-unique-id",
  "topic": "{topic}",
  "category": "{category}",
  "difficulty": "beginner or intermediate",
  "vignette": "A specific clinical scenario. Give the patient an age, sex, and concrete situation. 2-4 sentences.",
  "question": "A single focused question that requires understanding, not recall.",
  "explainer": "A 3-6 sentence first-principles breakdown of the core concept. Explain from the ground up — anatomy, physics, biology — whatever is fundamental. A curious person with no medical training should understand this.",
  "options": [
    {{
      "key": "A",
      "text": "Concise answer choice",
      "correct": false,
      "response": "2-4 sentences explaining why this is wrong, from first principles. Don't just say 'incorrect' — explain the reasoning."
    }},
    {{
      "key": "B",
      "text": "Concise answer choice",
      "correct": true,
      "response": "2-4 sentences explaining why this is correct, from first principles. This is the teaching moment."
    }},
    {{
      "key": "C",
      "text": "Concise answer choice",
      "correct": false,
      "response": "2-4 sentences explaining why this is wrong, from first principles."
    }},
    {{
      "key": "D",
      "text": "Concise answer choice",
      "correct": false,
      "response": "2-4 sentences explaining why this is wrong, from first principles."
    }}
  ],
  "pearls": ["Key takeaway in one sentence", "Another takeaway"]
}}

Randomize which option (A, B, or C) is correct across the questions. Do not always make B correct.
Make the vignettes varied — different ages, different mechanisms, different patient contexts.
Output only the JSON array, nothing else."""

def load_progress() -> set:
    if PROGRESS_FILE.exists():
        return set(json.loads(PROGRESS_FILE.read_text()))
    return set()

def save_progress(done: set):
    PROGRESS_FILE.write_text(json.dumps(list(done)))

def load_questions() -> list:
    if OUTPUT_FILE.exists():
        return json.loads(OUTPUT_FILE.read_text())
    return []

def save_questions(questions: list):
    OUTPUT_FILE.write_text(json.dumps(questions, indent=2))

def extract_json(text: str) -> list:
    text = text.strip()
    # Strip markdown code fences if present
    text = re.sub(r'^```(?:json)?\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    text = text.strip()
    return json.loads(text)

def generate_questions(topic: str, category: str) -> list:
    for attempt in range(RETRY_ATTEMPTS):
        try:
            response = client.chat.completions.create(
                model=MODEL,
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": build_user_prompt(topic, category)},
                ],
                temperature=0.8,
                max_tokens=4000,
            )
            raw = response.choices[0].message.content
            print("Got question")
            questions = extract_json(raw)

            # Basic validation
            if not isinstance(questions, list) or len(questions) == 0:
                raise ValueError("Response is not a non-empty list")

            for q in questions:
                required = {"id", "topic", "question", "options", "explainer"}
                if not required.issubset(q.keys()):
                    raise ValueError(f"Question missing required fields: {q.get('id', '?')}")

            return questions

        except Exception as e:
            print(f"  Attempt {attempt + 1} failed: {e}")
            if attempt < RETRY_ATTEMPTS - 1:
                time.sleep(RETRY_DELAY)

    print(f"  Skipping '{topic}' after {RETRY_ATTEMPTS} failed attempts.")
    return []

def main():
    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        print("Error: OPENROUTER_API_KEY not found in .env")
        return

    topics_data = json.loads(TOPICS_FILE.read_text())
    done        = load_progress()
    all_questions = load_questions()

    total_topics = sum(len(cat["topics"]) for cat in topics_data)
    total_done   = len(done)

    print(f"Ortho question bank generator")
    print(f"Topics: {total_topics} | Done: {total_done} | Remaining: {total_topics - total_done}")
    print(f"Model: {MODEL} | Questions per topic: {QUESTIONS_PER_TOPIC}")
    print(f"Estimated total questions when done: {total_topics * QUESTIONS_PER_TOPIC}")
    print()

    for category_obj in topics_data:
        category = category_obj["category"]
        for topic in category_obj["topics"]:
            key = f"{category}::{topic}"
            if key in done:
                print(f"  [skip] {topic}")
                continue

            print(f"  [gen]  {category} — {topic}...")
            questions = generate_questions(topic, category)

            if questions:
                all_questions.extend(questions)
                save_questions(all_questions)
                done.add(key)
                save_progress(done)
                print(f"         +{len(questions)} questions (total: {len(all_questions)})")
            else:
                print(f"         failed, skipping")

            time.sleep(1)  # be gentle with the API

    print()
    print(f"Done. {len(all_questions)} questions saved to {OUTPUT_FILE}")

    # Clean up progress file
    if PROGRESS_FILE.exists():
        PROGRESS_FILE.unlink()

if __name__ == "__main__":
    main()
