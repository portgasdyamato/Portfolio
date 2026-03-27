"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ExternalLink, Github, X, ArrowUpRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/projects-data"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", "Completed", "Ongoing"]

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter((project) => project.status === filter)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <div className="py-6 md:py-16">
      {/* Header */}
      <div className="mb-8 md:mb-12">
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

      {/* 3D Carousel Container */}
      <CarouselContainer projects={filteredProjects} onProjectClick={(p) => {
        const idx = projectsData.findIndex(proj => proj.title === p.title)
        setSelectedProject(idx)
      }} />

      {/* Modal - RE-ENGINEERED WITH BODY LOCK */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[9999] overflow-y-auto scrollbar-hide"
            onClick={() => setSelectedProject(null)}
          >
            <div className="min-h-full w-full flex items-center justify-center p-4 md:p-24">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 35, stiffness: 250 }}
                className="w-full max-w-6xl bg-background rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 relative border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] text-foreground"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 md:top-12 md:right-12 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all z-50 text-foreground shadow-2xl"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                  <div className="space-y-10">
                    <div className="relative aspect-[16/10] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/5">
                      <Image
                        src={projectsData[selectedProject].image || "/placeholder.svg"}
                        alt={projectsData[selectedProject].title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-2 gap-5">
                        {projectsData[selectedProject].liveUrl && (
                          <a
                            href={projectsData[selectedProject].liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="h-14 md:h-16 bg-foreground text-background hover:bg-white transition-all rounded-2xl font-black flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-widest shadow-xl shadow-black/10"
                          >
                            <ExternalLink size={18} /> Live Demo
                          </a>
                        )}
                        {projectsData[selectedProject].githubUrl && (
                          <a
                            href={projectsData[selectedProject].githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="h-14 md:h-16 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-2xl font-black flex items-center justify-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-foreground backdrop-blur-sm shadow-xl"
                          >
                            <Github size={18} /> Source
                          </a>
                        )}
                      </div>
                      
                      <Link
                        href={`/projects/${projectsData[selectedProject].slug}`}
                        className="w-full h-16 md:h-20 bg-brand-600 hover:bg-brand-500 text-white rounded-2xl md:rounded-[2rem] font-black transition-all flex items-center justify-center gap-3 text-xs md:text-lg uppercase tracking-[0.25em] shadow-2xl shadow-brand-500/20 group relative overflow-hidden"
                      >
                         View Full Case Study
                         <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-brand-600 dark:text-brand-400 font-black tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 flex items-center gap-4">
                      <span className="w-12 h-[1px] bg-brand-600" />
                      {projectsData[selectedProject].status} • {projectsData[selectedProject].duration}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit mb-8 uppercase tracking-tighter leading-[0.9] text-foreground">
                      {projectsData[selectedProject].title}
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 font-inter font-medium text-foreground">
                      {projectsData[selectedProject].description}
                    </p>

                    <div className="space-y-10 md:space-y-14">
                      <div>
                        <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6 font-outfit border-b border-black/10 dark:border-white/10 pb-2 inline-block">Stack Overview</h4>
                        <div className="flex flex-wrap gap-2.5">
                          {projectsData[selectedProject].technologies.map(tech => (
                            <span key={tech} className="px-4 py-2 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest text-foreground">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden md:block">
                         <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8 font-outfit border-b border-black/10 dark:border-white/10 pb-2 inline-block">Core Impact</h4>
                         <div className="grid grid-cols-1 gap-5 text-foreground">
                           {projectsData[selectedProject].achievements.slice(0, 3).map((achievement, i) => (
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
      </AnimatePresence>
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
            if (Math.abs(combinedOffset) > 3) return null
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
  return (
    <motion.div
      onTap={() => {
        if (isActive) {
          onProjectClick(project)
        } else {
          onMove()
        }
      }}
      whileHover={!isActive ? { scale: 1.02, filter: `blur(0px) brightness(1.2)` } : {}}
      whileTap={{ scale: 0.98 }}
      animate={{
        x: offset * spacing, 
        scale: 1 - Math.abs(offset) * 0.1,
        opacity: 1 - Math.abs(offset) * 0.4,
        rotateY: offset * 20,
        z: -Math.abs(offset) * 150,
        filter: `blur(${Math.abs(offset) * 2}px)`,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 28,
        mass: 1
      }}
      style={{
        position: "absolute",
        width: "min(750px, 90vw)",
        aspectRatio: "16/10",
        transformStyle: "preserve-3d",
        zIndex: Math.round(100 - Math.abs(offset) * 40),
        pointerEvents: "auto",
      }}
      className="rounded-[1.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)] bg-slate-900 group cursor-pointer relative"
    >
      <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none z-30 rounded-tl-[1.5rem] md:rounded-tl-[3.5rem]">
        <div className={`absolute top-7 -left-12 w-[160%] py-2 -rotate-45 text-center text-[9px] font-bold uppercase tracking-[0.25em] shadow-[0_10px_20px_rgba(0,0,0,0.4)] ${
          project.status === 'Completed' 
            ? 'bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white' 
            : 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white'
        }`}>
          {project.status}
        </div>
      </div>

      <div className="relative w-full h-full pointer-events-none">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-10">
          <motion.div
            animate={{ 
              opacity: Math.abs(offset) < 0.5 ? 1 : 0,
              y: Math.abs(offset) < 0.5 ? 0 : 20
            }}
            className="flex flex-col items-center text-center w-full"
          >
            <div className="flex gap-1.5 md:gap-2 mb-2 md:mb-5">
              {project.technologies.slice(0, 2).map((tech) => (
                <span key={tech} className="px-2 py-1 bg-white/10 border border-white/20 text-white text-[7px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] rounded-full backdrop-blur-xl">
                  {tech}
                </span>
              ))}
            </div>
            
            <h3 className="text-lg md:text-4xl lg:text-5xl font-black text-white font-outfit uppercase tracking-tighter mb-2 md:mb-6 leading-tight">
              {project.title}
            </h3>
            
            <div className="flex flex-col items-center gap-2 md:gap-4">
              <div className={`hidden md:block px-5 py-2 rounded-full text-[12px] font-mono tracking-[0.4em] uppercase transition-all duration-700 ${isActive ? 'bg-white text-black shadow-2xl shadow-white/20' : 'bg-white/5 text-white/30 border border-white/10'}`}>
                {isActive ? 'SYSTEM_ACTIVE' : 'IDLE_STATE'}
              </div>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex gap-2 md:gap-4 pointer-events-auto mt-1 md:mt-4"
                >
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      onProjectClick(project)
                    }}
                    className="h-10 md:h-12 px-4 md:px-6 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center"
                  >
                    Quick View
                  </button>
                  <Link 
                    href={`/projects/${project.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="h-10 md:h-12 px-4 md:px-6 bg-brand-600 text-white rounded-xl md:rounded-2xl text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-brand-700 transition-all shadow-xl shadow-brand-500/20 flex items-center justify-center gap-1.5 md:gap-2"
                  >
                    Case Study <ArrowUpRight size={12} className="md:w-[14px] md:h-[14px]" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          <div className="absolute top-4 right-4 md:top-12 md:right-12 pointer-events-none">
             <div className="flex flex-col items-end gap-1 md:gap-2">
                <span className="text-[7px] md:text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">Ref. 0{index + 1}</span>
                <div className={`w-8 h-8 md:w-16 md:h-16 bg-brand-500 text-white rounded-full flex items-center justify-center shadow-xl md:shadow-2xl shadow-brand-500/40 transition-all duration-700 ${isActive ? 'scale-100 rotate-0' : 'scale-0 rotate-90 opacity-0'}`}>
                  <ArrowUpRight className="w-4 h-4 md:w-8 md:h-8" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
