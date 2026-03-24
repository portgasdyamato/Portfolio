"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight, Sparkles, Code2, Globe } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 50, stiffness: 400 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const dx = useTransform(springX, (v) => -v * 0.02)
  const dy = useTransform(springY, (v) => -v * 0.02)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX - window.innerWidth / 2)
      y.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  if (!mounted) return (
    <div className="col-span-1 md:col-span-2 min-h-[600px] bg-[#030303] rounded-[3rem] animate-pulse" />
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 md:col-span-2 min-h-[600px] lg:min-h-[750px] bg-[#030303] rounded-[3rem] relative overflow-hidden group border border-white/5 font-outfit"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="grain" />
        <motion.div 
          style={{ x: useTransform(dx, (v) => v * 2), y: useTransform(dy, (v) => v * 2) }}
          className="hero-blur bg-primary/20 top-[-10%] left-[-10%]" 
        />
        <motion.div 
          style={{ x: useTransform(dx, (v) => -v * 3), y: useTransform(dy, (v) => -v * 3) }}
          className="hero-blur bg-red-400/10 bottom-[-10%] right-[-10%]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,181,181,0.05)_0%,transparent_60%)]" />
      </div>

      <div className="absolute inset-0 z-10 p-10 md:p-14 lg:p-20 flex flex-col justify-between">
        
        {/* Top Minimal Tokens (Bento but premium) */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex gap-4">
             <div className="glass-pill flex items-center gap-3 group/pill cursor-pointer hover:bg-white/10 transition-all border-white/5 backdrop-blur-3xl px-5">
               <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
               <span className="text-[10px] tracking-[0.3em] font-bold text-white uppercase whitespace-nowrap">Available for projects</span>
             </div>
             <div className="glass-pill flex items-center gap-3 backdrop-blur-3xl px-5 border-white/5">
                <Globe size={12} className="text-white/40" />
                <span className="text-[10px] tracking-[0.3em] font-normal text-white/40 uppercase whitespace-nowrap">Based in India</span>
             </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
             <div className="flex flex-col items-end">
                <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase">System Status</span>
                <span className="text-[10px] tracking-[0.2em] font-black text-white italic">OPERATIONAL_v3.0.4</span>
             </div>
          </div>
        </div>

        {/* Main Kinetic Typography */}
        <div className="relative pointer-events-none select-none my-10 lg:my-0">
          <motion.div 
             style={{ x: dx, y: dy }}
             className="absolute -top-20 -left-10 text-[250px] font-black text-outline uppercase tracking-tighter opacity-10 leading-none hidden xl:block"
          >
            CREATIVE
          </motion.div>
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[60px] md:text-[100px] lg:text-[140px] font-black leading-[0.85] tracking-tighter text-white uppercase"
            >
              CRAFTING<br />
              VISIONARY<br />
              <span className="text-primary italic font-light tracking-[-0.05em] flex items-center gap-6">
                EXPERIENCES.
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="hidden md:flex w-24 h-24 rounded-full border border-primary/20 items-center justify-center p-4 overflow-hidden"
                >
                  <Sparkles className="w-full h-full text-primary opacity-50" />
                </motion.div>
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Action & Secondary Meta */}
        <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between border-t border-white/5 pt-12">
          <div className="flex flex-wrap gap-4">
             <button className="h-20 px-12 bg-white text-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:scale-105 transition-all duration-500 hover:bg-primary shadow-2xl flex items-center gap-4 group">
               View Case Studies
               <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </button>
             <button className="h-20 px-12 glass-pill text-white font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-white/10 transition-all border-white/10 group flex items-center gap-4">
               Get in touch
               <div className="w-2 h-2 rounded-full bg-white group-hover:bg-primary" />
             </button>
          </div>

          <div className="flex gap-16">
             <div className="flex flex-col gap-2 group cursor-default">
                <div className="flex items-center gap-2">
                   <Code2 size={12} className="text-primary" />
                   <span className="text-[50px] font-black text-white italic tracking-tighter leading-none group-hover:scale-110 transition-transform">04+</span>
                </div>
                <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase pl-1">Professional Years</span>
             </div>
             <div className="flex flex-col gap-2 group cursor-default">
                <div className="flex items-center gap-2">
                   <FolderHeart size={12} className="text-primary" />
                   <span className="text-[50px] font-black text-white italic tracking-tighter leading-none group-hover:scale-110 transition-transform">42+</span>
                </div>
                <span className="text-[9px] tracking-[0.5em] text-white/30 uppercase pl-1">Project Completions</span>
             </div>
          </div>
        </div>
      </div>

      {/* Extreme Floating Background Decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-full opacity-10 pointer-events-none hidden lg:block overflow-hidden">
        <motion.div 
           animate={{ 
             y: [0, -40, 0],
             rotate: [0, 10, 0],
             scale: [0.9, 1.1, 0.9]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="relative w-full h-full grayscale mix-blend-screen"
        >
          <Image 
            src="/bk3.gif" 
            alt="" 
            fill 
            className="object-contain object-right"
          />
        </motion.div>
      </div>

      {/* Displacement Mouse Shadow Mask (Interaction Designer feel) */}
      <motion.div 
        style={{ x: springX, y: springY, left: -400, top: -400 }}
        className="pointer-events-none absolute w-[800px] h-[800px] bg-primary/2 rounded-full blur-[150px] hidden lg:block"
      />
    </motion.div>
  )
}

function FolderHeart({ size, className }: { size: number, className: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"/><path d="M13.9 17.45c-1.2-1.2-1.14-2.8.2-4.1 1.3-1.3 3.3-1.25 4.5-.05 1.2-1.2 3.2-1.25 4.5.05 1.34 1.3 1.4 2.9.2 4.1L19.1 21.65l-5.2-4.2Z"/></svg>
}
