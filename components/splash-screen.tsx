"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const keywords = ["CREATIVE", "DEVELOPER", "STRATEGIST", "DESIGNER", "STORYTELLER", "PIXEL ARTIST"]

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(progressFunc)
  const [keyword, setKeyword] = useState(keywords[0])

  function progressFunc(v: number) {
     return Math.min(100, v + 2)
  }

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setProgress((v) => {
        if (v >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            finishLoadingAction()
          }, 800)
          return 100
        }
        return v + 2
      })
      setKeyword(keywords[Math.floor(Math.random() * keywords.length)])
    }, 50)

    return () => clearInterval(interval)
  }, [finishLoadingAction])

  if (!mounted) return null

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)", transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] bg-[#030303] overflow-hidden flex items-center justify-center font-outfit select-none"
    >
      <div className="grain" />
      
      {/* HUD Frame */}
      <div className="absolute inset-0 px-20 py-20 flex flex-col justify-between items-start pointer-events-none opacity-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] tracking-[1em] text-white">SYSTEM_ID // S-01</span>
          <span className="text-[10px] tracking-[0.5em] text-white">READY_STATE // {progress}%</span>
        </div>
        <div className="w-[1px] h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="absolute right-20 bottom-20 flex flex-col items-end opacity-10 text-right">
        <span className="text-[10px] tracking-[1em] text-white uppercase mb-2">Portfolio v3.0</span>
        <div className="flex gap-2">
           {[...Array(5)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ opacity: [0.2, 1, 0.2] }}
               transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
               className="w-1.5 h-1.5 bg-primary/40 rounded-full"
             />
           ))}
        </div>
      </div>

      {/* Main Kinetic Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-primary font-bold tracking-[0.6em] text-[10px] uppercase mb-12"
        >
          {keyword}
        </motion.div>

        <div className="relative flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[120px] font-black text-white italic tracking-tighter leading-none"
          >
            SAKSHI.
          </motion.h1>
          
          <div className="w-48 h-[1px] bg-white/10 mt-16 relative overflow-hidden rounded-full">
             <motion.div 
               animate={{ x: `${progress - 100}%` }}
               className="absolute inset-0 bg-primary"
             />
          </div>
        </div>
      </div>

      {/* Floating Ambient Particles (Subtle) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            y: ["-20vh", "120vh"],
            opacity: [0, 0.2, 0],
            x: (i * 15) + "vw"
          }}
          transition={{ 
            duration: 10 + i,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear"
          }}
          className="absolute w-[1px] h-20 bg-gradient-to-b from-white to-transparent pointer-events-none"
        />
      ))}
    </motion.div>
  )
}
