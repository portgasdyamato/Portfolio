"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Users, Lightbulb, PenTool, Database, X, ChevronRight, Zap, Target, MessageSquare, Palette } from "lucide-react"

const skillCategories = [
  {
    id: "ux",
    title: "UX & Product Design",
    icon: PenTool,
    color: "#E5E5E5",
    tabColor: "#CCCCCC",
    accent: "#1a0a0a",
    description: "Methodologies for creating human-centered, accessible, and stunning digital experiences.",
    items: [
      { name: "Design Tooling", desc: "Figma, Adobe XD, Framer, Photoshop, Illustrator, Procreate.", level: 95 },
      { name: "Design Systems", desc: "Component Libraries, Design Tokens, Atomic Design, Shadcn UI.", level: 90 },
      { name: "Interaction Design", desc: "Prototyping, Microinteractions, Motion Design, Gestural UI.", level: 88 },
      { name: "User Research", desc: "Usability Testing, User Interviews, Affinity Mapping, JTBD.", level: 85 }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Code,
    color: "#2C3E50",
    tabColor: "#1A252F",
    accent: "#61DAFB",
    description: "The core frontend stack I use to build robust and scalable applications.",
    items: [
      { name: "Frontend Frameworks", desc: "React.js, Next.js, Redux, React Router, Vite.", level: 95 },
      { name: "Languages & Core", desc: "TypeScript, JavaScript (ES6+), HTML5, CSS3.", level: 90 },
      { name: "UI & Styling", desc: "Tailwind CSS, Shadcn UI, Bootstrap, Material UI.", level: 90 },
      { name: "Animation & Interaction", desc: "Framer Motion, CSS Animations, Lottie, Micro-interactions.", level: 85 }
    ]
  },
  {
    id: "ai",
    title: "AI Engineering & LLMs",
    icon: Zap,
    color: "#FDE68A",
    tabColor: "#FCD34D",
    accent: "#1A0A0A",
    description: "Integrating powerful generative AI models into seamless, end-to-end product experiences.",
    items: [
      { name: "Core LLM Integration", desc: "OpenAI API (GPT-4, Vision), Gemini API, Claude Code & Anthropic.", level: 90 },
      { name: "AI Automation & Workflows", desc: "Agentic AI workflows, n8n automations, LLM logic orchestration.", level: 90 },
      { name: "Prompting & Processing", desc: "Prompt Engineering, NLP, Vibe Coding, Web Speech API.", level: 95 },
      { name: "Product Implementation", desc: "End-to-End AI Product Development, Design-to-Code Ownership.", level: 90 }
    ]
  },
  {
    id: "backend",
    title: "Backend & Infra.",
    icon: Database,
    color: "#1a1a1a",
    tabColor: "#333",
    accent: "#68A063",
    description: "Scalable backend services, REST APIs, and robust DevOps infrastructure.",
    items: [
      { name: "Server & APIs", desc: "Node.js, Express.js, REST APIs, GraphQL, FastAPI, WebSockets.", level: 85 },
      { name: "Databases & ORMs", desc: "PostgreSQL, MongoDB, MySQL, Prisma, Drizzle ORM, Redis.", level: 80 },
      { name: "Backend Languages", desc: "Python, Django, Java, C++.", level: 75 },
      { name: "DevOps & Automation", desc: "Git, GitHub, Vercel, Docker, CI/CD, n8n Workflow Automation.", level: 85 }
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

export default function SkillsShowcase() {
  const [activeFolder, setActiveFolder] = useState<string | null>(null)
  const [activeSoft, setActiveSoft] = useState<string>("01")

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10 w-full">
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
                whileHover="hover"
                // ── MOBILE ONLY OVERRIDE ──
                // Slide up automatically on phone as cards enter view
                whileInView={(typeof window !== 'undefined' && window.innerWidth < 1024) ? "hover" : ""}
                viewport={{ amount: 0.9, once: true }}
                initial="initial"
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
                {/* SINGLE PREMIUM DOCUMENT */}
                <motion.div 
                  className="absolute left-[12%] w-[76%] h-[160px] bg-white rounded-t-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col pt-4 px-5 z-0"
                  initial={{ bottom: 15, rotate: 0 }}
                  variants={{
                    hover: { 
                      bottom: 80,
                      rotate: -1,
                      scale: 1.05
                    }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* High-End Document Placeholder Details */}
                  <div className="flex items-center gap-3 mb-4 mt-3">
                    <div className="w-8 h-8 rounded-lg bg-black/[0.03] flex items-center justify-center">
                       <Icon size={16} color={folder.accent} />
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                       <div className="w-1/2 h-2 bg-black/[0.05] rounded-full" />
                       <div className="w-1/3 h-1.5 bg-black/[0.03] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-1.5 bg-black/[0.02] rounded-full" />
                    <div className="w-full h-1.5 bg-black/[0.02] rounded-full" />
                    <div className="w-4/5 h-1.5 bg-black/[0.02] rounded-full" />
                  </div>
                </motion.div>

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

      {/* 2. Inter-Personal Capabilities Section */}
      <div id="inter-personal-skills" className="mt-48 md:mt-52 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full scroll-mt-32">
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <h2 className="text-[32px] md:text-[50px] font-bold uppercase tracking-wider text-[#1a0a0a] dark:text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Inter-Personal Capabilities
          </h2>
          <p className="mt-2 md:mt-4 text-muted-foreground font-inter text-base md:text-lg">
            Beyond the pixels and code, I focus on the human side of product development.
          </p>
        </div>

        {/* Animated Expanding Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-4 w-full h-[850px] lg:h-[450px]">
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
                  className={`absolute leading-none font-black italic text-black/[0.03] select-none pointer-events-none transition-all duration-700 ease-in-out ${
                    isActive 
                      ? 'bottom-2 right-4 lg:bottom-4 lg:right-6 text-[80px] lg:text-[140px]' 
                      : 'top-1/2 right-6 -translate-y-1/2 lg:top-auto lg:-translate-y-0 lg:bottom-6 lg:right-1/2 lg:translate-x-1/2 text-[45px] lg:text-[70px]'
                  }`} 
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
