"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const fonts = ["Super Pixel", "Silkscreen", "JetBrains Mono", "Share Tech Mono", "VT323", "Gamer", "alo"]
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
      {/* Background Digital Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFB5B5] via-transparent to-[#FFB5B5]" />
      </div>

      {/* Experimental Typography Section */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-start md:items-center">
        {/* Floating Coordinates */}
        <div className="absolute -top-20 right-0 font-mono text-[10px] text-white/60 tracking-widest hidden md:block text-right">
          LAT: 28.6139° N <br />
          LONG: 77.2090° E <br />
          SYS: ACTIVE_RENEGED
        </div>

        <div className="flex flex-col gap-2 overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8"
          >
            <span className="text-white/40 font-mono text-xs md:text-sm tracking-tighter">001_SYSTEM.BOOT</span>
            <h1 
              style={{ fontFamily: currentFont, textShadow: "0 0 10px rgba(255,255,255,0.4)" }}
              className="text-6xl md:text-9xl text-slate-900 transition-all duration-75 uppercase leading-none tracking-tight md:tracking-[-0.02em]"
            >
              Sakshi
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="flex flex-col md:flex-row-reverse items-baseline gap-4 md:gap-8 self-end"
          >
            <span className="text-white font-mono text-xs md:text-sm tracking-widest uppercase font-bold">
              {currentKeyword}
            </span>
            <h1 
              style={{ fontFamily: currentFont, textShadow: "0 0 10px rgba(255,255,255,0.4)" }}
              className="text-6xl md:text-9xl text-slate-900 transition-all duration-75 uppercase leading-none italic tracking-tight md:tracking-[-0.02em]"
            >
              Agrahari
            </h1>
          </motion.div>
        </div>

        {/* Progress Display - Radical Style */}
        <div className="mt-16 w-full flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/50 font-mono uppercase tracking-[0.3em] mb-1">Initialization</span>
            <div className="flex gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    backgroundColor: i < (progress / 5) ? "#ffffff" : "rgba(255,255,255,0.2)",
                    height: [2, 8, 2]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: i * 0.05,
                    backgroundColor: { duration: 0.1 } 
                  }}
                  className="w-1 md:w-2 rounded-full"
                />
              ))}
            </div>
          </div>
          
          <div className="font-mono text-4xl md:text-6xl text-white/20 tracking-tighter">
            {progress.toString().padStart(3, '0')}%
          </div>
        </div>
      </div>

      {/* Decorative Glitch Bars */}
      <motion.div
        animate={{ 
          y: [-100, 1000],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "linear",
          delay: 0.5 
        }}
        className="absolute left-0 w-full h-px bg-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)] z-20 pointer-events-none"
      />

      {/* Reveal Slats - Exit Animation */}
      <AnimatePresence>
        <div className="fixed inset-0 pointer-events-none flex z-[10000]">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.03, 
                ease: [0.76, 0, 0.24, 1] 
              }}
              className="flex-1 bg-[#FFB5B5] origin-bottom shadow-[0_0_2px_rgba(255,255,255,0.1)]"
            />
          ))}
        </div>
      </AnimatePresence>

      <AnimatePresence>
        <div className="fixed inset-0 pointer-events-none flex z-[10001]">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: (11 - i) * 0.03, 
                ease: [0.76, 0, 0.24, 1],
                delayChildren: 1
              }}
              className="flex-1 bg-white origin-top opacity-5"
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}
