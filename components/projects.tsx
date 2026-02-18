"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Star, Calendar, Code, X, Award } from "lucide-react"
const prt = "/prt.png"
const vyn = "/vyn.png"
const wel = "/wel.png"
const voxa = "/voxa.png"
const muse = "/muse.jpg"
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
    status: "Completed",
  },
  {
    title: "Portfolio Website",
    duration: "June 2025 - July 2025",
    date: "June 2025",
    image: prt,
    color: "#FF6B9D",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Lucid React", "Shadcn UI", "Framer Motion"],
    description: "Pixel-game inspired interactive portfolio with gamified UI, animations, and responsive layouts to create a memorable personal brand experience.",
    features: [
      "Pixel Character Interaction: A lively character follows the cursor and reacts to user actions",
      "Interactive Education Timeline: Clickable timeline points with detailed modals",
      "Responsive Design: Optimized for mobile, tablet, and desktop",
      "Smooth Animations: Framer Motion-powered transitions",
      "Game-Inspired Aesthetic: Vibrant colors and pixel art fonts"
    ],
    achievements: [
      "Designed gamified pixel character interactions; increased average session time 3×",
      "Built animated timelines with Framer Motion, improving information retention",
      "Deployed on Vercel with 99.9% uptime and full mobile responsiveness"
    ],
    liveUrl: "https://pippoportfolio.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Portfolio",
    status: "Completed",
  },
  {
    title: "Pocket Fund: Your Financial Glow-Up Journey",
    duration: "Jan 2026",
    date: "Jan 2026",
    image: pocketfund,
    color: "#9333EA",
    technologies: ["React", "Vite", "Node.js", "Express", "Tailwind CSS", "Shadcn UI", "PostgreSQL", "Drizzle ORM", "Google Gemini AI", "Framer Motion"],
    description: "A gamified, AI-powered personal finance platform that turns budgeting into an addictive 'Glow-Up' experience. Helps users master financial literacy through interactive missions.",
    features: [
      "🥊 The Fight: Categorize expenses as Needs, Wants, or Icks to identify spending leaks",
      "📈 The Glow-Up: Virtual savings locker with goal tracking and progress visualization",
      "🎓 Level Up: Interactive story-based financial literacy quests with gamification",
      "🤖 AI Financial Coach: Personalized advice powered by Google Gemini Pro",
      "🏆 Trophy Case: Track saving streaks, fight streaks, and unlock achievement badges"
    ],
    achievements: [
      "Built complete gamification layer with XP, streaks, and badges",
      "Integrated AI for hyper-personalized financial coaching",
      "Achieved high user engagement through RPG-style mechanics"
    ],
    liveUrl: "https://pocket-fund-theta.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Pocket-Fund",
    status: "Completed",
  },
  {
    "title": "VoXa – Voice-Driven Task Manager",
    "duration": "May 2025 - June 2025",
    "date": "May 2025",
    "image": voxa,
    "color": "#6B5BFF",
    "technologies": ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Web Speech API"],
    "description": "Hands-free productivity app allowing voice-powered task creation, tracking, and analytics for better time efficiency.",
    "features": [
      "🎤 Voice Commands: Add, update, and manage tasks using natural language",
      "📊 Analytics: Visualize productivity with interactive charts and streak tracking",
      "📱 Responsive Design: Optimized for mobile, tablet, and desktop",
      "🎨 Modern UI/UX: Glassmorphism design with dark/light themes",
      "⚡ Real-Time Updates: Instant UI changes across all components"
    ],
    "achievements": [
      "Developed voice commands using Web Speech API + custom NLP",
      "Built scalable backend supporting 10,000+ concurrent tasks",
      "Added analytics dashboard, increasing productivity by ~25%"
    ],
    "liveUrl": "https://voxa-taupe.vercel.app/",
    "githubUrl": "https://github.com/portgasdyamato/Voxa",
    "status": "Completed"
  },
  {
    title: "Vinyl Records",
    duration: "Dec 2024 - Dec 2024",
    date: "Dec 2024",
    image: vyn,
    color: "#87CEEB",
    technologies: ["ReactJS", "Vite", "Tailwind CSS", "YouTube API"],
    description: "Retro-themed, ad-free music player with spinning-vinyl visuals, playlist management, and high-quality playback for an uninterrupted listening experience.",
    features: [
      "Spinning Record UI — Feel the motion of vintage vinyl",
      "Ad-Free Playback via YouTube — No interruptions",
      "Supports Playlists + Single Tracks — Your music, your way",
      "Queue List — Know what's coming up next",
      "Minimal Controls — Stay focused on the music"
    ],
    achievements: [
      "Designed smooth spinning-vinyl UI, creating a nostalgic feel",
      "Integrated YouTube API for high-quality, ad-free playback",
      "Reduced user drop-off by ~35% through offline-like features"
    ],
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
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    description: "A comprehensive UI/UX design for a wellness tracking mobile application featuring modern design principles, intuitive user flow, and engaging visual elements.",
    features: [
      "Clean Dashboard Design with Progress Tracking",
      "Task Management Interface with Completion Status",
      "Streak Tracking and Achievement Badges System",
      "Weekly Calendar View with Activity Indicators", 
      "Modern Dark Theme with Gradient Accents",
      "Responsive Design Components and Layout",
      "Interactive Prototyping with User Flow",
      "Comprehensive Design System and Style Guide",
    ],
    achievements: ["Complete Design System", "Interactive Prototype", "Client Approved Design"],
    liveUrl: "https://www.figma.com/proto/aih9SixouPHrgM06a2RBj3/wellness-app?node-id=6-68&t=oHNB9r9njg4qDP1y-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A68",
    githubUrl: "https://github.com/portgasdyamato/Wellness-App-Design",
    status: "Completed",
  },
  {
    title: "Vidya – AI-Powered Study Platform",
    duration: "Aug 2025 - Present",
    date: "Aug 2025",
    image: "/placeholder.svg?height=300&width=400",
    color: "#F59E0B",
    technologies: ["React", "Next.js", "Node.js", "Express", "OpenAI APIs", "Gemini API", "Tailwind CSS"],
    description: "An AI-powered, multimodal platform that transforms documents, images, and videos into summarized accessible, interactive learning formats for students with disabilities.",
    features: [
      "Inclusive Learning Pathway: Designed for students with visual or hearing disabilities",
      "Multimodal Transformation: Process documents, images, and videos into accessible formats",
      "AI Summarization: Gemini API integrated for quick quizzes and audio output",
      "Complex Content Processing: Utilizes OpenAI Vision, Whisper, and GPT-4",
      "Interactive Learning: Real-time quizzes generated from study material"
    ],
    achievements: [
      "Designed an inclusive learning pathway for over 10 million students",
      "Increased engagement by 35% through AI-driven quizzes",
      "95% accuracy in processing and simplifying educational content"
    ],
    githubUrl: "https://github.com/portgasdyamato",
    status: "Ongoing",
  },
  {
    title: "DreamIn - Theme-Based UI Generator",
    duration: "Early Sep 2025",
    date: "Sep 2025",
    image: dreamin,
    color: "#60A5FA",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "UI/UX Design"],
    description: "DreamIn generates and showcases UI themes inspired by user's imagination. Users can input their mood, explore curated theme galleries, and interact with reusable UI components.",
    features: [
      "Theme-based Generation and Gallery",
      "Interactive Mood Input and Suggestions",
      "Reusable UI Component Library (cards, dialogs, buttons, etc.)",
      "Figma Integration for Theme Previews",
      "Responsive Design for Desktop & Mobile"
    ],
    achievements: [
      "Dynamic mood-to-theme mapping",
      "Unique UI theme gallery",
      "Modular component library"
    ],
    liveUrl: "https://dreaminbypippo.figma.site/",
    githubUrl: "https://github.com/portgasdyamato/DreamIn",
    status: "Completed"
  },
  { 
    title: "AI-Integrated Messaging Platform (Figma Design)",
    duration: "Aug 2025",
    date: "Aug 2025",
    image: wassup,
    color: "#4A90E2",
    technologies: ["Figma", "UI/UX Design", "Prototyping", "Design Systems"],
    description: "A modern collaboration platform design focusing on AI-powered task assistance, glassmorphism, and dark theme elements for seamless teamwork.",
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
      "Delivered interactive prototypes simulating real user scenarios"
    ],
    liveUrl: "https://www.figma.com/proto/gpXHXFEe2v9lKdOlo8usDN/Wassup-web?node-id=17-6376",
    status: "Completed"
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Completed", "Ongoing"]

  // Helper function to parse dates for sorting
  const parseDate = (dateStr: string) => {
    // For "In Progress" or empty dates, return a future date
    if (!dateStr || dateStr === "In Progress") return new Date(9999, 11, 31);
    
    const months: {[key: string]: number} = {
      "Jan": 0, "Feb": 1, "Mar": 2, "Apr": 3, "May": 4, "Jun": 5, 
      "June": 5, "Jul": 6, "July": 6, "Aug": 7, "August": 7, "Sep": 8, 
      "Sept": 8, "Oct": 9, "Nov": 10, "Dec": 11
    };
    
    const parts = dateStr.split(" ");
    // Handle format like "July 2025"
    if (parts.length === 2) {
      const month = months[parts[0]] || 0;
      const year = parseInt(parts[1]) || 2025;
      return new Date(year, month, 1);
    }
    // Default fallback
    return new Date(dateStr);
  };

  // Get projects and sort completed ones by date (newest first)
  const getFilteredProjects = () => {
    let projects = filter === "All" ? projectsData : projectsData.filter((project) => project.status === filter);
    // Always sort by date, newest first
    projects = [...projects].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    return projects;
  };

  const filteredProjects = getFilteredProjects()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="p-8 rounded-3xl relative overflow-hidden "
    >
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-center mb-8 "
      >
        <motion.h2 className="text-3xl md:text-4xl font-light text-black mb-2 tracking-widest cursor-pointer"          
            whileHover={{ 
            scale: 1.1,
            transition: { 
              type: "tween", 
              duration: 0.15,
              ease: "easeOut"
            }
          }}
          style={{ fontFamily: "Gamer", }}>MY PROJECTS</motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF9999] mx-auto rounded-full" />
        <p className="text-gray-600 mt-4 text-lg">Click on project cards to explore details</p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex justify-center gap-3 mb-8"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              filter === category
                ? "bg-gray-100 text-gray-800 shadow-lg border-2 border-gray-300"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid Container */}
      <motion.div className="max-w-[1400px] mx-auto px-4" layout>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="project-glass rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                
                onClick={() => setSelectedProject(projectsData.findIndex((p) => p.title === project.title))}
              >
                {/* Project Image Area - Wider Aspect Ratio */}
                <div className="relative aspect-[16/9] overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full min-w-full min-h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                  }`}
                >
                  {project.status}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: "Gamer", }}>{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="gradient-glass rounded-3xl  p-8 max-w-2xl w-full mx-4 relative 
                max-h-[90vh] overflow-y-auto scrollbar-none
                [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 hover:bg-white/40 transition-colors z-10"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-800" />
              </motion.button>

              {/* Project Image Area (Modal) */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 shadow-2xl border border-white/20">
                <img
                  src={projectsData[selectedProject].image || "/placeholder.svg"}
                  alt={projectsData[selectedProject].title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Project Title */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray mb-2"style={{ fontFamily: "Gamer", }}>{projectsData[selectedProject].title}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-900 text-sm">{projectsData[selectedProject].duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-6" style={{ fontFamily: "qax", }}>{projectsData[selectedProject].description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-950 mb-4 flex items-center gap-2 "style={{ fontFamily: "Gamer", }}>
                  <Star className="w-5 h-5 text-yellow-500" />
                  Key Features
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3" style={{ fontFamily: "qax", }}>
                  {projectsData[selectedProject].features.map((feature, i) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: projectsData[selectedProject].color }}
                      />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-950 mb-4 flex items-center gap-2" style={{ fontFamily: "Gamer", }}>
                  <Code className="w-5 h-5 text-blue-500" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2" style={{ fontFamily: "qax", }}>
                  {projectsData[selectedProject].technologies.map((tech) => (
                    <span key={tech} className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-950 mb-4 flex items-center gap-2" style={{ fontFamily: "Gamer", }}>
                  <Award className="w-5 h-5 text-green-500" />
                  Achievements
                </h4>
                <div className="space-y-2">
                  {projectsData[selectedProject].achievements.map((achievement, i) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-xl"
                      style={{ fontFamily: "qax", }}
                    >
                      <Award className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {projectsData[selectedProject].liveUrl && (
                  <motion.a
                    href={projectsData[selectedProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                )}
                {projectsData[selectedProject].githubUrl && (
                  <motion.a
                    href={projectsData[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
