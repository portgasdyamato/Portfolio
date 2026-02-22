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
    <div className="fixed inset-0 z-[9999] bg-[#FFB5B5] overflow-hidden flex flex-col items-center justify-center">
      {/* Cinematic CRT Overlay Group */}
      <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden select-none">
        {/* Scanning Line */}
        <motion.div 
          animate={{ y: ["-100%", "1000%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-full h-[15vh] bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-50"
        />
        {/* Static/Noise Texture */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)]" />
      </div>

      {/* Background Digital Grid with Pulse */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFB5B5] via-transparent to-[#FFB5B5]" />
      </div>

      {/* Experimental Typography Section */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-start md:items-center">
        {/* Floating Coordinates - Animated */}
        <motion.div 
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute -top-32 md:-top-40 right-10 font-mono text-[10px] md:text-xs text-white/70 tracking-[0.3em] uppercase hidden md:block text-right leading-relaxed"
        >
          <div className="flex flex-col gap-1">
            <span>Buffer_Init: 0xFF02A</span>
            <span>Kernel_Load: OK</span>
            <span>Sakshi_Core: Stable</span>
            <div className="flex gap-2 justify-end mt-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="w-2 h-2 bg-white/40 rounded-full" />
              <span className="w-2 h-2 bg-white/40 rounded-full" />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-0 md:gap-4 overflow-hidden py-10">
          <motion.div
            initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-start gap-2"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-0.5 bg-white/20 text-[10px] text-white font-mono rounded select-none">V 2.6.0</span>
              <span className="text-white/40 font-mono text-xs tracking-tighter uppercase">Initializing_System</span>
            </div>
            <h1 
              style={{ fontFamily: currentFont, textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              className="text-7xl md:text-[13rem] text-slate-900 transition-all duration-75 uppercase leading-[0.85] tracking-tighter md:tracking-[-0.04em]"
            >
              Sakshi
            </h1>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="flex flex-col items-end gap-2 self-end mt-[-1rem] md:mt-[-2rem]"
          >
            <h1 
              style={{ fontFamily: currentFont, textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
              className="text-7xl md:text-[13rem] text-slate-900 transition-all duration-75 uppercase leading-[0.85] italic tracking-tighter md:tracking-[-0.04em]"
            >
              Agrahari
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <motion.span 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="text-white font-mono text-xs md:text-sm tracking-[0.4em] uppercase font-bold bg-slate-900 px-3 py-1"
              >
                {currentKeyword}
              </motion.span>
              <span className="text-white/40 font-mono text-xs hidden md:block">ROLE_ID: CREATIVE_DEV</span>
            </div>
          </motion.div>
        </div>

        {/* Progress Display - Radical Style */}
        <div className="mt-10 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-8 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-1.5 h-12 items-end">
              {[...Array(40)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    backgroundColor: i < Math.floor(progress * 0.4) ? "#ffffff" : "rgba(255,255,255,0.1)",
                    height: i < Math.floor(progress * 0.4) ? [4, 24, 4] : 4
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.02,
                    height: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="w-1 md:w-1.5 rounded-full"
                />
              ))}
            </div>
            <div className="flex justify-between font-mono text-[9px] text-white/40 uppercase tracking-widest">
              <span>Sector_Scan: Complete</span>
              <span>Load: Active</span>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="font-mono text-6xl md:text-9xl text-white/10 tracking-tighter mb-[-1rem] leading-none">
              {progress.toString().padStart(3, '0')}%
            </div>
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-[0.5em]">System_Integrity_Load</span>
          </div>
        </div>
      </div>

      {/* Decorative Glitch Bars - High Frequency */}
      <motion.div
        animate={{ 
          y: [-200, 1200],
          opacity: [0, 1, 0],
          height: [1, 40, 1]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.2 
        }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none blur-[2px]"
      />

      {/* Exit Animation - Liquid Slats */}
      <AnimatePresence>
        <div className="fixed inset-0 pointer-events-none flex z-[10000]">
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.025, 
                ease: [0.76, 0, 0.24, 1] 
              }}
              className="flex-1 bg-[#FFB5B5] origin-bottom"
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}
