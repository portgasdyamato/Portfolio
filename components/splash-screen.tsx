"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const fonts = ["Press Start 2P", "Silkscreen", "JetBrains Mono", "Major Mono Display", "Space Mono", "Share Tech Mono", "VT323", "Pixel"]
const keywords = ["CREATIVE", "DEVELOPER", "DESIGNER", "PIXEL ARTIST", "STORYTELLER", "RETRO ENTHUSIAST"]

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [currentFont, setCurrentFont] = useState(fonts[0])
  const [currentKeyword, setCurrentKeyword] = useState(keywords[0])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fontInterval = setInterval(() => {
      setCurrentFont(fonts[Math.floor(Math.random() * fonts.length)])
    }, 150)

    const keywordInterval = setInterval(() => {
      setCurrentKeyword(keywords[Math.floor(Math.random() * keywords.length)])
    }, 200)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(finishLoadingAction, 1000)
          return 100
        }
        return prev + 1
      })
    }, 40)

    return () => {
      clearInterval(fontInterval)
      clearInterval(keywordInterval)
      clearInterval(progressInterval)
    }
  }, [finishLoadingAction])

  return (
    <motion.div 
      initial={{ backgroundColor: "#FFB5B5" }}
      animate={{ backgroundColor: ["#FFB5B5", "#FFC5C5", "#FFB5B5"] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center perspective-[1000px]"
    >
      {/* SVG Filters for displacement glitch */}
      <svg className="hidden">
        <filter id="glitch">
          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" result="noise">
            <animate attributeName="baseFrequency" values="0.1;0.2;0.1" dur="0.2s" repeatCount="Indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>

      {/* Dynamic Background: Digital Rain & Mouse Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        {/* Floating Data Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: ["0vh", "110vh"],
              opacity: [0, 1, 0],
              x: Math.random() * 100 + "vw"
            }}
            transition={{ 
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-[1px] h-10 bg-gradient-to-b from-white to-transparent"
          />
        ))}
      </div>

      {/* Cinematic CRT Overlay Group */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden select-none opacity-40">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      {/* Main Experimental Typography: Fragmented Approach */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
        {/* Floating HUD Details - Absolute to Viewport for spacing */}
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="fixed top-10 left-10 font-mono text-[9px] text-white tracking-[0.5em] uppercase vertical-text hidden md:block opacity-40"
        >
          DATA_STREAM_ACTIVE // SYNC_STATUS: OK // SRC: 0xRENEGADE
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-10 right-10 font-mono text-[9px] text-white/40 tracking-[0.2em] uppercase text-right leading-loose"
        >
          SYS_LOG: BOOT_SEQUENCE_01 <br />
          BUFFER: 1024KB_CLEAR <br />
          PKT_RECV: {progress}% <br />
          <span className="text-white/60 font-bold uppercase">Status: Initializing</span>
        </motion.div>

        <div className="relative flex flex-col items-center group">
          {/* Glitch Overlay Text (Ghost Effect) */}
          <motion.div 
            style={{ fontFamily: currentFont, filter: "url(#glitch)" }}
            className="absolute inset-0 flex flex-col items-center opacity-10 pointer-events-none scale-105"
          >
            <span className="text-7xl md:text-[11rem] text-white leading-[0.75]">SAKSHI</span>
            <span className="text-7xl md:text-[11rem] text-white mt-[-1rem] md:mt-[-3rem] leading-[0.75] italic">AGRAHARI</span>
          </motion.div>

          {/* Animated Character Groups */}
          <div className="relative z-10 flex flex-wrap justify-center overflow-hidden">
            {"SAKSHI".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 150, rotateX: -90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                style={{ fontFamily: currentFont }}
                transition={{ 
                  duration: 1.2, 
                  delay: i * 0.05, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-7xl md:text-[11rem] text-slate-900 inline-block leading-[0.75] select-none"
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="relative z-10 flex flex-wrap justify-center mt-[-1rem] md:mt-[-3rem] overflow-hidden">
            {"AGRAHARI".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: -150, rotateX: 90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                style={{ fontFamily: currentFont }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.2 + (7-i) * 0.05, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-7xl md:text-[11rem] text-slate-900 inline-block leading-[0.75] italic select-none"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Minimal Role Detail below Name */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-6"
        >
          <span className="text-[10px] md:text-xs font-mono text-white tracking-[0.4em] uppercase opacity-60 font-medium">
            Creative Developer & Interaction Designer
          </span>
          <div className="flex gap-2">
            <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
            <span className="w-1 h-1 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Spatial Progress: The Expansion Grid - Cleaned up to be minimal */}
      <div className="relative z-10 w-full px-10 md:px-20 pb-12 flex flex-col gap-4">
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_white]"
          />
        </div>
        
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-mono text-white/50 tracking-[0.5em] uppercase">Boot Sequence</span>
            <div className="flex gap-2 h-3 overflow-hidden">
              <motion.div 
                animate={{ y: [0, -12, -24, -36] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="font-mono text-[9px] text-white/30 flex flex-col"
              >
                <span>INIT_GRAVITY...</span>
                <span>SYNC_SHADERS...</span>
                <span>MESH_GEN...</span>
                <span>READY.</span>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-baseline gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-mono text-white/40 tracking-[0.2em] uppercase mb-1">{currentKeyword}</span>
              <div className="font-mono text-2xl md:text-4xl text-white leading-none tracking-tighter">
                {progress.toString().padStart(3, '0')}<span className="text-xs opacity-40 ml-1">%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exit Animation: Radial Bloom */}
      <AnimatePresence>
        <div className="fixed inset-0 pointer-events-none z-[10000] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            exit={{ 
              scale: 25, 
              opacity: 1,
              transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="w-20 h-20 bg-white rounded-full origin-center"
          />
        </div>
      </AnimatePresence>
    </motion.div>
  )
}
