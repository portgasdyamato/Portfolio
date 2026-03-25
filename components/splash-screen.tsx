"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Sparkles, Globe2, Cpu, PenTool, Layout } from "lucide-react"

const roles = [
  { icon: Layout, label: "UI/UX DESIGN" },
  { icon: Cpu, label: "AI SYSTEMS" },
  { icon: PenTool, label: "VISUAL ARTS" },
  { icon: Globe2, label: "WEB DEV" }
]

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [activeRole, setActiveRole] = useState(0)
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // Mouse Interaction (Liquid Flare)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  // Progress logic
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      const jump = Math.random() * 5 + 0.2
      count = Math.min(100, count + jump)
      setProgress(Math.floor(count))
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 1500)
        }
      }
    }, 45)
    return () => clearInterval(interval)
  }, [finishLoadingAction])

  // Role pulse
  useEffect(() => {
    const id = setInterval(() => setActiveRole(i => (i + 1) % roles.length), 600)
    return () => clearInterval(id)
  }, [])

  const ActiveIcon = roles[activeRole].icon

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        scale: 1.1,
        opacity: 0,
        filter: "blur(40px)",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex flex-col items-center justify-center select-none cursor-wait"
    >
      {/* ── AMBIENT ARTWORK ── */}
      {/* Liquid Pulse */}
      <motion.div 
         animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
         className="absolute w-[180vw] h-[180vw] border-[0.5px] border-[#b33951]/10 rounded-full pointer-events-none opacity-20"
      />
       <motion.div 
         animate={{ scale: [1.1, 1.3, 1.1], rotate: [45, 0, 45] }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         className="absolute w-[140vw] h-[140vw] border-[0.5px] border-[#b33951]/15 rounded-full pointer-events-none opacity-20"
      />

      {/* Mouse Magnet Flare */}
      {mounted && (
        <motion.div
          className="fixed w-[700px] h-[700px] rounded-full pointer-events-none opacity-50 blur-[100px]"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            background: "radial-gradient(circle, rgba(255,181,181,0.5) 0%, transparent 70%)"
          }}
        />
      )}

      {/* ── HUD SKELETON ── */}
      <div className="absolute top-12 left-16 flex flex-col gap-3">
         <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b33951] animate-ping" />
            <span className="text-[10px] tracking-[0.65em] uppercase font-black text-[#b33951]">System Ready</span>
         </div>
         <span className="text-[12px] font-mono text-[#1a0a0a]/30">BOOT_SEQ://PORTFOLIO_V1.0</span>
      </div>

      <div className="absolute bottom-12 right-16 flex flex-col items-end gap-3 text-right">
         <div className="flex items-center gap-6">
            <div className="flex flex-col">
                <span className="text-[9px] tracking-[0.4em] font-black text-[#b33951]/50 uppercase">Syncing Assets</span>
                <span className="text-[10px] font-mono text-[#1a0a0a]/40">MOD_ID: {Math.floor(Math.random() * 9999)}</span>
            </div>
            <span className="text-6xl font-black italic text-[#b33951] leading-none opacity-20" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {progress}%
            </span>
         </div>
      </div>

      {/* ── CENTRAL "OUT OF BOX" CONCEPT: THE ROTATING CORE ── */}
      <div className="relative flex flex-col items-center justify-center w-full h-full p-20">
        
        {/* The Outer Orbit */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-[500px] h-[500px] border border-dashed border-[#b33951]/20 rounded-full"
            />
            {/* Morphing Word Orbits */}
            <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[700px] h-[700px] flex items-center justify-center"
            >
                <div className="absolute -top-4 px-6 py-2 bg-[#FFF5F5] border border-[#b33951]/10 rounded-full">
                    <span className="text-[9px] tracking-[0.5em] font-black text-[#b33951] uppercase">Creative Exellence</span>
                </div>
                <div className="absolute -bottom-4 px-6 py-2 bg-[#FFF5F5] border border-[#b33951]/10 rounded-full">
                    <span className="text-[9px] tracking-[0.5em] font-black text-[#b33951] uppercase">Human Centered</span>
                </div>
            </motion.div>
        </div>

        {/* The Core Branding Stagger */}
        <div className="flex flex-col items-center gap-12 z-20">
            
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative"
            >
                <div className="w-24 h-24 rounded-[2.5rem] bg-white shadow-2xl flex items-center justify-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[#b33951]/5 animate-pulse" />
                   <AnimatePresence mode="wait">
                      <motion.div
                        key={activeRole}
                        initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0, rotate: 45 }}
                        transition={{ duration: 0.4 }}
                        className="text-[#b33951] z-10"
                      >
                         <ActiveIcon size={32} strokeWidth={2.5} />
                      </motion.div>
                   </AnimatePresence>
                </div>
                <div className="absolute -inset-4 border-2 border-[#b33951]/5 rounded-full animate-spin-slow opacity-50" style={{ animationDuration: '8s' }} />
            </motion.div>

            <div className="flex flex-col items-center gap-2">
                <h1 className="flex items-center gap-1 md:gap-4 overflow-hidden py-4">
                {["SAKSHI", "AGRAHARI"].map((word, wIdx) => (
                    <div key={wIdx} className="flex overflow-hidden">
                        {word.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ 
                                    duration: 1.2, 
                                    delay: 0.2 + (wIdx * 0.2) + (i * 0.05), 
                                    ease: [0.16, 1, 0.3, 1] 
                                }}
                                className="text-[55px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-black racking-tighter leading-none text-[#1a0a0a]"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                        {wIdx === 0 && <span className="w-10" />}
                    </div>
                ))}
                </h1>
                
                <div className="flex items-center gap-4 overflow-hidden">
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="w-12 h-px bg-[#b33951]" 
                    />
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="text-[12px] tracking-[0.8em] uppercase font-black text-[#b33951]"
                    >
                        {roles[activeRole].label}
                    </motion.p>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="w-12 h-px bg-[#b33951]" 
                    />
                </div>
            </div>
        </div>

        {/* Binary Rain Background Detail (Subtle) */}
        <div className="absolute inset-0 opacity-[0.03] flex justify-around pointer-events-none px-4">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
                    className="h-screen w-[1px] bg-[#b33951]"
                />
            ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-16 text-[9.5px] tracking-[0.4em] font-black text-[#1a0a0a]/20 uppercase">
        Establishing visual hierarchy...
      </div>
    </motion.div>
  )
}
