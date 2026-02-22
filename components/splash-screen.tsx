"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"

const phrases = [
  "Awakening Creativity",
  "Curating Experiences",
  "Designing Futures",
  "Bridging Ideas",
  "SA Portfolio 2026"
]

export default function SplashScreen({ finishLoading }: { finishLoading: () => void }) {
  const [index, setIndex] = useState(0)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    // Phrase cycling
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 1200)

    // Percentage counter
    const animation = animate(count, 100, {
      duration: 5,
      ease: [0.76, 0, 0.24, 1],
      onComplete: () => {
        setTimeout(() => {
          finishLoading()
        }, 800)
      }
    })

    return () => {
      clearInterval(interval)
      animation.stop()
    }
  }, [count, finishLoading])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Dynamic Background Noise */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      
      {/* Decorative SVG Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-brand-500/20 to-transparent rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -10, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-brand-500/10 to-transparent rounded-full blur-[100px]" 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* The Main Display */}
        <div className="h-32 flex flex-col items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={phrases[index]}
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -40, opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-center"
            >
              <span className="text-xs tracking-[0.8em] text-brand-500 font-outfit uppercase mb-4 block opacity-80">
                In Progress
              </span>
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white font-outfit">
                {phrases[index]}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The Counter */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-baseline gap-1">
            <motion.span className="text-7xl md:text-9xl font-bold text-white/10 font-outfit tabular-nums">
              {rounded}
            </motion.span>
            <span className="text-2xl font-light text-brand-500/30 font-outfit">%</span>
          </div>
          
          {/* Minimalist Loading Bar */}
          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden">
            <motion.div 
              style={{ scaleX: useTransform(count, [0, 100], [0, 1]) }}
              className="absolute inset-0 bg-brand-500 origin-left"
            />
          </div>
        </div>
      </div>

      {/* Cinematic Reveal Mask (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.path
          initial={{ d: "M 0 0 V 0 Q 50 0 100 0 V 0 Z" }}
          animate={{ 
            d: "M 0 0 V 0 Q 50 0 100 0 V 0 Z" 
          }}
          exit={{ 
            d: [
              "M 0 100 V 100 Q 50 100 100 100 V 100 Z",
              "M 0 100 V 50 Q 50 0 100 50 V 100 Z",
              "M 0 100 V 0 Q 50 0 100 0 V 100 Z"
            ],
            transition: { duration: 1.2, times: [0, 0.6, 1], ease: [0.76, 0, 0.24, 1] }
          }}
          fill="#0a0a0a"
        />
      </svg>
    </motion.div>
  )
}
