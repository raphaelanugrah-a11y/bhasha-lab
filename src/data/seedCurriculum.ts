import { LabContentItem } from '../types';

export const SEED_CURRICULUM: LabContentItem[] = [
  // ==========================================
  // ENGLISH CURRICULUM (Classes 1 - 12)
  // ==========================================

  // --- Primary: Class 1 ---
  {
    id: 'eng-cls1-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 1,
    title: 'Sammy the Snail and the Shiny Leaf',
    description: 'An early-phonics tale for first graders introducing basic sight words and color names.',
    difficulty: 'beginner',
    contentBody: `Look at Sammy! Sammy is a small, happy snail.
Sammy crawls on the soft green grass.
He sees a big, shiny yellow leaf.
"What a lovely leaf!" says Sammy.
Sammy rests under the leaf until the gentle rain stops.`,
    translation: 'सैमी एक छोटा और खुश घोंघा है जो हरी घास पर रेंगता है और एक चमकदार पत्ती देखता है...',
    audioText: 'Look at Sammy! Sammy is a small, happy snail. Sammy crawls on the soft green grass. He sees a big, shiny yellow leaf. What a lovely leaf! says Sammy.',
    phoneticGuide: 'Snail /sneɪl/, Shiny /ˈʃaɪ.ni/, Crawls /krɔːlz/',
    grammarNotes: 'Focus on simple present sight words: is, sees, says, rests.',
    vocabulary: [
      { word: 'Snail', meaning: 'A small slow-moving animal with a shell', pronunciation: '/sneɪl/' },
      { word: 'Shiny', meaning: 'Reflecting light, bright', pronunciation: '/ˈʃaɪni/' },
      { word: 'Gentle', meaning: 'Mild and soft', pronunciation: '/ˈdʒentl/' },
    ],
    exercises: [
      {
        question: 'Who is Sammy in the story?',
        options: ['A friendly dog', 'A small snail', 'A green frog', 'A busy bee'],
        correctIndex: 1,
        explanation: 'Sammy is a small, happy snail.',
      },
      {
        question: 'What color is the shiny leaf?',
        options: ['Red', 'Yellow', 'Blue', 'Purple'],
        correctIndex: 1,
        explanation: 'The leaf is described as big and shiny yellow.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls1-pron-1',
    language: 'english',
    section: 'pronunciation',
    classGrade: 1,
    title: 'Short Vowels Phonics Practice (/æ/, /e/, /ɪ/)',
    description: 'Master short vowel mouth shapes with cat, bed, and pin.',
    difficulty: 'beginner',
    contentBody: `Let us practice our short vowel sounds:
1. Short A /æ/: Cat, Hat, Bat, Apple.
2. Short E /e/: Bed, Red, Pen, Egg.
3. Short I /ɪ/: Sit, Pin, Fish, Milk.
Say each word clearly and open your mouth wide for the A sound!`,
    translation: 'अंग्रेजी के ह्रस्व स्वरों का अभ्यास: कैट, बेड, पिन...',
    audioText: 'Cat, Hat, Bat, Apple. Bed, Red, Pen, Egg. Sit, Pin, Fish, Milk.',
    phoneticGuide: 'Cat /kæt/, Bed /bed/, Pin /pɪn/',
    grammarNotes: 'Single vowel between two consonants (CVC pattern) produces a short vowel sound.',
    vocabulary: [
      { word: 'Apple', meaning: 'A sweet round fruit', pronunciation: '/ˈæpl/' },
      { word: 'Milk', meaning: 'A white liquid drink', pronunciation: '/mɪlk/' },
    ],
    exercises: [
      {
        question: 'Which word contains the short /æ/ vowel sound?',
        options: ['Bed', 'Pin', 'Cat', 'Sun'],
        correctIndex: 2,
        explanation: 'Cat has the short /æ/ vowel sound as in bat and apple.',
      },
      {
        question: 'Which word has the short /e/ vowel sound?',
        options: ['Pen', 'Pig', 'Pot', 'Pan'],
        correctIndex: 0,
        explanation: 'Pen has the short /e/ sound.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls1-list-1',
    language: 'english',
    section: 'listening',
    classGrade: 1,
    title: 'Morning Bells and Farm Sounds',
    description: 'Listen to animals and morning activities on a peaceful sunny farm.',
    difficulty: 'beginner',
    contentBody: `Ding-dong! The church bell rings at sunrise.
"Cock-a-doodle-doo!" cries the rooster from the wooden fence.
"Moo, moo," says the gentle spotted cow waiting in the meadow.
Farmer Brown opens the barn door and feeds the golden chicks.
"Cheep, cheep!" sing the tiny chicks as they eat the grain.`,
    translation: 'सुबह की घंटियों और खेत के जानवरों की आवाजों का श्रवण अभ्यास...',
    audioText: 'Ding-dong! The church bell rings at sunrise. Cock-a-doodle-doo cries the rooster. Moo, moo, says the gentle cow. Farmer Brown feeds the golden chicks. Cheep, cheep!',
    phoneticGuide: 'Rooster /ˈruː.stər/, Meadow /ˈmed.oʊ/, Fence /fens/',
    grammarNotes: 'Sound words (onomatopoeia): moo, cheep, ding-dong.',
    vocabulary: [
      { word: 'Rooster', meaning: 'An adult male chicken', pronunciation: '/ˈruːstər/' },
      { word: 'Meadow', meaning: 'A field with grass and flowers', pronunciation: '/ˈmedoʊ/' },
    ],
    exercises: [
      {
        question: 'What animal calls out "Cock-a-doodle-doo"?',
        options: ['The cow', 'The rooster', 'The chick', 'The horse'],
        correctIndex: 1,
        explanation: 'The rooster calls out "Cock-a-doodle-doo" at sunrise.',
      },
      {
        question: 'What color are the baby chicks?',
        options: ['Blue', 'Golden', 'Black', 'Green'],
        correctIndex: 1,
        explanation: 'The story mentions "golden chicks".',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls1-gram-1',
    language: 'english',
    section: 'grammar',
    classGrade: 1,
    title: 'Naming Words: What is a Noun?',
    description: 'Learn to spot names of persons, places, animals, and things.',
    difficulty: 'beginner',
    contentBody: `A Noun is a naming word!
Every person, place, animal, and thing has a name:
• Person: Teacher, Doctor, Girl, Boy.
• Place: School, Park, Garden, Home.
• Animal: Tiger, Puppy, Duck, Elephant.
• Thing: Book, Pencil, Ball, Chair.
Whenever you can touch or see something, it is a noun!`,
    translation: 'संज्ञा की पहचान: किसी व्यक्ति, स्थान, पशु या वस्तु का नाम...',
    audioText: 'A Noun is a naming word. Person: Teacher, Boy. Place: School, Park. Animal: Tiger, Duck. Thing: Book, Ball.',
    phoneticGuide: 'Noun /naʊn/, Person /ˈpɜː.sən/, Place /pleɪs/',
    grammarNotes: 'Concrete nouns can be experienced through the physical senses.',
    vocabulary: [
      { word: 'Person', meaning: 'A human being', pronunciation: '/ˈpɜːrsn/' },
      { word: 'Garden', meaning: 'A piece of land where flowers and plants grow', pronunciation: '/ˈɡɑːrdn/' },
    ],
    exercises: [
      {
        question: 'Which word in "The puppy plays in the park" is an animal noun?',
        options: ['Plays', 'Puppy', 'In', 'The'],
        correctIndex: 1,
        explanation: '"Puppy" is the animal naming word (noun).',
      },
      {
        question: 'Which of the following is a place noun?',
        options: ['School', 'Pencil', 'Jump', 'Happy'],
        correctIndex: 0,
        explanation: '"School" is a place noun.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 2 ---
  {
    id: 'eng-cls2-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 2,
    title: 'The Helpful Little Sparrow',
    description: 'A delightful early-reader story about kindness, sharing, and friendship.',
    difficulty: 'beginner',
    contentBody: `Once upon a time, a cheerful little sparrow named Pip lived in a tall banyan tree.
One sunny morning, Pip saw a tired squirrel looking for acorns on the green grass.
"Hello friend!" chirped Pip. "Follow me to the garden. The mango tree has lots of seeds for both of us!"
The squirrel smiled with joy. Together, the two friends shared a sweet breakfast under the warm golden sun.`,
    translation: 'एक समय की बात है, पिप नाम की एक खुशमिजाज नन्ही गौरैया एक ऊंचे बरगद के पेड़ पर रहती थी...',
    audioText: 'Once upon a time, a cheerful little sparrow named Pip lived in a tall banyan tree. One sunny morning, Pip saw a tired squirrel looking for acorns on the green grass. Hello friend! chirped Pip.',
    phoneticGuide: 'Pip /pɪp/, Sparrow /ˈspær.oʊ/, Banyan /ˈbæn.jən/, Cheerful /ˈtʃɪə.fəl/',
    grammarNotes: 'Focus on Past Simple tense: lived, saw, chirped, smiled, shared.',
    vocabulary: [
      { word: 'Cheerful', meaning: 'Noticeably happy and optimistic', pronunciation: '/ˈtʃɪərfəl/' },
      { word: 'Acorn', meaning: 'The small nut of the oak tree', pronunciation: '/ˈeɪkɔːrn/' },
      { word: 'Banyan', meaning: 'A large Indian fig tree with aerial roots', pronunciation: '/ˈbænjən/' },
    ],
    exercises: [
      {
        question: 'Where did Pip the sparrow live?',
        options: ['In a nest on a roof', 'In a tall banyan tree', 'In a small burrow', 'By the river'],
        correctIndex: 1,
        explanation: 'Pip lived in a tall banyan tree.',
      },
      {
        question: 'What was the tired squirrel searching for?',
        options: ['Water', 'Acorns', 'Berries', 'Flowers'],
        correctIndex: 1,
        explanation: 'The squirrel was looking for acorns on the green grass.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls2-pron-1',
    language: 'english',
    section: 'pronunciation',
    classGrade: 2,
    title: 'Consonant Digraphs: SH, CH, TH, WH',
    description: 'Distinguish between two-letter consonant sounds with ship, chop, think, and whistle.',
    difficulty: 'beginner',
    contentBody: `Practice these key digraph sounds:
• SH /ʃ/: Ship, Shell, Shoe, Shine. (Quiet sound, like saying "shh!")
• CH /tʃ/: Chip, Chair, Cheese, Chalk. (Like a choo-choo train!)
• TH /θ/ & /ð/: Think, Three, That, This. (Tongue between teeth!)
• WH /w/: Whale, White, Wheel, Where.`,
    translation: 'दो अक्षरों के संयुक्त उच्चारण: श, च, थ, व्ह का अभ्यास...',
    audioText: 'Ship, Shell, Shoe. Chip, Chair, Cheese. Think, Three, That. Whale, White, Wheel.',
    phoneticGuide: 'Ship /ʃɪp/, Chair /tʃeər/, Think /θɪŋk/, Whale /weɪl/',
    grammarNotes: 'A digraph is two letters that spell a single sound.',
    vocabulary: [
      { word: 'Shell', meaning: 'The hard outer casing of a marine creature', pronunciation: '/ʃel/' },
      { word: 'Whistle', meaning: 'A clear high-pitched sound made by forcing breath', pronunciation: '/ˈwɪsl/' },
    ],
    exercises: [
      {
        question: 'Which word starts with the "ch" sound?',
        options: ['Ship', 'Chair', 'Think', 'Whale'],
        correctIndex: 1,
        explanation: '"Chair" starts with the /tʃ/ sound.',
      },
      {
        question: 'Where is your tongue placed when saying the "th" sound in "Think"?',
        options: ['Against the roof of your mouth', 'Between your upper and lower teeth', 'Behind your bottom teeth', 'At the back of the throat'],
        correctIndex: 1,
        explanation: 'The unvoiced "th" is articulated with the tongue tip gently between the teeth.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls2-gram-1',
    language: 'english',
    section: 'grammar',
    classGrade: 2,
    title: 'Action Words: Verbs in Motion',
    description: 'Identify verbs and practice adding -s or -es for he, she, and it.',
    difficulty: 'beginner',
    contentBody: `A Verb is an action word! It tells us what someone or something does:
• The rabbit jumps high.
• The eagle flies in the sky.
• The children read colourful books.
Rule: When talking about ONE person (he/she/it), add -s or -es:
- I jump -> He jumps.
- I watch -> She watches.`,
    translation: 'क्रिया (Verb) की पहचान और एकवचन कर्ता के साथ -s/-es का नियम...',
    audioText: 'The rabbit jumps high. The eagle flies in the sky. The children read colourful books. I jump, he jumps. I watch, she watches.',
    phoneticGuide: 'Rabbit /ˈræb.ɪt/, Jumps /dʒʌmps/, Watches /ˈwɒtʃ.ɪz/',
    grammarNotes: 'Subject-verb agreement for third person singular present simple.',
    vocabulary: [
      { word: 'Eagle', meaning: 'A large bird of prey with keen vision', pronunciation: '/ˈiːɡl/' },
      { word: 'Action', meaning: 'Movement or doing something', pronunciation: '/ˈækʃn/' },
    ],
    exercises: [
      {
        question: 'Choose the correct form: "She ______ (sing) a sweet song."',
        options: ['sing', 'sings', 'singing', 'song'],
        correctIndex: 1,
        explanation: 'With "She", we add -s to the verb: "sings".',
      },
      {
        question: 'Which word in "The quick tiger runs fast" is the verb?',
        options: ['The', 'Tiger', 'Runs', 'Fast'],
        correctIndex: 2,
        explanation: '"Runs" is the action word (verb).',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 3 ---
  {
    id: 'eng-cls3-list-1',
    language: 'english',
    section: 'listening',
    classGrade: 3,
    title: 'The Legend of the Seven-Colored Arch',
    description: 'Auditory narrative about how raindrops and sunlight form a glorious rainbow in the sky.',
    difficulty: 'beginner',
    contentBody: `Speaker: Listen closely, young explorers.
Have you ever wondered why a rainbow appears only when both rain and sunshine meet?
Each tiny raindrop acts like a glass prism.
When sunlight enters the water drop, it bends and splits into seven radiant colors:
Violet, Indigo, Blue, Green, Yellow, Orange, and Red.
Remember the name VIBGYOR to recall the colors in order!`,
    translation: 'इंद्रधनुष का निर्माण कैसे होता है: सूर्य का प्रकाश वर्षा की बूंदों से गुजरकर सात रंगों में विभक्त हो जाता है...',
    audioText: 'Have you ever wondered why a rainbow appears only when both rain and sunshine meet? Each tiny raindrop acts like a glass prism. When sunlight enters the water drop, it bends and splits into seven radiant colors: Violet, Indigo, Blue, Green, Yellow, Orange, and Red.',
    phoneticGuide: 'Prism /ˈprɪz.əm/, Radiant /ˈreɪ.di.ənt/, Violet /ˈvaɪə.lət/',
    grammarNotes: 'Focus on connecting words of sequence: when, then, each, remember.',
    vocabulary: [
      { word: 'Prism', meaning: 'A transparent glass object that separates white light into a spectrum', pronunciation: '/ˈprɪzəm/' },
      { word: 'Radiant', meaning: 'Shining, glowing brightly', pronunciation: '/ˈreɪdiənt/' },
      { word: 'Spectrum', meaning: 'A band of colors, as seen in a rainbow', pronunciation: '/ˈspektrəm/' },
    ],
    exercises: [
      {
        question: 'What natural element acts like a glass prism in forming a rainbow?',
        options: ['A cloud', 'A raindrop', 'A leaf', 'A sand grain'],
        correctIndex: 1,
        explanation: 'The audio explains that each tiny raindrop acts like a glass prism.',
      },
      {
        question: 'What acronym helps students recall the seven colors in order?',
        options: ['ROYGBIV', 'VIBGYOR', 'RAINBOW', 'SPECTRUM'],
        correctIndex: 1,
        explanation: 'VIBGYOR stands for Violet, Indigo, Blue, Green, Yellow, Orange, Red.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls3-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 3,
    title: 'The Brave Little Seed in the Royal Garden',
    description: 'A story of patience and growth as a tiny seed becomes a mighty flowering tree.',
    difficulty: 'beginner',
    contentBody: `Deep under the dark, cool earth rested a tiny brown seed.
"I am so small," whispered the seed. "Will I ever touch the blue sky?"
"Drink the gentle rainwater and trust the golden sun," whispered Mother Earth.
The little seed pushed through the soil. Day after day, it grew green leaves and strong branches.
Years later, it stood as a magnificent gulmohar tree, shading travelers with crimson flowers!`,
    translation: 'एक छोटे से बीज की कहानी जो धरती का सीना चीरकर एक विशाल गुलमोहर वृक्ष बन गया...',
    audioText: 'Deep under the dark, cool earth rested a tiny brown seed. I am so small, whispered the seed. Will I ever touch the blue sky? Drink the gentle rainwater and trust the golden sun.',
    phoneticGuide: 'Gulmohar /ˈɡʊl.moʊ.hɑːr/, Crimson /ˈkrɪm.zən/, Magnificent /mæɡˈnɪf.ɪ.sənt/',
    grammarNotes: 'Descriptive adjectives: dark, cool, tiny, gentle, golden, magnificent, crimson.',
    vocabulary: [
      { word: 'Magnificent', meaning: 'Extremely beautiful, elaborate, or impressive', pronunciation: '/mæɡˈnɪfɪsnt/' },
      { word: 'Crimson', meaning: 'A rich deep red color inclined to purple', pronunciation: '/ˈkrɪmzn/' },
    ],
    exercises: [
      {
        question: 'What kind of tree did the little seed become?',
        options: ['An oak tree', 'A pine tree', 'A gulmohar tree', 'A willow tree'],
        correctIndex: 2,
        explanation: 'It grew into a magnificent gulmohar tree with crimson flowers.',
      },
      {
        question: 'What advice did Mother Earth give the seed?',
        options: ['Stay asleep', 'Drink rainwater and trust the sun', 'Run away', 'Hide from the wind'],
        correctIndex: 1,
        explanation: 'Mother Earth told it to drink rainwater and trust the golden sun.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls3-gram-1',
    language: 'english',
    section: 'grammar',
    classGrade: 3,
    title: 'Describing Words: Adjectives and Opposites',
    description: 'Enrich sentences with color, size, texture, and taste adjectives.',
    difficulty: 'beginner',
    contentBody: `Adjectives describe nouns! They answer questions like: What kind? Which one? How many?
Examples:
• Size: A huge elephant vs a tiny ant.
• Texture: A soft pillow vs a hard rock.
• Taste: A sweet strawberry vs a sour lemon.
• Temperature: Hot cocoa vs cold lemonade.
Adjectives make your writing colourful and vivid!`,
    translation: 'विशेषण (Adjective) और विलोम शब्द: विशाल, नन्हा, कोमल, कठोर...',
    audioText: 'Adjectives describe nouns. A huge elephant and a tiny ant. A soft pillow and a hard rock. A sweet strawberry and a sour lemon.',
    phoneticGuide: 'Adjective /ˈædʒ.ek.tɪv/, Strawberry /ˈstrɔː.bər.i/, Lemonade /ˌlem.əˈneɪd/',
    grammarNotes: 'Adjectives usually precede the noun they modify.',
    vocabulary: [
      { word: 'Texture', meaning: 'The feel, appearance, or consistency of a surface', pronunciation: '/ˈtekstʃər/' },
      { word: 'Vivid', meaning: 'Producing powerful feelings or clear mental images', pronunciation: '/ˈvɪvɪd/' },
    ],
    exercises: [
      {
        question: 'Which word is the adjective in: "The clever fox escaped"?',
        options: ['The', 'Clever', 'Fox', 'Escaped'],
        correctIndex: 1,
        explanation: '"Clever" describes the fox, so it is an adjective.',
      },
      {
        question: 'What is the opposite adjective of "rough"?',
        options: ['Smooth', 'Hard', 'Heavy', 'Loud'],
        correctIndex: 0,
        explanation: 'The opposite of "rough" is "smooth".',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 4 & 5 ---
  {
    id: 'eng-cls4-pron-1',
    language: 'english',
    section: 'pronunciation',
    classGrade: 4,
    title: 'Silent Letters Drill (K, W, B, L)',
    description: 'Learn to avoid pronouncing silent letters in common English words.',
    difficulty: 'beginner',
    contentBody: `In English, many letters are written but not spoken!
Listen and repeat:
1. Silent K: Knight /naɪt/, Knee /niː/, Know /noʊ/, Knot /nɒt/.
2. Silent W: Write /raɪt/, Wrist /rɪst/, Wrong /rɒŋ/, Sword /sɔːd/.
3. Silent B: Lamb /læm/, Comb /koʊm/, Thumb /θʌm/, Climb /klaɪm/.
4. Silent L: Half /hɑːf/, Calm /kɑːm/, Palm /pɑːm/, Walk /wɔːk/.`,
    translation: 'मौन वर्ण (Silent Letters) का उच्चारण: क्नाइट नहीं "नाइट", वराइट नहीं "राइट"...',
    audioText: 'Knight, Knee, Know, Knot. Write, Wrist, Wrong, Sword. Lamb, Comb, Thumb, Climb. Half, Calm, Palm, Walk.',
    phoneticGuide: 'Knight /naɪt/, Thumb /θʌm/, Calm /kɑːm/',
    grammarNotes: 'Historical etymology: these consonants were pronounced in Old English but dropped in modern speech.',
    vocabulary: [
      { word: 'Knight', meaning: 'A medieval warrior of noble birth', pronunciation: '/naɪt/' },
      { word: 'Calm', meaning: 'Not showing or feeling nervousness or agitation', pronunciation: '/kɑːm/' },
    ],
    exercises: [
      {
        question: 'Which letter is silent in the word "Knee"?',
        options: ['K', 'N', 'E', 'None'],
        correctIndex: 0,
        explanation: 'The letter "K" is silent before "n" at the start of words.',
      },
      {
        question: 'Which letter is silent in the word "Climb"?',
        options: ['C', 'L', 'I', 'B'],
        correctIndex: 3,
        explanation: 'The letter "B" is silent after "m" at the end of words like climb, comb, thumb.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls4-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 4,
    title: 'The Whispering Pines of Shimla',
    description: 'An evocative passage exploring the misty mountain forests of the Himalayas.',
    difficulty: 'intermediate',
    contentBody: `Morning mist hung like spun silk over the hill slopes of Shimla.
Rohan stepped onto the pine-needle trail behind his cottage.
The tall deodar trees stood like ancient sentinels guarding the valley.
A cold Himalayan breeze whispered through the needles, releasing a fresh, resinous scent.
Suddenly, a brilliant blue bird with a crest darted past — a Himalayan Monal!
Rohan froze in wonder, realizing that nature's greatest masterpieces require quiet observation.`,
    translation: 'शिमला की पहाड़ियों पर देवदार और चीड़ के वनों की सुंदरता और हिमालयी मोनल पक्षी का मनमोहक दृश्य...',
    audioText: 'Morning mist hung like spun silk over the hill slopes of Shimla. Rohan stepped onto the pine-needle trail behind his cottage. The tall deodar trees stood like ancient sentinels guarding the valley.',
    phoneticGuide: 'Deodar /ˈdiː.ə.dɑːr/, Sentinel /ˈsen.tɪ.nəl/, Resinous /ˈrez.ɪ.nəs/',
    grammarNotes: 'Similes: "hung like spun silk", "stood like ancient sentinels".',
    vocabulary: [
      { word: 'Sentinel', meaning: 'A soldier or guard whose job is to stand and keep watch', pronunciation: '/ˈsentɪnl/' },
      { word: 'Resinous', meaning: 'Smelling of or containing sticky resin from trees', pronunciation: '/ˈrezɪnəs/' },
    ],
    exercises: [
      {
        question: 'What kind of bird did Rohan see?',
        options: ['A golden eagle', 'A Himalayan Monal', 'A peacock', 'A green parrot'],
        correctIndex: 1,
        explanation: 'Rohan saw a brilliant blue Himalayan Monal with a crest.',
      },
      {
        question: 'Which simile is used to describe the deodar trees?',
        options: ['Like spun silk', 'Like ancient sentinels', 'Like giant mushrooms', 'Like green umbrellas'],
        correctIndex: 1,
        explanation: 'The deodars are described as standing "like ancient sentinels".',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls5-pron-1',
    language: 'english',
    section: 'pronunciation',
    classGrade: 5,
    title: 'The Tricky "-ed" Past Tense Endings (/t/, /d/, /ɪd/)',
    description: 'Master the three different pronunciations of the past tense suffix "-ed".',
    difficulty: 'beginner',
    contentBody: `The past tense "-ed" ending has three distinct pronunciations:
1. /t/ sound (after voiceless sounds like p, k, f, s, sh, ch):
   • Walked /wɔːkt/, Jumped /dʒʌmpt/, Laughed /lɑːft/, Watched /wɒtʃt/.
2. /d/ sound (after voiced sounds like b, g, v, z, m, n, l, r, vowels):
   • Played /pleɪd/, Cleaned /kliːnd/, Loved /lʌvd/, Climbed /klaɪmd/.
3. /ɪd/ sound (ONLY after "t" or "d" sounds - adds an extra syllable!):
   • Wanted /ˈwɒn.tɪd/, Needed /ˈniː.dɪd/, Decided /dɪˈsaɪ.dɪd/.`,
    translation: 'भूतकाल के "-ed" के तीन उच्चारण: ट, ड और इड...',
    audioText: 'Walked, Jumped, Watched. Played, Cleaned, Loved. Wanted, Needed, Decided.',
    phoneticGuide: 'Walked /wɔːkt/, Played /pleɪd/, Wanted /ˈwɒntɪd/',
    grammarNotes: 'Pronouncing an extra syllable for words like "walked" is a common error; only /t/ or /d/ endings create an extra syllable.',
    vocabulary: [
      { word: 'Voiced', meaning: 'A sound produced with vocal cord vibration (like /b/, /d/, /v/)', pronunciation: '/vɔɪst/' },
      { word: 'Voiceless', meaning: 'A sound produced without vocal cord vibration (like /p/, /t/, /k/)', pronunciation: '/ˈvɔɪsləs/' },
    ],
    exercises: [
      {
        question: 'Which word ends with the /ɪd/ sound and adds an extra syllable?',
        options: ['Walked', 'Played', 'Wanted', 'Jumped'],
        correctIndex: 2,
        explanation: 'Wanted ends in /t/, so the "-ed" is pronounced as /ɪd/, adding a syllable.',
      },
      {
        question: 'How is the "-ed" in "Watched" pronounced?',
        options: ['As a /t/ sound', 'As a /d/ sound', 'As an /ɪd/ sound', 'It is silent'],
        correctIndex: 0,
        explanation: 'After the voiceless /tʃ/ sound, "-ed" is pronounced as /t/.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls5-list-1',
    language: 'english',
    section: 'listening',
    classGrade: 5,
    title: 'The Great Coral Reef: Marine Biology Audio Tour',
    description: 'Listen to a marine biologist explain the symbiotic relationship between corals and algae.',
    difficulty: 'intermediate',
    contentBody: `Biologist Dr. Ananya: "Welcome beneath the waves, divers.
Looking around, you might assume corals are colourful rocks or plants.
In truth, corals are tiny invertebrate animals called polyps!
Each coral polyp builds a hard limestone skeleton around itself.
Inside their clear tissues live microscopic algae called zooxanthellae.
The algae generate sugars through photosynthesis and share them with the polyp.
In return, the coral provides shelter and carbon dioxide.
This mutual cooperation sustains over twenty-five percent of all ocean life!"`,
    translation: 'समुद्री जीवविज्ञान वार्ता: मूंगा (कोरल) और शैवाल के बीच सहजीवी संबंध...',
    audioText: 'Looking around, you might assume corals are colourful rocks or plants. In truth, corals are tiny invertebrate animals called polyps! Each coral polyp builds a hard limestone skeleton around itself. Inside their clear tissues live microscopic algae called zooxanthellae.',
    phoneticGuide: 'Polyps /ˈpɒl.ɪps/, Invertebrate /ɪnˈvɜː.tɪ.brət/, Photosynthesis /ˌfoʊ.toʊˈsɪn.θə.sɪs/',
    grammarNotes: 'Scientific descriptive language: invertebrate, microscopic, mutual cooperation.',
    vocabulary: [
      { word: 'Invertebrate', meaning: 'An animal lacking a backbone', pronunciation: '/ɪnˈvɜːrtɪbrət/' },
      { word: 'Symbiotic', meaning: 'Involving interaction between two different organisms living in close physical association', pronunciation: '/ˌsɪmbaɪˈɒtɪk/' },
    ],
    exercises: [
      {
        question: 'What are corals scientifically classified as?',
        options: ['Underwater rocks', 'Marine plants', 'Tiny invertebrate animals (polyps)', 'Fossilized minerals'],
        correctIndex: 2,
        explanation: 'Corals are tiny invertebrate animals called polyps.',
      },
      {
        question: 'What do the microscopic algae provide to the coral polyps?',
        options: ['Limestone', 'Sugars through photosynthesis', 'Carbon dioxide', 'Saltwater'],
        correctIndex: 1,
        explanation: 'The algae generate sugars through photosynthesis and share them with the coral.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Middle: Class 6 (Demo Class) ---
  {
    id: 'eng-cls6-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 6,
    title: 'The Secret of the Ancient Whispering Grove',
    description: 'An inspiring adventure story about biodiversity, ancient trees, and ecological balance.',
    difficulty: 'intermediate',
    contentBody: `Deep within the Nilgiri hills lies a hidden sanctuary known as the Whispering Grove.
For centuries, the indigenous elders protected this forest, where medicinal herbs grew alongside thousand-year-old cedar trees.
Young Maya and her grandfather walked along the damp, mossy path at sunrise.
"Grandfather, listen!" whispered Maya. "The breeze makes the bamboo stalks chime like silver bells."
"Indeed, little one," replied her grandfather with a gentle smile. "Nature communicates in melodies to those patient enough to listen."`,
    translation: 'नीलगिरि की पहाड़ियों में एक प्राचीन वन है जहां औषधीय पौधे और विशाल देवदार वृक्ष पाए जाते हैं...',
    audioText: 'Deep within the Nilgiri hills lies a hidden sanctuary known as the Whispering Grove. For centuries, the indigenous elders protected this forest, where medicinal herbs grew alongside thousand-year-old cedar trees.',
    phoneticGuide: 'Sanctuary /ˈsæŋk.tʃu.ər.i/, Indigenous /ɪnˈdɪdʒ.ɪ.nəs/, Resonates /ˈrez.ən.eɪts/',
    grammarNotes: 'Relative clauses: "where medicinal herbs grew", "who respect the forest".',
    vocabulary: [
      { word: 'Sanctuary', meaning: 'A place of safety or natural refuge', pronunciation: '/ˈsæŋktʃuəri/' },
      { word: 'Indigenous', meaning: 'Originating or occurring naturally in a particular place; native', pronunciation: '/ɪnˈdɪdʒənəs/' },
      { word: 'Melody', meaning: 'A sequence of pleasing musical notes', pronunciation: '/ˈmelədi/' },
    ],
    exercises: [
      {
        question: 'Where is the Whispering Grove located?',
        options: ['In the Thar Desert', 'In the Nilgiri hills', 'Along the Bay of Bengal', 'In the Himalayas'],
        correctIndex: 1,
        explanation: 'The story explicitly mentions the Nilgiri hills.',
      },
      {
        question: 'What sound did Maya compare the bamboo stalks to?',
        options: ['Crashing thunder', 'Silver bells', 'Roaring river', 'Galloping horses'],
        correctIndex: 1,
        explanation: 'Maya said the breeze makes the bamboo stalks chime like silver bells.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls6-pron-1',
    language: 'english',
    section: 'pronunciation',
    classGrade: 6,
    title: 'Word Stress in Two-Syllable Nouns vs Verbs',
    description: 'Master syllable stress shifts: REcord (noun) vs reCORD (verb).',
    difficulty: 'intermediate',
    contentBody: `In English, shifting the stress changes the word from a NOUN to a VERB!
Rule:
• Nouns stress the FIRST syllable:
  - PRE-sent (a gift)
  - RE-cord (a disc or document)
  - OB-ject (a physical thing)
  - CON-duct (behavior)
• Verbs stress the SECOND syllable:
  - pre-SENT (to give or show)
  - re-CORD (to capture sound or video)
  - ob-JECT (to protest or disagree)
  - con-DUCT (to lead or manage)
Listen carefully and practice the louder, higher pitch on the stressed syllable!`,
    translation: 'संज्ञा और क्रिया में स्वराघात (Word Stress) का परिवर्तन...',
    audioText: 'PRE-sent, pre-SENT. RE-cord, re-CORD. OB-ject, ob-JECT. CON-duct, con-DUCT.',
    phoneticGuide: 'PRE-sent /ˈprez.ənt/ vs pre-SENT /prɪˈzent/',
    grammarNotes: 'Initial syllable stress is predominant in English two-syllable nouns; ultimate stress in verbs.',
    vocabulary: [
      { word: 'Syllable', meaning: 'A unit of pronunciation having one vowel sound', pronunciation: '/ˈsɪləbl/' },
      { word: 'Stress', meaning: 'Emphasis given to a syllable or word in speech', pronunciation: '/stres/' },
    ],
    exercises: [
      {
        question: 'When "present" means a gift (noun), which syllable is stressed?',
        options: ['First syllable (PRE-sent)', 'Second syllable (pre-SENT)', 'Both equally', 'Neither'],
        correctIndex: 0,
        explanation: 'As a noun meaning gift, the first syllable is stressed: PRE-sent.',
      },
      {
        question: 'In "The singer will record a new album", which syllable of "record" is stressed?',
        options: ['First syllable (RE-cord)', 'Second syllable (re-CORD)', 'It is whispered', 'No stress'],
        correctIndex: 1,
        explanation: 'Here "record" is an action verb, so the second syllable is stressed: re-CORD.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls6-list-1',
    language: 'english',
    section: 'listening',
    classGrade: 6,
    title: 'The Mystery of the Indus Valley Seal',
    description: 'Listen to an archaeological mystery about the undeciphered script of Mohenjo-daro.',
    difficulty: 'intermediate',
    contentBody: `Narrator: "In the year 1922, archaeologists digging in the Indus basin uncovered a square soapstone seal.
Engraved on its surface was the carving of a majestic unicorn-like humped bull.
Above the creature sat a row of enigmatic symbols — fish shapes, jar signs, and straight tally marks.
For over a century, linguists have debated whether these signs represent a spoken language or religious emblems.
Unlike the Rosetta Stone which had Greek translations, no bilingual inscription has ever been found in Harappa.
Until someone deciphers this ancient script, the voices of the Indus traders remain tantalizingly silent."`,
    translation: 'सिंधु घाटी सभ्यता की सील और अपठित लिपि की पुरातात्विक पहेली...',
    audioText: 'In the year 1922, archaeologists digging in the Indus basin uncovered a square soapstone seal. Engraved on its surface was the carving of a majestic humped bull. Above the creature sat a row of enigmatic symbols.',
    phoneticGuide: 'Archaeologists /ˌɑːr.kiˈɒl.ə.dʒɪsts/, Enigmatic /ˌen.ɪɡˈmæt.ɪk/, Decipher /dɪˈsaɪ.fər/',
    grammarNotes: 'Past perfect and passive constructions: "had been found", "was engraved", "have debated".',
    vocabulary: [
      { word: 'Enigmatic', meaning: 'Difficult to interpret or understand; mysterious', pronunciation: '/ˌenɪɡˈmætɪk/' },
      { word: 'Decipher', meaning: 'Convert a text written in code or a cryptic alphabet into normal language', pronunciation: '/dɪˈsaɪfər/' },
    ],
    exercises: [
      {
        question: 'What animal was carved on the square soapstone seal?',
        options: ['A roaring lion', 'A majestic humped bull', 'A swift horse', 'A swimming fish'],
        correctIndex: 1,
        explanation: 'The narrator describes a majestic unicorn-like humped bull.',
      },
      {
        question: 'Why has the Indus script proven so difficult to decipher?',
        options: ['The seals were destroyed', 'No bilingual text like the Rosetta Stone has been found', 'The stones are made of metal', 'It was written in modern English'],
        correctIndex: 1,
        explanation: 'Unlike Egypt with the Rosetta Stone, no bilingual inscription has been discovered.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls6-gram-1',
    language: 'english',
    section: 'grammar',
    classGrade: 6,
    title: 'Tense Mastery: Present Perfect vs Simple Past',
    description: 'Distinguish between actions completed at a specific past time vs life experiences connected to now.',
    difficulty: 'intermediate',
    contentBody: `Many learners confuse the Simple Past with the Present Perfect!
1. Simple Past (Specific past time in the past - finished!):
   • "I visited Agra last year." (Specific time: last year)
   • "She wrote the letter yesterday."
2. Present Perfect (has/have + past participle - experience connects to now!):
   • "I have visited Agra twice." (Life experience, time not specified)
   • "She has just finished her homework." (Result matters now!)
Key words:
- Simple Past: yesterday, in 2018, last week, ago.
- Present Perfect: already, yet, ever, never, recently, since, for.`,
    translation: 'सामान्य भूतकाल (Simple Past) और पूर्ण वर्तमान काल (Present Perfect) में अंतर...',
    audioText: 'I visited Agra last year. I have visited Agra twice. She wrote the letter yesterday. She has just finished her homework.',
    phoneticGuide: 'Visited /ˈvɪz.ɪ.tɪd/, Participle /ˈpɑː.tɪ.sɪ.pəl/',
    grammarNotes: 'Present Perfect formula: Subject + have/has + Past Participle (V3).',
    vocabulary: [
      { word: 'Participle', meaning: 'A word formed from a verb used as an adjective or with auxiliary verbs', pronunciation: '/ˈpɑːrtɪsɪpl/' },
      { word: 'Experience', meaning: 'Practical contact with and observation of facts or events', pronunciation: '/ɪkˈspɪəriəns/' },
    ],
    exercises: [
      {
        question: 'Which sentence correctly uses the Simple Past?',
        options: ['I have seen him yesterday.', 'I saw him yesterday.', 'I am seeing him yesterday.', 'I had saw him yesterday.'],
        correctIndex: 1,
        explanation: 'With a specific past time like "yesterday", use Simple Past: "I saw him yesterday."',
      },
      {
        question: 'Complete: "Have you ever ______ (be) to Kerala?"',
        options: ['was', 'went', 'been', 'being'],
        correctIndex: 2,
        explanation: 'Present perfect uses the past participle: "been".',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Middle: Class 7 & 8 ---
  {
    id: 'eng-cls7-list-1',
    language: 'english',
    section: 'listening',
    classGrade: 7,
    title: 'Acoustic Mysteries: The Whispering Gallery of St Paul',
    description: 'An auditory physics explanation of how whispers travel across curved dome galleries.',
    difficulty: 'intermediate',
    contentBody: `Guide: "Ladies and gentlemen, step right up to the circular balustrade inside the dome of St Paul's Cathedral.
Put your ear flat against the curved limestone wall.
Over thirty meters away on the opposite side of the dome, my assistant will whisper softly: 'Knowledge is power.'
Normally, sound disperses outward in spherical waves and fades within a few feet.
However, because of Rayleigh scattering and the smooth concave curve of this dome, sound waves do not dissipate.
Instead, they creep along the perimeter wall through repeated specular reflections.
Listen now... can you hear the ghostly whisper as clearly as if it were murmured right into your ear?"`,
    translation: 'लंदन के सेंट पॉल्स कैथेड्रल की व्हिस्परिंग गैलरी की ध्वनिक भौतिकी का श्रवण पाठ...',
    audioText: 'Put your ear flat against the curved limestone wall. Over thirty meters away, my assistant will whisper softly: Knowledge is power. Sound waves do not dissipate. They creep along the perimeter wall.',
    phoneticGuide: 'Cathedral /kəˈθiː.drəl/, Balustrade /ˌbæl.əˈstreɪd/, Specular /ˈspek.jə.lər/',
    grammarNotes: 'Subordinating conjunctions of cause and contrast: "normally... however", "because of".',
    vocabulary: [
      { word: 'Dissipate', meaning: 'Disperse or scatter; disappear', pronunciation: '/ˈdɪsɪpeɪt/' },
      { word: 'Concave', meaning: 'Having an outline or surface curved like the interior of a circle', pronunciation: '/kɒnˈkeɪv/' },
    ],
    exercises: [
      {
        question: 'What physical shape of the dome prevents the sound waves from dissipating?',
        options: ['Flat square ceilings', 'Smooth concave curve', 'Triangular arches', 'Carpeted floors'],
        correctIndex: 1,
        explanation: 'The smooth concave curved wall guides the sound waves through continuous reflection.',
      },
      {
        question: 'What phrase did the assistant whisper from across the dome?',
        options: ['Silence is golden', 'Knowledge is power', 'Sound travels fast', 'Listen closely'],
        correctIndex: 1,
        explanation: 'The guide explicitly says the assistant whispers: "Knowledge is power."',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls8-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 8,
    title: 'The Flight of Curiosity: The Wright Brothers',
    description: 'Historical account of the first powered, controlled flight in human history at Kitty Hawk.',
    difficulty: 'intermediate',
    contentBody: `On a cold, windy morning of December 17, 1903, in Kitty Hawk, North Carolina, history changed forever.
Two bicycle mechanics from Ohio, Orville and Wilbur Wright, rolled out their twin-winged flyer.
Unlike previous inventors who focused solely on powerful engines, the Wrights solved the fundamental riddle of three-axis control.
They invented wing-warping to roll the plane, a movable rudder to control yaw, and an elevator to control pitch.
Orville lay flat on the lower wing, revved the engine, and lifted into the air for twelve historic seconds!`,
    translation: '१९०३ में राइट बंधुओं द्वारा किटी हॉक में प्रथम नियंत्रित विमान उड़ान का ऐतिहासिक विवरण...',
    audioText: 'On a cold, windy morning of December 17, 1903, history changed forever. Two bicycle mechanics from Ohio, Orville and Wilbur Wright, rolled out their twin-winged flyer. They solved the riddle of three-axis control.',
    phoneticGuide: 'Aviation /ˌeɪ.viˈeɪ.ʃən/, Rudder /ˈrʌd.ər/, Elevator /ˈel.ɪ.veɪ.tər/',
    grammarNotes: 'Prepositional phrases indicating time and location: "On a cold morning", "in Kitty Hawk".',
    vocabulary: [
      { word: 'Wing-warping', meaning: 'An early system for lateral control of a fixed-wing aircraft', pronunciation: '/wɪŋ ˈwɔːrpɪŋ/' },
      { word: 'Mechanic', meaning: 'A person who repairs and maintains machinery', pronunciation: '/məˈkænɪk/' },
    ],
    exercises: [
      {
        question: 'How long did Orville Wright’s historic first powered flight last?',
        options: ['12 seconds', '5 minutes', '1 hour', '30 seconds'],
        correctIndex: 0,
        explanation: 'The maiden powered flight lasted 12 seconds.',
      },
      {
        question: 'What was the revolutionary breakthrough developed by the Wright Brothers?',
        options: ['Jet fuel', 'Three-axis aerodynamic control', 'Parachutes', 'Rocket propulsion'],
        correctIndex: 1,
        explanation: 'Their main breakthrough was three-axis control (roll, pitch, yaw).',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls8-gram-1',
    language: 'english',
    section: 'grammar',
    classGrade: 8,
    title: 'Reported Speech: Direct vs Indirect Discourse',
    description: 'Transform direct quotations into reported speech with tense backshifts and pronoun adjustments.',
    difficulty: 'intermediate',
    contentBody: `When reporting what someone said, we shift the tense backward:
Direct Speech: He said, "I am studying."
Indirect Speech: He said that he was studying.

Tense Shift Rules:
• Present Simple -> Past Simple ("I live here" -> He said he lived there)
• Present Continuous -> Past Continuous ("I am coming" -> She said she was coming)
• Present Perfect -> Past Perfect ("I have lost my key" -> He said he had lost his key)
• Will -> Would ("I will help" -> She said she would help)

Remember to change time adverbs: "now" -> "then", "today" -> "that day", "yesterday" -> "the previous day"!`,
    translation: 'प्रत्यक्ष और अप्रत्यक्ष कथन (Direct & Indirect Speech) के नियम...',
    audioText: 'Direct Speech: He said, I am studying. Indirect Speech: He said that he was studying. Will changes to would. Now changes to then.',
    phoneticGuide: 'Reported /rɪˈpɔː.tɪd/, Discourse /ˈdɪs.kɔːs/',
    grammarNotes: 'Backshifting is not required when reporting general universal truths.',
    vocabulary: [
      { word: 'Quotation', meaning: 'A group of words taken from a text or speech and repeated by someone other than the original author', pronunciation: '/kwoʊˈteɪʃn/' },
      { word: 'Backshift', meaning: 'The changing of a tense from present to past in indirect speech', pronunciation: '/ˈbækʃɪft/' },
    ],
    exercises: [
      {
        question: 'Change to indirect speech: She said, "I will call you tomorrow."',
        options: [
          'She said that she will call me tomorrow.',
          'She said that she would call me the next day.',
          'She said that she called me yesterday.',
          'She said that she is calling me.',
        ],
        correctIndex: 1,
        explanation: '"Will" shifts to "would", and "tomorrow" becomes "the next day".',
      },
      {
        question: 'Change: Mohan said, "The earth revolves around the sun."',
        options: [
          'Mohan said that the earth revolved around the sun.',
          'Mohan said that the earth revolves around the sun.',
          'Mohan said that the earth had revolved.',
          'Mohan told earth revolves.',
        ],
        correctIndex: 1,
        explanation: 'Universal scientific truths do not undergo tense backshifting.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Secondary: Class 9 & 10 ---
  {
    id: 'eng-cls9-gram-1',
    language: 'english',
    section: 'grammar',
    classGrade: 9,
    title: 'Transformations: Active to Passive Voice',
    description: 'Convert transitive verbs between active agent focus and passive objective emphasis.',
    difficulty: 'advanced',
    contentBody: `Voice describes the relationship between the action and the participants:
• Active: The focus is on the AGENT doing the action.
  "Alexander Fleming discovered penicillin in 1928."
• Passive: The focus shifts to the RECEIVER or RESULT of the action.
  "Penicillin was discovered by Alexander Fleming in 1928."

When to use Passive Voice:
1. In scientific laboratory reports ("The solution was heated to 100°C").
2. When the agent is unknown or irrelevant ("My bicycle was stolen").
3. To convey formal journalistic objectivity.`,
    translation: 'कर्तृवाच्य और कर्मवाच्य (Active and Passive Voice) का रूपांतरण और वैज्ञानिक लेखन...',
    audioText: 'Alexander Fleming discovered penicillin in 1928. Penicillin was discovered by Alexander Fleming in 1928. The solution was heated to 100 degrees Celsius.',
    phoneticGuide: 'Penicillin /ˌpen.əˈsɪl.ɪn/, Transitive /ˈtræn.zə.tɪv/',
    grammarNotes: 'Formula: Object + appropriate form of "be" + Past Participle (V3) + [by agent].',
    vocabulary: [
      { word: 'Transitive', meaning: 'A verb requiring one or more objects', pronunciation: '/ˈtrænzətɪv/' },
      { word: 'Agent', meaning: 'The doer of an action in a sentence', pronunciation: '/ˈeɪdʒənt/' },
    ],
    exercises: [
      {
        question: 'What is the passive form of: "The chef cooked an exquisite dinner"?',
        options: [
          'An exquisite dinner was cooked by the chef.',
          'The chef was cooking dinner.',
          'An exquisite dinner cooked the chef.',
          'Dinner has been cooked.',
        ],
        correctIndex: 0,
        explanation: 'Object ("An exquisite dinner") + was + cooked + by agent ("the chef").',
      },
      {
        question: 'Why is passive voice preferred in scientific publications?',
        options: [
          'It sounds poetic',
          'It emphasizes the objective experiment rather than the researcher',
          'It uses fewer words',
          'Active voice is grammatically illegal',
        ],
        correctIndex: 1,
        explanation: 'Passive voice places focus on the procedure and data rather than the individual.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls10-pron-1',
    language: 'english',
    section: 'pronunciation',
    classGrade: 10,
    title: 'The Schwa /ə/: The Most Common English Sound',
    description: 'Identify unstressed syllables and eliminate vowel over-enunciation.',
    difficulty: 'advanced',
    contentBody: `The schwa /ə/ is the secret to natural English fluency!
It is a neutral, relaxed vowel sound found ONLY in UNSTRESSED syllables.
Compare:
• "photograph" /ˈfoʊ.tə.ɡræf/ -> the "o" in the middle is a schwa /ə/.
• "photographer" /fəˈtɒɡ.rə.fər/ -> the first "o" and third "e" are schwas!
• "banana" /bəˈnæn.ə/ -> both the first and last 'a' are schwas!
Relax your jaw and tongue completely when articulating the schwa.`,
    translation: 'अंग्रेजी का सबसे महत्वपूर्ण और शिथिल स्वर — श्वा (/ə/) का उच्चारण अभ्यास...',
    audioText: 'Photograph, Photographer, Photographic. Banana, Doctor, About, Support. The schwa sound.',
    phoneticGuide: 'Schwa /ʃwɑː/, Neutral /ˈnjuː.trəl/, Unstressed /ʌnˈstrest/',
    grammarNotes: 'Rhythmic timing: English is a stress-timed language where unstressed syllables compress into schwas.',
    vocabulary: [
      { word: 'Schwa', meaning: 'The unstressed central vowel sound represented by the symbol /ə/', pronunciation: '/ʃwɑː/' },
      { word: 'Stress-timed', meaning: 'Speech where stressed beats occur at roughly regular intervals', pronunciation: '/stres taɪmd/' },
    ],
    exercises: [
      {
        question: 'In the word "about" /əˈbaʊt/, which syllable contains the schwa?',
        options: ['The first unstressed syllable "a-"', 'The second stressed syllable "-bout"', 'Both syllables', 'Neither'],
        correctIndex: 0,
        explanation: 'The unaccented initial "a-" is pronounced as a relaxed schwa /ə/.',
      },
      {
        question: 'Can a schwa sound ever occur on the main stressed syllable of an English word?',
        options: ['Yes, always', 'No, schwa only occurs in unstressed positions', 'Only in questions', 'Only in past tense'],
        correctIndex: 1,
        explanation: 'By definition, the schwa vowel only occurs in unstressed syllables.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Senior Secondary: Class 11 & 12 ---
  {
    id: 'eng-cls11-read-1',
    language: 'english',
    section: 'reading',
    classGrade: 11,
    title: 'The Art of Persuasive Rhetoric & Critical Discourse',
    description: "An analytical passage on Aristotle’s three pillars: Ethos, Pathos, and Logos.",
    difficulty: 'advanced',
    contentBody: `Persuasion is the cornerstone of democratic debate, academic inquiry, and interpersonal leadership.
Over two millennia ago, the philosopher Aristotle codified the mechanics of rhetoric into three indelible appeals:
First, 'Ethos' addresses the speaker's moral character, credibility, and authority. Without trust, eloquence is perceived as hollow deception.
Second, 'Logos' invokes deductive logic, empirical evidence, and coherent structure. A sound syllogism anchors the audience’s rational intellect.
Third, 'Pathos' awakens empathy and emotional resonance. While logic convinces the mind, emotional connection inspires decisive conviction.
In our modern digital era flooded with misinformation, discerning these three appeals empowers citizens to dismantle demagoguery and champion reasoned discourse.`,
    translation: 'अरस्तू का वक्तृत्व शास्त्र: एथोस (चरित्र), लोगोस (तर्क) और पैथोस (भावना) का समालोचनात्मक विश्लेषण...',
    audioText: 'Persuasion is the cornerstone of democratic debate, academic inquiry, and interpersonal leadership. Over two millennia ago, Aristotle codified rhetoric into three appeals: Ethos, Logos, and Pathos. Discerning these appeals empowers citizens to dismantle demagoguery.',
    phoneticGuide: 'Rhetoric /ˈret.ər.ɪk/, Syllogism /ˈsɪl.ə.dʒɪz.əm/, Demagoguery /ˌdem.əˈɡɒɡ.ər.i/',
    grammarNotes: 'Periodic sentence architecture with parallel parenthetical structures and high-order nominalization.',
    vocabulary: [
      { word: 'Rhetoric', meaning: 'The art of effective or persuasive speaking or writing', pronunciation: '/ˈretərɪk/' },
      { word: 'Syllogism', meaning: 'An instance of a form of reasoning in which a conclusion is drawn from two given or assumed premises', pronunciation: '/ˈsɪlədʒɪzəm/' },
      { word: 'Demagoguery', meaning: 'Political activity or practices that seek support by appealing to desires and prejudices rather than rational argument', pronunciation: '/ˌdeməˈɡɒɡəri/' },
    ],
    exercises: [
      {
        question: 'Which Aristotelian appeal relies on empirical data, deductive syllogisms, and structured evidence?',
        options: ['Ethos', 'Pathos', 'Logos', 'Kairos'],
        correctIndex: 2,
        explanation: 'Logos appeals directly to logic, reason, and structured argumentation.',
      },
      {
        question: 'Why is Ethos considered the prerequisite for effective rhetoric?',
        options: ['It uses loud shouting', 'Without credibility and trust, eloquence sounds like deception', 'It requires rhyming words', 'It is based on fictional myths'],
        correctIndex: 1,
        explanation: 'The passage asserts that without trust, eloquence is perceived as hollow deception.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'eng-cls12-list-1',
    language: 'english',
    section: 'listening',
    classGrade: 12,
    title: 'Diplomatic Multilateralism & Global Climate Accords',
    description: 'Listen to a complex multi-perspective diplomatic policy negotiation and identify conflicting geopolitical stances.',
    difficulty: 'advanced',
    contentBody: `Ambassador (Delegation Chair): "Esteemed delegates, as we deliberate Article 6 of the carbon sequestration agreement, we must confront the dissonance between sovereign industrial sovereignty and binding carbon reduction mandates.
Delegate Rao (Emerging Economies): "With all due respect to the Chair, developing economies cannot bear uniform mitigation obligations without equitable technology transfers and grant-based climate financing."
Delegate Mercer (Industrialized Bloc): "While we acknowledge historical responsibilities, future trajectory modeling proves that without universal compliance ceilings, atmospheric thresholds will breach irreversible tipping points."`,
    translation: 'वैश्विक कूटनीतिक संवाद: जलवायु समझौतों में ऐतिहासिक उत्तरदायित्व और समान प्रौद्योगिकी हस्तांतरण का द्वंद्व...',
    audioText: 'Esteemed delegates, as we deliberate Article 6 of the carbon sequestration agreement, we must confront the dissonance between sovereign industrial sovereignty and binding carbon reduction mandates. Developing economies cannot bear uniform obligations without equitable financing.',
    phoneticGuide: 'Multilateralism /ˌmʌl.tiˈlæt.ər.əl.ɪ.zəm/, Sequestration /ˌsiː.kwesˈtreɪ.ʃən/, Dissonance /ˈdɪs.ə.nəns/',
    grammarNotes: 'High-register diplomatic register utilizing formal concessive clauses ("While we acknowledge...") and subjunctive constructions.',
    vocabulary: [
      { word: 'Sequestration', meaning: 'The process of capturing and storing carbon dioxide', pronunciation: '/ˌsiːkwesˈtreɪʃn/' },
      { word: 'Dissonance', meaning: 'A tension or clash resulting from the combination of two disharmonious elements', pronunciation: '/ˈdɪsənəns/' },
      { word: 'Mitigation', meaning: 'The action of reducing the severity, seriousness, or painfulness of something', pronunciation: '/ˌmɪtɪˈɡeɪʃn/' },
    ],
    exercises: [
      {
        question: 'What is the core prerequisite demanded by Delegate Rao for emerging economies?',
        options: ['Exemption from all treaties', 'Equitable technology transfers and grant financing', 'Complete privatization of energy grids', 'Immediate closure of all coal plants'],
        correctIndex: 1,
        explanation: 'Delegate Rao specifies equitable technology transfers and grant-based financing.',
      },
      {
        question: 'What threat does Delegate Mercer highlight regarding future trajectories?',
        options: ['Currency devaluation', 'Breaching irreversible atmospheric tipping points', 'Trade tariff disputes', 'Loss of maritime shipping routes'],
        correctIndex: 1,
        explanation: 'Mercer points to irreversible climate tipping points if universal ceilings are ignored.',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // ==========================================
  // HINDI CURRICULUM (Classes 1 - 12)
  // ==========================================

  // --- Primary: Class 1 ---
  {
    id: 'hin-cls1-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 1,
    title: 'नटखट चीकू और मीठा आम',
    description: 'कक्षा १ के विद्यार्थियों के लिए सरल शब्दों और चित्रों से सजी रुचिकर कहानी।',
    difficulty: 'beginner',
    contentBody: `एक बगीचे में चीकू नाम का एक छोटा बंदर रहता था।
चीकू बहुत नटखट था। वह दिन भर डाल-डाल पर उछलता-कूदता था।
एक दिन उसे एक बड़ा पीला आम दिखा। चीकू ने झट से आम तोड़ा।
उसने आम को धोकर अपने मित्र तोते के साथ मिलकर खाया। आम बहुत मीठा और रसीला था!`,
    translation: 'In a garden lived a little monkey named Cheeku. He was very playful and shared a sweet mango with his parrot friend.',
    audioText: 'एक बगीचे में चीकू नाम का एक छोटा बंदर रहता था। चीकू बहुत नटखट था। वह दिन भर डाल-डाल पर उछलता-कूदता था। एक दिन उसे एक बड़ा पीला आम दिखा। चीकू ने झट से आम तोड़ा।',
    phoneticGuide: 'Ek bagīche mein Chīkū nām kā ek chhoṭā bandar rahtā thā.',
    grammarNotes: 'सरल भूतकाल एवं आ-कारान्त, ई-कारान्त शब्दों की पहचान।',
    vocabulary: [
      { word: 'नटखट', meaning: 'शरारती (Naughty / Playful)', pronunciation: 'Nat-khat' },
      { word: 'रसीला', meaning: 'रस से भरा हुआ (Juicy)', pronunciation: 'Raseela' },
      { word: 'बगीचा', meaning: 'उपवन (Garden)', pronunciation: 'Bageecha' },
    ],
    exercises: [
      {
        question: 'चीकू कौन था?',
        options: ['एक छोटा खरगोश', 'एक छोटा बंदर', 'एक सुंदर तोता', 'एक गिलहरी'],
        correctIndex: 1,
        explanation: 'चीकू एक छोटा नटखट बंदर था।',
      },
      {
        question: 'चीकू ने आम किसके साथ बांटकर खाया?',
        options: ['हाथी के साथ', 'तोते के साथ', 'भालू के साथ', 'अकेले खाया'],
        correctIndex: 1,
        explanation: 'चीकू ने आम अपने मित्र तोते के साथ मिलकर खाया।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls1-pron-1',
    language: 'hindi',
    section: 'pronunciation',
    classGrade: 1,
    title: "स्वर वर्ण 'अ' से 'अः' तक शुद्ध कंठ्य उच्चारण",
    description: 'देवनागरी वर्णमाला के स्वरों का शुद्ध कंठ-ध्वनि अभ्यास।',
    difficulty: 'beginner',
    contentBody: `हिंदी वर्णमाला के मूल स्वर:
अ - अनार, आ - आम
इ - इमली, ई - ईख
उ - उल्लू, ऊ - ऊन
ऋ - ऋषि
ए - एड़ी, ऐ - ऐनक
ओ - ओखली, औ - औरत
अं - अंगूर, अः - खाली!
मुंह खोलकर 'अ' और 'आ' के अंतर को स्पष्ट बोलें।`,
    translation: 'Pronunciation of Devanagari vowels from A to Aha.',
    audioText: 'अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, अं, अः। अनार, आम, इमली, ईख।',
    phoneticGuide: 'A, Aa, I, Ee, U, Oo, Ri, E, Ai, O, Au, Am, Aha',
    grammarNotes: 'स्वरों का उच्चारण स्वतंत्र रूप से बिना किसी अन्य वर्ण की सहायता के होता है।',
    vocabulary: [
      { word: 'अनार', meaning: 'एक लाल दानेदार फल (Pomegranate)', pronunciation: 'Anaar' },
      { word: 'ईख', meaning: 'गन्ना (Sugarcane)', pronunciation: 'Eekh' },
    ],
    exercises: [
      {
        question: '"आम" शब्द किस स्वर से प्रारंभ होता है?',
        options: ['अ', 'आ', 'इ', 'उ'],
        correctIndex: 1,
        explanation: '"आम" दीर्घ स्वर "आ" से शुरू होता है।',
      },
      {
        question: 'इनमें से कौन सा दीर्घ स्वर है?',
        options: ['अ', 'इ', 'ई', 'उ'],
        correctIndex: 2,
        explanation: '"ई" एक दीर्घ स्वर है जिसे बोलने में दोगुना समय लगता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls1-list-1',
    language: 'hindi',
    section: 'listening',
    classGrade: 1,
    title: 'नन्हीं चिड़िया का प्रभाती गीत',
    description: 'सुनिए सुबह-सुबह चिड़िया कैसे चहचहाती है और प्रकृति जागती है।',
    difficulty: 'beginner',
    contentBody: `चीं-चीं, चूँ-चूँ! नन्हीं चिड़िया जागी।
सूरज दादा पूरब से निकले और सुनहरी किरणें चारों ओर फैल गईं।
चिड़िया ने पंख फड़फड़ाए और मीठे बोल गाए:
"उठो प्यारे बच्चों, सवेरा हुआ! बस्ता उठाओ, विद्यालय की घंटी बजी!"
फूल मुस्कराए और मंद-मंद हवा बहने लगी।`,
    translation: 'Auditory fable of the little morning bird greeting the sunrise.',
    audioText: 'चीं-चीं, चूँ-चूँ! नन्हीं चिड़िया जागी। सूरज दादा पूरब से निकले। उठो प्यारे बच्चों, सवेरा हुआ! बस्ता उठाओ, विद्यालय की घंटी बजी!',
    phoneticGuide: 'Cheen-cheen, Choon-choon! Nanhi chidiya jaagi. Sooraj dada poorab se nikle.',
    grammarNotes: 'ध्वन्यात्मक शब्द (ध्वनि अनुकरण): चीं-चीं, चूँ-चूँ।',
    vocabulary: [
      { word: 'किरण', meaning: 'प्रकाश की रेखा (Ray of light)', pronunciation: 'Kiran' },
      { word: 'सवेरा', meaning: 'प्रातःकाल, सुबह (Morning / Dawn)', pronunciation: 'Savera' },
    ],
    exercises: [
      {
        question: 'चिड़िया ने बच्चों को क्या करने के लिए कहा?',
        options: ['सोते रहो', 'बस्ता उठाकर विद्यालय जाओ', 'टीवी देखो', 'बाजार जाओ'],
        correctIndex: 1,
        explanation: 'चिड़िया ने कहा: "उठो प्यारे बच्चों, सवेरा हुआ! बस्ता उठाओ, विद्यालय की घंटी बजी!"',
      },
      {
        question: 'सूरज किस दिशा से निकला?',
        options: ['पश्चिम', 'उत्तर', 'पूरब', 'दक्षिण'],
        correctIndex: 2,
        explanation: 'सूरज पूरब दिशा से निकलता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls1-gram-1',
    language: 'hindi',
    section: 'grammar',
    classGrade: 1,
    title: 'संज्ञा की पहली सीढ़ी: नाम वाले शब्द',
    description: 'किसी व्यक्ति, वस्तु, पशु या स्थान के नाम को पहचानना।',
    difficulty: 'beginner',
    contentBody: `संसार में हर किसी का एक नाम होता है! नाम वाले शब्दों को संज्ञा कहते हैं:
• व्यक्तियों के नाम: राम, सीता, माता, पिता।
• वस्तुओं के नाम: गेंद, पुस्तक, कलम, थाली।
• पशु-पक्षियों के नाम: गाय, तोता, कुत्ता, हाथी।
• स्थानों के नाम: दिल्ली, घर, पाठशाला, उपवन।
जब भी हम किसी को पुकारते हैं, हम संज्ञा शब्द का प्रयोग करते हैं।`,
    translation: 'Introduction to Nouns (Sangya) in Hindi for elementary students.',
    audioText: 'नाम वाले शब्दों को संज्ञा कहते हैं। व्यक्तियों के नाम: राम, सीता। वस्तुओं के नाम: गेंद, पुस्तक। स्थानों के नाम: पाठशाला, घर।',
    phoneticGuide: 'Sangya: Naam wale shabdon ko sangya kahte hain.',
    grammarNotes: 'संज्ञा के तीन मुख्य भेद हैं: व्यक्तिवाचक, जातिवाचक, भाववाचक।',
    vocabulary: [
      { word: 'पाठशाला', meaning: 'विद्यालय, स्कूल (School)', pronunciation: 'Paathshaala' },
      { word: 'उपवन', meaning: 'छोटा बगीचा (Garden)', pronunciation: 'Upvan' },
    ],
    exercises: [
      {
        question: 'वाक्य "तोता मिर्च खाता है" में पक्षी की संज्ञा कौन सी है?',
        options: ['खाता', 'तोता', 'मिर्च', 'है'],
        correctIndex: 1,
        explanation: '"तोता" पक्षी का नाम है, अतः यह संज्ञा है।',
      },
      {
        question: 'इनमें से कौन सा शब्द स्थान (जगह) का नाम है?',
        options: ['कलम', 'दिल्ली', 'घोड़ा', 'मीठा'],
        correctIndex: 1,
        explanation: '"दिल्ली" एक स्थान का नाम है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 2 ---
  {
    id: 'hin-cls2-pron-1',
    language: 'hindi',
    section: 'pronunciation',
    classGrade: 2,
    title: 'स्वर एवं उनकी मात्राओं का शुद्ध उच्चारण',
    description: 'ह्रस्व और दीर्घ स्वरों (अ/आ, इ/ई, उ/ऊ) का समय-काल व मुख-मुद्रा अभ्यास।',
    difficulty: 'beginner',
    contentBody: `ह्रस्व स्वर (कम समय) बनाम दीर्घ स्वर (दोगुना समय):
१. अ बनाम आ:
   • कल (Kal) -> काल (Kaal)
   • जल (Jal) -> जाल (Jaal)
२. इ बनाम ई:
   • दिन (Din - Day) -> दीन (Deen - Poor)
   • मिल (Mil - Meet) -> मील (Meel - Mile)
३. उ बनाम ऊ:
   • कुल (Kul - Family/Total) -> कूल (Kool - Riverbank)`,
    translation: 'Short vowels (Hrasva) vs Long vowels (Deergha) in Hindi phonology.',
    audioText: 'ह्रस्व स्वर और दीर्घ स्वर। कल और काल। जल और जाल। दिन और दीन। मिल और मील। कुल और कूल।',
    phoneticGuide: 'Kal vs Kāl, Din vs Dīn, Kul vs Kūl',
    grammarNotes: 'मात्रा बदलते ही शब्द का अर्थ पूर्णतः बदल जाता है, अतः उच्चारण में समय का ध्यान रखें।',
    vocabulary: [
      { word: 'ह्रस्व', meaning: 'छोटा स्वर, जिसमें एक मात्रा का समय लगे (Short)', pronunciation: 'Hrasva' },
      { word: 'दीर्घ', meaning: 'बड़ा स्वर, जिसमें दो मात्रा का समय लगे (Long)', pronunciation: 'Dīrgha' },
      { word: 'कूल', meaning: 'नदी का किनारा (Riverbank)', pronunciation: 'Kool' },
    ],
    exercises: [
      {
        question: '"दिन" और "दीन" में किस मात्रा का अंतर है?',
        options: ['उ और ऊ का', 'छोटी इ (ह्रस्व) और बड़ी ई (दीर्घ) का', 'ए और ऐ का', 'कोई अंतर नहीं'],
        correctIndex: 1,
        explanation: '"दिन" में ह्रस्व इ तथा "दीन" में दीर्घ ई की मात्रा है।',
      },
      {
        question: '"जल" का अर्थ पानी है, तो "जाल" का अर्थ क्या है?',
        options: ['आग', 'फंदा या मछली पकड़ने का साधन (Net)', 'हवा', 'मिट्टी'],
        correctIndex: 1,
        explanation: '"जाल" का अर्थ फंदा या नेट होता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls2-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 2,
    title: 'सच्चा मित्र खरगोश और कछुआ',
    description: 'पारस्परिक सहयोग और अटूट मित्रता पर आधारित मनोरंजक कहानी।',
    difficulty: 'beginner',
    contentBody: `नदी किनारे गोलू कछुआ और चीकू खरगोश गहरे मित्र थे।
सभी जानवर कहते थे कि खरगोश बहुत तेज दौड़ता है और कछुआ बहुत धीमे चलता है।
एक दिन जंगल में भयानक आग लग गई। नदी पार जाना जरूरी था।
खरगोश तैरना नहीं जानता था। तब गोलू कछुए ने कहा, "मित्र! मेरी पीठ पर बैठ जाओ!"
गोलू तैरकर खरगोश को सुरक्षित नदी पार ले गया। दोनों ने एक-दूसरे को गले लगाया। सच्ची मित्रता में कोई छोटा या बड़ा नहीं होता!`,
    translation: 'The tortoise and rabbit tale of mutual assistance and true friendship.',
    audioText: 'नदी किनारे गोलू कछुआ और चीकू खरगोश गहरे मित्र थे। जंगल में आग लग गई। खरगोश तैरना नहीं जानता था। कछुए ने उसे अपनी पीठ पर बैठाया और नदी पार कराई।',
    phoneticGuide: 'Golū kachhuā aur Chīkū khargosh gahre mitra the.',
    grammarNotes: 'विशेषण: गहरे मित्र, भयानक आग, सुरक्षित नदी पार।',
    vocabulary: [
      { word: 'भयानक', meaning: 'डरावना (Frightening / Terrible)', pronunciation: 'Bhayanak' },
      { word: 'सुरक्षित', meaning: 'सकुशल, खतरे से दूर (Safe)', pronunciation: 'Surakshit' },
    ],
    exercises: [
      {
        question: 'नदी पार करने में खरगोश की सहायता किसने की?',
        options: ['हाथी ने', 'गोलू कछुए ने', 'मगरमच्छ ने', 'बंदर ने'],
        correctIndex: 1,
        explanation: 'गोलू कछुए ने खरगोश को अपनी पीठ पर बैठाकर नदी पार कराई।',
      },
      {
        question: 'कहानी से क्या शिक्षा मिलती है?',
        options: ['तेज दौड़ना चाहिए', 'सच्ची मित्रता में कोई छोटा या बड़ा नहीं होता', 'पानी से डरना चाहिए', 'जंगल में नहीं रहना चाहिए'],
        correctIndex: 1,
        explanation: 'सच्ची मित्रता में एक-दूसरे की क्षमता का सम्मान होता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 3 & 4 ---
  {
    id: 'hin-cls3-gram-1',
    language: 'hindi',
    section: 'grammar',
    classGrade: 3,
    title: 'लिंग परिवर्तन: पुल्लिंग एवं स्त्रीलिंग की पहचान',
    description: 'पुरुष जाति और स्त्री जाति का बोध कराने वाले शब्दों के नियम।',
    difficulty: 'beginner',
    contentBody: `शब्द के जिस रूप से उसके पुरुष जाति या स्त्री जाति होने का बोध हो, उसे लिंग कहते हैं।
१. पुल्लिंग (पुरुष जाति):
   • लड़का, राजा, मोर, शेर, नाना, भाई।
२. स्त्रीलिंग (स्त्री जाति):
   • लड़की, रानी, मोरनी, शेरनी, नानी, बहन।

नियम:
• आ-कारान्त पुल्लिंग शब्दों के अंत में 'ई' लगाकर:
  - बेटा -> बेटी, दादा -> दादी, घोड़ा -> घोड़ी।
• 'नी' जोड़कर:
  - मोर -> मोरनी, ऊंट -> ऊंटनी।`,
    translation: 'Gender in Hindi grammar: Masculine (Pulling) and Feminine (Streeling).',
    audioText: 'पुल्लिंग और स्त्रीलिंग। लड़का और लड़की। राजा और रानी। मोर और मोरनी। बेटा और बेटी।',
    phoneticGuide: 'Pulling (Masculine) aur Streeling (Feminine).',
    grammarNotes: 'निर्जीव वस्तुओं का लिंग निर्धारण वाक्य प्रयोग से होता है (जैसे: पानी बहता है - पुल्लिंग, चाय गिर गई - स्त्रीलिंग)।',
    vocabulary: [
      { word: 'लिंग', meaning: 'चिह्न या पहचान (Gender)', pronunciation: 'Ling' },
      { word: 'पुल्लिंग', meaning: 'पुरुष जाति का बोध कराने वाला शब्द (Masculine)', pronunciation: 'Pulling' },
    ],
    exercises: [
      {
        question: '"मोर" का स्त्रीलिंग रूप क्या होगा?',
        options: ['मोरी', 'मोरनी', 'मोरिन', 'मोरिया'],
        correctIndex: 1,
        explanation: "\"मोर\" में \'नी\' प्रत्यय लगाकर \"मोरनी\" बनता है।",
      },
      {
        question: "\"पुस्तक मेज पर रखी है\" — इस वाक्य में \'पुस्तक\' कौन सा लिंग है?",
        options: ['पुल्लिंग', 'स्त्रीलिंग', 'नपुंसकलिंग', 'उभयलिंग'],
        correctIndex: 1,
        explanation: "\'रखी है\' क्रिया से स्पष्ट है कि पुस्तक स्त्रीलिंग है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls4-pron-1',
    language: 'hindi',
    section: 'pronunciation',
    classGrade: 4,
    title: 'अल्पप्राण एवं महाप्राण व्यंजनों का भेद',
    description: 'कण्ठ व मुख से निकलने वाली प्राणवायु के आधार पर ध्वनियों का पृथक्करण।',
    difficulty: 'beginner',
    contentBody: `प्राण का अर्थ है 'हवा'। बोलते समय मुख से कितनी वायु निकलती है:
१. अल्पप्राण (कम हवा):
   • क, ग, च, ज, ट, ड, त, द, प, ब
   (प्रत्येक वर्ग का पहला, तीसरा और पांचवां वर्ण)
२. महाप्राण (अधिक हवा, 'ह' जैसी ध्वनि):
   • ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ
   (प्रत्येक वर्ग का दूसरा और चौथा वर्ण)

हाथ को मुख के आगे रखकर अभ्यास करें:
• 'क' बोलते समय हथेली पर वायु का कम दबाव पड़ेगा।
• 'ख' बोलते समय हथेली पर तीव्र वायु का झोंका लगेगा!`,
    translation: 'Aspirated (Mahaprana) vs Unaspirated (Alpaprana) consonants in Hindi phonetics.',
    audioText: 'अल्पप्राण और महाप्राण। क और ख। ग और घ। च और छ। ज और झ। त और थ। प और फ।',
    phoneticGuide: 'Alpaprana (k, g, ch, j, t, d, p, b) vs Mahaprana (kh, gh, chh, jh, th, dh, ph, bh)',
    grammarNotes: 'महाप्राण ध्वनियों में फेफड़ों से हकार जैसी वायु ध्वनि साथ निकलती है।',
    vocabulary: [
      { word: 'अल्पप्राण', meaning: 'जिन व्यंजनों के उच्चारण में कम वायु निकले (Unaspirated)', pronunciation: 'Alpaprana' },
      { word: 'महाप्राण', meaning: 'जिन व्यंजनों के उच्चारण में अधिक वायु निकले (Aspirated)', pronunciation: 'Mahaprana' },
    ],
    exercises: [
      {
        question: 'इनमें से कौन सा व्यंजन महाप्राण है?',
        options: ['क', 'ग', 'ख', 'च'],
        correctIndex: 2,
        explanation: "\'ख\' के उच्चारण में मुख से अधिक प्राणवायु निकलती है, अतः यह महाप्राण है।",
      },
      {
        question: 'वर्ग का पहला और तीसरा वर्ण क्या कहलाता है?',
        options: ['महाप्राण', 'अल्पप्राण', 'स्वर', 'विसर्ग'],
        correctIndex: 1,
        explanation: 'पहला, तीसरा और पांचवां वर्ण अल्पप्राण कहलाता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 5 ---
  {
    id: 'hin-cls5-list-1',
    language: 'hindi',
    section: 'listening',
    classGrade: 5,
    title: 'हमारा राष्ट्रीय ध्वज: तिरंगे की महिमा',
    description: 'केसरिया, श्वेत और हरे रंग तथा अशोक चक्र के प्रतीकात्मक अर्थ का श्रव्य आलेख।',
    difficulty: 'intermediate',
    contentBody: `वक्ता: "प्यारे विद्यार्थियों! जब हम अपने तिरंगे झंडे को खुले आकाश में लहराते देखते हैं, हमारा सीना गर्व से चौड़ा हो जाता है।
हमारे राष्ट्रीय ध्वज में तीन समान पट्टियां हैं:
सबसे ऊपर केसरिया रंग है, जो शौर्य, त्याग और बलिदान का प्रतीक है।
मध्य में श्वेत पट्टी है, जो सत्य, शांति और पवित्रता का संदेश देती है।
सबसे नीचे हरा रंग है, जो हमारी धरती की हरियाली, उर्वरता और समृद्धि को दर्शाता है।
श्वेत पट्टी के केंद्र में गहरे नीले रंग का २४ तीलियों वाला अशोक चक्र है।
यह चक्र निरंतर गतिशीलता और धर्म के मार्ग पर आगे बढ़ने की प्रेरणा देता है।"`,
    translation: 'The Indian National Flag (Tiranga) symbolism: saffron for courage, white for peace, green for prosperity, and the 24-spoke Ashoka Chakra.',
    audioText: 'हमारे राष्ट्रीय ध्वज में तीन समान पट्टियां हैं: सबसे ऊपर केसरिया रंग शौर्य और त्याग का प्रतीक है। मध्य में श्वेत पट्टी शांति का संदेश देती है। नीचे हरा रंग हरियाली और समृद्धि दर्शाता है। केंद्र में चौबीस तीलियों वाला अशोक चक्र है।',
    phoneticGuide: 'Hamārā rāshṭrīya dhvaj tirangā: Kesarīyā, Shvet, Harā aur Ashoka Chakra.',
    grammarNotes: "कर्मधारय समास: 'नीलकमल', 'अशोकचक्र'; भाववाचक संज्ञाएं: 'बलिदान', 'पवित्रता', 'समृद्धि'।",
    vocabulary: [
      { word: 'शौर्य', meaning: 'वीरता, पराक्रम (Valor / Bravery)', pronunciation: 'Shaurya' },
      { word: 'उर्वरता', meaning: 'उपजाऊपन (Fertility)', pronunciation: 'Urvarata' },
      { word: 'गतिशीलता', meaning: 'निरंतर आगे बढ़ते रहने का गुण (Dynamism / Mobility)', pronunciation: 'Gatisheelata' },
    ],
    exercises: [
      {
        question: 'तिरंगे में केसरिया रंग किस गुण का प्रतीक है?',
        options: ['शांति का', 'शौर्य और त्याग का', 'हरियाली का', 'व्यापार का'],
        correctIndex: 1,
        explanation: 'केसरिया रंग शौर्य, वीरता और आत्मबलिदान का प्रतीक है।',
      },
      {
        question: 'अशोक चक्र में कुल कितनी तीलियां होती हैं?',
        options: ['१२', '१८', '२४', '३६'],
        correctIndex: 2,
        explanation: 'अशोक चक्र में २४ तीलियां होती हैं जो दिन के २४ घंटों की गतिशीलता को दर्शाती हैं।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Middle: Class 6 (Demo Class) ---
  {
    id: 'hin-cls6-gram-1',
    language: 'hindi',
    section: 'grammar',
    classGrade: 6,
    title: 'कारक एवं उनके परसर्ग (विभक्ति चिह्न)',
    description: 'संज्ञा या सर्वनाम का क्रिया के साथ संबंध स्थापित करने वाले आठों कारकों का अध्ययन।',
    difficulty: 'intermediate',
    contentBody: `कारक के आठ भेद और उनके विभक्ति चिह्न:
१. कर्ता (काम करने वाला) -> ने ("राम ने फल खाया")
२. कर्म (जिस पर क्रिया का फल पड़े) -> को ("अध्यापक ने छात्र को समझाया")
३. करण (जिस साधन से काम हो) -> से / के द्वारा ("उसने कलम से लिखा")
४. संप्रदान (जिसके लिए काम किया जाए) -> को / के लिए ("मां ने बच्चे के लिए खीर बनाई")
५. अपादान (अलग होने का भाव) -> से ("पेड़ से पत्ता गिरा")
६. संबंध (अन्य पदों से रिश्ता) -> का, के, की, रा, रे, री ("यह मोहन का बस्ता है")
७. अधिकरण (क्रिया का आधार/स्थान) -> में, पर ("पक्षी डाल पर बैठा है")
८. संबोधन (पुकारना या सचेत करना) -> हे!, अरे!, ओ! ("हे प्रभु! रक्षा करो")`,
    translation: 'The eight Karakas (cases) in Hindi grammar and their postpositions (Parsarg).',
    audioText: 'कर्ता ने, कर्म को, करण से, संप्रदान के लिए, अपादान से अलग होना, संबंध का के की, अधिकरण में पर, संबोधन हे अरे।',
    phoneticGuide: 'Kartā ne, Karma ko, Karaṇa se, Sampradāna ke liye, Apādāna se, Sambandha kā-ke-kī, Adhikaraṇa mein-par, Sambodhana he-are.',
    grammarNotes: "करण कारक और अपादान कारक दोनों में 'से' का प्रयोग होता है, किंतु करण साधन बताता है जबकि अपादान अलगाव दर्शाता है।",
    vocabulary: [
      { word: 'परसर्ग', meaning: 'विभक्ति चिह्न जो शब्द के बाद प्रयुक्त होते हैं (Postposition)', pronunciation: 'Parsarg' },
      { word: 'अपादान', meaning: 'जिससे कोई वस्तु अलग हो (Ablative case)', pronunciation: 'Apadaan' },
    ],
    exercises: [
      {
        question: "\"पेड़ से पत्ता गिरा\" — इस वाक्य में \'से\' किस कारक का चिह्न है?",
        options: ['करण कारक', 'अपादान कारक', 'कर्म कारक', 'अधिकरण कारक'],
        correctIndex: 1,
        explanation: 'यहाँ पत्ता पेड़ से अलग हो रहा है, अतः यह अपादान कारक है।',
      },
      {
        question: 'करण कारक का सही उदाहरण कौन सा है?',
        options: ['रोहन छत से कूद पड़ा', 'अर्जुन ने बाण से लक्ष्य भेदा', 'यह सोहन का घर है', 'अरे भाई! इधर आओ'],
        correctIndex: 1,
        explanation: "\'बाण से\' यहाँ साधन का कार्य कर रहा है, अतः यह करण कारक है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls6-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 6,
    title: 'बाल रामकथा: विश्वामित्र का आगमन एवं ताड़का-वध',
    description: 'महर्षि विश्वामित्र के यज्ञ की रक्षा के लिए राजकुमार राम और लक्ष्मण का वन-गमन।',
    difficulty: 'intermediate',
    contentBody: `अयोध्या नरेश राजा दशरथ के दरबार में महर्षि विश्वामित्र पधारे।
उन्होंने कहा: "राजन! मेरे सिद्धाश्रम में राक्षस यज्ञ में विघ्न डालते हैं। मुझे यज्ञ की रक्षा हेतु ज्येष्ठ पुत्र राम को सौंप दो।"
दशरथ का मन विचलित हो उठा, किंतु कुलगुरु वशिष्ठ के समझाने पर उन्होंने राम और लक्ष्मण को महर्षि के साथ भेजा।
मार्ग में सरयू तट पार करते ही भयंकर ताड़का वन आया। ताड़का राक्षसी ने विकराल रूप धारण कर शिलाएं बरसाईं।
श्रीराम ने धनुष पर प्रत्यंचा चढ़ाकर एक ही बाण से ताड़का का वध कर दिया। मुनियों ने प्रसन्न होकर राम को दिव्य अस्त्र-शस्त्र प्रदान किए।`,
    translation: 'The arrival of Sage Vishvamitra in Ayodhya and Sri Rama subduing Tataka to protect the sacred fire sacrifice.',
    audioText: 'अयोध्या नरेश राजा दशरथ के दरबार में महर्षि विश्वामित्र पधारे। उन्होंने कहा: मेरे यज्ञ की रक्षा हेतु ज्येष्ठ पुत्र राम को सौंप दो। श्रीराम ने एक ही बाण से ताड़का का वध किया।',
    phoneticGuide: 'Maharshi Vishvamitra, Siddhāshrama, Tāḍakā-vadha, Sarayū taṭa.',
    grammarNotes: 'तत्सम शब्द: महर्षि, सिद्धाश्रम, विकराल, प्रत्यंचा, दिव्य।',
    vocabulary: [
      { word: 'विघ्न', meaning: 'बाधा, रुकावट (Obstacle / Disruption)', pronunciation: 'Vighna' },
      { word: 'प्रत्यंचा', meaning: 'धनुष की डोरी (Bowstring)', pronunciation: 'Pratyancha' },
    ],
    exercises: [
      {
        question: 'महर्षि विश्वामित्र अयोध्या क्यों पधारे थे?',
        options: ['तीर्थ यात्रा के लिए', 'यज्ञ रक्षा हेतु श्रीराम को मांगने', 'राज्याभिषेक के लिए', 'उपहार देने'],
        correctIndex: 1,
        explanation: 'महर्षि विश्वामित्र अपने सिद्धाश्रम में यज्ञ की रक्षा के लिए श्रीराम को लेने आए थे।',
      },
      {
        question: 'राजा दशरथ को श्रीराम को भेजने हेतु किसने समझाया?',
        options: ['रानी कैकेयी ने', 'कुलगुरु वशिष्ठ ने', 'सुमंत्र ने', 'भरत ने'],
        correctIndex: 1,
        explanation: 'कुलगुरु वशिष्ठ ने दशरथ को समझाकर उनका संशय दूर किया।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls6-pron-1',
    language: 'hindi',
    section: 'pronunciation',
    classGrade: 6,
    title: 'नुक्ता वाले अक्षरों (फ़, ज़) एवं संयुक्ताक्षरों का उच्चारण',
    description: 'उर्दू-फारसी मूल के आगत वर्णों (ज़, फ़) और सामान्य ज, फ के अंतर की साधना।',
    difficulty: 'intermediate',
    contentBody: `नुक्ता (नीचे लगने वाली बिंदी) वर्ण की ध्वनि बदल देती है:
१. 'ज' बनाम 'ज़':
   • जरा (Jara - बुढ़ापा) -> ज़रा (Zara - थोड़ा सा)
   • राज (Raaj - शासन) -> राज़ (Raaz - रहस्य/Secret)
   • जमाना (Jamana - जमा करना) -> ज़माना (Zamana - युग/Era)
२. 'फ' बनाम 'फ़':
   • फल (Phal - Fruit) -> फ़ल (Falak - आसमान)
   • फन (Phan - सांप का फन) -> फ़न (Fan - कला/Art)

बोलते समय ध्यान दें: 'ज' में तालु स्पर्श होता है, जबकि 'ज़' में दांतों के बीच से घर्षण ध्वनि (Buzzing) आती है!`,
    translation: 'Nukta phonetics: Ja vs Za, Pha vs Fa in modern standard Hindi.',
    audioText: 'ज और ज़। फ और फ़। जरा और ज़रा। राज और राज़। फल और फ़लक। फन और फ़न।',
    phoneticGuide: 'Jara vs Zarā, Rāj vs Rāz, Phan vs Fan',
    grammarNotes: 'नुक्ता आगत ध्वनियों (अरबी, फ़ारसी, अंग्रेज़ी) के सटीक उच्चारण के लिए प्रयुक्त होता है।',
    vocabulary: [
      { word: 'राज़', meaning: 'गुप्त बात, रहस्य (Secret)', pronunciation: 'Raaz' },
      { word: 'फ़न', meaning: 'हुनर, कला (Skill / Artistry)', pronunciation: 'Fan' },
    ],
    exercises: [
      {
        question: '"ज़रा" (नुक्ते वाला) का सही अर्थ क्या है?',
        options: ['बुढ़ापा', 'थोड़ा सा (A little bit)', 'आग', 'तेज'],
        correctIndex: 1,
        explanation: '"ज़रा" का अर्थ थोड़ा सा होता है, जबकि बिना नुक्ते वाले "जरा" का अर्थ बुढ़ापा है।',
      },
      {
        question: '"ज़" का उच्चारण करते समय ध्वनि कैसी निकलती है?',
        options: ['गले से सीटी जैसी', 'दांतों के बीच से घर्षण वाली (जैसे मधुमक्खी की भिनभिनाहट)', 'कंठ से भारी', 'नाक से बंद'],
        correctIndex: 1,
        explanation: '"ज़" दंत्य-वर्त्स्य संघर्षी (Fricative) ध्वनि है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls6-list-1',
    language: 'hindi',
    section: 'listening',
    classGrade: 6,
    title: 'महात्मा गांधी और सत्य के प्रयोग',
    description: 'गांधीजी के बाल्यकाल की घटना — राजा हरिश्चंद्र नाटक का उन पर प्रभाव।',
    difficulty: 'intermediate',
    contentBody: `वक्ता: "मोहनदास करमचंद गांधी जब बालक थे, तो उन्होंने 'सत्यवादी राजा हरिश्चंद्र' का नाटक देखा।
हरिश्चंद्र ने सत्य की रक्षा के लिए अपना राजपाट, परिवार और स्वयं को बेच दिया, किंतु कभी झूठ का सहारा नहीं लिया।
इस नाटक ने बालक मोहन के अंतःकरण को झकझोर दिया।
वे दिन-रात सोचते रहे: 'सभी लोग हरिश्चंद्र की तरह सत्यवादी क्यों नहीं बन सकते?'
यहीं से गांधीजी के जीवन में 'सत्य और अहिंसा' के महाव्रत की नींव पड़ी।
आगे चलकर इसी सत्य के बल पर उन्होंने बिना अस्त्र-शस्त्र उठाए ब्रिटिश साम्राज्य की नींव हिला दी।"`,
    translation: 'The inspiring story of young Mahatma Gandhi watching the play Raja Harishchandra and dedicating his life to Truth (Satya).',
    audioText: 'मोहनदास करमचंद गांधी जब बालक थे, तो उन्होंने सत्यवादी राजा हरिश्चंद्र का नाटक देखा। इस नाटक ने उनके अंतःकरण को झकझोर दिया। यहीं से सत्य और अहिंसा के महाव्रत की नींव पड़ी।',
    phoneticGuide: 'Mahatma Gandhi, Satyavadi Raja Harishchandra, Antahkarana, Ahimsa.',
    grammarNotes: "यौगिक शब्द: 'राजपाट', 'सत्यवादी'; उपसर्ग युक्त शब्द: 'अहिंसा' (अ + हिंसा)।",
    vocabulary: [
      { word: 'अंतःकरण', meaning: 'हृदय, भीतरी मन (Conscience / Soul)', pronunciation: 'Antahkaran' },
      { word: 'महाव्रत', meaning: 'कठिन और महान संकल्प (Great vow)', pronunciation: 'Mahavrat' },
    ],
    exercises: [
      {
        question: 'गांधीजी के बालमन पर किस नाटक का गहरा प्रभाव पड़ा?',
        options: ['शकुंतला', 'सत्यवादी राजा हरिश्चंद्र', 'मेघदूत', 'रामलीला'],
        correctIndex: 1,
        explanation: 'गांधीजी ने राजा हरिश्चंद्र का नाटक देखकर सत्य के मार्ग पर चलने का संकल्प लिया।',
      },
      {
        question: 'गांधीजी ने स्वतंत्रता संग्राम में किन दो सिद्धांतों को प्रमुख अस्त्र बनाया?',
        options: ['धन और बल', 'सत्य और अहिंसा', 'क्रोध और प्रतिशोध', 'हथियार और युद्ध'],
        correctIndex: 1,
        explanation: 'गांधीजी के आंदोलन के दो मूल स्तंभ सत्य और अहिंसा थे।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Middle: Class 7 & 8 ---
  {
    id: 'hin-cls7-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 7,
    title: 'कबीर के नीतिपरक दोहे एवं भाव-सौंदर्य',
    description: 'सदाचार, मधुर वाणी और गुरु-महिमा पर संत कबीरदास के अमर दोहों का अन्वय व भावार्थ।',
    difficulty: 'intermediate',
    contentBody: `दोहा १:
ऐसी बानी बोलिये, मन का आपा खोय।
औरन को सीतल करै, आपहु सीतल होय॥

दोहा २:
बड़ा भया तो क्या भया, जैसे पेड़ खजूर।
पंथी को छाया नहीं, फल लागैं अति दूर॥

दोहा ३:
गुरु गोविंद दोऊ खड़े, काके लागूं पांय।
बलिहारी गुरु आपने, गोविंद दियो बताय॥

भावार्थ:
१. हमें अहंकार त्यागकर ऐसी मधुर वाणी बोलनी चाहिए जिससे सुनने वालों को शांति मिले और हमारा स्वयं का हृदय भी शीतल हो।
२. केवल धन या कद में बड़ा होना व्यर्थ है यदि वह खजूर के पेड़ की तरह हो—जो न राहगीर को छाया देता है और फल भी बहुत ऊंचाई पर लगता है।
३. जब गुरु और ईश्वर दोनों सम्मुख हों, तो पहले गुरु के चरण स्पर्श करने चाहिए, क्योंकि गुरु ने ही ईश्वर तक पहुंचने का मार्ग बताया है।`,
    translation: 'Couplets of Sant Kabir on humility, sweet speech, and devotion to the spiritual teacher (Guru).',
    audioText: 'ऐसी बानी बोलिये, मन का आपा खोय। औरन को सीतल करै, आपहु सीतल होय। बड़ा भया तो क्या भया, जैसे पेड़ खजूर। पंथी को छाया नहीं, फल लागैं अति दूर। गुरु गोविंद दोऊ खड़े, काके लागूं पांय। बलिहारी गुरु आपने, गोविंद दियो बताय।',
    phoneticGuide: 'Aisī bānī boliye, man kā āpā khoy. Auran ko sītal karai, āphu sītal hoy.',
    grammarNotes: 'सधुक्कड़ी एवं अवधी-ब्रज मिश्रित प्राचीन हिंदी भाषा शैली।',
    vocabulary: [
      { word: 'आपा', meaning: 'अहंकार, घमंड (Ego)', pronunciation: 'Āpā' },
      { word: 'पंथी', meaning: 'राहगीर, मुसाफिर (Traveler / Wayfarer)', pronunciation: 'Panthī' },
      { word: 'सीतल', meaning: 'शीतल, शांत (Cool, serene)', pronunciation: 'Seetal' },
    ],
    exercises: [
      {
        question: 'कबीरदास जी के अनुसार खजूर के पेड़ की क्या कमजोरी है?',
        options: ['वह बहुत मीठा होता है', 'वह मुसाफिर को छाया नहीं देता और फल दूर लगते हैं', 'उस पर पत्तियां नहीं होतीं', 'वह जल नहीं पीता'],
        correctIndex: 1,
        explanation: 'खजूर का पेड़ ऊंचा होने पर भी न राहगीर को छाया देता है और फल भी बहुत दूर लगते हैं।',
      },
      {
        question: 'मीठी वाणी बोलने का क्या लाभ बताया गया है?',
        options: ['दूसरों को और स्वयं को शीतलता (शांति) मिलती है', 'धन की वर्षा होती है', 'आवाज ऊंची हो जाती है', 'लोग डर जाते हैं'],
        correctIndex: 0,
        explanation: 'दोहे के अनुसार: "औरन को सीतल करै, आपहु सीतल होय।"',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls8-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 8,
    title: 'महाभारत: अभिमन्यु और चक्रव्यूह का शौर्य',
    description: 'कुरुक्षेत्र युद्ध के तेरहवें दिन सोलह वर्षीय वीर अभिमन्यु के अदम्य पराक्रम का वीर रस पाठ।',
    difficulty: 'intermediate',
    contentBody: `कुरुक्षेत्र के तेरहवें दिन गुरु द्रोणाचार्य ने पांडव सेना को पराजित करने के लिए चक्रव्यूह की रचना की।
पांडव पक्ष में केवल अर्जुन और श्रीकृष्ण चक्रव्यूह भेदन जानते थे, किंतु त्रिगर्त सेना उन्हें दूर समरांगण में ले गई थी।
उस समय सोलह वर्ष के वीर बालक अभिमन्यु ने कहा: "तात युधिष्ठिर! मुझे चक्रव्यूह में प्रवेश करना ज्ञात है। मैं पांडवों की लाज रखूंगा!"
अभिमन्यु ने अकेले ही कौरवों की महारथी सेना को छिन्न-भिन्न कर दिया।
यद्यपि वे चक्रव्यूह से बाहर निकलने की कला नहीं जानते थे, किंतु सात महारथियों द्वारा अधर्मपूर्वक घेरे जाने पर भी वे अंत तक लड़ते हुए वीरगति को प्राप्त हुए।`,
    translation: 'The heroic stand of sixteen-year-old warrior Abhimanyu penetrating the Chakravyuha formation in the Mahabharata war.',
    audioText: 'कुरुक्षेत्र के तेरहवें दिन गुरु द्रोणाचार्य ने चक्रव्यूह की रचना की। सोलह वर्ष के वीर बालक अभिमन्यु ने चक्रव्यूह का भेदन किया और अकेले ही कौरवों की महारथी सेना को छिन्न-भिन्न कर दिया।',
    phoneticGuide: 'Chakravyūha, Abhimanyu, Droṇāchārya, Yudhishṭhira, Samrāṅgaṇa.',
    grammarNotes: "वीर रस प्रधान रचना; संयुक्त क्रियाओं का प्रयोग: 'छिन्न-भिन्न कर दिया', 'वीरगति को प्राप्त हुए'।",
    vocabulary: [
      { word: 'चक्रव्यूह', meaning: 'पहिए के आकार की जटिल सैन्य व्यूह रचना (Circular military formation)', pronunciation: 'Chakravyuha' },
      { word: 'महारथी', meaning: 'अकेले दस हजार योद्धाओं से लड़ने वाला श्रेष्ठ सेनापति (Supreme warrior)', pronunciation: 'Maharathi' },
    ],
    exercises: [
      {
        question: 'कुरुक्षेत्र के युद्ध में चक्रव्यूह की रचना किसने की थी?',
        options: ['भीष्म पितामह ने', 'गुरु द्रोणाचार्य ने', 'कर्ण ने', 'दुर्योधन ने'],
        correctIndex: 1,
        explanation: 'तेरहवें दिन कौरव सेनापति गुरु द्रोणाचार्य ने चक्रव्यूह रचा था।',
      },
      {
        question: 'अभिमन्यु के शौर्य से कौन सा रस प्रकट होता है?',
        options: ['हास्य रस', 'वीर रस', 'शांत रस', 'शृंगार रस'],
        correctIndex: 1,
        explanation: 'अभिमन्यु का अद्भुत पराक्रम वीर रस का श्रेष्ठ उदाहरण है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Secondary: Class 9 & 10 ---
  {
    id: 'hin-cls9-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 9,
    title: 'दो बैलों की कथा (मुंशी प्रेमचंद)',
    description: 'हीरा और मोती नामक दो बैलों की निष्ठा, मूक भाषा और स्वतंत्रता-प्रेम की कालजयी कहानी।',
    difficulty: 'advanced',
    contentBody: `जानवरों में गधा सबसे ज्यादा बुद्धिहीन समझा जाता है। जब हमें किसी आदमी को परले दर्जे का बेवकूफ कहना होता है, तो उसे गधा कहते हैं।
लेकिन उसके सीधेपन और सहनशीलता के कारण उसे यह पदवी मिली है। बैल उसके छोटे भाई हैं।
झूरी काछी के दो बैल थे—हीरा और मोती। दोनों पछाईं जाति के थे—देखने में सुंदर, काम में चौकस, डील में ऊंचे।
दोनों में बहुत भाईचारा था। साथ रहते-रहते दोनों में मूक भाषा में बातचीत होती थी।
एक-दूसरे के मन की बात कैसे समझ जाता था, हम नहीं कह सकते।
अवश्य ही उनमें कोई ऐसी गुप्त शक्ति थी जिससे जीवों में श्रेष्ठता का दावा करने वाला मनुष्य वंचित है!`,
    translation: 'Munshi Premchand’s masterpiece "Do Bailon Ki Katha" exploring the deep emotional bond and silent language between two oxen.',
    audioText: 'झूरी काछी के दो बैल थे—हीरा और मोती। दोनों में बहुत भाईचारा था। साथ रहते-रहते दोनों में मूक भाषा में बातचीत होती थी। उनमें कोई ऐसी गुप्त शक्ति थी जिससे मनुष्य वंचित है।',
    phoneticGuide: 'Do Bailon Ki Katha, Munshi Premchand, Mook Bhasha, Jhuri Kaachhi.',
    grammarNotes: "प्रेमचंद की ठेठ ग्रामीण मुहावरेदार हिंदी शैली: 'परले दर्जे का', 'मूक भाषा', 'डील-डौल'।",
    vocabulary: [
      { word: 'मूक भाषा', meaning: 'बिना बोले आंखों और भावों से बात करना (Silent language)', pronunciation: 'Mook Bhasha' },
      { word: 'वंचित', meaning: 'रहित, महरूम (Deprived of)', pronunciation: 'Vanchit' },
    ],
    exercises: [
      {
        question: 'झूरी के दोनों बैलों के क्या नाम थे?',
        options: ['सोना और रूपा', 'हीरा और मोती', 'गंगा और जमुना', 'धौला और कालू'],
        correctIndex: 1,
        explanation: 'बैलों के नाम हीरा और मोती थे।',
      },
      {
        question: 'दोनों बैलों के बीच संवाद किस माध्यम से होता था?',
        options: ['चिट्ठियों से', 'मूक भाषा (आंखों और भावों) में', 'इशारों से', 'सीटी बजाकर'],
        correctIndex: 1,
        explanation: 'कहानी में स्पष्ट लिखा है कि उनमें मूक भाषा में बातचीत होती थी।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls10-gram-1',
    language: 'hindi',
    section: 'grammar',
    classGrade: 10,
    title: 'स्वर संधि के पांच भेद: दीर्घ, गुण, वृद्धि, यण, अयादि',
    description: 'दो निकटवर्ती स्वरों के मेल से होने वाले विकार और संधिविच्छेद के शास्त्रीय नियम।',
    difficulty: 'advanced',
    contentBody: `दो स्वरों के परस्पर मेल से उत्पन्न विकार को 'स्वर संधि' कहते हैं:
१. दीर्घ संधि (समान स्वर मिलकर दीर्घ):
   • विद्या + आलय = विद्यालय (आ + आ = आ)
   • रवि + इन्द्र = रवीन्द्र (इ + इ = ई)
२. गुण संधि (अ/आ के बाद इ/ई, उ/ऊ, ऋ आने पर ए, ओ, अर् बनना):
   • नर + ईश = नरेश (अ + ई = ए)
   • महा + उत्सव = महोत्सव (आ + उ = ओ)
   • देव + ऋषि = देवर्षि (अ + ऋ = अर्)
३. वृद्धि संधि (अ/आ के बाद ए/ऐ, ओ/औ आने पर ऐ, औ बनना):
   • एक + एक = एकैक (अ + ए = ऐ)
   • जल + ओघ = जलौघ (अ + ओ = औ)
४. यण संधि (इ/ई, उ/ऊ, ऋ के बाद असमान स्वर आने पर य्, व्, र् बनना):
   • यदि + अपि = यद्यपि (इ + अ = य)
   • सु + आगत = स्वागत (उ + आ = वा)
५. अयादि संधि (ए, ऐ, ओ, औ के बाद कोई स्वर आने पर अय्, आय्, अव्, आव् बनना):
   • ने + अन = नयन, पौ + अक = पावक।`,
    translation: 'The five types of Svara Sandhi in Hindi grammar with phonological morphing rules.',
    audioText: 'दीर्घ संधि: विद्या जमा आलय बराबर विद्यालय। गुण संधि: नर जमा ईश बराबर नरेश। वृद्धि संधि: एक जमा एक बराबर एकैक। यण संधि: सु जमा आगत बराबर स्वागत। अयादि संधि: पौ जमा अक बराबर पावक।',
    phoneticGuide: 'Svara Sandhi: Deergha, Guṇa, Vriddhi, Yaṇa, Ayādi.',
    grammarNotes: 'संस्कृत व्याकरण के माहेश्वर सूत्रों पर आधारित संधि नियम।',
    vocabulary: [
      { word: 'संधि', meaning: 'दो ध्वनियों का पारस्परिक मेल (Euphonic combination)', pronunciation: 'Sandhi' },
      { word: 'विकार', meaning: 'ध्वनि में उत्पन्न परिवर्तन (Phonological change)', pronunciation: 'Vikaar' },
    ],
    exercises: [
      {
        question: '"सु + आगत" का सही संधि पद क्या होगा?',
        options: ['सुवागत', 'स्वागत', 'सुस्वागत', 'सागत'],
        correctIndex: 1,
        explanation: "यण संधि नियमानुसार उ + आ = वा, अतः \'स्वागत\' बनता है।",
      },
      {
        question: '"एकैक" (एक + एक) में कौन सी स्वर संधि है?',
        options: ['दीर्घ संधि', 'गुण संधि', 'वृद्धि संधि', 'यण संधि'],
        correctIndex: 2,
        explanation: "अ + ए मिलकर \'ऐ\' बनता है, जो वृद्धि संधि का नियम है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Senior Secondary: Class 11 & 12 ---
  {
    id: 'hin-cls11-read-1',
    language: 'hindi',
    section: 'reading',
    classGrade: 11,
    title: "आचार्य रामचंद्र शुक्ल: 'उत्साह' निबंध का वैचारिक मर्म",
    description: 'उत्साह, साहस और आनंद के मनोवैज्ञानिक समन्वय पर शुक्ल जी की अमर गद्य शैली।',
    difficulty: 'advanced',
    contentBody: `दुख के वर्ग में जो स्थान भय का है, सुख के वर्ग में वही स्थान उत्साह का है।
भय में हम विपत्ति से भागते हैं, जबकि उत्साह में हम कर्म के आनंद में लीन होकर कठिनाइयों का सामना करते हैं।
उत्साह केवल युद्ध क्षेत्र में लड़ने का नाम नहीं है।
बुद्धि-वैभव के क्षेत्र में नई खोज करने वाला वैज्ञानिक, अकाल पीड़ितों की सेवा करने वाला समाजसेवक और कला-सृजन में लीन चित्रकार—ये सभी सच्चे उत्साही हैं।
उत्साह का मूल आधार कर्म-सौंदर्य की अनुभूति है। जब मनुष्य फल की चिंता छोड़कर कार्य करने के प्रवाह में आनंद पाने लगता है, तभी सच्चा उत्साह प्रस्फुटित होता है।`,
    translation: 'Acharya Ramchandra Shukla’s psychological essay on "Utsaha" (Enthusiasm, Courage, and Joy in Action).',
    audioText: 'दुख के वर्ग में जो स्थान भय का है, सुख के वर्ग में वही स्थान उत्साह का है। उत्साह केवल युद्ध का नाम नहीं है। जब मनुष्य फल की चिंता छोड़कर कार्य के प्रवाह में आनंद पाता है, तभी सच्चा उत्साह प्रस्फुटित होता है।',
    phoneticGuide: 'Āchārya Rāmchandra Shukla, Utsāha, Karma-saundarya, Prasphuṭita.',
    grammarNotes: 'शुक्ल जी की समास-प्रधान, गंभीर, विचारोत्तेजक और विश्लेषणात्मक निबंध शैली।',
    vocabulary: [
      { word: 'वैभव', meaning: 'समृद्धि, ऐश्वर्य या मानसिक सामर्थ्य (Grandeur / Splendor)', pronunciation: 'Vaibhav' },
      { word: 'प्रस्फुटित', meaning: 'खिलना, विकसित होना (Burst forth / Blossom)', pronunciation: 'Prasphutit' },
    ],
    exercises: [
      {
        question: 'शुक्ल जी के अनुसार सुख के वर्ग में किस मनोविकार का वही स्थान है जो दुख में भय का है?',
        options: ['क्रोध', 'उत्साह', 'लोभ', 'आलस्य'],
        correctIndex: 1,
        explanation: 'निबंध के प्रारंभ में ही कहा गया है: "सुख के वर्ग में वही स्थान उत्साह का है।"',
      },
      {
        question: 'सच्चा उत्साह कब प्रस्फुटित होता है?',
        options: ['जब बहुत धन मिले', 'जब केवल फल की चिंता हो', 'जब मनुष्य कर्म-सौंदर्य के प्रवाह में आनंद पाने लगे', 'जब कोई मुकाबला न हो'],
        correctIndex: 2,
        explanation: 'कर्म के सौंदर्य और कार्य करने के आनंद से सच्चा उत्साह उत्पन्न होता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'hin-cls12-gram-1',
    language: 'hindi',
    section: 'grammar',
    classGrade: 12,
    title: 'रस सिद्धांत: स्थायी भाव, विभाव, अनुभाव व संचारी भाव',
    description: 'भरतमुनि के रस-सूत्र "विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः" का समग्र काव्यशास्त्रीय विश्लेषण।',
    difficulty: 'advanced',
    contentBody: `काव्य को पढ़ने, सुनने या नाटक देखने से जिस अलौकिक आनंद की अनुभूति होती है, उसे 'रस' कहते हैं।
आचार्य भरतमुनि का रस-सूत्र:
"विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः"

रस के चार प्रमुख अंग:
१. स्थायी भाव: जो भाव सहृदय के हृदय में सुप्त अवस्था में रहते हैं (रति, हास, शोक, क्रोध, उत्साह, भय, जुगुप्सा, विस्मय, निर्वेद)।
२. विभाव: जो कारण भावों को जाग्रत करते हैं (आलंबन एवं उद्दीपन)।
३. अनुभाव: भाव जाग्रत होने पर आश्रय की बाह्य चेष्टाएं (स्वेद, रोमांच, अश्रु, कंप)।
४. संचारी भाव: जो भाव पानी के बुलबुलों की तरह बनते-मिटते रहते हैं (इनकी संख्या ३३ मानी गई है—हर्ष, चिंता, गर्व, ग्लानि आदि)।

प्रमुख ९ रस: शृंगार, हास्य, करुण, रौद्र, वीर, भयानक, बीभत्स, अद्भुत, शांत।`,
    translation: 'The Indian Aesthetic Theory of Rasa: Sthayi Bhava, Vibhava, Anubhava, and Sanchari Bhava.',
    audioText: 'काव्य को पढ़ने या सुनने से जिस आनंद की अनुभूति होती है उसे रस कहते हैं। विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः। नौ प्रमुख रस हैं: शृंगार, हास्य, करुण, रौद्र, वीर, भयानक, बीभत्स, अद्भुत, शांत।',
    phoneticGuide: 'Rasa Siddhānta: Sthāyī Bhāva, Vibhāva, Anubhāva, Sanchārī Bhāva.',
    grammarNotes: 'भारतीय काव्यशास्त्र (Indian Poetics) का मेरुदंड — रस निष्पत्ति।',
    vocabulary: [
      { word: 'अलौकिक', meaning: 'सांसारिक सीमाओं से परे, दिव्य (Transcendental)', pronunciation: 'Alaukik' },
      { word: 'अनुभाव', meaning: 'आंतरिक भावों को प्रकट करने वाली शारीरिक चेष्टाएं (Physical expressions of emotion)', pronunciation: 'Anubhava' },
    ],
    exercises: [
      {
        question: 'आचार्य भरतमुनि के अनुसार संचारी भावों की कुल संख्या कितनी मानी गई है?',
        options: ['९', '११', '३३', '६४'],
        correctIndex: 2,
        explanation: 'काव्यशास्त्र में संचारी (व्यभिचारी) भावों की संख्या ३३ मानी गई है।',
      },
      {
        question: '"उत्साह" किस रस का स्थायी भाव है?',
        options: ['रौद्र रस', 'वीर रस', 'भयानक रस', 'करुण रस'],
        correctIndex: 1,
        explanation: "वीर रस का स्थायी भाव \'उत्साह\' होता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // ==========================================
  // SANSKRIT CURRICULUM (Classes 1 - 12)
  // ==========================================

  // --- Primary: Class 1 ---
  {
    id: 'san-cls1-read-1',
    language: 'sanskrit',
    section: 'reading',
    classGrade: 1,
    title: 'सरल-संस्कृत-वाक्यानि (Early Sanskrit Sentences)',
    description: 'प्रथम कक्षायाः छात्रेभ्यः सरल-संस्कृत-शब्दाः चित्राणि च।',
    difficulty: 'beginner',
    contentBody: `एषः बालकः। बालकः पठति।
एषा बालिका। बालिका हसति।
एतत् फलम्। फलम् मधुरम् अस्ति।
सः मयूरः। मयूरः नृत्यति।
सा चटका। चटका कूजति।`,
    translation: 'This is a boy. The boy reads. This is a girl. The girl laughs. This is a fruit. The fruit is sweet. That is a peacock. The peacock dances.',
    audioText: 'एषः बालकः। बालकः पठति। एषा बालिका। बालिका हसति। एतत् फलम्। फलम् मधुरम् अस्ति। सः मयूरः। मयूरः नृत्यति।',
    phoneticGuide: 'Eṣaḥ bālakaḥ. Bālakaḥ paṭhati. Eṣā bālikā. Bālikā hasati.',
    grammarNotes: "पुल्लिंगे \'एषः/सः\', स्त्रीलिंगे \'एषा/सा\', नपुंसकलिंगे \'एतत्/तत्\' सर्वनाम-प्रयोगः।",
    vocabulary: [
      { word: 'मयूरः', meaning: 'मोर (Peacock)', pronunciation: 'Mayūraḥ' },
      { word: 'चटका', meaning: 'गौरैया (Sparrow)', pronunciation: 'Chaṭakā' },
      { word: 'मधुरम्', meaning: 'मीठा (Sweet)', pronunciation: 'Madhuram' },
    ],
    exercises: [
      {
        question: "\'मयूरः किं करोति?\' (मोर क्या करता है?)",
        options: ['पठति', 'नृत्यति', 'धावति', 'खादति'],
        correctIndex: 1,
        explanation: "पाठे स्पष्टमस्ति — \'मयूरः नृत्यति\' (मोर नाचता है)।",
      },
      {
        question: "\'बालिका\' इत्यनेन सह कः सर्वनामः प्रयुज्यते?",
        options: ['एषः', 'एषा', 'एतत्', 'सः'],
        correctIndex: 1,
        explanation: "स्त्रीलिंगे \'एषा\' (यह) सर्वनाम प्रयुक्त होता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls1-pron-1',
    language: 'sanskrit',
    section: 'pronunciation',
    classGrade: 1,
    title: 'अक्षराभ्यासः — अकारादि-स्वराणां शुद्धोच्चारणम्',
    description: 'संस्कृतभाषायाः स्वराणां विशुद्धम् उच्चारणम्।',
    difficulty: 'beginner',
    contentBody: `संस्कृत-स्वराः (Sanskrit Vowels):
अ (अश्वः), आ (आम्रम्)
इ (इक्षुः), ई (ईशः)
उ (उष्ट्रः), ऊ (ऊर्णा)
ऋ (ऋषिः), ॠ
ए (एणः), ऐ (ऐरावतः)
ओ (ओष्ठः), औ (औषधम्)
अं (अंकः), अः (रामः)
नाभिदेशात् कंठं प्रति वायुम् आकृष्य विशुद्धं वदतु।`,
    translation: 'Pronunciation of Sanskrit vowels from A to Aha with classical vocabulary.',
    audioText: 'अश्वः, आम्रम्, इक्षुः, ईशः, उष्ट्रः, ऊर्णा, ऋषिः, एणः, ऐरावतः, ओष्ठः, औषधम्।',
    phoneticGuide: 'Aśvaḥ, Āmram, Ikṣuḥ, Īśaḥ, Uṣṭraḥ, Ūrṇā, Ṛṣiḥ, Eṇaḥ, Airāvataḥ.',
    grammarNotes: 'पाणिनीय शिक्षा अनुसारं स्वराणां शुद्धोच्चारणम् अनिवार्यम्।',
    vocabulary: [
      { word: 'उष्ट्रः', meaning: 'ऊंट (Camel)', pronunciation: 'Uṣṭraḥ' },
      { word: 'ऐरावतः', meaning: 'इंद्र का हाथी (Divine white elephant)', pronunciation: 'Airāvataḥ' },
    ],
    exercises: [
      {
        question: "\'आम्रम्\' शब्दस्य कः अर्थः?",
        options: ['सेब', 'आम (Mango)', 'केला', 'अनार'],
        correctIndex: 1,
        explanation: "\'आम्रम्\' का अर्थ आम होता है।",
      },
      {
        question: "\'ऋषिः\' शब्दस्य प्रथमः वर्णः कः?",
        options: ['अ', 'इ', 'ऋ', 'उ'],
        correctIndex: 2,
        explanation: "\'ऋषिः\' का पहला अक्षर \'ऋ\' स्वर है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls1-list-1',
    language: 'sanskrit',
    section: 'listening',
    classGrade: 1,
    title: 'संस्कृत-बालगीतम् — हस्तद्वयं मे स्वच्छम् अस्ति',
    description: 'बालकेभ्यः सरलं रोचकं च शरीर-अंग-परिचायकं संस्कृत-गीतम्।',
    difficulty: 'beginner',
    contentBody: `हस्तद्वयं मे स्वच्छम् अस्ति,
पादद्वयं मे धावति।
नेत्रद्वयं मे पश्यति सुंदरम्,
कर्णद्वयं मे शृणोति मधुरम्।
नासिकया अहं जिघ्रामि गंधम्,
मुखेन वदामि संस्कृत-वचनम्!`,
    translation: 'A delightful Sanskrit children’s rhyme introducing body parts: hands, feet, eyes, ears, nose, and mouth.',
    audioText: 'हस्तद्वयं मे स्वच्छम् अस्ति, पादद्वयं मे धावति। नेत्रद्वयं मे पश्यति सुंदरम्, कर्णद्वयं मे शृणोति मधुरम्। नासिकया अहं जिघ्रामि गंधम्, मुखेन वदामि संस्कृत-वचनम्!',
    phoneticGuide: 'Hastadvayaṁ me svaccham asti, pādadvayaṁ me dhāvati. Netradvayaṁ me paśyati sundaram.',
    grammarNotes: 'द्विवचन-प्रयोगः: हस्तद्वयम्, पादद्वयम्, नेत्रद्वयम्, कर्णद्वयम्।',
    vocabulary: [
      { word: 'नेत्रद्वयम्', meaning: 'दोनों आंखें (Two eyes)', pronunciation: 'Netradvayam' },
      { word: 'जिघ्रामि', meaning: 'मैं सूंघता हूँ (I smell)', pronunciation: 'Jighraami' },
    ],
    exercises: [
      {
        question: "गीते \'कर्णद्वयं\' किं करोति?",
        options: ['पश्यति', 'धावति', 'शृणोति मधुरम् (सुनता है)', 'खादति'],
        correctIndex: 2,
        explanation: 'कर्णद्वयं मधुरं शृणोति (दोनों कान मधुर सुनते हैं)।',
      },
      {
        question: "\'हस्तद्वयम्\' इत्यस्य कः अर्थः?",
        options: ['दो पैर', 'दो हाथ (Two hands)', 'दो कान', 'दो आंखें'],
        correctIndex: 1,
        explanation: "\'हस्तद्वयम्\' का अर्थ दो हाथ होता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls1-gram-1',
    language: 'sanskrit',
    section: 'grammar',
    classGrade: 1,
    title: "प्रथम-पुरुष-एकवचनम्: 'बालकः पठति'",
    description: 'संस्कृत-क्रियापदस्य कर्तृपदस्य च प्रारंभिक-अन्वयः।',
    difficulty: 'beginner',
    contentBody: `संस्कृतभाषायां कर्ता क्रिया च:
एकवचने लट्-लकारे (वर्तमानकाले):
• बालकः पठति (बालक पढ़ता है)
• अश्वः धावति (घोड़ा दौड़ता है)
• गजः चलति (हाथी चलता है)
• बालिका लिखति (बालिका लिखती है)
• वानरः कूर्दति (बंदर कूदता है)
यदा कर्ता एकः अस्ति, तदा क्रियायाः अन्ते 'ति' प्रत्ययः भवति।`,
    translation: 'Third person singular present tense in Sanskrit: Subject + Verb with "-ti" suffix.',
    audioText: 'बालकः पठति। अश्वः धावति। गजः चलति। बालिका लिखति। वानरः कूर्दति।',
    phoneticGuide: 'Bālakaḥ paṭhati. Aśvaḥ dhāvati. Gajaḥ chalati. Bālikā likhati.',
    grammarNotes: "प्रथम-पुरुष-एकवचनस्य तिङ्-प्रत्ययः 'तिप्' (ति) अस्ति।",
    vocabulary: [
      { word: 'गजः', meaning: 'हाथी (Elephant)', pronunciation: 'Gajaḥ' },
      { word: 'कूर्दति', meaning: 'कूदता है (Jumps)', pronunciation: 'Kūrdati' },
    ],
    exercises: [
      {
        question: "\'अश्वः\' इत्यनेन सह का क्रिया शुद्धा?",
        options: ['पठति', 'धावति (दौड़ता है)', 'नृत्यति', 'हसति'],
        correctIndex: 1,
        explanation: "घोड़ा दौड़ता है, अतः \'अश्वः धावति\' शुद्धम् अस्ति।",
      },
      {
        question: "\'बालकः\' एकवचने अस्ति चेत् क्रियायाः अन्ते कः प्रत्ययः आगच्छति?",
        options: ['-ति', '-तः', '-न्ति', '-सि'],
        correctIndex: 0,
        explanation: "एकवचन में क्रिया के अंत में \'-ति\' आता है (पठति)।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 2 ---
  {
    id: 'san-cls2-pron-1',
    language: 'sanskrit',
    section: 'pronunciation',
    classGrade: 2,
    title: 'स्वर-व्यञ्जन-वर्णोच्चारणम्',
    description: 'ह्रस्व-दीर्घ-स्वराणां तथा स्पर्श-व्यञ्जनानां विशुद्धम् उच्चारणम्।',
    difficulty: 'beginner',
    contentBody: `संस्कृतभाषायां वर्णाः:
स्वराः:
• ह्रस्वस्वराः: अ, इ, उ, ऋ, ऌ
• दीर्घस्वराः: आ, ई, ऊ, ॠ, ए, ऐ, ओ, औ

अभ्यास-पदानि:
• अश्वः (घोड़ा)
• आम्रम् (आम)
• इक्षुः (गन्ना)
• ईशः (ईश्वर)
• उपवनम् (बगीचा)
• ऊर्जा (शक्ति)`,
    translation: 'Pronunciation of Sanskrit Vowels (Svaras) and Basic Consonants.',
    audioText: 'अश्वः, आम्रम्, इक्षुः, ईशः, उपवनम्, ऊर्जा। ह्रस्वस्वराः दीर्घस्वराश्च।',
    phoneticGuide: 'Aśvaḥ, Āmram, Ikṣuḥ, Īśaḥ, Upavanam, Ūrjā',
    grammarNotes: 'संस्कृत में ऌ वर्ण केवल स्वर रूप में प्रयुक्त होता है (यथा लृट् लकारः)।',
    vocabulary: [
      { word: 'अश्वः', meaning: 'घोड़ा (Horse)', pronunciation: 'Aśvaḥ' },
      { word: 'आम्रम्', meaning: 'आम (Mango)', pronunciation: 'Āmram' },
    ],
    exercises: [
      {
        question: "\'इक्षुः\' शब्दस्य कः अर्थः?",
        options: ['आम', 'गन्ना', 'केला', 'सेब'],
        correctIndex: 1,
        explanation: "\'इक्षुः\' का अर्थ गन्ना (Sugarcane) होता है।",
      },
      {
        question: "संस्कृत वर्णमालायां \'ऋ\' स्वरः अस्ति अथवा व्यञ्जनम्?",
        options: ['स्वरः (Vowel)', 'व्यञ्जनम् (Consonant)', 'अनुस्वारः', 'विसर्गः'],
        correctIndex: 0,
        explanation: "\'ऋ\' मूर्धन्य स्वर वर्ण अस्ति।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 3 & 4 ---
  {
    id: 'san-cls3-gram-1',
    language: 'sanskrit',
    section: 'grammar',
    classGrade: 3,
    title: 'संस्कृत-लिंग-त्रयम् एवं वचन-त्रयम्',
    description: 'पुल्लिंग, स्त्रीलिंग, नपुंसकलिंग तथा एकवचन, द्विवचन, बहुवचन की मूलभूत संकल्पना।',
    difficulty: 'beginner',
    contentBody: `संस्कृत भाषा की विशेषता: यहाँ तीन लिंग और तीन वचन होते हैं!
१. लिंग-त्रयम्:
   • पुल्लिंगम्: बालकः, वृक्षः, गजः
   • स्त्रीलिंगम्: बालिका, लता, नदी
   • नपुंसकलिंगम्: फलम्, पुस्तकम्, पुष्पम्

२. वचन-त्रयम्:
   • एकवचनम् (एक): बालकः पठति (एक बालक)
   • द्विवचनम् (दो): बालकौ पठतः (दो बालक)
   • बहुवचनम् (तीन या अधिक): बालकाः पठन्ति (अनेक बालक)`,
    translation: 'The three genders (Lingas) and three grammatical numbers (Vachanas) in Sanskrit.',
    audioText: 'पुल्लिंगम्, स्त्रीलिंगम्, नपुंसकलिंगम्। एकवचनम्, द्विवचनम्, बहुवचनम्। बालकः, बालकौ, बालकाः। बालिका, बालिके, बालिकाः। फलम्, फले, फलानि।',
    phoneticGuide: 'Bālakaḥ, Bālakau, Bālakāḥ; Bālikā, Bālike, Bālikāḥ; Phalam, Phale, Phalāni.',
    grammarNotes: 'द्विवचन संस्कृतभाषायाः अनुपमं वैशिष्ट्यम् अस्ति।',
    vocabulary: [
      { word: 'बालकौ', meaning: 'दो बालक (Two boys)', pronunciation: 'Bālakau' },
      { word: 'फलानि', meaning: 'अनेक फल (Many fruits)', pronunciation: 'Phalāni' },
    ],
    exercises: [
      {
        question: "\'बालकौ पठतः\' इत्यत्र कति बालकाः सन्ति?",
        options: ['एकः', 'द्वौ (दो बालक)', 'त्रयः', 'दश'],
        correctIndex: 1,
        explanation: "द्विवचन में \'बालकौ\' का अर्थ दो बालक होता है।",
      },
      {
        question: 'संस्कृतभाषायां कति लिंगानि भवन्ति?',
        options: ['द्वे (२)', 'त्रीणि (३)', 'चत्वारि (४)', 'पंच (५)'],
        correctIndex: 1,
        explanation: 'संस्कृत में तीन लिंग होते हैं: पुल्लिंग, स्त्रीलिंग और नपुंसकलिंग।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls4-pron-1',
    language: 'sanskrit',
    section: 'pronunciation',
    classGrade: 4,
    title: 'विसर्ग (:) एवं अनुस्वार (ं) का शुद्ध उच्चारण',
    description: 'अयोगवाह वर्णों का जिह्वा व नासिका से सटीक नाद-साधना।',
    difficulty: 'beginner',
    contentBody: `अयोगवाह वर्ण:
१. विसर्ग (:):
   विसर्ग का उच्चारण कंठ से हल्की 'ह' ध्वनि की तरह होता है।
   • रामः -> 'रामह' (Rāma-ha)
   • मुनिः -> 'मुनिहि' (Muni-hi)
   • गुरुः -> 'गुरुहु' (Guru-hu)
   नियम: विसर्ग से पूर्व जो स्वर होता है, विसर्ग में उसी स्वर की हल्की ध्वनि सुनाई देती है!

२. अनुस्वार (ं):
   नासिका से निकलने वाला शुद्ध नाद:
   • फलम् -> फलङ्/फलन् (नासिका-ध्वनि)
   • विद्यालये -> विद्यालये (नासिक्य)`,
    translation: 'Phonetics of Visarga (:) and Anusvara (m) in classical Sanskrit recitation.',
    audioText: 'रामः, मुनिः, गुरुः, देवः, कविः, भानुः। विसर्गस्य उच्चारणम्। अनुस्वारस्य उच्चारणम्।',
    phoneticGuide: 'Rāmaḥ, Muniḥ, Guruḥ. Anusvāraḥ aur Visargaḥ.',
    grammarNotes: 'पाणिनीय शिक्षा: "अयोगवाहा विज्ञेया आश्रयस्थानभागिनः" (अयोगवाह आश्रय वर्ण के स्थान का अनुसरण करते हैं)।',
    vocabulary: [
      { word: 'अयोगवाह', meaning: 'जो वर्णमाला में स्वतंत्र नहीं गिने जाते किंतु प्रयुक्त होते हैं (Dependent sounds)', pronunciation: 'Ayogavaha' },
      { word: 'नासिका', meaning: 'नाक (Nose)', pronunciation: 'Naasika' },
    ],
    exercises: [
      {
        question: "\'मुनिः\' शब्दस्य विसर्गे कस्य स्वरस्य ध्वनिः आगच्छति?",
        options: ['अ की', 'इ की (हल्की \'हि\' ध्वनि)', 'उ की', 'ओ की'],
        correctIndex: 1,
        explanation: "मुनि में पूर्व स्वर \'इ\' है, अतः विसर्ग का उच्चारण \'मुनिहि\' जैसा होता है।",
      },
      {
        question: 'विसर्ग का मूल उच्चारण स्थान क्या है?',
        options: ['दंत्य', 'कंठ्य (Throat)', 'ओष्ठ्य', 'मूर्धन्य'],
        correctIndex: 1,
        explanation: '"अकुहविसर्जनीयानां कण्ठः" — विसर्ग का उच्चारण स्थान कंठ है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Primary: Class 5 ---
  {
    id: 'san-cls5-read-1',
    language: 'sanskrit',
    section: 'reading',
    classGrade: 5,
    title: 'हितोपदेशः — काक-कूर्म-मृग-मूषक-कथा (मित्रलाभः)',
    description: 'पञ्चतन्त्र-हितोपदेशयोः अमर-नीतिकथा: लघु-प्राणिनः अपि सङ्घटनेन महत् कार्यं साधयन्ति।',
    difficulty: 'intermediate',
    contentBody: `अस्ति दक्षिणदेशे महद् अरण्यम्।
तत्र चत्वारः मित्राणि निवसन्ति स्म — वायसः लघुपतनकः, कूर्मः मन्थरकः, मूषकः हिरण्यकः, मृगः चित्राङ्गश्च।
एकदा मृगः व्याधस्य पाशे बद्धः अभवत्।
तदा वायसः वृक्षात् अवलोक्य मूषकम् आनयत्। मूषकः स्वदन्तैः पाशं चकर्त।
मृगः मुक्तः अभवत्। चत्वारः अपि मित्राणि परस्परं सहाय्येन सुखेन अतिष्ठन्।
नीतिः:
सन्तप्तानां विपन्नानां मित्राण्येव परा गतिः।
सङ्गठनेन संसिद्धिः लघूनामपि वस्तुनाम्॥`,
    translation: 'The classic Hitopadesha fable of four loyal friends: the crow, the tortoise, the mouse, and the deer, who rescue each other through unity.',
    audioText: 'अस्ति दक्षिणदेशे महद् अरण्यम्। तत्र चत्वारः मित्राणि निवसन्ति स्म — वायसः लघुपतनकः, कूर्मः मन्थरकः, मूषकः हिरण्यकः, मृगः चित्राङ्गश्च। सङ्गठनेन संसिद्धिः लघूनामपि वस्तुनाम्।',
    phoneticGuide: 'Hitopadeśaḥ: Vāyasaḥ Laghupatanakaḥ, Kūrmaḥ Mantharakaḥ, Mūṣakaḥ Hiraṇyakaḥ, Mṛgaḥ Chitrāṅgaḥ.',
    grammarNotes: "अव्यय-प्रयोगः: 'तत्र', 'एकदा', 'अपि', 'च', 'स्म' (भूतकालिक-अर्थे)।",
    vocabulary: [
      { word: 'वायसः', meaning: 'कौआ (Crow)', pronunciation: 'Vāyasaḥ' },
      { word: 'मूषकः', meaning: 'चूहा (Mouse)', pronunciation: 'Mūṣakaḥ' },
      { word: 'सङ्घटनम्', meaning: 'एकता, संगठन (Unity / Cohesion)', pronunciation: 'Saṅghaṭanam' },
    ],
    exercises: [
      {
        question: 'मृगस्य पाशं केन कर्तितम्? (हिरण के जाल को किसने काटा?)',
        options: ['कूर्मेन', 'मूषकेन (चूहे ने)', 'वायसेन', 'व्याधेन'],
        correctIndex: 1,
        explanation: 'मूषक ने अपने पैने दांतों से जाल काट दिया।',
      },
      {
        question: "\'वायसः\' शब्दस्य कः अर्थः?",
        options: ['हिरण', 'कौआ (Crow)', 'कछुआ', 'तोता'],
        correctIndex: 1,
        explanation: "\'वायसः\' का अर्थ कौआ होता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Middle: Class 6 (Demo Class) ---
  {
    id: 'san-cls6-read-1',
    language: 'sanskrit',
    section: 'reading',
    classGrade: 6,
    title: 'सुभाषितानि — अमृतोपम-सूक्तयः',
    description: 'विद्या, सत्यम्, परोपकारः च इत्येतेषां श्रेष्ठ-गुणानां बोधकाः श्लोकाः।',
    difficulty: 'intermediate',
    contentBody: `श्लोकः १:
पृथिव्यां त्रीणि रत्नानि जलमन्नं सुभाषितम्।
मूढैः पाषाणखण्डेषु रत्नसंज्ञा विधीयते॥

श्लोकः २:
उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।
न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥

श्लोकः ३:
विद्या ददाति विनयं विनयाद्याति पात्रताम्।
पात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥

अन्वयः एवं भावार्थः:
१. पृथिव्याम् जलम्, अन्नम्, सुभाषितम् (मधुर-ज्ञान-वचनम्) एव त्रीणि वास्तविक-रत्नानि सन्ति। मूढाः जनाः प्रस्तर-खण्डेषु (हीरा-आदिषु) रत्नम् इति मन्यन्ते।
२. सर्वाणि कार्याणि परिश्रमेण एव सिद्ध्यन्ति, केवलं चिन्तनेन न। सुप्तस्य सिंहस्य मुखे मृगाः स्वयं न प्रविशन्ति।`,
    translation: 'Sanskrit Subhashitas on the three true jewels of the earth (water, food, wise words), the necessity of diligent effort, and education granting humility.',
    audioText: 'पृथिव्यां त्रीणि रत्नानि जलमन्नं सुभाषितम्। मूढैः पाषाणखण्डेषु रत्नसंज्ञा विधीयते। उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः।',
    phoneticGuide: 'Pṛthivyāṁ trīṇi ratnāni jalam annaṁ subhāṣitam. Udyamena hi sidhyanti kāryāṇi na manorathaiḥ.',
    grammarNotes: "तृतीया विभक्तिः: 'उद्यमेन', 'मनोरथैः', 'मूढैः'; सप्तमी विभक्तिः: 'पृथिव्याम्', 'पाषाणखण्डेषु', 'मुखे'।",
    vocabulary: [
      { word: 'सुभाषितम्', meaning: 'सुवचन, सुंदर एवं नीतिपूर्ण विचार (Wise speech)', pronunciation: 'Subhāṣitam' },
      { word: 'उद्यमः', meaning: 'परिश्रम, मेहनत (Hard work / Diligence)', pronunciation: 'Udyamaḥ' },
      { word: 'पाषाणखण्डः', meaning: 'पत्थर का टुकड़ा (Stone fragment)', pronunciation: 'Pāṣāṇakhaṇḍaḥ' },
    ],
    exercises: [
      {
        question: 'श्लोकस्य अनुसारं पृथिव्यां वास्तविक-रत्नानि कति सन्ति?',
        options: ['पञ्च (५)', 'त्रीणि (३ — जल, अन्न, सुभाषित)', 'नव (९)', 'शतम् (१००)'],
        correctIndex: 1,
        explanation: 'श्लोक में स्पष्ट है: "पृथिव्यां त्रीणि रत्नानि जलमन्नं सुभाषितम्।"',
      },
      {
        question: 'कार्याणि केन सिद्ध्यन्ति?',
        options: ['मनोरथैः (सोचने से)', 'उद्यमेन (परिश्रम से)', 'भाग्येन', 'आलस्येन'],
        correctIndex: 1,
        explanation: '"उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः" — कार्य परिश्रम से सिद्ध होते हैं।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls6-pron-1',
    language: 'sanskrit',
    section: 'pronunciation',
    classGrade: 6,
    title: 'संस्कृत-उच्चारण-स्थानानि (कण्ठ्य, तालव्य, मूर्धन्य, दन्त्य, ओष्ठ्य)',
    description: 'पाणिनीय शिक्षा अनुसारं मुखे पञ्च-उच्चारण-स्थानानां विशुद्ध-साधना।',
    difficulty: 'intermediate',
    contentBody: `पाणिनीय-शिक्षायाः अमर-सूत्राणि:
१. कण्ठ्य (Throat): अ, आ, क-वर्ग (क, ख, ग, घ, ङ), ह, विसर्गः।
   सूत्रम्: "अकुहविसर्जनीयानां कण्ठः"
२. तालव्य (Hard Palate): इ, ई, च-वर्ग (च, छ, ज, झ, ञ), य, श।
   सूत्रम्: "इचुयशानां तालु"
३. मूर्धन्य (Roof/Cerebral): ऋ, ॠ, ट-वर्ग (ट, ठ, ड, ढ, ण), र, ष।
   सूत्रम्: "ऋटुरषाणां मूर्धा"
४. दन्त्य (Teeth): ऌ, त-वर्ग (त, थ, द, ध, न), ल, स।
   सूत्रम्: "लृतुलसानां दन्ताः"
५. ओष्ठ्य (Lips): उ, ऊ, प-वर्ग (प, फ, ब, भ, म), उपध्मानीयः।
   सूत्रम्: "उपूपध्मानीयानाम् ओष्ठौ"`,
    translation: 'The five classical places of articulation in Paninian phonetics: Throat, Palate, Roof, Teeth, and Lips.',
    audioText: 'अकुहविसर्जनीयानां कण्ठः। इचुयशानां तालु। ऋटुरषाणां मूर्धा। लृतुलसानां दन्ताः। उपूपध्मानीयानाम् ओष्ठौ।',
    phoneticGuide: 'Kaṇṭhya, Tālavya, Mūrdhanya, Dantya, Oṣṭhya.',
    grammarNotes: 'उच्चारण स्थान का सही ज्ञान होने से संधि एवं उच्चारण में दोष नहीं होता।',
    vocabulary: [
      { word: 'मूर्धा', meaning: 'कठोर तालु के पीछे का शीर्ष भाग (Roof of mouth)', pronunciation: 'Mūrdhā' },
      { word: 'तालु', meaning: 'मुख का ऊपरी तालव्य भाग (Palate)', pronunciation: 'Tālu' },
    ],
    exercises: [
      {
        question: "\'च, छ, ज, झ\' वर्णानाम् उच्चारण-स्थानं किम् अस्ति?",
        options: ['कण्ठः', 'तालु (Palate)', 'मूर्धा', 'दन्ताः'],
        correctIndex: 1,
        explanation: '"इचुयशानां तालु" — च-वर्ग का उच्चारण स्थान तालु है।',
      },
      {
        question: "\'प, फ, ब, भ, म\' वर्णानाम् उच्चारणे कस्य मुख्यः उपयोगः भवति?",
        options: ['दंतानाम्', 'ओष्ठयोः (दोनों होठों का)', 'नासिकायाः', 'कण्ठस्य'],
        correctIndex: 1,
        explanation: '"उपूपध्मानीयानाम् ओष्ठौ" — प-वर्ग ओष्ठ्य वर्ण है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls6-list-1',
    language: 'sanskrit',
    section: 'listening',
    classGrade: 6,
    title: 'वैदिक-शान्तिमन्त्रः — विश्व-शान्तेः प्रार्थना',
    description: 'यजुर्वेदस्य बृहदारण्यकोपनिषदः च पावन-मन्त्र-श्रवणम्।',
    difficulty: 'intermediate',
    contentBody: `ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः,
पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः।
वनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः,
सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि॥
ॐ शान्तिः शान्तिः शान्तिः॥

अन्वयः एवं भावार्थः:
द्युलोक (आकाश) में शांति हो, अंतरिक्ष में शांति हो, पृथ्वी पर शांति हो, जल और औषधियों में शांति हो।
समस्त वनस्पतियों, विश्वेदेवों तथा ब्रह्म में शांति हो। सर्वत्र शांति ही शांति व्याप्त हो, और वह शांति मुझे प्राप्त हो!`,
    translation: 'The ancient Vedic Shanti Mantra from the Shukla Yajurveda praying for peace across celestial skies, atmospheric realm, earth, waters, plants, and all existence.',
    audioText: 'ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः। वनस्पतयः शान्तिर्विश्वेदेवाः शान्तिर्ब्रह्म शान्तिः। सर्वं शान्तिः शान्तिरेव शान्तिः सा मा शान्तिरेधि। ॐ शान्तिः शान्तिः शान्तिः।',
    phoneticGuide: 'Om Dyauḥ śāntir antarikṣaṁ śāntiḥ, pṛthivī śāntir āpaḥ śāntir oṣadhayaḥ śāntiḥ.',
    grammarNotes: "प्रथमा विभक्तिः: 'शान्तिः', 'द्यौः', 'पृथिवी'; विसर्ग-संधिः: शान्तिः + अन्तरिक्षम् = शान्तिरन्तरिक्षम्।",
    vocabulary: [
      { word: 'द्यौः', meaning: 'स्वर्गलोक, आकाश (Heavenly cosmos / Sky)', pronunciation: 'Dyauḥ' },
      { word: 'ओषधयः', meaning: 'औषधीय पौधे (Medicinal plants / Herbs)', pronunciation: 'Oṣadhayaḥ' },
      { word: 'आपः', meaning: 'जल (Waters)', pronunciation: 'Āpaḥ' },
    ],
    exercises: [
      {
        question: "मन्त्रे \'आपः शान्तिः\' इत्यत्र \'आपः\' शब्दस्य कः अर्थः?",
        options: ['अग्नि', 'जल (Water)', 'वायु', 'पर्वतः'],
        correctIndex: 1,
        explanation: "संस्कृत में \'आपः\' का अर्थ जल होता है।",
      },
      {
        question: "शान्ति-मन्त्रे कति वारं \'शान्तिः\' शब्दस्य उच्चारणं क्रियते अन्ते?",
        options: ['एकवारम्', 'त्रिवारम् (३ बार)', 'पंचवारम्', 'दशवारम्'],
        correctIndex: 1,
        explanation: "आधिभौतिक, आधिदैविक, आध्यात्मिक तापों के निवारण हेतु ३ बार \'ॐ शान्तिः शान्तिः शान्तिः\' बोला जाता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls6-gram-1',
    language: 'sanskrit',
    section: 'grammar',
    classGrade: 6,
    title: "लट्-लकारः (वर्तमानकालः): 'पठ्' धातोः नवरूपाणि",
    description: 'प्रथम, मध्यम, उत्तम पुरुषेषु एकवचन-द्विवचन-बहुवचनानां संपूर्णम् अभ्यास-पटलम्।',
    difficulty: 'intermediate',
    contentBody: `'पठ्' धातु (पढ़ना) - लट् लकारः (वर्तमानकालः):
१. प्रथम पुरुषः (He / They):
   • एकवचनम्: पठति (वह पढ़ता है)
   • द्विवचनम्: पठतः (वे दोनों पढ़ते हैं)
   • बहुवचनम्: पठन्ति (वे सब पढ़ते हैं)

२. मध्यम पुरुषः (You):
   • एकवचनम्: पठसि (तुम पढ़ते हो)
   • द्विवचनम्: पठथः (तुम दोनों पढ़ते हो)
   • बहुवचनम्: पठथ (तुम सब पढ़ते हो)

३. उत्तम पुरुषः (I / We):
   • एकवचनम्: पठामि (मैं पढ़ता हूँ)
   • द्विवचनम्: पठावः (हम दोनों पढ़ते हैं)
   • बहुवचनम्: पठामः (हम सब पढ़ते हैं)

सूत्रम्: ति तः अन्ति, सि थः थ, मि वः मः!`,
    translation: 'The Present Tense (Lat Lakara) paradigm for root "Path" (to read) across 3 persons and 3 numbers.',
    audioText: 'पठति, पठतः, पठन्ति। पठसि, पठथः, पठथ। पठामि, पठावः, पठामः। ति तः अन्ति, सि थः थ, मि वः मः।',
    phoneticGuide: 'Paṭhati, paṭhataḥ, paṭhanti; paṭhasi, paṭhathaḥ, paṭhatha; paṭhāmi, paṭhāvaḥ, paṭhāmaḥ.',
    grammarNotes: 'तिङ्-प्रत्यय तालिका: ति-तः-अन्ति (प्रथम), सि-थः-थ (मध्यम), मि-वः-मः (उत्तम)।',
    vocabulary: [
      { word: 'लकारः', meaning: 'काल एवं भाव को दर्शाने वाला व्याकरणिक रूप (Tense / Mood)', pronunciation: 'Lakāraḥ' },
      { word: 'धातुः', meaning: 'क्रिया का मूल रूप (Verbal root)', pronunciation: 'Dhātuḥ' },
    ],
    exercises: [
      {
        question: "\'अहम्\' (मैं) इत्यनेन सह कः क्रियापदः प्रयुज्यते?",
        options: ['पठति', 'पठसि', 'पठामि', 'पठन्ति'],
        correctIndex: 2,
        explanation: "उत्तम पुरुष एकवचन में \'अहं पठामि\' (मैं पढ़ता हूँ) प्रयुक्त होता है।",
      },
      {
        question: "\'त्वम्\' (तुम) इत्यनेन सह कः क्रियापदः आगच्छति?",
        options: ['पठति', 'पठसि', 'पठामि', 'पठथः'],
        correctIndex: 1,
        explanation: "मध्यम पुरुष एकवचन में \'त्वं पठसि\' होता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Middle: Class 7 & 8 ---
  {
    id: 'san-cls7-gram-1',
    language: 'sanskrit',
    section: 'grammar',
    classGrade: 7,
    title: "अकारान्त-पुल्लिंग-शब्दरूपम् — 'राम' शब्दस्य सप्तविभक्तयः",
    description: 'विभक्ति-कारकयोः समन्वयेन संस्कृत-पदानां शुद्ध-प्रयोगः।',
    difficulty: 'intermediate',
    contentBody: `'राम' शब्दरूपाणि (अकारान्त पुल्लिंगम्):
• प्रथमा (कर्ता): रामः, रामौ, रामाः
• द्वितीया (कर्म): रामम्, रामौ, रामान्
• तृतीया (करण): रामेण, रामाभ्याम्, रामैः
• चतुर्थी (संप्रदान): रामाय, रामाभ्याम्, रामेभ्यः
• पंचमी (अपादान): रामात्, रामाभ्याम्, रामेभ्यः
• षष्ठी (संबंध): रामस्य, रामयोः, रामाणाम्
• सप्तमी (अधिकरण): रामे, रामयोः, रामेषु
• संबोधनम्: हे राम!, हे रामौ!, हे रामाः!

बालक, नृप, देव, गज, वृक्ष — सर्वेषाम् अकारान्त-शब्दानां रूपाणि रामवत् एव भवन्ति!`,
    translation: 'Declension of masculine noun "Rama" across all seven cases (Vibhaktis) and three numbers.',
    audioText: 'रामः रामौ रामाः, रामम् रामौ रामान्, रामेण रामाभ्याम् रामैः, रामाय रामाभ्याम् रामेभ्यः, रामात् रामाभ्याम् रामेभ्यः, रामस्य रामयोः रामाणाम्, रामे रामयोः रामेषु।',
    phoneticGuide: 'Rāmaḥ rāmau rāmāḥ, rāmaṁ rāmau rāmān, rāmeṇa rāmābhyāṁ rāmaiḥ.',
    grammarNotes: 'सुप्-प्रत्ययाः एकविंशतिः (२१) सन्ति ये प्रातिपदिकेन सह योज्यन्ते।',
    vocabulary: [
      { word: 'विभक्तिः', meaning: 'कारक संबंधों को दर्शाने वाले प्रत्यय (Case ending)', pronunciation: 'Vibhaktiḥ' },
      { word: 'प्रातिपदिकम्', meaning: 'प्रत्ययरहित सार्थक मूल शब्द (Nominal stem)', pronunciation: 'Prātipadikam' },
    ],
    exercises: [
      {
        question: "\'रामस्य\' पदे का विभक्तिः अस्ति?",
        options: ['तृतीया', 'पंचमी', 'षष्ठी (संबंध कारक)', 'सप्तमी'],
        correctIndex: 2,
        explanation: "\'रामस्य\' का अर्थ \'राम का/के/की\' होता है, जो षष्ठी विभक्ति एकवचन है।",
      },
      {
        question: "\'रामात्\' पदे का विभक्तिः प्रयुक्ता?",
        options: ['द्वितीया', 'तृतीया', 'पंचमी (अलग होने के अर्थ में)', 'सप्तमी'],
        correctIndex: 2,
        explanation: "\'रामात्\' पंचमी विभक्ति एकवचन का रूप है (राम से अलग)।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls8-gram-1',
    language: 'sanskrit',
    section: 'grammar',
    classGrade: 8,
    title: "आकारान्त-स्त्रीलिंग-शब्दरूपम् — 'लता' शब्दस्य सप्तविभक्तयः",
    description: 'रमा, लता, बालिका, सीता, वाटिका — आकारान्त स्त्रीलिंग-पदानां रूप-साधना।',
    difficulty: 'intermediate',
    contentBody: `'लता' शब्दरूपाणि (आकारान्त स्त्रीलिंगम्):
• प्रथमा: लता, लते, लताः
• द्वितीया: लताम्, लते, लताः
• तृतीया: लतया, लताभ्याम्, लताभिः
• चतुर्थी: लतायै, लताभ्याम्, लताभ्यः
• पंचमी: लतायाः, लताभ्याम्, लताभ्यः
• षष्ठी: लतायाः, लतयोः, लतानाम्
• सप्तमी: लतायाम्, लतयोः, लतासु
• संबोधनम्: हे लते!, हे लते!, हे लताः!

विशेष ध्यान दें:
तृतीया एकवचन में 'लतया', चतुर्थी में 'लतायै', पंचमी-षष्ठी में 'लतायाः' तथा सप्तमी में 'लतायाम्' बनता है।`,
    translation: 'Declension of feminine noun ending in -ā ("Lata") across all cases and numbers.',
    audioText: 'लता लते लताः, लताम् लते लताः, लतया लताभ्याम् लताभिः, लतायै लताभ्याम् लताभ्यः, लतायाः लताभ्याम् लताभ्यः, लतायाः लतयोः लतानाम्, लतायाम् लतयोः लतासु।',
    phoneticGuide: 'Latā late latāḥ, latāṁ late latāḥ, latayā latābhyāṁ latābhiḥ.',
    grammarNotes: "आकारान्त स्त्रीलिंग शब्दों में चतुर्थी एकवचन में 'यै' और सप्तमी एकवचन में 'याम्' प्रत्यय जुड़ता है।",
    vocabulary: [
      { word: 'लता', meaning: 'बेल, वल्लरी (Creeper / Vine)', pronunciation: 'Latā' },
      { word: 'वाटिका', meaning: 'बगीचा (Garden)', pronunciation: 'Vāṭikā' },
    ],
    exercises: [
      {
        question: "\'लतायाम्\' पदे का विभक्तिः अस्ति?",
        options: ['प्रथमा', 'तृतीया', 'षष्ठी', 'सप्तमी (अधिकरण कारक)'],
        correctIndex: 3,
        explanation: "\'लतायाम्\' का अर्थ \'लता में या लता पर\' है, जो सप्तमी एकवचन है।",
      },
      {
        question: "\'बालिका\' शब्दस्य तृतीया एकवचने किं रूपं भवति?",
        options: ['बालिकेन', 'बालिकया', 'बालिकायै', 'बालिकायाः'],
        correctIndex: 1,
        explanation: 'लता -> लतया के समान बालिका -> बालिकया रूप बनता है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Secondary: Class 9 & 10 ---
  {
    id: 'san-cls9-gram-1',
    language: 'sanskrit',
    section: 'grammar',
    classGrade: 9,
    title: 'संस्कृत-सन्धि-प्रकरणम् — अच्-सन्धिः (स्वर-सन्धिः)',
    description: 'दीर्घ, गुण, वृद्धि, यण्, अयादि, पूर्वरूप सन्धीनां सूत्र-सहितं विशुद्ध-विवेचनम्।',
    difficulty: 'advanced',
    contentBody: `संस्कृतभाषायां स्वर-सन्धेः (अच्-सन्धेः) नियमाः:
१. अकः सवर्णे दीर्घः:
   • देव + आलयः = देवालयः
   • गिरि + ईशः = गिरीशः
   • भानु + उदयः = भानूदयः

२. आद्गुणः:
   • महा + ईशः = महेशः (आ + ई = ए)
   • सूर्य + उदयः = सूर्योदयः (अ + उ = ओ)
   • महा + ऋषिः = महर्षिः (आ + ऋ = अर्)

३. वृद्धिरेचि:
   • सदा + एव = सदैव (आ + ए = ऐ)
   • महा + औषधिः = महौषधिः (आ + औ = औ)

४. इको यणचि:
   • इति + आदि = इत्यादि (इ + आ = या)
   • मधु + अरिः = मध्वरिः (उ + अ = व)

५. एङः पदान्तादति (पूर्वरूपम्):
   • वने + अत्र = वनेऽत्र (अवग्रह चिह्नम् 'ऽ')।`,
    translation: 'The euphonic vowel combination rules (Ach Sandhi) according to the Ashtadhyayi of Panini.',
    audioText: 'अकः सवर्णे दीर्घः — देवालयः, गिरीशः। आद्गुणः — महेशः, सूर्योदयः। वृद्धिरेचि — सदैव। इको यणचि — इत्यादि, मध्वरिः। एङः पदान्तादति — वनेऽत्र।',
    phoneticGuide: 'Akaḥ savarṇe dīrghaḥ, Ādguṇaḥ, Vṛddhirechi, Iko yaṇachi, Eṅaḥ padāntādati.',
    grammarNotes: 'पाणिनीय व्याकरणे अच् प्रत्याहारे सर्वे स्वराः (अ, इ, उ, ऋ, ऌ, ए, ओ, ऐ, औ) समाविष्टाः सन्ति।',
    vocabulary: [
      { word: 'प्रत्याहारः', meaning: 'अक्षरों का संक्षिप्त समूह (Phonological abbreviation)', pronunciation: 'Pratyāhāraḥ' },
      { word: 'अवग्रहः', meaning: "लुप्त 'अ' को दर्शाने वाला 'ऽ' चिह्न (Apostrophe symbol)", pronunciation: 'Avagrahaḥ' },
    ],
    exercises: [
      {
        question: "\'इत्यादि\' (इति + आदि) पदे का सन्धिः अस्ति?",
        options: ['दीर्घ-सन्धिः', 'गुण-सन्धिः', 'यण्-सन्धिः', 'वृद्धि-सन्धिः'],
        correctIndex: 2,
        explanation: "\'इको यणचि\' सूत्र से इ + आ = य बन गया, अतः यण्-सन्धि है।",
      },
      {
        question: "\'वनेऽत्र\' पदे प्रयुक्तस्य \'ऽ\' चिह्नस्य किं नाम?",
        options: ['अनुस्वारः', 'विसर्गः', 'अवग्रहः', 'हलन्तः'],
        correctIndex: 2,
        explanation: "पूर्वरूप संधि में लुप्त \'अ\' को दर्शाने के लिए अवग्रह (ऽ) का प्रयोग होता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls10-list-1',
    language: 'sanskrit',
    section: 'listening',
    classGrade: 10,
    title: 'श्रीमद्भगवद्गीता — निष्काम-कर्मयोग-उपदेशः',
    description: 'द्वितीयाध्यायस्य सांख्ययोगस्य अमर-श्लोकानां सस्वर-वैदिक-ध्वनि-श्रवणम्।',
    difficulty: 'advanced',
    contentBody: `भगवान् श्रीकृष्णः अर्जुनं प्रति कथयति:

कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥

योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥

अन्वयः एवं भावार्थः:
हे अर्जुन! कर्म करने में ही तुम्हारा अधिकार है, उसके फलों में कभी नहीं।
तुम कर्मफल की आसक्ति वाले मत बनो, और न ही कर्म न करने (अकर्मण्यता) में तुम्हारी प्रीति हो।
सफलता और असफलता में समान बुद्धि रखते हुए अनासक्त भाव से कर्तव्य-कर्म करो; यह समत्व-भाव ही 'योग' कहलाता है।`,
    translation: 'The immortal verse of the Bhagavad Gita on Nishkama Karma Yoga: performing action without attachment to outcomes, maintaining equanimity in triumph and setback.',
    audioText: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि। योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।',
    phoneticGuide: 'Karmaṇy evādhikāras te mā phaleṣu kadāchana. Mā karmaphala-hetur bhūr mā te saṅgo \'stv akarmaṇi.',
    grammarNotes: "अनुष्टुप् छन्दः; सप्तमी विभक्तिः: 'फलेषु', 'अकर्मणि'; क्त्वा प्रत्ययः: 'त्यक्त्वा', 'भूत्वा'।",
    vocabulary: [
      { word: 'निष्काम-कर्म', meaning: 'फल की इच्छा के बिना किया जाने वाला कर्तव्य (Desireless action)', pronunciation: 'Nishkaam Karma' },
      { word: 'समत्वम्', meaning: 'सुख-दुख एवं जय-पराजय में एकसमान संतुलित मन (Equanimity / Balance)', pronunciation: 'Samatvam' },
      { word: 'अकर्मणि', meaning: 'कर्म न करने में, आलस्य में (Inaction)', pronunciation: 'Akarmaṇi' },
    ],
    exercises: [
      {
        question: 'गीतानुसारं मनुष्यस्य कस्मिन् अधिकारः अस्ति?',
        options: ['फलेषु (फलों में)', 'कर्मणि (कर्म करने में)', 'विवादे', 'चिन्तने'],
        correctIndex: 1,
        explanation: '"कर्मण्येवाधिकारस्ते" — मनुष्य का अधिकार केवल कर्म करने में है।',
      },
      {
        question: "\'समत्वं ______ उच्यते\' — रिक्तस्थानं पूरयत।",
        options: ['मोक्षः', 'योगः', 'त्यागः', 'ज्ञानम्'],
        correctIndex: 1,
        explanation: 'श्लोक में कहा गया है: "समत्वं योग उच्यते" (समता ही योग है)।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  // --- Senior Secondary: Class 11 & 12 ---
  {
    id: 'san-cls11-read-1',
    language: 'sanskrit',
    section: 'reading',
    classGrade: 11,
    title: 'भर्तृहरि-विरचितं नीतिशतकम् — विद्या-प्रशंसा',
    description: 'राजा भर्तृहरि के नीतिशतक से विद्या के अद्वितीय स्वरूप और महत्व का गान।',
    difficulty: 'advanced',
    contentBody: `श्लोकः:
विद्या नाम नरस्य रूपमधिकं प्रच्छन्नगुप्तं धनं
विद्या भोगकरी यशःसुखकरी विद्या गुरूणां गुरुः।
विद्या बन्धुजनो विदेशगमने विद्या परा देवता
विद्या राजसु पूज्यते न हि धनं विद्याविहीनः पशुः॥

अन्वयः एवं भावार्थः:
विद्या मनुष्य का वास्तविक और अलौकिक सौंदर्य है।
यह ऐसा गुप्त धन है जिसे कोई चोर चुरा नहीं सकता।
विद्या समस्त भोग, यश और सुख प्रदान करने वाली है। विद्या गुरुओं की भी गुरु है।
विदेश जाने पर विद्या ही सबसे सच्ची हितैषी सगी-संबंधी होती है।
विद्या ही सर्वश्रेष्ठ देवता है। राजाओं की राजसभा में विद्या का सम्मान होता है, धन का नहीं।
सत्य ही है—विद्या से रहित मनुष्य सींग और पूंछ से विहीन साक्षात् पशु के समान है!`,
    translation: 'Bhartrihari’s Neetishatakam on the supremacy of knowledge: Vidyā is hidden treasure, the highest deity, and honored by kings.',
    audioText: 'विद्या नाम नरस्य रूपमधिकं प्रच्छन्नगुप्तं धनम्। विद्या भोगकरी यशःसुखकरी विद्या गुरूणां गुरुः। विद्या बन्धुजनो विदेशगमने विद्या परा देवता। विद्या राजसु पूज्यते न हि धनं विद्याविहीनः पशुः।',
    phoneticGuide: 'Vidyā nāma narasya rūpam adhikaṁ pracchannaguptaṁ dhanam. Vidyā rājasu pūjyate na hi dhanaṁ vidyāvihīnaḥ paśuḥ.',
    grammarNotes: 'शार्दूलविक्रीडितं छन्दः (प्रत्येक पाद में १९ वर्ण — म, स, ज, स, त, त, ग)।',
    vocabulary: [
      { word: 'प्रच्छन्नगुप्तम्', meaning: 'अत्यंत छिपा हुआ सुरक्षित (Deeply concealed and safe)', pronunciation: 'Pracchannaguptam' },
      { word: 'विद्याविहीनः', meaning: 'ज्ञान से शून्य मनुष्य (Bereft of learning)', pronunciation: 'Vidyāvihīnaḥ' },
    ],
    exercises: [
      {
        question: 'राजसभासु कस्य पूजा भवति?',
        options: ['धनस्य', 'विद्यायाः (ज्ञान की)', 'अहंकारस्य', 'बलस्य'],
        correctIndex: 1,
        explanation: 'श्लोके स्पष्टम्: "विद्या राजसु पूज्यते न हि धनम्।"',
      },
      {
        question: 'विदेशगमने मनुष्यस्य बन्धुजनः कः भवति?',
        options: ['सुवर्णम्', 'विद्या (Knowledge)', 'शत्रुः', 'अश्वः'],
        correctIndex: 1,
        explanation: '"विद्या बन्धुजनो विदेशगमने" — विदेश में विद्या ही सच्ची सगी-संबंधी होती है।',
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },
  {
    id: 'san-cls12-read-1',
    language: 'sanskrit',
    section: 'reading',
    classGrade: 12,
    title: 'कालिदासस्य रघुवंशम् — वागर्थाविव संपृक्तौ (मङ्गलाचरणम्)',
    description: 'महाकवि कालिदास के विश्वविख्यात महाकाव्य रघुवंश का मंगलाचरण एवं शब्द-अर्थ का अद्वैत संबंध।',
    difficulty: 'advanced',
    contentBody: `श्लोकः:
वागर्थाविव संपृक्तौ वागर्थप्रतिपत्तये।
जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ॥

अन्वयः एवं भावार्थः:
यथा वाक् (वाणी) अर्थः च परस्परं नित्य-संबद्धौ स्तः, तथैव नित्य-संयुक्तौ सम्पूर्ण-जगतः माता-पितरौ जगदम्बा-पार्वतीं देवाधिदेवं शिवं च वाणी-अर्थयोः सम्यक् ज्ञान-प्राप्तये अहम् प्रणमामि।

काव्य-रहस्यम्:
कालिदास कहते हैं कि जिस प्रकार शब्द और उसका अर्थ एक-दूसरे से कभी अलग नहीं हो सकते (जैसे 'अग्नि' शब्द और उसकी 'उष्णता'), उसी प्रकार माता पार्वती और भगवान शंकर सम्पूर्ण चराचर जगत के अभिन्न माता-पिता हैं।`,
    translation: 'The invocatory verse of Kalidasa’s epic Raghuvamsham: paying homage to Parvati and Parameshvara, who are eternally united as word and its meaning.',
    audioText: 'वागर्थाविव संपृक्तौ वागर्थप्रतिपत्तये। जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ।',
    phoneticGuide: 'Vāgarthāv iva sampṛktau vāgartha-pratipattaye. Jagataḥ pitarau vande pārvatī-parameśvarau.',
    grammarNotes: "अनुष्टुप् छन्दः; उपमा अलङ्कारः; समासः: 'वागर्थौ' (वाक् च अर्थश्च — द्वन्द्व समासः), 'पितरौ' (माता च पिता च — एकशेष द्वन्द्वः)।",
    vocabulary: [
      { word: 'संपृक्तौ', meaning: 'अविभाज्य रूप से मिले हुए (Inseparably united)', pronunciation: 'Sampṛktau' },
      { word: 'प्रतिपत्तये', meaning: 'सटीक बोध या ज्ञान की प्राप्ति के लिए (For the comprehension of)', pronunciation: 'Pratipattaye' },
    ],
    exercises: [
      {
        question: 'कालिदास के अनुसार वाणी और अर्थ के समान नित्य जुड़े हुए कौन हैं?',
        options: ['सूर्य और चंद्रमा', 'पार्वती और परमेश्वर (शिव)', 'गंगा और यमुना', 'वृक्ष और फल'],
        correctIndex: 1,
        explanation: 'कालिदास ने जगत के माता-पिता पार्वती और शिव को वाणी और अर्थ के समान संपृक्त बताया है।',
      },
      {
        question: "\'पितरौ\' पदे कः समासः अस्ति?",
        options: ['द्विगु समासः', 'एकशेष द्वन्द्व समासः (माता च पिता च)', 'तत्पुरुष समासः', 'अव्ययीभावः'],
        correctIndex: 1,
        explanation: "\'पितरौ\' में माता च पिता च मिलकर एकशेष द्वन्द्व समास बनता है।",
      },
    ],
    authorId: 'system-teacher',
    authorName: 'Language Lab Faculty',
    status: 'published',
  },

  {
    "id": "hin-cls10-pron-adv",
    "language": "hindi",
    "section": "pronunciation",
    "classGrade": 10,
    "title": "संस्कृत तत्सम शब्दों और संयुक्ताक्षरों का मानकीकृत उच्चारण",
    "description": "ज्ञान, विज्ञान, शृंगार, उच्छ्वास आदि कठिन ध्वनियों का शुद्ध उच्चारण अभ्यास।",
    "difficulty": "advanced",
    "contentBody": "कठिन संयुक्ताक्षरों का मानक हिंदी उच्चारण:\n१. \"ज्ञ\" (ज + ञ): ज्ञान, विज्ञान, ज्ञानी।\n२. \"शृ\" (श + ऋ): शृंगार (शुद्ध रूप)।\n३. \"च्छ्व\": उच्छ्वास, उच्छृंखल।\n४. \"ह्न\" और \"ह्य\": चिह्न, मध्याह्न, बाह्य।",
    "translation": "Standardized pronunciation of complex conjunct consonants in Hindi literature.",
    "audioText": "ज्ञान, विज्ञान, ज्ञानी। शृंगार, उच्छ्वास, उच्छृंखल। चिह्न, मध्याह्न, बाह्य।",
    "phoneticGuide": "Gyaan, Vigyaan, Shringaar, Uch-chhwaas, Chih-na.",
    "grammarNotes": "केंद्रीय हिंदी निदेशालय द्वारा स्वीकृत मानक वर्तनी एवं उच्चारण नियम।",
    "vocabulary": [
      {
        "word": "उच्छ्वास",
        "meaning": "गहरी सांस (Deep breath)",
        "pronunciation": "Uchchhwaas"
      },
      {
        "word": "मध्याह्न",
        "meaning": "दोपहर का समय (Noon)",
        "pronunciation": "Madhyaahna"
      }
    ],
    "exercises": [
      {
        "question": "शृंगार शब्द का मानक शुद्ध रूप कौन सा है?",
        "options": [
          "श्रृंगार",
          "शृंगार (श में ऋ की मात्रा)",
          "सिंघार",
          "स्रंगार"
        ],
        "correctIndex": 1,
        "explanation": "मानक हिंदी में श में ऋ की मात्रा लगाकर शृंगार लिखा जाता है।"
      },
      {
        "question": "चिह्न में ह् और न् में से कौन सा वर्ण स्वर-रहित (आधा) है?",
        "options": [
          "न",
          "ह (ह्)",
          "दोनों",
          "कोई नहीं"
        ],
        "correctIndex": 1,
        "explanation": "चिह्न में ह हलन्त (आधा) है और न पूरा है।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "hin-cls10-list-adv",
    "language": "hindi",
    "section": "listening",
    "classGrade": 10,
    "title": "रामधारी सिंह दिनकर: रश्मिरथी — कृष्ण की चेतावनी",
    "description": "महाभारत सभापर्व में भगवान श्रीकृष्ण के शांतिदूत बनकर हस्तिनापुर जाने का ओजस्वी काव्य-पाठ।",
    "difficulty": "advanced",
    "contentBody": "कवि दिनकर का ओजस्वी काव्य-पाठ:\n\"वर्षों तक वन में घूम-घूम, बाधा-विघ्नों को चूम-चूम, सह धूप-घाम पानी-पत्थर, पांडव आए कुछ और निखर।\nमैत्री की राह बताने को, सबको सुमार्ग पर लाने को, दुर्योधन को समझाने को, भीषण विध्वंस बचाने को, भगवान हस्तिनापुर आए:\nदो न्याय अगर तो आधा दो, पर इसमें भी यदि बाधा हो, तो दे दो केवल पाँच ग्राम, रक्खो अपनी धरती तमाम।\nदुर्योधन वह भी दे न सका, उलटे हरि को बांधने चला!\nजब नाश मनुज पर छाता है, पहले विवेक मर जाता है!\"",
    "translation": "Dinkar’s epic masterpiece Rashmirathi: Lord Krishna’s solemn ultimatum to Duryodhana before the Mahabharata war.",
    "audioText": "वर्षों तक वन में घूम-घूम बाधा-विघ्नों को चूम-चूम सह धूप-घाम पानी-पत्थर पांडव आए कुछ और निखर। दो न्याय अगर तो आधा दो, पर इसमें भी यदि बाधा हो तो दे दो केवल पाँच ग्राम। जब नाश मनुज पर छाता है, पहले विवेक मर जाता है।",
    "phoneticGuide": "Rashmirathi: Jab naash manuj par chhaata hai, pehle vivek mar jaata hai.",
    "grammarNotes": "वीर रस का अद्वितीय ओजस्वी प्रवाह, तुकांत पद एवं संस्कृत गर्भित तत्सम पदावली।",
    "vocabulary": [
      {
        "word": "असि",
        "meaning": "तलवार (Sword)",
        "pronunciation": "Asi"
      },
      {
        "word": "विवेक",
        "meaning": "उचित और अनुचित का ज्ञान (Wisdom)",
        "pronunciation": "Vivek"
      }
    ],
    "exercises": [
      {
        "question": "श्रीकृष्ण ने दुर्योधन से पांडवों के लिए न्यूनतम कितने गांव मांगे थे?",
        "options": [
          "दस ग्राम",
          "पाँच ग्राम (गांव)",
          "पचास ग्राम",
          "पूरा राज्य"
        ],
        "correctIndex": 1,
        "explanation": "श्रीकृष्ण ने कहा: तो दे दो केवल पाँच ग्राम, रक्खो अपनी धरती तमाम।"
      },
      {
        "question": "जब नाश मनुज पर छाता है, पहले क्या मर जाता है?",
        "options": [
          "क्रोध",
          "विवेक",
          "धन",
          "शत्रु"
        ],
        "correctIndex": 1,
        "explanation": "अमर पंक्ति है: जब नाश मनुज पर छाता है, पहले विवेक मर जाता है!"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "san-cls11-pron-adv",
    "language": "sanskrit",
    "section": "pronunciation",
    "classGrade": 11,
    "title": "वैदिक-मन्त्राणां सस्वर-उदात्त-अनुदात्त-स्वरित-उच्चारणम्",
    "description": "ऋग्वेदस्य यजुर्वेदस्य च वैदिक-स्वराघात-नियमाः।",
    "difficulty": "advanced",
    "contentBody": "वैदिक-स्वराघातः:\n१. उदात्त (High Pitch): उच्चैरुदात्तः। जिह्वा-तालु-आदिषु स्थानेषु ऊर्ध्वभागे निष्पन्नः स्वरः।\n२. अनुदात्त (Low Pitch): नीचैरनुदात्तः। अधोभागे निष्पन्नः स्वरः।\n३. स्वरित (Falling Pitch): समाहारः स्वरितः। उदात्त-अनुदात्तयोः समाहारः।\nगायत्री-मन्त्रे स्वराभ्यासः: ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥",
    "translation": "The three classical Vedic pitch accents: Udatta (acute/high), Anudatta (grave/low), and Svarita (circumflex).",
    "audioText": "उच्चैरुदात्तः। नीचैरनुदात्तः। समाहारः स्वरितः। ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्।",
    "phoneticGuide": "Udātta, Anudātta, Svarita. Gāyatrī Mantra.",
    "grammarNotes": "पाणिनीय सूत्रम्: १।२।२९ उच्चैरुदात्तः, १।२।३० नीचैरनुदात्तः, १।२।३१ समाहारः स्वरितः।",
    "vocabulary": [
      {
        "word": "स्वरितः",
        "meaning": "उदात्त और अनुदात्त का संतुलित मेल (Circumflex pitch)",
        "pronunciation": "Svaritaḥ"
      },
      {
        "word": "धीमहि",
        "meaning": "हम ध्यान करते हैं (We meditate upon)",
        "pronunciation": "Dhīmahi"
      }
    ],
    "exercises": [
      {
        "question": "पाणिनि-सूत्रानुसारं उच्चैः रिक्तस्थानं किम्?",
        "options": [
          "अनुदात्तः",
          "उदात्तः",
          "स्वरितः",
          "प्लुतम्"
        ],
        "correctIndex": 1,
        "explanation": "सूत्रम् अस्ति: उच्चैरुदात्तः (ऊंचे स्वर को उदात्त कहते हैं)।"
      },
      {
        "question": "उदात्त और अनुदात्त के मेल से कौन सा स्वर बनता है?",
        "options": [
          "ह्रस्व",
          "स्वरितः",
          "दीर्घ",
          "प्लुत"
        ],
        "correctIndex": 1,
        "explanation": "समाहारः स्वरितः — दोनों का समाहार स्वरित कहलाता है।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "san-cls11-list-adv",
    "language": "sanskrit",
    "section": "listening",
    "classGrade": 11,
    "title": "ईशावास्योपनिषद् — ईशा वास्यमिदं सर्वम्",
    "description": "शुक्ल-यजुर्वेदीयायाः ईशावास्योपनिषदः प्रथम-मन्त्रस्य सस्वर-ध्वनि-श्रवणम्।",
    "difficulty": "advanced",
    "contentBody": "उपनिषद्-वाणी:\nॐ ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥\n\nअन्वयः एवं भावार्थः:\nइस गतिशील जगत में जो कुछ भी चराचर विद्यमान है, वह सब ईश्वर से व्याप्त है।\nअतः त्याग-पूर्वक भाव से सांसारिक वस्तुओं का उपभोग करो। कभी किसी अन्य के धन का लोभ मत करो!",
    "translation": "The opening mantra of the Isha Upanishad: All this universe is pervaded by the Divine; enjoy with detachment, and covet no one’s wealth.",
    "audioText": "ॐ ईशा वास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्। तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्। ॐ पूर्णमदः पूर्णमिदं पूर्णात् पूर्णमुदच्यते।",
    "phoneticGuide": "Īśā vāsyam idaṁ sarvaṁ yat kiñcha jagatyāṁ jagat. Tena tyaktena bhuñjīthā mā gṛdhaḥ kasya svid dhanam.",
    "grammarNotes": "वैदिक-संस्कृत-शैली; विध्यर्थे मध्यम-पुरुष-एकवचनम्: भुञ्जीथाः; निषेधार्थे: मा गृधः।",
    "vocabulary": [
      {
        "word": "त्यक्तेन",
        "meaning": "त्याग भाव से, अनासक्त होकर (With detachment)",
        "pronunciation": "Tyaktena"
      },
      {
        "word": "मा गृधः",
        "meaning": "लोभ मत करो (Do not covet)",
        "pronunciation": "Mā Gṛdhaḥ"
      }
    ],
    "exercises": [
      {
        "question": "ईशावास्योपनिषद् के अनुसार संसार की वस्तुओं का उपभोग कैसे करना चाहिए?",
        "options": [
          "लोभ से",
          "त्याग-पूर्वक भाव से (तेन त्यक्तेन भुञ्जीथा)",
          "अहंकार से",
          "चोरी से"
        ],
        "correctIndex": 1,
        "explanation": "तेन त्यक्तेन भुञ्जीथा — त्याग भाव से उपभोग करने का निर्देश है।"
      },
      {
        "question": "मा गृधः रिक्तस्थानं धनम् — रिक्तस्थानं पूरयत।",
        "options": [
          "मित्रस्य",
          "कस्यस्विद् (किसी के भी)",
          "राज्ञः",
          "वैश्यस्य"
        ],
        "correctIndex": 1,
        "explanation": "मन्त्र में आया है: मा गृधः कस्यस्विद्धनम् (किसी के भी धन का लोभ न करो)।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "san-cls2-read-beg",
    "language": "sanskrit",
    "section": "reading",
    "classGrade": 2,
    "title": "मम परिवारः — माता, पिता, भ्राता, भगिनी",
    "description": "कक्षा २ के विद्यार्थियों के लिए परिवार के सदस्यों का संस्कृत में परिचय।",
    "difficulty": "beginner",
    "contentBody": "अहं बालकः। मम नाम अभिनवः अस्ति।\nएषा मम माता। माता स्नेहं करोति।\nएषः मम पिता। पिता धर्मं रक्षति।\nएषः मम अग्रजः (बड़ा भाई)। अग्रजः क्रिकेट-क्रीडां क्रीडति।\nएषा मम अनुजा (छोटी बहन)। अनुजा मधुरं गायति।\nमम परिवारः आनंदमयः अस्ति!",
    "translation": "My family in Sanskrit: mother, father, elder brother, and younger sister.",
    "audioText": "मम नाम अभिनवः अस्ति। एषा मम माता। एषः मम पिता। एषः मम अग्रजः। एषा मम अनुजा। मम परिवारः आनंदमयः अस्ति।",
    "phoneticGuide": "Mama parivāraḥ: Mātā, Pitā, Agrajah, Anujā.",
    "grammarNotes": "संबंध-वाचक सर्वनाम: मम (मेरा/मेरी), एषः (यह पुल्लिंग), एषा (यह स्त्रीलिंग)।",
    "vocabulary": [
      {
        "word": "अग्रजः",
        "meaning": "बड़ा भाई (Elder brother)",
        "pronunciation": "Agrajaḥ"
      },
      {
        "word": "अनुजा",
        "meaning": "छोटी बहन (Younger sister)",
        "pronunciation": "Anujā"
      }
    ],
    "exercises": [
      {
        "question": "संस्कृत में बड़े भाई को क्या कहते हैं?",
        "options": [
          "अनुजः",
          "अग्रजः",
          "जनकः",
          "मातुलः"
        ],
        "correctIndex": 1,
        "explanation": "अग्रजः का अर्थ बड़ा भाई होता है।"
      },
      {
        "question": "मम शब्द का क्या अर्थ है?",
        "options": [
          "तुम्हारा",
          "मेरा (My / Mine)",
          "उसका",
          "हमारा"
        ],
        "correctIndex": 1,
        "explanation": "मम का अर्थ मेरा होता है।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "hin-cls3-read-beg",
    "language": "hindi",
    "section": "reading",
    "classGrade": 3,
    "title": "चंदा मामा और तारों की बारात",
    "description": "रात के आकाश की सुंदरता, चंद्रमा की कलाएं और शीतल चांदनी की मनोरम कथा।",
    "difficulty": "beginner",
    "contentBody": "रात होते ही नीला आकाश चमचमाते तारों से सज जाता है।\nबीच में मुस्कुराते हुए चंदा मामा अपनी रूपहली चांदनी बिखेरते हैं।\nनन्हे तारे टिमटिमाते हुए चंदा मामा के चारों ओर बारात की तरह नाचते हैं।\nपूर्णिमा के दिन चंदा मामा गोल-मटोल थाली जैसे चमकते हैं।\nचांदनी में सारी धरती शांत और शीतल हो जाती है, और बच्चे मीठी लोरी सुनकर सो जाते हैं।",
    "translation": "The nocturnal beauty of the moon, twinkling stars, and gentle moonlit lullaby.",
    "audioText": "रात होते ही नीला आकाश चमचमाते तारों से सज जाता है। बीच में मुस्कुराते हुए चंदा मामा अपनी रूपहली चांदनी बिखेरते हैं। पूर्णिमा के दिन चंदा मामा गोल-मटोल थाली जैसे चमकते हैं।",
    "phoneticGuide": "Chanda Mama aur taaron ki baraat. Roopahli chandni.",
    "grammarNotes": "वर्णनात्मक विशेषण: रूपहली चांदनी, चमचमाते तारे, गोल-मटोल थाली।",
    "vocabulary": [
      {
        "word": "रूपहली",
        "meaning": "चांदी जैसी चमकदार (Silvery)",
        "pronunciation": "Roopahli"
      },
      {
        "word": "पूर्णिमा",
        "meaning": "जिस रात चांद पूरा गोल दिखाई दे (Full moon night)",
        "pronunciation": "Poornima"
      }
    ],
    "exercises": [
      {
        "question": "पूर्णिमा के दिन चांद कैसा दिखाई देता है?",
        "options": [
          "आधा",
          "गोल-मटोल थाली जैसा पूरा",
          "दिखाई ही नहीं देता",
          "त्रिकोण"
        ],
        "correctIndex": 1,
        "explanation": "पूर्णिमा के दिन चांद पूर्ण गोल थाली जैसा चमकता है।"
      },
      {
        "question": "तारे रात में क्या करते हैं?",
        "options": [
          "चुपचाप छिपते हैं",
          "टिमटिमाते हैं (Twinkle)",
          "पानी पीते हैं",
          "सूरज जगाते हैं"
        ],
        "correctIndex": 1,
        "explanation": "तारे आकाश में टिमटिमाते हैं।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "hin-cls11-pron-1",
    "language": "hindi",
    "section": "pronunciation",
    "classGrade": 11,
    "title": "छायावाद एवं वीर रस: कामायनी एवं रश्मिरथी का भावपूर्ण सस्वर पाठ",
    "difficulty": "advanced",
    "description": "जयशंकर प्रसाद एवं रामधारी सिंह दिनकर के ओजस्वी काव्यों का यति-गति, विराम एवं स्वर-आरोह-अवरोह सहित पाठ।",
    "contentBody": "जयशंकर प्रसाद रचित कामायनी (चिंता सर्ग):\n\"हिमगिरि के उत्तुंग शिखर पर, बैठ शिला की शीतल छांह,\nएक पुरुष, भीगे नयनों से देख रहा था प्रलय-प्रवाह।\nनीचे जल था, ऊपर हिम था, एक तरल था, एक सघन,\nएक तत्व की ही प्रधानता, कहो उसे जड़ या चेतन!\"\n\nदिनकर कृत रश्मिरथी (तृतीय सर्ग):\n\"वर्षों तक वन में घूम-घूम, बाधा-विघ्नों को चूम-चूम,\nसह धूप-घाम, पानी-पत्थर, पांडव आये कुछ और निखर।\nसौभाग्य न सब दिन सोता है, देखें आगे क्या होता है!\"",
    "translation": "Expressive declamation of Chhayavad and Veer Rasa poetry from Kamayani and Rashmirathi.",
    "audioText": "हिमगिरि के उत्तुंग शिखर पर, बैठ शिला की शीतल छांह, एक पुरुष भीगे नयनों से देख रहा था प्रलय प्रवाह। वर्षों तक वन में घूम घूम बाधा विघ्नों को चूम चूम, सह धूप घाम पानी पत्थर, पांडव आये कुछ और निखर।",
    "phoneticGuide": "Uttung /उत्तुंग/, Pralay /प्रलय/, Ghām /घाम/, Nikhār /निखर/",
    "grammarNotes": "अलंकार विधान: 'पानी-पत्थर', 'धूप-घाम' में अनुप्रास एवं द्वंद्व समास की छटा।",
    "vocabulary": [
      {
        "word": "उत्तुंग",
        "meaning": "अत्यंत ऊंचा, विशाल (Towering / Lofty)",
        "pronunciation": "Uttung"
      },
      {
        "word": "प्रलय-प्रवाह",
        "meaning": "महाविनाश का जल-प्लावन (Deluge of cataclysm)",
        "pronunciation": "Pralay-Pravāh"
      }
    ],
    "exercises": [
      {
        "question": "'हिमगिरि के उत्तुंग शिखर पर' पंक्ति किस महाकाव्य की है?",
        "options": ["कामायनी (जयशंकर प्रसाद)", "रामचरितमानस", "साकेत", "प्रियप्रवास"],
        "correctIndex": 0,
        "explanation": "यह अमर पंक्ति जयशंकर प्रसाद के महाकाव्य कामायनी के प्रथम सर्ग 'चिंता' की है।"
      },
      {
        "question": "दिनकर के अनुसार वन में कष्ट सहकर पांडव कैसे बने?",
        "options": ["कमजोर", "कुछ और निखरकर सशक्त", "हताश", "पराजित"],
        "correctIndex": 1,
        "explanation": "कवि लिखते हैं: 'सह धूप-घाम, पानी-पत्थर, पांडव आये कुछ और निखर।'"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "hin-cls12-list-1",
    "language": "hindi",
    "section": "listening",
    "classGrade": 12,
    "title": "आकाशवाणी विशेष वार्ता: भारतीय स्वाधीनता आन्दोलन एवं हिन्दी पत्रकारिता",
    "difficulty": "advanced",
    "description": "पंडित माधवराव सप्रे, गणेश शंकर विद्यार्थी और 'प्रताप' समाचार पत्र की राष्ट्र जागरण में भूमिका।",
    "contentBody": "यह आकाशवाणी का दिल्ली केंद्र है। आज की विशेष परिचर्चा में आपका स्वागत है।\nभारतीय राष्ट्रीय स्वाधीनता आंदोलन में हिन्दी पत्रकारिता ने जन-जागरण का शंख फूंका। सन् 1913 में कानपुर से अमर बलिदानी गणेश शंकर विद्यार्थी ने 'प्रताप' का प्रकाशन आरंभ किया।\nविद्यार्थी जी ने लिखा था: 'हमारा उद्देश्य राष्ट्रीय चेतना जगाना, अत्याचार का निर्भीकता से विरोध करना और सत्य का निर्वहन करना है।'\nप्रताप ने चंपारण के नीलहे किसानों के सत्याग्रह और बिजौलिया के कृषक आंदोलनों को राष्ट्रीय मंच प्रदान किया।\nपत्रकारों की लेखनी ने विदेशी हुकूमत की नींव हिला दी।",
    "translation": "Special radio discourse on the monumental role of Hindi journalism and Ganesh Shankar Vidyarthi during India's freedom struggle.",
    "audioText": "यह आकाशवाणी का दिल्ली केंद्र है। आज की विशेष परिचर्चा में आपका स्वागत है। भारतीय राष्ट्रीय स्वाधीनता आंदोलन में हिन्दी पत्रकारिता ने जन-जागरण का शंख फूंका। गणेश शंकर विद्यार्थी ने लिखा: हमारा उद्देश्य राष्ट्रीय चेतना जगाना और अत्याचार का निर्भीक विरोध करना है।",
    "phoneticGuide": "Ākāshvāṇī /आकाशवाणी/, Jan-Jāgaraṇ /जन-जागरण/, Satyāgraha /सत्याग्रह/",
    "grammarNotes": "सारगर्भित गद्य शैली: तत्सम पदावली एवं संयुक्त वाक्य संरचना का प्रभावी प्रयोग।",
    "vocabulary": [
      {
        "word": "जन-जागरण",
        "meaning": "जनता में नई चेतना व जागृति लाना (Mass awakening)",
        "pronunciation": "Jan-Jāgaraṇ"
      },
      {
        "word": "निर्भीकता",
        "meaning": "भय रहित होकर, साहसपूर्वक (Fearlessness)",
        "pronunciation": "Nirbhīkatā"
      }
    ],
    "exercises": [
      {
        "question": "गणेश शंकर विद्यार्थी ने कानपुर से किस प्रसिद्ध समाचार पत्र का संपादन किया था?",
        "options": ["प्रताप", "केसरी", "हरिजन", "आज"],
        "correctIndex": 0,
        "explanation": "गणेश शंकर विद्यार्थी ने सन् 1913 में 'प्रताप' समाचार पत्र का प्रकाशन किया था।"
      },
      {
        "question": "'प्रताप' समाचार पत्र का मुख्य ध्येय क्या था?",
        "options": [
          "व्यापार बढ़ाना",
          "राष्ट्रीय चेतना जगाना एवं अत्याचार का विरोध",
          "विदेशी वस्तुओं का प्रचार",
          "केवल मनोरंजन"
        ],
        "correctIndex": 1,
        "explanation": "पत्र का मुख्य उद्देश्य देश में राष्ट्रीय चेतना जगाना एवं निर्भीकता से अत्याचार का विरोध करना था।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "san-cls10-pron-1",
    "language": "sanskrit",
    "section": "pronunciation",
    "classGrade": 10,
    "title": "श्रीमद्भगवद्गीता — कर्मयोग-श्लोकानां सस्वर-उच्चारणम्",
    "difficulty": "intermediate",
    "description": "अनुष्टुप् छन्दसि भगवद्गीतायाः द्वितीय-अध्यायस्य अमर-श्लोकानां शुद्धं यति-सहितं गायनम्।",
    "contentBody": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥\n\nयोगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥\n\nउच्चारण-नियमः: श्लोकस्य पाद-चतुष्टये अष्टौ अक्षराणि भवन्ति। पञ्चमं लघु, षष्ठं गुरु च भवति।",
    "translation": "Verse chanting of Karma Yoga from the Bhagavad Gita in classical Anushtup metre.",
    "audioText": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥ योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    "phoneticGuide": "Karmaṇyevādhikāraste mā phaleṣu kadācana. Yogasthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya.",
    "grammarNotes": "सन्धि-विश्लेषणम्: कर्मणि + एव + अधिकारः + ते = कर्मण्येवाधिकारस्ते (यण्-सन्धिः एवं विसर्ग-सन्धिः)।",
    "vocabulary": [
      {
        "word": "कर्मफलहेतुः",
        "meaning": "कर्म के फल की इच्छा रखने वाला (Driven by fruits of action)",
        "pronunciation": "Karma-phala-hetuḥ"
      },
      {
        "word": "समत्वम्",
        "meaning": "सुख-दुःख व सफलता-असफलता में समान भाव (Equanimity)",
        "pronunciation": "Samatvam"
      }
    ],
    "exercises": [
      {
        "question": "गीतानुसारं 'समत्वं' किम् उच्यते?",
        "options": ["योगः", "क्रोधः", "मोक्षः", "धनम्"],
        "correctIndex": 0,
        "explanation": "'सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते' — सिद्धि और असिद्धि में समभाव ही योग है।"
      },
      {
        "question": "मनुष्यस्य कस्मिन अधिकारः अस्ति?",
        "options": ["कर्मणि एव (कर्म करने में)", "फलेषु (फल में)", "अकर्मणि (आलस्य में)", "अहंकारे"],
        "correctIndex": 0,
        "explanation": "'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन' — कर्म में ही तेरा अधिकार है, फल में कभी नहीं।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  },
  {
    "id": "san-cls12-gram-1",
    "language": "sanskrit",
    "section": "grammar",
    "classGrade": 12,
    "title": "संस्कृत-कृदन्त-तद्धित-प्रत्ययाः एवं कारक-विभक्ति-रहस्यम्",
    "difficulty": "advanced",
    "description": "क्त, क्तवतु, क्त्वा, ल्यप्, तुमुन् प्रत्ययानाम् उपपद-विभक्तीनां च पाणिनीय-सूत्राणाम् अभ्यासः।",
    "contentBody": "१. कृदन्त-प्रत्ययाः (Dhatus + Suffixes):\n• भूतकाले: 'क्त' (गतः, पठितः) एवं 'क्तवतु' (गतवान्, पठितवान्)।\n• पूर्वकालिक-क्रिया: 'क्त्वा' (पठित्वा = पढ़कर) एवं 'ल्यप्' (उपकृत्य = उपकार करके)।\n• प्रयोजनार्थे: 'तुमुन्' (पठितुम् = पढ़ने के लिए, गन्तुम् = जाने के लिए)।\n\n२. उपपद-विभक्ति-नियमाः:\n• अभितः, परितः, उभयतः, प्रति योगे द्वितीया विभक्तिः भवति। यथा — 'ग्रामं परितः वृक्षाः सन्ति।'\n• सह, साकम्, सार्धम्, विना योगे तृतीया विभक्तिः। यथा — 'रामेण सह लक्ष्मणः गच्छति।'\n• नमः, स्वस्ति, स्वाहा योगे चतुर्थी विभक्तिः। यथा — 'श्रीगणेशाय नमः।'",
    "translation": "Mastery of Paninian Kridanta suffixes, Tumun, Lyap, and Upapada Vibhakti cases in Sanskrit.",
    "audioText": "कृदन्त प्रत्ययाः: क्त, क्तवतु, क्त्वा, ल्यप्, तुमुन्। उपपद विभक्तयः: ग्रामं परितः वृक्षाः सन्ति। रामेण सह लक्ष्मणः गच्छति। श्रीगणेशाय नमः।",
    "phoneticGuide": "Kridanta Pratyaya, Upapada Vibhakti, Grāmaṁ paritaḥ, Gaṇeśāya namaḥ.",
    "grammarNotes": "पाणिनीय सूत्रम्: 'नमःस्वस्तिस्वाहास्वधालंवषड्योगाच्च' (चतुर्थी विभक्तिः)।",
    "vocabulary": [
      {
        "word": "परितः",
        "meaning": "चारों ओर (Around / On all sides — takes 2nd case)",
        "pronunciation": "Paritaḥ"
      },
      {
        "word": "गन्तुम्",
        "meaning": "जाने के लिए (In order to go — Tumun suffix)",
        "pronunciation": "Gantum"
      }
    ],
    "exercises": [
      {
        "question": "'नमः' शब्दस्य योगे का विभक्तिः प्रयुज्यते?",
        "options": ["चतुर्थी", "द्वितीया", "तृतीया", "सप्तमी"],
        "correctIndex": 0,
        "explanation": "'नमःस्वस्तिस्वाहा...' सूत्रेण नमः योगे चतुर्थी विभक्तिः भवति (यथा — शिवाय नमः)।"
      },
      {
        "question": "'ग्रामं परितः वृक्षाः सन्ति' अस्मिन् वाक्ये 'ग्रामं' पदे द्वितीया कस्मात् कारणात्?",
        "options": ["परितः योगे", "सह योगे", "वृक्षाः योगे", "नमः योगे"],
        "correctIndex": 0,
        "explanation": "'अभितः परितः उभयतः' शब्दानां योगे द्वितीया विभक्तिः भवति।"
      }
    ],
    "authorId": "system-teacher",
    "authorName": "Language Lab Faculty",
    "status": "published"
  }
];

