"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const keywords = ["CREATIVE", "DEVELOPER", "STRATEGIST", "ENGINEER", "STORYTELLER", "ARCHITECT"]

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [currentKeyword, setCurrentKeyword] = useState(keywords[0])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const keywordInterval = setInterval(() => {
      setCurrentKeyword(keywords[Math.floor(Math.random() * keywords.length)])
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(finishLoadingAction, 1200)
          return 100
        }
        const step = Math.random() > 0.8 ? 5 : 1
        return Math.min(prev + step, 100)
      })
    }, 40)

    return () => {
      clearInterval(keywordInterval)
      clearInterval(progressInterval)
    }
  }, [finishLoadingAction])

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#030303] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Texture & Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="grain-overlay opacity-[0.05]" />
        <div className="grid-overlay opacity-[0.03]" />
        
        {/* Glow Particles */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB5B5]/20 rounded-full blur-[120px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase mb-4">
              System Initialization
            </span>
            <h1 className="text-4xl md:text-6xl font-black font-outfit tracking-tighter text-white uppercase overflow-hidden flex whitespace-nowrap">
              Sakshi <span className="text-primary italic ml-4 font-light">Agrahari.</span>
            </h1>
          </motion.div>
          
          <div className="h-[1px] w-48 bg-white/10 mt-8 relative overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              className="absolute inset-y-0 left-0 w-full bg-primary origin-left"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentKeyword}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
              className="text-xs font-mono tracking-[0.3em] text-primary font-bold"
            >
              {currentKeyword}
            </motion.span>
          </AnimatePresence>
          <span className="text-[10px] font-mono text-white/20">
            {progress}% COMPLETED
          </span>
        </div>
      </div>

      {/* Exit Bloom Effect */}
      <AnimatePresence>
        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-white flex items-center justify-center mix-blend-difference pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
