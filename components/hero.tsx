"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  
  // Mouse tracking for parallax effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Floating elements parallax (stable ranges)
  const dx = useTransform(springX, [0, 1920], [-30, 30])
  const dy = useTransform(springY, [0, 1080], [-30, 30])
  // Reverse parallax for second element — must be top-level
  const rdx = useTransform(dx, (v) => -v)
  const rdy = useTransform(dy, (v) => -v)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 md:col-span-2 min-h-[500px] lg:min-h-[640px] bg-[#080808] rounded-[2.5rem] relative overflow-hidden group border border-white/5"
    >
      {/* Dynamic Background: Mesh & Glow */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FFB5B5]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px]" />
        <div className="grid-overlay opacity-[0.05]" />
      </div>

      {/* Interactive Floating Element 1 - Top Right */}
      <motion.div 
        style={{ x: dx, y: dy }}
        className="absolute top-12 right-12 z-10 hidden lg:block"
      >
        <div className="glass-card p-6 rotate-6 group-hover:rotate-0 transition-transform duration-700 rounded-3xl">
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" />
            <div className="h-2 w-24 bg-white/20 rounded-full" />
            <div className="h-2 w-16 bg-white/10 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Interactive Floating Element 2 - Bottom Left */}
      <motion.div 
        style={{ x: rdx, y: rdy }}
        className="absolute bottom-12 left-12 z-10 hidden lg:block"
      >
        <div className="glass-accent p-4 -rotate-12 group-hover:rotate-0 transition-transform duration-700 rounded-2xl shadow-2xl">
          <ArrowUpRight className="w-8 h-8 text-primary/60" />
        </div>
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-20 h-full flex flex-col justify-between p-10 md:p-14 lg:p-20">
        {/* Header Badges */}
        <div className="flex gap-3">
          <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/40 text-[10px] uppercase tracking-widest rounded-full backdrop-blur-md">
            Creative Design
          </span>
          <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest rounded-full font-bold backdrop-blur-md">
            Development
          </span>
        </div>

        {/* Hero Central Text */}
        <div className="max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit text-white uppercase tracking-tighter leading-[0.9] mb-8"
          >
            Digital <br /> Experience <br /> <span className="text-primary italic font-light">Designer.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/40 text-lg md:text-xl font-light font-inter max-w-lg leading-relaxed mb-10"
          >
            Sculpting human-centric interfaces with cinematic motion, technical precision, and a bit of pixel magic.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <button className="h-16 px-10 bg-white text-[#080808] font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-primary transition-all duration-500 shadow-2xl shadow-black/40">
              Selected Projects
            </button>
            <button className="h-16 px-10 glass-card text-white font-bold uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-white/5 transition-all duration-300">
              Let's Connect
            </button>
          </div>
        </div>

        {/* Bottom Stats / Details */}
        <div className="flex justify-between items-end border-t border-white/5 pt-10 mt-20">
          <div className="flex gap-10">
            <div className="flex flex-col">
              <span className="text-primary font-black text-2xl font-outfit">99+</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary font-black text-2xl font-outfit">03+</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Industry Awards</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-white/40 uppercase tracking-[0.4em]">Based in India</span>
              <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">Available for projects</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Graphic Interaction */}
      <div className="absolute bottom-0 right-0 w-[40%] h-[100%] z-0 pointer-events-none overflow-hidden hidden lg:block">
         <motion.div 
           animate={{ 
             y: [0, -20, 0],
             rotate: [0, 5, 0]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="relative w-full h-full opacity-30 grayscale saturate-0 contrast-125"
         >
           <Image 
             src="/bk3.gif" 
             alt="" 
             fill 
             className="object-contain object-bottom"
           />
         </motion.div>
      </div>
    </motion.div>
  )
}
