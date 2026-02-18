"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Star, Calendar, Code, X, Award, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const prt = "/prt.png"
const vyn = "/vyn.png"
const wel = "/wel.png"
const voxa = "/voxa.png"
const wassup = "/wassup.png"
const dreamin = "/dreamin.png"
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
    title: "Portfolio Website",
    duration: "June 2025 - July 2025",
    date: "June 2025",
    image: prt,
    color: "#FF6B9D",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    description: "Pixel-game inspired interactive portfolio with gamified UI, animations, and responsive layouts to create a memorable personal brand experience.",
    features: [
      "Pixel Character Interaction",
      "Interactive Education Timeline",
      "Responsive Design",
      "Smooth Animations",
      "Game-Inspired Aesthetic"
    ],
    achievements: [
      "Designed gamified pixel character interactions",
      "Built animated timelines with Framer Motion",
      "Deployed on Vercel with 99.9% uptime"
    ],
    liveUrl: "https://pippoportfolio.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Portfolio",
    status: "Completed",
  },
  {
    title: "Pocket Fund",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: pocketfund,
    color: "#9333EA",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Google Gemini AI"],
    description: "A gamified, AI-powered personal finance platform that turns budgeting into an addictive 'Glow-Up' experience.",
    features: [
      "Categorize expenses as Needs, Wants, or Icks",
      "Virtual savings locker with goal tracking",
      "Interactive story-based financial quests",
      "AI Financial Coach powered by Gemini"
    ],
    achievements: [
      "Built complete gamification layer",
      "Integrated AI for personalized coaching",
      "High user engagement through RPG-style mechanics"
    ],
    liveUrl: "https://pocket-fund-theta.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Pocket-Fund",
    status: "Completed",
  },
  {
    title: "VoXa",
    duration: "May 2025 - June 2025",
    date: "May 2025",
    image: voxa,
    color: "#6B5BFF",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Web Speech API"],
    description: "Hands-free productivity app allowing voice-powered task creation, tracking, and analytics.",
    features: [
      "Voice Commands using natural language",
      "Analytics with interactive charts",
      "Glassmorphism design",
      "Real-Time Updates"
    ],
    achievements: [
      "Developed voice commands using Web Speech API",
      "Built scalable backend for 10,000+ tasks",
      "Added analytics dashboard"
    ],
    liveUrl: "https://voxa-taupe.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Voxa",
    status: "Completed"
  },
  {
    title: "Vinyl Records",
    duration: "Dec 2024 - Dec 2024",
    date: "Dec 2024",
    image: vyn,
    color: "#87CEEB",
    technologies: ["React", "Vite", "Tailwind CSS", "YouTube API"],
    description: "A cross-platform vintage music player with YouTube API integration that allows users to discover and hear melodies in classic records.",
    features: [
      "Spinning Record UI",
      "Ad-Free Playback via YouTube",
      "Supports Playlists + Single Tracks",
      "Queue List Management"
    ],
    achievements: ["Deployed on Vercel", "Positive User Feedback"],
    liveUrl: "https://vintage-vinyl.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Vintage-Vinyl",
    status: "Completed",
  },
  {
    title: "Wellness Tracker App Design",
    duration: "Nov 2024 - Nov 2024",
    date: "Nov 2024",
    image: wel,
    color: "#FFB347",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    description: "A comprehensive UI/UX design for a wellness tracking mobile application featuring modern design principles and intuitive user flow.",
    features: [
      "Clean Dashboard with Progress Tracking",
      "Task Management Interface",
      "Streak Tracking System",
      "Modern Dark Theme"
    ],
    achievements: ["Complete Design System", "Interactive Prototype"],
    liveUrl: "https://www.figma.com/design/aih9SixouPHrgM06a2RBj3/wellness-app",
    githubUrl: "https://github.com/portgasdyamato/Wellness-App-Design",
    status: "Completed",
  },
  {
    title: "NLP for Legal Documents",
    duration: "July 2025 - Present",
    date: "In Progress",
    image: "/placeholder.svg",
    color: "#96CEB4",
    technologies: ["Python", "Transformers", "NLP"],
    description: "An AI system that can extract and summarize key legal information from complex legal documents using advanced NLP techniques.",
    features: [
      "Secure Document Handling",
      "AI-Powered Summarization",
      "Key Term Highlighting"
    ],
    achievements: ["Advanced NLP Implementation", "Information Extraction"],
    liveUrl: "",
    githubUrl: "https://github.com/portgasdyamato",
    status: "Ongoing",
  },
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

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
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
                      className="object-cover"
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
                    {projectsData[selectedProject].status} ΓÇó {projectsData[selectedProject].date}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6 uppercase">
                    {projectsData[selectedProject].title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-inter">
                    {projectsData[selectedProject].description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectsData[selectedProject].technologies.map(tech => (
                          <span key={tech} className="px-4 py-2 glass rounded-xl text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {projectsData[selectedProject].features.map(feature => (
                          <div key={feature} className="flex items-center gap-3 p-4 glass rounded-2xl">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
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
