"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github, Star, Calendar, Code, X, Award } from "lucide-react"
const prt = "/prt.png"
const vyn = "/vyn.png"
const wel = "/wel.png"
const projectsData = [
  {
    title: "Portflio Website",
    duration: "June 2025 - July 2025",
    date: "June 2025",
    image: prt,
    color: "#FF6B9D",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Lucid React", "Shadcn/ui"],
    description: "A modern, responsive portfolio website showcasing my works and achievements in a pixel game-inspired design.",
    features: [
      "Pixel Character Interaction: A lively character follows the cursor and reacts to user actions",
      "Interactive Education Timeline: Clickable timeline points with detailed modals",
      "Responsive Design: Optimized for mobile, tablet, and desktop",
      "Smooth Animations: Framer Motion-powered transitions",
      "Game-Inspired Aesthetic: Vibrant colors and pixel art fonts",
      "Info Modal: Auto-popup with site details and easter eggs",
      "Social Links: Active and styled hover effects",
      "Live Project Links: Clickable demo and GitHub buttons",
    ],
    achievements: ["Deployed", "99.9% Uptime", "High Performance"],
    liveUrl: "https://pippoportfolio.vercel.app/",
    githubUrl: "https://github.com/portgasdyamato/Portfolio",
    status: "Completed",
  },
  {
    title: "AI Chat Assistant",
    duration: "July 2025 - Mid July 2025",
    date: "July 2025",
    image: "/placeholder.svg?height=300&width=400",
    color: "#4ECDC4",
    technologies: ["Python", "TensorFlow", "React", "FastAPI", "OpenAI API"],
    description:
      "An intelligent chatbot powered by machine learning that can understand context and provide helpful responses.",
    features: [
      "Natural Language Processing",
      "Context-Aware Responses",
      "Multi-language Support",
      "Voice Integration",
      "Learning from Conversations",
      "Custom Training Data",
    ],
    achievements: ["Fast Response", "95% Accuracy Rate", "Accuracy Improvement"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    status: "Ongoing",
  },
  {
    title: "Vinyl Records",
    duration: "Dec 2024 - Dec 2024",
    date: "Dec 2024",
    image: vyn,
    color: "#87CEEB",
    technologies: ["React", "Vite", "Tailwind CSS", "YouTube API", "Vercel"],
    description: "A cross-platform vintage music player with youtube api integration that allows users to discover and hear melodies in classic records without ads.",
    features: [
      "Spinning Record UI — Feel the motion of vintage vinyl",
      "Ad-Free Playback via YouTube — No interruptions",
      "Supports Playlists + Single Tracks — Your music, your way",
      "Queue List — Know what's coming up next or just play",
      "Minimal Controls — Stay focused on the music",
      "Lightweight & Responsive — Fast and fluid experience",
    ],
    achievements: ["Deployed", "Good User reviews", "top favorite"],
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
    technologies: ["Figma", "", "Framer Motion", "Tailwind CSS"],
    description: "A modern, responsive portfolio website with smooth animations and interactive elements.",
    features: [
      "Responsive Design",
      "Smooth Animations",
      "Dark/Light Mode",
      "Contact Form",
      "Blog Integration",
      "SEO Optimized",
    ],
    achievements: ["Good Reviews", "Perfect Lighthouse Score", "Client Approved"],
    liveUrl: "https://www.figma.com/design/aih9SixouPHrgM06a2RBj3/wellness-app?node-id=0-1&t=SoY8Elae4F7R2zQj-1",
    githubUrl: "https://github.com/portgasdyamato/Wellness-App-Design",
    status: "Completed",
  },
  {
    title: "Natural Language Processing for Legal Documents",
    duration: "July 2025 - Present 2025",
    date: "In Progress",
    image: "/placeholder.svg?height=300&width=400",
    color: "#96CEB4",
    technologies: ["Python", "Transformers", "NLTK", "LLM", "NLP"],
    description: "An AI system that can extract and summarize key legal information from complex legal documents.",
    features: [
      "Secure Document Handling",
      "Custom Summary Length",
      "Key Term Highlighting",
      "AI-Powered Summarization",
      "Real-time Results",
      "Model Fine-Tuning Interface",
    ],
    achievements: ["Advanced NLP", "University Project", " Information extraction"],
    liveUrl: "",
    githubUrl: "https://github.com/example",
    status: "Ongoing",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Completed", "Ongoing"]

  const filteredProjects = filter === "All" ? projectsData : projectsData.filter((project) => project.status === filter)

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
        <motion.h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-2 tracking-widest cursor-pointer"          
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

      {/* Projects Grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
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
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              
              onClick={() => setSelectedProject(projectsData.findIndex((p) => p.title === project.title))}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

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
              <div className="p-6 bg-white">
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-tl-3xl rounded-bl-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>

              {/* Project Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src={projectsData[selectedProject].image || "/placeholder.svg"}
                  alt={projectsData[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Project Title */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-2"style={{ fontFamily: "Gamer", }}>{projectsData[selectedProject].title}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-500 text-sm">{projectsData[selectedProject].duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "qax", }}>{projectsData[selectedProject].description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2 "style={{ fontFamily: "Gamer", }}>
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
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2" style={{ fontFamily: "Gamer", }}>
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
                <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2" style={{ fontFamily: "Gamer", }}>
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
