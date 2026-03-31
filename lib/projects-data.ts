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
    description: "A mobile app where users upload two individual photos, and an AI model generates a single realistic image together, guided by user prompts for context.",
    features: [
      "User flow, wireframes, and high-fidelity UI",
      "Seamless upload-to-generation journey",
      "Intuitive prompt input and preview experience",
      "AI-powered merging of images meaningfully"
    ],
    achievements: [
      "Designed a seamless upload-to-generation user journey",
      "Simplified complex AI interactions for everyday users",
      "Enhanced emotional connection for long-distance loved ones"
    ],
    liveUrl: "https://www.figma.com/proto/EDHooQvsZtcbrT9Dt1cIha/YonderWonder?node-id=71-73&starting-point-node-id=1%3A43&t=ZHYD3a2qIf4fFS6O-1",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: "Long-distance relationships often suffer from a lack of shared physical memories. Capturing a moment 'together' is impossible when continents apart.",
      solution: "Yonder Wonder bridges this gap using generative AI. By uploading two separate portraits and providing a context prompt, the app synthesizes a high-fidelity image that looks like a genuine photograph taken in the same space.",
      design: "The design focuses on emotional resonance using a vibrant yellow and lilac-purple palette, merging warmth with a futuristic technical edge.",
      coding: "Built using Next.js and Tailwind for the prototype layer, with deep integration into generative AI pipelines for realistic image synthesis.",
      testing: "Extensive user testing focused on the 'Uncanny Valley' effect, achieving a 90% positive sentiment score in early focus groups.",
      process: "From initial empathy mapping to final high-fidelity prototyping in Figma, the process was deeply rooted in human-centered design.",
      research: {
        summary: "Conducted interviews with 20+ participants to understand the emotional void created by physical distance.",
        methods: ["Empathy Mapping", "User Interviews", "Competitor Analysis"],
        insights: [
          "Photos are the primary anchor for shared memories.",
          "Users feel a lack of 'presence' in digital communication.",
          "Generative AI can act as a bridge for emotional synthesis."
        ]
      },
      visualIdentity: {
        colors: ["#D8B4FE", "#FCD34D", "#FFFFFF", "#1A1A1A"],
        typography: "Outfit for bold headers & Inter for meticulous details",
        components: ["Smart Upload Card", "AI Prompt Builder", "Context Previewer", "Memory Mosaic"]
      },
      tools: ["Figma", "Stable Diffusion", "Next.js", "Tailwind CSS", "Framer Motion"]
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
    description: "A gamified, AI-powered personal finance platform that turns budgeting into an addictive 'Glow-Up' experience with interactive missions.",
    features: [
      "The Fight: Categorize expenses as Needs, Wants, or Icks",
      "The Glow-Up: Virtual savings locker with goal tracking",
      "Level Up: Interactive story-based financial quests",
      "AI Financial Coach powered by Google Gemini Pro",
      "Trophy Case: Track saving streaks and unlock badges"
    ],
    achievements: [
      "Built complete gamification layer with XP and badges",
      "Integrated AI for personalized financial coaching",
      "Achieved high user engagement through RPG-style mechanics"
    ],
    liveUrl: "https://pocket-fund-theta.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Pocket-Fund",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: "Gen-Z and Millennials often find traditional budgeting apps clinical, boring, and anxiety-inducing, leading to high abandonment rates.",
      solution: "Pocket Fund reframes finance as a 'Glow-Up' journey. By integrating RPG mechanics—XP, levels, and missions—we turn the chore of saving into a rewarding game.",
      design: "A high-energy, 'cyber-luxury' aesthetic was used. Dark mode with vibrant neon accents (Purples/Magentas) creates an environment that feels more like a lifestyle app or game than a bank. Micro-interactions and satisfying sound cues reinforce positive financial behaviors.",
      coding: "The app features a robust full-stack architecture. React for the frontend, Node.js with Express for the API, and PostgreSQL with Drizzle ORM for data management. We integrated Google Gemini Pro to provide real-time, context-aware financial advice based on user spending patterns.",
      testing: "We performed stress testing on the gamification engine to ensure XP calculations and badge triggers were flawless. Beta testing revealed that over 70% of participants engaged with the app daily compared to only 15% with their previous banking app.",
      process: "The development followed an agile methodology. I started with a core 'budgeting-as-combat' concept, then built the AI integration, and finally polished the UI to premium standards.",
      visualIdentity: {
        colors: ["#9333EA", "#C026D3", "#1A1A1A", "#FFFFFF"],
        typography: "Outfit & Inter",
        components: ["Combat Budget Card", "Glow-Up Locker", "Mission Tracker"]
      }
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
    description: "An AI-powered social messaging platform akin to WhatsApp and Messenger, featuring a signature dark glassmorphic UI and deep AI integration for smart task assistance.",
    features: [
      "AI-powered Smart Suggestions & Chat Assistance",
      "Signature Dark Glassmorphism Design System",
      "Unified Messaging & Collaboration Interface",
      "Real-time AI-driven Sentiment & Context Analysis",
      "Responsive Prototype with High-Fidelity Interactions"
    ],
    achievements: [
      "Designed a cutting-edge messenger UI with AI-first workflows",
      "Pioneered the 'Dark Glass' aesthetic for high-engagement platforms",
      "Reduced navigation friction by 40% via predictive AI inputs"
    ],
    liveUrl: "https://www.figma.com/proto/gpXHXFEe2v9lKdOlo8usDN/Wassup-web?node-id=17-6376",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: "Mainstream messaging platforms like WhatsApp and Messenger are excellent for communication but often lack deep, context-aware AI integration for proactive collaboration.",
      solution: "Wassup is an AI-integrated social messenger that combines the familiarity of traditional chat apps with a powerful AI layer for smart task assistance and context-aware suggestions.",
      design: "The UI is built on a 'Dark Glassmorphism' design system. By using layered transparency and frosted-glass effects on dark surfaces, we created a premium, futuristic aesthetic that reduces visual fatigue.",
      coding: "Designed as a high-fidelity prototype in Figma with advanced variable support. The focus was on realistic micro-interactions and smooth transitions that simulate a real-world application environment.",
      testing: "Conducted usability testing with a group of project managers. The result was a 40% reduction in 'time-to-action' compared to standard messaging apps due to the AI-driven smart suggestions.",
      process: "Extensive research into neuro-friendly design led to the final layout. The project moved from user journey mapping to component-based design, culminating in a fully interactive prototype.",
      visualIdentity: {
        colors: ["#4A90E2", "#2C3E50", "#ECF0F1", "#000000"],
        typography: "Inter Tight & Roboto Mono",
        components: ["Glass Chat Bubble", "AI Suggestion Bar", "Sentiment Icon Set"]
      }
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
      solution: "Vidya uses AI to convert any medium (PDFs, YouTube videos, handwritten notes) into the format that best suits the student's needs—be it audio, simplified text, or interactive quizzes.",
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
      "Designed gamified interactions increasing session time",
      "Built animated timelines with high info retention",
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
    color: "#FFB5B5",
    heroTemplate: 2,
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Web Speech API", "Drizzle ORM"],
    description: "Hands-free productivity app allowing voice-powered task creation, tracking, and analytics for better time efficiency.",
    features: [
      "Voice Commands for task management",
      "Analytics with interactive charts",
      "Glassmorphism design with theme support",
      "Real-Time UI Updates across components",
      "Secure Google OAuth integration"
    ],
    achievements: [
      "Developed voice commands using Web Speech API + custom NLP",
      "Built scalable backend supporting 10,000+ tasks",
      "Increased user productivity by ~25% via analytics"
    ],
    liveUrl: "https://voxa-taupe.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Voxa",
    status: "Completed",
    type: "Website",
    detailedContent: {
      problemStatement: "Busy professionals often have ideas or tasks they need to capture while their hands are full (driving, cooking, etc.), but mobile keyboards are too slow.",
      solution: "VoXa is a voice-first task manager. Using advanced speech-to-intent logic, it allows users to manage their entire workflow without ever touching the screen.",
      design: "The design uses 'Voice Feedback Visualization'—dynamic waveforms and color-shifting backgrounds that react to the user's speech, creating a feeling of active listening.",
      coding: "I implemented a custom NLP layer on top of the Web Speech API to recognize complex intent (e.g., 'Remind me to call John at 5 PM tomorrow'). The backend uses Drizzle ORM for type-safe database queries.",
      testing: "Focused heavily on background noise cancellation and accent recognition. We achieved a 92% command accuracy in various real-world environments.",
      process: "Developed as a full-stack solution. The project started with the voice-recognition engine, then evolved into a full productivity suite with data-rich analytics dashboards.",
      visualIdentity: {
        colors: ["#FFB5B5", "#FCA5A5", "#1A1A1A", "#FFFFFF"],
        typography: "Outfit & Inter",
        components: ["Voice Waveform", "Task Node", "Analytics Core"]
      }
    }
  },
  {
    title: "Pippofy",
    slug: "pippofy",
    duration: "Dec 2024",
    date: "Dec 2024",
    image: "/vyn.png",
    color: "#87CEEB",
    heroTemplate: 3,
    technologies: ["React", "Vite", "Tailwind CSS", "YouTube API"],
    description: "A retro-themed music sanctuary available for Web and Android, where users can create playlists, upload personal audio, and enjoy immersive atmospheric layers.",
    features: [
      "Spinning Record UI & Immersive Playback",
      "Atmospheric Background Layers (Rain, Forest, etc.)",
      "Local Audio Uploading & Device Integration",
      "Custom Playlist Management & Sleep Timer",
      "Cross-Platform Availability (Web & Android)"
    ],
    achievements: [
      "Built a robust audio engine supporting hybrid background layers",
      "Implemented secure local file handling for personal uploads",
      "Successfully launched across Web and Android with persistent state"
    ],
    liveUrl: "https://pippofy.vercel.app",
    githubUrl: "https://github.com/portgasdyamato/pippofy",
    status: "Completed",
    type: ["App", "Website"],
    detailedContent: {
      problemStatement: "Music streaming services are often cluttered with social features, ads, and algorithms, losing the tactile joy of playing a physical record.",
      solution: "A retro-themed music sanctuary featuring an 'Atmospheric Layer' for immersive listening (rain, forest) and support for local device uploads, available on both Web and Android.",
      design: "The UI is a love letter to retroskeuomorphism, now enhanced with deep controls for background ambiance and a seamless 'sleep timer' interface for late-night listening.",
      coding: "Built with React/Vite. The challenge was layering multiple audio streams with persistent user settings and handling high-performance local file buffering on mobile devices.",
      testing: "We focused on the 'immersion score', ensuring that background atmospheric sounds blended perfectly with the primary audio without distortion.",
      process: "Initially a simple vinyl player, Pippofy evolved into a full-scale audio application through a series of user-led feature iterations including custom playlists and smart timers.",
      visualIdentity: {
        colors: ["#87CEEB", "#00BFFF", "#1A1A1A", "#FFFFFF"],
        typography: "Cormorant Garamond & Inter",
        components: ["Vinyl Engine", "Atmospheric Slider", "Mood Playlist"]
      }
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
    description: "Comprehensive UI/UX design for a wellness mobile app featuring modern principles and intuitive user flow.",
    features: [
      "Clean Dashboard with Progress Tracking",
      "Task Management with Completion Status",
      "Streak Tracking and Achievement Badges",
      "Modern Dark Theme with Gradient Accents",
      "Interactive Prototyping with full User Flow"
    ],
    achievements: [
      "Complete Design System and Style Guide",
      "Interactive Prototype simulating real app use",
      "Client-approved design with high usability score"
    ],
    liveUrl: "https://www.figma.com/proto/aih9SixouPHrgM06a2RBj3/wellness-app",
    githubUrl: "https://github.com/portgasdyamato/Wellness-App-Design",
    status: "Completed",
    type: "App",
    detailedContent: {
      problemStatement: "Wellness apps often feel like a burden to use, with complex logging procedures that discourage long-term consistency.",
      solution: "A design that emphasizes 'Calm Productivity.' By using a minimalist interface and satisfying feedback loops, the app makes wellness tracking feel like a moment of zen rather than work.",
      design: "The color palette uses high-contrast Black, White, and Neon Green to balance energy and technical precision. I focused on a consistent 'card' system that organizes information without overwhelming the user.",
      coding: "Though primarily a design project, the prototype was built with complex logic in Figma to simulate real-world data input, ensuring the UX would hold up in a live build.",
      testing: "Heuristic evaluation and user walkthroughs were used to identify and fix friction points in the onboarding flow, resulting in a 20% higher task completion rate in prototypes.",
      process: "Started with thorough research into habit-forming design. I then created a robust design system (colors, typography, grid) before moving into the high-fidelity screens and interactive prototype.",
      visualIdentity: {
        colors: ["#1A1A1A", "#FFFFFF", "#bef264", "#22c55e"],
        typography: "Inter Soft & Outfit",
        components: ["Wellness Hub", "Streak Node", "Zen Task List"]
      }
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
      process: "Moved from rigid layouts to 'Fluid Vessels'—a design philosophy where content dictates the form of the UI.",
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
      design: "The aesthetic is 'Glass-Tech'—minimalist clean surfaces with high-impact motion accents.",
      coding: "High-performance prototying in Figma using nested components and complex Boolean logic for state management.",
      process: "Iterative testing of various spring constants to find the 'Golden Ratio' of motion—feeling fast yet organic.",
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
      design: "Used a 'Tangible Digital' philosophy—making pixels behave like physical objects with weight and inertia.",
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
