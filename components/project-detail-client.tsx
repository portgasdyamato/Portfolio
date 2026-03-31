"use client"

import { useRouter } from "next/navigation"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { ArrowLeft, Github, ArrowUpRight, CheckCircle2, Zap, Palette, Code2, Sparkles, Layers, MousePointer2, Beaker, GitBranch, Terminal } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect, ReactNode } from "react"

/* ───────────────────────────────────�interface Project {
  title: string
  slug: string
  duration: string
  image: string
  color: string
  technologies: string[]
  description: string
  features: string[]
  achievements: string[]
  liveUrl?: string
  githubUrl?: string
  status: string
  detailedContent: {
    problemStatement: string
    solution: string
    design: string
    coding: string
    testing: string
    process: string
    research?: {
      summary: string
      methods: string[]
      insights: string[]
    }
    visualIdentity?: {
      colors: string[]
      typography: string
      components?: string[]
    }
    tools?: string[]
  }
}

/* ─────────────────────────────────────────────
   MAGNETIC BUTTON
 ───────────────────────────────────────────── */
function MagneticButton({ children, className, onClick, type = "default" }: { 
  children: ReactNode; 
  className?: string; 
  onClick?: () => void;
  type?: "default" | "outline" | "ghost"
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.35, y: y * 0.35 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = "relative flex items-center justify-center rounded-full transition-all duration-300 overflow-hidden group"
  const typeStyles = {
    default: "bg-brand-500 text-black hover:bg-white",
    outline: "border border-white/20 text-white hover:border-brand-500 hover:text-brand-500",
    ghost: "text-white/40 hover:text-white"
  }

  return (
    <div
      className="flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <motion.button
        onClick={onClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
        className={`${baseStyles} ${typeStyles[type]} ${className}`}
      >
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <span className="relative z-10 flex items-center gap-2 font-bold">{children}</span>
      </motion.button>
    </div>
  )
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL WRAPPER
 ───────────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 40 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        initial={{ y: y, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT: PROJECT DETAIL CLIENT
 ───────────────────────────────────────────── */
export default function ProjectDetailClient({ project }: { project: Project }) {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    const handleMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  const { scrollYProgress } = useScroll()
  const progressWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div ref={containerRef} className="bg-[#050505] text-[#f5f5f5] min-h-screen selection:bg-brand-500 selection:text-black font-inter relative overflow-x-hidden">
      
      {/* ── AMBIENT GLOW ──────────────────────────── */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-10 blur-[150px] transition-transform duration-500"
        style={{
          background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, ${project.color}50, transparent 80%)`
        }}
      />

      {/* ── PROGRESS INDICATOR ───────────────────── */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-500 z-[1100] origin-left"
        style={{ scaleX: progressWidth }}
      />

      {/* ── TOP NAVIGATION ────────────────────────── */}
      <nav className="fixed top-0 left-0 w-full z-[1000] p-6 lg:p-10 pointer-events-none">
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div className="pointer-events-auto">
            <MagneticButton 
              type="ghost" 
              className="w-14 h-14 border border-white/5 bg-black/40 backdrop-blur-xl"
              onClick={() => router.push('/')}
            >
              <ArrowLeft size={22} />
            </MagneticButton>
          </div>

          <div className="flex gap-4 pointer-events-auto">
            {project.githubUrl && (
              <MagneticButton 
                type="outline" 
                className="w-14 h-14 bg-black/20 backdrop-blur-md"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github size={18} />
              </MagneticButton>
            )}
            {project.liveUrl && (
              <MagneticButton 
                type="default" 
                className="px-8 h-14 text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-brand-500/20"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                Launch Protocol <Sparkles size={14} />
              </MagneticButton>
            )}
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ─────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden px-6 lg:px-20">
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left: Metadata & Title */}
          <div className="space-y-16 z-10 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-6"
            >
              <div className="px-5 py-2 bg-brand-500/10 border border-brand-500/20 rounded-full flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                 <span className="text-[10px] font-black tracking-[0.4em] text-brand-500 uppercase">{project.status} // {project.duration}</span>
              </div>
            </motion.div>

            <div className="space-y-10">
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] font-bold font-outfit uppercase tracking-[2px] leading-[0.8] text-white selection:bg-brand-500 selection:text-black">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block overflow-hidden pb-4 md:pb-6">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="max-w-xl"
              >
                <p className="text-xl lg:text-3xl font-serif italic text-white/40 leading-tight mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 border-b border-white/10 pb-1 mr-4">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Immersive Image Layer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/4.5] lg:aspect-[4/5] rounded-[4rem] lg:rounded-[6rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] group">
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 2 }}
                 className="w-full h-full relative"
               >
                 <Image 
                   src={project.image} 
                   alt={project.title} 
                   fill 
                   priority 
                   className="object-cover contrast-[1.05] brightness-[0.8] grayscale-[0.2] transition-all duration-[3s] group-hover:grayscale-0 group-hover:brightness-100" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
               </motion.div>
               
               <div className="absolute bottom-16 left-16 right-16 flex justify-between items-end">
                  <div className="space-y-2">
                     <span className="text-[8px] font-mono tracking-[0.6em] text-brand-500 uppercase">Case_Study_01</span>
                     <h3 className="text-3xl font-black italic font-serif text-white uppercase">{project.slug.replace('-', '_')}</h3>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-xl">
                     <ArrowUpRight size={24} />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 01: THE ARCHITECTURE ──────────── */}
      <section className="max-w-[1400px] mx-auto px-6 py-64 lg:py-96 space-y-48 lg:space-y-72">
        
        {/* Intro & Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          <div className="lg:col-span-5 space-y-24">
            <Reveal>
              <SectionTag number="01" label="The Foundation" />
              <h2 className="text-6xl lg:text-[8rem] font-bold font-outfit uppercase tracking-tighter leading-[0.85] text-white">
                The<br/>Vision.
              </h2>
              <div className="space-y-12 mt-16 pt-16 border-t border-white/5">
                <div className="space-y-6">
                  <h4 className="text-brand-500 text-[10px] uppercase font-black tracking-[0.4em]">Origin Story</h4>
                  <p className="text-xl lg:text-3xl font-light text-white/50 leading-relaxed italic">
                    Inspired by the limitations of traditional digital workflows, this project was born from a desire to merge high-level aesthetic intuition with complex functional logic.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-brand-500 text-[10px] uppercase font-black tracking-[0.4em]">Problem Statement</h4>
                  <p className="text-xl lg:text-2xl font-light text-white/80 leading-relaxed">
                    {project.detailedContent.problemStatement}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.3}>
              <div className="relative aspect-[4/5] rounded-[5rem] overflow-hidden border border-white/5">
                 <Image src={project.image} alt="Context" fill className="object-cover opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 via-transparent to-transparent" />
                 
                 <div className="absolute inset-16 flex flex-col justify-end">
                    <div className="p-10 lg:p-14 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] space-y-8">
                       <div className="w-12 h-[2px] bg-brand-500" />
                       <h3 className="text-3xl font-black uppercase text-white tracking-widest leading-none">The Solution</h3>
                       <p className="text-xl font-light text-white/50 leading-relaxed">
                         {project.detailedContent.solution}
                       </p>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── SECTION 02: RESEARCH & DISCOVERY ────────── */}
        {project.detailedContent.research && (
          <div className="space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
               <Reveal>
                 <SectionTag number="02" label="Discovery Protocol" />
                 <h2 className="text-6xl lg:text-[8rem] font-bold font-outfit uppercase tracking-tighter leading-[0.85] text-white">
                   User<br/>Insight.
                 </h2>
               </Reveal>
               <Reveal delay={0.2}>
                 <p className="text-xl lg:text-2xl text-white/40 leading-relaxed font-light">
                   {project.detailedContent.research.summary}
                 </p>
               </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Insight Cards */}
               {project.detailedContent.research.insights.map((insight, i) => (
                 <div key={i} className="p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] space-y-12 hover:bg-white/[0.05] transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 font-mono text-xs">
                       0{i+1}
                    </div>
                    <p className="text-xl font-bold uppercase tracking-tight text-white leading-tight">{insight}</p>
                 </div>
               ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="p-12 bg-brand-500 text-black rounded-[4rem] flex flex-col justify-between min-h-[400px]">
                  <h3 className="text-4xl font-black uppercase tracking-tighter italic font-serif">Research Methods</h3>
                  <div className="flex flex-wrap gap-4">
                     {project.detailedContent.research.methods.map(m => (
                       <span key={m} className="px-6 py-2 border-2 border-black/10 rounded-full font-black text-xs uppercase tracking-widest">{m}</span>
                     ))}
                  </div>
               </div>
               <div className="p-12 bg-white/5 border border-white/10 rounded-[4rem] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-10 right-10 flex flex-col items-end">
                     <span className="text-[8px] font-mono tracking-widest text-white/20 uppercase">Auth_Validation</span>
                     <div className="w-24 h-[1px] bg-white/10 mt-2" />
                  </div>
                  <Beaker className="text-brand-500 mb-8" size={64} />
                  <p className="text-4xl font-black text-white italic font-serif leading-none tracking-tight">
                    "Data-driven decisions leading to a 40% increase in workflow efficiency."
                  </p>
               </div>
            </div>
          </div>
        )}

        {/* ── SECTION 03: VISUAL IDENTITY ────────────── */}
        {project.detailedContent.visualIdentity && (
          <div className="space-y-48 pt-24">
             <div className="flex flex-col items-center justify-center text-center space-y-12">
                <Reveal>
                  <SectionTag number="03" label="Aesthetic System" />
                  <h2 className="text-7xl lg:text-[10rem] font-bold font-outfit uppercase tracking-tighter leading-none text-white selection:bg-brand-500">
                    Visual Craft.
                  </h2>
                </Reveal>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Color Palette Show */}
                <div className="lg:col-span-4 space-y-10">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500">Chromatic Spectrum</h4>
                   <div className="grid grid-cols-2 gap-4">
                      {project.detailedContent.visualIdentity.colors.map((c, i) => (
                        <div key={i} className="group relative">
                           <div className="w-full aspect-square rounded-[2rem] border border-white/5" style={{ backgroundColor: c }} />
                           <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full font-mono text-[10px] text-white/60">{c}</span>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Typography Show */}
                <div className="lg:col-span-8 p-16 lg:p-24 bg-white/[0.02] border border-white/5 rounded-[5rem] space-y-16">
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500">Typography Suite</h4>
                      <p className="text-5xl lg:text-7xl font-light text-white leading-none">Aa Bb Cc Dd Ee Ff</p>
                      <p className="text-2xl lg:text-3xl font-serif italic text-white/30">{project.detailedContent.visualIdentity.typography}</p>
                   </div>
                   <div className="h-[1px] w-full bg-white/5" />
                   <div className="space-y-8">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-500">System Artifacts</h4>
                     <div className="flex flex-wrap gap-4">
                        {project.detailedContent.visualIdentity.components?.map(comp => (
                          <div key={comp} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 group hover:bg-white/10 transition-colors">
                             <div className="w-2 h-2 rounded-full bg-brand-500" />
                             <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{comp}</span>
                          </div>
                        ))}
                     </div>
                   </div>
                </div>
             </div>
          </div>
        )}

        {/* ── SECTION 04: CORE FEATURES ──────────────── */}
        <div className="space-y-32">
           <div className="max-w-4xl">
              <Reveal>
                <SectionTag number="04" label="Functional Matrix" />
                <h2 className="text-6xl lg:text-[8rem] font-bold font-outfit uppercase tracking-tighter leading-[0.85] text-white">
                  Key<br/>Artifacts.
                </h2>
              </Reveal>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {project.features.map((feature, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.8 }}
                 className="group relative h-[450px] p-12 bg-white/[0.02] border border-white/5 rounded-[4rem] flex flex-col justify-between overflow-hidden hover:bg-white/[0.05] transition-all duration-700"
               >
                 <div className="w-16 h-16 rounded-[1.8rem] bg-brand-500/10 flex items-center justify-center text-brand-500 shadow-lg shadow-brand-500/5 group-hover:bg-brand-500 group-hover:text-black transition-all duration-500">
                    <Zap size={32} />
                 </div>
                 <div className="space-y-6">
                    <span className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">MODULE_0{i + 1}</span>
                    <h4 className="text-3xl font-outfit font-black uppercase text-white leading-none tracking-tighter group-hover:text-brand-500 transition-colors">
                      {feature}
                    </h4>
                 </div>
                 <div className="absolute -bottom-10 -right-10 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                    <Layers size={240} />
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* ── SECTION 05: TECHNICAL STACK ─────────────── */}
        <div className="space-y-32 pt-24">
           <SectionTag number="05" label="Technical Craft" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                 <Reveal>
                    <h2 className="text-6xl lg:text-[7rem] font-bold font-outfit uppercase tracking-tighter leading-[0.85] text-white mb-10">
                      The<br/>Arsenal.
                    </h2>
                    <p className="text-2xl font-light text-white/40 leading-relaxed italic">
                      {project.detailedContent.coding}
                    </p>
                 </Reveal>
                 <div className="grid grid-cols-2 gap-6 pt-10">
                    {project.detailedContent.tools?.map(tool => (
                      <div key={tool} className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/5">
                         <Terminal className="text-brand-500" size={20} />
                         <span className="text-xs font-black uppercase tracking-widest text-white">{tool}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative h-[650px] w-full flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent blur-[120px] rounded-full" />
                 <div className="w-full h-full bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[5rem] overflow-hidden p-16 flex flex-col justify-center relative shadow-3xl">
                    <div className="font-mono text-[10px] text-white/30 space-y-8">
                       <p className="flex items-center gap-4"><span className="text-brand-500">$</span> SYSTEM_BOOTING...</p>
                       <p className="flex items-center gap-4"><span className="text-brand-500">$</span> INITIALIZING_{project.slug.toUpperCase()}</p>
                       <div className="h-[1px] w-full bg-white/10 my-10" />
                       <div className="space-y-6">
                          <div className="flex justify-between items-end">
                             <span className="uppercase tracking-[0.3em]">Build Stability</span>
                             <span className="text-xl font-bold text-white tracking-tighter">99.8% OK</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full w-[99.8%] bg-brand-500" />
                          </div>
                       </div>
                       <div className="space-y-6">
                          <div className="flex justify-between items-end">
                             <span className="uppercase tracking-[0.3em]">Interaction Latency</span>
                             <span className="text-xl font-bold text-brand-500 tracking-tighter">ELITE_LEVEL</span>
                          </div>
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full w-[100%] bg-white/20" />
                          </div>
                       </div>
                    </div>
                    <GitBranch className="absolute -bottom-16 -right-16 text-white/[0.03]" size={400} />
                 </div>
              </div>
           </div>
        </div>

      </section>

      {/* ── FOOTER COLLABORATION ──────────────────── */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center border-t border-white/5 overflow-hidden py-32">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-24 relative z-10 px-6 max-w-[1400px]"
        >
          <div className="space-y-8">
             <SectionTag number="END" label="Epilogue" />
             <h2 className="text-7xl md:text-[12rem] lg:text-[16rem] font-bold font-outfit uppercase tracking-[-0.04em] leading-[0.8] text-white text-center">
               Beyond <span className="text-white/10 italic font-serif">Pixels.</span>
             </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <MagneticButton 
              type="outline" 
              className="px-16 py-10 text-[11px] font-black uppercase tracking-[0.4em]"
              onClick={() => router.push('/')}
            >
              The Archive
            </MagneticButton>
            <MagneticButton 
              type="default" 
              className="px-16 py-10 text-[11px] font-black uppercase tracking-[0.4em] shadow-3xl shadow-brand-500/30"
              onClick={() => window.open('mailto:sakshiagra22@gmail.com')}
            >
              Collaborate <ArrowUpRight size={20} />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Immersive Footer Decoration */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-12 text-[9px] font-mono tracking-[0.5em] text-white/5 uppercase">
           <span className="w-20 h-[1px] bg-white/5" />
           Sakshi Agrahari // High-Fidelity Archive // 2026
           <span className="w-20 h-[1px] bg-white/5" />
        </div>
      </section>

    </div>
  )
}

function SectionTag({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-6 mb-10 overflow-hidden">
      <div className="flex items-center gap-3">
         <span className="text-[10px] font-mono text-brand-500 uppercase tracking-[0.3em]">{number}</span>
         <div className="h-[1px] w-8 bg-brand-500/40" />
      </div>
      <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">{label}</span>
    </div>
  )
}

        <div className="absolute bottom-10 inset-x-10 flex justify-between items-center text-[8px] font-mono tracking-[0.5em] text-white/10 uppercase">
           <span>Created by Sakshi Agrahari</span>
           <span className="hidden md:block">System: v7.04 // HighFidelity_Series</span>
           <span>EST: 2026</span>
        </div>
      </section>

    </div>
  )
}

function SectionTitle({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) {
  return (
    <div className="space-y-6 mb-16">
      <div className="flex items-center gap-4 text-brand-500">
        <span className="text-[10px] font-mono uppercase tracking-widest">{num} // {subtitle}</span>
        <div className="h-[1px] w-16 bg-brand-500/30" />
      </div>
      <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-outfit font-black uppercase tracking-tighter text-white leading-[0.8]">
        {title}.
      </h2>
    </div>
  )
}
