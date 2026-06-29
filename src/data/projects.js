// ============================================================
// All projects, split by lens. Descriptions follow one flow:
// what it does (plain) -> how it's built -> outcome / scope.
// Links are real where confirmed; GitHub repo links use the
// project's actual repo name where known.
// ============================================================

const GITHUB_USER = 'Durr-E-Amna';

export const aiProjects = [
  {
    title: 'AeroPoint',
    tagline: 'Control your PC with hand gestures',
    description:
      'Final-year research project: a virtual mouse and keyboard you operate with hand gestures through any standard webcam — moving the cursor, running OS actions, typing, and giving voice commands, all without extra hardware. Built with OpenCV and MediaPipe for hand tracking, with a trained classifier recognising seven distinct gestures.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'PyAutoGUI'],
    status: 'progress',
    featured: true,
    milestones: [
      { label: 'Proposal', date: 'Jul 2026', active: true },
      { label: 'Mid Defense', date: 'Jan 2027', active: false },
      { label: 'Final', date: 'May 2027', active: false },
    ],
    links: {},
  },
  {
    title: 'Venturiq',
    tagline: 'Idea → investor-ready business report',
    description:
      'Type in a raw startup idea and Venturiq returns a structured business report covering market, strategy, and execution — the kind a founder would take to investors. Four AI agents research and draft different sections in parallel, with a synthesis layer combining them and automatic failover so it never stalls mid-generation.',
    tags: ['React', 'Node/Express', 'Groq', 'Cerebras', 'Gemini', 'SSE'],
    status: 'live',
    featured: true,
    links: { code: `https://github.com/${GITHUB_USER}/venturiq` },
  },
  {
    title: 'MoodSpace',
    tagline: 'Find songs by describing a mood',
    description:
      'A multilingual music recommender: describe a mood or vibe in plain language, and it finds matching songs across English, Hindi, Tamil, Telugu, Malayalam, and Korean tracks. The core is a PyTorch autoencoder trained on 62,000+ tracks that compresses 9 raw audio features into a learned 4-dimensional "mood space" — beating a standard PCA baseline by 50.6% at the same compression ratio. A Groq-powered agent handles ambiguous requests by asking clarifying questions instead of guessing.',
    tags: ['PyTorch', 'FastAPI', 'Groq', 'React', 'SQLite'],
    status: 'live',
    featured: true,
    links: { code: `https://github.com/${GITHUB_USER}/MoodSpace` },
  },
  {
    title: 'SupportAI — Rafiq',
    tagline: 'AI agent that answers customer queries',
    description:
      'A customer-support chatbot for online stores that answers questions using the company\u2019s real policy documents, checks order status, and handles refunds or cancellations through tool calls — escalating to a human when it should. Built on a retrieval pipeline (RAG) so answers stay grounded in actual policies instead of being made up.',
    tags: ['LangGraph', 'Chroma', 'FastAPI', 'Groq', 'RAG'],
    status: 'live',
    featured: false,
    links: { code: `https://github.com/${GITHUB_USER}/Rafiq---AI-Customer-Support-Agent-Amazon-`},
  },
  {
    title: 'ContentAI',
    tagline: 'AI writing that gets it right first try',
    description:
      'Most AI writing tools make you keep rewriting your prompt until the result finally matches what you pictured. ContentAI flips that: you describe what you want in plain English, and it confirms your exact intent — tone, audience, format, key points — in an editable card before writing a single word. Then it generates two ready-to-use versions side by side and lets you refine either with quick one-click edits. Works for any topic in any format: blogs, emails, scripts, captions, and more. Built with React, FastAPI, and LangChain (Groq Llama 3.3), deployed live on Vercel and Render.',
    tags: ['React', 'Vite', 'FastAPI', 'LangChain', 'Groq'],
    status: 'live',
    featured: false,
    links: {
      demo: 'https://ai-content-generator-xi-ashy.vercel.app',
      code: `https://github.com/${GITHUB_USER}/ai-content-generator`,
    },
  },
  {
    title: 'CineAI',
    tagline: 'Movie recommender by title or mood',
    description:
      'A movie recommendation app: enter a film you like and it finds similar ones, or browse by genre and mood to discover something new. Uses TF-IDF and KNN to match movies on content similarity — specifically designed to solve the cold-start problem so new users with no history still get good recommendations — served through a clean, responsive interface deployed online.',
    tags: ['Python', 'Scikit-learn', 'TF-IDF', 'KNN', 'React'],
    status: 'live',
    featured: false,
    links: {
      demo: 'https://movie-recommender-kno7.vercel.app',
      code: `https://github.com/${GITHUB_USER}/movie-recommender`,
    },
  },
  {
    title: 'Speech-to-Text + Sentiment',
    tagline: 'Transcribe audio and read its emotion',
    description:
      'Turns spoken audio into text and then analyses the emotional tone behind it — so you get both the transcript and whether the speaker sounded positive, negative, or neutral. Built with audio-feature processing (Librosa) and Hugging Face transformer models for the sentiment layer.',
    tags: ['Python', 'Librosa', 'Hugging Face', 'NumPy'],
    status: 'live',
    featured: false,
    links: { code: `https://github.com/${GITHUB_USER}/speech-sentiment` },
  },
  {
    title: 'Air Quality Forecasting',
    tagline: 'Predict pollution trends, shown live',
    description:
      'A tool that forecasts air-pollution levels from environmental data so trends can be seen before they happen. Trained an XGBoost model to 85.6% accuracy through careful feature engineering on the dataset, with an interactive Streamlit dashboard visualising both live forecasts and historical patterns.',
    tags: ['Python', 'XGBoost', 'Streamlit', 'Pandas'],
    status: 'live',
    featured: false,
    links: { code: `https://github.com/${GITHUB_USER}/Air-Quality-Prediction` },
  },
];

