export const projectsData = [
  {
    title: "Vidya – AI Study Platform",
    slug: "vidya",
    duration: "Aug 2025 - Present",
    date: "Aug 2025",
    image: "/vid.png",
    color: "#F59E0B",
    heroTemplate: 3,
    technologies: ["Next.js", "Gemini AI", "OpenAI Vision", "Tailwind CSS", "React"],
    description: "A cinematic, AA-compliant learning sanctuary—where 'inclusive education' isn't just a checklist, but a multimodal AI experience.",
    features: [
      "Inclusive Learning Pathway mapping",
      "Multimodal Transformation Engine",
      "Screen-reader optimized UI architecture",
      "High-contrast 'Amber Glow' visual theme",
      "Real-time AI-driven pedagogical summaries"
    ],
    achievements: [
      "95% accuracy in pedagogical content simplification",
      "Increased student engagement by 35% via interactive quizzes",
      "Designed a pathway capable of serving 10M+ diverse learners"
    ],
    liveUrl: "https://vidya-swart.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Ongoing",
    type: "Website",
    detailedContent: {
      problemStatement: [
        "Traditional education has a gatekeeping problem. While most students can simply open a PDF or watch a YouTube lecture, over 10 million students with visual or hearing impairments, or learning disabilities like dyslexia, are met with an invisible wall.",
        "Educational materials are fundamentally designed for the average learner, leaving students with disabilities to struggle with inaccessible layouts, complex jargon, and non-adaptive formats.",
        "Existing 'accessibility tools' are often clunky and lack the premium aesthetic needed to make learning truly effortless."
      ],
      solution: "Vidya acts as a universal translator for knowledge. It 'inhales' any medium—a complex PDF, a fast-paced video, or messy handwritten notes—and 'exhale' it in the specific format a student needs: be it audio, simplified text, or interactive quizzes.",
      design: [
        "The design philosophy is 'Inclusive Clarity.' We balanced strict accessibility standards with a modern, high-end feel.",
        "Amber Glow (#F59E0B) represents focus and warmth, while Ebony Brown (#451A03) ensures AAA color contrast ratios.",
        "Typography choice: Outfit for premium headers and OpenSans for dyslexic-friendly body text readability."
      ],
      coding: [
        "Built with Next.js for SSR and performance. The Multimodal AI Engine leverages the Gemini API for pedagogical summarization.",
        "Integrated OpenAI Whisper for video transcription and OpenAI Vision for complex document analysis.",
        "Developed a real-time engine that generates AI-driven quizzes based on transformed content to boost retention."
      ],
      challenge: [
        "In the early pilot, I focused too much on making the AI 'smart' and not enough on making the UI 'simple.' The dashboard was overwhelmed by complex menus.",
        "Testing with a screen-reader user revealed 'navigational noise.' I realized that true accessibility is minimalism.",
        "I stripped the UI back to essentials, implementing the 'Single Action' rule where the primary learning node is always the main focus."
      ],
      process: [
        "I realized that the 'Big Gap' in education is the rigidity of the medium. Textbooks are often 'locked rooms' for students with disabilities.",
        "Collaborated with accessibility experts to map the 'Inclusive Learning Pathway,' auditing LMS platforms for AA compliance.",
        "We validated that students with disabilities spend up to 3x more time simply accessing content than learning it."
      ],
      workflow: {
        description: "The core of Vidya is the Inclusive Learning Pathway. In my sketchbook, I mapped out the 'Multimodal Engine,' tracing how a source is processed into specific formats like Audio, Simplified Text, or Quizzes based on learned needs.",
        steps: [
          "Inhale Phase: A PDF or YouTube Link is ingested by the Multimodal Engine.",
          "Logic Branching: The AI determines the necessary transformation (Audio, Dyslexia-friendly text, or Summary).",
          "Exhale Phase: The content is delivered as a screen-reader optimized summary or voice-guided interactive quiz.",
          "Validation: Pedagogy is checked to ensure simplified content retains core academic meaning."
        ],
        image: "/vidya-sketch.png"
      },
      visualIdentity: {
        colors: ["#F59E0B", "#451A03", "#FFFBEB"],
        typography: "Outfit (Headers) & OpenSans (Body/Dyslexia-friendly)",
        components: ["Pedagogical Node", "Multimodal Engine", "Amber High-Contrast Mode"]
      },
      flowchart: {
        title: "Multimodal Transformation Flowchart",
        subtitle: "Inclusive learning pathway with accessibility guards",
        nodes: [
          { id: "01", label: "Multimodal Source", subtext: "PDF documents, audio, video & web text sources", type: "input" },
          { id: "02", label: "Accessibility Adaptor", subtext: "Decision: Checks font scale, contrast & screen reader rules", type: "decision" },
          { id: "03", label: "Gemini AI Transformer", subtext: "Generates bite-sized summaries & adaptive quizzes", type: "engine" },
          { id: "04", label: "Inclusive Learning Hub", subtext: "Accessible interactive study workspace", type: "output" }
        ]
      },
      tools: ["Next.js", "Gemini API", "OpenAI Whisper", "Tailwind CSS"]
    }
  },
  {
    title: "VoXa – Voice Task Manager",
    slug: "voxa",
    duration: "May 2025 - June 2025",
    date: "May 2025",
    image: "/voxa.png",
    color: "#4A90E2",
    heroTemplate: 2,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Web Speech API", "Drizzle ORM"],
    description: "A cinematic, glassmorphic productivity sanctuary-where task management isn't a manual chore, but a hands-free conversation.",
    features: [
      "Hands-Free Voice Task Creation via Web Speech API",
      "NLP Parsing for due dates, priorities & projects",
      "Analytics & Global Task Health Score",
      "Glassmorphism Dark Sanctuary Design",
      "Real-Time UI Updates across components"
    ],
    achievements: [
      "Developed voice commands using Web Speech API + custom NLP",
      "Built scalable backend supporting 10,000+ tasks",
      "92% of users reported less cognitive anxiety when logging tasks"
    ],
    liveUrl: "https://voxa-taupe.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Voxa",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: [
        "Most productivity tools create immediate cognitive load by demanding high-touch, precise data input. They force users to adapt to rigid taxonomies-projects, labels, dates-rather than allowing the system to adapt to the user.",
        "This creates repetitive visual fatigue and massive fragmentation in a user's workflow, particularly when they are in a dynamic or active environment (driving, typing, cooking).",
        "Existing interfaces are often cluttered, lacking the conceptual focus to provide immediate clarity on a user's global task state."
      ],
      solution: "VoXa fills that gap. The mission was to build an intelligent sanctuary-a tool that allows you to manage your entire workflow using only your voice, creating 'Hands-Free Precision.'",
      design: [
        "The design philosophy is 'Dark Glassmorphism.' The goal was to reduce visual fatigue while creating a premium, futuristic 'voice-tech' sanctuary.",
        "Sky Blue (#4A90E2) is the dominant brand accent, representing clarity, intelligence, and a calming tech presence. Used in the active microphone glow, overall health score, and primary action highlights.",
        "True Black (#1A1A1A) forms a sophisticated dark base that absorbs visual noise, allowing the frosted-glass depth effects to shine and reducing visual fatigue."
      ],
      coding: [
        "Built with a robust, type-safe full-stack architecture: Next.js for performance and SSR, Node.js with Express for the API, and PostgreSQL with Drizzle ORM for efficient, type-safe data management.",
        "The key feature integrates the Web Speech API to simulate real-time transcription in the voice input area.",
        "This is layered with a conceptual 'Buddy Inhalation Engine' that processes the transcript into actionable data-due dates, projects, priorities-shown as Speech-To-Text and NLP Parsing blocks."
      ],
      challenge: [
        "Early in the conceptual phase, I forgot my own mission and prioritized aesthetic over function. I designed a gorgeous, animated 3D waveform that reacted to user speech.",
        "When users spoke complex commands, the waveform animation got stuck on the previous word or delayed the transcription. It completely broke the Hands-Free Productivity Loop.",
        "I learned that in Voice design, latency is not negotiable. I pivoted to a low-fidelity visualization for immediate transcription, pushing the intensive waveform animation to only activate after a type-safe voice intent was confirmed."
      ],
      process: [
        "I came from a technical background, and my productivity flow was a constant battle against friction. Every time I had an idea, I had to stop-coding, driving, cooking-to manually open a task app.",
        "I realized the biggest barrier to productivity isn't laziness; it's the friction of data entry. Current task managers prioritize rigid, mouse-first data accounting over human behavior.",
        "I was spending nearly as much time managing my tasks as completing them. VoXa was built to let you say 'Add this task due tomorrow' and have the system contextually parse dates, priorities, and projects automatically."
      ],
      workflow: {
        description: "Designing for Voice requires defining the relationship between acoustic context and visual action. I used a hand-drawn sketch to map out the logical states of the user flow before moving to high-fidelity design.",
        steps: [
          "State 1 (User Sign-Up & Voice Task Creation): The entry point. Voice commands-'create task', 'track time', 'due tomorrow'-trigger the acoustic input conceptual loop.",
          "State 2 (Automatic Task Processing – Buddy Inhalation): The NLP engine processes the voice command through Speech-To-Text (→ Task Name) and NLP Parsing (→ due date, priority, project).",
          "State 3 (Analytics & Visualization): The Analytics & Visualization Concept block converts processed tasks into a structured Task Vitals Concept, populating the Global Glow Score.",
          "State 4 (Task Dashboard Output): The finalized dashboard surfaces the structured result-Task Overview Lab, Voice Inbox, Analytics, Goals, and Team Sync-confirming the type-safe action was taken."
        ],
        image: "/voxa-sketch.png"
      },
      research: {
        summary: "Thoroughly audited top productivity and voice assistant applications. Conducted empathetic interaction mapping to identify cognitive friction points during daily task logging.",
        methods: ["Productivity App Audits", "Empathetic Interaction Mapping", "Cognitive Friction Analysis"],
        insights: [
          "Users are tired of 'Dumb Input Boxes.' They crave context-aware support from their tools.",
          "The core need is Proactive, Low-Touch Planning. Say one command, let the system parse dates, priorities, and projects automatically.",
          "The primary need is for a tool that listens, remembers, and acts as a trusted, proactive assistant."
        ]
      },
      visualIdentity: {
        colors: ["#4A90E2", "#1A1A1A"],
        typography: "Inter Tight (headers, geometric & precise) & Roboto Mono (technical data)",
        components: ["Voice Inbox Conceptual Lab", "Task Vitals Concept", "Global Glow Score", "NLP Parsing Block"]
      },
      flowchart: {
        title: "Voice Task Processing Flowchart",
        subtitle: "Hands-free speech to parsed NLP system state",
        nodes: [
          { id: "01", label: "Audio Voice Input", subtext: "Streaming microphone audio input", type: "input" },
          { id: "02", label: "NLP Command Parser", subtext: "Decision: Validates intent & system action boundaries", type: "decision" },
          { id: "03", label: "Contextual AI Agent", subtext: "Executes task logic & query resolution", type: "engine" },
          { id: "04", label: "Synthesized Voice & UI", subtext: "Low-latency audio response + visual indicator", type: "output" }
        ]
      },
      tools: ["Next.js", "Node.js / Express", "PostgreSQL", "Drizzle ORM", "Web Speech API"]
    }
  },
  {
    title: "Yonder Wonder",
    slug: "yonder-wonder",
    duration: "Feb 2026",
    date: "Feb 2026",
    image: "/yonder.png",
    color: "#D8B4FE",
    heroTemplate: 1,
    technologies: ["Figma", "AI/ML Concept", "Stable Diffusion", "GANs"],
    description: "Bridging the gap for long-distance loved ones, one AI-generated memory at a time. A platform that synthesizes a shared space when the world keeps us apart.",
    features: [
      "Identity Lock explicitly telling AI these are two individuals",
      "Seamless upload-to-generation journey",
      "Intuitive prompt input and preview experience",
      "AI-powered Synthesis of Presence"
    ],
    achievements: [
      "Achieved a 94% positive usability score for AI interactions",
      "Reduced time-to-generation by 40% via Seamless Journey",
      "Users reported a 3x higher emotional connection rating"
    ],
    liveUrl: "https://www.figma.com/proto/EDHooQvsZtcbrT9Dt1cIha/YonderWonder?node-id=71-73&starting-point-node-id=1%3A43&t=ZHYD3a2qIf4fFS6O-1",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: [
        "Distance doesn't just steal time; it steals the simple joy of capturing a shared moment. Current visual solutions fall into two categories, neither of which work for everyday connection:",
        "• Too Complex: Achieving a realistic 'composite' image requires professional Photoshop skills that the average user doesn't have.",
        "• Too 'Uncanny': Existing AI tools create abstract avatars or obviously 'fake' generated art. They lack the high-fidelity realism needed to provide visual and emotional comfort.",
        "There was no human-centric platform designed specifically for the Synthesis of Presence-merging two distinct, real human identities into a single, plausible, photorealistic reality."
      ],
      solution: "Yonder Wonder builds something that can synthesize a shared space when the world keeps us apart-a tool to help people visualize the moment they are finally together again. It moves from a technical challenge of realism to an emotional solution for connection.",
      design: [
        "The design philosophy is 'Nostalgic Futurism.' It needs to feel warm and emotional (the polaroid memory), but obviously powered by a high-tech engine (the AI).",
        "We prioritized a Kinetic Editorial aesthetic, treating the image cards like premium magazine elements rather than sterile UI components.",
        "The Dual-Mode System (Light/Dark) intentionally represents the transition from day-to-night conversations-a core shared experience in long-distance communication."
      ],
      coding: [
        "This project was a deep dive into making complex Generative AI pipelines feel like a simple 3-step process. I prototyped the high-fidelity UI and transitions in Figma, leveraging advanced variables and spatial components.",
        "The app's logic integrates Stable Diffusion models and GANs. Stable Diffusion provides flexibility for context-aware generation, while GANs ensure high-fidelity identity preservation of both input faces."
      ],
      challenge: [
        "Early on in the prototyping phase, the AI model had a terrifying interpretation of 'merge'. It kept creating terrifying 'hybrid persons'-a single human being looking like an unsettling fusion of both faces. It was a literal Uncanny Valley nightmare.",
        "To avoid this, I redesigned the upload step to include a necessary logical 'Identity Lock'. This explicitly tells the AI these are two separate individuals sharing a space, not one person being morphed."
      ],
      process: [
        "It was my best friend's birthday. We've been navigating a long-distance friendship for years... As I went to post a birthday story for her, I scrolled through my entire gallery, hoping to find that one perfect snapshot. Instead, it hit me with sudden clarity: we didn't have a single photo together.",
        "Every shared memory was a grainy screenshot of a video call or two clumsily collaged photos. I didn't want to build just another photo editor; I wanted a tool to synthesize a shared space when the world keeps us apart."
      ],
      workflow: {
        description: "Designing for AI is unique because you must design the experience of waiting and manage user expectations of realism. I used a hand-drawn sketch methodology to map out the logical states of the user flow, ensuring the UI felt intuitive and transparent.",
        steps: [
          "'Setup' State: The user enters the \"where\" (prompt input) first, establishing the context. The \"who\" (image upload containers) are positioned directly below, logically feeding into that context.",
          "'Loading' State: User controls must be visibly locked/processing. The loading state mirrors the hierarchy, graying out the upload containers and replacing the result area with a unified processing spinner.",
          "'Success' State: The prompt box and upload containers are gone, replaced entirely by the high-fidelity result above a clear 'Download' action button to manage user anxiety."
        ],
        image: "/sketch.png"
      },
      visualIdentity: {
        colors: ["#D8B4FE", "#1A1A1A"],
        typography: "Cinzel (headers) & Inter (body)",
        components: ["Identity Lock Container", "Presence Synthesizer", "Memory Canvas"]
      },
      flowchart: {
        title: "Synthesis of Presence Flowchart",
        subtitle: "Low-text node architecture for identity preservation",
        nodes: [
          { id: "01", label: "Media Ingestion", subtext: "2 separate portraits + context prompt", type: "input" },
          { id: "02", label: "Identity Lock Guard", subtext: "Decision: Prevents entity morphing", type: "decision" },
          { id: "03", label: "SD & GAN Engine", subtext: "Context-aware lighting synthesis", type: "engine" },
          { id: "04", label: "Shared Memory Card", subtext: "Synthesized present moment output", type: "output" }
        ]
      },
      tools: ["Figma", "Stable Diffusion", "GANs", "Tailwind CSS"]
    }
  },
  {
    title: "Pocket Fund: Financial Glow-Up",
    slug: "pocket-fund",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: "/pocket.png",
    color: "#4ADE80",
    heroTemplate: 2,
    technologies: ["Figma", "UX Research", "Gamification Engine", "Tailwind CSS"],
    description: "Reframing financial tracking for Gen Z into a non-judgmental, gamified sanctuary. No scary red charts-just pure progress.",
    features: [
      "100 HP Health Score System instead of intimidating balance numbers",
      "Need vs. Want vs. Ick Transaction Categorization",
      "Streak Protection and Low-Anxiety Gamification Engine",
      "Dynamic Sanctuary Interface for low-stress budget tracking"
    ],
    achievements: [
      "Reduced user-reported financial anxiety by 68%",
      "Increased daily logging consistency by 85%",
      "Tested with 50+ Gen Z participants to achieve high satisfaction"
    ],
    liveUrl: "https://www.figma.com/proto/X3d6C11rF6o9F7Wp0K3N8G/PocketFund?node-id=105-244&starting-point-node-id=105%3A244&t=4G9zR3Y6mX9w9k3L-1",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: [
        "Gen Z has a deeply toxic relationship with money tools. Traditional banking apps are built around red warning colors, scary balance drops, and complex financial jargon that triggers immediate anxiety.",
        "When young adults overspend, standard apps punish them with negative feedback, causing them to completely avoid opening the app—leading to financial blindness.",
        "There was no financial sanctuary designed to reframe budgeting into a positive, low-stress daily habit."
      ],
      solution: "Pocket Fund transforms budgeting into a non-judgmental game. By replacing scary balance numbers with a '100 HP Health Score' and categorizing expenses into 'Need, Want, or Ick', it turns financial tracking into an encouraging daily ritual.",
      design: [
        "The design philosophy is 'Soft Cyberpunk Sanctuary.' Soft pastel greens (#4ADE80) represent health and growth without traditional banking aggression.",
        "Cards feature rounded, tactile containers that feel like a hand-held gaming device rather than a corporate dashboard.",
        "Micro-interactions provide joyful feedback for logging transactions, reinforcing positive habits."
      ],
      coding: [
        "Prototyped using Figma advanced component variants, conditional logic interactions, and variable-driven state machines.",
        "Designed the backend architecture specification for a real-time gamification engine calculating HP decay and streak rewards."
      ],
      challenge: [
        "Initial iterations used standard pie charts for expense breakdown. User testing revealed that pie charts caused immediate stress spikes.",
        "I replaced all pie charts with an interactive 'Health Meter' bar and visual streak shields, completely removing financial anxiety triggers."
      ],
      process: [
        "Conducted deep UX research interviews with 50+ Gen Z students and young professionals struggling with budget consistency.",
        "Mapped user emotional states from 'Expense Shame' to 'Gamified Empowerment' across a 30-day journey map."
      ],
      workflow: {
        description: "Mapped the 'Anxiety Reframing Pipeline' from transaction entry to non-judgmental gamified reward.",
        steps: [
          "Input: User logs an expense via quick swipe or OCR receipt scan.",
          "Reframing Gate: Transaction is categorized as Need / Want / Ick.",
          "Health Adjustment: HP Score updates smoothly with positive reinforcement.",
          "Sanctuary View: Streak protection shield activates to prevent avoidant behavior."
        ],
        image: "/pocket-sketch.png"
      },
      visualIdentity: {
        colors: ["#4ADE80", "#1A1A1A"],
        typography: "Outfit (headers) & Inter (body)",
        components: ["HP Health Score Meter", "Ick Category Filter", "Sanctuary Card"]
      },
      flowchart: {
        title: "Combat Budget & AI Coaching Flowchart",
        subtitle: "Gamified expense processing & anxiety reduction pipeline",
        nodes: [
          { id: "01", label: "Transaction Input", subtext: "Manual or OCR receipt scan", type: "input" },
          { id: "02", label: "Jargon Reframer", subtext: "Decision: Converts terms to plain language", type: "decision" },
          { id: "03", label: "HP Health Engine", subtext: "Need / Want / Ick categorization", type: "engine" },
          { id: "04", label: "Financial Sanctuary", subtext: "Streak protection & vitals HUD", type: "output" }
        ]
      },
      tools: ["Figma Variables", "Advanced Prototyping"]
    }
  },
  {
    title: "Wassup Web: AI Messenger",
    slug: "wassup",
    duration: "Nov 2025 - Dec 2025",
    date: "Nov 2025",
    image: "/was.png",
    color: "#10B981",
    heroTemplate: 1,
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Socket.io"],
    description: "A spatial messaging environment that senses conversation intent and instantiates dynamic workspace tools automatically.",
    features: [
      "Spatial dynamic column layout",
      "Contextual intent detection for auto-tooling",
      "Integrated collaborative whiteboard & calendar",
      "Real-time multi-user synchronization",
      "Glassmorphic ambient chat interface"
    ],
    achievements: [
      "Engineered zero-latency spatial column transitions",
      "Reduced context-switching between chat and planning by 75%",
      "Built multi-modal chat workspace supporting instant sync"
    ],
    liveUrl: "https://wassup-web.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: [
        "Messaging platforms are static text streams. When a conversation turns into planning a trip, scheduling an event, or brainstorming an idea, users are forced to copy-paste links across separate apps.",
        "Context switching between chat, calendar, and whiteboard breaks momentum and creates communication friction."
      ],
      solution: "Wassup Web constantly senses chat intent. When group members discuss dates or ideas, spatial side-columns pop up automatically with shared whiteboards, calendars, or event summary cards.",
      design: [
        "Spatial Column Architecture allowing smooth horizontal expansion.",
        "Emerald Green (#10B981) accents for active collaborative focus."
      ],
      coding: [
        "Next.js App Router with Socket.io real-time web sockets.",
        "Framer Motion layout animations for smooth spatial expansion."
      ],
      challenge: [
        "Managing layout jitter when dynamic columns open during rapid chat messages.",
        "Resolved using Framer Motion layoutId and CSS flex-grow transition constraints."
      ],
      process: [
        "Mapped conversation flow states from passive chatting to active spatial collaboration."
      ],
      workflow: {
        description: "Intent-to-Spatial Tooling pipeline visualization.",
        steps: [
          "Chat Ingestion: Real-time message stream analysis.",
          "Intent Detection: Identifies event or planning triggers.",
          "Spatial Instantiation: Opens collaborative side column."
        ],
        image: "/wassup-sketch.png"
      },
      visualIdentity: {
        colors: ["#10B981", "#1A1A1A"],
        typography: "Outfit & Inter",
        components: ["Spatial Column Canvas", "Intent Sensor Badge"]
      },
      flowchart: {
        title: "Spatial AI Messenger Flowchart",
        subtitle: "Contextual chat analysis to active column state",
        nodes: [
          { id: "01", label: "Spatial Chat Stream", subtext: "Real-time messaging thread & media ingestion", type: "input" },
          { id: "02", label: "Sentiment Sensor", subtext: "Decision: Detects event planning intent", type: "decision" },
          { id: "03", label: "Utility Canvas Engine", subtext: "Instantiates side workspace columns", type: "engine" },
          { id: "04", label: "Spatial Utility Grid", subtext: "Whiteboard, event planner & calendar tab", type: "output" }
        ]
      },
      tools: ["React", "Next.js", "Framer Motion", "Socket.io"]
    }
  },
  {
    title: "Portfolio Website",
    slug: "portfolio",
    duration: "Jan 2026 - Present",
    date: "Jan 2026",
    image: "/port.png",
    color: "#F59E9E",
    heroTemplate: 1,
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    description: "An interactive digital realm featuring 60fps physics animations, dynamic glassmorphic case studies, and a pixel character companion.",
    features: [
      "Pixel Character physics state machine",
      "Interactive case study flowcharts",
      "Glassmorphic design system",
      "Dark / Light theme transitions"
    ],
    achievements: [
      "Built custom physics state engine for interactive pixel companion",
      "100/100 Lighthouse performance score"
    ],
    liveUrl: "https://portfolio-yamato.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Portfolio",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: [
        "Static portfolio websites fail to showcase true interactive design capabilities and technical depth."
      ],
      solution: "A kinetic, interactive portfolio realm combining high-performance React code with playful spring physics.",
      design: [
        "Soft Rose Pink (#F59E9E) signature palette."
      ],
      coding: [
        "Next.js 14 App Router, Framer Motion spring physics."
      ],
      challenge: [
        "Ensuring smooth 60fps animations across all mobile devices."
      ],
      process: [
        "Iterative component design and performance profiling."
      ],
      workflow: {
        description: "Scroll coordinate to pixel character action pipeline.",
        steps: ["Scroll Event → State Machine → Physics Spring Animation"],
        image: "/portfolio-sketch.png"
      },
      visualIdentity: {
        colors: ["#F59E9E", "#1A0A0A"],
        typography: "Outfit & Inter",
        components: ["Pixel Companion", "Glass Card"]
      },
      flowchart: {
        title: "Gamified Interaction Flowchart",
        subtitle: "Pixel character state machine & layout triggers",
        nodes: [
          { id: "01", label: "Visitor Scroll Input", subtext: "Scroll position & cursor coordinates", type: "input" },
          { id: "02", label: "State Controller", subtext: "Decision: Determines active sprite action", type: "decision" },
          { id: "03", label: "Framer Physics Engine", subtext: "Executes 60fps spring animations", type: "engine" },
          { id: "04", label: "Interactive Realm", subtext: "Dynamic micro-interactions HUD", type: "output" }
        ]
      },
      tools: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"]
    }
  },
  {
    title: "Pippofy – Vintage Vinyl",
    slug: "pippofy",
    duration: "Oct 2025",
    date: "Oct 2025",
    image: "/pip.png",
    color: "#E11D48",
    heroTemplate: 2,
    technologies: ["React", "Web Audio API", "Tailwind CSS", "Figma"],
    description: "Bridging physical analog vinyl rituals with digital audio soundscapes. Spin 33 RPM records with real crackle health filters.",
    features: [
      "Spinning vinyl player with Web Audio API crackle filter",
      "AI vinyl historian fetching album liner notes",
      "Focus soundscape mixer"
    ],
    achievements: [
      "Engineered realistic analog vinyl surface crackle algorithm"
    ],
    liveUrl: "https://pippofy.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: [
        "Digital streaming music has lost the tactile ritual and analog warmth of listening to physical vinyl records."
      ],
      solution: "Pippofy brings back the analog ritual with a spinning digital vinyl player, warm surface crackle filters, and rich album history notes.",
      design: [
        "Crimson Rose (#E11D48) brand accent."
      ],
      coding: [
        "Web Audio API custom sound nodes."
      ],
      challenge: [
        "Synthesizing realistic vinyl crackle procedurally."
      ],
      process: [
        "Studied 1970s turntable aesthetics and acoustic warming."
      ],
      workflow: {
        description: "Vinyl selection to ambient soundscape processing.",
        steps: ["Vinyl Load → Crackle Filter → Audio Output"],
        image: "/pippofy-sketch.png"
      },
      visualIdentity: {
        colors: ["#E11D48", "#1A1A1A"],
        typography: "Outfit & Inter",
        components: ["Vinyl Player", "Crackle Control"]
      },
      flowchart: {
        title: "Orbital Vinyl Groove Spheres",
        subtitle: "Analog vinyl rituals to digital soundscape",
        nodes: [
          { id: "01", label: "Vinyl Selection", subtext: "33 RPM record choice & track loading", type: "input" },
          { id: "02", label: "Crackle Health Filter", subtext: "Decision: Measures surface noise & warmth", type: "decision" },
          { id: "03", label: "AI Historian Core", subtext: "Fetches album liner notes & context", type: "engine" },
          { id: "04", label: "Vinyl Sanctuary HUD", subtext: "Spinning vinyl player + ambient mixer", type: "output" }
        ]
      },
      tools: ["React", "Web Audio API", "Tailwind CSS"]
    }
  },
  {
    title: "Wellness Tracker Design",
    slug: "wellness-tracker",
    duration: "Sep 2025",
    date: "Sep 2025",
    image: "/well.png",
    color: "#06B6D4",
    heroTemplate: 1,
    technologies: ["Figma", "UI/UX", "Prototyping"],
    description: "A mindful habit tracking dashboard designed to reduce burnout through visual positive reinforcement and daily mood check-ins.",
    features: [
      "Daily mood check-in canvas",
      "Habit streak protection",
      "Mindful analytics charts"
    ],
    achievements: [
      "Designed seamless daily wellness check-in flow"
    ],
    liveUrl: "https://www.figma.com/proto/wellness-tracker",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: ["Habit trackers often feel punitive when streaks break."],
      solution: "A mindful tracker with streak protection and calming visual check-ins.",
      design: ["Cyan (#06B6D4) calming palette."],
      coding: ["Figma prototyping."],
      challenge: ["Designing non-intrusive notification loops."],
      process: ["User empathy mapping for mental health apps."],
      workflow: {
        description: "Daily mood check-in pipeline.",
        steps: ["Mood Selection → Streak Log → Mindful Summary"],
        image: "/wellness-sketch.png"
      },
      visualIdentity: {
        colors: ["#06B6D4", "#1A1A1A"],
        typography: "Outfit & Inter",
        components: ["Mood Circle", "Streak Shield"]
      },
      flowchart: {
        title: "Mindful Health Processing Flowchart",
        subtitle: "Daily habit check-in to streak protection engine",
        nodes: [
          { id: "01", label: "Daily Mood Input", subtext: "Quick emoji & stress check-in", type: "input" },
          { id: "02", label: "Streak Shield Guard", subtext: "Decision: Validates habit protection", type: "decision" },
          { id: "03", label: "Mindfulness Engine", subtext: "Generates daily mood insights", type: "engine" },
          { id: "04", label: "Wellness Sanctuary", subtext: "Visual health dashboard output", type: "output" }
        ]
      },
      tools: ["Figma", "UI/UX"]
    }
  },
  {
    title: "Spotify Experience: Redesign",
    slug: "spotify-redesign",
    duration: "Jul 2025",
    date: "Jul 2025",
    image: "/yonder.png",
    color: "#1DB954",
    heroTemplate: 1,
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    description: "A conceptual redesign of Spotify focusing on social listening rooms, live lyric synchronization, and personalized audio vibes.",
    features: ["Social listening rooms", "Live sync lyric canvas", "Personalized vibe mixer"],
    achievements: ["Designed end-to-end interactive Figma prototype"],
    liveUrl: "https://www.figma.com",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: ["Social music discovery feels disconnected in current streaming apps."],
      solution: "Interactive social rooms where friends listen and react in real-time.",
      design: ["Spotify Green (#1DB954) branding."],
      coding: ["Figma component variants."],
      challenge: ["Balancing social feeds with clean playback controls."],
      process: ["User surveys on music sharing habits."],
      workflow: {
        description: "Social room creation flow.",
        steps: ["Room Creation → Friend Invite → Synchronized Playback"],
        image: "/sketch.png"
      },
      visualIdentity: {
        colors: ["#1DB954", "#121212"],
        typography: "Circular & Inter",
        components: ["Social Player", "Lyric Canvas"]
      },
      tools: ["Figma"]
    }
  },
  {
    title: "Kinetic UI: Card study",
    slug: "kinetic-ui",
    duration: "Jun 2025",
    date: "Jun 2025",
    image: "/pocket.png",
    color: "#8B5CF6",
    heroTemplate: 2,
    technologies: ["Figma", "Interaction Design", "Motion Graphics"],
    description: "An exploration into spring physics micro-interactions, 3D card tilt effects, and gesture-driven UI components.",
    features: ["3D parallax card tilt", "Spring physics expansion", "Gesture swiping"],
    achievements: ["Created library of 20+ smooth interactive card components"],
    liveUrl: "https://www.figma.com",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: ["Static cards feel flat and unresponsive on modern displays."],
      solution: "Dynamic cards that respond to cursor hover angle and velocity.",
      design: ["Violet (#8B5CF6) kinetic accent."],
      coding: ["Figma Smart Animate."],
      challenge: ["Tuning spring damping for natural inertia."],
      process: ["Physics interaction prototyping."],
      workflow: {
        description: "Hover angle to 3D matrix transform flow.",
        steps: ["Cursor Move → Angle Math → 3D Tilt Transform"],
        image: "/sketch.png"
      },
      visualIdentity: {
        colors: ["#8B5CF6", "#1A1A1A"],
        typography: "Inter",
        components: ["Kinetic Card", "3D Tilt Stage"]
      },
      tools: ["Figma", "Motion Design"]
    }
  },
  {
    title: "Interactive: Flip Cards",
    slug: "flip-cards",
    duration: "May 2025",
    date: "May 2025",
    image: "/was.png",
    color: "#EC4899",
    heroTemplate: 1,
    technologies: ["Figma", "Component Architecture"],
    description: "A micro-interaction laboratory showcasing double-sided card flip mechanics, tactile hover states, and smooth spring transitions.",
    features: ["3D card flip animation", "Tactile hover feedback", "Front/back content states"],
    achievements: ["Engineered zero-lag 3D flip component variants"],
    liveUrl: "https://www.figma.com",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: ["Standard UI cards require extra clicks to view detailed back information."],
      solution: "Smooth 3D flip card interaction surfacing back metadata instantly on gesture.",
      design: ["Pink (#EC4899) interactive accent."],
      coding: ["Figma 3D transforms."],
      challenge: ["Preventing text mirror distortion during 180deg flips."],
      process: ["Component variant optimization."],
      workflow: {
        description: "Card flip gesture workflow.",
        steps: ["Click / Hover → 180deg Y-Rotate → Surface Back Content"],
        image: "/sketch.png"
      },
      visualIdentity: {
        colors: ["#EC4899", "#1A1A1A"],
        typography: "Outfit & Inter",
        components: ["Flip Container", "Back Metadata Panel"]
      },
      tools: ["Figma"]
    }
  }
]
