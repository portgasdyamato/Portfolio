"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Sparkles } from "lucide-react"

const roles = [
  "UI/UX Designer", 
  "AI Product Designer", 
  "Creative Technologist", 
  "Interaction Specialist", 
  "Visual Storyteller"
]

const nameChars = "Sakshi Agrahari".split("")

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // Mouse Interaction
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  // Progress logic (organic nonlinear)
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      const jump = Math.random() * 4 + 1
      count = Math.min(100, count + jump)
      setProgress(Math.floor(count))
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 1000)
        }
      }
    }, 40)
    return () => clearInterval(interval)
  }, [finishLoadingAction])

  // Role cycle
  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 700)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(0 0 100% 0)", 
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex flex-col items-center justify-center select-none cursor-wait"
    >
      {/* ── SOFT AMBIENT BG ── */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#b33951]/10 blur-[140px] rounded-full animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#c0756e]/10 blur-[140px] rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #b33951 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Interactive Light Flare */}
      {mounted && (
        <motion.div
          className="fixed w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 60%)"
          }}
        />
      )}

      {/* ── TOP HUD ── */}
      <div className="absolute top-10 left-12 flex flex-col gap-1.5 overflow-hidden">
        <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[9px] tracking-[0.5em] text-[#b33951]/60 uppercase font-black"
        >
            Portfolio v.1.0
        </motion.span>
        <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] w-14 bg-[#b33951]/30 origin-left" 
        />
      </div>

      <div className="absolute top-10 right-14 flex items-center gap-5 text-[#1a0a0a]/30">
        <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] tracking-[0.3em] font-black uppercase text-[#1a0a0a]">Loading</span>
            <div className="w-24 h-px bg-[#1a0a0a]/10 relative overflow-hidden rounded-full">
                <motion.div 
                    className="absolute inset-0 bg-[#b33951]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    style={{ transformOrigin: "left" }}
                />
            </div>
        </div>
        <span className="font-mono text-xl font-black text-[#b33951]/80 w-12 text-center">{Math.floor(progress)}</span>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-20 flex flex-col items-center text-center gap-10">
        
        <div className="flex flex-col gap-4 items-center mb-4">
            <motion.div 
               initial={{ rotate: -180, opacity: 0 }}
               animate={{ rotate: 0, opacity: 1 }}
               transition={{ duration: 1, ease: "anticipate" }}
               className="w-10 h-10 border border-[#b33951]/20 flex items-center justify-center text-[#b33951] rounded-full"
            >
              <Sparkles size={16} strokeWidth={3} />
            </motion.div>

            <div className="h-4 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="text-[10px] tracking-[0.6em] uppercase font-black text-[#b33951]/70"
                    >
                        {roles[roleIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>

        <h1 className="flex items-center gap-1 md:gap-4 py-2">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.1 + (i * 0.05), 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`text-[45px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black tracking-tight leading-none ${
                char === " " ? "w-6 md:w-12" : "text-[#1a0a0a]"
              }`}
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center gap-5"
        >
            <p className="text-[#1a0a0a]/40 text-[9.5px] tracking-[0.4em] uppercase max-w-[200px] leading-relaxed font-bold">
               A meticulously engineered <br /> portfolio exhibition.
            </p>
            <div className="flex items-center gap-1.5">
                {[...Array(3)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 h-1 rounded-full bg-[#b33951]"
                    />
                ))}
            </div>
        </motion.div>
      </div>

      {/* ── BOTTOM HUD ── */}
      <div className="absolute bottom-12 left-14 flex items-center gap-6 text-[9.5px] tracking-[0.3em] font-black text-[#1a0a0a]/30 uppercase">
        <span className="flex items-center gap-2">© 2025 <span className="w-8 h-px bg-[#1a0a0a]/10" /> Portfolio</span>
        <span className="opacity-50">—</span>
        <span>Planet Earth</span>
      </div>

      <div className="absolute bottom-12 right-14 text-[9px] tracking-[0.3em] font-black text-[#b33951]/40 flex items-center gap-3">
        Scroll triggers enabled.
      </div>
    </motion.div>
  )
}