export const fullstackProjects = [
  {
    title: 'GlowHaven',
    tagline: 'Spa & salon booking platform',
    description:
      'A full booking and management platform for a women-only spa and salon — customers browse services, book appointments, and pay online, while staff manage everything behind role-based access. Designed the flows as prototypes first, then built the real product on the MERN stack with Stripe payments (and live currency conversion), JWT authentication, and Cloudinary for optimised image delivery across 7 data models.',
    tags: ['MongoDB', 'Express', 'React', 'Node', 'Stripe', 'JWT', 'Cloudinary'],
    status: 'live',
    featured: true,
    links: { code: `https://github.com/${GITHUB_USER}/Glow-Haven` },
  },
  {
    title: 'Bahria University Portal',
    tagline: 'University portal redesign, 40+ pages',
    description:
      'A complete redesign of a university student portal across 40+ screens, covering Student, Teacher, and Admin roles — with an AI academic-advisor chatbot built in. Designed in a consistent system and built as a working React + TypeScript interface with functional navigation, buttons, and interactions throughout.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'shadcn/ui'],
    status: 'live',
    featured: true,
    links: { code: `https://github.com/${GITHUB_USER}/bahria-portal-redesign` },
  },
  {
    title: 'AutoCare',
    tagline: 'Car wash booking & service app',
    description:
      'A booking platform for a car-wash business where customers pick a service, choose a time slot, and confirm in a few taps. Built full-stack on the MERN stack with a clean, responsive flow from landing page through to booking confirmation.',
    tags: ['React', 'Node', 'Express', 'MongoDB'],
    status: 'live',
    featured: false,
    links: { code: `https://github.com/${GITHUB_USER}/autocare` },
  },
  {
    title: 'Hospital Management System',
    tagline: 'Patient records, billing & auth',
    description:
      'A full-stack system that hospital staff use to manage patient records, billing, and secure logins across several connected modules. Built the backend with Node.js and REST APIs, and wrote the SQL queries and transaction logic that keep data accurate and consistent — paired with a responsive front end over one central database.',
    tags: ['Node.js', 'SQL', 'REST APIs', 'JavaScript', 'HTML/CSS'],
    status: 'live',
    featured: false,
    links: { code: `https://github.com/${GITHUB_USER}/hospital-management-system` },
  },
  {
    title: 'Brewista',
    tagline: 'Café brand identity & UI/UX',
    description:
      'An end-to-end brand and interface design project for a premium café — from the visual identity and design system through to polished, high-fidelity screens. Focused on visual hierarchy and a cohesive look that carries across the whole experience.',
    tags: ['Figma', 'Branding', 'Design System', 'UI/UX'],
    status: 'live',
    featured: false,
    links: {},
  },
];
