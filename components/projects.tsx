"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useMemo } from "react"
import { createPortal } from "react-dom"
import { ExternalLink, Github, X, ArrowUpRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/projects-data"

const ALLOWED_PROJECTS = ["pocket-fund", "voxa", "wassup", "wellness-tracker", "yonder-wonder", "pippofy"];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Apps", "Website"]

  const validProjects = projectsData.filter(p => ALLOWED_PROJECTS.includes(p.slug))
  const filteredProjects = filter === "All" 
    ? validProjects 
    : validProjects.filter((project: any) => {
        const typeArr = Array.isArray(project.type) ? project.type : [project.type];
        const target = filter === "Apps" ? "App" : filter;
        return typeArr.includes(target);
      })

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'unset'
    }
  }, [selectedProject])

  return (
    <div className="py-6 md:py-16">
      {/* Header */}
      <div className="mb-14 md:mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 md:gap-6"
        >
          <div className="px-4">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-3 md:mb-4 uppercase tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl font-inter mx-auto leading-relaxed">
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

      {/* 3D Carousel Container */}
      <CarouselContainer projects={filteredProjects} onProjectClick={(p) => {
        const idx = projectsData.findIndex(proj => proj.title === p.title)
        setSelectedProject(idx)
      }} />

      {/* MODAL via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject !== null && projectsData[selectedProject] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[99999] overflow-y-auto scrollbar-hide overscroll-contain"
              onClick={() => setSelectedProject(null)}
            >
              <div className="w-full min-h-screen py-12 md:py-24 px-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 100 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 100 }}
                  transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
                  className="w-full max-w-6xl bg-background rounded-[3rem] md:rounded-[4rem] p-6 md:p-16 mx-auto relative border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] text-foreground mb-12"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-4 right-4 md:top-12 md:right-12 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all z-50 text-foreground"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                    <div className="space-y-10">
                      {/* BOUNDLESS IMAGE UNIT WITHIN MODAL */}
                      <div className="relative w-full h-auto flex items-center justify-center">
                        <img
                          src={projectsData[selectedProject].image || "/placeholder.svg"}
                          alt={projectsData[selectedProject].title}
                          className="w-full h-auto max-h-[500px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-5">
                          {projectsData[selectedProject].liveUrl && (
                            <a
                              href={projectsData[selectedProject].liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="group relative h-14 md:h-16 bg-foreground text-background font-black transition-all rounded-2xl flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-widest overflow-hidden"
                            >
                              <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-foreground">
                                <ExternalLink size={18} /> Live Demo
                              </span>
                              <div className="absolute inset-0 bg-background translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                            </a>
                          )}
                          {projectsData[selectedProject].githubUrl && (
                            <a
                              href={projectsData[selectedProject].githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="group relative h-14 md:h-16 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-2xl font-black flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-foreground overflow-hidden"
                            >
                              <span className="relative z-10 flex items-center gap-2 group-hover:text-background transition-colors duration-500">
                                <Github size={18} /> Source
                              </span>
                              <div className="absolute inset-0 bg-foreground translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                            </a>
                          )}
                        </div>
                        
                        <Link
                          href={`/projects/${projectsData[selectedProject].slug}`}
                          className="group relative w-full h-16 md:h-20 bg-brand-600 text-white rounded-2xl md:rounded-[2rem] font-black transition-all flex items-center justify-center gap-3 text-xs md:text-lg uppercase tracking-[0.25em] shadow-2xl shadow-brand-500/20 overflow-hidden"
                        >
                           <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-white">
                             View Full Case Study <ArrowUpRight size={22} />
                           </span>
                           <div className="absolute inset-0 bg-brand-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-brand-600 dark:text-brand-400 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 flex items-center gap-4">
                        <span className="w-12 h-[1px] bg-brand-600" />
                        {projectsData[selectedProject].status} • {projectsData[selectedProject].duration}
                      </span>
                      <h2 className="text-4xl md:text-6xl font-black font-outfit mb-8 uppercase tracking-tighter leading-[0.9] text-foreground">
                        {projectsData[selectedProject].title}
                      </h2>
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-inter font-medium">
                        {projectsData[selectedProject].description}
                      </p>

                      <div className="space-y-10 md:space-y-14">
                        <div>
                          <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 font-outfit border-b border-black/10 dark:border-white/10 pb-2 inline-block">Stack Overview</h4>
                          <div className="flex flex-wrap gap-2.5">
                            {projectsData[selectedProject].technologies.map((tech: string) => (
                              <span key={tech} className="px-4 py-2 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="hidden md:block">
                           <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8 font-outfit border-b border-black/10 dark:border-white/10 pb-2 inline-block">Core Impact</h4>
                           <div className="grid grid-cols-1 gap-5 text-foreground">
                             {projectsData[selectedProject].achievements.slice(0, 3).map((achievement: string, i: number) => (
                               <div key={i} className="flex items-center gap-5 p-6 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-[1.5rem] group/item hover:border-brand-500/50 transition-all duration-500 shadow-sm">
                                 <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/10">
                                   <CheckCircle2 size={24} />
                                 </div>
                                 <span className="text-sm md:text-base font-bold uppercase tracking-tight text-foreground/70 group-hover/item:text-foreground transition-colors leading-snug">{achievement}</span>
                               </div>
                             ))}
                           </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

function CarouselContainer({ projects, onProjectClick }: { projects: typeof projectsData, onProjectClick: (p: typeof projectsData[0]) => void }) {
  const [index, setIndex] = useState(0)
  const [dragProgress, setDragProgress] = useState(0)
  const [containerWidth, setContainerWidth] = useState(1200)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setContainerWidth(window.innerWidth)
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const spacing = containerWidth < 768 ? containerWidth * 0.8 : Math.min(1000, containerWidth * 0.6)

  const handleStep = (distance: number) => {
    setIndex((prev) => {
      let next = (prev + distance) % projects.length
      if (next < 0) next += projects.length
      return next
    })
    setDragProgress(0)
  }

  const handleDragEnd = (_: any, info: any) => {
    const velocity = info.velocity.x
    const distanceDragged = info.offset.x
    let steps = Math.round(-distanceDragged / spacing)
    if (steps === 0 && Math.abs(velocity) > 400) {
      steps = velocity > 0 ? -1 : 1
    }
    if (steps !== 0) {
      handleStep(steps)
    } else {
      setDragProgress(0)
    }
  }

  return (
    <div className="relative w-full h-[550px] sm:h-[700px] md:h-[850px] flex items-center justify-center overflow-visible perspective-[3500px] select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,126,126,0.01),transparent_70%)] pointer-events-none" />

      <motion.div 
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDrag={(_, info) => setDragProgress(info.offset.x / spacing)}
        onDragEnd={handleDragEnd}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing z-20"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {projects.map((project, i) => {
            let offset = i - index
            if (offset > projects.length / 2) offset -= projects.length
            if (offset < -projects.length / 2) offset += projects.length
            const combinedOffset = offset + dragProgress
            if (Math.abs(combinedOffset) > 2.5) return null
            return (
              <ProjectCard
                key={project.title}
                project={project}
                offset={combinedOffset}
                isActive={Math.abs(combinedOffset) < 0.25}
                onProjectClick={onProjectClick}
                onMove={() => handleStep(Math.round(offset))}
                spacing={spacing}
                index={i}
              />
            )
          })}
        </AnimatePresence>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 z-50 pointer-events-none">
        <div className="flex gap-2.5">
          {projects.map((_, i) => (
            <motion.div 
              key={i}
              initial={false}
              animate={{ 
                width: index === i ? 40 : 8,
                backgroundColor: index === i ? "#fff" : "rgba(255,255,255,0.15)"
              }}
              className="h-1 rounded-full backdrop-blur-sm" 
            />
          ))}
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
          <span className="w-10 h-[1px] bg-white/10" />
          MODULE_INDEX_0{index + 1}
          <span className="w-10 h-[1px] bg-white/10" />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, offset, isActive, onProjectClick, onMove, spacing, index }: { 
  project: typeof projectsData[0], 
  offset: number, 
  isActive: boolean, 
  onProjectClick: (p: typeof projectsData[0]) => void,
  onMove: () => void,
  spacing: number,
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentRotation, setCurrentRotation] = useState(0)
  
  const handleMouseEnter = () => {
    setIsHovered(true)
    // Significantly increased tilt for a more 'breathtaking' creative interaction
    const val = (Math.random() * 5 + 7) * (Math.random() > 0.5 ? 1 : -1);
    setCurrentRotation(val)
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onTap={() => {
        if (isActive) {
          onProjectClick(project)
        } else {
          onMove()
        }
      }}
      whileHover={!isActive ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
      animate={{
        x: offset * spacing, 
        scale: 1 - Math.abs(offset) * 0.1,
        opacity: 1 - Math.abs(offset) * 0.4,
        rotateY: offset * 20,
        z: -Math.abs(offset) * 150,
        filter: `blur(${Math.abs(offset) * 2}px)`,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 28, mass: 1 }}
      style={{
        position: "absolute",
        width: "min(650px, 92vw)",
        height: "auto", 
        minHeight: "500px",
        transformStyle: "preserve-3d",
        zIndex: Math.round(100 - Math.abs(offset) * 40),
        pointerEvents: isActive ? "auto" : "none",
      }}
      className="bg-transparent group/project cursor-pointer flex flex-col items-center gap-4 md:gap-6"
    >
      <div className="relative w-full h-[280px] sm:h-[350px] md:h-[450px] shrink-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? currentRotation : 0
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
           <Image
             src={project.image || "/placeholder.svg"}
             alt={project.title}
             fill
             className="object-contain"
           />
        </motion.div>
      </div>

      <div className="flex flex-col items-center w-full z-10 mt-2 md:mt-6">
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-4 md:mb-6"
        >
          <div className={`px-3 py-1 rounded-[0.4rem] text-white text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 shadow-sm ${
            project.status === 'Completed' ? 'bg-[#28B880]' : 'bg-amber-500'
          }`}>
            <div className="w-1 h-1 bg-white rounded-full animate-pulse" />
            {project.status}
          </div>

          {project.technologies.slice(0, 3).map((tech) => (
            <div key={tech} className="flex items-center gap-2.5">
              <span className="text-[#F59E9E]/40 font-light translate-y-[-1px]">|</span>
              <span className="text-[#1a0a0a]/60 dark:text-white/60 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em]">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
        
        <h3 className="text-3xl md:text-[52px] font-medium text-[#1a0a0a] dark:text-white leading-[1.1] mb-5 md:mb-8 italic text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {project.title}
        </h3>
        
        <div className="flex items-center justify-center pointer-events-auto w-full">
           <AnimatePresence>
             {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                  className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 w-full"
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      onProjectClick(project)
                    }}
                    className="group relative h-12 md:h-[52px] px-8 md:px-10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl border border-[#1a0a0a]/5 dark:border-white/10 text-[#1a0a0a] dark:text-white rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] transition-all flex items-center justify-center overflow-hidden shadow-sm"
                  >
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white dark:group-hover:text-[#1a0a0a]">Quick View</span>
                    <div className="absolute inset-0 bg-[#1a0a0a] dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                  </button>
                  
                  <Link 
                    href={`/projects/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative h-12 md:h-[52px] px-10 md:px-12 bg-[#F59E9E] text-[#1a0a0a] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.25em] transition-all flex items-center justify-center overflow-hidden border border-[#1a0a0a]/5 dark:border-white/5 shadow-[0_15px_40px_-10px_rgba(245,158,158,0.4)]"
                    >
                      <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-500 group-hover:text-white">
                         Case Study <ArrowUpRight size={16} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                      </span>
                      <div className="absolute inset-0 bg-[#E87A7A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                    </motion.div>
                  </Link>
                </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
