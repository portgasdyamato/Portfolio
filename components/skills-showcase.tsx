"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Users, Lightbulb, PenTool, Database, X, ChevronRight, Zap } from "lucide-react"

const skillCategories = [
  {
    id: "tech",
    title: "Software & Tech",
    icon: Code,
    color: "#1a1a1a",
    tabColor: "#333",
    accent: "#F59E9E",
    description: "The core engineering stack I use to build robust and scalable applications.",
    items: [
      { name: "React & Next.js", desc: "Building blazing fast, SSR-enabled modern web apps.", level: 90 },
      { name: "TypeScript", desc: "Writing type-safe, maintainable, and robust enterprise code.", level: 85 },
      { name: "Node.js", desc: "Developing scalable backend services and REST/GraphQL APIs.", level: 80 },
      { name: "PostgreSQL", desc: "Designing structured relational databases and writing complex queries.", level: 75 }
    ]
  },
  {
    id: "design",
    title: "Design & UX",
    icon: PenTool,
    color: "#E5E5E5",
    tabColor: "#CCCCCC",
    accent: "#1a0a0a",
    description: "Tools and methodologies to create stunning, user-centric digital experiences.",
    items: [
      { name: "Figma", desc: "Advanced prototyping, wireframing, and design system management.", level: 95 },
      { name: "Tailwind CSS", desc: "Rapid UI styling with utility-first CSS and custom themes.", level: 95 },
      { name: "Framer Motion", desc: "Creating fluid, complex web animations and micro-interactions.", level: 85 },
      { name: "Three.js", desc: "Rendering interactive 3D web experiences using WebGL.", level: 70 }
    ]
  },
  {
    id: "soft",
    title: "Interpersonal",
    icon: Users,
    color: "#F59E9E",
    tabColor: "#E08989",
    accent: "#ffffff",
    description: "The underlying soft skills that enable me to collaborate uniquely and lead effectively.",
    items: [
      { name: "Communication", desc: "Clear articulation of ideas with technical and non-technical stakeholders.", level: 95 },
      { name: "Leadership", desc: "Mentoring peers and guiding project teams to successful delivery.", level: 85 },
      { name: "Adaptability", desc: "Quickly learning new environments, frameworks, and workflows.", level: 90 },
      { name: "Problem Solving", desc: "Analytical thinking to tackle complex engineering bottlenecks.", level: 95 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Ecosystem",
    icon: Database,
    color: "#2C3E50",
    tabColor: "#1A252F",
    accent: "#FDE68A",
    description: "The supplementary DevOps and workflow tools that keep everything running smoothly.",
    items: [
      { name: "Git & GitHub", desc: "Version control, CI/CD pipelines, and collaborative workflows.", level: 90 },
      { name: "Docker", desc: "Containerizing applications for consistent deployment environments.", level: 75 },
      { name: "AWS & Vercel", desc: "Cloud infrastructure provisioning and edge deployments.", level: 80 },
      { name: "Prisma ORM", desc: "Type-safe database access and simplified schema migrations.", level: 85 }
    ]
  }
]

export default function SkillsShowcase() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null)

  return (
    <div className="py-24 w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-foreground font-black tracking-[0.2em] uppercase text-[9px] mb-6">
            <Zap size={12} fill="currentColor" strokeWidth={0} />
            The Toolkit
          </div>
          <h2 className="text-[40px] md:text-[60px] lg:text-[75px] font-bold italic text-[#1a0a0a] leading-[1.05] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            My Professional <span className="text-[#F59E9E]">Arsenal.</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground mt-4 font-inter text-lg">
            Explore the specialized skills and interpersonal strengths I bring to the table. Click on any folder to dive into the technical details.
          </p>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
          {skillCategories.map((folder) => {
            const Icon = folder.icon
            const isDark = folder.color === "#1a1a1a" || folder.color === "#2C3E50"
            const textColor = isDark ? "text-white" : "text-[#1a0a0a]"
            
            return (
              <motion.div 
                key={folder.id}
                layoutId={`folder-${folder.id}`}
                onClick={() => setActiveFolder(folder.id)}
                className="relative h-[220px] w-full cursor-pointer group perspective-[1000px]"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* BACK OF FOLDER */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[180px] rounded-b-xl rounded-tr-xl shadow-lg border border-black/5"
                  style={{ backgroundColor: folder.tabColor }}
                  layoutId={`folder-back-${folder.id}`}
                />

                {/* TAB OF FOLDER */}
                <motion.div 
                  className="absolute bottom-[180px] left-0 w-1/2 h-[30px] rounded-t-xl"
                  style={{ backgroundColor: folder.tabColor }}
                  layoutId={`folder-tab-${folder.id}`}
                />
                {/* PAPERS INSIDE */}
                <div className="absolute bottom-[20px] left-[5%] w-[90%] h-[150px] bg-white rounded-t-lg shadow-inner border border-gray-100 transition-transform duration-500 group-hover:-translate-y-6 flex flex-col p-4 opacity-50 group-hover:opacity-100">
                  <div className="w-1/2 h-2 bg-gray-200 rounded-full mb-3" />
                  <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                  <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2" />
                  <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                </div>

                {/* FRONT OF FOLDER */}
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-[180px] rounded-xl shadow-2xl origin-bottom transition-transform duration-500 ease-out group-hover:rotate-x-[-15deg] border border-white/20 p-6 flex flex-col justify-end overflow-hidden"
                  style={{ backgroundColor: folder.color }}
                  layoutId={`folder-front-${folder.id}`}
                >
                  <div className="absolute top-4 right-4 opacity-20 transition-opacity group-hover:opacity-100">
                    <Icon size={48} color={folder.accent} strokeWidth={1} />
                  </div>
                  <h3 className={`text-2xl font-black italic tracking-wide mb-1 ${textColor}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {folder.title}
                  </h3>
                  <p className={`text-xs font-inter uppercase tracking-widest opacity-60 font-medium ${textColor}`}>
                    {folder.items.length} Skills Inside
                  </p>
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
              exit={{ opacity: 0 }}
              onClick={() => setActiveFolder(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
            />

            {/* Expanded Content View */}
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              {skillCategories.map((folder) => {
                if (folder.id !== activeFolder) return null
                const Icon = folder.icon
                const isDark = folder.color === "#1a1a1a" || folder.color === "#2C3E50"
                const textColor = isDark ? "text-white" : "text-[#1a0a0a]"
                const descColor = isDark ? "text-white/60" : "text-black/60"

                return (
                  <motion.div 
                    layoutId={`folder-${folder.id}`}
                    key={`modal-${folder.id}`}
                    className="relative w-full max-w-4xl h-[80vh] sm:h-auto sm:min-h-[500px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row pointer-events-auto"
                    style={{ backgroundColor: folder.color }}
                  >
                    
                    {/* Left Side: Folder Cover Header Representation */}
                    <motion.div 
                      layoutId={`folder-front-${folder.id}`}
                      className="w-full md:w-1/3 p-8 sm:p-12 relative flex flex-col justify-between"
                      style={{ backgroundColor: folder.color }}
                    >
                      <button 
                        onClick={() => setActiveFolder(null)}
                        className={`absolute top-6 right-6 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors ${textColor} md:hidden`}
                      >
                        <X size={20} />
                      </button>
                      
                      <div>
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-black/5 border border-white/10`}>
                          <Icon size={32} color={folder.accent} strokeWidth={1.5} />
                        </div>
                        <h3 className={`text-4xl sm:text-5xl font-black italic tracking-wide mb-4 ${textColor} leading-tight`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {folder.title}
                        </h3>
                        <p className={`text-sm sm:text-base font-inter ${descColor} leading-relaxed`}>
                          {folder.description}
                        </p>
                      </div>
                      
                    </motion.div>

                    {/* Right Side: Skills Documents */}
                    <div className="w-full md:w-2/3 bg-white p-6 sm:p-10 lg:p-14 overflow-y-auto no-scrollbar relative flex flex-col gap-6 sm:gap-8 rounded-t-3xl md:rounded-t-none md:rounded-l-[2rem] shadow-[-10px_0_30px_rgba(0,0,0,0.05)] border-l border-black/5 mt-auto md:mt-0 h-full max-h-[60vh] md:max-h-full">
                      
                      <div className="hidden md:block absolute top-6 right-6">
                        <button 
                          onClick={() => setActiveFolder(null)}
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-black"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-black font-black tracking-[0.2em] uppercase text-[9px] w-fit mb-2">
                        Directory Contents
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 gap-y-10">
                        {folder.items.map((item, idx) => (
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            key={idx} 
                            className="flex flex-col gap-3 group/item border-t border-black/5 pt-4"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-bold font-inter text-[#1a0a0a] group-hover/item:text-brand-500 transition-colors">
                                {item.name}
                              </h4>
                              <span className="text-xs font-black text-black/20 tabular-nums">.{String(idx + 1).padStart(2, '0')}</span>
                            </div>
                            <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                              {item.desc}
                            </p>
                            
                            {/* Skill level bar effect */}
                            <div className="w-full h-1 bg-black/5 rounded-full mt-2 overflow-hidden flex">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${item.level}%` }}
                                transition={{ delay: 0.5 + (idx * 0.1), duration: 0.8, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: folder.color }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                )
              })}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
