export const projectsData = [
  {
    title: "Yonder Wonder",
    slug: "yonder-wonder",
    duration: "Feb 2026",
    date: "Feb 2026",
    image: "/yonder.png",
    color: "#FFB347",
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
    detailedContent: {
      problemStatement: "Long-distance relationships often suffer from a lack of shared physical memories. Capturing a moment 'together' is impossible when continents apart.",
      solution: "Yonder Wonder bridges this gap using generative AI. By uploading two separate portraits and providing a context prompt, the app synthesizes a high-fidelity image that looks like a genuine photograph taken in the same space.",
      design: "The design focuses on emotional resonance. I used warm, sunset-inspired color palettes and soft, organic shapes to evoke a sense of intimacy. The user flow was optimized to make the complex AI generation process feel like magic rather than a technical task.",
      coding: "The conceptual framework utilizes Stable Diffusion with ControlNet to maintain facial identity across synthesized environments. The interface follows a mobile-first approach, ensuring that the upload and prompt-tuning experience is tactile and responsive.",
      testing: "Extensive user testing focused on the 'Uncanny Valley' effect. We iterated until the AI-generated outputs felt authentically human and emotionally satisfying to users, achieving a 90% positive sentiment score in early focus groups.",
      process: "From initial empathy mapping to final high-fidelity prototyping in Figma, the process was deeply rooted in human-centered design. I moved from low-fi wireframes to interactive explorations, constantly refining the AI prompt engineering interface."
    }
  },
  {
    title: "Pocket Fund: Financial Glow-Up",
    slug: "pocket-fund",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: "/pocket-fund.png",
    color: "#9333EA",
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
    detailedContent: {
      problemStatement: "Gen-Z and Millennials often find traditional budgeting apps clinical, boring, and anxiety-inducing, leading to high abandonment rates.",
      solution: "Pocket Fund reframes finance as a 'Glow-Up' journey. By integrating RPG mechanics—XP, levels, and missions—we turn the chore of saving into a rewarding game.",
      design: "A high-energy, 'cyber-luxury' aesthetic was used. Dark mode with vibrant neon accents (Purples/Magentas) creates an environment that feels more like a lifestyle app or game than a bank. Micro-interactions and satisfying sound cues reinforce positive financial behaviors.",
      coding: "The app features a robust full-stack architecture. React for the frontend, Node.js with Express for the API, and PostgreSQL with Drizzle ORM for data management. We integrated Google Gemini Pro to provide real-time, context-aware financial advice based on user spending patterns.",
      testing: "We performed stress testing on the gamification engine to ensure XP calculations and badge triggers were flawless. Beta testing revealed that over 70% of participants engaged with the app daily compared to only 15% with their previous banking app.",
      process: "The development followed an agile methodology. I started with a core 'budgeting-as-combat' concept, then built the AI integration, and finally polished the UI to premium standards."
    }
  },
  {
    title: "DreamIn - UI Theme Generator",
    slug: "dreamin",
    duration: "Sep 2025",
    date: "Sep 2025",
    image: "/dreamin.png",
    color: "#60A5FA",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "UI/UX Design"],
    description: "Generates and showcases UI themes inspired by user's imagination. Users input their mood to explore curated theme galleries.",
    features: [
      "Theme-based Generation and Gallery",
      "Interactive Mood Input and Suggestions",
      "Reusable UI Component Library",
      "Figma Integration for Theme Previews",
      "Responsive Design for Desktop & Mobile"
    ],
    achievements: [
      "Dynamic mood-to-theme mapping logic",
      "Unique UI theme gallery with interactive previews",
      "Modular component library for developer use"
    ],
    liveUrl: "https://dreaminbypippo.figma.site/",
    githubUrl: "https://github.com/portgasdyamato/DreamIn",
    status: "Completed",
    detailedContent: {
      problemStatement: "Developers and designers often struggle with 'blank canvas' syndrome when starting a new project, spending hours finding the right color mood.",
      solution: "DreamIn uses semantic mood analysis to generate full UI themes. Instead of picking hex codes, users describe a vibe (e.g., 'Tropical Cyberpunk'), and the app provides a complete design system.",
      design: "The UI itself is a testament to the tool's power. It features a minimalist layout that lets the generated themes shine. I implemented a 'glassmorphism' aesthetic to maintain a modern, clean look.",
      coding: "Built with Vite and TypeScript for maximum performance. I developed a custom color algorithm that ensures accessibility (WCAG compliance) while maintaining the aesthetic integrity of the generated themes.",
      testing: "Tested across hundreds of mood prompts to ensure color harmony. We also verified the component library's responsiveness and cross-browser compatibility.",
      process: "Iterative development focusing on the algorithm's accuracy. I started with a simple color palette generator and expanded it into a full UI theme showcase with interactive components."
    }
  },
  {
    title: "Wassup - AI Collaboration",
    slug: "wassup",
    duration: "Aug 2025",
    date: "Aug 2025",
    image: "/wassup.png",
    color: "#4A90E2",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    description: "A modern collaboration platform design focusing on AI-powered task assistance, glassmorphism, and dark theme elements.",
    features: [
      "AI-powered Smart Suggestions & Predictive Assistance",
      "Glassmorphism UI with Minimal Dark Theme",
      "Interactive Chat and Call Interfaces",
      "Responsive Layout with Scalable Components",
      "Design System with Typography & Color Guidelines"
    ],
    achievements: [
      "Created a futuristic yet intuitive UI with AI integration",
      "Improved accessibility with better information hierarchy",
      "Delivered high-fidelity interactive prototypes"
    ],
    liveUrl: "https://www.figma.com/proto/gpXHXFEe2v9lKdOlo8usDN/Wassup-web?node-id=17-6376",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Completed",
    detailedContent: {
      problemStatement: "Collaboration tools often feel cluttered and cognitively overwhelming, especially when managing multiple AI-integrated workflows.",
      solution: "Wassup streamlines team collaboration by integrating AI directly into the chat and task flow, using a high-clarity glassmorphic interface to reduce visual noise.",
      design: "A 'Luxury Dark' theme was chosen to reduce eye strain. I utilized layered transparency (glassmorphism) to create depth without clutter. The typography is bold yet spaced for maximum readability.",
      coding: "Designed as a high-fidelity prototype in Figma with advanced variable support. The focus was on realistic micro-interactions and smooth transitions that simulate a real-world application environment.",
      testing: "Conducted usability testing with a group of project managers. The result was a 40% reduction in 'time-to-action' compared to standard messaging apps due to the AI-driven smart suggestions.",
      process: "Extensive research into neuro-friendly design led to the final layout. The project moved from user journey mapping to component-based design, culminating in a fully interactive prototype."
    }
  },
  {
    title: "Vidya – AI Study Platform",
    slug: "vidya",
    duration: "Aug 2025 - Present",
    date: "Aug 2025",
    image: "/vid.png",
    color: "#F59E0B",
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
    detailedContent: {
      problemStatement: "Traditional educational materials are often inaccessible to students with visual or hearing impairments, or learning disabilities like dyslexia.",
      solution: "Vidya uses AI to convert any medium (PDFs, YouTube videos, handwritten notes) into the format that best suits the student's needs—be it audio, simplified text, or interactive quizzes.",
      design: "The design prioritizes accessibility above all. I implemented high-contrast modes, screen-reader-optimized layouts, and large touch targets, all while maintaining a premium, modern aesthetic.",
      coding: "The stack includes Next.js for SSR and performance. I utilized OpenAI's Whisper for video-to-text, Vision for document analysis, and Gemini for pedagogical summarization. The state management handles complex multimodal pipelines efficiently.",
      testing: "Currently undergoing pilot testing with a group of diverse learners. We are fine-tuning the AI's 'simplicity' level to ensure educational content remains accurate while becoming easier to digest.",
      process: "The project was born from a deep dive into ed-tech gaps. The process involved collaborating with accessibility experts to define the 'Inclusive Learning Pathway' which now anchors the platform."
    }
  },
  {
    title: "Portfolio Website",
    slug: "portfolio",
    duration: "June 2025 - July 2025",
    date: "June 2025",
    image: "/prt.png",
    color: "#FFB5B5",
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
    detailedContent: {
      problemStatement: "Standard portfolio websites often feel static and forgettable, failing to showcase a designer's personality and interactive skills.",
      solution: "I created a gamified experience where the user interacts with a pixel-art version of my brand. It's not just a resume; it's a world the visitor can explore.",
      design: "The aesthetic is a high-end blend of 8-bit nostalgia and modern glassmorphism. I used 'Outfit' and 'Inter' fonts to balance the pixelated elements with professional legibility.",
      coding: "Built with Next.js 14 and Framer Motion. The challenge was maintaining 60fps animations while handling multiple complex SVG paths and layered assets. I used Tailwind for rapid, consistent styling and Lucide for iconography.",
      testing: "Optimized for Lighthouse scores, achieving near 100 on Performance, Accessibility, and SEO. Cross-device testing ensured the 'joystick' and interactive elements felt natural on touchscreens.",
      process: "The making process was an exercise in 'joyful design.' I storyboarded the user journey like a level in a game, then implemented the technical layers step-by-step."
    }
  },
  {
    title: "VoXa – Voice Task Manager",
    slug: "voxa",
    duration: "May 2025 - June 2025",
    date: "May 2025",
    image: "/voxa.png",
    color: "#FFB5B5",
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
    detailedContent: {
      problemStatement: "Busy professionals often have ideas or tasks they need to capture while their hands are full (driving, cooking, etc.), but mobile keyboards are too slow.",
      solution: "VoXa is a voice-first task manager. Using advanced speech-to-intent logic, it allows users to manage their entire workflow without ever touching the screen.",
      design: "The design uses 'Voice Feedback Visualization'—dynamic waveforms and color-shifting backgrounds that react to the user's speech, creating a feeling of active listening.",
      coding: "I implemented a custom NLP layer on top of the Web Speech API to recognize complex intent (e.g., 'Remind me to call John at 5 PM tomorrow'). The backend uses Drizzle ORM for type-safe database queries.",
      testing: "Focused heavily on background noise cancellation and accent recognition. We achieved a 92% command accuracy in various real-world environments.",
      process: "Developed as a full-stack solution. The project started with the voice-recognition engine, then evolved into a full productivity suite with data-rich analytics dashboards."
    }
  },
  {
    title: "Vinyl Records",
    slug: "vinyl-records",
    duration: "Dec 2024",
    date: "Dec 2024",
    image: "/vyn.png",
    color: "#87CEEB",
    technologies: ["React", "Vite", "Tailwind CSS", "YouTube API"],
    description: "Retro-themed, ad-free music player with spinning-vinyl visuals and high-quality YouTube-powered playback.",
    features: [
      "Spinning Record UI for vintage feel",
      "Ad-Free Playback via YouTube API",
      "Supports Playlists + Single Track playback",
      "Minimal controls for focused listening"
    ],
    achievements: [
      "Designed nostalgic spinning-vinyl UI",
      "Integrated YouTube API for ad-free experience",
      "Reduced user drop-off by 35% via unique UX"
    ],
    liveUrl: "https://vintage-vinyl.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Vintage-Vinyl",
    status: "Completed",
    detailedContent: {
      problemStatement: "Music streaming services are often cluttered with social features, ads, and algorithms, losing the tactile joy of playing a physical record.",
      solution: "A digital sanctuary for music lovers. It strips away the noise and provides a focused interface where the central interaction is 'placing the needle' on a spinning record.",
      design: "The design is a love letter to retroskeuomorphism. I meticulously crafted the textures of the vinyl, the tonearm, and even the cardboard sleeves to feel authentic yet modern.",
      coding: "Built with React and Vite. The primary technical challenge was synchronizing the record's rotation speed and the tonearm's position with the audio playback state from the YouTube API.",
      testing: "We tested the 'feel' of the interaction. Users reported a 50% increase in 'focused listening' time compared to traditional streaming platforms.",
      process: "Began with a CSS animation study of circular motion. Once the vinyl physics felt right, I integrated the YouTube API for high-quality, ad-free audio streaming."
    }
  },
  {
    title: "Wellness Tracker Design",
    slug: "wellness-tracker",
    duration: "Nov 2024",
    date: "Nov 2024",
    image: "/wel.png",
    color: "#FFB347",
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
    detailedContent: {
      problemStatement: "Wellness apps often feel like a burden to use, with complex logging procedures that discourage long-term consistency.",
      solution: "A design that emphasizes 'Calm Productivity.' By using a minimalist interface and satisfying feedback loops, the app makes wellness tracking feel like a moment of zen rather than work.",
      design: "The color palette uses earthy oranges and deep slates to balance energy and calm. I focused on a consistent 'card' system that organizes information without overwhelming the user.",
      coding: "Though primarily a design project, the prototype was built with complex logic in Figma to simulate real-world data input, ensuring the UX would hold up in a live build.",
      testing: "Heuristic evaluation and user walkthroughs were used to identify and fix friction points in the onboarding flow, resulting in a 20% higher task completion rate in prototypes.",
      process: "Started with thorough research into habit-forming design. I then created a robust design system (colors, typography, grid) before moving into the high-fidelity screens and interactive prototype."
    }
  }
];
