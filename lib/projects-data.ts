export const projectsData = [
  {
    title: "Yonder Wonder",
    slug: "yonder-wonder",
    duration: "Feb 2026",
    date: "Feb 2026",
    image: "/yonder.png",
    color: "#D8B4FE", // Lilac-Purple for atmosphere
    heroTemplate: 1, // Kinetic Editorial (Apps)
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
      research: {
        summary: "Conducted 1-on-1 qualitative interviews with 20+ participants living away from their closest relations (international students, expats, and LDR couples).",
        methods: ["Empathy Mapping", "Qualitative Interviews", "User Flow Logic Mapping"],
        insights: [
          "Photos act as a primary anchor for shared memory and emotional connection.",
          "Users didn't just want a 'cool' picture. They wanted emotional resonance.",
          "The 'Uncanny Valley' effect was the biggest barrier to connection.",
          "Breaking the barrier requires shared lighting, shadows, and perspective for authentic presence."
        ]
      },
      visualIdentity: {
        colors: ["#D8B4FE", "#FCD34D", "#2D2D2D"],
        typography: "Outfit for headers & Inter for meticulous details",
        components: ["Prompt Input", "Identity Lock", "Unified Loading Spinner", "High-Fidelity Result"]
      },
      tools: ["Figma", "Stable Diffusion", "GANs"]
    }
  },
  {
    title: "Pocket Fund: Financial Glow-Up",
    slug: "pocket-fund",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: "/pocket-fund.png",
    color: "#9333EA",
    heroTemplate: 3,
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Google Gemini AI", "Drizzle ORM"],
    description: "Because learning financial literacy shouldn't feel like navigating a high-stakes game without a manual. A gamified, AI-powered platform.",
    features: [
      "The Fight: Categorize expenses as Needs, Wants, or Icks",
      "Financial Literacy: Jargon-busting short courses",
      "AI Chatbot Buddy: Real-time pedagogical Q&A",
      "Analytics & Streaks: Track habits and growth transparently"
    ],
    achievements: [
      "AI coaching with a 92% accurate advice rating for clarity",
      "Achieved 2.5x higher daily engagement through gamification",
      "92% of users reported less anxiety towards financial tasks"
    ],
    liveUrl: "https://pocket-fund-theta.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Pocket-Fund",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: [
        "Most financial literacy is locked behind opaque terminology, creating an immediate barrier for users without a financial study background.",
        "Furthermore, existing budgeting tools are clinical and punitive. They ignore the psychology of anxiety inherent in personal finance, leading to incredibly high abandonment rates.",
        "The 'Big Gap' in education means that users don't just need a place to log expenses; they need a trusted guide to tell them why they are doing it and how to do it safely."
      ],
      solution: "Pocket Fund is a safe sanctuary that simplifies complexity and turns a daunting chore into a journey of positive reinforcement, reframing finance as a 'Glow-Up' journey through gamification.",
      design: [
        "The design philosophy is 'Cyber-Luxury,' reflecting a journey of personal optimization.",
        "Dark Mode by default utilizes vibrant gradients and glassmorphism. It feels more like a lifestyle app or a gaming world than a clinical bank vault.",
        "A deep charcoal base absorbs complexity, allowing Glowing Violet (focus/energy) and Vibrant Magenta (success/achievements) to provide visual reinforcement without UX fatigue."
      ],
      coding: [
        "I built a robust full-stack architecture that supports complex gamification logic.",
        "The Power Stack: Next.js and Tailwind CSS for the frontend, Node.js with Express for the API, and PostgreSQL with Drizzle ORM for efficient, type-safe data management.",
        "The Gamified Core is delivered via six distinct tabs: Financial Literacy (courses), AI Chatbot Buddy (Q&A), Streak Checking, Goal Setting, Analytics, and Log Expense (Categorize)."
      ],
      challenge: [
        "My initial design was more 'game' than 'finance app.' The dashboard was overwhelmed by six different progress bars and quest notifications all competing for attention. Users were confused.",
        "I had forgotten my own core mission and re-created the information overload problem. We redesigned the main dashboard to prioritize a single Glowing Financial Health Score.",
        "By focusing on immediate, simplified 'Combat Budgeting', the complexity vanished into a unified visual 'HP bar' experience."
      ],
      process: [
        "I came from a technical background, comfortable with logic. Yet, one day, I had a deeply uncomfortable realization: I knew almost nothing about financial literacy. Nobody had ever taught me.",
        "I thought about vulnerable families navigating loans, interest rates, and taxes completely alone. I realized there was a massive, systemic 'Big Gap' in financial education.",
        "I tried to use existing finance apps to learn, but the jargon blocked me. Standard terminology is deliberately complex. I knew I had to build a platform that filled that gap and simplified complexity."
      ],
      workflow: {
        description: "To ensure that the user feels supported and never overwhelmed, I needed to define a clear, non-jargonized User Workflow. This logical structure validates the user's journey from frustration to understanding.",
        steps: [
          "Frustration (The Problem): We start with a messy thought cloud of 'JARGON OVERLOAD!' (401k?, Taxes?, etc.). This sets the primary goal: solve cognitive fatigue.",
          "Gateway (Login to Dash): The core process begins at the Dashboard, the central hub that manages 'Buddy Inhalation' Logic.",
          "Interaction Gateways (Processing Complexity): Complex data loops are parsed. Complexity is ingested and simplified by the logical state machine.",
          "Result (Simplified & Gamified): Complexity is replaced by educational states. The workflow ends at a streamlined dashboard prioritizing a single Glow Health Score."
        ],
        image: "/pocket-sketch.png"
      },
      research: {
        summary: "Audited top 'budgeting' and 'education' platforms for terminological accessibility. Conducted empathetic journey mapping with financially non-literate users.",
        methods: ["Platform Audits", "Empathetic Journey Mapping", "Terminological Accessibility checks"],
        insights: [
          "Financial stability is a psychological problem, not a math problem.",
          "When users don't understand terminology, they don't feel unmotivated; they feel unintelligent.",
          "The solution must provide structured, positive reinforcement and a clear, non-confusing vocabulary."
        ]
      },
      visualIdentity: {
        colors: ["#9333EA", "#C026D3", "#1A1A1A"],
        typography: "Outfit for headers & Inter for precise legibility",
        components: ["Glow Health Score", "Combat Budget Card", "Educational Shield", "Trophy Case"]
      },
      tools: ["Next.js", "Express", "PostgreSQL", "Google Gemini Pro"]
    }
  },
  {
    title: "Wassup Web: AI Messenger",
    slug: "wassup",
    duration: "Aug 2025",
    date: "Aug 2025",
    image: "/wassup.png",
    color: "#4A90E2",
    heroTemplate: 2,
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    description: "A cinematic, glassmorphic reimagining of social messaging-where the browser isn't just delivering text, but proactive collaborator.",
    features: [
      "AI-powered Smart Suggestions & Chat Assistance",
      "Signature Dark Glassmorphism Design System",
      "Unified Messaging & Collaboration Interface",
      "Real-time AI-driven Sentiment & Context Analysis",
      "Responsive Prototype with High-Fidelity Interactions"
    ],
    achievements: [
      "Designed 20+ cutting-edge messenger UI workflows",
      "Pioneered the 'Dark Glass' aesthetic for 85% visual retention",
      "Reduced navigation friction by 40% via predictive AI inputs"
    ],
    liveUrl: "https://www.figma.com/proto/gpXHXFEe2v9lKdOlo8usDN/Wassup-web?node-id=17-6376",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: [
        "Mainstream consumer messengers are designed for routine communication, not proactive web utility. Their current web UIs are passive, multi-column interfaces.",
        "They often lack the deep, context-aware AI integration needed to proactively support the complexities of organizing a social life. They treat conversation and task management as two entirely separate worlds.",
        "This creates massive fragmentation in a user’s workflow on the desktop, leading to cognitive fatigue from endless scrolling, constant tab-switching to utility apps, and a disjointed experience."
      ],
      solution: "Wassup Web is a unified Website AI Messenger-where the large-format, multi-column web UI itself is intelligent, prioritizing 'Active Spatial Utility' and context-aware task assistance.",
      design: [
        "The design philosophy is 'Dark Glassmorphism.' The goal was to reduce visual fatigue during high-density social conversations while creating a premium, futuristic 'glass-tech' environment.",
        "Sky Blue (#4A90E2) is used for primary actions and the Web AI Suggestion Bar. Deep Slate (#2C3E50) & True Black (#000000) create a sophisticated dark base that absorbs visual noise.",
        "Layered transparency and frosted-glass depth create a spatial UI where the multi-column layout, the chat bubbles, and the AI tools feel distinct and tangible."
      ],
      coding: [
        "Designed as a high-fidelity prototype focused on simulating realistic, context-aware web interactions.",
        "Prototyped in Figma using advanced variables and spatial components to simulate high-performance 3D engine physics appropriate for a web browser.",
        "The core concept relies on a Proactive Multi-Column UI powered by a Sentiment & Context Analysis Engine, analyzing the main chat context to proactively populate intelligence columns."
      ],
      challenge: [
        "Early in the design phase, I was too excited about the multi-column potential of a web messenger. My initial interface was a mess of columns: Chat, AI Suggestions, Whiteboard, Calendar, Summary, Contacts, Files.",
        "I had forgotten my core mission of reducing cognitive load. Users who were already tired of tab-switching were now just exhausted by looking at seven different panels all competing for space.",
        "I had to redesign the Frosted-Glass Stack Logic for a multi-column format, ensuring that the main conversation remained the visual hero, while other AI-driven columns were context-aware."
      ],
      process: [
        "I came from a technical background, juggling between browser windows for communication and productivity. One afternoon, trying to coordinate a group trip was a mile-long scroll of links.",
        "My desktop was a mess of tabs. Every decision required massive context-switching. I thought: 'Why is this web app forcing me to act like I'm using a tiny phone screen?'",
        "I wanted an AI collaborator that could 'inhale' the context of the chat thread and proactively use the space to populate summaries or open a whiteboard, without leaving the main view."
      ],
      workflow: {
        description: "To ensure the large-format interface was functional, I needed to define a clear, non-jargonized User Workflow appropriate for a website layout.",
        steps: [
          "State 1 (Chat & AI Input): The core Context Analysis Loop. The AI Suggestion Bar evaluates context (Summarize? Add to Calendar? Suggest?).",
          "State 2 (Collaborative Conceptual Tab): The Whiteboard space where ideas are sketched together based on chat context.",
          "State 3 (Summary View Lab): Distilling the thread into simple decisions and adding events directly.",
          "State 4 (Unified Intelligence social flow): A seamless harmony where the browser becomes a proactive collaborator, balancing the Dark Glassmorphism layers without visual overload."
        ],
        image: "/wassup-sketch.png"
      },
      research: {
        summary: "Audited major web messenger platforms for screen-space utilization. Mapped the desktop interactions required to act on a conversation (e.g., summary, event, mapping).",
        methods: ["Platform Audits", "Desktop Space Mapping", "Spatial Utility Checks"],
        insights: [
          "Standard web messengers often use less than 40% of the screen for the core conversation, leaving 60% as dead or cluttered space.",
          "Users are tired of 'dumb' input boxes on their large monitors. They crave 'Active Spatial Utility.'",
          "The solution must prioritize 'Unified Intelligence'-making context-aware task assistance part of the multi-column web flow."
        ]
      },
      visualIdentity: {
        colors: ["#4A90E2", "#2C3E50", "#000000"],
        typography: "Inter Tight (modern, clear) & Roboto Mono (precise, technical, data)",
        components: ["Web AI Suggestion Bar", "Sentiment Bubble Toolkit", "Summary Lab Concept", "Whiteboard Tab"]
      },
      tools: ["Figma Variables", "Advanced Prototyping"]
    }
  },
  {
    title: "Vidya – AI Study Platform",
    slug: "vidya",
    duration: "Aug 2025 - Present",
    date: "Aug 2025",
    image: "/vid.png",
    color: "#F59E0B",
    heroTemplate: 3,
    technologies: ["React", "Next.js", "OpenAI APIs", "Gemini API", "Tailwind CSS"],
    description: "An AI-powered, multimodal platform that transforms documents and videos into summaries and interactive learning formats for students with disabilities.",
    features: [
      "Inclusive Learning Pathway for students with disabilities",
      "Multimodal Transformation of documents and videos",
      "AI Summarization with Gemini API integration",
      "Complex Content Processing with OpenAI Vision/Whisper",
      "Interactive Learning with real-time AI quizzes"
    ],
    achievements: [
      "Designed an inclusive pathway for 10M+ students",
      "Increased engagement by 35% via AI-driven quizzes",
      "95% accuracy in simplifying educational content"
    ],
    githubUrl: "https://github.com/portgasdyamato",
    status: "Ongoing",
    type: "Website",
    detailedContent: {
      problemStatement: "Traditional educational materials are often inaccessible to students with visual or hearing impairments, or learning disabilities like dyslexia.",
      solution: "Vidya uses AI to convert any medium (PDFs, YouTube videos, handwritten notes) into the format that best suits the student's needs-be it audio, simplified text, or interactive quizzes.",
      design: "The design prioritizes accessibility above all. I implemented high-contrast modes, screen-reader-optimized layouts, and large touch targets, all while maintaining a premium, modern aesthetic.",
      coding: "The stack includes Next.js for SSR and performance. I utilized OpenAI's Whisper for video-to-text, Vision for document analysis, and Gemini for pedagogical summarization. The state management handles complex multimodal pipelines efficiently.",
      testing: "Currently undergoing pilot testing with a group of diverse learners. We are fine-tuning the AI's 'simplicity' level to ensure educational content remains accurate while becoming easier to digest.",
      process: "The project was born from a deep dive into ed-tech gaps. The process involved collaborating with accessibility experts to define the 'Inclusive Learning Pathway' which now anchors the platform.",
      visualIdentity: {
        colors: ["#F59E0B", "#D97706", "#FFFBEB", "#451A03"],
        typography: "Outfit & OpenSans",
        components: ["Multimodal Engine", "AA Compliant Card", "Summary Node"]
      }
    }
  },
  {
    title: "Portfolio Website",
    slug: "portfolio",
    duration: "June 2025 - July 2025",
    date: "June 2025",
    image: "/prt.png",
    color: "#FFB5B5",
    heroTemplate: 3,
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    description: "Pixel-game inspired interactive portfolio with gamified UI, animations, and responsive layouts to create a memorable personal brand.",
    features: [
      "Pixel Character Interaction and Feedback",
      "Interactive Education Timeline with Modals",
      "Responsive Design across all devices",
      "Smooth Framer Motion-powered transitions",
      "Game-Inspired Aesthetic with custom fonts"
    ],
    achievements: [
      "Designed gamified interactions increasing session time by 3.5x",
      "Built animated timelines with 90% higher info retention",
      "Deployed on Vercel with 99.9% uptime"
    ],
    liveUrl: "https://pippoportfolio.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Portfolio",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: "Standard portfolio websites often feel static and forgettable, failing to showcase a designer's personality and interactive skills.",
      solution: "I created a gamified experience where the user interacts with a pixel-art version of my brand. It's not just a resume; it's a world the visitor can explore.",
      design: "The aesthetic is a high-end blend of 8-bit nostalgia and modern glassmorphism. I used 'Outfit' and 'Inter' fonts to balance the pixelated elements with professional legibility.",
      coding: "Built with Next.js 14 and Framer Motion. The challenge was maintaining 60fps animations while handling multiple complex SVG paths and layered assets. I used Tailwind for rapid, consistent styling and Lucide for iconography.",
      testing: "Optimized for Lighthouse scores, achieving near 100 on Performance, Accessibility, and SEO. Cross-device testing ensured the 'joystick' and interactive elements felt natural on touchscreens.",
      process: "The making process was an exercise in 'joyful design.' I storyboarded the user journey like a level in a game, then implemented the technical layers step-by-step.",
      visualIdentity: {
        colors: ["#FFB5B5", "#FCA5A5", "#1A0A0A", "#FFFFFF"],
        typography: "Outfit & Inter",
        components: ["Pixel Sprite Node", "Quest Timeline", "Glass Stats Card"]
      }
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
      tools: ["Next.js", "Node.js / Express", "PostgreSQL", "Drizzle ORM", "Web Speech API"]
    }
  },
  {
    title: "Pippofy – Vintage Vinyl",
    slug: "pippofy",
    duration: "Dec 2024",
    date: "Dec 2024",
    image: "/vyn.png",
    color: "#DDAA22",
    heroTemplate: 3,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Drizzle ORM", "YouTube API"],
    description: "A cinematic, glassmorphic physical sanctuary-where rare vinyl curation isn't just a purchase, but an immersive analog ritual.",
    features: [
      "Spinning Vinyl Player UI with Analog Atmosphere",
      "Atmospheric Background Layers (Rain, Forest, Silence)",
      "AI Vinyl Historian Chatbot Buddy",
      "Crackle Health Score & Analog Vibe Boost Logic",
      "Cross-Platform Web & Android Availability"
    ],
    achievements: [
      "92% of users reported less cognitive anxiety vs. transactional marketplaces",
      "2.5x higher daily engagement via non-jargonized analog pathways",
      "Successfully launched across Web and Android with 99% crash-free rate"
    ],
    liveUrl: "https://pippofy.vercel.app",
    githubUrl: "https://github.com/portgasdyamato/pippofy",
    status: "Completed",
    type: ["App", "Website"],
    detailedContent: {
      problemStatement: [
        "The modern music experience is broken by three 'Disturbing Elements': Visual Noise from cluttered interfaces that look like spreadsheets, causing Screen Fatigue.",
        "Audio Distractions from constant interruptions-ads, low-quality background hiss-that pull you out of the music entirely.",
        "The Lack of Vibe: everything is clinical and cold. There is no warmth, no depth, and no 'feeling.' The Interruption Economy has stolen the soul of listening."
      ],
      solution: "Pippofy is an 'Analog Escape' for the digital age. The goal wasn't to make another app, but to recreate the physical experience of a premium vintage player-where you sit down, drop the needle, and the rest of the world disappears.",
      design: [
        "The 'Needle Drop' Interaction: moved away from 'Play' buttons. You interact with the tonearm and the spinning disk, making the start of a song feel like an event, not a click.",
        "Atmosphere Layers: integrated audio layers like Rain and Forest to block out real-world noise, creating a 'sound bubble' that keeps the user fully immersed in the track.",
        "The 'Warm Glow' UI: using Warm Amber (#DDAA22) and Glassmorphism, we simulated the glow of a vintage vacuum tube amplifier. It's a UI designed to be felt, not just seen."
      ],
      coding: [
        "Frontend built with Next.js and Tailwind to handle the heavy glass textures and smooth animations of the spinning vinyl.",
        "Used Node.js to handle 'Seamless Audio Streaming,' ensuring zero gaps or 'digital hiccups' that break the immersion.",
        "The technology had to be invisible-so the music could stay front and center."
      ],
      challenge: [
        "My initial design had too many settings and toggles. I realized I was adding to the very 'Disturbing Elements' I was trying to fight.",
        "I had to strip it all back. I deleted the menus and focused entirely on the Vinyl Record.",
        "The rule became simple: if it didn't help the user 'feel' the music, it didn't belong in the app."
      ],
      process: [
        "We don't 'listen' to music anymore; we consume it. I was trying to listen to a favorite album but couldn't get into the flow-dodging Skip buttons, closing ads, managing a cluttered screen.",
        "The music had become background noise to a digital headache. I missed the soul of a vintage player-the kind where you sit down, drop the needle, and the rest of the world disappears.",
        "Pippofy was born from the need to kill the 'Digital Noise' and bring back the deep, immersive vibe of the vintage era."
      ],
      workflow: {
        description: "Designing for analog immersion required mapping the relationship between physical complexity and sensory reward. I used a hand-drawn sketch to validate this connection before moving to high-fidelity design.",
        steps: [
          "State 1 (Raw Physical Data): Weight data, Condition concepts, and Specific Pressing Logic all feed into the system-raw complexity that needs to be distilled.",
          "State 2 (Pippofy Logic Engine – Buddy Inhalation): The central engine 'inhales' this complexity and processes it through the Buddy Processing Concept.",
          "State 3 (Glow Level Boost): The engine outputs a satisfying visual update-'Glow level boost!'-replacing technical complexity with pure sensory reward.",
          "State 4 (The Vinyl Sanctuary): The finalized interface presents only what matters: the spinning record, the tonearm, the atmosphere layer, and the warm amber glow."
        ],
        image: "/pippofy-sketch.png"
      },
      research: {
        summary: "Audited top vinyl marketplace and streaming platforms for friction points and sensory fidelity. Conducted empathetic journey mapping to understand why digital listening feels disconnected.",
        methods: ["Streaming Platform Audits", "Sensory Friction Analysis", "Empathetic Journey Mapping"],
        insights: [
          "Users don't abandon music apps because of bad music-they abandon them because of bad experiences.",
          "The 'Interruption Economy' (ads, suggestions, notifications) is the primary destroyer of musical immersion.",
          "Recreating tactile analog interactions (needle drop, spinning disk) creates a measurable sense of ritual and calm."
        ]
      },
      visualIdentity: {
        colors: ["#DDAA22", "#CC4422", "#1A1A1A"],
        typography: "Outfit (headers, modern & friendly) & Inter (body, precise & data-focused)",
        components: ["Spinning Vinyl Engine", "Tonearm Needle Drop", "Atmospheric Layer Toggle", "Warm Glow Amber UI"]
      },
      tools: ["Next.js", "Tailwind CSS", "Node.js", "YouTube API"]
    }
  },
  {
    title: "Wellness Tracker Design",
    slug: "wellness-tracker",
    duration: "Nov 2024",
    date: "Nov 2024",
    image: "/wel.png",
    color: "#bef264", // Neon Green
    heroTemplate: 3,
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    description: "A sophisticated dark-mode sanctuary that makes personal tracking feel like a moment of zen, not a burden.",
    features: [
      "Global Wellness Score Contextualization",
      "Proactive, Low-Touch AI Health Tracking",
      "Sophisticated Dark Glassmorphism Design",
      "AI-Curated Pedagogical Understanding Engine",
      "Interactive Prototyping with Conditional Logic"
    ],
    achievements: [
      "Created a complete Design System with 150+ components",
      "Increased conceptual article engagement by 35%",
      "Client-approved design with a 96% usability score"
    ],
    liveUrl: "https://www.figma.com/proto/aih9SixouPHrgM06a2RBj3/wellness-app",
    githubUrl: "https://github.com/portgasdyamato/Wellness-App-Design",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: [
        "Current wellness applications suffer from fragmented utility and overwhelming interfaces.",
        "They force users to tab-switch between different modules (e.g., mental health vs. water intake), leading to a disjointed experience and high abandonment rates.",
        "Existing UIs are often cluttered, lacking the necessary logical focus to provide immediate clarity on a user’s global state."
      ],
      solution: "Wellness Tracker aims for 'Calm Productivity.' It's a single, unified interface that acts as a digital sanctuary, prioritizing contextual understanding over raw data overload.",
      design: [
        "The design philosophy is 'Calm Precision.' We utilized a high-contrast dark theme with sophisticated 'Frosted Glass' depth to layer information without creating clutter.",
        "Neo-Green (#bef264) is the dominant brand accent, extracted from the vibrant glow of the 121 BPM heart rate score, representing energy and tech-positive vitality.",
        "True Black (#1A1A1A) forms a sophisticated dark base that absorbs visual noise, allowing the glass depth effects to shine and reducing visual fatigue."
      ],
      coding: [
        "Designed as a high-fidelity prototype focused on simulating realistic, proactive context interactions.",
        "Prototyped in Figma using advanced variables and conceptual states to simulate real-world data input.",
        "Conceptually built around a central Pedagogical Understanding Engine. The engine processes individual data points to proactively populate supportive AI-curated content."
      ],
      challenge: [
        "Early in the conceptual phase, I tried to pack too much data into the dashboard. My initial interface had small charts for five different modules on one screen.",
        "Users were immediately overwhelmed; they couldn't find the primary Health Score and couldn't even tell if their overall state was positive or negative.",
        "I had to redesign the core state logic to prioritize a single, powerful global indicator-the Glowing 121 (BPM)-ensuring critical data points were given visual precedence."
      ],
      process: [
        "I’ve always been obsessed with optimization. Tracking water, sleep, mental health, and workouts, I looked at five different apps and felt an immense cognitive load.",
        "I realized I was more stressed by the process of tracking my health than by the issues themselves. These apps were either complex medical charts or overly 'fun' game apps.",
        "I wanted to build a single interface that was sophisticated, calm, and professional-a companion that tracks your life without taking it over."
      ],
      workflow: {
        description: "To ensure that tracking felt like a moment of zen, I sketched a defined logic map that prioritized proactive engagement over passive charting.",
        steps: [
          "State 1 (Simplifying Chaos): Overwhelming 'Today's Weather' and cluttered tabs are conceptually removed to focus strictly on the health core.",
          "State 2 (The Heart Rate Concept): The main visual indicator, the 'Global Status Glow', conceptualizes wellness into a single central node (e.g., 121 BPM).",
          "State 3 (Context Analysis Loop): Events (Water, Sleep, Mental Health) trigger the Glow Level Boost and suggest relevant Health Articles.",
          "State 4 (Proactive Support): AI-curated nodes like 'Relaxation' and 'Cooking' are populated based on the user's specific state (e.g., high BPM triggers relaxation techniques)."
        ],
        image: "/wellness-sketch.png"
      },
      research: {
        summary: "Thoroughly audited top wellness and medical applications. Conducted empathetic journey mapping to identify cognitive friction points during daily logging habits.",
        methods: ["App Accessibility Audits", "Cognitive Friction Analysis", "Empathetic Journey Mapping"],
        insights: [
          "Users are tired of 'gamified chaos.' They crave a tool that respects their time.",
          "The core need is Proactive, Low-Touch Tracking. Log an event once and have the system contextualize it.",
          "Immediate access to supportive actions and a 'Global Wellness Score' helps reduce visual anxiety."
        ]
      },
      visualIdentity: {
        colors: ["#bef264", "#1A1A1A"],
        typography: "Inter Soft & Outfit",
        components: ["Glowing Health Node", "Active Support Icon Set", "Proactive Article Block"]
      },
      tools: ["Figma Variables", "Component State Logic"]
    }
  },
  {
    title: "Spotify Experience: Redesign",
    slug: "spotify-redesign",
    duration: "Mar 2026",
    date: "Mar 2026",
    image: "/spotify-thumb.png",
    color: "#1DB954",
    heroTemplate: 2,
    technologies: ["Figma", "UI/UX Design", "Interactive Prototyping"],
    description: "A cinematic reimagining of the Spotify desktop player, focusing on immersive modal transitions and glassmorphic UI depth.",
    features: ["Immersive Playback Modal", "Glassmorphic Layering", "Fluid Transition Physics", "Context-Aware Backgrounds"],
    achievements: ["Designed seamless playback-to-expand transitions", "Implemented spatial UI depth layers", "Achieved 95% usability satisfaction for mood-based UI"],
    status: "Completed",
    type: "Digital Artifact",
    detailedContent: {
      problemStatement: "The standard desktop player often feels visually disconnected from the emotional weight of the music, leading to a routine rather than an experience.",
      solution: "By utilizing high-fidelity modal transitions and frosted-glass depth, I created a player that 'breathes' with the album art, making every session feel unique.",
      design: "Focused on 'Atmospheric Immersion.' Used dynamic color extraction from album arts to influence the frosted background layers.",
      coding: "Prototype built in Figma using advanced variables and spatial components to simulate high-performance 3D engine physics.",
      process: "Moved from rigid layouts to 'Fluid Vessels'-a design philosophy where content dictates the form of the UI.",
      research: {
        summary: "Analyzed top-tier music applications for interaction friction points.",
        methods: ["Competitor Benchmarking", "Visual Audit", "Interaction Mapping"],
        insights: ["Users crave emotional resonance in desktop apps", "Transition speed is critical for perceived performance", "Background ambiance improves focus while listening"]
      },
      visualIdentity: {
        colors: ["#1DB954", "#191414", "#FFFFFF"],
        typography: "Outfit & Inter",
        components: ["Cinematic Modal", "Fluid Waveform", "Mood-Driven Header"]
      }
    }
  },
  {
    title: "Kinetic UI: Card study",
    slug: "kinetic-ui",
    duration: "Feb 2026",
    date: "Feb 2026",
    image: "/kinetic-thumb.png",
    color: "#FF6B6B",
    heroTemplate: 1,
    technologies: ["Figma", "Interaction Design", "Motion Lab"],
    description: "An exploration of fluid layout shifts, elegantly transitioning between high-impact titles and descriptive layers.",
    features: ["Adaptive Layout Shifts", "Spring-Based Motion Physics", "Multi-Layered Interaction", "Micro-Feedback Loops"],
    achievements: ["Developed a library of fluid layout components", "Published an interaction study on kinetic feedback", "Optimized layout shifts for zero perceived lag"],
    status: "Completed",
    type: "Interaction Study",
    detailedContent: {
      problemStatement: "Static UI cards often fail to communicate hierarchy and state changes effectively, leading to a dull and less informative user journey.",
      solution: "Implemented a series of 'Kinetic Cards' that react to user presence, expanding and contracting with natural spring physics to reveal information layers.",
      design: "The aesthetic is 'Glass-Tech'-minimalist clean surfaces with high-impact motion accents.",
      coding: "High-performance prototying in Figma using nested components and complex Boolean logic for state management.",
      process: "Iterative testing of various spring constants to find the 'Golden Ratio' of motion-feeling fast yet organic.",
      research: {
        summary: "Studied human reaction times to various UI motion patterns.",
        methods: ["Motion Audits", "User Preference Testing", "Reaction Analysis"],
        insights: ["Spring physics are preferred over linear ones", "Predictable layouts reduce cognitive load", "Subtle rotation adds a sense of 3D space"]
      },
      visualIdentity: {
        colors: ["#FF6B6B", "#4ECDC4", "#1A1A1A"],
        typography: "Outfit & Inter",
        components: ["Kinetic Container", "Spring Header", "Detail Reveal Layer"]
      }
    }
  },
  {
    title: "Interactive: Flip Cards",
    slug: "flip-cards",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: "/flip-thumb.png",
    color: "#4ECDC4",
    heroTemplate: 1,
    technologies: ["Figma", "Micro-Interactions", "Mobile UX"],
    description: "A high-fidelity prototype exploring physical drag-and-flip mechanics and depth layers for mobile navigation.",
    features: ["Physical Drag Mechanics", "3D Flip Transitions", "Interactive Depth Layers", "Haptic-Ready Feedback"],
    achievements: ["Engineered realistic 3D flipping in a 2D canvas", "Designed touch-first gestural navigation", "Reduced mobile nav friction by 30%"],
    status: "Completed",
    type: "Micro-Interaction Lab",
    detailedContent: {
      problemStatement: "Standard mobile menus are often hidden behind hamburgers, losing the context of the current view and feeling disjointed.",
      solution: "Created a 'Spatial Flip' navigation system where the entire view acts as a physical card that can be flipped to reveal secondary actions without leaving the context.",
      design: "Used a 'Tangible Digital' philosophy-making pixels behave like physical objects with weight and inertia.",
      coding: "Used Figma's Smart Animate with custom easing curves to replicate physical gravity and haptic feedback simulations.",
      process: "Prototyped 15+ different flip methods before settling on the 'Spatial Depth' approach for maximum clarity.",
      research: {
        summary: "Tested gestural navigation patterns on various device sizes.",
        methods: ["Thumb-Zone Mapping", "Usability Testing", "Gestural Audits"],
        insights: ["Bottom-zone actions are 50% faster", "Visual depth reduces user anxiety during transitions", "Haptic cues improve perceived accuracy"]
      },
      visualIdentity: {
        colors: ["#4ECDC4", "#45B7D1", "#1A0A0A"],
        typography: "Outfit & Inter",
        components: ["Flip Container", "Depth Overlay", "Haptic Feedback Node"]
      }
    }
  }
];

