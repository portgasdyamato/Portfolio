"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion"

const name = "SAKSHI AGRAHARI".split("")

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // ── MOUSE MAGNETIC FORCE ──
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 30, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 30, damping: 15 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  const progressValue = useMotionValue(0)

  // Progress logic
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      const jump = count < 20 ? 8 : (100 - count) * 0.1
      count = Math.min(100, count + jump)
      setProgress(Math.floor(count))
      progressValue.set(count)
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 2000)
        }
      }
    }, 60)
    return () => clearInterval(interval)
  }, [finishLoadingAction, progressValue])

  // Generate randomized float directions for cada letter
  const driftSeeds = useMemo(() => name.map(() => ({
    x: (Math.random() - 0.5) * 800,
    y: (Math.random() - 0.5) * 800,
    r: (Math.random() - 0.5) * 60
  })), [])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh", 
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex items-center justify-center select-none cursor-crosshair"
    >
      {/* ── INTERACTIVE DUST ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <div className="w-full h-full" style={{ 
            backgroundImage: "radial-gradient(circle, #b33951 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
      </div>

      {/* ── THE LIQUID TYPE PLAYGROUND ── */}
      <div className="relative w-full h-full flex items-center justify-center">
        {name.map((char, i) => (
           <Letter 
              key={i} 
              char={char} 
              index={i} 
              progressValue={progressValue} 
              mouseX={springX} 
              mouseY={springY} 
              seed={driftSeeds[i]}
           />
        ))}

        {/* The Central Masking Line */}
        <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            className="absolute top-1/2 left-0 right-0 h-[3px] bg-[#b33951]/10 pointer-events-none z-0"
        />
      </div>

      {/* ── STATUS HUD (ELEVATED) ── */}
      <div className="absolute top-12 left-12 flex flex-col gap-2">
         <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-[#b33951] animate-pulse" />
            <span className="text-[10px] tracking-[0.8em] uppercase font-black text-[#b33951]">Interaction Protocol</span>
         </div>
         <span className="text-[14px] font-black text-[#1a0a0a]/20 uppercase">Stage: Physical Convergence</span>
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
         <span className="font-mono text-5xl font-black text-[#b33951]/20">
             {Math.floor(progress).toString().padStart(3, '0')}
         </span>
         <div className="flex items-center gap-4">
             <span className="text-[9px] tracking-[0.5em] text-[#1a0a0a]/30 uppercase font-black">Syncing Gravitational Constants</span>
             <div className="w-12 h-1 bg-[#1a0a0a]/5 relative overflow-hidden">
                <motion.div 
                   animate={{ x: ["-100%", "100%"] }} 
                   transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-[#b33951]/40" 
                />
             </div>
         </div>
      </div>

      <div className="absolute bottom-12 left-12 max-w-xs">
          <p className="text-[9px] tracking-[0.4em] leading-relaxed uppercase font-bold text-[#1a0a0a]/20">
             Move your cursor to attract the letters. <br /> Hold for convergence.
          </p>
      </div>
    </motion.div>
  )
}

function Letter({ char, index, progressValue, mouseX, mouseY, seed }: any) {
  // Magnet Logic
  const dist = useSpring(0, { stiffness: 40, damping: 20 })
  
  // High-frequency magnetic drift
  const x = useTransform([mouseX, dist, progressValue], ([mX, d, progress]: any) => {
    // Target position (horizontal row)
    const targetX = (index - 7) * 45 // 15 chars total
    const winW = typeof window !== "undefined" ? window.innerWidth : 1920
    const alpha = progress / 100
    // Final position = magnetic influence + lerp to target
    return (mX - (winW / 2) + targetX) * (1 - alpha) + targetX * alpha
  })

  const y = useTransform([mouseY, dist, progressValue], ([mY, d, progress]: any) => {
    const targetY = 0
    const winH = typeof window !== "undefined" ? window.innerHeight : 1080
    const idleY = seed.y
    const alpha = progress / 100
    return (mY - (winH / 2) + idleY * (1-alpha)) * (1 - alpha) + targetY * alpha
  })

  const rotate = useTransform(progressValue, [0, 100], [seed.r, 0])
  const opacity = useTransform(progressValue, [0, 20, 100], [0, 0.4, 1])
  const scale = useTransform(progressValue, [0, 100], [1.5, 1])

  return (
    <motion.span
      style={{ x, y, rotate, opacity, scale, fontFamily: "'Cormorant Garamond', serif" }}
      className={`absolute text-[60px] sm:text-[80px] md:text-[100px] font-black pointer-events-none ${char === " " ? "hidden" : "text-[#1a0a0a]"}`}
    >
      {char}
    </motion.span>
  )
}
