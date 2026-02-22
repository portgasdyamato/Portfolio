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
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
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
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Decorative HUD Elements */}
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          className="absolute -top-40 left-10 md:left-20 font-mono text-[9px] text-white tracking-[0.5em] uppercase vertical-text hidden md:block"
        >
          DATA_STREAM_ACTIVE // SYNC_STATUS: OK // PKT_RECV: {progress}%
        </motion.div>

        <div className="relative flex flex-col items-center md:items-start group">
          {/* Glitch Overlay Text (Ghost Effect) - Moved to background */}
          <motion.div 
            style={{ fontFamily: currentFont, filter: "url(#glitch)" }}
            className="absolute inset-0 flex flex-col items-center md:items-start opacity-20 pointer-events-none scale-105"
          >
            <span className="text-8xl md:text-[14rem] text-white leading-[0.75]">SAKSHI</span>
            <span className="text-8xl md:text-[14rem] text-white self-end mt-[-1rem] md:mt-[-3rem] leading-[0.75] italic">AGRAHARI</span>
          </motion.div>

          {/* Animated Character Groups */}
          <div className="relative z-10 flex overflow-hidden">
            {"SAKSHI".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 200, rotateX: -90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                style={{ fontFamily: currentFont }}
                transition={{ 
                  duration: 1.2, 
                  delay: i * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-8xl md:text-[14rem] text-slate-900 inline-block leading-[0.75] select-none"
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="relative z-10 flex self-end mt-[-1rem] md:mt-[-3rem] overflow-hidden">
            {"AGRAHARI".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: -200, rotateX: 90, opacity: 0 }}
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                style={{ fontFamily: currentFont }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.2 + (7-i) * 0.08, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="text-8xl md:text-[14rem] text-slate-900 inline-block leading-[0.75] italic select-none"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Dynamic Role & Meta Detail */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-4 bg-slate-900 text-white px-6 py-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          >
            <span className="text-[10px] font-mono tracking-widest text-white/50">ACCESSING</span>
            <span className="text-sm font-bold tracking-[0.3em]">{currentKeyword}</span>
          </motion.div>
          
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Spatial Progress: The Expansion Grid */}
        <div className="absolute bottom-20 left-10 md:left-20 right-10 md:right-20 flex flex-col gap-6">
          <div className="grid grid-cols-10 gap-1 md:gap-2 h-2 opacity-30">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scaleY: i < (progress / 10) ? 1.5 : 1,
                  backgroundColor: i < (progress / 10) ? "#fff" : "rgba(255,255,255,0.2)"
                }}
                className="h-full rounded-sm"
              />
            ))}
          </div>
          
          <div className="flex justify-between items-end border-b border-white/20 pb-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-white tracking-[0.5em] mb-1">ALLOCATING_RESOURCES</span>
              <div className="flex gap-2 overflow-hidden h-4">
                <motion.div 
                  animate={{ y: [0, -20, -40, -60, -80] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="font-mono text-[9px] text-white/40 flex flex-col"
                >
                  <span>MAPPING_DOM...</span>
                  <span>LOADING_ASSETS...</span>
                  <span>SYNCING_VARS...</span>
                  <span>BOOTING_UX...</span>
                </motion.div>
              </div>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-8xl md:text-[8rem] font-mono text-white/10 leading-none select-none">
                {progress.toString().padStart(3, '0')}
              </span>
              <span className="text-xl font-mono text-white tracking-tighter">%</span>
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
