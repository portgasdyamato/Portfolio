"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useSpring } from "framer-motion"

const keywords = ["CREATIVE", "DEVELOPER", "STRATEGIST", "DESIGNER", "STORYTELLER", "PIXEL ARTIST"]

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [keyword, setKeyword] = useState(keywords[0])
  const cursorX = useSpring(0, { stiffness: 100, damping: 50 })
  const cursorY = useSpring(0, { stiffness: 100, damping: 50 })

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setProgress((v) => {
        if (v >= 100) {
          clearInterval(interval)
          setTimeout(finishLoadingAction, 1200)
          return 100
        }
        return v + 2
      })
      setKeyword(keywords[Math.floor(Math.random() * keywords.length)])
    }, 60)

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [finishLoadingAction, cursorX, cursorY])

  if (!mounted) return null

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(40px)", transition: { duration: 1, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#030303] overflow-hidden flex items-center justify-center font-outfit"
    >
      <div className="grain" />
      
      {/* Cinematic HUD details */}
      <div className="absolute inset-0 px-20 py-20 flex flex-col justify-between items-start pointer-events-none opacity-20">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] tracking-[1em] text-white">SYSTEM_INIT // 0x247</span>
          <span className="text-[10px] tracking-[0.5em] text-white">RENEGADE_PORTFOLIO_V3.0</span>
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="absolute right-20 bottom-20 flex flex-col items-end opacity-20">
        <span className="text-[10px] tracking-[1em] text-white">© 2025 ALL RIGHTS RESERVED</span>
        <span className="text-[10px] tracking-[0.5em] text-white mb-2">BUILT BY S.AGRAHARI</span>
      </div>

      {/* Main Kinetic Content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div
          animate={{ 
            opacity: [0.3, 1, 0.3],
            x: [0, 5, -5, 0],
            skew: [0, 10, -10, 0]
          }}
          transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 1 }}
          className="text-primary font-bold tracking-[1em] text-[10px] uppercase mb-8"
        >
          {keyword} // {progress}%
        </motion.div>

        <div className="relative">
          {/* Glitch Shadow Effect */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-7xl md:text-9xl font-black text-white italic tracking-tighter mix-blend-difference"
          >
            SAKSHI.
          </motion.h1>
          
          <motion.h1 
            animate={{ 
              x: [2, -2, 2],
              opacity: [0, 0.2, 0]
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 text-7xl md:text-9xl font-black text-primary italic tracking-tighter"
          >
            SAKSHI.
          </motion.h1>
        </div>

        <div className="w-64 h-[1px] bg-white/10 mt-12 relative overflow-hidden">
           <motion.div 
             initial={{ x: "-100%" }}
             animate={{ x: `${progress - 100}%` }}
             className="absolute inset-0 bg-primary"
           />
        </div>
      </div>

      {/* Mouse Mask Light (Interactivity) */}
      <motion.div 
        style={{ x: cursorX, y: cursorY, left: -250, top: -250 }}
        className="fixed w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen"
      />

      {/* Absolute Dynamic Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: ["0vh", "110vh"],
            opacity: [0, 0.3, 0],
            x: Math.random() * 100 + "vw"
          }}
          transition={{ 
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
          className="absolute w-[2px] h-[1px] bg-white text-[8px] font-mono whitespace-nowrap overflow-hidden text-white/40 flex items-center justify-center p-1"
        >
          {Math.random() > 0.5 ? "0" : "1"}
        </motion.div>
      ))}

      {/* Displacement SVG filter for custom glitch shape */}
      <svg className="hidden">
        <filter id="displacementFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </motion.div>
  )
}
