"use client"

import { motion, AnimatePresence, motionValue, useTransform } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"

// Image Assets
const prt = "/prt.png"
const vyn = "/vyn.png"
const wel = "/wel.png"
const voxa = "/voxa.png"
const wassup = "/wassup.png"
const dreamin = "/dreamin.png"
const muse = "/muse.jpg"
const pocketfund = "/pocket-fund.png"
const yonder = "/yonder.png"

const projectsData = [
  {
    title: "Yonder Wonder",
    duration: "Feb 2026",
    date: "Feb 2026",
    image: yonder,
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
  },
  {
    title: "Pocket Fund: Financial Glow-Up",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: pocketfund,
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
  },
  {
    title: "DreamIn - UI Theme Generator",
    duration: "Sep 2025",
    date: "Sep 2025",
    image: dreamin,
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
    status: "Completed"
  },
  {
    title: "Wassup - AI Collaboration",
    duration: "Aug 2025",
    date: "Aug 2025",
    image: wassup,
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
    status: "Completed"
  },
  {
    title: "Vidya – AI Study Platform",
    duration: "Aug 2025 - Present",
    date: "Aug 2025",
    image: "/placeholder.svg?height=300&width=400",
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
  },
  {
    title: "Portfolio Website",
    duration: "June 2025 - July 2025",
    date: "June 2025",
    image: prt,
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
  },
  {
    title: "VoXa – Voice Task Manager",
    duration: "May 2025 - June 2025",
    date: "May 2025",
    image: voxa,
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
    status: "Completed"
  },
  {
    title: "Vinyl Records",
    duration: "Dec 2024",
    date: "Dec 2024",
    image: vyn,
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
  },
  {
    title: "Wellness Tracker Design",
    duration: "Nov 2024",
    date: "Nov 2024",
    image: wel,
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
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Completed", "Ongoing"]

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter((project) => project.status === filter)

  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 uppercase tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl font-inter">
              A collection of digital experiences combining design thinking with technological innovation.
            </p>
          </div>
          
          <div className="flex gap-2 p-1 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all ${
                  filter === category
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-500/20"
                    : "hover:bg-brand-500/10 text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3D Starburst Carousel */}
      <ProjectCarousel 
        projects={filteredProjects} 
        onProjectClick={(p) => setSelectedProject(projectsData.findIndex(proj => proj.title === p.title))}
      />
      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 relative border border-white/10 scrollbar-hide mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                    <Image
                      src={projectsData[selectedProject].image || "/placeholder.svg"}
                      alt={projectsData[selectedProject].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {projectsData[selectedProject].liveUrl && (
                      <a
                        href={projectsData[selectedProject].liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-5 py-3 md:px-8 md:py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl md:rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    {projectsData[selectedProject].githubUrl && (
                      <a
                        href={projectsData[selectedProject].githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-5 py-3 md:px-8 md:py-4 glass hover:bg-white/10 rounded-xl md:rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                      >
                        <Github size={18} /> Repository
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-brand-600 dark:text-brand-400 font-bold tracking-widest uppercase text-xs mb-4">
                    {projectsData[selectedProject].status} • {projectsData[selectedProject].date}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 uppercase">
                    {projectsData[selectedProject].title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-inter">
                    {projectsData[selectedProject].description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-outfit">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectsData[selectedProject].technologies.map(tech => (
                          <span key={tech} className="px-4 py-2 glass rounded-xl text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                       <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-outfit">Key Features</h4>
                       <div className="grid grid-cols-1 gap-3">
                         {projectsData[selectedProject].features.slice(0, 3).map(feature => (
                           <div key={feature} className="flex items-center gap-3 p-4 glass rounded-2xl">
                             <div className="w-2 h-2 rounded-full bg-brand-500" />
                             <span className="text-sm font-medium">{feature}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function ProjectCarousel({ projects, onProjectClick }: { projects: any[], onProjectClick: (p: any) => void }) {
  // Use a motion value for physics-based rotation
  const x = motionValue(0)
  const rotateY = useTransform(x, (val) => val / 4) // Sensitivity adjustment
  
  // Angle per card for the starburst geometry
  const angleStep = projects.length > 0 ? 360 / projects.length : 0

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none perspective-[2000px]">
      {/* Central Rotating Axis */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[300px] sm:w-[350px] md:w-[500px] h-[400px] md:h-[450px] flex items-center justify-center transition-transform duration-100 ease-out"
        dragTransition={{ power: 0.1, timeConstant: 200 }} // Inertia & momentum
      >
        {projects.map((project, index) => {
          const cardAngle = index * angleStep
          return (
            <motion.div
              key={project.title}
              style={{
                rotateY: cardAngle,
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                onClick={() => onProjectClick(project)}
                className="relative w-full h-full glass-card rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-300 group"
              >
                {/* Product Render */}
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="400px"
                  className="object-cover object-top"
                />
                
                {/* Overlay Detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex gap-2 mb-3">
                    {project.technologies.slice(0, 2).map((tech: string) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-outfit uppercase tracking-tighter leading-none">{project.title}</h3>
                  <div className="mt-4 flex items-center gap-2 text-white/60 text-xs font-mono">
                    <span>VIEW_DETAILS</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Foreshortening / Depth Hint */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/20 via-transparent to-black/20 opacity-40 group-hover:opacity-0 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Decorative Floor Reflection / Shadow */}
      <div className="absolute bottom-10 w-full h-[150px] bg-gradient-to-t from-black/20 to-transparent pointer-events-none blur-3xl opacity-50" />
    </div>
  )
}
