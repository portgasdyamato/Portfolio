"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Users, Lightbulb, PenTool, Database, X, ChevronRight, Zap, Target, MessageSquare, Palette, Sparkles, Plus, Minus } from "lucide-react"

const skillCategories = [
  {
    id: "ux",
    title: "UX & Product Design",
    icon: PenTool,
    color: "#FDE8EB",
    tabColor: "#F8BDC8",
    accent: "#E05370",
    textColor: "text-[#2B1218]",
    descColor: "text-[#2B1218]/70",
    tag: "UX.DOSSIER",
    description: "Creating human-centered, accessible, and intuitive digital product experiences.",
    items: [
      {
        name: "Design Tools & 3D",
        badge: "Figma & 3D",
        desc: "Figma, Framer, Adobe XD, Blender 3D",
        description: "Translating ambiguous product concepts into high-fidelity interactive prototypes, leveraging auto-layout, design tokens, and lightweight 3D assets to communicate spatial UX.",
        level: 95
      },
      {
        name: "UX Research",
        badge: "User Audits",
        desc: "Usability Testing, User Interviews, Heuristic Audits",
        description: "Leading qualitative research, semi-structured user interviews, and contextual inquiries to decode cognitive load patterns and eliminate friction before engineering handoff.",
        level: 92
      },
      {
        name: "Design Systems",
        badge: "Tokens & UI",
        desc: "Design Tokens, Component Libraries, Shadcn UI, HIG",
        description: "Architecting multi-brand design tokens, atomic UI primitives, and scalable Figma component libraries synchronized 1:1 with frontend codebases.",
        level: 90
      },
      {
        name: "Interaction & Motion",
        badge: "Micro-UX",
        desc: "Framer Motion, Micro-interactions, Gestural UI",
        description: "Crafting fluid spring-based animations, gestural affordances, and reactive micro-interactions that make digital workflows feel tangible, responsive, and alive.",
        level: 88
      },
      {
        name: "Product Strategy & IA",
        badge: "IA & SaaS",
        desc: "Information Architecture, Journey Maps, SaaS UX",
        description: "Structuring complex multi-tiered SaaS workflows, mental models, and intuitive user journeys to deliver frictionless user onboarding and high task completion.",
        level: 88
      },
      {
        name: "Accessibility & Ops",
        badge: "WCAG 2.1 AA",
        desc: "WCAG 2.1 AA, Screen Readers, Inclusive Systems",
        description: "Enforcing rigorous accessibility standards, keyboard-first navigability, semantic ARIA landmarks, and high-contrast compliance for diverse global audiences.",
        level: 85
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code,
    color: "#EDE8FA",
    tabColor: "#CBBCEE",
    accent: "#7A54C8",
    textColor: "text-[#1E1538]",
    descColor: "text-[#1E1538]/70",
    tag: "FE.DOSSIER",
    description: "Modern frontend stack for building fast, robust, and scalable applications.",
    items: [
      {
        name: "Frameworks & State",
        badge: "React & Next",
        desc: "React 19, Next.js 15, Redux Toolkit, Vite",
        description: "Architecting full-stack frontend applications leveraging Next.js App Router, React 19 Server Components, optimized hydration, and type-safe state stores.",
        level: 95
      },
      {
        name: "Languages & Core",
        badge: "TypeScript",
        desc: "TypeScript, Modern JavaScript (ES6+), HTML5",
        description: "Writing strictly typed, self-documenting architectures with modern ES6+ paradigms, comprehensive interfaces, and semantic HTML foundations.",
        level: 92
      },
      {
        name: "Modern UI & Styling",
        badge: "Tailwind & UI",
        desc: "Tailwind CSS, Shadcn UI, Radix Primitives",
        description: "Engineering design-token-driven UIs with Tailwind CSS and accessible Radix headless primitives, avoiding runtime CSS bloat and ensuring sub-second renders.",
        level: 90
      },
      {
        name: "Animation & Motion",
        badge: "Motion Engine",
        desc: "Framer Motion, Canvas / SVG, Micro-interactions",
        description: "Implementing silky 60fps physics-driven choreographies, layout animations, and interactive SVG canvas graphics with zero frame drops.",
        level: 88
      },
      {
        name: "Design-to-Code",
        badge: "Pixel Perfect",
        desc: "Pixel-perfect Handoff, Fluid 3D UI, Performance",
        description: "Translating Figma designs into production code with 100% pixel fidelity, fluid responsive scaling, cross-browser consistency, and Lighthouse 95+ scores.",
        level: 90
      }
    ]
  },
  {
    id: "ai",
    title: "AI Engineering & LLMs",
    icon: Zap,
    color: "#FEF4DB",
    tabColor: "#F7DC94",
    accent: "#C98616",
    textColor: "text-[#2A1F08]",
    descColor: "text-[#2A1F08]/70",
    tag: "AI.DOSSIER",
    description: "Integrating powerful generative AI models into intuitive product experiences.",
    items: [
      {
        name: "Core LLMs & Agents",
        badge: "Frontier LLMs",
        desc: "Claude Code, OpenAI GPT-4o, Gemini 2.0, DeepSeek",
        description: "Integrating frontier LLMs into product workflows with real-time token streaming, function calling, structured schemas, and robust retry fallbacks.",
        level: 92
      },
      {
        name: "AI-Assisted Dev",
        badge: "Agentic Flows",
        desc: "Agentic Workflows, Cursor, Antigravity, Lovable",
        description: "Harnessing autonomous agentic developer loops and multi-model pairing to dramatically accelerate product delivery without sacrificing code hygiene.",
        level: 95
      },
      {
        name: "Prompt Engineering",
        badge: "Prompt Science",
        desc: "Certified Prompt Engineer, Web Speech API, NLP",
        description: "Engineering high-precision system prompts, few-shot contextual priming, and multi-modal speech-to-intent pipelines certified in prompt design.",
        level: 95
      },
      {
        name: "Enterprise AI Training",
        badge: "70+ Leaders",
        desc: "Led AI Buildathon for 70+ industry pros at Ozone",
        description: "Conducted hands-on corporate AI buildathons, upskilling 70+ engineering and product leaders on building and shipping agentic workflows.",
        level: 90
      },
      {
        name: "AI Product Architecture",
        badge: "AI SaaS",
        desc: "Agent UX, Progressive Disclosure, AI SaaS",
        description: "Designing trustworthy human-in-the-loop interfaces, transparent agent activity timelines, and progressive disclosure patterns for AI copilots.",
        level: 90
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & Infra.",
    icon: Database,
    color: "#E3F3EC",
    tabColor: "#A9DFBF",
    accent: "#2C8F63",
    textColor: "text-[#0E2519]",
    descColor: "text-[#0E2519]/70",
    tag: "BE.DOSSIER",
    description: "Scalable backend services, RESTful APIs, and robust DevOps infrastructure.",
    items: [
      {
        name: "Server & APIs",
        badge: "Node & REST",
        desc: "Node.js, Express.js, REST APIs, WebSockets",
        description: "Building resilient RESTful services, microservices, and real-time bidirectional WebSocket pipelines engineered for high concurrency.",
        level: 85
      },
      {
        name: "Databases & ORMs",
        badge: "PostgreSQL",
        desc: "PostgreSQL, Supabase, MongoDB, Prisma, Redis",
        description: "Architecting normalized relational schemas, managed Supabase instances, Prisma query optimization, and in-memory Redis caching layers.",
        level: 82
      },
      {
        name: "Containers & Linux",
        badge: "Red Hat CNCF",
        desc: "Podman (CNCF / Red Hat Mentee), Docker, CI/CD",
        description: "Containerizing services with rootless Podman and Docker, managing Linux environments, and contributing open-source developer tooling under Red Hat / CNCF.",
        level: 80
      },
      {
        name: "Cloud & DevOps",
        badge: "Vercel & AWS",
        desc: "Vercel, AWS Architecture, Git, n8n Automation",
        description: "Deploying production apps on Vercel Edge networks and AWS, with automated CI/CD GitHub workflows and event-driven automation via n8n.",
        level: 85
      }
    ]
  }
]

const interpersonalSkills = [
  { id: "01", title: "Problem Solving", icon: Lightbulb, desc: "Brainstorming and concept development with an analytical mindset." },
  { id: "02", title: "Creativity", icon: Palette, desc: "Translating complex ideas into intuitive visual interfaces and prototypes." },
  { id: "03", title: "Communication", icon: MessageSquare, desc: "Bridging the gap between technical teams and business stakeholders." },
  { id: "04", title: "Leadership", icon: Users, desc: "Mentoring peers and guiding project teams to successful delivery." },
  { id: "05", title: "Critical Thinking", icon: Target, desc: "Evaluating and prioritizing tasks based on product strategy and OKRs." },
  { id: "06", title: "Collaboration", icon: Zap, desc: "Fostering cross-functional harmony and seamless developer handoffs." }
]

const ROW_SWATCHES = [
  { bgTint: "rgba(2, 132, 199, 0.15)", border: "rgba(2, 132, 199, 0.22)" }, // Baby Blue (matches Bridge Scholarship in reference)
  { bgTint: "rgba(16, 185, 129, 0.15)", border: "rgba(16, 185, 129, 0.22)" }, // Soft Sage/Mint (matches MediSec in reference)
  { bgTint: "rgba(244, 114, 182, 0.17)", border: "rgba(244, 114, 182, 0.25)" }, // Soft Baby Pink/Rose (matches Pledge a Smile in reference)
  { bgTint: "rgba(245, 158, 11, 0.15)", border: "rgba(245, 158, 11, 0.25)" }, // Soft Amber/Honey
  { bgTint: "rgba(139, 92, 246, 0.15)", border: "rgba(139, 92, 246, 0.22)" }, // Soft Lavender/Violet
  { bgTint: "rgba(20, 184, 166, 0.15)", border: "rgba(20, 184, 166, 0.22)" }, // Soft Teal
]

function FolderBackgroundArtwork({ categoryId, accent }: { categoryId: string, accent: string }) {
  if (categoryId === "ux") {
    return (
      <svg
        viewBox="0 0 140 120"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -bottom-1 -right-1 w-32 h-28 pointer-events-none opacity-[0.14] group-hover:opacity-[0.24] group-hover:scale-105 transition-all duration-500"
      >
        {/* Figma Bézier curve with anchor points & control handles */}
        <path d="M 20 100 C 35 35, 75 85, 115 25" strokeDasharray="3 3" opacity="0.6" />
        <path d="M 20 100 C 35 35, 75 85, 115 25" />
        {/* Anchor point 1 & handle */}
        <line x1="35" y1="35" x2="20" y2="100" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        <circle cx="35" cy="35" r="3" fill="none" strokeWidth="1.5" />
        {/* Anchor point 2 & handle */}
        <line x1="75" y1="85" x2="115" y2="25" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
        <circle cx="75" cy="85" r="3" fill="none" strokeWidth="1.5" />
        {/* End points */}
        <rect x="17" y="97" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
        <rect x="112" y="22" width="6" height="6" rx="1" fill="currentColor" fillOpacity="0.2" />
        {/* Precision crosshair registration marks */}
        <circle cx="95" cy="95" r="14" strokeWidth="1" opacity="0.4" strokeDasharray="2 3" />
        <line x1="95" y1="78" x2="95" y2="112" strokeWidth="1" opacity="0.4" />
        <line x1="78" y1="95" x2="112" y2="95" strokeWidth="1" opacity="0.4" />
      </svg>
    )
  }

  if (categoryId === "frontend") {
    return (
      <svg
        viewBox="0 0 140 120"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -bottom-1 -right-1 w-32 h-28 pointer-events-none opacity-[0.15] group-hover:opacity-[0.26] group-hover:scale-105 transition-all duration-500"
      >
        {/* React Component Atomic Orbit System */}
        <ellipse cx="85" cy="65" rx="44" ry="17" strokeWidth="1.5" />
        <ellipse cx="85" cy="65" rx="44" ry="17" strokeWidth="1.5" transform="rotate(60 85 65)" />
        <ellipse cx="85" cy="65" rx="44" ry="17" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.75" transform="rotate(-60 85 65)" />
        
        {/* Core Nucleus */}
        <circle cx="85" cy="65" r="6.5" fill="currentColor" fillOpacity="0.2" strokeWidth="1.8" />
        <circle cx="85" cy="65" r="2" fill="currentColor" />
        
        {/* Orbital Electron Particles */}
        <circle cx="129" cy="65" r="3" fill="currentColor" fillOpacity="0.4" strokeWidth="1.2" />
        <circle cx="63" cy="27" r="3" fill="currentColor" fillOpacity="0.4" strokeWidth="1.2" />
        <circle cx="107" cy="103" r="3" fill="currentColor" fillOpacity="0.4" strokeWidth="1.2" />

        {/* Delicate Precision Grid / Crosshair Dots */}
        <circle cx="35" cy="35" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="35" cy="95" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="130" cy="35" r="1.5" fill="currentColor" opacity="0.4" />
      </svg>
    )
  }

  if (categoryId === "ai") {
    return (
      <svg
        viewBox="0 0 140 120"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute -bottom-1 -right-1 w-32 h-28 pointer-events-none opacity-[0.14] group-hover:opacity-[0.24] group-hover:scale-105 transition-all duration-500"
      >
        {/* Neural Network / Agent Nodes Lattice */}
        <circle cx="50" cy="40" r="4.5" strokeWidth="1.5" />
        <circle cx="105" cy="32" r="4" strokeWidth="1.5" />
        <circle cx="115" cy="85" r="4.5" strokeWidth="1.5" />
        <circle cx="45" cy="95" r="4" strokeWidth="1.5" />
        <circle cx="80" cy="70" r="6.5" strokeWidth="1.8" fill="currentColor" fillOpacity="0.1" />
        {/* Interconnected latent vectors */}
        <line x1="54" y1="43" x2="74" y2="65" strokeWidth="1.2" opacity="0.6" />
        <line x1="101" y1="35" x2="86" y2="65" strokeWidth="1.2" opacity="0.6" />
        <line x1="86" y1="74" x2="111" y2="83" strokeWidth="1.2" opacity="0.6" />
        <line x1="49" y1="93" x2="74" y2="74" strokeWidth="1.2" opacity="0.6" />
        <line x1="50" y1="45" x2="45" y2="91" strokeWidth="1" strokeDasharray="2 3" opacity="0.4" />
        {/* Central Intelligence 4-Point Sparkle */}
        <path d="M 80 55 Q 80 70 65 70 Q 80 70 80 85 Q 80 70 95 70 Q 80 70 80 55 Z" fill="currentColor" fillOpacity="0.2" strokeWidth="1.2" />
        <circle cx="80" cy="70" r="1.5" fill="currentColor" />
        {/* Orbital ring */}
        <ellipse cx="80" cy="70" rx="35" ry="18" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" transform="rotate(-15 80 70)" />
      </svg>
    )
  }

  // categoryId === "backend"
  return (
    <svg
      viewBox="0 0 140 120"
      fill="none"
      stroke={accent}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute -bottom-1 -right-1 w-32 h-28 pointer-events-none opacity-[0.14] group-hover:opacity-[0.24] group-hover:scale-105 transition-all duration-500"
    >
      {/* Database Cylinder Stack */}
      <ellipse cx="90" cy="35" rx="28" ry="9" strokeWidth="1.5" />
      <path d="M 62 35 v 18 c 0 5 12.5 9 28 9 s 28 -4 28 -9 v -18" strokeWidth="1.5" />
      <path d="M 62 53 v 18 c 0 5 12.5 9 28 9 s 28 -4 28 -9 v -18" strokeWidth="1.5" />
      <path d="M 62 71 v 18 c 0 5 12.5 9 28 9 s 28 -4 28 -9 v -18" strokeWidth="1.5" />
      {/* API / Pipeline Data Flow Connectors */}
      <path d="M 25 75 H 48 V 45 H 62" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="25" cy="75" r="3.5" fill="currentColor" fillOpacity="0.2" />
      <path d="M 25 95 H 48 V 85 H 62" strokeWidth="1.2" opacity="0.5" />
      <circle cx="25" cy="95" r="3" fill="currentColor" fillOpacity="0.2" />
      {/* Server status indicator dots */}
      <circle cx="106" cy="48" r="1.5" fill="currentColor" />
      <circle cx="106" cy="66" r="1.5" fill="currentColor" />
      <circle cx="106" cy="84" r="1.5" fill="currentColor" />
    </svg>
  )
}

export default function SkillsShowcase() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null)
  const [selectedSkillIdx, setSelectedSkillIdx] = useState<number>(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveFolder(null)
        setSelectedSkillIdx(0)
      }
    }
    if (activeFolder) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeFolder])

  return (
    <section id="skills" className="w-full relative scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF9] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-[#1a0a0a]/50 dark:text-white/50 font-black tracking-[0.2em] uppercase text-[9px] mb-6 shadow-sm">
            <Sparkles size={10} className="text-[#F59E9E]" /> My Arsenal
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[55px] lg:text-[75px] font-bold text-[#1a0a0a] leading-[1.05] tracking-tight">
            My Professional <span className="text-[#F59E9E]">Arsenal.</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground mt-4 font-inter text-lg">
            Explore the specialized skills and interpersonal strengths I bring to the table. Click on any folder to dive into the technical details.
          </p>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10 w-full">
          {skillCategories.map((folder) => {
            const Icon = folder.icon
            
            return (
              <motion.div 
                key={folder.id}
                onClick={() => { setActiveFolder(folder.id); setSelectedSkillIdx(0); }}
                className="relative h-[225px] w-full max-w-[240px] md:max-w-none mx-auto cursor-pointer group perspective-[1000px]"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                // ── MOBILE ONLY OVERRIDE ──
                // Slide up automatically on phone as cards enter view
                whileInView={(typeof window !== 'undefined' && window.innerWidth < 1024) ? "hover" : ""}
                viewport={{ amount: 0.5, once: false }}
                initial="initial"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* BACK OF FOLDER */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[180px] rounded-b-2xl rounded-tr-2xl shadow-sm border border-black/[0.04]"
                  style={{ backgroundColor: folder.tabColor }}
                />

                {/* TAB OF FOLDER */}
                <motion.div 
                  className="absolute bottom-[180px] left-0 w-[45%] h-[28px] rounded-t-xl border-t border-l border-r border-black/[0.04]"
                  style={{ backgroundColor: folder.tabColor }}
                />

                {/* SINGLE PREMIUM DOCUMENT - Fully rounded (top & bottom) */}
                <motion.div 
                  className="absolute left-[10%] w-[80%] h-[160px] bg-[#FFFDF9] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex flex-col pt-3.5 px-4 z-0 border border-black/[0.04]"
                  initial="initial"
                  variants={{
                    initial: { bottom: 15, rotate: 0, scale: 1, opacity: 1 },
                    hover: { 
                      bottom: 75,
                      rotate: -1,
                      scale: 1.03,
                      opacity: 1
                    },
                    active: { 
                      bottom: 110, 
                      rotate: -1, 
                      scale: 1.04, 
                      opacity: 0.3 
                    }
                  }}
                  animate={activeFolder === folder.id ? "active" : undefined}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                >
                  {/* High-End Document Placeholder Details */}
                  <div className="flex items-center gap-2 mb-3 mt-1">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: folder.color }}>
                       <Icon size={12} color={folder.accent} strokeWidth={2} />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider uppercase opacity-50">
                      {folder.tag}
                    </span>
                  </div>
                </motion.div>

                {/* FRONT OF FOLDER */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[180px] rounded-2xl origin-bottom border border-black/[0.06] p-6 flex flex-col justify-end overflow-hidden"
                  variants={{
                    initial: { rotateX: 0, y: 0 },
                    hover: { rotateX: -16, y: 1 },
                    active: { rotateX: -22, y: 2 }
                  }}
                  animate={activeFolder === folder.id ? "active" : undefined}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  style={{ 
                    transformStyle: "preserve-3d",
                    backgroundColor: folder.color,
                    boxShadow: activeFolder === folder.id 
                      ? "inset 0 1px 1px rgba(255,255,255,0.8), 0 24px 45px -10px rgba(26,10,10,0.18)" 
                      : "inset 0 1px 1px rgba(255,255,255,0.8), 0 10px 25px -5px rgba(26,10,10,0.07)"
                  }}
                >
                  {/* Refined Icon Badge in Top-Right */}
                  <div className="absolute top-4 right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/70 backdrop-blur-md shadow-sm border border-white/80 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                    <Icon size={18} color={folder.accent} strokeWidth={2} />
                  </div>

                  {/* Bespoke Domain Background Artwork (Human-crafted vector art, no generic AI watermark) */}
                  <FolderBackgroundArtwork categoryId={folder.id} accent={folder.accent} />

                  <h3 className={`font-baskerville text-[20px] sm:text-[22px] font-bold tracking-tight not-italic mb-2 leading-[1.2] text-balance ${folder.textColor}`}>
                    {folder.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: folder.accent }} />
                    <p className={`text-[10px] font-mono uppercase tracking-[0.16em] font-semibold opacity-65 ${folder.textColor}`}>
                      {folder.items.length} Skills Inside
                    </p>
                  </div>
                </motion.div>

              </motion.div>
            )
          })}
        </div>
      </div>



      {/* EXPANDED OVERLAY */}
      <AnimatePresence>
        {activeFolder && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } }}
              onClick={() => setActiveFolder(null)}
              className="fixed inset-0 bg-black/45 backdrop-blur-md z-[100]"
            />

            {/* Master-Detail Centered Modal */}
            {skillCategories.map((folder) => {
              if (folder.id !== activeFolder) return null
              const Icon = folder.icon
              const activeItem = folder.items[selectedSkillIdx] || folder.items[0]
              const activeSwatch = ROW_SWATCHES[selectedSkillIdx % ROW_SWATCHES.length]
              const activeTools = activeItem.desc.split(", ")

              return (
                <div key={`modal-master-detail-${folder.id}`} className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 md:p-6 pointer-events-none perspective-[1400px]">
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      scale: 0.68, 
                      y: 110, 
                      rotateX: 18, 
                      rotateZ: -1.5,
                      filter: "blur(4px)" 
                    }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0, 
                      rotateX: 0, 
                      rotateZ: 0,
                      filter: "blur(0px)" 
                    }}
                    exit={{ 
                      opacity: 0, 
                      scale: 0.6, 
                      y: 140, 
                      rotateX: 22, 
                      rotateZ: 1.5,
                      filter: "blur(6px)",
                      transition: { 
                        duration: 0.32, 
                        ease: [0.16, 1, 0.3, 1] 
                      } 
                    }}
                    transition={{ 
                      type: "spring", 
                      damping: 26, 
                      stiffness: 300, 
                      mass: 0.85 
                    }}
                    style={{ 
                      transformOrigin: "bottom center",
                      transformStyle: "preserve-3d" 
                    }}
                    className="relative w-full max-w-5xl h-[80vh] md:h-[520px] max-h-[85vh] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.22)] flex flex-col pointer-events-auto border border-black/[0.08] my-auto bg-[#FFFDF9]"
                  >
                    
                    {/* Clean Paper Document Header — Low Cognitive Load */}
                    <div className="px-6 sm:px-8 py-4 sm:py-5 border-b border-black/[0.05] flex items-center justify-between bg-[#FFFDF9] shrink-0">
                      <div className="flex items-center gap-3.5 min-w-0 overflow-visible">
                        <div 
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 shadow-xs" 
                          style={{ backgroundColor: folder.color, border: `1px solid ${folder.tabColor}` }}
                        >
                          <Icon size={18} color={folder.accent} strokeWidth={2} />
                        </div>
                        <h3 className="font-baskerville text-[21px] sm:text-[24px] font-bold tracking-tight text-[#1a0a0a] not-italic leading-[1.35] pt-1 pb-0.5 overflow-visible">
                          {folder.title}
                        </h3>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.12, rotate: 90 }}
                        whileTap={{ scale: 0.88, rotate: 180 }}
                        onClick={() => { setActiveFolder(null); setSelectedSkillIdx(0); }}
                        className="w-8 h-8 rounded-full border border-black/[0.08] bg-white hover:bg-[#1a0a0a] hover:text-white hover:border-[#1a0a0a] text-[#1a0a0a]/50 flex items-center justify-center transition-colors duration-200 shadow-xs shrink-0 cursor-pointer"
                        aria-label="Close modal"
                      >
                        <X size={14} strokeWidth={2.2} />
                      </motion.button>
                    </div>

                    {/* Master-Detail Split Body */}
                    <div className="flex-1 min-h-0 flex flex-col md:flex-row overflow-hidden bg-[#FFFDF9]">
                      
                      {/* Left Column: Master List Ledger with Divider Lines */}
                      <div className="w-full md:w-[45%] lg:w-[42%] max-h-[240px] md:max-h-none border-b md:border-b-0 md:border-r border-black/[0.06] overflow-y-auto scrollbar-hide modal-scroll shrink-0 overscroll-contain flex flex-col bg-[#FFFDF9]">
                        {/* List with even vertical distribution filling available height */}
                        <div className="divide-y divide-black/[0.05] flex-1 flex flex-col">
                          {folder.items.map((item, idx) => {
                            const isSelected = selectedSkillIdx === idx
                            const swatch = ROW_SWATCHES[idx % ROW_SWATCHES.length]
                            return (
                              <div
                                key={idx}
                                onClick={() => setSelectedSkillIdx(idx)}
                                className={`w-full flex-1 min-h-[60px] sm:min-h-[68px] py-3.5 sm:py-4 px-4 sm:px-5 flex items-center justify-between gap-3 text-left cursor-pointer select-none transition-all duration-200 group ${
                                  isSelected 
                                    ? "bg-[#FAF5EF]/90" 
                                    : "hover:bg-black/[0.012] bg-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                                  {/* Pastel Squircle Swatch */}
                                  <div 
                                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-2xl shrink-0 transition-transform duration-300 ${
                                      isSelected 
                                        ? "ring-2 ring-black/10 scale-105 shadow-xs" 
                                        : "group-hover:scale-105 shadow-xs"
                                    }`}
                                    style={{ backgroundColor: swatch.bgTint, border: `1px solid ${swatch.border}` }} 
                                  />

                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="font-serif italic text-[12.5px] sm:text-[13.5px] text-[#1a0a0a]/35 select-none shrink-0">
                                      .{String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <h4 className={`text-[14px] sm:text-[14.5px] tracking-tight truncate transition-colors ${
                                      isSelected ? "font-bold text-[#1a0a0a]" : "font-semibold text-[#1a0a0a]/75 group-hover:text-[#1a0a0a]"
                                    }`}>
                                      {item.name}
                                    </h4>
                                    {isSelected && (
                                      <span className="text-[10px] select-none text-[#1a0a0a] shrink-0 font-bold">
                                        ✦
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                  {/* Main Tag: Always solid black */}
                                  <span className="text-[8.5px] sm:text-[9px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#1a0a0a] text-white shadow-xs whitespace-nowrap select-none">
                                    {item.badge}
                                  </span>
                                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-200 ${
                                    isSelected 
                                      ? "bg-[#1a0a0a] text-white border-transparent shadow-xs" 
                                      : "bg-[#FFFDF9] border-black/[0.08] text-[#1a0a0a]/40 group-hover:text-[#1a0a0a] group-hover:border-black/20"
                                  }`}>
                                    {isSelected ? (
                                      <ChevronRight size={13} strokeWidth={2.5} />
                                    ) : (
                                      <Plus size={11} strokeWidth={2} />
                                    )}
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Right Column: Detail Spotlight */}
                      <div className="w-full md:w-[55%] lg:w-[58%] p-4 sm:p-6 md:p-7 overflow-y-auto scrollbar-hide modal-scroll overscroll-contain flex flex-col justify-between flex-1">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedSkillIdx}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.16 }}
                            className="space-y-4 sm:space-y-5"
                          >
                            {/* Spotlight Header */}
                            <div className="flex items-start justify-between gap-3 border-b border-black/[0.06] pb-3.5 sm:pb-4">
                              <div className="flex items-center gap-3 min-w-0">
                                <div 
                                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl shadow-xs shrink-0" 
                                  style={{ backgroundColor: activeSwatch.bgTint, border: `1px solid ${activeSwatch.border}` }} 
                                />
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="font-serif italic text-[12px] text-[#1a0a0a]/35 select-none">
                                      .{String(selectedSkillIdx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-[8.5px] font-mono tracking-widest uppercase font-semibold text-[#1a0a0a]/50">
                                      {folder.title}
                                    </span>
                                  </div>
                                  <h4 className="font-baskerville text-[20px] sm:text-[23px] font-bold text-[#1a0a0a] not-italic leading-[1.3] pt-0.5 tracking-tight">
                                    {activeItem.name}
                                  </h4>
                                </div>
                              </div>
                              <span className="inline-flex text-[9px] sm:text-[9.5px] font-mono tracking-wider uppercase font-semibold px-3 py-1 rounded-full bg-[#1a0a0a] text-white shadow-xs shrink-0 whitespace-nowrap">
                                {activeItem.badge}
                              </span>
                            </div>

                            {/* Editorial Quote Description Card */}
                            <div className="p-3.5 sm:p-5 rounded-2xl bg-[#FAF8F5] relative border border-black/[0.04] shadow-xs">
                              <span className="text-[#F59E9E] font-serif text-[32px] sm:text-[38px] leading-none absolute -top-1.5 left-2.5 sm:left-3 select-none opacity-40">
                                “
                              </span>
                              <p className="text-[13px] sm:text-[14px] font-medium text-[#1a0a0a]/85 leading-relaxed pl-3.5 sm:pl-4">
                                {activeItem.description}
                              </p>
                            </div>

                            {/* Toolkit Badges */}
                            <div>
                              <span className="text-[8.5px] font-mono uppercase tracking-[0.2em] font-bold text-[#1a0a0a]/40 block mb-2 sm:mb-2.5">
                                CORE TOOLS & TECHNOLOGIES
                              </span>
                              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                                {activeTools.map((tool, tIdx) => (
                                  <span 
                                    key={tIdx} 
                                    className="px-2.5 sm:px-3 py-1 rounded-xl text-[11px] sm:text-[11.5px] font-mono text-[#1a0a0a] shadow-xs font-medium" 
                                    style={{ backgroundColor: activeSwatch.bgTint, border: `1px solid ${activeSwatch.border}` }}
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        {/* Bottom Category Context Strip */}
                        <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-black/[0.04] flex items-center justify-between text-[#1a0a0a]/50 text-[10.5px]">
                          <span className="font-mono text-[9.5px] uppercase tracking-wider">
                            {folder.tag}
                          </span>
                          <span className="text-[10.5px] font-medium italic truncate max-w-[70%] text-right">
                            {folder.description}
                          </span>
                        </div>
                      </div>

                    </div>

                  </motion.div>
                </div>
              )
            })}
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

export function InterpersonalSkills() {
  const [activeSoft, setActiveSoft] = useState<string>("01")

  return (
    <section id="inter-personal-skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full scroll-mt-32">
      <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
        <h2 className="text-[32px] md:text-[50px] font-bold uppercase tracking-wider text-[#1a0a0a] dark:text-white">
          Interpersonal Skills
        </h2>
        <p className="mt-2 md:mt-4 text-muted-foreground font-inter text-base md:text-lg">
          Beyond the pixels and code, I focus on the human side of product development.
        </p>
      </div>

      {/* Animated Expanding Accordion Grid */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 w-full h-[850px] lg:h-[450px]">
        {interpersonalSkills.map((skill) => {
          const isActive = activeSoft === skill.id;
          
          return (
            <motion.div
              layout
              key={skill.id}
              onClick={() => setActiveSoft(skill.id)}
              onMouseEnter={() => setActiveSoft(skill.id)}
              className={`relative rounded-[2.2rem] lg:rounded-[3rem] overflow-hidden cursor-pointer group flex ${
                isActive ? 'flex-[6] lg:flex-[3] bg-white shadow-2xl border-black/5' : 'flex-[1] lg:flex-[1] bg-black/[0.02] border-black/5 hover:bg-black/[0.05]'
              } border transition-all duration-300 ease-in-out`}
            >
              {/* Large Background Number */}
              <div 
                className={`absolute leading-none font-black  text-black/[0.03] select-none pointer-events-none transition-all duration-700 ease-in-out ${
                  isActive 
                    ? 'bottom-2 right-4 lg:bottom-4 lg:right-6 text-[80px] lg:text-[140px]' 
                    : 'top-1/2 right-6 -translate-y-1/2 lg:top-auto lg:-translate-y-0 lg:bottom-6 lg:right-1/2 lg:translate-x-1/2 text-[45px] lg:text-[70px]'
                }`}
              >
                {skill.id}
              </div>
              
              <div className={`absolute inset-0 p-5 lg:p-8 flex ${isActive ? 'flex-col justify-between' : 'flex-row lg:flex-col items-center lg:items-center justify-start lg:justify-between'} gap-4`}>
                
                {/* Icon */}
                <motion.div layout="position" className={`shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-sm transition-colors duration-500 ${isActive ? 'bg-[#1a0a0a]' : 'bg-white'}`}>
                  <skill.icon size={22} className={isActive ? "text-white" : "text-[#1a0a0a]/40"} />
                </motion.div>

                {/* Title & Desc Wrapper */}
                <div className="relative flex flex-col justify-end w-full h-full">
                  
                  {/* INACTIVE STATE TEXT */}
                  <div className={`absolute inset-0 flex items-center lg:items-center justify-start lg:justify-center transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}>
                    <h4 className="font-black uppercase tracking-[0.2em] text-[#1a0a0a]/50 text-[10px] sm:text-xs lg:text-lg lg:[writing-mode:vertical-lr] lg:rotate-180 whitespace-nowrap px-1">
                      {skill.title}
                    </h4>
                  </div>

                  {/* ACTIVE STATE TEXT */}
                  <div className={`flex flex-col justify-end w-full transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-6 pointer-events-none absolute bottom-0'}`}>
                     <h4 className="font-black uppercase tracking-[0.2em] text-[#1a0a0a] text-xl lg:text-3xl mb-3 lg:mb-4 pt-4">
                       {skill.title}
                     </h4>
                     <p className="text-sm lg:text-base text-muted-foreground font-inter leading-relaxed max-w-sm lg:max-w-md pb-1">
                       {skill.desc}
                     </p>
                  </div>

                </div>

              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
