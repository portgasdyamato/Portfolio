"use client"

import { useRouter } from "next/navigation"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { ArrowLeft, Github, ArrowUpRight, CheckCircle2, Zap, Palette, Code2, Sparkles, Layers, MousePointer2, Beaker, GitBranch, Terminal } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect, ReactNode } from "react"

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Project {
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
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x: x * 0.4, y: y * 0.4 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = "relative flex items-center justify-center rounded-full transition-all duration-300 overflow-hidden group"
  const typeStyles = {
    default: "bg-brand-500 text-black hover:bg-white",
    outline: "border border-white/10 text-white hover:border-brand-500 hover:text-brand-500",
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
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.2 }}
        className={`${baseStyles} ${typeStyles[type]} ${className}`}
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
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
          background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, ${project.color}40, transparent 80%)`
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
                Launch <Sparkles size={14} />
              </MagneticButton>
            )}
          </div>
        </div>
      </nav>

      {/* ── WORLD-CLASS HERO (SIDE-BY-SIDE) ────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 lg:pt-0 overflow-hidden px-6 lg:px-20">
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-12 z-10 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <span className="h-[1px] w-12 bg-brand-500" />
              <span className="text-[10px] font-mono tracking-[0.5em] text-brand-500 uppercase">
                {project.status} // {project.duration}
              </span>
            </motion.div>

            <div className="space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-[5rem] xl:text-[6.5rem] font-bold font-outfit uppercase tracking-tighter leading-[0.85] text-white">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className="block overflow-hidden py-1">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="text-lg lg:text-2xl font-inter font-light text-white/50 max-w-xl leading-relaxed"
              >
                {project.description}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {project.technologies.map((tech) => (
                <span key={tech} className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[9px] uppercase tracking-widest text-white/40 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-brand-500/50">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Signature Project Image (Interactive) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl shadow-black/90 group perspective-[2000px]">
              <motion.div
                whileHover={{ rotateX: 2, rotateY: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="relative w-full h-full"
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  priority 
                  className="object-cover contrast-[1.05] brightness-[0.9] transition-transform duration-[2s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
              
              {/* Overlay HUD on image */}
              <div className="absolute top-8 left-8 flex flex-col gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-[1px] bg-white" />
                 <span className="text-[8px] font-mono uppercase tracking-widest">Digital Archive // {project.slug}</span>
              </div>
            </div>

            {/* Float Element */}
            <motion.div 
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-3xl border border-white/10 p-6 rounded-[2rem] hidden md:flex items-center gap-4 shadow-2xl z-20"
            >
              <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-black">
                <Layers size={22} />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Architecture</p>
                <p className="text-sm font-bold text-white uppercase tracking-tighter">Premium Stack</p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-brand-500 to-transparent" />
          <span className="text-[8px] font-mono tracking-[0.5em] uppercase text-white/30">Scroll Down</span>
        </motion.div>
      </section>

      {/* ── CASE STUDY CONTENT: THE FOUNDATION ────────── */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-40 space-y-64 lg:space-y-96">
        
        {/* THE CHALLENGE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/5 pt-32">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[10px] font-mono text-brand-500 uppercase tracking-[0.3em]">01_The Vision</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-outfit font-black uppercase tracking-tighter text-white mb-10 leading-[0.9]">
                The problem<br/>Statement.
              </h2>
              <p className="text-xl lg:text-3xl font-inter font-light text-white/70 leading-relaxed italic">
                {project.detailedContent.problemStatement}
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-20">
            <Reveal delay={0.2}>
              <div className="relative rounded-[3rem] overflow-hidden aspect-video border border-white/10">
                 <Image src={project.image} alt="Context" fill className="object-cover opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-12 lg:p-16 bg-white/[0.03] border border-white/5 rounded-[4rem] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />
                 <h3 className="text-2xl font-bold font-outfit uppercase tracking-widest text-brand-500 mb-6">The Solution</h3>
                 <p className="text-xl lg:text-2xl font-light text-white/50 leading-relaxed">
                   {project.detailedContent.solution}
                 </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CORE MATRIX (BENTO GRID) */}
        <div className="space-y-20">
           <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                 <span className="text-[10px] font-mono text-brand-500 uppercase tracking-[0.3em]">02_Features</span>
              </div>

           </div>
                         <div className="flex flex-col gap-4">
                  <h3 className="text-4xl lg:text-7xl font-outfit font-black uppercase text-white leading-none">Amazing Features</h3>
                </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {project.features.map((feature, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1, duration: 0.8 }}
                 className="group relative h-[380px] p-12 bg-white/[0.02] border border-white/5 rounded-[3.5rem] overflow-hidden hover:border-brand-500/30 transition-all duration-500"
               >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/[0.04] rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-500/10 transition-colors" />
                 <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-black transition-all">
                     <Zap size={28} />
                   </div>
                   <div>
                     <span className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase mb-4 block">FUNCTION_MTRX_{i + 1}</span>
                     <h4 className="text-2xl lg:text-3xl font-outfit font-bold uppercase tracking-tight text-white group-hover:text-brand-500 transition-colors leading-[1.1]">
                       {feature}
                     </h4>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

        {/* DESIGN & PROCESS SECTION */}
        <div className="space-y-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 pl-8 lg:pl-16 border-l border-brand-500/30">
              <Reveal>
                <div className="flex flex-col gap-4">
                  <Palette className="text-brand-500 mb-4" size={40} />
                  <h3 className="text-4xl lg:text-7xl font-outfit font-black uppercase text-white leading-none">Creative<br/>Process.</h3>
                </div>
                <p className="text-xl lg:text-2xl font-light text-white/50 leading-relaxed mt-8">
                  {project.detailedContent.process}
                </p>
              </Reveal>
            </div>
            <div className="relative aspect-square rounded-[5rem] overflow-hidden bg-white/5">
               <Image src={project.image} alt="Process visual" fill className="object-cover grayscale brightness-[0.7] hover:grayscale-0 transition-all duration-[1.5s]" />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center">
               <div className="w-full h-full bg-gradient-to-br from-[#111] to-black rounded-[5rem] border border-white/5 p-12 lg:p-20 flex flex-col justify-center relative shadow-2xl overflow-hidden">
                  <div className="font-mono text-[10px] text-brand-500/40 space-y-6">
                    <p className="flex gap-4"><span>DEPLOY_ID:</span> {project.slug.toUpperCase()}_v1.0</p>
                    <p className="flex gap-4 text-white/60"><span>LATENCY:</span> 24MS_STABLE</p>
                    <div className="h-[1px] w-full bg-white/5 my-10" />
                    <div className="grid grid-cols-2 gap-10 uppercase">
                       <div>
                          <p className="text-white/20 mb-2">Build Integrity</p>
                          <p className="text-2xl font-bold text-white">99%</p>
                       </div>
                       <div>
                          <p className="text-white/20 mb-2">Performance</p>
                          <p className="text-2xl font-bold text-brand-500 tracking-tighter">ELITE</p>
                       </div>
                    </div>
                  </div>
                  <Terminal className="absolute -bottom-10 -right-10 text-white/5" size={300} strokeWidth={0.5} />
               </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10 pr-8 lg:pr-16 lg:text-right border-r border-brand-500/30">
              <Reveal>
                <div className="flex flex-col lg:items-end gap-4">
                  <Code2 className="text-brand-500 mb-4" size={40} />
                  <h3 className="text-4xl lg:text-7xl font-outfit font-black uppercase text-white leading-none">Technical<br/>Craft.</h3>
                </div>
                <p className="text-xl lg:text-2xl font-light text-white/50 leading-relaxed mt-8">
                  {project.detailedContent.coding}
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* TESTING & RESEARCH SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/5 pt-32 items-center">
           <div className="lg:col-span-5">
              <SectionTitle num="03" title="Testing" subtitle="Research & Validation" />
              <p className="text-xl lg:text-2xl font-light text-white/40 leading-relaxed">
                {project.detailedContent.testing}
              </p>
           </div>
           <div className="lg:col-span-7 flex justify-end">
              <div className="w-full lg:max-w-xl h-[400px] bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 flex flex-col justify-center relative overflow-hidden group">
                 <div className="absolute top-0 left-0 w-32 h-32 bg-brand-500/5 blur-[80px] rounded-full" />
                 <Beaker className="text-brand-500 mb-8" size={48} />
                 <h4 className="text-3xl font-outfit font-black uppercase text-white mb-6">Validation Phase</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-mono text-white/30 uppercase">
                       <span>User Sat Score</span>
                       <span>94%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "94%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-brand-500 shadow-[0_0_10px_rgba(255,181,181,0.5)]" 
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* KEY ACHIEVEMENTS */}
        <div className="pt-20 space-y-32">
           <SectionTitle num="04" title="Outcome" subtitle="Measurable Impact" />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {project.achievements.map((achievement, i) => (
               <motion.div
                 key={i}
                 initial={{ scale: 0.9, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="group p-12 bg-white/[0.01] border border-white/5 rounded-[4rem] hover:bg-brand-500 transition-all duration-700 h-full flex flex-col justify-between"
               >
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-500 group-hover:bg-black group-hover:text-brand-500 transition-all mb-12">
                   <CheckCircle2 size={32} />
                 </div>
                 <p className="text-2xl font-outfit font-black uppercase tracking-tight text-white group-hover:text-black transition-colors">
                   {achievement}
                 </p>
               </motion.div>
             ))}
           </div>
        </div>

      </section>

      {/* ── FOOTER: CALL TO ARCHIVE ───────────────── */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-16 relative z-10 px-6"
        >
          <div className="space-y-4">
             <span className="text-[10px] font-mono tracking-[0.4em] text-brand-500 uppercase font-black">Archive_Index</span>
             <h2 className="text-7xl md:text-[10rem] lg:text-[13rem] font-bold font-outfit uppercase tracking-tighter leading-none text-white selection:bg-white selection:text-black">
               The Beyond
             </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <MagneticButton 
              type="outline" 
              className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.4em]"
              onClick={() => router.push('/')}
            >
              Back to Archive
            </MagneticButton>
            <MagneticButton 
              type="default" 
              className="px-12 py-8 text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-brand-500/30"
              onClick={() => window.open('mailto:sakshiagra22@gmail.com')}
            >
              Collaborate <ArrowUpRight size={20} />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Micro-Footer Info */}
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
