const QUESTIONS = [
  {
    "id": "bone-mineralization-process",
    "topic": "Bone structure and composition",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 12-year-old girl presents with a history of recurrent fractures after minor falls. Her serum calcium and phosphate levels are within normal limits.",
    "question": "What is the most likely reason for her recurrent fractures despite normal serum calcium and phosphate levels?",
    "explainer": "Bones are composed of a matrix of collagen and minerals. The process of mineralization involves the deposition of calcium and phosphate into this matrix, which provides the bone with its strength and rigidity. If the matrix is defective, even normal mineral levels won't prevent fractures.",
    "options": [
      {
        "key": "A",
        "text": "Her bones have a high turnover rate.",
        "correct": false,
        "response": "While high bone turnover can lead to bone weakness, the key issue here is the quality of the bone matrix, not just the rate of turnover. Normal serum calcium and phosphate levels suggest that the minerals are available but not properly incorporated."
      },
      {
        "key": "B",
        "text": "Her bone matrix is defective.",
        "correct": true,
        "response": "A defective bone matrix, such as in osteogenesis imperfecta, can lead to recurrent fractures even if the mineral levels are normal. The collagen in the matrix is crucial for the bone's tensile strength and elasticity."
      },
      {
        "key": "C",
        "text": "Her parathyroid hormone levels are too high.",
        "correct": false,
        "response": "High parathyroid hormone levels can lead to bone resorption and mineral imbalance, but the patient's normal serum calcium and phosphate levels suggest that this is not the primary issue."
      }
    ],
    "pearls": [
      "A defective bone matrix can lead to recurrent fractures despite normal mineral levels.",
      "Collagen provides the bone matrix with tensile strength."
    ]
  },
  {
    "id": "bone-remodeling-mechanics",
    "topic": "Bone structure and composition",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old man with a history of osteoporosis is being treated with bisphosphonates. He returns to the clinic with a concern about bone pain and has not had any recent trauma.",
    "question": "What is the likely mechanism behind his bone pain?",
    "explainer": "Bisphosphonates inhibit osteoclast activity, which slows down bone resorption. This can lead to a buildup of microdamage in the bone, as the normal process of bone remodeling is disrupted. The microdamage can cause bone pain and increase the risk of fractures.",
    "options": [
      {
        "key": "A",
        "text": "Increased osteoclast activity",
        "correct": false,
        "response": "Bisphosphonates inhibit osteoclast activity, so increased osteoclast activity is not the cause of his bone pain. In fact, reduced osteoclast activity can lead to the accumulation of microdamage."
      },
      {
        "key": "B",
        "text": "Accumulation of microdamage",
        "correct": true,
        "response": "Bisphosphonates reduce bone resorption, which can lead to the accumulation of microdamage in the bone. This microdamage can cause bone pain and increase the risk of fractures."
      },
      {
        "key": "C",
        "text": "Decreased bone density",
        "correct": false,
        "response": "While osteoporosis is characterized by decreased bone density, bisphosphonates are used to increase bone density. The pain in this case is more likely due to the accumulation of microdamage from reduced bone remodeling."
      }
    ],
    "pearls": [
      "Bisphosphonates inhibit osteoclast activity, leading to reduced bone resorption.",
      "Accumulated microdamage can cause bone pain and increase fracture risk."
    ]
  },
  {
    "id": "cortical-bone-function",
    "topic": "Bone structure and composition",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 28-year-old male construction worker presents with a fracture of the tibia after falling from a ladder. The fracture is in the mid-shaft of the tibia.",
    "question": "Why is the mid-shaft of the tibia more prone to this type of fracture compared to the ends of the bone?",
    "explainer": "The mid-shaft of long bones like the tibia is primarily composed of cortical bone, which is dense and provides structural support. Cortical bone is strong but less flexible compared to cancellous bone, which is more prevalent at the ends of bones. This makes the mid-shaft more susceptible to fractures from high-impact forces.",
    "options": [
      {
        "key": "A",
        "text": "Higher bone density",
        "correct": false,
        "response": "Higher bone density in the mid-shaft does not explain why it is more prone to fractures. The key factor is the type of bone, which is primarily cortical bone in the mid-shaft."
      },
      {
        "key": "B",
        "text": "Predominantly cortical bone",
        "correct": true,
        "response": "The mid-shaft of long bones is primarily composed of cortical bone, which is dense and strong but less flexible. This makes it more susceptible to fractures from high-impact forces."
      },
      {
        "key": "C",
        "text": "Lack of blood supply",
        "correct": false,
        "response": "While blood supply is important for bone health, the primary reason for the mid-shaft's susceptibility to fractures is the composition of the bone itself, which is predominantly cortical bone."
      }
    ],
    "pearls": [
      "Cortical bone is dense and strong but less flexible.",
      "The mid-shaft of long bones is primarily cortical bone."
    ]
  },
  {
    "id": "bone-remodeling-importance",
    "topic": "Bone structure and composition",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 70-year-old woman with a history of multiple spinal fractures is being evaluated for osteoporosis. She has been on long-term glucocorticoid therapy for rheumatoid arthritis.",
    "question": "How does long-term glucocorticoid therapy contribute to her bone fragility?",
    "explainer": "Glucocorticoids, such as prednisone, disrupt the normal process of bone remodeling by inhibiting osteoblast activity and increasing osteoclast activity. This imbalance leads to a net loss of bone mass, making the bones more fragile and prone to fractures.",
    "options": [
      {
        "key": "A",
        "text": "It increases bone density",
        "correct": false,
        "response": "Glucocorticoids actually decrease bone density by inhibiting osteoblast activity and increasing osteoclast activity, leading to a net loss of bone mass."
      },
      {
        "key": "B",
        "text": "It disrupts bone remodeling",
        "correct": true,
        "response": "Glucocorticoids disrupt bone remodeling by inhibiting osteoblast activity and increasing osteoclast activity. This imbalance leads to a net loss of bone mass, making the bones more fragile and prone to fractures."
      },
      {
        "key": "C",
        "text": "It enhances bone mineralization",
        "correct": false,
        "response": "Glucocorticoids do not enhance bone mineralization. Instead, they disrupt the normal process of bone remodeling, leading to a decrease in bone mass and increased fragility."
      }
    ],
    "pearls": [
      "Glucocorticoids disrupt bone remodeling by affecting osteoblast and osteoclast activity.",
      "Disrupted bone remodeling leads to a net loss of bone mass."
    ]
  },
  {
    "id": "osteoporosis-pathophysiology",
    "topic": "Bone structure and composition",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 65-year-old woman presents with a recent vertebral compression fracture. She has no history of trauma and is postmenopausal.",
    "question": "What is the primary pathophysiological process leading to her vertebral compression fracture?",
    "explainer": "Osteoporosis is characterized by a decrease in bone mass and density, which results from an imbalance between bone resorption and formation. Postmenopausal women are at higher risk due to the decline in estrogen levels, which normally protect against bone resorption.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone formation",
        "correct": false,
        "response": "Osteoporosis is characterized by a decrease in bone mass and density, not an increase in bone formation. The primary issue is an imbalance between bone resorption and formation."
      },
      {
        "key": "B",
        "text": "Decreased bone resorption",
        "correct": false,
        "response": "In osteoporosis, bone resorption is actually increased, not decreased. This imbalance leads to a net loss of bone mass and increased fragility."
      },
      {
        "key": "C",
        "text": "Imbalance between bone resorption and formation",
        "correct": true,
        "response": "Osteoporosis is primarily caused by an imbalance between bone resorption and formation, leading to a decrease in bone mass and density. This makes the bones more fragile and prone to fractures, especially in postmenopausal women."
      }
    ],
    "pearls": [
      "Osteoporosis is characterized by an imbalance between bone resorption and formation.",
      "Postmenopausal women are at higher risk due to decreased estrogen levels."
    ]
  },
  {
    "id": "fracture-healing-and-bone-remodeling",
    "topic": "Bone healing and remodeling",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male presents with a fracture of the distal radius after falling off a bicycle. X-rays confirm a displaced fracture.",
    "question": "What is the primary reason why immobilization is crucial in the initial phase of bone healing?",
    "explainer": "Immobilization helps prevent movement at the fracture site, which is essential for the formation of a stable callus. Without immobilization, the bone fragments can move, leading to improper alignment and delayed healing. This process is driven by the body's need to create a stable environment for new bone cells to grow and form a bridge between the broken ends.",
    "options": [
      {
        "key": "A",
        "text": "To allow for immediate bone remodeling",
        "correct": false,
        "response": "Bone remodeling occurs later in the healing process, after the initial callus has formed and stabilized. Immobilization is primarily needed to prevent movement and ensure proper alignment during the early stages of healing."
      },
      {
        "key": "B",
        "text": "To prevent movement and ensure proper alignment",
        "correct": true,
        "response": "Immobilization prevents movement at the fracture site, which is crucial for the formation of a stable callus. Proper alignment ensures that the bone heals in the correct position, reducing the risk of complications such as malunion."
      },
      {
        "key": "C",
        "text": "To reduce the risk of infection",
        "correct": false,
        "response": "While infection can be a concern, the primary role of immobilization is to prevent movement and ensure proper alignment. Infection is more commonly prevented through proper wound care and, if necessary, antibiotics."
      }
    ],
    "pearls": [
      "Immobilization is essential for proper fracture alignment.",
      "The initial phase of bone healing focuses on stability and callus formation."
    ]
  },
  {
    "id": "bone-remodeling-in-response-to-stress",
    "topic": "Bone healing and remodeling",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 50-year-old female with a history of osteoporosis reports increased back pain and a slight decrease in height over the past year.",
    "question": "How does the body's response to mechanical stress influence bone remodeling in this patient?",
    "explainer": "Bone remodeling is a dynamic process driven by mechanical stress. When bones are subjected to stress, osteocytes detect the strain and signal osteoblasts to form new bone and osteoclasts to resorb old bone. In osteoporosis, this balance is disrupted, leading to bone loss and decreased density. Understanding this process helps in managing osteoporosis through physical activity and targeted treatments.",
    "options": [
      {
        "key": "A",
        "text": "Increased mechanical stress leads to decreased bone density",
        "correct": false,
        "response": "Increased mechanical stress actually stimulates bone formation. Osteocytes detect the stress and signal osteoblasts to deposit new bone, which increases bone density. In osteoporosis, the balance is disrupted, but the principle of stress-induced bone formation still applies."
      },
      {
        "key": "B",
        "text": "Mechanical stress has no significant effect on bone density",
        "correct": false,
        "response": "Mechanical stress is a key factor in bone remodeling. It stimulates bone formation and helps maintain bone density. In the absence of mechanical stress, bones can become weaker and less dense, which is why physical activity is important for bone health."
      },
      {
        "key": "C",
        "text": "Increased mechanical stress leads to increased bone density",
        "correct": true,
        "response": "Increased mechanical stress stimulates bone formation through the activity of osteocytes, which signal osteoblasts to deposit new bone. This process is part of the Wolff's Law, which states that bone adapts to the loads placed upon it, leading to increased bone density in response to stress."
      }
    ],
    "pearls": [
      "Mechanical stress stimulates bone formation.",
      "Wolff's Law explains how bones adapt to mechanical loads."
    ]
  },
  {
    "id": "callus-formation-in-bone-healing",
    "topic": "Bone healing and remodeling",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 12-year-old boy presents with a mid-shaft tibial fracture after a soccer game. X-rays show a well-aligned fracture.",
    "question": "What is the primary function of the soft callus during the early stages of bone healing?",
    "explainer": "The soft callus, primarily composed of collagen and other fibrous tissues, forms a temporary scaffold that stabilizes the fracture site. This matrix provides a framework for osteoblasts to begin depositing new bone, which eventually replaces the soft callus. The soft callus is crucial for maintaining stability and providing a supportive environment for bone healing to progress.",
    "options": [
      {
        "key": "A",
        "text": "To provide a rigid structure for weight-bearing",
        "correct": false,
        "response": "The soft callus is not rigid and is not suitable for weight-bearing. Its primary function is to provide a stable, flexible scaffold that supports the healing process and allows osteoblasts to begin forming new bone."
      },
      {
        "key": "B",
        "text": "To stabilize the fracture site and provide a matrix for new bone formation",
        "correct": true,
        "response": "The soft callus serves to stabilize the fracture site and provides a matrix for osteoblasts to deposit new bone. This temporary structure is essential for maintaining alignment and supporting the healing process."
      },
      {
        "key": "C",
        "text": "To resorb the damaged bone and prepare for remodeling",
        "correct": false,
        "response": "The soft callus does not resorb damaged bone; that role is primarily played by osteoclasts. The soft callus forms a supportive matrix that stabilizes the fracture site and facilitates the deposition of new bone by osteoblasts."
      }
    ],
    "pearls": [
      "The soft callus provides a stable scaffold for bone healing.",
      "Osteoblasts use the soft callus as a matrix for new bone formation."
    ]
  },
  {
    "id": "effects-of-immobilization-on-bone-remodeling",
    "topic": "Bone healing and remodeling",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old female has been in a cast for 8 weeks following a femoral fracture. She reports stiffness and weakness in the affected leg.",
    "question": "What is the primary effect of prolonged immobilization on bone remodeling?",
    "explainer": "Prolonged immobilization can lead to disuse atrophy, where the lack of mechanical stress results in decreased bone density and strength. This is because the body's normal response to mechanical stress, which stimulates bone formation, is reduced. Over time, this can lead to bone loss and increased risk of fractures. Gradual mobilization and physical therapy are crucial to restore bone strength and function.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density and strength",
        "correct": false,
        "response": "Prolonged immobilization typically leads to decreased bone density and strength due to the lack of mechanical stress, which is essential for stimulating bone formation. This can result in disuse atrophy and increased risk of fractures."
      },
      {
        "key": "B",
        "text": "Decreased bone density and strength",
        "correct": true,
        "response": "Prolonged immobilization reduces the mechanical stress on bones, leading to decreased bone density and strength. This is a result of disuse atrophy, where the body's normal response to mechanical stress is reduced, causing bone loss over time."
      },
      {
        "key": "C",
        "text": "No significant change in bone density",
        "correct": false,
        "response": "Prolonged immobilization does have a significant effect on bone density. The lack of mechanical stress can lead to disuse atrophy, resulting in decreased bone density and strength, which can increase the risk of fractures."
      }
    ],
    "pearls": [
      "Prolonged immobilization can cause disuse atrophy.",
      "Gradual mobilization and physical therapy are essential for recovery."
    ]
  },
  {
    "id": "bone-remodeling-in-childhood-fractures",
    "topic": "Bone healing and remodeling",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 7-year-old boy presents with a greenstick fracture of the ulna after falling off a playground swing. X-rays confirm the diagnosis.",
    "question": "Why do greenstick fractures in children typically heal faster than similar fractures in adults?",
    "explainer": "Children have a higher rate of bone turnover and more active osteoblasts and osteoclasts, which contribute to faster bone healing. Additionally, the periosteum in children is thicker and more vascular, providing a rich source of progenitor cells that can quickly form new bone. This accelerated healing process is why greenstick fractures in children often heal more rapidly than in adults.",
    "options": [
      {
        "key": "A",
        "text": "Children have a slower rate of bone turnover",
        "correct": false,
        "response": "Children actually have a higher rate of bone turnover compared to adults. This increased activity of osteoblasts and osteoclasts contributes to faster bone healing, especially in the case of greenstick fractures."
      },
      {
        "key": "B",
        "text": "Children have a more active periosteum",
        "correct": true,
        "response": "The periosteum in children is thicker and more vascular, providing a rich source of progenitor cells that can quickly form new bone. This active periosteum contributes to the faster healing of greenstick fractures in children."
      },
      {
        "key": "C",
        "text": "Children have less dense bones",
        "correct": false,
        "response": "While children's bones may be less dense than adults, this is not the primary reason for faster healing in greenstick fractures. The key factors are the higher rate of bone turnover and the more active periosteum in children."
      }
    ],
    "pearls": [
      "Children have a higher rate of bone turnover.",
      "The periosteum in children is more active and vascular."
    ]
  },
  {
    "id": "cartilage-wear-in-knee-osteoarthritis",
    "topic": "Cartilage biology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 65-year-old woman presents with knee pain that has been worsening over the past year. She reports difficulty in climbing stairs and standing for long periods.",
    "question": "What is the primary reason cartilage in the knee joint degrades over time in this patient?",
    "explainer": "Cartilage in the knee joint is avascular and aneural, meaning it has no direct blood supply or nerve endings. Over time, repetitive mechanical stress and the body's inflammatory responses can break down the extracellular matrix, leading to cartilage degradation. This process is exacerbated by factors like age, obesity, and previous joint injuries.",
    "options": [
      {
        "key": "A",
        "text": "Increased blood flow to the joint",
        "correct": false,
        "response": "Cartilage is avascular, so increased blood flow directly to the cartilage is not possible. Instead, mechanical stress and inflammation are the key factors in cartilage degradation."
      },
      {
        "key": "B",
        "text": "Repetitive mechanical stress and inflammation",
        "correct": true,
        "response": "Repetitive mechanical stress and inflammation damage the extracellular matrix of the cartilage, leading to its degradation over time. This is a common cause of osteoarthritis in the knee joint."
      },
      {
        "key": "C",
        "text": "Decreased nerve supply to the joint",
        "correct": false,
        "response": "Cartilage is aneural, meaning it has no nerve supply. Therefore, a decrease in nerve supply does not directly affect cartilage degradation. The primary factors are mechanical stress and inflammation."
      }
    ],
    "pearls": [
      "Cartilage is avascular and aneural.",
      "Mechanical stress and inflammation are key factors in cartilage degradation."
    ]
  },
  {
    "id": "cartilage-repair-mechanisms",
    "topic": "Cartilage biology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 28-year-old male athlete presents with a knee injury after a sudden twist while playing soccer. He reports significant pain and swelling in the knee.",
    "question": "Why does cartilage have limited self-repair capabilities after an injury?",
    "explainer": "Cartilage has limited self-repair capabilities because it is avascular and aneural. Without a direct blood supply, the delivery of essential nutrients and growth factors is limited. Additionally, the low metabolic rate of chondrocytes (the cells in cartilage) means they have limited capacity to regenerate the extracellular matrix.",
    "options": [
      {
        "key": "A",
        "text": "High metabolic rate of chondrocytes",
        "correct": false,
        "response": "Chondrocytes, the cells in cartilage, have a low metabolic rate. This low metabolic rate limits their ability to produce new extracellular matrix and repair damage."
      },
      {
        "key": "B",
        "text": "Avascularity of cartilage",
        "correct": true,
        "response": "Cartilage is avascular, meaning it lacks a direct blood supply. This limits the delivery of nutrients and growth factors necessary for repair, making it difficult for cartilage to heal after injury."
      },
      {
        "key": "C",
        "text": "High nerve supply to cartilage",
        "correct": false,
        "response": "Cartilage is aneural, meaning it has no nerve supply. The presence or absence of nerves does not directly affect the repair capabilities of cartilage, which are primarily limited by its avascular nature and low metabolic rate."
      }
    ],
    "pearls": [
      "Cartilage is avascular and aneural.",
      "Low metabolic rate of chondrocytes limits repair."
    ]
  },
  {
    "id": "cartilage-degradation-in-osteoarthritis",
    "topic": "Cartilage biology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 70-year-old man presents with chronic hip pain. He has a history of hip arthritis and has noticed increasing stiffness and pain over the past few years.",
    "question": "What cellular process is primarily responsible for the degradation of cartilage in osteoarthritis?",
    "explainer": "In osteoarthritis, the primary cellular process responsible for cartilage degradation is the increased production of matrix metalloproteinases (MMPs) and aggrecanases by chondrocytes. These enzymes break down the extracellular matrix, leading to the loss of cartilage and subsequent joint pain and stiffness.",
    "options": [
      {
        "key": "A",
        "text": "Increased production of collagen",
        "correct": false,
        "response": "While collagen is a key component of cartilage, increased production of collagen is not the primary issue in osteoarthritis. Instead, the increased production of matrix-degrading enzymes is the main problem."
      },
      {
        "key": "B",
        "text": "Increased production of matrix metalloproteinases (MMPs) and aggrecanases",
        "correct": true,
        "response": "Matrix metalloproteinases (MMPs) and aggrecanases are enzymes produced by chondrocytes that break down the extracellular matrix of cartilage. In osteoarthritis, the increased production of these enzymes leads to cartilage degradation."
      },
      {
        "key": "C",
        "text": "Decreased production of synovial fluid",
        "correct": false,
        "response": "Synovial fluid is important for joint lubrication, but its decreased production is not the primary cellular process responsible for cartilage degradation in osteoarthritis. The main issue is the increased production of matrix-degrading enzymes."
      }
    ],
    "pearls": [
      "Matrix metalloproteinases (MMPs) and aggrecanases break down cartilage.",
      "Increased production of these enzymes is a hallmark of osteoarthritis."
    ]
  },
  {
    "id": "cartilage-matrix-composition",
    "topic": "Cartilage biology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old woman presents with knee pain after a minor fall. She has a history of mild osteoarthritis and is concerned about the long-term health of her knee cartilage.",
    "question": "What is the primary component of the cartilage matrix that provides its compressive strength?",
    "explainer": "The primary component of the cartilage matrix that provides its compressive strength is proteoglycans, particularly aggrecan. Aggrecan is a large proteoglycan that binds to hyaluronic acid to form large aggregates, which trap water and provide the cartilage with its ability to resist compressive forces.",
    "options": [
      {
        "key": "A",
        "text": "Collagen fibers",
        "correct": false,
        "response": "While collagen fibers are crucial for the tensile strength and structural framework of cartilage, they are not the primary component responsible for its compressive strength. That role is played by proteoglycans, particularly aggrecan."
      },
      {
        "key": "B",
        "text": "Proteoglycans (aggrecan)",
        "correct": true,
        "response": "Proteoglycans, particularly aggrecan, are the primary components that provide the compressive strength of cartilage. Aggrecan aggregates trap water, which helps resist compressive forces and maintain the matrix's integrity."
      },
      {
        "key": "C",
        "text": "Elastin fibers",
        "correct": false,
        "response": "Elastin fibers are not a major component of cartilage. They are more commonly found in elastic tissues like blood vessels and skin, where they provide elasticity and recoil. In cartilage, proteoglycans are the key components for compressive strength."
      }
    ],
    "pearls": [
      "Aggrecan is the primary proteoglycan in cartilage.",
      "Aggrecan aggregates trap water, providing compressive strength."
    ]
  },
  {
    "id": "chondrocyte-function-in-cartilage",
    "topic": "Cartilage biology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 55-year-old woman with a history of knee pain is diagnosed with early-stage osteoarthritis. She is interested in understanding the role of chondrocytes in maintaining cartilage health.",
    "question": "What is the primary function of chondrocytes in maintaining cartilage health?",
    "explainer": "Chondrocytes are the only cell type found in cartilage and are responsible for maintaining the extracellular matrix. Their primary function is to produce and maintain the matrix components, such as collagen and proteoglycans, which provide the structural and functional integrity of the cartilage.",
    "options": [
      {
        "key": "A",
        "text": "To provide a blood supply to the cartilage",
        "correct": false,
        "response": "Cartilage is avascular, meaning it lacks a direct blood supply. Chondrocytes do not provide a blood supply but instead maintain the extracellular matrix by producing and maintaining matrix components."
      },
      {
        "key": "B",
        "text": "To produce and maintain the extracellular matrix",
        "correct": true,
        "response": "Chondrocytes are responsible for producing and maintaining the extracellular matrix, which includes collagen and proteoglycans. This matrix provides the structural and functional integrity of the cartilage, essential for its role in load-bearing and joint function."
      },
      {
        "key": "C",
        "text": "To produce synovial fluid",
        "correct": false,
        "response": "Synovial fluid is produced by the synovial membrane, not by chondrocytes. Chondrocytes are responsible for maintaining the extracellular matrix of the cartilage, which is crucial for joint function and health."
      }
    ],
    "pearls": [
      "Chondrocytes maintain the extracellular matrix.",
      "Matrix components include collagen and proteoglycans."
    ]
  },
  {
    "id": "ligament-biology-in-acute-sprain",
    "topic": "Ligament and tendon biology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 28-year-old female runner presents with acute ankle pain after twisting her ankle during a race. She has swelling and tenderness over the lateral malleolus.",
    "question": "What is the primary biological mechanism that causes the initial swelling in an acute ligament sprain?",
    "explainer": "When a ligament is sprained, the immediate response is an inflammatory reaction. This involves the release of chemical mediators like histamine and prostaglandins, which increase blood vessel permeability. Increased permeability allows fluid and white blood cells to leak into the surrounding tissue, causing swelling and providing a protective mechanism to immobilize the injured area.",
    "options": [
      {
        "key": "A",
        "text": "Contraction of the ligament fibers",
        "correct": false,
        "response": "Ligament fibers do not contract; they are composed of dense regular connective tissue. Contraction is a property of muscle fibers, not ligaments."
      },
      {
        "key": "B",
        "text": "Inflammatory response and increased vascular permeability",
        "correct": true,
        "response": "The inflammatory response is the body's immediate reaction to injury. It involves the release of chemical mediators that increase vascular permeability, leading to swelling and the influx of immune cells to begin the healing process."
      },
      {
        "key": "C",
        "text": "Fibrin clot formation in the damaged area",
        "correct": false,
        "response": "While fibrin clots do form as part of the healing process, they are not the primary cause of the initial swelling. The initial swelling is due to the inflammatory response and increased vascular permeability."
      }
    ],
    "pearls": [
      "Inflammation is the body's first line of defense against injury.",
      "Increased vascular permeability is a key feature of the inflammatory response."
    ]
  },
  {
    "id": "tendon-biology-and-healing",
    "topic": "Ligament and tendon biology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old male construction worker presents with chronic pain in his wrist after a fall on an outstretched hand six months ago. He has a history of repetitive strain injuries.",
    "question": "Why do tendons heal more slowly than other tissues after an injury?",
    "explainer": "Tendons have a relatively poor blood supply compared to other tissues. This reduced blood flow means fewer nutrients and oxygen are delivered to the injured area, which slows down the healing process. Additionally, the dense collagen fibers in tendons are tightly packed, making it difficult for new cells and fibers to integrate and remodel effectively.",
    "options": [
      {
        "key": "A",
        "text": "Tendons have a high metabolic rate",
        "correct": false,
        "response": "Tendons actually have a low metabolic rate. This low metabolic activity, combined with a poor blood supply, contributes to their slower healing process."
      },
      {
        "key": "B",
        "text": "Tendons have a poor blood supply",
        "correct": true,
        "response": "The poor blood supply to tendons means fewer nutrients and oxygen are available for healing. This, along with the dense collagen structure, makes tendon healing a slower and more challenging process."
      },
      {
        "key": "C",
        "text": "Tendons have a high density of nerve fibers",
        "correct": false,
        "response": "While tendons do have some nerve fibers, the density of nerve fibers does not significantly impact their healing rate. The primary factor is the poor blood supply and the dense collagen structure."
      }
    ],
    "pearls": [
      "Tendons heal more slowly due to their poor blood supply.",
      "The dense collagen structure of tendons makes remodeling difficult."
    ]
  },
  {
    "id": "mechanics-of-ligament-injury",
    "topic": "Ligament and tendon biology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 16-year-old male soccer player presents with knee pain after a sudden change in direction during a game. He has tenderness over the medial aspect of his knee.",
    "question": "What mechanical principle explains the tearing of the medial collateral ligament (MCL) in this scenario?",
    "explainer": "The MCL is located on the inner side of the knee and resists forces that push the knee inward. During a sudden change in direction, especially if the foot is planted, the knee can be forced into valgus (outward) stress. This excessive stress can exceed the strength of the MCL, leading to a tear. The mechanical principle is the application of an external force that exceeds the tensile strength of the ligament.",
    "options": [
      {
        "key": "A",
        "text": "Increased tensile strength of the MCL",
        "correct": false,
        "response": "The MCL does not have increased tensile strength; rather, it is the application of excessive force that causes the tear. The ligament is torn when the force exceeds its tensile strength."
      },
      {
        "key": "B",
        "text": "Excessive valgus stress on the knee",
        "correct": true,
        "response": "Valgus stress, which is an outward force on the knee, can exceed the tensile strength of the MCL, leading to a tear. This is a common mechanism of injury in sports that involve sudden changes in direction."
      },
      {
        "key": "C",
        "text": "Compression of the knee joint",
        "correct": false,
        "response": "Compression of the knee joint does not typically cause MCL tears. MCL injuries are more commonly associated with valgus stress, which stretches and potentially tears the ligament."
      }
    ],
    "pearls": [
      "Valgus stress is a common cause of MCL tears.",
      "Tensile strength is the key factor in ligament injuries."
    ]
  },
  {
    "id": "ligament-biology-and-remodeling",
    "topic": "Ligament and tendon biology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 32-year-old female dancer presents with chronic ankle instability after multiple sprains over the past few years. She has a history of ligamentous laxity.",
    "question": "What biological process is primarily responsible for the chronic instability in this patient's ankle?",
    "explainer": "Chronic ankle instability often results from incomplete healing and remodeling of the ligaments after repeated sprains. During the healing process, the ligaments may not fully regain their original strength and elasticity. This can lead to a condition called ligamentous laxity, where the ligaments are looser and less capable of stabilizing the joint.",
    "options": [
      {
        "key": "A",
        "text": "Increased collagen synthesis",
        "correct": false,
        "response": "While increased collagen synthesis is part of the healing process, it is not the primary reason for chronic instability. The key issue is the incomplete remodeling and loss of ligament strength and elasticity."
      },
      {
        "key": "B",
        "text": "Incomplete remodeling and loss of ligament strength",
        "correct": true,
        "response": "Incomplete remodeling and the subsequent loss of ligament strength and elasticity are the primary reasons for chronic instability. This can lead to a cycle of repeated sprains and further weakening of the ligaments."
      },
      {
        "key": "C",
        "text": "Excessive fibroblast activity",
        "correct": false,
        "response": "Fibroblast activity is important for the production of collagen during healing, but excessive activity alone does not explain the chronic instability. The key issue is the incomplete remodeling and loss of ligament strength."
      }
    ],
    "pearls": [
      "Incomplete remodeling leads to chronic ligament instability.",
      "Ligament strength and elasticity are crucial for joint stability."
    ]
  },
  {
    "id": "tendon-biology-and-repetitive-strain",
    "topic": "Ligament and tendon biology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 50-year-old office worker presents with chronic wrist pain after years of repetitive keyboard use. She has a history of carpal tunnel syndrome.",
    "question": "What biomechanical principle explains the development of tendonitis in the wrist from repetitive strain?",
    "explainer": "Repetitive strain on tendons can lead to microtears and inflammation. Over time, these microtears can accumulate and cause the tendon to become thickened and painful. The biomechanical principle is the repetitive application of force, which exceeds the tendon's ability to recover, leading to a chronic inflammatory state and tendonitis.",
    "options": [
      {
        "key": "A",
        "text": "Increased tendon elasticity",
        "correct": false,
        "response": "Tendons do not become more elastic with repetitive strain; they become inflamed and damaged. The repetitive force leads to microtears and inflammation, not increased elasticity."
      },
      {
        "key": "B",
        "text": "Repetitive microtears and inflammation",
        "correct": true,
        "response": "Repetitive strain causes microtears in the tendon, which can lead to inflammation and chronic tendonitis. The tendon does not have enough time to heal between stress events, leading to a cumulative effect of damage."
      },
      {
        "key": "C",
        "text": "Reduced blood flow to the tendon",
        "correct": false,
        "response": "While reduced blood flow can contribute to tendon healing issues, it is not the primary biomechanical principle explaining the development of tendonitis from repetitive strain. The key factor is the repetitive microtears and inflammation."
      }
    ],
    "pearls": [
      "Repetitive strain leads to microtears and inflammation.",
      "Tendonitis is a result of cumulative damage over time."
    ]
  },
  {
    "id": "muscle-fatigue-in-elderly",
    "topic": "Muscle physiology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 75-year-old woman complains of increasing muscle fatigue when climbing stairs. She has no history of significant illness.",
    "question": "What is the primary reason for her muscle fatigue during physical activity?",
    "explainer": "Muscle fatigue in the elderly is often due to a decrease in the number and size of muscle fibers, particularly fast-twitch fibers, which are responsible for quick, powerful movements. This is compounded by a reduction in mitochondrial function, leading to less efficient energy production.",
    "options": [
      {
        "key": "A",
        "text": "Decreased muscle fiber size and number",
        "correct": true,
        "response": "This is correct. As we age, we lose muscle mass and the size and number of muscle fibers decrease, especially fast-twitch fibers. This leads to reduced strength and increased fatigue."
      },
      {
        "key": "B",
        "text": "Increased nerve conduction velocity",
        "correct": false,
        "response": "This is incorrect. Nerve conduction velocity generally does not increase with age; in fact, it can decrease due to degenerative changes in the nervous system."
      },
      {
        "key": "C",
        "text": "Increased glycogen stores",
        "correct": false,
        "response": "This is incorrect. Glycogen stores typically decrease with age, not increase, which contributes to reduced energy availability during physical activity."
      }
    ],
    "pearls": [
      "Muscle fatigue in the elderly is often due to sarcopenia, the loss of muscle mass and function.",
      "Fast-twitch muscle fibers are particularly affected by aging."
    ]
  },
  {
    "id": "muscle-contracture-after-injury",
    "topic": "Muscle physiology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old man presents with a painful contracture in his biceps after a fall. He has limited range of motion and significant pain.",
    "question": "What is the most likely physiological mechanism causing his muscle contracture?",
    "explainer": "A muscle contracture can occur when there is an imbalance between the excitation and relaxation processes in muscle fibers. This can be due to a lack of ATP, which is necessary for the detachment of myosin heads from actin filaments, leading to a sustained contraction.",
    "options": [
      {
        "key": "A",
        "text": "Lack of ATP",
        "correct": true,
        "response": "This is correct. ATP is required for the detachment of myosin heads from actin filaments. Without sufficient ATP, the muscle fibers remain in a contracted state, leading to a contracture."
      },
      {
        "key": "B",
        "text": "Excess calcium release",
        "correct": false,
        "response": "This is incorrect. While excess calcium can lead to muscle contraction, it is the lack of ATP that prevents the relaxation of the muscle fibers, causing a sustained contraction."
      },
      {
        "key": "C",
        "text": "Increased acetylcholine release",
        "correct": false,
        "response": "This is incorrect. Increased acetylcholine release would lead to increased muscle contraction, but it is the lack of ATP that prevents the muscle from relaxing and causes the contracture."
      }
    ],
    "pearls": [
      "Muscle contractures can be caused by a lack of ATP, which is essential for muscle relaxation.",
      "Sustained muscle contraction can lead to pain and limited range of motion."
    ]
  },
  {
    "id": "muscle-cramps-in-athletes",
    "topic": "Muscle physiology",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 28-year-old male athlete experiences frequent muscle cramps during long-distance runs. He is otherwise healthy and trains regularly.",
    "question": "What is the most likely cause of his muscle cramps?",
    "explainer": "Muscle cramps in athletes are often due to electrolyte imbalances, particularly a loss of sodium and potassium. These electrolytes are crucial for maintaining the electrochemical gradients necessary for muscle contraction and relaxation.",
    "options": [
      {
        "key": "A",
        "text": "Electrolyte imbalance",
        "correct": true,
        "response": "This is correct. Loss of electrolytes, especially sodium and potassium, can disrupt the electrochemical gradients in muscle cells, leading to involuntary muscle contractions or cramps."
      },
      {
        "key": "B",
        "text": "Increased lactic acid production",
        "correct": false,
        "response": "This is incorrect. While increased lactic acid can cause muscle fatigue, it is the electrolyte imbalance that is more directly responsible for muscle cramps."
      },
      {
        "key": "C",
        "text": "Dehydration",
        "correct": false,
        "response": "This is incorrect. Dehydration can contribute to electrolyte imbalances, but it is the specific loss of electrolytes that is the primary cause of muscle cramps."
      }
    ],
    "pearls": [
      "Electrolyte imbalances, particularly sodium and potassium, are common causes of muscle cramps in athletes.",
      "Maintaining proper hydration and electrolyte balance can help prevent muscle cramps."
    ]
  },
  {
    "id": "muscle-wasting-in-bedridden-patients",
    "topic": "Muscle physiology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old woman who has been bedridden for several months after a hip fracture is noticed to have significant muscle wasting in her lower limbs.",
    "question": "What is the primary mechanism causing her muscle wasting?",
    "explainer": "Muscle wasting, or atrophy, in bedridden patients is primarily due to the lack of mechanical loading on the muscles. This leads to a reduction in protein synthesis and an increase in protein degradation, resulting in a loss of muscle mass and strength.",
    "options": [
      {
        "key": "A",
        "text": "Lack of mechanical loading",
        "correct": true,
        "response": "This is correct. Muscles require mechanical loading to maintain protein synthesis and prevent atrophy. Without it, the balance shifts toward protein degradation, leading to muscle wasting."
      },
      {
        "key": "B",
        "text": "Decreased hormonal activity",
        "correct": false,
        "response": "This is incorrect. While hormonal changes can affect muscle mass, the primary mechanism in bedridden patients is the lack of mechanical loading on the muscles."
      },
      {
        "key": "C",
        "text": "Increased muscle fiber recruitment",
        "correct": false,
        "response": "This is incorrect. Muscle fiber recruitment is typically reduced in bedridden patients due to inactivity, not increased. This reduction in activity leads to atrophy."
      }
    ],
    "pearls": [
      "Muscle atrophy in bedridden patients is primarily due to the lack of mechanical loading on the muscles.",
      "Regular physical activity is essential to maintain muscle mass and strength."
    ]
  },
  {
    "id": "muscle-hypertrophy-in-weightlifters",
    "topic": "Muscle physiology",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 30-year-old male weightlifter has noticed significant muscle hypertrophy in his arms and shoulders over the past year of consistent training.",
    "question": "What is the primary mechanism driving his muscle hypertrophy?",
    "explainer": "Muscle hypertrophy in weightlifters is primarily driven by mechanical tension, which causes damage to muscle fibers. This damage triggers a repair process involving satellite cells that lead to an increase in muscle fiber size and number, resulting in hypertrophy.",
    "options": [
      {
        "key": "A",
        "text": "Increased blood flow",
        "correct": false,
        "response": "This is incorrect. While increased blood flow can support muscle growth, the primary mechanism is the mechanical tension that causes micro-damage and triggers repair processes."
      },
      {
        "key": "B",
        "text": "Mechanical tension",
        "correct": true,
        "response": "This is correct. Mechanical tension, such as that produced during weightlifting, causes micro-damage to muscle fibers, which triggers a repair process involving satellite cells and leads to muscle hypertrophy."
      },
      {
        "key": "C",
        "text": "Increased metabolic rate",
        "correct": false,
        "response": "This is incorrect. While increased metabolic rate can support muscle growth, the primary mechanism driving hypertrophy is the mechanical tension that causes muscle damage and subsequent repair."
      }
    ],
    "pearls": [
      "Mechanical tension is the primary driver of muscle hypertrophy in weightlifters.",
      "Micro-damage to muscle fibers triggers a repair process that leads to increased muscle size and strength."
    ]
  },
  {
    "id": "basic-biomechanics-bone-strength",
    "topic": "Biomechanics basics",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male construction worker presents with a painful, swollen left wrist after falling from a ladder and landing on an outstretched hand.",
    "question": "Which biomechanical principle primarily explains the high risk of wrist fractures in this scenario?",
    "explainer": "When a person lands on an outstretched hand, the force is transmitted up the forearm to the wrist. The wrist bones, particularly the distal radius, are under significant compressive and bending forces. The bone's ability to withstand these forces depends on its structure and density.",
    "options": [
      {
        "key": "A",
        "text": "Torsional stress",
        "correct": false,
        "response": "Torsional stress involves twisting forces, which are not the primary force in this scenario. The main force is compressive and bending, which affects the wrist differently."
      },
      {
        "key": "B",
        "text": "Compressive and bending forces",
        "correct": true,
        "response": "The force from landing on an outstretched hand is primarily compressive and bending. These forces can exceed the bone's strength, leading to fractures, especially in the distal radius of the wrist."
      },
      {
        "key": "C",
        "text": "Shear stress",
        "correct": false,
        "response": "Shear stress involves forces that act parallel to the surface of the bone, causing layers to slide past each other. While shear stress can occur, it is not the primary force in this scenario."
      }
    ],
    "pearls": [
      "Compressive and bending forces are common in wrist injuries from falls.",
      "Bone density and structure play a crucial role in fracture risk."
    ]
  },
  {
    "id": "biomechanics-ligament-injury",
    "topic": "Biomechanics basics",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 22-year-old female college basketball player presents with acute knee pain and instability after pivoting during a game. She heard a popping sound and cannot bear weight on the affected leg.",
    "question": "Which biomechanical mechanism is most likely responsible for her knee injury?",
    "explainer": "When a player pivots, the knee experiences a combination of rotational and valgus forces. The anterior cruciate ligament (ACL) is particularly vulnerable to these forces because it stabilizes the knee against anterior translation and rotational movements.",
    "options": [
      {
        "key": "A",
        "text": "Axial loading",
        "correct": false,
        "response": "Axial loading involves direct compression along the long axis of the bone. While this can cause injuries, it is not the primary mechanism in a pivoting injury, which involves more complex forces."
      },
      {
        "key": "B",
        "text": "Rotational and valgus forces",
        "correct": true,
        "response": "Rotational and valgus forces are the primary biomechanical mechanisms in a pivoting injury. These forces can cause the ACL to tear, leading to instability and pain."
      },
      {
        "key": "C",
        "text": "Hyperextension",
        "correct": false,
        "response": "Hyperextension involves excessive backward bending of the knee. While it can cause injuries, it is less common in a pivoting scenario, where rotational and valgus forces are more prevalent."
      }
    ],
    "pearls": [
      "Rotational and valgus forces are common in ACL injuries.",
      "The ACL stabilizes the knee against anterior translation and rotational movements."
    ]
  },
  {
    "id": "biomechanics-spinal-compression",
    "topic": "Biomechanics basics",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 45-year-old male office worker presents with lower back pain after lifting a heavy box from the ground. He describes a sudden, sharp pain in his lower back.",
    "question": "Which biomechanical principle explains the mechanism of his lower back pain?",
    "explainer": "Lifting a heavy object from the ground involves significant compressive forces on the spinal column, particularly the lumbar vertebrae. The intervertebral discs, which act as shock absorbers, can be subjected to excessive pressure, leading to pain and potential injury.",
    "options": [
      {
        "key": "A",
        "text": "Torsional stress",
        "correct": false,
        "response": "Torsional stress involves twisting forces, which are not the primary concern in lifting a heavy object. The main issue is the compressive force on the spine."
      },
      {
        "key": "B",
        "text": "Compressive forces",
        "correct": true,
        "response": "Lifting a heavy object from the ground places significant compressive forces on the lumbar vertebrae and intervertebral discs. This can lead to pain and potential disc herniation or vertebral fractures."
      },
      {
        "key": "C",
        "text": "Shear stress",
        "correct": false,
        "response": "Shear stress involves forces that act parallel to the surface of the bone, causing layers to slide past each other. While shear stress can play a role, it is not the primary concern in this scenario."
      }
    ],
    "pearls": [
      "Compressive forces are a major factor in lower back pain from lifting.",
      "Intervertebral discs act as shock absorbers and can be injured by excessive compressive forces."
    ]
  },
  {
    "id": "biomechanics-ankle-sprain",
    "topic": "Biomechanics basics",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 28-year-old male runner presents with acute ankle pain and swelling after stepping on an uneven surface during a race. He describes a popping sensation and difficulty bearing weight.",
    "question": "Which biomechanical mechanism is most likely responsible for his ankle injury?",
    "explainer": "Stepping on an uneven surface can cause the ankle to invert, leading to excessive stretching or tearing of the lateral ligaments. The anterior talofibular ligament (ATFL) is the most commonly injured in this scenario due to its position and function.",
    "options": [
      {
        "key": "A",
        "text": "Plantarflexion and inversion",
        "correct": true,
        "response": "Plantarflexion and inversion are the primary biomechanical mechanisms in an ankle sprain. These movements stretch the lateral ligaments, particularly the ATFL, leading to injury and pain."
      },
      {
        "key": "B",
        "text": "Dorsiflexion and eversion",
        "correct": false,
        "response": "Dorsiflexion and eversion involve the opposite movements of plantarflexion and inversion. While these movements can cause injuries, they are less common in the context of stepping on an uneven surface."
      },
      {
        "key": "C",
        "text": "Axial loading",
        "correct": false,
        "response": "Axial loading involves direct compression along the long axis of the bone. While this can cause injuries, it is not the primary mechanism in an ankle sprain, which involves more complex movements."
      }
    ],
    "pearls": [
      "Plantarflexion and inversion are common in ankle sprains.",
      "The ATFL is the most commonly injured ligament in the ankle."
    ]
  },
  {
    "id": "biomechanics-shoulder-dislocation",
    "topic": "Biomechanics basics",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 21-year-old male college football player presents with a painful, visibly deformed right shoulder after being tackled during a game. He was unable to move the shoulder and had a noticeable bulge near the acromion.",
    "question": "Which biomechanical mechanism is most likely responsible for his shoulder dislocation?",
    "explainer": "A tackle that applies a force to the shoulder can cause the humeral head to be pushed out of the glenoid fossa. This often occurs due to a combination of abduction, external rotation, and extension, which can stretch the glenohumeral ligaments and other stabilizing structures.",
    "options": [
      {
        "key": "A",
        "text": "Abduction and external rotation",
        "correct": true,
        "response": "Abduction and external rotation are the primary biomechanical mechanisms in a shoulder dislocation. These movements can cause the humeral head to be pushed out of the glenoid fossa, leading to dislocation and pain."
      },
      {
        "key": "B",
        "text": "Adduction and internal rotation",
        "correct": false,
        "response": "Adduction and internal rotation involve movements that bring the arm closer to the body. While these movements can cause injuries, they are less likely to result in a dislocation compared to abduction and external rotation."
      },
      {
        "key": "C",
        "text": "Axial loading",
        "correct": false,
        "response": "Axial loading involves direct compression along the long axis of the bone. While this can cause injuries, it is not the primary mechanism in a shoulder dislocation, which involves more complex movements."
      }
    ],
    "pearls": [
      "Abduction and external rotation are common in shoulder dislocations.",
      "The glenohumeral ligaments and other stabilizing structures are crucial in maintaining shoulder stability."
    ]
  },
  {
    "id": "bone-graft-healing",
    "topic": "Bone grafts and implants",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 45-year-old male patient has undergone a spinal fusion surgery using an autograft from his iliac crest. Two weeks post-surgery, the patient is concerned about the healing process.",
    "question": "What is the primary mechanism by which the autograft promotes bone healing and fusion in this patient?",
    "explainer": "Autografts promote bone healing through osteogenesis, osteoinduction, and osteoconduction. Osteogenesis involves the direct contribution of living bone cells from the graft, osteoinduction stimulates the formation of new bone by recruiting and activating bone-forming cells, and osteoconduction provides a scaffold for new bone to grow on.",
    "options": [
      {
        "key": "A",
        "text": "The graft provides a mechanical scaffold for new bone cells to grow on.",
        "correct": false,
        "response": "While the graft does provide a scaffold (osteoconduction), the primary mechanism is the combination of osteogenesis and osteoinduction, which actively promotes new bone formation."
      },
      {
        "key": "B",
        "text": "The graft stimulates the patient's own bone cells to form new bone.",
        "correct": true,
        "response": "This is correct. The graft contains living bone cells that can directly form new bone (osteogenesis) and also release growth factors that stimulate the patient's bone cells to form new bone (osteoinduction)."
      },
      {
        "key": "C",
        "text": "The graft suppresses inflammatory responses to promote healing.",
        "correct": false,
        "response": "While reducing inflammation is important, it is not the primary mechanism by which an autograft promotes bone healing. The main mechanisms are osteogenesis, osteoinduction, and osteoconduction."
      }
    ],
    "pearls": [
      "Autografts promote bone healing through osteogenesis, osteoinduction, and osteoconduction.",
      "Living bone cells and growth factors are crucial for new bone formation."
    ]
  },
  {
    "id": "allograft-immunogenicity",
    "topic": "Bone grafts and implants",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old female patient is scheduled for a knee replacement and is considering using an allograft for bone augmentation. She is concerned about the risk of rejection.",
    "question": "Why is the risk of immune rejection typically lower with allografts compared to organ transplants?",
    "explainer": "Allografts, unlike organ transplants, are primarily composed of bone matrix and have minimal cellular content. The lack of living cells reduces the antigenic load, which means the patient's immune system has fewer foreign cells to recognize and attack. Additionally, the bone matrix is less immunogenic than other tissues.",
    "options": [
      {
        "key": "A",
        "text": "The bone matrix of allografts is completely non-immunogenic.",
        "correct": false,
        "response": "While the bone matrix itself is less immunogenic, it is not completely non-immunogenic. The minimal cellular content and the nature of the bone matrix reduce, but do not eliminate, the risk of immune rejection."
      },
      {
        "key": "B",
        "text": "Allografts are processed to remove most of the cellular content, reducing the antigenic load.",
        "correct": true,
        "response": "This is correct. The processing of allografts to remove most of the cellular content significantly reduces the antigenic load, making the graft less likely to trigger an immune response."
      },
      {
        "key": "C",
        "text": "The immune system does not recognize bone as a foreign tissue.",
        "correct": false,
        "response": "The immune system can recognize bone as foreign, especially if it contains living cells. However, the reduced cellular content in allografts minimizes this risk."
      }
    ],
    "pearls": [
      "Processing allografts to remove cellular content reduces immune rejection.",
      "The bone matrix is less immunogenic than other tissues."
    ]
  },
  {
    "id": "implant-biocompatibility",
    "topic": "Bone grafts and implants",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 55-year-old male patient is undergoing hip replacement surgery using a titanium implant. The surgeon discusses the importance of biocompatibility.",
    "question": "What primarily ensures the biocompatibility of a titanium implant in bone tissue?",
    "explainer": "Biocompatibility of a titanium implant is ensured by its ability to integrate with the surrounding bone tissue without causing adverse reactions. Titanium forms a stable oxide layer (TiO2) on its surface, which is inert and non-toxic. This layer prevents the release of ions that could cause inflammation or toxic reactions, and it also provides a surface for bone cells to adhere and grow, promoting osseointegration.",
    "options": [
      {
        "key": "A",
        "text": "The shape of the implant allows for better mechanical fit with the bone.",
        "correct": false,
        "response": "While the shape of the implant is important for mechanical fit, the primary factor ensuring biocompatibility is the chemical properties of the implant's surface, particularly the stable oxide layer."
      },
      {
        "key": "B",
        "text": "The oxide layer on the titanium surface prevents toxic reactions and promotes bone cell adhesion.",
        "correct": true,
        "response": "This is correct. The oxide layer (TiO2) on titanium implants is crucial because it prevents the release of toxic ions and provides a surface for bone cells to adhere and grow, promoting osseointegration."
      },
      {
        "key": "C",
        "text": "The implant releases growth factors that stimulate bone growth.",
        "correct": false,
        "response": "While some implants can be coated with growth factors, the primary factor ensuring biocompatibility of a titanium implant is the stable oxide layer on its surface."
      }
    ],
    "pearls": [
      "Titanium's oxide layer ensures biocompatibility by being inert and non-toxic.",
      "The oxide layer promotes osseointegration by allowing bone cells to adhere."
    ]
  },
  {
    "id": "osteointegration-process",
    "topic": "Bone grafts and implants",
    "category": "Basic Science",
    "difficulty": "intermediate",
    "vignette": "A 40-year-old male patient has undergone a dental implant procedure. The dentist explains the process of osseointegration.",
    "question": "What is the main biological process that allows a dental implant to integrate with the jawbone?",
    "explainer": "Osseointegration is the direct structural and functional connection between living bone and the surface of a load-bearing artificial implant. This process involves bone cells (osteoblasts) adhering to the implant surface and depositing new bone matrix. The stable oxide layer on the implant surface provides a biocompatible surface for bone cells to interact with, leading to the formation of a strong, stable interface between the implant and the bone.",
    "options": [
      {
        "key": "A",
        "text": "The implant releases growth factors that stimulate bone cell proliferation.",
        "correct": false,
        "response": "While growth factors can enhance bone growth, the primary process of osseointegration involves the adherence of bone cells to the implant surface and the deposition of new bone matrix."
      },
      {
        "key": "B",
        "text": "Bone cells adhere to the implant surface and deposit new bone matrix.",
        "correct": true,
        "response": "This is correct. Osseointegration occurs when bone cells (osteoblasts) adhere to the implant surface and deposit new bone matrix, creating a strong, stable interface between the implant and the bone."
      },
      {
        "key": "C",
        "text": "The implant mechanically interlocks with the bone, providing stability.",
        "correct": false,
        "response": "While mechanical interlocking can contribute to stability, the primary biological process of osseointegration involves the adherence of bone cells to the implant surface and the deposition of new bone matrix."
      }
    ],
    "pearls": [
      "Osseointegration involves bone cells adhering to the implant surface.",
      "The stable oxide layer on the implant surface is crucial for biocompatibility."
    ]
  },
  {
    "id": "allograft-versus-autograft",
    "topic": "Bone grafts and implants",
    "category": "Basic Science",
    "difficulty": "beginner",
    "vignette": "A 30-year-old female patient is considering bone graft options for a complex tibial fracture. She asks about the differences between allografts and autografts.",
    "question": "What is a key advantage of using an autograft over an allograft in bone grafting?",
    "explainer": "An autograft, taken from the patient's own body, has a key advantage in terms of reduced risk of immune rejection. Since the graft is from the patient's own tissue, the immune system does not recognize it as foreign, reducing the risk of rejection and promoting better integration and healing. Additionally, autografts contain living bone cells and growth factors that can actively promote new bone formation.",
    "options": [
      {
        "key": "A",
        "text": "Autografts are easier to obtain and process.",
        "correct": false,
        "response": "While autografts are from the patient's own body, they often require an additional surgical site to harvest the graft, which can be more invasive and time-consuming."
      },
      {
        "key": "B",
        "text": "Autografts have a reduced risk of immune rejection.",
        "correct": true,
        "response": "This is correct. Since autografts are from the patient's own tissue, the immune system does not recognize them as foreign, reducing the risk of rejection and promoting better integration and healing."
      },
      {
        "key": "C",
        "text": "Autografts are more cost-effective than allografts.",
        "correct": false,
        "response": "While cost can vary, the additional surgical site required for harvesting an autograft can sometimes make it more expensive than using an allograft, which is typically pre-processed and available from a donor bank."
      }
    ],
    "pearls": [
      "Autografts reduce the risk of immune rejection.",
      "Autografts contain living bone cells and growth factors that promote healing."
    ]
  },
  {
    "id": "fracture-classification-bone-structure",
    "topic": "Fracture classification basics",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male construction worker fell from a ladder and landed on his wrist, causing immediate pain and swelling. X-rays show a fracture of the distal radius.",
    "question": "What type of fracture is most likely based on the mechanism of injury and the location?",
    "explainer": "The distal radius is a common site for fractures, especially in falls on an outstretched hand. The force of impact can cause the bone to break at its weakest point, which is often the distal end of the radius.",
    "options": [
      {
        "key": "A",
        "text": "Stress fracture",
        "correct": false,
        "response": "A stress fracture is typically caused by repetitive loading over time, not a single traumatic event like a fall. Stress fractures are more common in weight-bearing bones like the tibia or metatarsals."
      },
      {
        "key": "B",
        "text": "Colles' fracture",
        "correct": true,
        "response": "A Colles' fracture is a distal radius fracture that occurs when a person falls on an outstretched hand with the wrist in dorsiflexion. This is a classic mechanism for this type of fracture."
      },
      {
        "key": "C",
        "text": "Comminuted fracture",
        "correct": false,
        "response": "A comminuted fracture involves multiple bone fragments, which can occur in high-energy trauma. While possible, a simple Colles' fracture is more likely in this scenario."
      }
    ],
    "pearls": [
      "Colles' fractures are common in falls on an outstretched hand.",
      "The distal radius is a frequent site for fractures due to its structural properties."
    ]
  },
  {
    "id": "fracture-classification-age-factor",
    "topic": "Fracture classification basics",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 72-year-old female with a history of osteoporosis slipped on a wet floor and fell, resulting in hip pain and inability to bear weight. X-rays reveal a fracture of the femoral neck.",
    "question": "Why is a femoral neck fracture more likely to occur in this patient given her age and medical history?",
    "explainer": "Osteoporosis is a condition characterized by reduced bone density, making bones more brittle and susceptible to fractures. The femoral neck is a weak point in the hip, and the combination of osteoporosis and a fall increases the risk of fracture at this location.",
    "options": [
      {
        "key": "A",
        "text": "The femoral head is more prone to fracture due to its round shape.",
        "correct": false,
        "response": "The femoral head is indeed part of the hip joint, but it is the femoral neck that is more susceptible to fracture due to its smaller cross-sectional area and the leverage of the head."
      },
      {
        "key": "B",
        "text": "The femoral neck is a common site of weakness in osteoporotic bone.",
        "correct": true,
        "response": "The femoral neck is a critical area with a smaller cross-sectional area and less trabecular bone, making it more prone to fracture, especially in osteoporotic patients."
      },
      {
        "key": "C",
        "text": "The trochanteric region is the weakest part of the femur.",
        "correct": false,
        "response": "While the trochanteric region can also be affected by osteoporosis, the femoral neck is more commonly fractured due to its anatomical and biomechanical properties."
      }
    ],
    "pearls": [
      "Osteoporosis increases the risk of fractures, especially in structurally weak areas like the femoral neck.",
      "The femoral neck is a common site of hip fractures in the elderly."
    ]
  },
  {
    "id": "fracture-classification-mechanism-impact",
    "topic": "Fracture classification basics",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 22-year-old male soccer player collided with another player and landed awkwardly on his ankle, experiencing immediate pain and swelling. X-rays show a fracture of the lateral malleolus.",
    "question": "What type of fracture is most likely based on the mechanism of injury and the location?",
    "explainer": "The lateral malleolus is the distal end of the fibula and is a common site for fractures in ankle injuries. The mechanism of injury, such as a collision followed by an awkward landing, can cause excessive force on the lateral side of the ankle, leading to a fracture.",
    "options": [
      {
        "key": "A",
        "text": "Pilon fracture",
        "correct": false,
        "response": "A pilon fracture involves the tibial plafond and is typically caused by high-energy axial loading, such as a fall from a height. This is less likely in a sports-related collision."
      },
      {
        "key": "B",
        "text": "Lateral malleolus fracture",
        "correct": true,
        "response": "A lateral malleolus fracture is a common injury in sports, especially when there is a forceful impact on the lateral side of the ankle, causing the fibula to break at its distal end."
      },
      {
        "key": "C",
        "text": "Medial malleolus fracture",
        "correct": false,
        "response": "A medial malleolus fracture is also possible but less likely in this scenario. The lateral malleolus is more commonly affected due to the nature of the impact and the anatomy of the ankle."
      }
    ],
    "pearls": [
      "Lateral malleolus fractures are common in sports injuries.",
      "The lateral malleolus is the distal end of the fibula and a frequent site of ankle fractures."
    ]
  },
  {
    "id": "fracture-classification-pediatric-bones",
    "topic": "Fracture classification basics",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 7-year-old boy fell off his bicycle and landed on his arm, resulting in pain and swelling. X-rays show a fracture of the distal radius, but the fracture line does not extend through the growth plate.",
    "question": "Why is a greenstick fracture more likely in this patient given his age and the location of the fracture?",
    "explainer": "Children's bones are more flexible and have a higher water content compared to adult bones. This flexibility means that when a force is applied, the bone can bend and partially break, resulting in a greenstick fracture. The growth plate (physis) is also a weaker point in children, but in this case, the fracture did not extend through it.",
    "options": [
      {
        "key": "A",
        "text": "Comminuted fracture",
        "correct": false,
        "response": "A comminuted fracture involves multiple bone fragments and is more common in high-energy trauma. Children's bones are more flexible, making greenstick fractures more likely."
      },
      {
        "key": "B",
        "text": "Greenstick fracture",
        "correct": true,
        "response": "A greenstick fracture is characterized by a partial break in the bone, often seen in children due to the flexibility and resilience of their bones. The distal radius is a common site for this type of fracture."
      },
      {
        "key": "C",
        "text": "Spiral fracture",
        "correct": false,
        "response": "A spiral fracture is caused by a twisting force and is more common in adult bones. While it can occur in children, the flexibility of pediatric bones makes greenstick fractures more likely in this scenario."
      }
    ],
    "pearls": [
      "Children's bones are more flexible, leading to greenstick fractures.",
      "The distal radius is a common site for pediatric fractures."
    ]
  },
  {
    "id": "fracture-classification-pathological-bones",
    "topic": "Fracture classification basics",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old male with a known history of metastatic prostate cancer presents with sudden onset of back pain. X-rays show a fracture of the vertebral body.",
    "question": "What type of fracture is most likely in this patient given his medical history and the location of the fracture?",
    "explainer": "Metastatic cancer can weaken bones by destroying the normal bone structure, making them more susceptible to fractures. The vertebral body is a common site for metastatic disease, and even minor trauma can cause a fracture in this weakened bone.",
    "options": [
      {
        "key": "A",
        "text": "Compression fracture",
        "correct": true,
        "response": "A compression fracture occurs when the vertebral body collapses, often due to weakened bone from conditions like osteoporosis or metastatic cancer. In this patient, the history of metastatic disease increases the likelihood of a compression fracture."
      },
      {
        "key": "B",
        "text": "Burst fracture",
        "correct": false,
        "response": "A burst fracture involves the vertebral body and is typically caused by high-energy trauma, such as a fall from a height. While possible, the patient's history of metastatic cancer makes a compression fracture more likely."
      },
      {
        "key": "C",
        "text": "Stress fracture",
        "correct": false,
        "response": "A stress fracture is caused by repetitive loading and is more common in weight-bearing bones. In this case, the vertebral body is more likely to suffer a compression fracture due to the underlying bone weakness from metastatic disease."
      }
    ],
    "pearls": [
      "Metastatic cancer can weaken bones, leading to compression fractures.",
      "The vertebral body is a common site for compression fractures in patients with bone metastases."
    ]
  },
  {
    "id": "young-soccer-player-tibia-fracture",
    "topic": "Open vs closed fractures",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 14-year-old male soccer player presents to the emergency department after a fall during a match. He has a visible deformity in his lower leg and a laceration over the tibia.",
    "question": "What is the primary factor that differentiates an open from a closed fracture in this scenario?",
    "explainer": "The key difference between open and closed fractures lies in whether the bone has penetrated the skin. In an open fracture, the bone breaches the skin, creating a direct pathway from the outside environment to the bone. This increases the risk of infection and complicates treatment.",
    "options": [
      {
        "key": "A",
        "text": "The presence of a bruise",
        "correct": false,
        "response": "A bruise is a sign of soft tissue injury and hematoma formation but does not indicate whether the bone has penetrated the skin. An open fracture is defined by the bone breaking through the skin."
      },
      {
        "key": "B",
        "text": "The presence of a laceration over the bone",
        "correct": true,
        "response": "A laceration over the bone is a clear sign that the bone has penetrated the skin, making this an open fracture. This is a critical distinction because it significantly increases the risk of infection."
      },
      {
        "key": "C",
        "text": "The degree of pain",
        "correct": false,
        "response": "While pain is a symptom of a fracture, the degree of pain does not determine whether a fracture is open or closed. Pain can vary widely based on individual pain tolerance and the extent of soft tissue injury."
      }
    ],
    "pearls": [
      "An open fracture is defined by bone penetration through the skin.",
      "Open fractures have a higher risk of infection."
    ]
  },
  {
    "id": "elderly-fall-hip-fracture",
    "topic": "Open vs closed fractures",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "An 82-year-old woman falls at home and cannot get up. She has severe pain in her hip and a bruise on her thigh but no visible wounds.",
    "question": "Why is it important to rule out an open fracture in this patient?",
    "explainer": "Even in the absence of visible wounds, it is crucial to rule out an open fracture because the skin can be intact but the underlying soft tissues can be compromised. An open fracture increases the risk of infection and can lead to more severe complications if not promptly treated.",
    "options": [
      {
        "key": "A",
        "text": "To determine the need for surgical intervention",
        "correct": false,
        "response": "While surgical intervention may be necessary for both open and closed fractures, the primary reason to rule out an open fracture is to manage the risk of infection, not just the need for surgery."
      },
      {
        "key": "B",
        "text": "To assess the risk of infection",
        "correct": true,
        "response": "An open fracture creates a pathway for bacteria to enter the bone, significantly increasing the risk of infection. This risk is the primary concern that differentiates open from closed fractures."
      },
      {
        "key": "C",
        "text": "To evaluate the degree of pain",
        "correct": false,
        "response": "Pain assessment is important but does not differentiate between open and closed fractures. The presence of an open wound is the key factor in determining the type of fracture."
      }
    ],
    "pearls": [
      "Open fractures increase the risk of infection.",
      "Always assess for hidden wounds in suspected fractures."
    ]
  },
  {
    "id": "construction-worker-arm-fracture",
    "topic": "Open vs closed fractures",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male construction worker presents after a fall from a ladder. He has a swollen and deformed left forearm with a small puncture wound near the elbow.",
    "question": "What is the most likely mechanism that led to the puncture wound in this scenario?",
    "explainer": "In a fall, the force can cause the bone to break and pierce the skin, leading to a puncture wound. This is a hallmark of an open fracture, where the bone breaches the skin, increasing the risk of infection and complicating treatment.",
    "options": [
      {
        "key": "A",
        "text": "A foreign object piercing the skin",
        "correct": false,
        "response": "While a foreign object could cause a puncture wound, the scenario suggests that the bone itself has likely caused the wound. A puncture wound in the context of a deformed and swollen limb is more indicative of an open fracture."
      },
      {
        "key": "B",
        "text": "The bone piercing the skin",
        "correct": true,
        "response": "In a fall, the force can cause the bone to break and pierce the skin, leading to a puncture wound. This is a clear sign of an open fracture, where the bone breaches the skin and increases the risk of infection."
      },
      {
        "key": "C",
        "text": "A cut from a sharp tool",
        "correct": false,
        "response": "A cut from a sharp tool could cause a puncture wound, but the context of a deformed and swollen limb suggests that the injury is more likely due to the bone itself breaking and piercing the skin."
      }
    ],
    "pearls": [
      "A puncture wound near a deformed limb suggests an open fracture.",
      "Assess for open fractures in high-energy trauma."
    ]
  },
  {
    "id": "teen-car-accident-femur-fracture",
    "topic": "Open vs closed fractures",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 17-year-old male is brought to the emergency department after a high-speed car accident. He has a compound fracture of the femur with a large wound over the thigh.",
    "question": "What is the primary concern in managing this patient's open fracture?",
    "explainer": "The primary concern in managing an open fracture is preventing infection. The exposed bone and soft tissues are at high risk of contamination, which can lead to severe complications if not promptly addressed. Immediate wound care and broad-spectrum antibiotics are essential.",
    "options": [
      {
        "key": "A",
        "text": "Pain management",
        "correct": false,
        "response": "While pain management is important, the primary concern in an open fracture is preventing infection. Pain can be managed with analgesics, but infection can lead to more severe complications."
      },
      {
        "key": "B",
        "text": "Preventing infection",
        "correct": true,
        "response": "The exposed bone and soft tissues in an open fracture are at high risk of contamination. Immediate wound care, irrigation, and broad-spectrum antibiotics are crucial to prevent infection and its complications."
      },
      {
        "key": "C",
        "text": "Immobilizing the limb",
        "correct": false,
        "response": "Immobilizing the limb is important to prevent further injury, but the primary concern in an open fracture is the risk of infection. Immobilization is a secondary step in the management plan."
      }
    ],
    "pearls": [
      "Infection prevention is the primary concern in open fractures.",
      "Immediate wound care and antibiotics are essential."
    ]
  },
  {
    "id": "elderly-slipping-bathroom-wrist-fracture",
    "topic": "Open vs closed fractures",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "An 80-year-old woman slips in the bathroom and falls on her outstretched hand. She has a swollen and deformed wrist with no visible wounds.",
    "question": "Why is it important to carefully examine the skin in this patient's wrist?",
    "explainer": "Even in the absence of visible wounds, the skin and underlying soft tissues can be compromised in a fracture. A careful examination is necessary to rule out an open fracture, which increases the risk of infection and complicates treatment.",
    "options": [
      {
        "key": "A",
        "text": "To assess for bruising",
        "correct": false,
        "response": "Bruising is a common sign of soft tissue injury and hematoma formation but does not indicate whether the bone has penetrated the skin. The primary concern is to rule out an open fracture."
      },
      {
        "key": "B",
        "text": "To rule out an open fracture",
        "correct": true,
        "response": "A careful examination of the skin is essential to rule out an open fracture, where the bone has penetrated the skin. Even a small puncture wound can significantly increase the risk of infection."
      },
      {
        "key": "C",
        "text": "To evaluate the degree of swelling",
        "correct": false,
        "response": "Swelling is a common sign of inflammation and soft tissue injury but does not differentiate between open and closed fractures. The primary concern is to ensure the bone has not penetrated the skin."
      }
    ],
    "pearls": [
      "Always examine the skin to rule out open fractures.",
      "Even small wounds can indicate an open fracture."
    ]
  },
  {
    "id": "compartment-syndrome-post-fracture",
    "topic": "Compartment syndrome",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 25-year-old male presents to the emergency department after a motorcycle accident. He has a closed tibial shaft fracture and complains of severe pain and numbness in his lower leg.",
    "question": "What is the primary pathophysiological mechanism leading to compartment syndrome in this patient?",
    "explainer": "Compartment syndrome occurs when the pressure inside a closed fascial compartment exceeds the perfusion pressure, leading to reduced blood flow and tissue ischemia. This is often a result of bleeding or swelling within the compartment, which can be triggered by a fracture.",
    "options": [
      {
        "key": "A",
        "text": "Increased venous return",
        "correct": false,
        "response": "Increased venous return would actually decrease compartment pressure, as it helps to reduce the volume of fluid in the compartment. Compartment syndrome is caused by increased pressure, not reduced pressure."
      },
      {
        "key": "B",
        "text": "Decreased arterial perfusion",
        "correct": true,
        "response": "Decreased arterial perfusion is a direct result of increased compartment pressure. As the pressure rises, it compresses the blood vessels, reducing blood flow and leading to tissue ischemia, which is the hallmark of compartment syndrome."
      },
      {
        "key": "C",
        "text": "Muscle atrophy",
        "correct": false,
        "response": "Muscle atrophy involves the loss of muscle mass, which would reduce compartment pressure. Compartment syndrome is caused by increased pressure, not decreased pressure."
      }
    ],
    "pearls": [
      "Increased compartment pressure leads to decreased blood flow and tissue ischemia.",
      "Compartment syndrome is a surgical emergency due to the risk of permanent muscle and nerve damage."
    ]
  },
  {
    "id": "compartment-syndrome-risk-factors",
    "topic": "Compartment syndrome",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 40-year-old female is brought to the hospital after a high-impact car accident. She has multiple fractures, including a femur fracture. She is on multiple vasoconstrictive medications.",
    "question": "Which factor is most likely to increase her risk of developing compartment syndrome?",
    "explainer": "The risk of compartment syndrome is increased by factors that lead to increased tissue pressure or decreased perfusion pressure. Vasoconstrictive medications can reduce blood flow, making it harder for the body to maintain adequate perfusion in the face of increased compartment pressure.",
    "options": [
      {
        "key": "A",
        "text": "Use of vasoconstrictive medications",
        "correct": true,
        "response": "Vasoconstrictive medications can reduce blood flow, which is critical in maintaining perfusion pressure. When the pressure inside the compartment rises, reduced blood flow can lead to tissue ischemia and necrosis, increasing the risk of compartment syndrome."
      },
      {
        "key": "B",
        "text": "Elevation of the limb",
        "correct": false,
        "response": "Elevation of the limb can help reduce swelling by promoting venous return, which can potentially lower compartment pressure. However, it does not directly increase the risk of compartment syndrome."
      },
      {
        "key": "C",
        "text": "Application of a splint",
        "correct": false,
        "response": "While a splint can immobilize the limb and prevent further injury, it does not directly increase the risk of compartment syndrome. In fact, proper splinting can sometimes help manage swelling and pain."
      }
    ],
    "pearls": [
      "Vasoconstrictive medications can reduce blood flow, increasing the risk of compartment syndrome.",
      "Proper limb positioning and early recognition are crucial in managing potential compartment syndrome."
    ]
  },
  {
    "id": "compartment-syndrome-clinical-signs",
    "topic": "Compartment syndrome",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male is brought to the emergency room after a fall from a ladder. He has a distal radius fracture and complains of severe pain, pallor, and numbness in his hand.",
    "question": "Which clinical sign is most indicative of compartment syndrome in this patient?",
    "explainer": "The classic signs of compartment syndrome are the 5 Ps: pain, pallor, paresthesia, paralysis, and pulselessness. Pain, especially pain out of proportion to the injury, is often the earliest and most reliable sign.",
    "options": [
      {
        "key": "A",
        "text": "Pallor",
        "correct": false,
        "response": "Pallor can indicate reduced blood flow, but it is not the earliest or most specific sign of compartment syndrome. Pain, particularly pain out of proportion to the injury, is more indicative."
      },
      {
        "key": "B",
        "text": "Pain",
        "correct": true,
        "response": "Pain, especially pain that is out of proportion to the injury and worsens with passive stretch, is the earliest and most reliable sign of compartment syndrome. It is often the first clue that something is wrong."
      },
      {
        "key": "C",
        "text": "Paralysis",
        "correct": false,
        "response": "Paralysis is a late sign of compartment syndrome and indicates severe tissue ischemia. By the time paralysis occurs, significant damage has already been done. Early recognition of pain is crucial for timely intervention."
      }
    ],
    "pearls": [
      "Pain out of proportion to the injury is the earliest and most reliable sign of compartment syndrome.",
      "Early recognition and intervention are critical to prevent permanent damage."
    ]
  },
  {
    "id": "compartment-syndrome-pressure-threshold",
    "topic": "Compartment syndrome",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 50-year-old male is admitted to the hospital with a mid-shaft humerus fracture. He is on a vasodilator for hypertension. The compartment pressure is measured at 30 mmHg.",
    "question": "At what compartment pressure is the risk of developing compartment syndrome considered high?",
    "explainer": "The risk of compartment syndrome is high when the compartment pressure exceeds two-thirds of the diastolic blood pressure. This is because the pressure differential needed for adequate perfusion is compromised, leading to tissue ischemia.",
    "options": [
      {
        "key": "A",
        "text": "20 mmHg",
        "correct": false,
        "response": "A compartment pressure of 20 mmHg is generally not considered high enough to cause significant tissue ischemia. The risk of compartment syndrome is higher when the pressure exceeds two-thirds of the diastolic blood pressure."
      },
      {
        "key": "B",
        "text": "40 mmHg",
        "correct": true,
        "response": "A compartment pressure of 40 mmHg is often considered high and indicative of a significant risk of compartment syndrome. When the compartment pressure exceeds two-thirds of the diastolic blood pressure, the pressure differential needed for adequate perfusion is compromised, leading to tissue ischemia."
      },
      {
        "key": "C",
        "text": "60 mmHg",
        "correct": false,
        "response": "A compartment pressure of 60 mmHg is extremely high and would definitely indicate compartment syndrome, but the risk is already high at lower pressures, such as 40 mmHg, when it exceeds two-thirds of the diastolic blood pressure."
      }
    ],
    "pearls": [
      "Compartment pressure exceeding two-thirds of the diastolic blood pressure indicates a high risk of compartment syndrome.",
      "The pressure differential is crucial for maintaining adequate perfusion."
    ]
  },
  {
    "id": "compartment-syndrome-treatment",
    "topic": "Compartment syndrome",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 20-year-old male is brought to the emergency department after a skiing accident. He has a tibial plateau fracture and is experiencing severe pain, pallor, and paresthesia in his foot.",
    "question": "What is the most appropriate initial treatment for suspected compartment syndrome in this patient?",
    "explainer": "The most appropriate initial treatment for compartment syndrome is fasciotomy, which involves surgically opening the fascial compartments to relieve pressure. This is a surgical emergency because the high pressure can lead to irreversible tissue damage if not promptly addressed.",
    "options": [
      {
        "key": "A",
        "text": "Application of a compression bandage",
        "correct": false,
        "response": "A compression bandage can increase compartment pressure and exacerbate the condition. It is contraindicated in suspected compartment syndrome and can lead to further tissue damage."
      },
      {
        "key": "B",
        "text": "Fasciotomy",
        "correct": true,
        "response": "Fasciotomy is the definitive treatment for compartment syndrome. It involves making incisions in the fascia to relieve the high pressure and restore blood flow, preventing tissue ischemia and necrosis."
      },
      {
        "key": "C",
        "text": "Elevation and ice",
        "correct": false,
        "response": "Elevation and ice can help reduce swelling and pain, but they do not address the underlying high pressure in the compartment. Fasciotomy is necessary to relieve the pressure and prevent permanent damage."
      }
    ],
    "pearls": [
      "Fasciotomy is the definitive treatment for compartment syndrome.",
      "Prompt surgical intervention is crucial to prevent irreversible tissue damage."
    ]
  },
  {
    "id": "femoral-shaft-fracture-treatment",
    "topic": "Fracture stability and treatment principles",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male presents to the emergency department after a motor vehicle accident. He has a mid-shaft femoral fracture with significant displacement.",
    "question": "What is the primary reason for choosing intramedullary nailing over external fixation in this patient?",
    "explainer": "Intramedullary nailing provides better mechanical stability and alignment compared to external fixation. The intramedullary nail is inserted into the bone's medullary canal, providing internal support and allowing for early weight-bearing. External fixation, while useful in open fractures, is less stable and can lead to nonunion or malunion.",
    "options": [
      {
        "key": "A",
        "text": "External fixation allows for easier wound care.",
        "correct": false,
        "response": "While external fixation can allow for easier wound care, it is less stable and can lead to complications such as nonunion or malunion. Intramedullary nailing provides better mechanical stability and alignment."
      },
      {
        "key": "B",
        "text": "Intramedullary nailing provides better mechanical stability.",
        "correct": true,
        "response": "Intramedullary nailing is inserted into the bone's medullary canal, providing internal support and allowing for better alignment and stability. This is crucial for successful healing and early weight-bearing."
      },
      {
        "key": "C",
        "text": "Intramedullary nailing is less invasive.",
        "correct": false,
        "response": "Intramedullary nailing is actually more invasive than external fixation because it requires the insertion of a nail into the bone's medullary canal. However, it provides better mechanical stability and alignment, which outweighs the invasiveness."
      }
    ],
    "pearls": [
      "Intramedullary nailing is preferred for femoral shaft fractures due to its stability.",
      "Mechanical stability is crucial for fracture healing."
    ]
  },
  {
    "id": "colles-fracture-reduction",
    "topic": "Fracture stability and treatment principles",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old female presents to the clinic with wrist pain after slipping on ice. She has a Colles fracture with dorsal displacement and angulation.",
    "question": "What is the primary goal of closed reduction in this patient?",
    "explainer": "The primary goal of closed reduction in a Colles fracture is to restore anatomical alignment and stability. Proper alignment ensures that the fracture heals in a functional position, reducing the risk of complications such as malunion or arthritis. Closed reduction involves manipulating the bones back into place without surgery.",
    "options": [
      {
        "key": "A",
        "text": "To reduce pain immediately.",
        "correct": false,
        "response": "While reducing pain is a benefit of closed reduction, the primary goal is to restore anatomical alignment and stability. Pain relief is a secondary outcome."
      },
      {
        "key": "B",
        "text": "To restore anatomical alignment and stability.",
        "correct": true,
        "response": "Restoring anatomical alignment and stability is crucial for proper healing and function. Closed reduction helps ensure that the bones are in the correct position, reducing the risk of complications such as malunion or arthritis."
      },
      {
        "key": "C",
        "text": "To avoid surgery at all costs.",
        "correct": false,
        "response": "While avoiding surgery can be a benefit, the primary goal of closed reduction is to achieve proper alignment and stability. Surgery may still be necessary if closed reduction is not successful or if the fracture is unstable."
      }
    ],
    "pearls": [
      "Proper alignment is essential for functional healing in Colles fractures.",
      "Closed reduction is often the first step in treating Colles fractures."
    ]
  },
  {
    "id": "tibial-shaft-fracture-support",
    "topic": "Fracture stability and treatment principles",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 25-year-old male presents to the clinic after falling from a height. He has a closed mid-shaft tibial fracture with minimal displacement.",
    "question": "What is the main advantage of using a cast over a splint in this patient?",
    "explainer": "A cast provides more rigid immobilization compared to a splint, which is crucial for maintaining fracture alignment and stability. While a splint can be adjusted and is less restrictive, a cast ensures that the fracture remains in a stable position, promoting proper healing. The rigidity of the cast helps to prevent movement and displacement of the fracture fragments.",
    "options": [
      {
        "key": "A",
        "text": "A cast is more comfortable.",
        "correct": false,
        "response": "While comfort can be a consideration, the main advantage of a cast is its rigid immobilization. Comfort is often a secondary factor, and a splint can be more comfortable but less stable."
      },
      {
        "key": "B",
        "text": "A cast provides more rigid immobilization.",
        "correct": true,
        "response": "A cast is more rigid and provides better immobilization, which is essential for maintaining fracture alignment and stability. This rigidity helps to prevent movement and displacement, promoting proper healing."
      },
      {
        "key": "C",
        "text": "A cast can be adjusted more easily.",
        "correct": false,
        "response": "A splint is more easily adjustable than a cast. The main advantage of a cast is its rigid immobilization, which is crucial for maintaining fracture alignment and stability."
      }
    ],
    "pearls": [
      "Rigid immobilization is critical for stable fracture healing.",
      "A cast is more effective than a splint for maintaining alignment."
    ]
  },
  {
    "id": "ankle-fracture-weight-bearing",
    "topic": "Fracture stability and treatment principles",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old male presents to the clinic with ankle pain after twisting his ankle. X-rays reveal a stable lateral malleolus fracture.",
    "question": "Why is weight-bearing typically delayed in patients with stable ankle fractures?",
    "explainer": "Weight-bearing is delayed in stable ankle fractures to prevent displacement and to allow the bone to heal in a stable position. The ankle joint\u627f\u53d7\u5f88\u5927\u7684\u538b\u529b\uff0c\u5373\u4f7f\u5728\u7a33\u5b9a\u9aa8\u6298\u4e2d\uff0c\u8fc7\u65e9\u8d1f\u91cd\u4e5f\u53ef\u80fd\u5bfc\u81f4\u9aa8\u6298\u79fb\u4f4d\u6216\u4e0d\u6108\u5408\u3002\u5ef6\u8fdf\u8d1f\u91cd\u6709\u52a9\u4e8e\u786e\u4fdd\u9aa8\u6298\u5728\u6b63\u786e\u7684\u5bf9\u9f50\u548c\u4f4d\u7f6e\u4e0b\u6108\u5408\uff0c\u4ece\u800c\u51cf\u5c11\u5e76\u53d1\u75c7\u7684\u98ce\u9669\u3002",
    "options": [
      {
        "key": "A",
        "text": "To prevent muscle atrophy.",
        "correct": false,
        "response": "Preventing muscle atrophy is important, but the primary reason for delaying weight-bearing is to prevent displacement and ensure proper healing. Muscle atrophy can be managed with physical therapy once healing is sufficient."
      },
      {
        "key": "B",
        "text": "To prevent displacement and ensure proper healing.",
        "correct": true,
        "response": "Delaying weight-bearing helps prevent displacement and ensures that the fracture heals in a stable position. This is crucial for proper function and to reduce the risk of complications such as malunion or nonunion."
      },
      {
        "key": "C",
        "text": "To avoid the need for surgery.",
        "correct": false,
        "response": "While avoiding surgery can be a benefit, the primary reason for delaying weight-bearing is to prevent displacement and ensure proper healing. Surgery may still be necessary if the fracture is unstable or if conservative management fails."
      }
    ],
    "pearls": [
      "Preventing displacement is crucial for proper healing in stable ankle fractures.",
      "Delayed weight-bearing reduces the risk of complications."
    ]
  },
  {
    "id": "clavicle-fracture-treatment",
    "topic": "Fracture stability and treatment principles",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 14-year-old male presents to the clinic after a fall during a football game. He has a midshaft clavicle fracture with no significant displacement.",
    "question": "Why is surgical fixation generally not recommended for non-displaced clavicle fractures in adolescents?",
    "explainer": "Non-displaced clavicle fractures in adolescents typically heal well with conservative management, such as a sling and physical therapy. The clavicle has a high vascularity and regenerative capacity, making it less likely to develop complications like nonunion or malunion. Additionally, surgical fixation carries risks such as infection and hardware-related issues, which can be avoided with conservative treatment.",
    "options": [
      {
        "key": "A",
        "text": "To prevent the need for physical therapy.",
        "correct": false,
        "response": "Physical therapy is often necessary regardless of the treatment method to restore function. The primary reason for avoiding surgery in non-displaced clavicle fractures in adolescents is to avoid the risks associated with surgical intervention."
      },
      {
        "key": "B",
        "text": "To avoid the risks associated with surgical intervention.",
        "correct": true,
        "response": "Surgical fixation carries risks such as infection and hardware-related issues. Non-displaced clavicle fractures in adolescents typically heal well with conservative management, making surgery unnecessary and potentially harmful."
      },
      {
        "key": "C",
        "text": "To reduce the cost of treatment.",
        "correct": false,
        "response": "While cost is a consideration, the primary reason for avoiding surgery is to prevent complications and ensure proper healing. Non-displaced clavicle fractures in adolescents have a high likelihood of healing well with conservative management."
      }
    ],
    "pearls": [
      "Conservative management is preferred for non-displaced clavicle fractures in adolescents.",
      "The clavicle has a high vascularity and regenerative capacity."
    ]
  },
  {
    "id": "avascular-necrosis-femoral-neck-fracture",
    "topic": "Avascular necrosis",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 45-year-old male presents with sudden onset of hip pain after a fall. X-rays reveal a displaced femoral neck fracture.",
    "question": "Why is avascular necrosis a significant concern in this patient?",
    "explainer": "The femoral head receives a significant portion of its blood supply from the arterial ring at the base of the femoral neck. A displaced femoral neck fracture can disrupt this blood supply, leading to avascular necrosis. This is a critical concern because the bone without adequate blood flow can die and collapse, leading to severe joint dysfunction.",
    "options": [
      {
        "key": "A",
        "text": "The femoral head has a redundant blood supply, making avascular necrosis unlikely.",
        "correct": false,
        "response": "The femoral head does not have a redundant blood supply. Most of its blood comes from the femoral neck, and a displaced fracture can cut off this supply, leading to avascular necrosis."
      },
      {
        "key": "B",
        "text": "The displacement of the fracture can compromise the blood supply to the femoral head.",
        "correct": true,
        "response": "This is correct. The displacement of the femoral neck fracture can disrupt the crucial blood supply to the femoral head, leading to avascular necrosis."
      },
      {
        "key": "C",
        "text": "Avascular necrosis is primarily a concern in the knee, not the hip.",
        "correct": "false",
        "response": "Avascular necrosis is a significant concern in the hip, especially after a femoral neck fracture, because the femoral head relies heavily on the blood supply from the femoral neck."
      }
    ],
    "pearls": [
      "Displaced femoral neck fractures can lead to avascular necrosis due to compromised blood supply.",
      "Avascular necrosis can result in bone death and joint collapse."
    ]
  },
  {
    "id": "avascular-necrosis-shoulder-dislocation",
    "topic": "Avascular necrosis",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 28-year-old female with a history of high-energy trauma presents with a dislocated shoulder. She has limited range of motion and significant pain.",
    "question": "What is the primary mechanism by which avascular necrosis can occur in this patient's shoulder?",
    "explainer": "The humeral head, similar to the femoral head, has a critical blood supply that can be compromised during a dislocation. When the shoulder dislocates, the blood vessels supplying the humeral head can be stretched or torn, leading to avascular necrosis. This is a rare but serious complication that can result in bone death and joint dysfunction.",
    "options": [
      {
        "key": "A",
        "text": "The dislocation causes a fracture of the humeral head, which is the primary cause of avascular necrosis.",
        "correct": false,
        "response": "While a fracture can contribute to avascular necrosis, the primary mechanism in shoulder dislocation is the disruption of the blood supply to the humeral head due to stretching or tearing of the blood vessels."
      },
      {
        "key": "B",
        "text": "The dislocation can disrupt the blood supply to the humeral head, leading to avascular necrosis.",
        "correct": true,
        "response": "This is correct. The dislocation of the shoulder can stretch or tear the blood vessels supplying the humeral head, leading to avascular necrosis."
      },
      {
        "key": "C",
        "text": "Avascular necrosis in the shoulder is primarily caused by repetitive use and overuse, not dislocation.",
        "correct": false,
        "response": "Avascular necrosis in the shoulder can be caused by dislocation, which disrupts the blood supply to the humeral head. Repetitive use and overuse can cause other issues, but not typically avascular necrosis."
      }
    ],
    "pearls": [
      "Shoulder dislocation can disrupt the blood supply to the humeral head.",
      "Avascular necrosis in the shoulder is a rare but serious complication."
    ]
  },
  {
    "id": "avascular-necrosis-femoral-head-fracture",
    "topic": "Avascular necrosis",
    "category": "Fracture Fundamentals",
    "difficulty": "beginner",
    "vignette": "A 60-year-old male with a history of osteoporosis presents with hip pain after a minor fall. X-rays show a nondisplaced fracture of the femoral head.",
    "question": "Why is avascular necrosis a concern even in a nondisplaced femoral head fracture?",
    "explainer": "Even in a nondisplaced fracture, the blood supply to the femoral head can be compromised. The fracture can cause microtrauma to the blood vessels, leading to reduced blood flow and potential avascular necrosis. This is especially concerning in patients with underlying conditions like osteoporosis, which can further compromise bone health.",
    "options": [
      {
        "key": "A",
        "text": "Avascular necrosis only occurs in displaced fractures, not in nondisplaced fractures.",
        "correct": false,
        "response": "Avascular necrosis can occur in nondisplaced fractures as well. Even minor trauma can cause microtrauma to the blood vessels, leading to reduced blood flow and potential avascular necrosis."
      },
      {
        "key": "B",
        "text": "The fracture can cause microtrauma to the blood vessels, leading to reduced blood flow and potential avascular necrosis.",
        "correct": true,
        "response": "This is correct. Even in a nondisplaced fracture, the trauma can damage the blood vessels supplying the femoral head, leading to reduced blood flow and avascular necrosis."
      },
      {
        "key": "C",
        "text": "Avascular necrosis in the femoral head is primarily caused by systemic diseases, not fractures.",
        "correct": false,
        "response": "While systemic diseases can contribute to avascular necrosis, fractures can also cause it by disrupting the blood supply to the femoral head."
      }
    ],
    "pearls": [
      "Nondisplaced fractures can still lead to avascular necrosis.",
      "Microtrauma to blood vessels can cause reduced blood flow and avascular necrosis."
    ]
  },
  {
    "id": "avascular-necrosis-medical-conditions",
    "topic": "Avascular necrosis",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old male with a history of chronic steroid use and diabetes presents with knee pain. MRI shows early signs of avascular necrosis in the knee.",
    "question": "How do the patient's medical conditions contribute to the development of avascular necrosis?",
    "explainer": "Chronic steroid use and diabetes can both contribute to avascular necrosis. Steroids can increase the risk of fat emboli, which can block small blood vessels, leading to reduced blood flow. Diabetes can also impair blood flow and wound healing, further increasing the risk of avascular necrosis. These conditions create a perfect storm for bone tissue to become ischemic and die.",
    "options": [
      {
        "key": "A",
        "text": "Steroids and diabetes have no significant impact on the development of avascular necrosis.",
        "correct": false,
        "response": "Steroids can increase the risk of fat emboli, which can block blood vessels, and diabetes can impair blood flow and wound healing, both of which contribute to avascular necrosis."
      },
      {
        "key": "B",
        "text": "Steroids can increase the risk of fat emboli, and diabetes can impair blood flow, both of which can lead to avascular necrosis.",
        "correct": true,
        "response": "This is correct. Steroids can cause fat emboli, which can block small blood vessels, and diabetes can impair blood flow and wound healing, both contributing to avascular necrosis."
      },
      {
        "key": "C",
        "text": "Avascular necrosis in the knee is primarily caused by trauma, not medical conditions.",
        "correct": false,
        "response": "While trauma is a common cause of avascular necrosis, medical conditions like chronic steroid use and diabetes can also significantly contribute to its development."
      }
    ],
    "pearls": [
      "Steroids can increase the risk of fat emboli leading to avascular necrosis.",
      "Diabetes can impair blood flow and wound healing, contributing to avascular necrosis."
    ]
  },
  {
    "id": "avascular-necrosis-treatment-prevention",
    "topic": "Avascular necrosis",
    "category": "Fracture Fundamentals",
    "difficulty": "intermediate",
    "vignette": "A 35-year-old female with a history of sickle cell disease presents with hip pain. Imaging shows early signs of avascular necrosis in the femoral head.",
    "question": "What is the primary goal of treatment and prevention in this patient with sickle cell disease and avascular necrosis?",
    "explainer": "The primary goal in treating and preventing avascular necrosis in patients with sickle cell disease is to improve blood flow and prevent further ischemia. Sickle cell disease can cause sickling of red blood cells, which can block small blood vessels and reduce blood flow to the bone. Treatments aim to reduce the frequency of sickling episodes and improve overall circulation to the affected area.",
    "options": [
      {
        "key": "A",
        "text": "The primary goal is to increase bone density and strength.",
        "correct": false,
        "response": "The primary goal is not to increase bone density and strength, but to improve blood flow and prevent further ischemia, which can be achieved by reducing sickling episodes and improving circulation."
      },
      {
        "key": "B",
        "text": "The primary goal is to improve blood flow and prevent further ischemia.",
        "correct": true,
        "response": "This is correct. The primary goal is to improve blood flow and prevent further ischemia, which can be achieved by reducing sickling episodes and improving overall circulation in the affected area."
      },
      {
        "key": "C",
        "text": "The primary goal is to reduce pain and inflammation in the affected joint.",
        "correct": false,
        "response": "While reducing pain and inflammation is important, the primary goal is to improve blood flow and prevent further ischemia, which are crucial for preventing the progression of avascular necrosis."
      }
    ],
    "pearls": [
      "Improving blood flow is crucial in treating avascular necrosis in sickle cell disease.",
      "Reducing sickling episodes can help prevent further ischemia."
    ]
  },
  {
    "id": "hip-bursitis-explanation",
    "topic": "Hip anatomy",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 45-year-old female patient presents with lateral hip pain, exacerbated by activities such as walking and lying on the affected side. She has no history of trauma.",
    "question": "What is the primary biomechanical reason for the patient's pain?",
    "explainer": "The hip bursa, specifically the greater trochanteric bursa, acts as a cushion between the greater trochanter and the overlying iliotibial band (IT band). When the IT band repeatedly rubs against the greater trochanter, it can cause inflammation of the bursa, leading to pain and discomfort.",
    "options": [
      {
        "key": "A",
        "text": "The IT band is too tight, causing friction with the femoral head.",
        "correct": false,
        "response": "The IT band is indeed involved, but the friction is with the greater trochanter, not the femoral head. The bursa between the IT band and the greater trochanter is what becomes inflamed."
      },
      {
        "key": "B",
        "text": "The greater trochanteric bursa is inflamed due to repetitive friction.",
        "correct": true,
        "response": "This is correct. The greater trochanteric bursa cushions the IT band and the greater trochanter. Repetitive friction can cause bursitis, leading to pain and inflammation."
      },
      {
        "key": "C",
        "text": "The hip joint is dislocated, causing pain.",
        "correct": false,
        "response": "Dislocation of the hip joint would cause severe pain and immediate functional impairment, and it is not a common condition in a 45-year-old without significant trauma. The pain is more likely due to bursitis."
      }
    ],
    "pearls": [
      "Bursitis is common in areas with repetitive friction.",
      "The greater trochanteric bursa cushions the IT band and greater trochanter."
    ]
  },
  {
    "id": "hip-impingement-mechanism",
    "topic": "Hip anatomy",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 25-year-old male athlete presents with anterior hip pain, especially when flexing the hip or performing deep squats. He has no history of trauma but reports a gradual onset of pain over the past few months.",
    "question": "What is the underlying anatomical cause of the patient's hip pain?",
    "explainer": "Femoroacetabular impingement (FAI) occurs when there is an abnormal contact between the femoral head and the acetabulum. This can be due to a cam lesion (abnormal bump on the femoral head) or a pincer lesion (overcoverage of the acetabulum). The abnormal contact leads to cartilage damage and pain, especially with hip flexion and internal rotation.",
    "options": [
      {
        "key": "A",
        "text": "The acetabulum is underdeveloped, leading to instability.",
        "correct": false,
        "response": "While underdevelopment of the acetabulum can cause instability, it is not the primary cause of anterior hip pain in this scenario. The pain is more likely due to abnormal contact between the femoral head and the acetabulum."
      },
      {
        "key": "B",
        "text": "There is abnormal contact between the femoral head and the acetabulum.",
        "correct": true,
        "response": "This is correct. Femoroacetabular impingement (FAI) involves abnormal contact between the femoral head and the acetabulum, leading to pain and cartilage damage, especially during hip flexion and internal rotation."
      },
      {
        "key": "C",
        "text": "The labrum is torn, causing instability and pain.",
        "correct": false,
        "response": "A torn labrum can cause pain, but it is often a consequence of the abnormal contact seen in FAI. The primary issue here is the mechanical impingement between the femoral head and the acetabulum."
      }
    ],
    "pearls": [
      "FAI involves abnormal contact between the femoral head and acetabulum.",
      "Pain is often exacerbated by hip flexion and internal rotation."
    ]
  },
  {
    "id": "hip-fracture-mechanics",
    "topic": "Hip anatomy",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 70-year-old female patient presents after a fall on level ground. She has severe pain in her hip and is unable to bear weight on the affected leg. X-rays show a fracture of the femoral neck.",
    "question": "What is the primary mechanical reason for the femoral neck fracture in this patient?",
    "explainer": "The femoral neck is a relatively weak point in the hip anatomy, especially in older individuals with osteoporosis. When a force is applied, such as from a fall, the femoral neck is more susceptible to fracture due to its thinner cortical bone and the lever arm effect of the femoral head.",
    "options": [
      {
        "key": "A",
        "text": "The femoral head is too heavy, causing the neck to break.",
        "correct": false,
        "response": "The weight of the femoral head is not the primary reason for the fracture. The femoral neck is a weak point due to its thinner cortical bone, making it more susceptible to fractures from applied forces."
      },
      {
        "key": "B",
        "text": "The femoral neck is a mechanical weak point, especially in osteoporotic bone.",
        "correct": true,
        "response": "This is correct. The femoral neck is a weak point in the hip anatomy, particularly in older individuals with osteoporosis. The thinner cortical bone and the lever arm effect of the femoral head make it more susceptible to fractures from falls."
      },
      {
        "key": "C",
        "text": "The acetabulum is fractured, causing the femoral neck to break.",
        "correct": false,
        "response": "A fracture of the acetabulum can cause instability, but the primary issue here is the fracture of the femoral neck. The femoral neck is the weak point and is more likely to break under the applied force of a fall."
      }
    ],
    "pearls": [
      "The femoral neck is a weak point in the hip anatomy.",
      "Osteoporosis increases the risk of fractures in older individuals."
    ]
  },
  {
    "id": "hip-dislocation-mechanism",
    "topic": "Hip anatomy",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 30-year-old male is brought to the emergency department after a high-speed motor vehicle accident. He has severe pain and deformity in his right hip, and his leg is shortened and externally rotated.",
    "question": "What is the primary mechanical reason for the hip dislocation in this patient?",
    "explainer": "Hip dislocation occurs when the femoral head is forced out of the acetabulum. In this case, the high-speed impact likely caused the femoral head to be pushed posteriorly, leading to dislocation. The posterior dislocation is the most common type, often resulting in a shortened and externally rotated leg.",
    "options": [
      {
        "key": "A",
        "text": "The acetabulum is fractured, causing the femoral head to dislocate.",
        "correct": false,
        "response": "While an acetabular fracture can contribute to dislocation, the primary mechanism is the force applied to the hip, pushing the femoral head out of the acetabulum. The high-speed impact in this case is more likely the cause of the dislocation."
      },
      {
        "key": "B",
        "text": "The femoral head is forced out of the acetabulum by the high-speed impact.",
        "correct": true,
        "response": "This is correct. The high-speed impact of the motor vehicle accident likely generated enough force to push the femoral head out of the acetabulum, causing the hip dislocation."
      },
      {
        "key": "C",
        "text": "The ligaments around the hip joint are torn, leading to dislocation.",
        "correct": false,
        "response": "Torn ligaments can contribute to instability, but the primary cause of dislocation in this scenario is the force applied to the hip joint, pushing the femoral head out of the acetabulum."
      }
    ],
    "pearls": [
      "High-speed trauma is a common cause of hip dislocation.",
      "Posterior dislocation is the most common type of hip dislocation."
    ]
  },
  {
    "id": "hip-arthroplasty-biomechanics",
    "topic": "Hip anatomy",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 65-year-old male with end-stage osteoarthritis of the hip is scheduled for a total hip arthroplasty. The surgeon explains that the prosthetic components will replace the damaged femoral head and acetabulum.",
    "question": "What is the primary biomechanical advantage of a total hip arthroplasty in this patient?",
    "explainer": "Total hip arthroplasty (THA) replaces the damaged femoral head and acetabulum with prosthetic components. This reduces friction and restores the joint's normal biomechanics, allowing for smoother movement and pain relief. The prosthetic components are designed to mimic the natural movement of the hip joint, reducing wear and tear and improving function.",
    "options": [
      {
        "key": "A",
        "text": "The prosthetic components will increase the range of motion beyond normal limits.",
        "correct": false,
        "response": "While THA can improve range of motion, the primary advantage is not to exceed normal limits but to restore normal biomechanics and reduce pain. The prosthetic components are designed to mimic natural movement, not to exceed it."
      },
      {
        "key": "B",
        "text": "The prosthetic components will reduce friction and restore normal joint mechanics.",
        "correct": true,
        "response": "This is correct. The primary advantage of THA is to reduce friction and restore the normal biomechanics of the hip joint. This reduces pain and improves function by mimicking the natural movement of the hip."
      },
      {
        "key": "C",
        "text": "The prosthetic components will strengthen the surrounding muscles.",
        "correct": false,
        "response": "While improved joint mechanics can indirectly benefit muscle strength, the primary advantage of THA is to reduce friction and restore normal joint mechanics, leading to pain relief and improved function."
      }
    ],
    "pearls": [
      "THA reduces friction and restores normal joint mechanics.",
      "Pain relief and improved function are the primary goals of THA."
    ]
  },
  {
    "id": "femoral-neck-fracture-elderly-fall",
    "topic": "Femoral neck fractures",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 78-year-old woman presents to the emergency department after slipping on the bathroom floor. She complains of severe pain in her right hip and is unable to bear weight on that leg.",
    "question": "What anatomical feature of the femoral neck makes it particularly susceptible to fracture in this scenario?",
    "explainer": "The femoral neck is a relatively narrow and weak area between the head and shaft of the femur. It is subjected to high stress during falls, especially in elderly patients with osteoporosis, which predisposes it to fractures.",
    "options": [
      {
        "key": "A",
        "text": "The large size of the femoral head",
        "correct": false,
        "response": "The size of the femoral head itself is not the primary factor. The femoral neck, being a narrow region, is more susceptible to fracture due to its structural weakness and the high stress it experiences during falls."
      },
      {
        "key": "B",
        "text": "The narrow width of the femoral neck",
        "correct": true,
        "response": "The femoral neck is a narrow region that connects the head to the shaft of the femur. This narrowing creates a point of weakness, making it more susceptible to fracture, especially in the context of falls and osteoporosis."
      },
      {
        "key": "C",
        "text": "The presence of the greater trochanter",
        "correct": false,
        "response": "The greater trochanter is a bony prominence on the femur, but it is not directly involved in the mechanics of femoral neck fractures. The narrow width of the femoral neck is the key anatomical feature that makes it susceptible to fracture."
      }
    ],
    "pearls": [
      "The femoral neck is a narrow, weak area prone to fracture.",
      "Osteoporosis significantly increases the risk of femoral neck fractures in the elderly."
    ]
  },
  {
    "id": "femoral-neck-fracture-young-athlete",
    "topic": "Femoral neck fractures",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 25-year-old male athlete presents with sudden, severe pain in his left hip after landing awkwardly from a high jump. He denies any previous hip pain or injury.",
    "question": "Which biomechanical factor is most likely to contribute to a femoral neck fracture in this young athlete?",
    "explainer": "High-energy impacts, such as those experienced in sports, can generate significant forces that are transmitted through the femoral neck. The combination of axial loading and rotational forces can exceed the bone's strength, leading to a fracture.",
    "options": [
      {
        "key": "A",
        "text": "Chronic wear and tear",
        "correct": false,
        "response": "Chronic wear and tear is more relevant to degenerative changes over time, such as in osteoarthritis. In this case, the sudden, high-energy impact is the primary biomechanical factor contributing to the fracture."
      },
      {
        "key": "B",
        "text": "Axial loading and rotational forces",
        "correct": true,
        "response": "High-energy impacts, like landing awkwardly from a jump, can cause axial loading (forces directed along the length of the bone) and rotational forces. These forces can exceed the bone's strength, leading to a femoral neck fracture, especially in young, active individuals."
      },
      {
        "key": "C",
        "text": "Osteoporosis",
        "correct": false,
        "response": "Osteoporosis is a condition that typically affects older individuals and is characterized by decreased bone density. In a young, healthy athlete, the sudden, high-energy impact is a more likely cause of the femoral neck fracture."
      }
    ],
    "pearls": [
      "High-energy impacts can cause femoral neck fractures in young, healthy individuals.",
      "Axial loading and rotational forces are key biomechanical factors."
    ]
  },
  {
    "id": "femoral-neck-fracture-pain-pattern",
    "topic": "Femoral neck fractures",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 65-year-old woman presents with pain in her groin that radiates to her knee. She has a history of osteoporosis and fell on her hip a week ago.",
    "question": "Why does pain from a femoral neck fracture often radiate to the knee?",
    "explainer": "The femoral nerve, which innervates the anterior thigh and knee, shares some of the same nerve fibers as the genicular branches that supply the hip joint. Pain signals from the hip can therefore be perceived in the knee due to this overlapping innervation.",
    "options": [
      {
        "key": "A",
        "text": "Direct nerve damage in the knee",
        "correct": false,
        "response": "The pain is not due to direct nerve damage in the knee. Instead, it is referred pain from the hip due to overlapping nerve innervation patterns."
      },
      {
        "key": "B",
        "text": "Referred pain from the hip",
        "correct": true,
        "response": "Pain from a femoral neck fracture can radiate to the knee because the femoral nerve, which innervates the anterior thigh and knee, shares nerve fibers with the genicular branches that supply the hip joint. This overlapping innervation can cause pain to be perceived in the knee."
      },
      {
        "key": "C",
        "text": "Inflammation of the knee joint",
        "correct": false,
        "response": "The pain is not due to inflammation of the knee joint itself. It is referred pain from the hip, where the fracture has occurred, due to overlapping nerve innervation."
      }
    ],
    "pearls": [
      "Pain from a femoral neck fracture can be referred to the knee.",
      "Overlapping nerve innervation explains referred pain patterns."
    ]
  },
  {
    "id": "femoral-neck-fracture-blood-supply",
    "topic": "Femoral neck fractures",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old man with a history of hip pain presents with a suspected femoral neck fracture after a low-impact fall. He is concerned about the risk of avascular necrosis.",
    "question": "Why is the risk of avascular necrosis higher in femoral neck fractures compared to other hip fractures?",
    "explainer": "The blood supply to the femoral head primarily comes from the medial and lateral circumflex femoral arteries, which form a ring around the neck of the femur. Fractures in this area can disrupt this blood supply, leading to avascular necrosis, especially if the fracture is displaced.",
    "options": [
      {
        "key": "A",
        "text": "The femoral head has a robust blood supply",
        "correct": false,
        "response": "The femoral head actually has a relatively limited blood supply, primarily from the medial and lateral circumflex femoral arteries. This makes it susceptible to avascular necrosis if the blood supply is disrupted by a fracture."
      },
      {
        "key": "B",
        "text": "The femoral neck has a limited blood supply",
        "correct": true,
        "response": "The femoral neck has a limited blood supply from the medial and lateral circumflex femoral arteries. Fractures in this area can disrupt this blood supply, leading to avascular necrosis, especially if the fracture is displaced."
      },
      {
        "key": "C",
        "text": "The femoral shaft has a poor blood supply",
        "correct": false,
        "response": "The femoral shaft has a relatively robust blood supply, which is why avascular necrosis is less common in shaft fractures. The femoral neck, with its limited blood supply, is more susceptible to avascular necrosis."
      }
    ],
    "pearls": [
      "The femoral neck has a limited blood supply.",
      "Disruption of this blood supply can lead to avascular necrosis."
    ]
  },
  {
    "id": "femoral-neck-fracture-osteoporosis",
    "topic": "Femoral neck fractures",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 72-year-old woman with a history of osteoporosis presents with hip pain after a minor stumble. She denies any significant trauma.",
    "question": "How does osteoporosis contribute to the risk of femoral neck fractures in this patient?",
    "explainer": "Osteoporosis is characterized by reduced bone density and microarchitectural deterioration of bone tissue, which weakens the bone and makes it more susceptible to fractures, even from minor trauma. The femoral neck, being a narrow and structurally weak area, is particularly vulnerable in osteoporotic patients.",
    "options": [
      {
        "key": "A",
        "text": "Osteoporosis increases bone density",
        "correct": false,
        "response": "Osteoporosis actually decreases bone density, making the bone more brittle and susceptible to fractures. This is the opposite of increasing bone density."
      },
      {
        "key": "B",
        "text": "Osteoporosis weakens the bone",
        "correct": true,
        "response": "Osteoporosis is characterized by reduced bone density and microarchitectural deterioration, which weakens the bone. This makes it more susceptible to fractures, even from minor trauma, especially in the femoral neck, which is already a structurally weak area."
      },
      {
        "key": "C",
        "text": "Osteoporosis causes joint inflammation",
        "correct": false,
        "response": "Osteoporosis primarily affects bone density and structure, not joint inflammation. The increased risk of fractures in osteoporotic patients is due to the weakened bone, not inflammation."
      }
    ],
    "pearls": [
      "Osteoporosis weakens the bone, making it more susceptible to fractures.",
      "The femoral neck is particularly vulnerable in osteoporotic patients."
    ]
  },
  {
    "id": "elderly-female-falls-at-home",
    "topic": "Intertrochanteric fractures",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 78-year-old female presents to the emergency department after slipping and falling at home. She has significant pain in her right hip and is unable to bear weight.",
    "question": "What biomechanical factor makes the intertrochanteric region particularly susceptible to fracture in this patient?",
    "explainer": "The intertrochanteric region is a weak point in the femur due to its structural design. The bone here is a mix of cortical and cancellous bone, and it experiences high stress during falls, especially in the elderly with osteoporosis.",
    "options": [
      {
        "key": "A",
        "text": "The cortical bone is too thick, making it brittle.",
        "correct": false,
        "response": "Cortical bone is dense and strong, but the intertrochanteric region is a mix of cortical and cancellous bone. The cancellous bone is more susceptible to fracture due to its porous nature."
      },
      {
        "key": "B",
        "text": "The cancellous bone is more vulnerable to compressive forces.",
        "correct": true,
        "response": "The cancellous bone, which is more porous and less dense, is more susceptible to compressive forces. This is why the intertrochanteric region is a common site for fractures, especially in the elderly."
      },
      {
        "key": "C",
        "text": "The intertrochanteric region has no blood supply.",
        "correct": false,
        "response": "The intertrochanteric region does have a blood supply, but the quality of the bone and its susceptibility to compressive forces are the main factors contributing to fracture risk."
      }
    ],
    "pearls": [
      "The intertrochanteric region is a mix of cortical and cancellous bone, making it vulnerable to fractures.",
      "Compressive forces are a key factor in intertrochanteric fractures."
    ]
  },
  {
    "id": "young-male-accident-on-bike",
    "topic": "Intertrochanteric fractures",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 35-year-old male is brought to the trauma center after a high-speed motorcycle accident. He complains of severe pain in his left hip and has an obvious deformity.",
    "question": "What type of force is most likely to cause an intertrochanteric fracture in this scenario?",
    "explainer": "Intertrochanteric fractures are often caused by indirect forces that result in a combination of compression and shear. In high-energy trauma, such as a motorcycle accident, the force can be transmitted through the femoral head and neck, leading to a fracture at the intertrochanteric region.",
    "options": [
      {
        "key": "A",
        "text": "Shear force",
        "correct": false,
        "response": "While shear force can contribute, the primary force in high-energy trauma is usually a combination of compression and shear. Shear force alone is less likely to cause a fracture in this region."
      },
      {
        "key": "B",
        "text": "Compression and shear forces",
        "correct": true,
        "response": "High-energy trauma often results in a combination of compression and shear forces. These forces can cause the femoral head to push against the neck and intertrochanteric region, leading to a fracture."
      },
      {
        "key": "C",
        "text": "Torsional force",
        "correct": false,
        "response": "Torsional force can cause fractures, but in the context of high-energy trauma like a motorcycle accident, compression and shear forces are more commonly responsible for intertrochanteric fractures."
      }
    ],
    "pearls": [
      "High-energy trauma often results in a combination of compression and shear forces.",
      "The femoral head can transmit these forces to the intertrochanteric region."
    ]
  },
  {
    "id": "elderly-male-slip-on-ice",
    "topic": "Intertrochanteric fractures",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "An 82-year-old male is brought to the emergency room after slipping on ice. He has pain in his right hip and is unable to walk.",
    "question": "Why are intertrochanteric fractures more common in the elderly compared to younger individuals?",
    "explainer": "Elderly individuals have a higher risk of intertrochanteric fractures due to age-related changes in bone quality and density. Osteoporosis weakens the bone, making it more susceptible to fractures from even minor falls.",
    "options": [
      {
        "key": "A",
        "text": "Elderly individuals have more bone mass.",
        "correct": false,
        "response": "Elderly individuals typically have less bone mass due to osteoporosis, which weakens the bone and increases the risk of fractures."
      },
      {
        "key": "B",
        "text": "Osteoporosis leads to bone weakening.",
        "correct": true,
        "response": "Osteoporosis decreases bone density and strength, making the bone more fragile and susceptible to fractures, especially in the intertrochanteric region."
      },
      {
        "key": "C",
        "text": "Elderly individuals have more active bone turnover.",
        "correct": false,
        "response": "Elderly individuals typically have decreased bone turnover, which can lead to weaker bones and a higher risk of fractures."
      }
    ],
    "pearls": [
      "Osteoporosis weakens bone, increasing the risk of fractures.",
      "Age-related changes in bone quality contribute to the higher incidence of intertrochanteric fractures in the elderly."
    ]
  },
  {
    "id": "post-menopausal-female-garden-fall",
    "topic": "Intertrochanteric fractures",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 65-year-old post-menopausal female presents to the clinic after a fall while gardening. She has pain in her left hip and is unable to stand.",
    "question": "Why does post-menopause increase the risk of intertrochanteric fractures?",
    "explainer": "Post-menopause is associated with a decrease in estrogen levels, which leads to increased bone resorption and decreased bone formation. This results in a net loss of bone density, making the bone more susceptible to fractures, especially in the intertrochanteric region.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density",
        "correct": false,
        "response": "Post-menopausal women typically experience a decrease in bone density, not an increase. This is due to the loss of estrogen, which normally helps maintain bone density."
      },
      {
        "key": "B",
        "text": "Decreased bone density",
        "correct": true,
        "response": "Post-menopause leads to decreased bone density due to reduced estrogen levels, which normally help maintain bone mass. This makes the bone more fragile and susceptible to fractures."
      },
      {
        "key": "C",
        "text": "Increased bone formation",
        "correct": false,
        "response": "Post-menopause is associated with decreased bone formation and increased bone resorption, leading to a net loss of bone density and increased fracture risk."
      }
    ],
    "pearls": [
      "Post-menopause leads to decreased bone density due to reduced estrogen levels.",
      "This makes the bone more fragile and susceptible to fractures."
    ]
  },
  {
    "id": "middle-aged-male-work-injury",
    "topic": "Intertrochanteric fractures",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old male construction worker is brought to the emergency department after a fall from a ladder. He has severe pain in his right hip and cannot bear weight.",
    "question": "What anatomical feature of the intertrochanteric region makes it vulnerable to fractures in this type of high-energy trauma?",
    "explainer": "The intertrochanteric region is a complex area where the greater and lesser trochanters meet. This region is subjected to high stresses during falls, especially in the context of high-energy trauma. The combination of compressive and shear forces can lead to fractures in this area.",
    "options": [
      {
        "key": "A",
        "text": "The presence of the femoral head",
        "correct": false,
        "response": "While the femoral head is involved in the transmission of forces, the intertrochanteric region's vulnerability is more related to the structural weakness of the bone and the forces it experiences."
      },
      {
        "key": "B",
        "text": "The meeting point of the greater and lesser trochanters",
        "correct": true,
        "response": "The intertrochanteric region is a meeting point of the greater and lesser trochanters, which creates a structurally complex area. This complexity, combined with high stresses during falls, makes it vulnerable to fractures."
      },
      {
        "key": "C",
        "text": "The absence of muscular attachments",
        "correct": false,
        "response": "The intertrochanteric region has significant muscular attachments, including the gluteus muscles. The presence of these attachments does not protect against fractures in high-energy trauma."
      }
    ],
    "pearls": [
      "The intertrochanteric region is a complex area where the greater and lesser trochanters meet.",
      "This structural complexity makes it vulnerable to high stresses and fractures."
    ]
  },
  {
    "id": "hip-dislocation-mechanism",
    "topic": "Hip dislocations",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 25-year-old male is brought to the emergency department after a high-speed motor vehicle collision. He is unable to move his left leg and is in significant pain.",
    "question": "What is the most likely mechanism of injury that led to his hip dislocation?",
    "explainer": "In a high-speed collision, the body is subjected to sudden deceleration forces. The femoral head can be forced out of the acetabulum due to the combined forces of the seat belt and the steering wheel, often leading to a posterior dislocation.",
    "options": [
      {
        "key": "A",
        "text": "Direct trauma to the hip joint",
        "correct": false,
        "response": "While direct trauma can cause hip dislocation, it is less common. In a high-speed collision, the forces are more likely to be transmitted through the body and not directly to the hip joint."
      },
      {
        "key": "B",
        "text": "Forced internal rotation and adduction of the hip",
        "correct": true,
        "response": "This mechanism is typical in a high-speed collision. The combination of internal rotation and adduction can force the femoral head out of the acetabulum, often leading to a posterior dislocation."
      },
      {
        "key": "C",
        "text": "Forced external rotation and abduction of the hip",
        "correct": false,
        "response": "Forced external rotation and abduction can occur in certain scenarios, but it is less common in high-speed collisions. The typical mechanism involves internal rotation and adduction."
      }
    ],
    "pearls": [
      "High-speed collisions often cause posterior hip dislocations due to the forces of internal rotation and adduction.",
      "Always consider the mechanism of injury in trauma patients."
    ]
  },
  {
    "id": "hip-dislocation-direction",
    "topic": "Hip dislocations",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old female presents to the clinic after slipping on ice. She reports severe pain in her right hip and is unable to bear weight on the affected leg.",
    "question": "Which direction is the femoral head most likely to dislocate in this scenario?",
    "explainer": "The hip joint is a ball-and-socket joint, with the femoral head fitting into the acetabulum. The posterior capsule and ligaments are less strong than the anterior structures, making posterior dislocations more common in falls on the flexed hip.",
    "options": [
      {
        "key": "A",
        "text": "Anterior",
        "correct": false,
        "response": "Anterior dislocations are less common in falls. The anterior structures of the hip joint are stronger and less likely to fail under the forces of a fall."
      },
      {
        "key": "B",
        "text": "Posterior",
        "correct": true,
        "response": "Posterior dislocations are more common in falls, especially when the hip is flexed and the foot is planted. The posterior capsule and ligaments are weaker, allowing the femoral head to be forced out posteriorly."
      },
      {
        "key": "C",
        "text": "Superior",
        "correct": false,
        "response": "Superior dislocations are rare. The hip joint is anatomically designed to resist superior dislocation, and the forces in a fall are more likely to cause posterior or anterior dislocations."
      }
    ],
    "pearls": [
      "Posterior dislocations are more common in falls due to the weaker posterior capsule and ligaments.",
      "Consider the patient's position and the direction of force when assessing hip dislocations."
    ]
  },
  {
    "id": "hip-dislocation-assessment",
    "topic": "Hip dislocations",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 40-year-old male is brought to the emergency department after a workplace accident involving a heavy falling object. He is in severe pain and unable to move his left hip.",
    "question": "What physical examination finding is most indicative of a hip dislocation in this patient?",
    "explainer": "Hip dislocations often present with specific physical examination findings. The position of the leg, the patient's inability to move the joint, and the presence of pain are key indicators. A leg that is shortened and internally rotated is highly suggestive of a posterior dislocation.",
    "options": [
      {
        "key": "A",
        "text": "Shortened and externally rotated leg",
        "correct": false,
        "response": "A shortened and externally rotated leg is more characteristic of an anterior dislocation. In posterior dislocations, the leg is typically shortened and internally rotated."
      },
      {
        "key": "B",
        "text": "Shortened and internally rotated leg",
        "correct": true,
        "response": "A shortened and internally rotated leg is a classic sign of a posterior hip dislocation. This position indicates that the femoral head has been forced out of the acetabulum posteriorly."
      },
      {
        "key": "C",
        "text": "Lengthened and externally rotated leg",
        "correct": false,
        "response": "A lengthened and externally rotated leg is not typical of hip dislocations. This presentation is more commonly associated with other conditions, such as femoral neck fractures."
      }
    ],
    "pearls": [
      "A shortened and internally rotated leg is a classic sign of a posterior hip dislocation.",
      "Physical examination findings are crucial in diagnosing hip dislocations."
    ]
  },
  {
    "id": "hip-dislocation-complication",
    "topic": "Hip dislocations",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 35-year-old male is admitted to the hospital with a posterior hip dislocation following a motorcycle accident. The dislocation is successfully reduced in the emergency department.",
    "question": "What is a potential long-term complication of a hip dislocation, even after successful reduction?",
    "explainer": "Hip dislocations can cause damage to the blood supply of the femoral head, leading to avascular necrosis (AVN). The disruption of blood flow can result in the death of bone cells and subsequent collapse of the femoral head, which can lead to chronic pain and arthritis.",
    "options": [
      {
        "key": "A",
        "text": "Chronic pain and arthritis",
        "correct": true,
        "response": "Chronic pain and arthritis are potential long-term complications of hip dislocations, especially if there is damage to the blood supply of the femoral head. Avascular necrosis can lead to joint degeneration and chronic symptoms."
      },
      {
        "key": "B",
        "text": "Acute compartment syndrome",
        "correct": false,
        "response": "Acute compartment syndrome is more commonly associated with high-energy crush injuries and is less likely to occur as a long-term complication of hip dislocations."
      },
      {
        "key": "C",
        "text": "Deep vein thrombosis",
        "correct": false,
        "response": "Deep vein thrombosis (DVT) can occur in immobilized patients, but it is not a specific long-term complication of hip dislocations. It is more related to prolonged immobility and other risk factors."
      }
    ],
    "pearls": [
      "Avascular necrosis is a significant long-term complication of hip dislocations.",
      "Monitor patients for signs of avascular necrosis, especially in the first year after injury."
    ]
  },
  {
    "id": "hip-dislocation-prevention",
    "topic": "Hip dislocations",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 70-year-old female with a history of osteoporosis is at increased risk for hip dislocations due to her bone density. She asks for advice on how to prevent hip dislocations.",
    "question": "Which of the following is the most effective measure to prevent hip dislocations in this patient?",
    "explainer": "Preventing falls is crucial in patients with osteoporosis, as their bones are more fragile and susceptible to dislocation. Ensuring a safe living environment and using assistive devices can significantly reduce the risk of falls and subsequent hip dislocations.",
    "options": [
      {
        "key": "A",
        "text": "Wearing a hip brace",
        "correct": false,
        "response": "While a hip brace can provide some support, it is not the most effective measure to prevent hip dislocations. The primary focus should be on preventing falls."
      },
      {
        "key": "B",
        "text": "Ensuring a safe living environment and using assistive devices",
        "correct": true,
        "response": "Ensuring a safe living environment and using assistive devices like handrails and walkers can significantly reduce the risk of falls, which is the most common cause of hip dislocations in elderly patients with osteoporosis."
      },
      {
        "key": "C",
        "text": "Increasing calcium and vitamin D intake",
        "correct": false,
        "response": "While increasing calcium and vitamin D intake is important for bone health, it does not directly prevent hip dislocations. The primary focus should be on fall prevention measures."
      }
    ],
    "pearls": [
      "Preventing falls is the most effective way to prevent hip dislocations in patients with osteoporosis.",
      "Assistive devices and a safe living environment are crucial for fall prevention."
    ]
  },
  {
    "id": "avascular-necrosis-patient-1",
    "topic": "Avascular necrosis of the femoral head",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 55-year-old male with a history of chronic corticosteroid use presents with a 3-month history of progressive left hip pain, especially when bearing weight.",
    "question": "What is the primary reason corticosteroid use increases the risk of avascular necrosis in the femoral head?",
    "explainer": "Corticosteroids can lead to fat accumulation in the blood vessels, causing them to narrow and reduce blood flow. This reduction in blood supply can lead to bone cell death, particularly in the femoral head where the blood supply is already limited.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density in the femoral head",
        "correct": false,
        "response": "Corticosteroids do not increase bone density in the femoral head. Instead, they can lead to fat accumulation in blood vessels, reducing blood flow and causing bone cell death."
      },
      {
        "key": "B",
        "text": "Decreased blood supply to the femoral head",
        "correct": true,
        "response": "Corticosteroids can cause fat accumulation in blood vessels, leading to reduced blood flow to the femoral head. This decreased blood supply can result in bone cell death and avascular necrosis."
      },
      {
        "key": "C",
        "text": "Increased bone resorption in the femoral head",
        "correct": false,
        "response": "While corticosteroids can increase bone resorption, the primary mechanism leading to avascular necrosis is the reduction in blood flow due to fat accumulation in blood vessels."
      }
    ],
    "pearls": [
      "Corticosteroids can lead to fat accumulation in blood vessels, reducing blood flow.",
      "Reduced blood flow can cause bone cell death and avascular necrosis."
    ]
  },
  {
    "id": "avascular-necrosis-patient-2",
    "topic": "Avascular necrosis of the femoral head",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 40-year-old female with a history of sickle cell anemia presents with sudden onset of right hip pain and difficulty walking.",
    "question": "Why does sickle cell anemia increase the risk of avascular necrosis in the femoral head?",
    "explainer": "Sickle cell anemia causes red blood cells to become misshapen and rigid, leading to blockages in small blood vessels. This can reduce blood flow to the femoral head, causing bone cell death and avascular necrosis.",
    "options": [
      {
        "key": "A",
        "text": "Increased blood viscosity leading to hypertension",
        "correct": false,
        "response": "While sickle cell anemia can increase blood viscosity, the primary issue is the formation of sickle-shaped red blood cells that block small blood vessels, reducing blood flow to the femoral head."
      },
      {
        "key": "B",
        "text": "Blockage of small blood vessels by sickle-shaped red blood cells",
        "correct": true,
        "response": "Sickle-shaped red blood cells can block small blood vessels, leading to reduced blood flow to the femoral head. This lack of blood supply can cause bone cell death and avascular necrosis."
      },
      {
        "key": "C",
        "text": "Decreased bone marrow function in the femoral head",
        "correct": false,
        "response": "While sickle cell anemia affects bone marrow function, the primary mechanism leading to avascular necrosis is the blockage of small blood vessels by sickle-shaped red blood cells, reducing blood flow."
      }
    ],
    "pearls": [
      "Sickle-shaped red blood cells can block small blood vessels.",
      "Reduced blood flow can cause bone cell death and avascular necrosis."
    ]
  },
  {
    "id": "avascular-necrosis-patient-3",
    "topic": "Avascular necrosis of the femoral head",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 35-year-old male with a history of heavy alcohol use presents with chronic hip pain and a limp. X-rays show evidence of avascular necrosis of the femoral head.",
    "question": "What is the primary mechanism by which alcohol use leads to avascular necrosis of the femoral head?",
    "explainer": "Alcohol can lead to the formation of fatty deposits in blood vessels, which can narrow the vessels and reduce blood flow. This reduced blood supply can cause bone cell death in the femoral head.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density in the femoral head",
        "correct": false,
        "response": "Alcohol does not increase bone density in the femoral head. Instead, it can lead to fatty deposits in blood vessels, reducing blood flow and causing bone cell death."
      },
      {
        "key": "B",
        "text": "Formation of fatty deposits in blood vessels",
        "correct": true,
        "response": "Alcohol can cause fatty deposits to form in blood vessels, leading to reduced blood flow to the femoral head. This decreased blood supply can result in bone cell death and avascular necrosis."
      },
      {
        "key": "C",
        "text": "Increased bone resorption in the femoral head",
        "correct": false,
        "response": "While alcohol can affect bone resorption, the primary mechanism leading to avascular necrosis is the formation of fatty deposits in blood vessels, reducing blood flow."
      }
    ],
    "pearls": [
      "Alcohol can cause fatty deposits in blood vessels.",
      "Reduced blood flow can cause bone cell death and avascular necrosis."
    ]
  },
  {
    "id": "avascular-necrosis-patient-4",
    "topic": "Avascular necrosis of the femoral head",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old male with a history of high-dose radiation therapy to the pelvis for prostate cancer presents with right hip pain and limited range of motion.",
    "question": "How does radiation therapy increase the risk of avascular necrosis in the femoral head?",
    "explainer": "Radiation therapy can damage the small blood vessels in the femoral head, reducing blood flow and leading to bone cell death. This reduced blood supply can cause avascular necrosis.",
    "options": [
      {
        "key": "A",
        "text": "Radiation-induced bone marrow suppression",
        "correct": false,
        "response": "While radiation therapy can suppress bone marrow, the primary mechanism leading to avascular necrosis is the damage to small blood vessels, reducing blood flow to the femoral head."
      },
      {
        "key": "B",
        "text": "Formation of scar tissue in the femoral head",
        "correct": false,
        "response": "While scar tissue can form in response to radiation, the primary issue is the damage to small blood vessels, which reduces blood flow and causes bone cell death."
      },
      {
        "key": "C",
        "text": "Damage to small blood vessels in the femoral head",
        "correct": true,
        "response": "Radiation therapy can damage the small blood vessels in the femoral head, leading to reduced blood flow and bone cell death. This decreased blood supply can result in avascular necrosis."
      }
    ],
    "pearls": [
      "Radiation therapy can damage small blood vessels.",
      "Reduced blood flow can cause bone cell death and avascular necrosis."
    ]
  },
  {
    "id": "avascular-necrosis-patient-5",
    "topic": "Avascular necrosis of the femoral head",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 25-year-old male with a history of trauma to the hip presents with acute onset of left hip pain and difficulty bearing weight.",
    "question": "What is the primary mechanism by which hip trauma can lead to avascular necrosis of the femoral head?",
    "explainer": "Hip trauma can cause a fracture of the femoral neck, which can disrupt the blood supply to the femoral head. This reduced blood flow can lead to bone cell death and avascular necrosis.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density in the femoral head",
        "correct": false,
        "response": "Hip trauma does not increase bone density in the femoral head. Instead, it can cause a fracture that disrupts the blood supply, leading to bone cell death."
      },
      {
        "key": "B",
        "text": "Disruption of the blood supply to the femoral head",
        "correct": true,
        "response": "Hip trauma, particularly a fracture of the femoral neck, can disrupt the blood supply to the femoral head. This reduced blood flow can cause bone cell death and avascular necrosis."
      },
      {
        "key": "C",
        "text": "Formation of scar tissue in the femoral head",
        "correct": false,
        "response": "While scar tissue can form in response to trauma, the primary issue is the disruption of the blood supply to the femoral head, leading to reduced blood flow and bone cell death."
      }
    ],
    "pearls": [
      "Hip trauma can cause a fracture of the femoral neck.",
      "Disrupted blood supply can cause bone cell death and avascular necrosis."
    ]
  },
  {
    "id": "hip-osteoarthritis-pain-mechanism",
    "topic": "Hip osteoarthritis and total hip replacement",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 65-year-old woman presents with progressive hip pain, worse with weight-bearing activities. She has a decreased range of motion and pain on palpation of the hip joint.",
    "question": "What is the primary mechanism causing her hip pain in osteoarthritis?",
    "explainer": "In osteoarthritis, the cartilage that cushions the joint surfaces wears down. This leads to bone-on-bone contact, which causes friction, inflammation, and pain. The pain is often worse with weight-bearing activities because the increased mechanical stress exacerbates the friction and inflammation.",
    "options": [
      {
        "key": "A",
        "text": "Inflammation of the synovial membrane",
        "correct": false,
        "response": "While synovitis can occur in osteoarthritis, it is a secondary effect. The primary mechanism is the breakdown of cartilage leading to bone-on-bone contact and mechanical friction."
      },
      {
        "key": "B",
        "text": "Bone-on-bone contact due to cartilage loss",
        "correct": true,
        "response": "This is correct. The loss of cartilage in osteoarthritis leads to direct contact between the bones, causing mechanical friction, inflammation, and pain."
      },
      {
        "key": "C",
        "text": "Increased intra-articular pressure",
        "correct": false,
        "response": "Increased intra-articular pressure can contribute to pain, but it is not the primary mechanism in osteoarthritis. The main issue is the loss of cartilage leading to bone-on-bone contact."
      }
    ],
    "pearls": [
      "Cartilage loss leads to bone-on-bone contact.",
      "Pain is often worse with weight-bearing activities."
    ]
  },
  {
    "id": "hip-replacement-material-selection",
    "topic": "Hip osteoarthritis and total hip replacement",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old man with severe hip osteoarthritis is scheduled for total hip replacement. The surgeon is considering different materials for the prosthetic joint.",
    "question": "Why is metal-on-metal not a preferred material combination for total hip replacement?",
    "explainer": "Metal-on-metal prostheses can generate metal debris due to wear, which can lead to aseptic lymphocytic vasculitis-associated lesions (ALVAL) and metallosis. These conditions can cause chronic inflammation, tissue necrosis, and implant failure. Modern materials, such as ceramic-on-ceramic or ceramic-on-polyethylene, are preferred for their lower wear rates and better long-term outcomes.",
    "options": [
      {
        "key": "A",
        "text": "Higher risk of dislocation",
        "correct": false,
        "response": "While dislocation is a concern in hip replacements, it is not the primary issue with metal-on-metal prostheses. The main problem is the generation of metal debris leading to chronic inflammation and implant failure."
      },
      {
        "key": "B",
        "text": "Increased wear and metal debris",
        "correct": true,
        "response": "This is correct. Metal-on-metal prostheses generate metal debris due to wear, which can cause chronic inflammation, tissue necrosis, and implant failure. Modern materials with lower wear rates are preferred."
      },
      {
        "key": "C",
        "text": "Difficulty in surgical placement",
        "correct": false,
        "response": "Surgical placement is a consideration, but it is not the primary issue with metal-on-metal prostheses. The main concern is the long-term effects of metal debris on the surrounding tissues."
      }
    ],
    "pearls": [
      "Metal-on-metal prostheses generate metal debris.",
      "Ceramic-on-ceramic and ceramic-on-polyethylene are preferred for lower wear rates."
    ]
  },
  {
    "id": "post-operative-hip-replacement-restrictions",
    "topic": "Hip osteoarthritis and total hip replacement",
    "category": "Hip",
    "difficulty": "beginner",
    "vignette": "A 70-year-old man undergoes total hip replacement and is advised to follow specific post-operative restrictions.",
    "question": "Why are patients advised to avoid certain hip movements after total hip replacement?",
    "explainer": "After total hip replacement, patients are advised to avoid movements that increase the risk of dislocation. The artificial joint has a limited range of motion compared to a natural joint, and certain positions (like crossing the legs or bending the hip too far) can cause the femoral head to dislocate from the acetabulum. These restrictions help ensure the implant remains securely in place during the initial healing period.",
    "options": [
      {
        "key": "A",
        "text": "To prevent infection",
        "correct": false,
        "response": "While infection is a concern after any surgery, the primary reason for movement restrictions is to prevent dislocation of the artificial joint. Infection prevention is addressed through other means like antibiotics and sterile techniques."
      },
      {
        "key": "B",
        "text": "To prevent dislocation",
        "correct": true,
        "response": "This is correct. The artificial hip joint has a limited range of motion, and certain movements can increase the risk of dislocation. Restrictions are in place to ensure the implant remains securely in place during the healing period."
      },
      {
        "key": "C",
        "text": "To reduce pain",
        "correct": false,
        "response": "While reducing pain is important, the primary reason for movement restrictions is to prevent dislocation. Pain management is addressed through other means like medications and physical therapy."
      }
    ],
    "pearls": [
      "Avoid movements that increase the risk of dislocation.",
      "The artificial joint has a limited range of motion."
    ]
  },
  {
    "id": "hip-osteoarthritis-weight-bearing",
    "topic": "Hip osteoarthritis and total hip replacement",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old woman with hip osteoarthritis is considering non-surgical management options.",
    "question": "Why is weight loss recommended for patients with hip osteoarthritis?",
    "explainer": "Weight loss is recommended because excess body weight increases the mechanical load on the hip joint, exacerbating the wear and tear on the cartilage. Each pound of body weight translates to several pounds of force on the hip joint during activities like walking. Reducing weight can significantly decrease the mechanical stress on the joint, slowing the progression of osteoarthritis and reducing pain.",
    "options": [
      {
        "key": "A",
        "text": "To improve cardiovascular health",
        "correct": false,
        "response": "While improving cardiovascular health is beneficial, the primary reason for weight loss in hip osteoarthritis is to reduce the mechanical load on the joint. Cardiovascular health is a secondary benefit."
      },
      {
        "key": "B",
        "text": "To decrease mechanical stress on the joint",
        "correct": true,
        "response": "This is correct. Excess body weight increases the mechanical load on the hip joint, leading to more wear and tear on the cartilage. Reducing weight can decrease this stress, slowing the progression of osteoarthritis and reducing pain."
      },
      {
        "key": "C",
        "text": "To reduce the need for medication",
        "correct": false,
        "response": "While reducing the need for medication is a potential benefit, the primary reason for weight loss is to decrease the mechanical stress on the hip joint. Medication reduction is a secondary outcome."
      }
    ],
    "pearls": [
      "Excess weight increases mechanical load on the hip joint.",
      "Weight loss can slow the progression of osteoarthritis."
    ]
  },
  {
    "id": "hip-replacement-rehabilitation",
    "topic": "Hip osteoarthritis and total hip replacement",
    "category": "Hip",
    "difficulty": "intermediate",
    "vignette": "A 62-year-old woman is scheduled for total hip replacement and is concerned about her post-operative recovery.",
    "question": "Why is early mobilization important in the rehabilitation of patients after total hip replacement?",
    "explainer": "Early mobilization is crucial after total hip replacement to prevent complications such as deep vein thrombosis (DVT) and muscle atrophy. Prolonged immobilization can increase the risk of blood clots and weaken the muscles, which can delay recovery and increase the risk of falls. Early mobilization helps maintain blood flow, prevent muscle atrophy, and promote overall recovery.",
    "options": [
      {
        "key": "A",
        "text": "To reduce the risk of infection",
        "correct": false,
        "response": "While reducing the risk of infection is important, the primary reason for early mobilization is to prevent complications like DVT and muscle atrophy. Infection prevention is addressed through other means like antibiotics and sterile techniques."
      },
      {
        "key": "B",
        "text": "To prevent deep vein thrombosis and muscle atrophy",
        "correct": true,
        "response": "This is correct. Early mobilization helps maintain blood flow, preventing DVT, and keeps muscles active, preventing atrophy. These factors are crucial for a smooth recovery and reduced risk of complications."
      },
      {
        "key": "C",
        "text": "To improve joint flexibility",
        "correct": false,
        "response": "While improving joint flexibility is a goal of rehabilitation, the primary reason for early mobilization is to prevent serious complications like DVT and muscle atrophy. Flexibility improvement is a secondary benefit."
      }
    ],
    "pearls": [
      "Early mobilization prevents DVT and muscle atrophy.",
      "Maintaining blood flow and muscle activity is crucial for recovery."
    ]
  },
  {
    "id": "knee-anatomy-patellar-tendon-injury",
    "topic": "Knee anatomy",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 28-year-old male basketball player presents with acute knee pain and swelling after landing from a jump. He reports difficulty straightening his knee.",
    "question": "What is the most likely mechanism causing his inability to straighten the knee?",
    "explainer": "The patellar tendon connects the patella (kneecap) to the tibia. It is crucial for extending the knee. A tear in the patellar tendon can prevent the quadriceps from effectively straightening the knee, leading to the inability to extend the leg.",
    "options": [
      {
        "key": "A",
        "text": "Ligamentous instability",
        "correct": false,
        "response": "Ligamentous instability typically involves the ligaments around the knee, such as the ACL or MCL, which can cause knee instability but not specifically the inability to extend the knee."
      },
      {
        "key": "B",
        "text": "Patellar tendon rupture",
        "correct": true,
        "response": "A patellar tendon rupture would disrupt the connection between the quadriceps muscle and the tibia, preventing the knee from extending. This would explain the patient's inability to straighten the knee."
      },
      {
        "key": "C",
        "text": "Meniscal tear",
        "correct": false,
        "response": "A meniscal tear can cause pain and swelling but does not typically affect the ability to extend the knee. The meniscus is a cushioning structure within the knee joint and does not directly contribute to knee extension."
      }
    ],
    "pearls": [
      "The patellar tendon is essential for knee extension.",
      "Ruptures can occur from sudden, forceful contractions of the quadriceps."
    ]
  },
  {
    "id": "knee-anatomy-quad-muscle-atrophy",
    "topic": "Knee anatomy",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old female with a history of total knee arthroplasty 6 months ago presents with weakened knee extension and visible muscle atrophy. She has been non-weight-bearing for the past 2 months.",
    "question": "What is the most likely cause of her muscle atrophy and weakened knee extension?",
    "explainer": "Muscle atrophy can occur when muscles are not used, leading to a decrease in muscle mass and strength. In this case, the patient's non-weight-bearing status has likely caused the quadriceps muscles to atrophy, reducing their ability to extend the knee.",
    "options": [
      {
        "key": "A",
        "text": "Neurogenic atrophy",
        "correct": false,
        "response": "Neurogenic atrophy results from nerve damage, which is not indicated in this patient's history. The atrophy is more likely due to disuse rather than a neurological condition."
      },
      {
        "key": "B",
        "text": "Disuse atrophy",
        "correct": true,
        "response": "Disuse atrophy occurs when muscles are not used, leading to a decrease in muscle mass and strength. This is a common issue in patients who are non-weight-bearing after surgery."
      },
      {
        "key": "C",
        "text": "Inflammatory atrophy",
        "correct": false,
        "response": "Inflammatory atrophy is typically associated with chronic inflammatory conditions like rheumatoid arthritis, which is not indicated in this patient's history."
      }
    ],
    "pearls": [
      "Disuse atrophy can occur from prolonged non-weight-bearing.",
      "Rehabilitation and gradual weight-bearing can help restore muscle strength."
    ]
  },
  {
    "id": "knee-anatomy-patellar-tracking-disorder",
    "topic": "Knee anatomy",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 16-year-old female runner presents with chronic knee pain, especially during activities like running and squatting. She has a history of patellar subluxation.",
    "question": "What anatomical feature is most likely contributing to her patellar subluxation?",
    "explainer": "The patella tracks in the trochlear groove of the femur. Abnormalities in the shape or alignment of the trochlear groove can cause the patella to subluxate or dislocate, leading to pain and instability during movement.",
    "options": [
      {
        "key": "A",
        "text": "Tibial tuberosity misalignment",
        "correct": false,
        "response": "While tibial tuberosity misalignment can contribute to patellar tracking issues, it is not the primary anatomical feature responsible for patellar subluxation."
      },
      {
        "key": "B",
        "text": "Trochlear dysplasia",
        "correct": true,
        "response": "Trochlear dysplasia, an abnormal shape of the trochlear groove, can lead to patellar instability and subluxation. This is a common cause of patellar tracking disorders."
      },
      {
        "key": "C",
        "text": "Medial collateral ligament (MCL) tear",
        "correct": false,
        "response": "An MCL tear can cause knee instability but does not specifically affect the patellar tracking. Patellar tracking issues are more related to the shape and alignment of the patella and trochlear groove."
      }
    ],
    "pearls": [
      "Trochlear dysplasia can cause patellar subluxation.",
      "Patellar tracking disorders often require both conservative and surgical management."
    ]
  },
  {
    "id": "knee-anatomy-patellofemoral-pain",
    "topic": "Knee anatomy",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 50-year-old male office worker presents with anterior knee pain that worsens with prolonged sitting and climbing stairs. He has no history of trauma.",
    "question": "What is the most likely cause of his anterior knee pain?",
    "explainer": "Patellofemoral pain syndrome (PFPS) is a common condition characterized by pain in the front of the knee. It often occurs due to misalignment or excessive pressure on the patellofemoral joint, which can be exacerbated by activities that involve knee flexion, such as sitting or climbing stairs.",
    "options": [
      {
        "key": "A",
        "text": "Osteoarthritis",
        "correct": false,
        "response": "While osteoarthritis can cause knee pain, it typically affects the joint surfaces and is more common in older adults with a history of joint wear. The patient's pain pattern is more consistent with patellofemoral pain syndrome."
      },
      {
        "key": "B",
        "text": "Patellofemoral pain syndrome",
        "correct": true,
        "response": "Patellofemoral pain syndrome (PFPS) is a common cause of anterior knee pain, especially in individuals who engage in activities that involve knee flexion. The pain often worsens with prolonged sitting and climbing stairs, matching the patient's symptoms."
      },
      {
        "key": "C",
        "text": "Iliotibial band syndrome",
        "correct": false,
        "response": "Iliotibial band syndrome typically causes pain on the outer side of the knee, not the anterior knee. The pain is more likely to be related to the patellofemoral joint in this case."
      }
    ],
    "pearls": [
      "PFPS is common in individuals with sedentary lifestyles.",
      "Strengthening exercises and proper ergonomics can help manage PFPS."
    ]
  },
  {
    "id": "knee-anatomy-baker-cyst",
    "topic": "Knee anatomy",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 35-year-old female with a history of rheumatoid arthritis presents with a painful swelling behind her knee that worsens with activity. She has a history of knee effusion.",
    "question": "What is the most likely cause of the painful swelling behind her knee?",
    "explainer": "A Baker's cyst, also known as a popliteal cyst, is a fluid-filled sac that develops behind the knee. It is often a result of excess synovial fluid from conditions like arthritis, leading to a bulge and tightness behind the knee. The cyst can become painful with activity due to increased pressure and inflammation.",
    "options": [
      {
        "key": "A",
        "text": "Meniscal tear",
        "correct": false,
        "response": "A meniscal tear can cause pain and swelling within the knee joint but does not typically result in a distinct swelling behind the knee. The location of the swelling is more indicative of a Baker's cyst."
      },
      {
        "key": "B",
        "text": "Baker's cyst",
        "correct": true,
        "response": "A Baker's cyst is a common cause of a painful swelling behind the knee, especially in patients with conditions that lead to knee effusion, such as rheumatoid arthritis. The cyst forms from excess synovial fluid and can become symptomatic with activity."
      },
      {
        "key": "C",
        "text": "Popliteal artery aneurysm",
        "correct": false,
        "response": "A popliteal artery aneurysm can cause a swelling behind the knee but is less common and typically associated with vascular symptoms rather than joint-related pain. The patient's history of knee effusion makes a Baker's cyst more likely."
      }
    ],
    "pearls": [
      "Baker's cysts are often associated with knee effusion.",
      "Treatment may involve addressing the underlying cause of the effusion."
    ]
  },
  {
    "id": "22-year-old-male-football-player",
    "topic": "ACL tears",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 22-year-old male football player presents with acute knee pain and swelling after a non-contact pivot during a game. He reports hearing a 'pop' at the time of injury.",
    "question": "What biomechanical force primarily contributes to an ACL tear in this scenario?",
    "explainer": "The ACL (anterior cruciate ligament) is crucial for stabilizing the knee and preventing anterior translation of the tibia. During a non-contact pivot, the knee is often in a valgus (knock-kneed) position with internal tibial rotation and knee flexion, which can cause excessive anterior shear force on the tibia, leading to ACL rupture.",
    "options": [
      {
        "key": "A",
        "text": "Valgus stress",
        "correct": false,
        "response": "While valgus stress (knock-kneed position) can contribute to ACL injury, it is the resultant anterior shear force on the tibia that primarily causes the tear. Valgus stress alone is not enough to tear the ACL."
      },
      {
        "key": "B",
        "text": "Anterior shear force",
        "correct": true,
        "response": "The ACL is particularly vulnerable to anterior shear forces, which occur when the tibia moves forward relative to the femur. During a non-contact pivot, the combination of valgus stress and internal tibial rotation creates this anterior shear, leading to ACL rupture."
      },
      {
        "key": "C",
        "text": "External rotation of the femur",
        "correct": false,
        "response": "External rotation of the femur can increase the tension on the ACL, but it is not the primary force in a non-contact pivot injury. The key force is the anterior shear on the tibia, which is more directly related to the mechanism of ACL tear."
      }
    ],
    "pearls": [
      "Anterior shear force is the primary mechanism of ACL tears in non-contact injuries.",
      "Combination of valgus stress and internal tibial rotation increases the risk of ACL tear."
    ]
  },
  {
    "id": "16-year-old-female-dancer",
    "topic": "ACL tears",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 16-year-old female dancer presents with knee pain and instability after landing from a jump. She reports a sensation of the knee 'giving way' and difficulty bearing weight.",
    "question": "Why is the ACL particularly important for knee stability during landing from a jump?",
    "explainer": "The ACL plays a critical role in stabilizing the knee by preventing anterior translation of the tibia relative to the femur. During landing, the force of impact can cause the tibia to move forward, which the ACL resists to maintain knee stability. Without this support, the knee can feel unstable and 'give way.'",
    "options": [
      {
        "key": "A",
        "text": "It provides medial stability",
        "correct": false,
        "response": "The ACL does not primarily provide medial stability. The medial collateral ligament (MCL) is responsible for medial stability. The ACL's main function is to prevent anterior translation of the tibia."
      },
      {
        "key": "B",
        "text": "It prevents anterior translation of the tibia",
        "correct": true,
        "response": "The ACL is crucial for preventing the tibia from moving forward (anterior translation) during activities that involve sudden stops, changes in direction, and landing from jumps. This function is essential for maintaining knee stability and preventing the sensation of the knee 'giving way.'"
      },
      {
        "key": "C",
        "text": "It stabilizes the patella",
        "correct": false,
        "response": "The ACL does not directly stabilize the patella. The patella is stabilized by the quadriceps and patellar tendons. The ACL's primary role is to prevent anterior translation of the tibia and maintain overall knee stability."
      }
    ],
    "pearls": [
      "The ACL prevents anterior translation of the tibia, crucial for knee stability.",
      "Injury to the ACL can lead to a sensation of the knee 'giving way' during activities like landing from a jump."
    ]
  },
  {
    "id": "30-year-old-male-car-accident",
    "topic": "ACL tears",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 30-year-old male is involved in a car accident and presents with knee pain and swelling. He reports that his knee was hyperextended during the impact.",
    "question": "How does hyperextension of the knee contribute to ACL injury?",
    "explainer": "The ACL is designed to resist anterior translation of the tibia, but it also helps stabilize the knee against hyperextension. When the knee is hyperextended, the ACL becomes taut and can rupture under excessive force. This is because the tibia is pushed anteriorly as the knee extends beyond its normal range, leading to ACL tear.",
    "options": [
      {
        "key": "A",
        "text": "It increases the risk of MCL tear",
        "correct": false,
        "response": "While hyperextension can increase the risk of MCL tear due to the valgus stress, the primary mechanism of ACL injury in hyperextension is the excessive anterior translation of the tibia. The MCL is more involved in medial stability."
      },
      {
        "key": "B",
        "text": "It causes excessive anterior translation of the tibia",
        "correct": true,
        "response": "Hyperextension of the knee leads to excessive anterior translation of the tibia, which the ACL resists. When the knee is hyperextended, the ACL becomes taut and can rupture under the excessive force, leading to an ACL tear."
      },
      {
        "key": "C",
        "text": "It leads to posterior translation of the tibia",
        "correct": false,
        "response": "Hyperextension of the knee does not lead to posterior translation of the tibia. Instead, it causes the tibia to move forward (anterior translation), which is the primary mechanism of ACL injury in this scenario."
      }
    ],
    "pearls": [
      "Hyperextension of the knee increases the risk of ACL tear by causing excessive anterior translation of the tibia.",
      "The ACL resists anterior translation, which is crucial during hyperextension."
    ]
  },
  {
    "id": "45-year-old-female-snowboarder",
    "topic": "ACL tears",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 45-year-old female snowboarder presents with knee pain and swelling after falling while making a sharp turn. She reports a sensation of the knee 'giving way' and difficulty walking.",
    "question": "What is the role of the ACL in maintaining knee stability during turning maneuvers?",
    "explainer": "The ACL is essential for maintaining knee stability during turning maneuvers by preventing anterior translation of the tibia. When the knee is in a flexed position and the tibia rotates internally, the ACL resists the forward movement of the tibia, which helps maintain knee stability. Without the ACL, the knee can feel unstable and 'give way.'",
    "options": [
      {
        "key": "A",
        "text": "It resists posterior translation of the tibia",
        "correct": false,
        "response": "The ACL does not primarily resist posterior translation of the tibia. The posterior cruciate ligament (PCL) is responsible for resisting posterior translation. The ACL's main function is to prevent anterior translation of the tibia."
      },
      {
        "key": "B",
        "text": "It prevents anterior translation of the tibia",
        "correct": true,
        "response": "The ACL is crucial for preventing the tibia from moving forward (anterior translation) during activities that involve turning and sudden changes in direction. This function is essential for maintaining knee stability and preventing the sensation of the knee 'giving way.'"
      },
      {
        "key": "C",
        "text": "It stabilizes the patella",
        "correct": false,
        "response": "The ACL does not directly stabilize the patella. The patella is stabilized by the quadriceps and patellar tendons. The ACL's primary role is to prevent anterior translation of the tibia and maintain overall knee stability."
      }
    ],
    "pearls": [
      "The ACL prevents anterior translation of the tibia, crucial for knee stability during turning maneuvers.",
      "ACL injury can lead to a sensation of the knee 'giving way' during activities like turning."
    ]
  },
  {
    "id": "18-year-old-male-basketball-player",
    "topic": "ACL tears",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "An 18-year-old male basketball player presents with knee pain and swelling after landing awkwardly from a jump. He reports a 'popping' sound and difficulty bearing weight.",
    "question": "What is the primary mechanism of ACL injury during a landing from a jump?",
    "explainer": "During a landing from a jump, the primary mechanism of ACL injury is the combination of valgus stress, internal tibial rotation, and anterior shear force. These forces cause the tibia to move forward relative to the femur, leading to excessive tension on the ACL and potential rupture.",
    "options": [
      {
        "key": "A",
        "text": "Excessive valgus stress",
        "correct": false,
        "response": "While excessive valgus stress can contribute to ACL injury, it is not the primary mechanism. The key force is the anterior shear on the tibia, which is more directly related to the mechanism of ACL tear during landing from a jump."
      },
      {
        "key": "B",
        "text": "Anterior shear force on the tibia",
        "correct": true,
        "response": "The primary mechanism of ACL injury during a landing from a jump is the anterior shear force on the tibia. This force occurs when the tibia moves forward relative to the femur, causing excessive tension on the ACL and leading to potential rupture."
      },
      {
        "key": "C",
        "text": "Excessive external rotation of the femur",
        "correct": false,
        "response": "Excessive external rotation of the femur can increase the tension on the ACL, but it is not the primary mechanism of ACL injury during a landing from a jump. The key force is the anterior shear on the tibia, which is more directly related to the mechanism of ACL tear."
      }
    ],
    "pearls": [
      "Anterior shear force is the primary mechanism of ACL tears during landing from a jump.",
      "Combination of valgus stress and internal tibial rotation increases the risk of ACL tear."
    ]
  },
  {
    "id": "young-athlete-with-knee-pain",
    "topic": "Meniscus tears",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 22-year-old male soccer player presents with acute knee pain after pivoting and hearing a pop. He has difficulty bearing weight on the affected leg.",
    "question": "What is the primary biomechanical reason for his pain and difficulty bearing weight?",
    "explainer": "The meniscus is a C-shaped piece of cartilage that acts as a shock absorber between the femur and tibia. When it tears, the shock-absorbing function is compromised, leading to increased friction and pain. The pop he heard likely indicates a sudden tear.",
    "options": [
      {
        "key": "A",
        "text": "Increased synovial fluid production",
        "correct": false,
        "response": "While increased synovial fluid can occur as a secondary response to knee injury, it is not the primary cause of his acute pain and weight-bearing difficulty. The primary issue is the compromised meniscal function."
      },
      {
        "key": "B",
        "text": "Compromised shock-absorbing function of the meniscus",
        "correct": true,
        "response": "The meniscus acts as a shock absorber. When it tears, the knee loses this function, leading to increased friction, pain, and difficulty bearing weight. This is the primary reason for his symptoms."
      },
      {
        "key": "C",
        "text": "Muscle atrophy in the quadriceps",
        "correct": false,
        "response": "Muscle atrophy in the quadriceps can occur with prolonged immobility, but it is not the primary cause of acute pain and weight-bearing difficulty in this scenario. The meniscal tear is the primary issue."
      }
    ],
    "pearls": [
      "The meniscus acts as a shock absorber in the knee.",
      "Tears compromise this function, leading to pain and instability."
    ]
  },
  {
    "id": "middle-aged-woman-with-knee-swelling",
    "topic": "Meniscus tears",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old woman presents with gradual onset of knee swelling and pain over the past few months. She reports that her knee occasionally locks and feels unstable.",
    "question": "What anatomical feature of the meniscus contributes to the locking sensation in her knee?",
    "explainer": "The meniscus has a concave shape that fits around the convex surface of the femur. When a tear occurs, a portion of the meniscus can flip into the joint space, causing the knee to lock. This is because the torn fragment impedes the normal movement of the joint.",
    "options": [
      {
        "key": "A",
        "text": "The meniscal horns' attachment to the tibia",
        "correct": false,
        "response": "While the meniscal horns are attached to the tibia, their attachment is not the primary cause of the locking sensation. The locking is due to a torn fragment flipping into the joint space."
      },
      {
        "key": "B",
        "text": "A torn fragment flipping into the joint space",
        "correct": true,
        "response": "The meniscus has a concave shape that fits around the femur. When a tear occurs, a portion of the meniscus can flip into the joint space, causing the knee to lock. This is the anatomical feature responsible for the locking sensation."
      },
      {
        "key": "C",
        "text": "Increased joint capsule laxity",
        "correct": false,
        "response": "While joint capsule laxity can contribute to instability, it is not the primary cause of the locking sensation. The locking is specifically due to a torn meniscal fragment impeding joint movement."
      }
    ],
    "pearls": [
      "Torn meniscal fragments can flip into the joint space, causing locking.",
      "This is a common symptom of meniscal tears."
    ]
  },
  {
    "id": "elderly-man-with-chronic-knee-pain",
    "topic": "Meniscus tears",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 70-year-old man with a history of osteoarthritis presents with chronic knee pain. He reports that his knee feels unstable and sometimes gives out when he walks.",
    "question": "How does the degeneration of the meniscus contribute to his knee instability?",
    "explainer": "As the meniscus degenerates, it loses its ability to distribute and absorb forces evenly. This leads to increased stress on the articular cartilage and surrounding structures, contributing to pain and instability. The degeneration also reduces the meniscus's ability to stabilize the joint, leading to a feeling of giving out.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density in the femur and tibia",
        "correct": false,
        "response": "Increased bone density is not a common feature of meniscal degeneration. The primary issue is the loss of meniscal function, which leads to instability and pain."
      },
      {
        "key": "B",
        "text": "Loss of meniscal function and reduced shock absorption",
        "correct": true,
        "response": "As the meniscus degenerates, it loses its ability to distribute and absorb forces evenly. This leads to increased stress on the articular cartilage and surrounding structures, contributing to pain and instability. The reduced shock absorption also causes the knee to feel unstable."
      },
      {
        "key": "C",
        "text": "Increased synovial fluid production",
        "correct": false,
        "response": "While increased synovial fluid can occur as a secondary response to knee injury, it is not the primary cause of his chronic pain and instability. The degeneration of the meniscus is the primary issue."
      }
    ],
    "pearls": [
      "Meniscal degeneration reduces its shock-absorbing function.",
      "This leads to increased joint stress and instability."
    ]
  },
  {
    "id": "teenager-with-knee-injury-after-jumping",
    "topic": "Meniscus tears",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 16-year-old male basketball player presents with knee pain after landing awkwardly from a jump. He reports a sharp pain and a feeling of something giving way in his knee.",
    "question": "What mechanical force during landing is most likely to cause a meniscal tear in this patient?",
    "explainer": "During landing, the combination of compression and rotation can put significant stress on the meniscus. The meniscus is designed to distribute forces, but sudden, high-intensity forces can exceed its capacity, leading to a tear. The sharp pain and feeling of something giving way suggest a meniscal injury.",
    "options": [
      {
        "key": "A",
        "text": "Lateral knee compression",
        "correct": false,
        "response": "While lateral knee compression can cause injury, it is not the most likely mechanism in this scenario. The combination of compression and rotation during landing is more common and more likely to cause a meniscal tear."
      },
      {
        "key": "B",
        "text": "Compression and rotation of the knee",
        "correct": true,
        "response": "During landing, the knee experiences both compression and rotation. These forces can put significant stress on the meniscus, leading to a tear. The meniscus is designed to distribute forces, but sudden, high-intensity forces can exceed its capacity."
      },
      {
        "key": "C",
        "text": "Medial knee compression",
        "correct": false,
        "response": "While medial knee compression can cause injury, it is not the most likely mechanism in this scenario. The combination of compression and rotation during landing is more common and more likely to cause a meniscal tear."
      }
    ],
    "pearls": [
      "Meniscal tears often occur with a combination of compression and rotation.",
      "This is a common injury mechanism in sports."
    ]
  },
  {
    "id": "runner-with-gradual-onset-knee-pain",
    "topic": "Meniscus tears",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 35-year-old female runner presents with gradual onset of knee pain over the past few weeks. She reports that the pain is worse with activities that involve knee flexion and feels a clicking sensation at times.",
    "question": "What aspect of the meniscus's structure makes it susceptible to tearing under repetitive flexion?",
    "explainer": "The meniscus is composed of fibrocartilage, which is less elastic and more prone to tearing under repetitive stress. The clicking sensation is often due to a torn fragment moving within the joint, which can occur with repetitive flexion. This repetitive motion can cause micro-tears that eventually lead to a full tear.",
    "options": [
      {
        "key": "A",
        "text": "The avascular nature of the meniscus",
        "correct": false,
        "response": "While the avascular nature of the meniscus can affect healing, it is not the primary reason for its susceptibility to tearing under repetitive flexion. The structure and elasticity of the meniscus are more critical factors."
      },
      {
        "key": "B",
        "text": "The fibrocartilaginous structure of the meniscus",
        "correct": true,
        "response": "The meniscus is composed of fibrocartilage, which is less elastic and more prone to tearing under repetitive stress. The clicking sensation is often due to a torn fragment moving within the joint, which can occur with repetitive flexion. This repetitive motion can cause micro-tears that eventually lead to a full tear."
      },
      {
        "key": "C",
        "text": "The attachment of the meniscus to the joint capsule",
        "correct": false,
        "response": "While the attachment of the meniscus to the joint capsule is important for stability, it is not the primary reason for its susceptibility to tearing under repetitive flexion. The structure and elasticity of the meniscus are more critical factors."
      }
    ],
    "pearls": [
      "The meniscus is composed of fibrocartilage, which is less elastic.",
      "Repetitive flexion can cause micro-tears that lead to a full tear."
    ]
  },
  {
    "id": "16-year-old-female-with-knee-pain",
    "topic": "Patellofemoral syndrome",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 16-year-old female presents with anterior knee pain that worsens with prolonged sitting and descending stairs. She is an avid runner and has no history of trauma.",
    "question": "What biomechanical factor most likely contributes to her patellofemoral pain?",
    "explainer": "The patellofemoral joint is a complex interaction between the patella and the femoral trochlea. Pain often arises from malalignment or excessive stress on this joint. In this case, the patient's activities and symptoms suggest that the patella is not tracking properly within the trochlear groove.",
    "options": [
      {
        "key": "A",
        "text": "Increased quadriceps strength",
        "correct": false,
        "response": "Increased quadriceps strength can actually help stabilize the patella and reduce pain. However, if the strength is uneven (e.g., stronger vastus lateralis), it can contribute to maltracking."
      },
      {
        "key": "B",
        "text": "Lateral patellar tracking",
        "correct": true,
        "response": "Lateral patellar tracking is a common cause of patellofemoral pain. It occurs when the patella moves too far to the outside of the trochlear groove, leading to increased pressure and pain."
      },
      {
        "key": "C",
        "text": "Medial patellar dislocation",
        "correct": false,
        "response": "Medial patellar dislocation is less common and typically occurs due to trauma. In this case, the patient has no history of trauma, making this less likely."
      }
    ],
    "pearls": [
      "Lateral patellar tracking is a common cause of patellofemoral pain.",
      "Patella malalignment can be addressed with strengthening and stretching exercises."
    ]
  },
  {
    "id": "45-year-old-male-with-stair-climbing-pain",
    "topic": "Patellofemoral syndrome",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old male presents with anterior knee pain that worsens when climbing stairs. He has a sedentary job and recently started a new exercise regimen involving cycling and jogging.",
    "question": "What factor in his exercise regimen is most likely contributing to his patellofemoral pain?",
    "explainer": "Patellofemoral pain can be exacerbated by activities that increase the load on the patellofemoral joint. Cycling and jogging both involve repetitive knee flexion and extension, which can increase the contact forces between the patella and the femur.",
    "options": [
      {
        "key": "A",
        "text": "Cycling on flat terrain",
        "correct": false,
        "response": "Cycling on flat terrain generally does not place excessive stress on the patellofemoral joint. However, incorrect bike setup or high resistance can contribute to pain."
      },
      {
        "key": "B",
        "text": "Jogging on hilly terrain",
        "correct": true,
        "response": "Jogging on hilly terrain, especially uphill, significantly increases the load on the patellofemoral joint. This can lead to increased contact forces and pain."
      },
      {
        "key": "C",
        "text": "Sitting for long periods at work",
        "correct": false,
        "response": "Prolonged sitting can contribute to stiffness and muscle imbalance, but it is not a primary cause of patellofemoral pain. The patient's recent increase in physical activity is more likely the culprit."
      }
    ],
    "pearls": [
      "Jogging on hilly terrain increases the load on the patellofemoral joint.",
      "Proper warm-up and gradual increase in activity can prevent patellofemoral pain."
    ]
  },
  {
    "id": "28-year-old-female-dancer-with-knee-pain",
    "topic": "Patellofemoral syndrome",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 28-year-old female dancer presents with anterior knee pain that worsens with deep knee bends and jumping. She has been performing in a new dance routine that involves more knee flexion.",
    "question": "What biomechanical issue is most likely contributing to her patellofemoral pain?",
    "explainer": "Dancers often experience patellofemoral pain due to the repetitive and high-impact nature of their movements. Deep knee bends and jumping increase the contact forces between the patella and the femur, which can lead to pain and inflammation.",
    "options": [
      {
        "key": "A",
        "text": "Weak hip abductors",
        "correct": false,
        "response": "Weak hip abductors can contribute to poor lower limb alignment, but they are not the primary cause of patellofemoral pain in this scenario. The increased knee flexion and jumping are more directly related."
      },
      {
        "key": "B",
        "text": "Increased patellofemoral contact forces",
        "correct": true,
        "response": "Increased patellofemoral contact forces are a direct result of the deep knee bends and jumping in her new dance routine. These movements place more stress on the patellofemoral joint, leading to pain and inflammation."
      },
      {
        "key": "C",
        "text": "Tight iliotibial band",
        "correct": false,
        "response": "A tight iliotibial band can contribute to lateral patellar tracking, but the primary issue here is the increased contact forces from the high-impact activities."
      }
    ],
    "pearls": [
      "Increased patellofemoral contact forces from deep knee bends and jumping can cause pain.",
      "Proper technique and conditioning can help prevent patellofemoral syndrome."
    ]
  },
  {
    "id": "32-year-old-male-office-worker-with-knee-pain",
    "topic": "Patellofemoral syndrome",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 32-year-old male office worker presents with anterior knee pain that has been gradually worsening over the past few months. He has a sedentary job and occasionally plays recreational basketball.",
    "question": "What factor in his lifestyle is most likely contributing to his patellofemoral pain?",
    "explainer": "Patellofemoral pain can be influenced by a combination of sedentary behavior and sporadic high-impact activities. Prolonged sitting can lead to muscle imbalances and stiffness, while sudden increases in activity can overload the patellofemoral joint.",
    "options": [
      {
        "key": "A",
        "text": "Prolonged sitting at work",
        "correct": true,
        "response": "Prolonged sitting can lead to muscle imbalances and stiffness, particularly in the quadriceps and hamstrings. This can alter the tracking of the patella and contribute to patellofemoral pain."
      },
      {
        "key": "B",
        "text": "Recreational basketball",
        "correct": false,
        "response": "Recreational basketball can contribute to patellofemoral pain, but the gradual onset and worsening of symptoms suggest a more chronic issue related to his sedentary job."
      },
      {
        "key": "C",
        "text": "Poor footwear",
        "correct": false,
        "response": "Poor footwear can contribute to lower limb alignment issues, but the primary factor in this case is the combination of sedentary behavior and sporadic high-impact activity."
      }
    ],
    "pearls": [
      "Prolonged sitting can lead to muscle imbalances and stiffness.",
      "Balancing sedentary behavior with regular, moderate exercise can help prevent patellofemoral pain."
    ]
  },
  {
    "id": "18-year-old-male-soccer-player-with-knee-pain",
    "topic": "Patellofemoral syndrome",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "An 18-year-old male soccer player presents with anterior knee pain that worsens with running and cutting movements. He has been playing more frequently due to the upcoming season.",
    "question": "What biomechanical issue is most likely contributing to his patellofemoral pain?",
    "explainer": "Soccer players often experience patellofemoral pain due to the repetitive and high-impact nature of their sport. Running and cutting movements place significant stress on the patellofemoral joint, which can lead to pain and inflammation.",
    "options": [
      {
        "key": "A",
        "text": "Ligament instability",
        "correct": false,
        "response": "Ligament instability can contribute to knee pain, but it is not the primary cause of patellofemoral pain in this scenario. The repetitive stress from running and cutting is more directly related."
      },
      {
        "key": "B",
        "text": "Increased patellofemoral contact forces",
        "correct": true,
        "response": "Increased patellofemoral contact forces are a direct result of the running and cutting movements in soccer. These activities place more stress on the patellofemoral joint, leading to pain and inflammation."
      },
      {
        "key": "C",
        "text": "Hamstring tightness",
        "correct": false,
        "response": "Hamstring tightness can contribute to poor lower limb alignment, but the primary issue here is the increased contact forces from the high-impact activities."
      }
    ],
    "pearls": [
      "Increased patellofemoral contact forces from running and cutting can cause pain.",
      "Proper warm-up and conditioning can help prevent patellofemoral syndrome."
    ]
  },
  {
    "id": "knee-osteoarthritis-patellofemoral-pain",
    "topic": "Knee osteoarthritis",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 55-year-old woman presents with anterior knee pain that worsens with stairs and sitting for long periods. She has a history of patellofemoral pain syndrome.",
    "question": "What biomechanical factor contributes to her knee pain in this scenario?",
    "explainer": "Patellofemoral pain syndrome is often due to abnormal tracking of the patella in the femoral trochlea. This can lead to increased contact pressure and wear on the articular cartilage, especially during activities that increase patellar load, like climbing stairs.",
    "options": [
      {
        "key": "A",
        "text": "Increased patellar tracking in the lateral trochlear groove",
        "correct": true,
        "response": "Abnormal patellar tracking, often lateral, increases contact pressure and wear on the articular cartilage, leading to pain and degeneration over time."
      },
      {
        "key": "B",
        "text": "Decreased quadriceps muscle strength",
        "correct": false,
        "response": "While decreased quadriceps strength can contribute to patellar instability, the primary issue here is the abnormal tracking pattern, not the muscle strength."
      },
      {
        "key": "C",
        "text": "Increased knee flexion angle",
        "correct": false,
        "response": "Increased knee flexion can increase patellar load, but the primary issue in this case is the abnormal tracking of the patella, not the flexion angle itself."
      }
    ],
    "pearls": [
      "Abnormal patellar tracking increases contact pressure on the articular cartilage.",
      "Patellofemoral pain syndrome can progress to osteoarthritis if left untreated."
    ]
  },
  {
    "id": "knee-osteoarthritis-weight-bearing-stress",
    "topic": "Knee osteoarthritis",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 65-year-old obese male patient presents with pain in his right knee, especially during weight-bearing activities. He has a history of knee trauma 20 years ago.",
    "question": "How does obesity contribute to the development of knee osteoarthritis in this patient?",
    "explainer": "Obesity increases the mechanical load on the knee joints, particularly during weight-bearing activities. This increased load accelerates the wear and tear of the articular cartilage, leading to osteoarthritis.",
    "options": [
      {
        "key": "A",
        "text": "Increased inflammatory cytokines in the synovial fluid",
        "correct": false,
        "response": "While obesity can increase systemic inflammation, the primary mechanism in this scenario is the increased mechanical load on the knee joint due to excess weight."
      },
      {
        "key": "B",
        "text": "Increased mechanical load on the knee joint",
        "correct": true,
        "response": "Obesity directly increases the mechanical load on weight-bearing joints like the knee, accelerating cartilage wear and leading to osteoarthritis."
      },
      {
        "key": "C",
        "text": "Decreased synovial fluid production",
        "correct": false,
        "response": "Synovial fluid production can be affected by various factors, but the primary issue in this case is the increased mechanical load due to obesity."
      }
    ],
    "pearls": [
      "Excess weight increases the mechanical load on weight-bearing joints.",
      "Knee trauma can predispose to osteoarthritis by disrupting normal joint mechanics."
    ]
  },
  {
    "id": "knee-osteoarthritis-malalignment",
    "topic": "Knee osteoarthritis",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 60-year-old woman with a history of varus deformity (bow-legged) presents with medial knee pain that has progressively worsened over the past year.",
    "question": "How does varus deformity contribute to her knee pain?",
    "explainer": "Varus deformity places increased stress on the medial compartment of the knee, leading to excessive wear and tear of the articular cartilage. This increased stress accelerates the degenerative process and causes pain.",
    "options": [
      {
        "key": "A",
        "text": "Increased stress on the lateral compartment",
        "correct": false,
        "response": "Varus deformity places increased stress on the medial compartment, not the lateral compartment, leading to pain and degeneration."
      },
      {
        "key": "B",
        "text": "Increased stress on the medial compartment",
        "correct": true,
        "response": "Varus deformity causes the weight-bearing axis to shift medially, increasing the stress on the medial compartment and leading to degeneration and pain."
      },
      {
        "key": "C",
        "text": "Decreased patellar tracking",
        "correct": false,
        "response": "While patellar tracking can be affected by lower limb alignment, the primary issue in this case is the increased stress on the medial compartment due to varus deformity."
      }
    ],
    "pearls": [
      "Varus deformity increases stress on the medial knee compartment.",
      "Malalignment can accelerate joint degeneration and pain."
    ]
  },
  {
    "id": "knee-osteoarthritis-cartilage-degeneration",
    "topic": "Knee osteoarthritis",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 70-year-old man with a history of knee osteoarthritis presents with worsening pain and stiffness. MRI shows significant cartilage loss in the medial compartment.",
    "question": "What cellular mechanism primarily contributes to the cartilage loss in his knee?",
    "explainer": "Cartilage loss in osteoarthritis is primarily due to the breakdown of the extracellular matrix by catabolic enzymes. These enzymes are produced by chondrocytes in response to mechanical stress and inflammatory mediators.",
    "options": [
      {
        "key": "A",
        "text": "Increased production of anabolic enzymes",
        "correct": false,
        "response": "Anabolic enzymes are involved in building and repairing cartilage, but the primary issue in osteoarthritis is the increased production of catabolic enzymes that break down the extracellular matrix."
      },
      {
        "key": "B",
        "text": "Increased production of catabolic enzymes",
        "correct": true,
        "response": "Catabolic enzymes, such as matrix metalloproteinases (MMPs) and aggrecanases, are overproduced by chondrocytes in response to mechanical stress and inflammation, leading to cartilage degradation."
      },
      {
        "key": "C",
        "text": "Decreased production of synovial fluid",
        "correct": false,
        "response": "While synovial fluid production can affect joint health, the primary mechanism of cartilage loss in osteoarthritis is the production of catabolic enzymes by chondrocytes."
      }
    ],
    "pearls": [
      "Catabolic enzymes break down the extracellular matrix in cartilage.",
      "Mechanical stress and inflammation trigger the production of these enzymes by chondrocytes."
    ]
  },
  {
    "id": "knee-osteoarthritis-pain-mechanisms",
    "topic": "Knee osteoarthritis",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 62-year-old woman with knee osteoarthritis reports increasing pain and difficulty walking. She has no history of trauma but notes that her pain is worse in the morning and improves with activity.",
    "question": "What is the primary mechanism of her knee pain in this scenario?",
    "explainer": "The pain in knee osteoarthritis is often due to the release of inflammatory mediators from the damaged joint tissues. These mediators sensitize nociceptors, leading to pain. Morning stiffness is common due to the accumulation of these mediators during inactivity.",
    "options": [
      {
        "key": "A",
        "text": "Increased bone density",
        "correct": false,
        "response": "Increased bone density is not a primary cause of pain in knee osteoarthritis. The pain is more related to inflammatory mediators and joint mechanics."
      },
      {
        "key": "B",
        "text": "Release of inflammatory mediators",
        "correct": true,
        "response": "Inflammatory mediators, such as prostaglandins and cytokines, are released by damaged joint tissues and sensitize nociceptors, leading to pain. Morning stiffness is common due to the accumulation of these mediators during inactivity."
      },
      {
        "key": "C",
        "text": "Degeneration of the menisci",
        "correct": false,
        "response": "While meniscal degeneration can contribute to knee pain, the primary mechanism in this scenario is the release of inflammatory mediators from the damaged joint tissues."
      }
    ],
    "pearls": [
      "Inflammatory mediators sensitize nociceptors, causing pain in osteoarthritis.",
      "Morning stiffness is due to the accumulation of inflammatory mediators during inactivity."
    ]
  },
  {
    "id": "tibial-plateau-fracture-mechanism",
    "topic": "Tibial plateau fractures",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 45-year-old male presents after a motorcycle accident. He complains of severe knee pain and inability to bear weight. On examination, there is swelling and tenderness over the knee.",
    "question": "What is the primary mechanism of injury that leads to a tibial plateau fracture in this patient?",
    "explainer": "Tibial plateau fractures typically occur due to a varus or valgus force applied to the knee when the foot is planted. In this case, the motorcycle accident likely resulted in a high-impact force to the knee, causing the tibia to crush under the femur.",
    "options": [
      {
        "key": "A",
        "text": "Direct axial load to the knee",
        "correct": false,
        "response": "While a direct axial load can cause knee injuries, tibial plateau fractures are more commonly associated with varus or valgus forces. Axial loads are more likely to cause patellar or femoral shaft fractures."
      },
      {
        "key": "B",
        "text": "Varus or valgus force with the foot planted",
        "correct": true,
        "response": "This is correct. The tibial plateau is particularly vulnerable to varus or valgus forces when the foot is planted, leading to the bone crushing under the femoral condyle."
      },
      {
        "key": "C",
        "text": "Hyperflexion of the knee",
        "correct": false,
        "response": "Hyperflexion can cause ligamentous injuries or patellar dislocations but is less likely to cause a tibial plateau fracture. These fractures require a significant axial or angular force."
      }
    ],
    "pearls": [
      "Varus or valgus forces with a planted foot are common causes of tibial plateau fractures.",
      "Understanding the mechanism of injury is crucial for proper diagnosis and management."
    ]
  },
  {
    "id": "tibial-plateau-fracture-anatomy",
    "topic": "Tibial plateau fractures",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 60-year-old female presents with knee pain and swelling after a fall from standing height. She has a history of osteoporosis. X-rays show a fracture of the lateral tibial plateau.",
    "question": "Why is the lateral tibial plateau more susceptible to fractures in this patient?",
    "explainer": "The lateral tibial plateau is more susceptible to fractures due to its thinner and less cancellous bone structure compared to the medial side. In osteoporotic patients, the bone is already weakened, making it even more prone to fractures from relatively minor trauma.",
    "options": [
      {
        "key": "A",
        "text": "The lateral condyle of the femur applies more force",
        "correct": false,
        "response": "While the lateral condyle does bear a significant load, the primary reason for the increased susceptibility is the bone quality and structure. The lateral tibial plateau has thinner and less cancellous bone."
      },
      {
        "key": "B",
        "text": "The lateral tibial plateau has thinner and less cancellous bone",
        "correct": true,
        "response": "This is correct. The lateral tibial plateau has a thinner and less cancellous structure, making it more susceptible to fractures, especially in osteoporotic patients."
      },
      {
        "key": "C",
        "text": "The lateral collateral ligament is weaker",
        "correct": false,
        "response": "The lateral collateral ligament's strength or weakness does not directly affect the bone's susceptibility to fractures. The bone structure and quality are the primary factors."
      }
    ],
    "pearls": [
      "The lateral tibial plateau is more vulnerable due to its thinner and less cancellous bone structure.",
      "Osteoporosis further increases the risk of fractures in this area."
    ]
  },
  {
    "id": "tibial-plateau-fracture-classification",
    "topic": "Tibial plateau fractures",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 35-year-old male basketball player presents with knee pain and swelling after a fall during a game. Imaging confirms a split fracture of the medial tibial plateau.",
    "question": "What type of tibial plateau fracture is most likely in this patient based on the described mechanism of injury?",
    "explainer": "A split fracture of the medial tibial plateau is common in younger, active patients due to the high-energy varus force applied to the knee. The varus force causes the medial tibial plateau to split along the plane of the bone, resulting in a split fracture.",
    "options": [
      {
        "key": "A",
        "text": "Depression fracture",
        "correct": false,
        "response": "A depression fracture occurs when the tibial plateau is compressed, causing the bone to sink. This is more common in older patients with osteoporosis or in fractures with a significant axial load."
      },
      {
        "key": "B",
        "text": "Split fracture",
        "correct": true,
        "response": "This is correct. A split fracture is characterized by a clean break along the bone's surface, often due to a high-energy varus or valgus force, which is typical in younger, active patients."
      },
      {
        "key": "C",
        "text": "Comminuted fracture",
        "correct": false,
        "response": "A comminuted fracture involves multiple bone fragments and is usually the result of a very high-energy injury. While it can occur in sports, a split fracture is more typical in the described scenario."
      }
    ],
    "pearls": [
      "Split fractures are common in younger, active patients due to high-energy varus or valgus forces.",
      "Understanding the injury mechanism helps in classifying the fracture type."
    ]
  },
  {
    "id": "tibial-plateau-fracture-complications",
    "topic": "Tibial plateau fractures",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 50-year-old male is brought to the emergency department after a car accident. He has a displaced fracture of the tibial plateau with significant knee swelling and deformity.",
    "question": "What is a potential complication of a displaced tibial plateau fracture if not treated promptly?",
    "explainer": "Displaced tibial plateau fractures can lead to joint incongruity, which can cause post-traumatic arthritis. The uneven joint surface disrupts the normal load distribution, leading to cartilage degeneration and joint inflammation over time.",
    "options": [
      {
        "key": "A",
        "text": "Patellar dislocation",
        "correct": false,
        "response": "Patellar dislocation is a different injury that occurs when the patella moves out of its groove. While it can happen in knee trauma, it is not a complication of a displaced tibial plateau fracture."
      },
      {
        "key": "B",
        "text": "Post-traumatic arthritis",
        "correct": true,
        "response": "This is correct. Joint incongruity from a displaced tibial plateau fracture can lead to uneven load distribution and cartilage damage, resulting in post-traumatic arthritis."
      },
      {
        "key": "C",
        "text": "Ligamentous instability",
        "correct": false,
        "response": "Ligamentous instability can occur with knee injuries but is not a direct complication of a displaced tibial plateau fracture. It is more likely to result from ligament tears or ruptures."
      }
    ],
    "pearls": [
      "Displaced tibial plateau fractures can cause joint incongruity, leading to post-traumatic arthritis.",
      "Prompt treatment is crucial to prevent long-term complications."
    ]
  },
  {
    "id": "tibial-plateau-fracture-treatment",
    "topic": "Tibial plateau fractures",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 40-year-old female presents with knee pain and swelling after a skiing accident. Imaging shows a non-displaced fracture of the lateral tibial plateau.",
    "question": "What is the most appropriate initial treatment for a non-displaced tibial plateau fracture in this patient?",
    "explainer": "Non-displaced tibial plateau fractures can often be managed conservatively with immobilization and weight-bearing restrictions. This allows the bone to heal without the need for surgical intervention, which is reserved for displaced or unstable fractures.",
    "options": [
      {
        "key": "A",
        "text": "Immediate surgical fixation",
        "correct": false,
        "response": "Immediate surgical fixation is typically reserved for displaced or unstable fractures. Non-displaced fractures can often be managed conservatively with immobilization and weight-bearing restrictions."
      },
      {
        "key": "B",
        "text": "Immobilization and weight-bearing restrictions",
        "correct": true,
        "response": "This is correct. Non-displaced tibial plateau fractures can be managed with immobilization, such as a brace or cast, and weight-bearing restrictions to allow the bone to heal properly."
      },
      {
        "key": "C",
        "text": "Immediate knee replacement",
        "correct": false,
        "response": "Knee replacement is not indicated for tibial plateau fractures, especially non-displaced ones. It is a more radical treatment reserved for severe joint damage or arthritis."
      }
    ],
    "pearls": [
      "Non-displaced tibial plateau fractures are often managed conservatively with immobilization and weight-bearing restrictions.",
      "Surgical intervention is reserved for displaced or unstable fractures."
    ]
  },
  {
    "id": "pcl-injury-mechanism",
    "topic": "PCL and posterolateral corner injuries",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 28-year-old male football player is tackled from behind, causing his knee to be forced into hyperextension and external rotation. He complains of severe pain and instability in the knee.",
    "question": "What mechanism of injury primarily contributes to the damage of the PCL and posterolateral corner in this scenario?",
    "explainer": "The PCL and posterolateral corner are particularly vulnerable to injuries involving hyperextension and external rotation. The PCL resists posterior translation of the tibia, and the posterolateral corner structures, including the lateral collateral ligament (LCL), popliteus tendon, and lateral gastrocnemius tendon, are crucial for rotational stability. In hyperextension and external rotation, these structures are overstretched and can tear.",
    "options": [
      {
        "key": "A",
        "text": "Anterior drawer test",
        "correct": false,
        "response": "The anterior drawer test assesses the integrity of the anterior cruciate ligament (ACL), not the PCL or posterolateral corner. It checks for anterior translation of the tibia relative to the femur, which is not relevant in this mechanism of injury."
      },
      {
        "key": "B",
        "text": "Hyperextension and external rotation",
        "correct": true,
        "response": "Hyperextension and external rotation are the primary mechanisms that cause PCL and posterolateral corner injuries. The PCL is stretched and can tear when the tibia is pushed posteriorly, and the posterolateral structures are overstretched and can also tear."
      },
      {
        "key": "C",
        "text": "Valgus stress",
        "correct": false,
        "response": "Valgus stress primarily affects the medial structures of the knee, such as the medial collateral ligament (MCL). While it can contribute to knee instability, it is not the primary mechanism for PCL and posterolateral corner injuries."
      }
    ],
    "pearls": [
      "PCL and posterolateral corner injuries often occur with hyperextension and external rotation.",
      "Understanding the mechanism of injury is crucial for proper diagnosis and treatment."
    ]
  },
  {
    "id": "pcl-injury-diagnosis",
    "topic": "PCL and posterolateral corner injuries",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old female motorcyclist presents after a low-speed accident. She reports a sudden pop in her knee followed by pain and swelling. On examination, there is a posterior sag sign and a positive posterior drawer test.",
    "question": "What clinical signs and tests are most indicative of a PCL injury in this patient?",
    "explainer": "The posterior sag sign and positive posterior drawer test are key indicators of a PCL injury. The posterior sag sign is observed when the tibia sits in a posterior position relative to the femur when the knee is in 90 degrees of flexion. The posterior drawer test assesses the stability of the PCL by applying a posterior force to the tibia and observing for excessive posterior translation.",
    "options": [
      {
        "key": "A",
        "text": "Anterior drawer test",
        "correct": false,
        "response": "The anterior drawer test is used to assess the integrity of the ACL, not the PCL. It is performed by applying an anterior force to the tibia and checking for anterior translation, which is not relevant in this case."
      },
      {
        "key": "B",
        "text": "Posterior sag sign and positive posterior drawer test",
        "correct": true,
        "response": "The posterior sag sign and positive posterior drawer test are the most indicative signs of a PCL injury. These tests specifically assess the posterior stability of the knee, which is compromised in PCL injuries."
      },
      {
        "key": "C",
        "text": "Lachman test",
        "correct": false,
        "response": "The Lachman test is used to assess the integrity of the ACL, not the PCL. It involves applying an anterior force to the tibia and checking for anterior translation, which is not relevant for diagnosing PCL injuries."
      }
    ],
    "pearls": [
      "The posterior sag sign and posterior drawer test are crucial for diagnosing PCL injuries.",
      "Understanding the specific tests for knee ligaments helps in accurate diagnosis."
    ]
  },
  {
    "id": "posterolateral-corner-function",
    "topic": "PCL and posterolateral corner injuries",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 32-year-old male athlete complains of knee instability and a feeling of the knee 'giving way' during pivoting movements. He has a history of a knee injury from a contact sport.",
    "question": "What is the primary function of the posterolateral corner in knee stability?",
    "explainer": "The posterolateral corner of the knee, which includes the lateral collateral ligament (LCL), popliteus tendon, and the lateral gastrocnemius tendon, is crucial for rotational stability and resistance to varus and external rotation forces. These structures work together to prevent excessive external rotation and lateral displacement of the tibia.",
    "options": [
      {
        "key": "A",
        "text": "Resisting anterior translation of the tibia",
        "correct": false,
        "response": "Resisting anterior translation of the tibia is primarily the function of the ACL, not the posterolateral corner. The ACL prevents the tibia from moving forward relative to the femur."
      },
      {
        "key": "B",
        "text": "Resisting posterior translation of the tibia",
        "correct": false,
        "response": "Resisting posterior translation of the tibia is primarily the function of the PCL, not the posterolateral corner. The PCL prevents the tibia from moving backward relative to the femur."
      },
      {
        "key": "C",
        "text": "Resisting varus and external rotation forces",
        "correct": true,
        "response": "The posterolateral corner is crucial for resisting varus and external rotation forces, which are important for maintaining rotational stability of the knee. This function is particularly important during pivoting and cutting movements in sports."
      }
    ],
    "pearls": [
      "The posterolateral corner is essential for rotational stability of the knee.",
      "Injuries to this area can lead to significant instability during pivoting activities."
    ]
  },
  {
    "id": "pcl-injury-rehab",
    "topic": "PCL and posterolateral corner injuries",
    "category": "Knee",
    "difficulty": "intermediate",
    "vignette": "A 55-year-old male, a recreational cyclist, presents with chronic knee pain and instability after a bicycle accident. MRI confirms a PCL tear and partial tear of the posterolateral corner. He is considering non-surgical management.",
    "question": "What is the primary goal of rehabilitation for a patient with a PCL tear and partial posterolateral corner injury?",
    "explainer": "The primary goal of rehabilitation for a PCL tear and partial posterolateral corner injury is to restore knee stability and function. This involves strengthening the quadriceps and hamstrings to compensate for the loss of PCL and posterolateral corner function, improving proprioception, and gradually increasing the range of motion and weight-bearing activities.",
    "options": [
      {
        "key": "A",
        "text": "Immediate surgical repair",
        "correct": false,
        "response": "While surgical repair may be necessary in some cases, non-surgical management is often considered for partial tears and in less active patients. The goal of rehabilitation is to restore stability and function through non-invasive means."
      },
      {
        "key": "B",
        "text": "Rest and immobilization",
        "correct": false,
        "response": "Rest and immobilization can lead to muscle atrophy and stiffness, which can further compromise knee stability. Active rehabilitation, focusing on strengthening and proprioception, is more beneficial for recovery."
      },
      {
        "key": "C",
        "text": "Strengthening and proprioception training",
        "correct": true,
        "response": "Strengthening the quadriceps and hamstrings, along with proprioception training, helps to stabilize the knee and improve function. These exercises are crucial for restoring stability and preventing further injury."
      }
    ],
    "pearls": [
      "Rehabilitation focuses on strengthening and proprioception to restore knee stability.",
      "Non-surgical management can be effective for partial PCL and posterolateral corner injuries."
    ]
  },
  {
    "id": "posterolateral-corner-injury-signs",
    "topic": "PCL and posterolateral corner injuries",
    "category": "Knee",
    "difficulty": "beginner",
    "vignette": "A 22-year-old female dancer presents with knee pain and a sensation of the knee 'giving way' during dance routines. She has a history of a knee twist injury during a performance. On examination, there is tenderness over the lateral knee and a positive dial test.",
    "question": "What clinical signs are most indicative of a posterolateral corner injury in this patient?",
    "explainer": "The posterolateral corner injury is often indicated by tenderness over the lateral knee and a positive dial test. The dial test assesses the rotational stability of the knee by applying external rotation to the tibia and observing for excessive rotation, which suggests injury to the posterolateral structures.",
    "options": [
      {
        "key": "A",
        "text": "Tenderness over the medial knee",
        "correct": false,
        "response": "Tenderness over the medial knee is more indicative of an injury to the medial structures, such as the MCL, not the posterolateral corner. The posterolateral corner is located on the lateral side of the knee."
      },
      {
        "key": "B",
        "text": "Tenderness over the lateral knee and a positive dial test",
        "correct": true,
        "response": "Tenderness over the lateral knee and a positive dial test are the most indicative signs of a posterolateral corner injury. The dial test assesses rotational stability, which is compromised in these injuries."
      },
      {
        "key": "C",
        "text": "Positive Lachman test",
        "correct": false,
        "response": "The Lachman test is used to assess the integrity of the ACL, not the posterolateral corner. It involves applying an anterior force to the tibia and checking for anterior translation, which is not relevant for diagnosing posterolateral corner injuries."
      }
    ],
    "pearls": [
      "Tenderness over the lateral knee and a positive dial test are key signs of a posterolateral corner injury.",
      "The dial test assesses rotational stability of the knee."
    ]
  },
  {
    "id": "shoulder-impingement-mechanism",
    "topic": "Shoulder anatomy",
    "category": "Shoulder",
    "difficulty": "beginner",
    "vignette": "A 35-year-old female swimmer presents with pain in her right shoulder, especially when raising her arm. She describes a clicking sensation and difficulty with overhead activities.",
    "question": "What is the most likely mechanism causing her symptoms?",
    "explainer": "The shoulder joint is a ball and socket joint, but it has a shallow socket to allow for a wide range of motion. The rotator cuff muscles and tendons help stabilize the joint and keep the ball in the socket. Impingement occurs when the space between the acromion (a bony projection of the scapula) and the humeral head is narrowed, leading to compression of the rotator cuff tendons.",
    "options": [
      {
        "key": "A",
        "text": "Tear in the biceps tendon",
        "correct": false,
        "response": "While a tear in the biceps tendon can cause shoulder pain, it is not the most likely mechanism for the described symptoms. The biceps tendon is less commonly involved in impingement syndrome, which primarily affects the rotator cuff tendons."
      },
      {
        "key": "B",
        "text": "Narrowing of the subacromial space",
        "correct": true,
        "response": "The subacromial space is the area between the acromion and the humeral head. Narrowing of this space due to anatomical variations, inflammation, or repetitive overhead activities can cause impingement of the rotator cuff tendons, leading to pain and clicking."
      },
      {
        "key": "C",
        "text": "Dislocation of the shoulder joint",
        "correct": false,
        "response": "Dislocation of the shoulder joint involves the humeral head being forced out of the glenoid socket, which would cause severe pain and instability, not just clicking and difficulty with overhead activities. Dislocation is a more acute and traumatic injury."
      }
    ],
    "pearls": [
      "Impingement syndrome is often due to narrowing of the subacromial space.",
      "Swimmers and other athletes who perform repetitive overhead motions are at higher risk for shoulder impingement."
    ]
  },
  {
    "id": "rotator-cuff-tear-pathophysiology",
    "topic": "Shoulder anatomy",
    "category": "Shoulder",
    "difficulty": "intermediate",
    "vignette": "A 50-year-old male office worker complains of chronic shoulder pain, especially at night. He has difficulty lifting his arm and performing daily activities.",
    "question": "What is the underlying pathophysiology of his condition?",
    "explainer": "The rotator cuff is a group of four muscles (supraspinatus, infraspinatus, teres minor, and subscapularis) and their tendons that stabilize the shoulder joint and help with movement. Over time, these tendons can become inflamed and degenerate, leading to partial or full-thickness tears. This can occur due to repetitive stress, aging, or acute trauma.",
    "options": [
      {
        "key": "A",
        "text": "Calcific tendinitis",
        "correct": false,
        "response": "Calcific tendinitis involves the deposition of calcium in the rotator cuff tendons, which can cause pain and inflammation. However, it is not the primary cause of chronic shoulder pain and weakness in this scenario."
      },
      {
        "key": "B",
        "text": "Degeneration and tearing of the rotator cuff tendons",
        "correct": true,
        "response": "Degeneration of the rotator cuff tendons, often due to repetitive stress and aging, can lead to partial or full-thickness tears. This results in chronic pain, weakness, and difficulty with overhead activities, which is consistent with the patient's symptoms."
      },
      {
        "key": "C",
        "text": "Labral tear",
        "correct": false,
        "response": "A labral tear involves the ring of cartilage that surrounds the glenoid socket of the shoulder joint. While it can cause shoulder pain and instability, it is less likely to be the primary cause of chronic pain and weakness in this scenario."
      }
    ],
    "pearls": [
      "Rotator cuff tears are common in middle-aged and older adults.",
      "Degeneration of the rotator cuff tendons can lead to chronic pain and functional limitations."
    ]
  },
  {
    "id": "shoulder-dislocation-anatomy",
    "topic": "Shoulder anatomy",
    "category": "Shoulder",
    "difficulty": "beginner",
    "vignette": "A 20-year-old male football player was tackled and fell on his outstretched arm, immediately experiencing severe pain and deformity in his shoulder.",
    "question": "What anatomical structure is most likely disrupted in this scenario?",
    "explainer": "The shoulder joint is a ball and socket joint, with the humeral head (ball) fitting into the glenoid socket (socket) of the scapula. The joint is stabilized by the labrum, a ring of cartilage that deepens the socket, and the rotator cuff tendons. A dislocation occurs when the humeral head is forced out of the glenoid socket, often due to trauma.",
    "options": [
      {
        "key": "A",
        "text": "Glenohumeral ligaments",
        "correct": false,
        "response": "The glenohumeral ligaments are part of the shoulder joint capsule and help stabilize the joint. However, they are not the primary structures disrupted in a shoulder dislocation. The main issue is the displacement of the humeral head from the glenoid socket."
      },
      {
        "key": "B",
        "text": "Humeral head and glenoid socket",
        "correct": true,
        "response": "In a shoulder dislocation, the humeral head is forced out of the glenoid socket. This disruption of the joint anatomy causes the severe pain and visible deformity. The dislocation can be anterior (most common) or posterior, depending on the direction of the force."
      },
      {
        "key": "C",
        "text": "Rotator cuff tendons",
        "correct": false,
        "response": "The rotator cuff tendons help stabilize the shoulder joint and assist with movement. While they can be injured during a dislocation, the primary issue is the displacement of the humeral head from the glenoid socket."
      }
    ],
    "pearls": [
      "Shoulder dislocations are often the result of traumatic injuries.",
      "The most common type of shoulder dislocation is anterior dislocation."
    ]
  },
  {
    "id": "shoulder-instability-mechanism",
    "topic": "Shoulder anatomy",
    "category": "Shoulder",
    "difficulty": "intermediate",
    "vignette": "A 25-year-old male gymnast reports recurrent shoulder dislocations, even with minimal activities like reaching for an object.",
    "question": "What mechanism is most likely contributing to his recurrent dislocations?",
    "explainer": "Shoulder instability occurs when the structures that normally stabilize the shoulder joint are compromised. This can be due to congenital factors, traumatic injuries, or repetitive stress. The labrum, which deepens the glenoid socket, can be torn or stretched, leading to recurrent dislocations. Additionally, the rotator cuff tendons and shoulder capsule can become loose or damaged, further contributing to instability.",
    "options": [
      {
        "key": "A",
        "text": "Tight shoulder capsule",
        "correct": false,
        "response": "A tight shoulder capsule would actually restrict movement and reduce the risk of dislocation. In cases of recurrent dislocations, the capsule is typically loose or stretched, allowing for excessive joint movement."
      },
      {
        "key": "B",
        "text": "Loose or torn labrum",
        "correct": true,
        "response": "The labrum is a ring of cartilage that deepens the glenoid socket and helps stabilize the shoulder joint. A loose or torn labrum can lead to recurrent dislocations, especially in individuals who perform repetitive overhead activities or have a history of trauma."
      },
      {
        "key": "C",
        "text": "Fracture of the humeral head",
        "correct": false,
        "response": "A fracture of the humeral head can cause acute pain and instability, but it is not a common cause of recurrent dislocations. Fractures typically occur due to a single traumatic event, not from repetitive activities."
      }
    ],
    "pearls": [
      "Recurrent shoulder dislocations are often due to a loose or torn labrum.",
      "Gymnasts and other athletes who perform repetitive overhead activities are at higher risk for shoulder instability."
    ]
  },
  {
    "id": "shoulder-osteoarthritis-pathophysiology",
    "topic": "Shoulder anatomy",
    "category": "Shoulder",
    "difficulty": "beginner",
    "vignette": "A 65-year-old female complains of chronic shoulder pain, stiffness, and decreased range of motion. She has a history of shoulder injuries and arthritis in other joints.",
    "question": "What is the primary pathophysiology behind her shoulder symptoms?",
    "explainer": "Osteoarthritis is a degenerative joint disease characterized by the breakdown of cartilage, bone spurs, and inflammation. In the shoulder, this can occur due to aging, previous injuries, or repetitive use. The loss of cartilage leads to bone-on-bone contact, causing pain, stiffness, and reduced range of motion.",
    "options": [
      {
        "key": "A",
        "text": "Inflammation of the bursa",
        "correct": false,
        "response": "Bursitis, or inflammation of the bursa, can cause shoulder pain and swelling, but it does not typically lead to the chronic stiffness and limited range of motion seen in osteoarthritis. Bursitis is more often an acute or subacute condition."
      },
      {
        "key": "B",
        "text": "Degeneration and loss of cartilage",
        "correct": true,
        "response": "Osteoarthritis is characterized by the degeneration and loss of cartilage in the joint. This leads to bone-on-bone contact, inflammation, and the formation of bone spurs. The result is chronic pain, stiffness, and decreased range of motion, which aligns with the patient's symptoms."
      },
      {
        "key": "C",
        "text": "Tear in the acromioclavicular joint",
        "correct": false,
        "response": "A tear in the acromioclavicular (AC) joint can cause shoulder pain, but it is typically localized to the top of the shoulder and does not result in the widespread stiffness and reduced range of motion seen in osteoarthritis. AC joint issues are more commonly associated with trauma or overuse."
      }
    ],
    "pearls": [
      "Osteoarthritis in the shoulder is characterized by cartilage loss and bone spurs.",
      "Previous injuries and repetitive use can accelerate the development of shoulder osteoarthritis."
    ]
  },
  {
    "id": "elderly-fall-rotator-cuff-tear",
    "topic": "Rotator cuff tears",
    "category": "Shoulder",
    "difficulty": "beginner",
    "vignette": "A 72-year-old woman presents after falling on her outstretched hand. She complains of shoulder pain and difficulty lifting her arm. She has a history of osteoporosis.",
    "question": "What is the most likely mechanism causing her shoulder pain and limited range of motion?",
    "explainer": "When a person falls on an outstretched hand, the force is transmitted through the shoulder, often causing the rotator cuff to tear. The rotator cuff is a group of muscles and tendons that stabilize the shoulder and enable movement. A tear in this structure can lead to pain and reduced mobility.",
    "options": [
      {
        "key": "A",
        "text": "Direct impact to the shoulder joint capsule",
        "correct": false,
        "response": "While a direct impact can cause pain, it is less likely to cause the specific symptoms of pain and reduced mobility seen in this patient. The rotator cuff is more susceptible to tears in such scenarios."
      },
      {
        "key": "B",
        "text": "Tear in the rotator cuff muscles or tendons",
        "correct": true,
        "response": "A fall on an outstretched hand can cause a sudden, forceful contraction of the rotator cuff muscles, leading to a tear in the tendons or muscles. This explains the patient's pain and difficulty lifting the arm."
      },
      {
        "key": "C",
        "text": "Dislocation of the shoulder joint",
        "correct": false,
        "response": "While a dislocation can occur from a fall, the patient's symptoms of pain and limited range of motion are more consistent with a rotator cuff tear. Dislocations usually present with more obvious deformity and severe pain."
      }
    ],
    "pearls": [
      "Falls on an outstretched hand can cause rotator cuff tears.",
      "Rotator cuff tears lead to pain and reduced mobility."
    ]
  },
  {
    "id": "repetitive-overhead-activity-tear",
    "topic": "Rotator cuff tears",
    "category": "Shoulder",
    "difficulty": "intermediate",
    "vignette": "A 45-year-old male construction worker presents with chronic shoulder pain and weakness. He reports a history of repetitive overhead activities at work and occasional night pain.",
    "question": "What is the most likely cause of his chronic shoulder pain and weakness?",
    "explainer": "Repetitive overhead activities can lead to chronic wear and tear of the rotator cuff tendons, eventually causing a tear. The rotator cuff is responsible for stabilizing the shoulder and enabling smooth movement. Overuse can cause microtears that accumulate over time, leading to chronic pain and weakness.",
    "options": [
      {
        "key": "A",
        "text": "Acute traumatic injury",
        "correct": false,
        "response": "An acute traumatic injury would typically present with a sudden onset of pain and immediate limitation in movement. The patient's chronic symptoms suggest a gradual, repetitive strain rather than a single traumatic event."
      },
      {
        "key": "B",
        "text": "Chronic rotator cuff tear",
        "correct": true,
        "response": "Repetitive overhead activities can cause microtears in the rotator cuff tendons, which can accumulate and lead to a full-thickness tear over time. This explains the chronic pain and weakness the patient is experiencing."
      },
      {
        "key": "C",
        "text": "Shoulder arthritis",
        "correct": false,
        "response": "While shoulder arthritis can cause chronic pain, the patient's history of repetitive overhead activities and night pain is more consistent with a rotator cuff tear. Arthritis typically presents with more generalized joint pain and stiffness."
      }
    ],
    "pearls": [
      "Repetitive overhead activities can lead to chronic rotator cuff tears.",
      "Night pain is a common symptom of rotator cuff tears."
    ]
  },
  {
    "id": "young-athlete-overuse-injury",
    "topic": "Rotator cuff tears",
    "category": "Shoulder",
    "difficulty": "beginner",
    "vignette": "A 22-year-old male college baseball pitcher presents with gradual onset shoulder pain and decreased throwing velocity. He has no history of trauma.",
    "question": "What is the most likely cause of his shoulder pain and decreased performance?",
    "explainer": "The repetitive overhead motion in pitching can cause overuse injuries to the rotator cuff. The rotator cuff stabilizes the shoulder and helps with the high-speed, forceful movements required in pitching. Over time, this can lead to tendonitis or partial tears, resulting in pain and reduced performance.",
    "options": [
      {
        "key": "A",
        "text": "Rotator cuff tear",
        "correct": true,
        "response": "Repetitive overhead activities, such as pitching, can cause microtears in the rotator cuff tendons. These microtears can lead to tendonitis or partial tears, causing pain and reduced throwing velocity."
      },
      {
        "key": "B",
        "text": "Biceps tendonitis",
        "correct": false,
        "response": "While biceps tendonitis can cause shoulder pain, the gradual onset and decrease in throwing velocity are more consistent with a rotator cuff injury. Biceps tendonitis typically presents with more localized pain in the front of the shoulder."
      },
      {
        "key": "C",
        "text": "Labral tear",
        "correct": false,
        "response": "A labral tear can cause shoulder pain and instability, but the gradual onset and specific symptoms of decreased throwing velocity are more indicative of a rotator cuff issue."
      }
    ],
    "pearls": [
      "Repetitive overhead activities in sports can cause rotator cuff injuries.",
      "Gradual onset of pain and decreased performance suggests a chronic issue."
    ]
  },
  {
    "id": "shoulder-pain-after-lifting",
    "topic": "Rotator cuff tears",
    "category": "Shoulder",
    "difficulty": "intermediate",
    "vignette": "A 50-year-old woman presents with acute shoulder pain after lifting a heavy box. She reports difficulty with daily activities and pain at night.",
    "question": "What is the most likely cause of her acute shoulder pain and functional limitation?",
    "explainer": "Lifting a heavy object can cause a sudden, forceful contraction of the rotator cuff muscles, leading to a tear in the tendons or muscles. The rotator cuff stabilizes the shoulder and enables movement, so a tear can cause acute pain and difficulty with daily activities.",
    "options": [
      {
        "key": "A",
        "text": "Rotator cuff tear",
        "correct": true,
        "response": "Lifting a heavy object can cause a sudden, forceful contraction of the rotator cuff muscles, leading to a tear in the tendons. This explains the acute pain and difficulty with daily activities."
      },
      {
        "key": "B",
        "text": "Subacromial bursitis",
        "correct": false,
        "response": "Subacromial bursitis can cause shoulder pain, but it is more often a chronic condition. The acute onset and functional limitation are more consistent with a rotator cuff tear."
      },
      {
        "key": "C",
        "text": "Shoulder dislocation",
        "correct": false,
        "response": "A shoulder dislocation would typically present with more severe pain and visible deformity. The patient's symptoms are more consistent with a rotator cuff tear."
      }
    ],
    "pearls": [
      "Heavy lifting can cause acute rotator cuff tears.",
      "Night pain is a common symptom of rotator cuff injuries."
    ]
  },
  {
    "id": "chronic-shoulder-pain-in-elderly",
    "topic": "Rotator cuff tears",
    "category": "Shoulder",
    "difficulty": "beginner",
    "vignette": "A 75-year-old woman presents with chronic shoulder pain and difficulty performing activities of daily living. She has no history of trauma but reports a gradual onset of symptoms over the past year.",
    "question": "What is the most likely cause of her chronic shoulder pain and functional limitation?",
    "explainer": "As people age, the rotator cuff tendons can degenerate due to wear and tear, leading to chronic tears. The rotator cuff is crucial for shoulder stability and movement, so a tear can cause chronic pain and difficulty with daily activities. The absence of trauma and gradual onset of symptoms suggest a degenerative process.",
    "options": [
      {
        "key": "A",
        "text": "Rotator cuff tear",
        "correct": true,
        "response": "Degenerative changes in the rotator cuff tendons can lead to chronic tears, especially in the elderly. The absence of trauma and gradual onset of symptoms are consistent with a degenerative rotator cuff tear."
      },
      {
        "key": "B",
        "text": "Frozen shoulder",
        "correct": false,
        "response": "Frozen shoulder (adhesive capsulitis) can cause chronic shoulder pain and stiffness, but it typically presents with more diffuse joint pain and stiffness rather than the specific symptoms of a rotator cuff tear."
      },
      {
        "key": "C",
        "text": "Shoulder arthritis",
        "correct": false,
        "response": "While shoulder arthritis can cause chronic pain, the specific symptoms of difficulty with daily activities and the absence of trauma suggest a rotator cuff tear. Arthritis usually presents with more generalized joint pain and stiffness."
      }
    ],
    "pearls": [
      "Degenerative changes can cause chronic rotator cuff tears in the elderly.",
      "Gradual onset of symptoms suggests a chronic, degenerative process."
    ]
  }
];