"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Star, Calendar, Code, X, Award, ArrowUpRight } from "lucide-react"
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
    color: "#FF6B9D",
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
    color: "#6B5BFF",
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
    <div className="py-12 px-4 md:px-8">
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
              Featured <span className="text-gradient">Projects</span>
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
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "hover:bg-purple-500/10 text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Grid - 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-full lg:mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(projectsData.findIndex(p => p.title === project.title))}
              className="group cursor-pointer glass-card rounded-[2rem] overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-fill transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-outfit uppercase">{project.title}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl mb-1"
                  >
                    <ArrowUpRight className="text-black w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-5xl max-h-full overflow-y-auto bg-background rounded-[3rem] p-8 md:p-12 relative border border-white/10 scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                    <Image
                      src={projectsData[selectedProject].image || "/placeholder.svg"}
                      alt={projectsData[selectedProject].title}
                      fill
                      className="object-fill"
                    />
                  </div>
                  <div className="flex gap-4">
                    {projectsData[selectedProject].liveUrl && (
                      <a
                        href={projectsData[selectedProject].liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={20} /> Live Demo
                      </a>
                    )}
                    {projectsData[selectedProject].githubUrl && (
                      <a
                        href={projectsData[selectedProject].githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 px-8 py-4 glass hover:bg-white/10 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <Github size={20} /> Repository
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-purple-600 dark:text-purple-400 font-bold tracking-widest uppercase text-xs mb-4">
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
                        {projectsData[selectedProject].features.map(feature => (
                          <div key={feature} className="flex items-center gap-3 p-4 glass rounded-2xl">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 font-outfit">Achievements</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {projectsData[selectedProject].achievements.map(achievement => (
                          <div key={achievement} className="flex items-center gap-3 p-4 bg-purple-500/5 rounded-2xl border border-purple-500/10">
                            <Award className="w-5 h-5 text-purple-500" />
                            <span className="text-sm font-medium">{achievement}</span>
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
