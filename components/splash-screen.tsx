"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const roles = [
  "Crafting Digital Experiences.",
  "Engineering Human Emotion.",
  "Designing Silent Impact.",
  "Developing Future Standards."
]

const name = "Sakshi Agrahari"

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [activeRole, setActiveRole] = useState(0)
  const [isDone, setIsDone] = useState(false)
  const finishCalled = useRef(false)

  // Large Dynamic Text Movement
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Parallax for the massive background letters
  const moveX = useTransform(smoothX, [0, 2000], [-30, 30])
  const moveY = useTransform(smoothY, [0, 1200], [-30, 30])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  // Precise Progress (The "Loading" feeling should be cinematic)
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      // Fast start, slow end for tension
      const jump = count < 40 ? Math.random() * 8 : Math.random() * 2
      count = Math.min(100, count + jump)
      setProgress(count)
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setIsDone(true)
          setTimeout(() => finishLoadingAction(), 1600)
        }
      }
    }, 50)
    return () => clearInterval(interval)
  }, [finishLoadingAction])

  // Elegant text rotation
  useEffect(() => {
    const id = setInterval(() => setActiveRole(i => (i + 1) % roles.length), 800)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex flex-col items-center justify-center select-none cursor-wait"
    >
      {/* ── PHASE 1: THE MONUMENTAL BACKGROUND ── */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]"
      >
        <h1 className="text-[25vw] font-black leading-none text-[#1a0a0a] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          SA
        </h1>
      </motion.div>

      {/* ── PHASE 2: THE LIQUID PROGRESS ── */}
      {/* A single horizontal line that grows from the center */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex flex-col items-center">
         <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-[1px] bg-[#b33951]/40 shadow-[0_0_15px_rgba(179,57,81,0.2)]"
         />
      </div>

      {/* ── PHASE 3: THE TYPOGRAPHIC DANCE ── */}
      <div className="relative z-10 flex flex-col items-center gap-20">
        
        {/* Top Status */}
        <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-12 overflow-hidden px-10">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={activeRole}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[9px] tracking-[0.8em] uppercase font-black text-[#b33951]"
                    >
                        {roles[activeRole]}
                    </motion.span>
                </AnimatePresence>
             </div>
             <div className="flex items-center gap-4">
                 <div className="w-12 h-[1px] bg-[#1a0a0a]/10" />
                 <span className="font-mono text-[10px] text-[#1a0a0a]/30 font-bold">{Math.floor(progress).toString().padStart(3, '0')}</span>
                 <div className="w-12 h-[1px] bg-[#1a0a0a]/10" />
             </div>
        </div>

        {/* The Name (Appears with high-end masking) */}
        <div className="flex flex-col items-center">
            <h1 className="flex items-center justify-center gap-0 md:gap-2">
                {name.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
                        animate={progress > (10 + i * 2) ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
                        transition={{ 
                            duration: 1.5, 
                            ease: [0.16, 1, 0.3, 1] 
                        }}
                        className={`text-[40px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-black text-[#1a0a0a] inline-block ${char === " " ? "w-4 md:w-10" : ""}`}
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </h1>
            
            {/* The Horizontal Line that "cuts" through the brand */}
            <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: progress / 100 }}
               className="h-px bg-[#1a0a0a] w-full mt-[-10px] md:mt-[-20px] origin-center opacity-10"
            />
        </div>

        {/* Minimal Bottom Footer */}
        <div className="flex flex-col items-center gap-6 overflow-hidden">
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-5 text-[8.5px] tracking-[0.4em] font-black text-[#1a0a0a]/20 uppercase"
             >
                <span>The Portfolio of Sakshi Agrahari</span>
                <span className="w-1 h-1 rounded-full bg-[#b33951]/40" />
                <span>Selected Works</span>
                <span className="w-1 h-1 rounded-full bg-[#b33951]/40" />
                <span>© 2025</span>
             </motion.div>
        </div>
      </div>

      {/* ── PHASE 4: THE SCANNER ── */}
      {/* A very subtle thin line that scrolls vertically continuously */}
      <motion.div 
         animate={{ y: ["-10vh", "110vh"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
         className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#b33951]/10 to-transparent pointer-events-none"
      />

    </motion.div>
  )
}
