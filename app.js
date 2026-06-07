(() => {
  // ── State ──────────────────────────────────────
  let allQuestions = [];
  let queue        = [];
  let qIndex       = 0;
  let sessionCorrect = 0;
  let sessionTotal   = 0;
  let answered     = false;

  let activeCat  = 'all';
  let activeDiff = 'all';

  const STORAGE_KEY = 'orthobase_done';

  // ── DOM ───────────────────────────────────────
  const $ = id => document.getElementById(id);

  const homeScreen  = $('home');
  const quizScreen  = $('quiz');
  const doneScreen  = $('done-screen');

  const statTotal   = $('stat-total');
  const statCats    = $('stat-cats');
  const statDone    = $('stat-done');
  const catFilter   = $('cat-filter');
  const diffFilter  = $('diff-filter');
  const queueInfo   = $('queue-info');
  const startBtn    = $('start-btn');
  const loadingMsg  = $('loading-msg');

  const backBtn     = $('back-btn');
  const quizTopic   = $('quiz-topic');
  const quizProgress = $('quiz-progress');
  const quizCounter = $('quiz-counter');

  const qCategory   = $('q-category');
  const qDifficulty = $('q-difficulty');
  const qVignette   = $('q-vignette');
  const qStem       = $('q-stem');
  const optionsEl   = $('options');
  const feedbackEl  = $('feedback');
  const feedbackLabel = $('feedback-label');
  const feedbackText  = $('feedback-text');
  const btnNext     = $('btn-next');
  const btnExplain  = $('btn-explain');
  const explainerEl = $('explainer');
  const explainerText = $('explainer-text');

  const doneSub     = $('done-sub');
  const doneStats   = $('done-stats');
  const doneHome    = $('done-home');

  // ── Load questions ────────────────────────────
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
  }

  function loadQuestions() {
    if (typeof QUESTIONS !== 'undefined' && QUESTIONS.length > 0) {
      allQuestions = QUESTIONS;
      initHome();
    } else {
      loadingMsg.classList.remove('hidden');
      loadingMsg.textContent = 'No questions found. Run the generator first.';
    }
  }

  function initHome() {
    loadingMsg.classList.add('hidden');

    // Stats
    const cats = [...new Set(allQuestions.map(q => q.category))];
    const done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    statTotal.textContent = allQuestions.length;
    statCats.textContent  = cats.length;
    statDone.textContent  = done.length;

    // Category pills
    const allPill = document.createElement('button');
    allPill.className = 'pill active';
    allPill.dataset.cat = 'all';
    allPill.textContent = 'All';
    catFilter.appendChild(allPill);

    cats.forEach(cat => {
      const p = document.createElement('button');
      p.className = 'pill';
      p.dataset.cat = cat;
      p.textContent = cat;
      catFilter.appendChild(p);
    });

    catFilter.addEventListener('click', e => {
      const pill = e.target.closest('.pill');
      if (!pill) return;
      catFilter.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCat = pill.dataset.cat;
      updateQueueInfo();
    });

    diffFilter.addEventListener('click', e => {
      const pill = e.target.closest('.pill');
      if (!pill) return;
      diffFilter.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDiff = pill.dataset.diff;
      updateQueueInfo();
    });

    updateQueueInfo();
    startBtn.disabled = false;
  }

  function getFiltered() {
    return allQuestions.filter(q => {
      const catOk  = activeCat === 'all' || q.category === activeCat;
      const diffOk = activeDiff === 'all' || (q.difficulty || '').toLowerCase() === activeDiff;
      return catOk && diffOk;
    });
  }

  function updateQueueInfo() {
    const n = getFiltered().length;
    queueInfo.textContent = `${n} question${n !== 1 ? 's' : ''} match your filters`;
    startBtn.disabled = n === 0;
  }

  // ── Session ───────────────────────────────────
  function startSession() {
    const filtered = getFiltered();
    // Shuffle
    queue = [...filtered].sort(() => Math.random() - 0.5);
    qIndex = 0;
    sessionCorrect = 0;
    sessionTotal   = 0;
    showScreen('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    if (qIndex >= queue.length) {
      endSession();
      return;
    }

    answered = false;
    const q = queue[qIndex];

    // Animate new card
    const card = $('q-card');
    card.style.animation = 'none';
    card.offsetHeight; // reflow
    card.style.animation = '';

    // Meta
    quizTopic.textContent   = q.topic || q.category || '';
    quizCounter.textContent = `${qIndex + 1} / ${queue.length}`;
    quizProgress.style.width = `${((qIndex) / queue.length) * 100}%`;

    qCategory.textContent  = q.category || '';
    qDifficulty.textContent = q.difficulty || '';
    qVignette.textContent  = q.vignette || '';
    qStem.textContent      = q.question || '';

    // Options
    optionsEl.innerHTML = '';
    const opts = q.options || [];
    opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.innerHTML = `<span class="opt-key">${opt.key || String.fromCharCode(65 + i)}</span><span>${opt.text}</span>`;
      btn.addEventListener('click', () => handleAnswer(opt, opts));
      optionsEl.appendChild(btn);
    });

    // Reset
    feedbackEl.classList.add('hidden');
    explainerEl.classList.add('hidden');
    btnExplain.textContent = 'Break this down from scratch';

    // Explainer
    explainerText.textContent = q.explainer || '';
    btnExplain.style.display = q.explainer ? '' : 'none';
  }

  function handleAnswer(chosen, allOpts) {
    if (answered) return;
    answered = true;
    sessionTotal++;

    const btns = optionsEl.querySelectorAll('.opt');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      const opt = allOpts[i];
      if (opt === chosen) btn.classList.add(chosen.correct ? 'correct' : 'wrong');
      if (opt.correct && opt !== chosen) btn.classList.add('correct');
    });

    if (chosen.correct) sessionCorrect++;

    feedbackLabel.textContent = chosen.correct ? 'Correct' : 'Not quite';
    feedbackLabel.className   = 'feedback-label ' + (chosen.correct ? 'correct' : 'wrong');
    feedbackText.textContent  = chosen.response || '';
    feedbackEl.classList.remove('hidden');

    // Save to history
    const done = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const q = queue[qIndex];
    if (q.id && !done.includes(q.id)) {
      done.push(q.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
      statDone.textContent = done.length;
    }
  }

  function endSession() {
    showScreen('done-screen');
    const pct = sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0;
    doneSub.textContent = `You answered ${sessionTotal} question${sessionTotal !== 1 ? 's' : ''}.`;
    doneStats.innerHTML = `
      <div class="done-stat"><span class="done-stat-n" style="color:var(--green)">${sessionCorrect}</span><span class="done-stat-l">Correct</span></div>
      <div class="done-stat"><span class="done-stat-n" style="color:var(--red)">${sessionTotal - sessionCorrect}</span><span class="done-stat-l">Wrong</span></div>
      <div class="done-stat"><span class="done-stat-n">${pct}%</span><span class="done-stat-l">Score</span></div>
    `;
  }

  // ── Events ────────────────────────────────────
  startBtn.addEventListener('click', startSession);
  doneHome.addEventListener('click', () => showScreen('home'));
  backBtn.addEventListener('click', () => showScreen('home'));

  btnNext.addEventListener('click', () => {
    qIndex++;
    renderQuestion();
  });

  btnExplain.addEventListener('click', () => {
    const open = !explainerEl.classList.contains('hidden');
    explainerEl.classList.toggle('hidden', open);
    btnExplain.textContent = open ? 'Break this down from scratch' : 'Close explainer';
  });

  // Keyboard: space/enter to advance after answering
  document.addEventListener('keydown', e => {
    if (quizScreen.classList.contains('active') && answered) {
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        qIndex++;
        renderQuestion();
      }
    }
  });

  // ── Init ──────────────────────────────────────
  loadQuestions();

})();
