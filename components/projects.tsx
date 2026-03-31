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
      <div className="mb-8 md:mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 uppercase tracking-tighter">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl font-inter mx-auto">
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
                  initial={{ scale: 0.9, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 50 }}
                  transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
                  className="w-full max-w-5xl mx-auto relative text-white mb-24"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-16 right-0 md:-top-20 md:-right-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all z-50 text-white backdrop-blur-xl"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="w-6 h-6 md:w-8 md:h-8" />
                  </button>

                  <div className="flex flex-col items-center gap-16 md:gap-24">
                    {/* BOUNDLESS IMAGE UNIT */}
                    <div className="relative w-full flex justify-center">
                      <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative w-full max-h-[65vh] flex items-center justify-center"
                      >
                        <img
                          src={projectsData[selectedProject].image || "/placeholder.svg"}
                          alt={projectsData[selectedProject].title}
                          className="max-w-full max-h-[65vh] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        />
                      </motion.div>
                    </div>

                    {/* EDITORIAL CONTENT UNIT */}
                    <div className="flex flex-col items-center text-center max-w-3xl px-4">
                      <span className="text-[#F59E9E] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#F59E9E]/40" />
                        {projectsData[selectedProject].status} • {projectsData[selectedProject].duration}
                        <span className="w-8 h-[1px] bg-[#F59E9E]/40" />
                      </span>
                      
                      <h2 className="text-5xl md:text-8xl font-medium mb-10 leading-[0.9] tracking-tight italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {projectsData[selectedProject].title}
                      </h2>

                      <p className="text-lg md:text-2xl text-white/70 leading-relaxed mb-16 font-light max-w-2xl">
                        {projectsData[selectedProject].description}
                      </p>

                      {/* ACTIONS UNIT */}
                      <div className="flex flex-col md:flex-row items-center gap-6 mb-20 w-full justify-center">
                        {projectsData[selectedProject].liveUrl && (
                          <a
                            href={projectsData[selectedProject].liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative h-14 md:h-16 px-10 bg-white/10 backdrop-blur-3xl border border-white/10 text-white rounded-full flex items-center justify-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] transition-all overflow-hidden w-full md:w-auto"
                          >
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                               <ExternalLink size={18} /> Live Experience
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                          </a>
                        )}
                        {projectsData[selectedProject].githubUrl && (
                          <a
                            href={projectsData[selectedProject].githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative h-14 md:h-16 px-10 bg-white/5 border border-white/5 text-white/60 hover:text-white rounded-full flex items-center justify-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] transition-all overflow-hidden w-full md:w-auto"
                          >
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-500">
                               <Github size={18} /> Source Code
                            </span>
                             <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                          </a>
                        )}
                        <Link
                          href={`/projects/${projectsData[selectedProject].slug}`}
                          className="group relative h-14 md:h-16 px-10 bg-[#F59E9E] text-black rounded-full flex items-center justify-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.25em] transition-all overflow-hidden w-full md:w-auto shadow-[0_10px_30px_-5px_rgba(245,158,158,0.4)]"
                        >
                           <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-500">
                             Full Case Study <ArrowUpRight size={20} />
                           </span>
                           <div className="absolute inset-0 bg-[#E87A7A] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"/>
                        </Link>
                      </div>

                      {/* DATA UNIT */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left w-full border-t border-white/10 pt-16">
                        <div className="space-y-6">
                           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E9E]">Stack Architecture</h4>
                           <div className="flex flex-wrap gap-3">
                              {projectsData[selectedProject].technologies.map((tech: string) => (
                                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-white/70">
                                  {tech}
                                </span>
                              ))}
                           </div>
                        </div>

                        <div className="space-y-8">
                           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E9E]">Core Impact</h4>
                           <div className="space-y-6">
                              {projectsData[selectedProject].achievements.slice(0, 3).map((achievement: string, i: number) => (
                                <div key={i} className="flex items-start gap-4 group/item">
                                  <div className="w-6 h-6 rounded-lg bg-[#F59E9E]/10 text-[#F59E9E] flex items-center justify-center shrink-0 mt-0.5">
                                    <CheckCircle2 size={14} />
                                  </div>
                                  <span className="text-xs md:text-sm font-medium tracking-wide text-white/60 group-hover/item:text-white transition-colors leading-relaxed uppercase">{achievement}</span>
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
    <div className="relative w-full h-[450px] sm:h-[600px] md:h-[850px] flex items-center justify-center overflow-visible perspective-[3500px] select-none">
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
        width: "min(650px, 85vw)",
        height: "850px", 
        transformStyle: "preserve-3d",
        zIndex: Math.round(100 - Math.abs(offset) * 40),
        pointerEvents: isActive ? "auto" : "none",
      }}
      className="bg-transparent group/project cursor-pointer flex flex-col items-center gap-6"
    >
      <div className="relative w-full h-[380px] md:h-[450px] shrink-0 pointer-events-none">
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

      <div className="flex flex-col items-center w-full z-10 mt-4 md:mt-6">
        <motion.div 
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-4 md:mb-6"
        >
          <div className={`px-4 py-1.5 rounded-[0.4rem] text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 shadow-sm ${
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
        
        <h3 className="text-4xl md:text-[52px] font-medium text-[#1a0a0a] dark:text-white leading-[1.1] mb-6 md:mb-8 italic text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
