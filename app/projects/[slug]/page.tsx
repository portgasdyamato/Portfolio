"use client"

import { useParams, useRouter } from "next/navigation"
import { projectsData } from "@/lib/projects-data"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Zap, 
  Target, 
  Search, 
  Palette, 
  Code2, 
  Database, 
  CheckCircle2, 
  Play, 
  Sparkles,
  Layers,
  Home,
  Briefcase,
  LucideIcon
} from "lucide-react"
import Header from "@/components/header"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const router = useRouter()
  const project = projectsData.find((p) => p.slug === slug)
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground flex-col gap-6">
        <h1 className="text-4xl font-black font-outfit uppercase tracking-tighter">Project Not Found</h1>
        <Link href="/" className="px-8 py-3 bg-brand-500 text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-600 transition-colors">
          Return Home
        </Link>
      </div>
    )
  }

  const dc: any = project.detailedContent || {}
  const research = dc.research || { summary: "", methods: [], insights: [] }
  const vi = dc.visualIdentity || { colors: [project.color, "#000000"], typography: "Outfit & Inter", components: [] }
  const technologies = project.technologies || []

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-brand-500/30">
      <CustomCursor />
      
      {/* ── ELITE HOME NAVIGATION ── */}
      <div className="fixed top-4 right-4 md:top-8 md:right-8 z-[100] flex items-center gap-2 md:gap-3">
        <Link 
          href="/work"
          className="flex items-center gap-2 px-3 md:px-4 h-10 md:h-12 bg-white dark:bg-zinc-900 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-500 group border border-black/5 dark:border-white/10"
        >
          <Briefcase className="text-[#1a0a0a] dark:text-white" size={14} />
          <span className="hidden sm:block text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-[#1a0a0a] dark:text-white">Work</span>
          <div className="absolute inset-0 rounded-full bg-brand-500/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
        </Link>
        <Link 
          href="/"
          className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-zinc-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-500 group border border-black/5 dark:border-white/10"
        >
          <Home className="text-[#1a0a0a] dark:text-white" size={18} />
          <div className="absolute inset-0 rounded-full bg-brand-500/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
        </Link>
      </div>

      {/* ── HERO PROTOCOL SWITCHER ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden m-0 p-0">
        
        {project.heroTemplate === 3 ? (
          /* ── THE ARCHITECT BLUEPRINT (TECHNICAL SPLIT) ── */
          <div className="w-full h-screen relative flex items-center bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden">
             {/* Technical Backdrop */}
             <div className="absolute inset-x-0 inset-y-0 z-0 opacity-[0.04] dark:opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
             
             <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-20 lg:pt-0">
                <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                   className="w-full lg:w-1/2 flex flex-col items-start text-left"
                >
                   <div className="h-0.5 w-12 bg-brand-500 mb-8" />
                   <h1 className="text-[38px] md:text-[60px] lg:text-[72px] font-bold italic tracking-tighter leading-[0.95] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {project.title}
                   </h1>
                   <p className="text-base md:text-lg text-muted-foreground font-inter italic opacity-70 max-w-lg mb-10">
                      {project.description.slice(0, 120)}...
                   </p>
                   
                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-10 bg-white/60 dark:bg-black/40 backdrop-blur-3xl border-l-[6px] border-brand-500 shadow-[0_40px_100px_rgba(0,0,0,0.1)] w-full max-w-sm font-outfit">
                      <div className="flex gap-10 md:gap-16">
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">Lifecycle</span>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{project.duration}</span>
                         </div>
                         <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30 mb-2">Protocol</span>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-500">{project.type}</span>
                         </div>
                      </div>
                   </motion.div>
                </motion.div>

                <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                   <motion.div whileHover={{ rotate: Math.random() > 0.5 ? 3 : -3, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="relative z-20 w-full max-w-3xl group">
                      <img src={project.image} alt={project.title} className="w-full h-auto max-h-[45vh] lg:max-h-[75vh] object-contain drop-shadow-[0_60px_100px_rgba(0,0,0,0.2)]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-500/5 blur-[120px] -z-10 rounded-full" />
                   </motion.div>
                </motion.div>
             </div>
          </div>
        ) : project.heroTemplate === 2 ? (
          /* ── THE STUDIO PORTAL (QUIET LUXURY ENRICHED) ── */
          <div className="w-full h-screen relative flex items-center justify-center bg-[#fafafa] dark:bg-[#090909] overflow-hidden px-6">
             {/* Volumetric Atmosphere */}
             <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)` }} />
             <div className="absolute inset-0 z-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
             
             {/* ── PERIPHERY: HIDDEN ON MOBILE ── */}
             <div className="absolute top-8 left-6 md:top-12 md:left-12 flex flex-col gap-6 md:gap-10 z-20">
                <div className="flex flex-col gap-2 opacity-60">
                   <div className="h-0.5 w-8 bg-brand-500 mb-1" />
                   <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em]">{project.duration}</span>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-500">{project.type}</span>
                </div>
                
                <div className="hidden md:flex w-[1px] h-24 bg-brand-500/20 ml-0.5 relative">
                   <div className="absolute -left-[5px] top-0 text-[8px] font-black uppercase tracking-[0.4em] rotate-90 origin-left whitespace-nowrap text-brand-500 opacity-40">Project Narrative</div>
                </div>
             </div>

             <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1.5 }} className="absolute left-10 bottom-24 max-w-[180px] hidden lg:block opacity-60">
                <p className="text-[10px] font-inter italic leading-relaxed tracking-tight border-l border-brand-500/30 pl-4 py-2 bg-brand-500/[0.02]">
                   {project.description.slice(0, 100)}...
                </p>
             </motion.div>

             <div className="absolute top-8 right-6 md:top-12 md:right-12 text-right flex flex-col items-end gap-12 z-20">
                <div className="opacity-50">
                   <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.6em] text-brand-500">EXHIBIT</span>
                   <p className="text-[8px] font-mono mt-1 opacity-70 border-b border-brand-500/20 pb-1">{project.slug.slice(0, 6).toUpperCase()}</p>
                </div>

                <div className="hidden lg:flex flex-col items-end gap-3 px-6 py-8 bg-white/40 dark:bg-black/20 backdrop-blur-xl border border-brand-500/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(236,72,153,0.05)]">
                   <span className="text-[8px] font-black uppercase tracking-[0.6em] text-brand-500 mb-2">Capabilities</span>
                   {technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] py-2.5 px-6 bg-brand-500 text-white rounded-full shadow-lg shadow-brand-500/20">{tech}</span>
                   ))}
                </div>
             </div>

             <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1.5 }} className="absolute right-12 bottom-32 hidden lg:flex flex-col items-end gap-5">
                <div className="text-right p-4 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-white/50 dark:border-brand-500/10">
                   <span className="text-[9px] font-black uppercase tracking-[0.5em] mb-1 block opacity-30">Role</span>
                   <span className="text-[11px] font-bold italic font-serif text-brand-500">Lead Design</span>
                </div>
             </motion.div>

             {/* ── MOBILE CENTER STACK ── */}
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="max-w-screen-2xl mx-auto w-full px-8 md:px-16 lg:px-20 flex flex-col items-center relative z-10 h-full justify-center text-center">
                <div className="flex flex-col items-center gap-8 md:gap-12">
                   <motion.div 
                      animate={{ y: [0, -15, 0] }} 
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
                      className="relative group w-full max-w-4xl"
                   >
                      <motion.img 
                         whileHover={{ scale: 1.02 }} 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain drop-shadow-[0_40px_150px_rgba(0,0,0,0.15)]" 
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-500/[0.05] blur-[120px] -z-10 rounded-full" />
                   </motion.div>

                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="px-4">
                       <h1 className="text-[42px] md:text-[80px] lg:text-[104px] font-bold italic tracking-tighter leading-[0.9] max-w-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                          {project.title}
                       </h1>
                       <div className="mt-8 flex items-center justify-center gap-4 md:gap-6 opacity-30">
                          <div className="h-[1px] w-8 md:w-12 bg-foreground" />
                          <span className="text-[10px] font-black uppercase tracking-[0.4em]">{project.type}</span>
                          <div className="h-[1px] w-8 md:w-12 bg-foreground" />
                       </div>
                   </motion.div>
                </div>
             </motion.div>
          </div>
        ) : (
          /* ── THE EDITORIAL NARRATIVE (BALANCED SPLIT) ── */
          <div className="w-full h-screen relative flex items-center bg-[#ffffff] dark:bg-[#000000] overflow-hidden px-8 md:px-16 lg:px-24">
             <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ background: `radial-gradient(circle at 30% 50%, ${project.color}, transparent 50%)` }} />
             
             <div className="max-w-screen-2xl mx-auto w-full px-8 md:px-16 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 pt-20 lg:pt-0">
                <motion.div 
                   initial={{ opacity: 0, x: -50 }} 
                   animate={{ opacity: 1, x: 0 }} 
                   transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
                   className="w-full lg:w-[45%] flex flex-col justify-center order-2 lg:order-1 text-left"
                >
                   <div className="h-0.5 w-12 bg-brand-500 mb-8" />
                   <h1 className="text-[40px] md:text-[64px] lg:text-[76px] font-bold italic tracking-tighter leading-[0.95] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {project.title}
                   </h1>

                   <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 md:p-10 bg-white/60 dark:bg-black/40 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
                      <div className="flex justify-between items-center border-b border-foreground/5 pb-6 mb-6">
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Lifecycle</span>
                         <span className="text-xs md:text-sm font-bold uppercase tracking-widest">{project.duration}</span>
                      </div>
                      <div className="flex justify-between items-center">
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Protocol</span>
                         <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-500">{project.status}</span>
                      </div>
                   </motion.div>
                </motion.div>

                <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="w-full lg:w-[55%] flex justify-center order-1 lg:order-2">
                   <motion.div className="relative w-full max-w-2xl flex justify-center p-6 group">
                      <img src={project.image} alt={project.title} className="w-full h-auto max-h-[45vh] lg:max-h-[65vh] object-contain drop-shadow-[0_60px_120px_rgba(0,0,0,0.15)]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-500/5 blur-[120px] -z-10 rounded-full" />
                   </motion.div>
                </motion.div>
             </div>
          </div>
        )}

        {/* ── UNIFIED CINEMATIC FOOTER (DECOUPLED) ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-1 opacity-10">
             <span className="text-[8px] font-black uppercase tracking-[1.2em]">Narrative Exhibit</span>
             <div className="w-12 h-[1px] bg-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* ── NARRATIVE: WHY & HOW ── */}
      <section className="py-32 md:py-52">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          <div className="lg:col-span-5 relative lg:sticky lg:top-32">
             <SectionHeader 
               tag="Project Genesis"
               title={<>Why and How <br /> I built this.</>}
               icon={Target}
             />
             <div className="mt-12 space-y-6">
                {Array.isArray(dc.process) ? dc.process.map((p: string, i: number) => (
                  <p key={i} className="text-base md:text-lg text-muted-foreground font-inter italic leading-relaxed opacity-80">"{p}"</p>
                )) : (
                  <p className="text-base md:text-lg text-muted-foreground font-inter italic leading-relaxed opacity-80">
                    "{dc.process || "The challenge lay in bridging the gap between clinical functionality and emotional intelligence, ensuring a product that not only works but resonates."}"
                  </p>
                )}
             </div>
          </div>
          <div className="lg:col-span-7 space-y-16">
            <GlassCard delay={0.2}>
              <h4 className="text-base md:text-xl font-bold uppercase tracking-widest text-foreground mb-5 md:mb-6 flex items-center gap-3 md:gap-4">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-xs">01</span>
                Problem Identification
              </h4>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-inter">
                 {Array.isArray(dc.problemStatement) ? dc.problemStatement.map((p: string, i: number) => (
                   <p key={i}>{p}</p>
                 )) : (
                   <p>{dc.problemStatement || "Identified through gap analysis in existing educational tools where accessibility was often treated as an afterthought."}</p>
                 )}
              </div>
            </GlassCard>

            <GlassCard delay={0.4}>
              <h4 className="text-base md:text-xl font-bold uppercase tracking-widest text-foreground mb-5 md:mb-6 flex items-center gap-3 md:gap-4">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-xs">02</span>
                The Solution Hypothesis
              </h4>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-inter">
                 {Array.isArray(dc.solution) ? dc.solution.map((p: string, i: number) => (
                   <p key={i}>{p}</p>
                 )) : (
                   <p>{dc.solution || "A multimodal transformation engine that leverages advanced AI to normalize information across disparate media formats."}</p>
                 )}
              </div>
            </GlassCard>

            {dc.challenge && (
              <GlassCard delay={0.6}>
                <h4 className="text-base md:text-xl font-bold uppercase tracking-widest text-foreground mb-5 md:mb-6 flex items-center gap-3 md:gap-4">
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 text-xs">03</span>
                  The "Oops" Moment
                </h4>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed font-inter">
                  {Array.isArray(dc.challenge) ? dc.challenge.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  )) : (
                    <p>{dc.challenge}</p>
                  )}
                </div>
              </GlassCard>
            )}

            {/* Core Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
               {project.features.map((feature, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group relative p-5 md:p-8 bg-white/40 dark:bg-black/40 backdrop-blur-3xl border border-white/20 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-all duration-500 hover:-translate-y-2"
                 >
                   <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4 md:mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500">
                     <CheckCircle2 size={20} />
                   </div>
                   <h5 className="text-[12px] md:text-[13px] font-black uppercase tracking-[0.2em] text-foreground">{feature.split('&')[0]}</h5>
                   
                   {/* Ambient Feature Glow */}
                   <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-brand-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                 </motion.div>
               ))}
            </div>
           </div>
         </div>
       </div>
      </section>

      {/* ── RESEARCH PHASE ── */}
      <section className="py-32 md:py-52 bg-[#fafafa] dark:bg-[#080808] border-y border-black/5 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
             <SectionHeader 
               tag="Strategic Analysis"
               title={<>Modern <span className="text-brand-500">Discovery.</span></>}
               icon={Search}
             />
             <p className="max-w-2xl text-muted-foreground mt-8 text-lg font-inter italic opacity-60 leading-relaxed">
                {research.summary || "Conducted an intensive discovery phase involving focus-group participants and competitive landscape audits to establish the project's foundation."}
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* Insights Column */}
            <div className="lg:col-span-5 space-y-16">
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-brand-500 mb-2">
                    <div className="h-[2px] w-12 bg-brand-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.6em]">Core Findings</span>
                 </div>
                 <h4 className="text-[42px] font-bold italic tracking-tighter text-foreground leading-[0.9]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Strategic <span className="opacity-30">Breakthroughs.</span>
                 </h4>
              </div>

              <div className="space-y-10">
                {(research.insights.length > 0 ? research.insights : ["Users feel overwhelmed by data complexity", "Mobile-first interaction is non-negotiable", "Speed-to-value determines long-term retention"]).map((insight, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col gap-4 border-b border-black/5 dark:border-white/5 pb-8 hover:border-brand-500/30 transition-all duration-500"
                  >
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black font-mono text-brand-500 bg-brand-500/5 px-3 py-1 rounded-full">Finding 0{i+1}</span>
                       <div className="w-2 h-2 rounded-full bg-brand-500/20 group-hover:bg-brand-500 transition-colors" />
                    </div>
                    <p className="text-[14px] md:text-[16px] font-bold uppercase tracking-tight text-foreground leading-snug group-hover:translate-x-2 transition-transform duration-500">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Methodologies Column */}
            <div className="lg:col-span-7 flex flex-col gap-12 relative">
               <div className="absolute inset-0 bg-brand-500/[0.02] blur-[150px] rounded-full pointer-events-none" />
               
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-brand-500 mb-2">
                     <div className="h-[2px] w-12 bg-brand-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                     <span className="text-[10px] font-black uppercase tracking-[0.6em]">Research Methods</span>
                  </div>
                  <h4 className="text-[42px] font-bold italic tracking-tighter text-foreground leading-[0.9]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                     Strategic <span className="opacity-30">Methodologies.</span>
                  </h4>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {(research.methods.length > 0 ? research.methods : ["User Surveys", "Hotjar Analysis", "A/B Testing", "Focus Groups"]).map((method, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative min-h-[10rem] md:h-48 bg-[#ffffff] dark:bg-black/40 backdrop-blur-3xl border border-black/10 dark:border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:border-brand-500/40 hover:shadow-[0_40px_80px_rgba(236,72,153,0.12)] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden"
                    >
                      <div className="flex justify-between items-start">
                         <div className="w-10 h-10 rounded-2xl bg-brand-500/10 flex items-center justify-center text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                            <Search size={18} />
                         </div>
                         <div className="px-2.5 py-0.5 bg-foreground/[0.03] rounded-full border border-foreground/[0.05]">
                            <span className="text-[7px] font-black uppercase tracking-[0.4em] opacity-40">Phase 01</span>
                         </div>
                      </div>

                      <div className="flex flex-col gap-1.5 mt-4">
                         <span className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/40">Core Method</span>
                         <h5 className="text-[18px] md:text-[20px] font-bold italic tracking-tighter text-foreground group-hover:text-brand-500 transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{method}</h5>
                      </div>

                      <div className="absolute right-6 bottom-6 flex items-center gap-1 opacity-20">
                         {[1, 2, 3].map((dot) => (
                            <div key={dot} className="w-0.5 h-0.5 rounded-full bg-brand-500" />
                         ))}
                      </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW EVOLUTION ── */}
      {dc.workflow && (
      <section className="py-32 md:py-40 bg-white dark:bg-zinc-950 border-b border-black/5 dark:border-white/5 relative">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20">
           <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="w-full lg:w-[40%]">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 rounded-full text-brand-500 font-black tracking-[0.2em] uppercase text-[9px] mb-8">
                   <Layers size={12} />
                   Workflow Evolution
                 </div>
                 <h2 className="text-[40px] md:text-[60px] font-bold italic leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                   Design <br /> <span className="text-brand-500">Process.</span>
                 </h2>
                 <p className="text-lg opacity-80 text-muted-foreground leading-relaxed font-inter mb-10">
                    {dc.workflow.description}
                 </p>
                 <div className="space-y-6">
                    {dc.workflow.steps.map((step: string, i: number) => (
                       <div key={i} className="p-6 border border-black/5 dark:border-white/5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] hover:border-brand-500/30 transition-colors">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-3 text-brand-500">State 0{i+1}</h4>
                          <p className="text-sm font-inter leading-relaxed text-muted-foreground">{step}</p>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="w-full lg:w-[60%] relative group">
                 <div className="absolute inset-0 bg-brand-500/5 blur-[100px] rounded-full group-hover:bg-brand-500/10 transition-colors duration-700 pointer-events-none" />
                 <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-black/5 dark:border-white/5 shadow-2xl bg-white dark:bg-zinc-900 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_40px_100px_rgba(255,255,255,0.02)] transition-all duration-700">
                    <img src={dc.workflow.image} alt="Workflow Mapping Sketch" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 mix-blend-multiply dark:mix-blend-screen" />
                  </div>
               </div>
            </div>
          </div>
       </section>
       )}

      {/* ── BRANDING & AESTHETICS ── */}
      <section className="py-32 md:py-52">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
           <div className="w-full lg:w-1/2">
             <SectionHeader 
                tag="Visual Protocol"
                title={<>Color <br /> <span className="text-brand-500">Palette.</span></>}
                icon={Palette}
              />
              <div className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed mt-12 mb-16 space-y-4">
                 {Array.isArray(dc.design) ? dc.design.map((p: string, i: number) => (
                   <p key={i}>{p}</p>
                 )) : (
                   <p>{dc.design || "The design system was meticulously crafted to balance professional utility with high-end aesthetic pleasure, utilizing glassmorphism and tactile physics."}</p>
                 )}
              </div>

              <div className="flex flex-col gap-10">
                <div>
                   <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/50 mb-6">Typography & Fonts</h5>
                   <div className="space-y-4">
                      <p className="text-4xl font-bold italic tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{vi.typography.split('&')[0]}</p>
                      <p className="text-base font-medium tracking-widest opacity-60 font-inter uppercase">{vi.typography.split('&')[1] || "Inter Tight"}</p>
                   </div>
                </div>

                <div>
                   <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 mb-6">Signature Atoms</h5>
                   <div className="flex flex-wrap gap-4">
                      {vi.components?.map((atom: string, i: number) => (
                        <span key={i} className="px-6 py-2 bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">{atom}</span>
                      ))}
                      {!vi.components && technologies.map((tech, i) => (
                        <span key={i} className="px-6 py-2 bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">{tech}</span>
                      ))}
                   </div>
                </div>
              </div>
           </div>

           <div className="w-full lg:w-1/2 relative">
              <div className="relative grid grid-cols-2 gap-8 items-center">
                 {/* Color Swatches */}
                 {vi.colors.map((c: string, i: number) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="group relative"
                   >
                     <div 
                       className="w-full h-48 md:h-64 rounded-[3rem] shadow-2xl transition-transform duration-500 group-hover:scale-95"
                       style={{ backgroundColor: c }}
                     />
                     <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-black text-white mix-blend-difference uppercase tracking-widest">{c}</span>
                     </div>
                   </motion.div>
                 ))}
                 
                 {/* Decorative Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-500/20 blur-[80px] rounded-full animate-pulse pointer-events-none" />
               </div>
            </div>
         </div>
       </div>
      </section>

      {/* ── TECHNICAL ARCHITECTURE ── */}
      <section className="py-32 md:py-52 bg-foreground text-background">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-background/10 rounded-full text-background font-black tracking-[0.2em] uppercase text-[9px] mb-8">
                    <Code2 size={12} />
                    Logic & Infrastructure
                  </div>
                  <h2 className="text-[40px] md:text-[70px] font-bold italic leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Engineering <br /> <span className="text-brand-500/80">Excellence.</span>
                  </h2>
                  <div className="text-base md:text-xl opacity-60 leading-relaxed font-inter mb-12 space-y-4">
                     {Array.isArray(dc.coding) ? dc.coding.map((p: string, i: number) => (
                       <p key={i}>{p}</p>
                     )) : (
                       <p>{dc.coding || "Architected with a modular, scalable approach, ensuring seamless performance and maintainable logic across multimodal data streams."}</p>
                     )}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="p-8 border border-background/20 rounded-[2rem]">
                      <Zap size={24} className="text-brand-500 mb-6" />
                      <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-4">Frontend Layer</h4>
                      <p className="text-sm opacity-50 font-inter leading-relaxed">Built with Next.js & Tailwind for lightning-fast rendering and responsive boutiques.</p>
                   </div>
                   <div className="p-8 border border-background/20 rounded-[2rem]">
                      <Database size={24} className="text-brand-500 mb-6" />
                      <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-4">Core Engine</h4>
                      <p className="text-sm opacity-50 font-inter leading-relaxed">Leverages PostgreSQL & AI SDKs to process complex user intents and data structures.</p>
                   </div>
                </div>
              </div>

              {/* Stack Visual */}
              <div className="grid grid-cols-2 gap-4">
                 {technologies.map((tech, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                       className="p-6 md:p-10 border border-background/10 rounded-3xl flex items-center justify-center text-center group hover:bg-background hover:text-foreground transition-all duration-500"
                    >
                       <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{tech}</span>
                    </motion.div>
                 ))}
                 <div className="flex items-center justify-center p-10 bg-brand-500 rounded-3xl gap-3">
                   <div className="w-2 h-2 rounded-full bg-background animate-ping" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-background">Production Ready</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── IMPACT & FINAL CALL ── */}
      <section className="py-52 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 relative z-10 flex flex-col items-center text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="mb-24"
           >
              <h2 className="text-[50px] md:text-[90px] font-bold italic leading-tight mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Measured <span className="text-brand-500">Impact.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
                 {project.achievements.map((achievement, i) => (
                   <div key={i} className="flex flex-col items-center">
                      <span className="text-5xl md:text-7xl font-bold font-outfit text-foreground mb-4">
                        {achievement.match(/\d+(?:[.,]\d+)?\s*(?:%|x|k|M|m|K|\+|ms|fps)?\+?/i)?.[0] || "98%"}
                      </span>
                      <p className="text-xs font-black uppercase tracking-[0.4em] opacity-40 leading-loose max-w-[200px]">
                        {achievement}
                      </p>
                   </div>
                 ))}
              </div>
           </motion.div>

           <div className="flex flex-col items-center sm:flex-row justify-center gap-4 md:gap-6 mt-12 w-full">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  className="w-[90%] max-w-[320px] sm:max-w-none sm:w-auto px-8 md:px-12 group relative h-16 md:h-20 bg-foreground text-background rounded-full overflow-hidden flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.3em] transition-transform active:scale-95"
                >
                  <ExternalLink size={18} className="relative z-10 group-hover:text-foreground" />
                  <span className="relative z-10 transition-colors group-hover:text-foreground">Visit Live Realm</span>
                  <div className="absolute inset-0 bg-brand-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  className="w-[90%] max-w-[320px] sm:max-w-none sm:w-auto px-8 md:px-12 group relative h-16 md:h-20 border-2 border-foreground/20 hover:border-brand-500 rounded-full overflow-hidden flex items-center justify-center gap-3 font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 text-foreground"
                >
                  <Github size={18} />
                  <span>Inspect Source</span>
                </a>
              )}
           </div>

           <Link 
             href="/work" 
             className="mt-32 group flex items-center gap-4 text-foreground/40 hover:text-foreground transition-colors"
           >
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
              <span className="text-xs font-black uppercase tracking-[0.4em]">Back to All Works</span>
           </Link>
        </div>
      </section>

      {/* ── FOOTER DECOR ── */}
      <div className="pb-20 flex justify-center opacity-10">
         <div className="w-1 h-12 bg-gradient-to-t from-foreground to-transparent" />
      </div>

      <Footer hideContact={true} />
    </div>
  )
}

function SectionHeader({ tag, title, icon: Icon }: { tag: string, title: any, icon: LucideIcon }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-start text-left"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/5 rounded-full text-brand-500 font-black tracking-[0.2em] uppercase text-[9px] mb-8">
        <Icon size={12} />
        {tag}
      </div>
      <h2 className="text-[40px] md:text-[60px] font-bold italic leading-tight text-[#1a0a0a] dark:text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        {title}
      </h2>
    </motion.div>
  )
}

function GlassCard({ children, delay = 0 }: { children: any, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 md:p-10 lg:p-14 bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] shadow-2xl"
    >
      {children}
    </motion.div>
  )
}
