"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
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

  // ── MOUSE INTERACTION ──
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

  // ── PROGRESS LOGIC ──
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      // Nonlinear progress for a more "organic" loading feel
      const jump = Math.random() * 4 + 0.5
      count = Math.min(100, count + jump)
      setProgress(Math.floor(count))
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 1200)
        }
      }
    }, 45)
    return () => clearInterval(interval)
  }, [finishLoadingAction])

  // ── ROLE CYCLING ──
  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 800)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#1a0a0a] overflow-hidden flex flex-col items-center justify-center select-none cursor-wait"
    >
      {/* ── AMBIENT BACKGROUND ── */}
      {/* Mesh Gradient */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#b33951]/20 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#c0756e]/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Noise Texture Overaly */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      {/* Interactive Flare */}
      {mounted && (
        <motion.div
          className="fixed w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-20"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(179,57,81,0.4) 0%, transparent 70%)"
          }}
        />
      )}

      {/* ── TOP HUD ── */}
      <div className="absolute top-10 left-12 flex items-center gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-black font-mono">Archive v.01</span>
          <div className="h-0.5 w-12 bg-[#b33951]/40" />
        </div>
      </div>

      <div className="absolute top-10 right-14 font-mono text-[14px] text-white/50 flex items-center gap-4">
        <span className="text-[#b33951] font-black">{Math.floor(progress)}%</span>
        <div className="w-40 h-[1.5px] bg-white/5 relative overflow-hidden rounded-full">
           <motion.div 
             className="absolute inset-0 bg-[#b33951]"
             initial={{ scaleX: 0 }}
             animate={{ scaleX: progress / 100 }}
             style={{ transformOrigin: "left" }}
           />
        </div>
      </div>

      {/* ── MAIN LOGO & NAME ── */}
      <div className="relative flex flex-col items-center text-center gap-12 z-20">
        
        <div className="flex flex-col gap-3 items-center">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b33951] mb-2"
            >
              <Sparkles size={20} className="animate-pulse" />
            </motion.div>

            <div className="flex overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={roleIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[11px] tracking-[0.7em] uppercase font-black text-[#b33951]"
                    >
                        {roles[roleIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>

        <h1 className="flex items-center gap-1 md:gap-4 overflow-hidden py-4">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 200, rotateX: -90, opacity: 0 }}
              animate={{ y: 0, rotateX: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.1 + (i * 0.05), 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`text-[50px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-black tracking-tight leading-none ${
                char === " " ? "w-8 md:w-16" : "text-white"
              }`}
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                textShadow: "0 20px 80px rgba(0,0,0,0.5)"
              }}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-6"
        >
            <p className="text-white/20 text-[10px] tracking-[0.4em] uppercase max-w-xs leading-loose font-medium">
               A meticulously engineered <br /> portfolio experience.
            </p>
            <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-[#b33951]"
                    />
                ))}
            </div>
        </motion.div>
      </div>

      {/* ── BOTTOM HUD ── */}
      <div className="absolute bottom-12 left-14 flex items-center gap-8 text-[9px] tracking-[0.4em] font-black text-white/20 uppercase">
        <div className="flex flex-col gap-1">
           <span>Established</span>
           <span className="text-white/40">© 2025</span>
        </div>
        <div className="w-px h-8 bg-white/5" />
        <div className="flex flex-col gap-1">
           <span>Location</span>
           <span className="text-white/40">Planet Earth</span>
        </div>
      </div>

      <div className="absolute bottom-12 right-14 text-[9px] tracking-[0.3em] font-black text-white/10 flex items-center gap-3 decoration-dashed underline">
        Scroll triggers enabled.
      </div>
    </motion.div>
  )
}
