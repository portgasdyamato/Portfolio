"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const name = "Sakshi Agrahari"

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // Mouse Focus Lens
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const lensX = useSpring(mouseX, { stiffness: 150, damping: 40 })
  const lensY = useSpring(mouseY, { stiffness: 150, damping: 40 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  // Motion Values for Loading
  const progressVal = useMotionValue(0)

  // Progress logic
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      const jump = Math.random() * 5 + 0.5
      count = Math.min(100, count + jump)
      setProgress(Math.floor(count))
      progressVal.set(count)
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 1400)
        }
      }
    }, 45)
    return () => clearInterval(interval)
  }, [finishLoadingAction, progressVal])

  // Dynamic lens size based on progress
  const lensSize = useTransform(progressVal, [0, 100], [250, 4000])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "circle(0% at 50% 50%)", 
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex items-center justify-center select-none cursor-none"
    >
      {/* ── BACKGROUND GRAIN ── */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* ── LAYER 1: THE BLURRED BASE ── */}
      <div className="relative flex flex-col items-center justify-center filter blur-[40px] opacity-10">
        <h1 className="text-[55px] sm:text-[90px] md:text-[110px] lg:text-[140px] font-black text-[#1a0a0a] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {name}
        </h1>
        <p className="text-[10px] tracking-[1em] uppercase font-black text-[#b33951] mt-8">
           Experiences that matter.
        </p>
      </div>

      {/* ── LAYER 2: THE SELECTIVE FOCUS ── */}
      {mounted && (
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
          style={{
            clipPath: useTransform([lensX, lensY, lensSize], ([x, y, s]: any) => `circle(${s / 2}px at ${x}px ${y}px)`)
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[55px] sm:text-[90px] md:text-[110px] lg:text-[140px] font-black text-[#1a0a0a] tracking-tight drop-shadow-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {name}
            </h1>
            <div className="flex items-center gap-12 mt-8">
                <div className="w-16 h-px bg-[#b33951]" />
                <p className="text-[11px] tracking-[1.2em] uppercase font-black text-[#b33951]">
                    Focusing Design.
                </p>
                <div className="w-16 h-px bg-[#b33951]" />
            </div>
          </div>
        </motion.div>
      )}

      {/* ── CUSTOM MOUSE CURSOR (LENS) ── */}
      {mounted && (
        <motion.div 
            style={{ x: lensX, y: lensY, translateX: "-50%", translateY: "-50%" }}
            className="fixed w-10 h-10 border border-[#b33951]/40 rounded-full z-20 flex items-center justify-center pointer-events-none"
        >
            <div className="w-1 h-1 bg-[#b33951] rounded-full" />
        </motion.div>
      )}

      {/* ── INFOGRAPHIC HUD ── */}
      <div className="absolute top-12 left-14 flex flex-col gap-1 text-[#1a0a0a]/20 uppercase">
         <span className="text-[9px] tracking-[0.5em] font-black">Refining Vision</span>
         <span className="font-mono text-[11px] font-bold">MODE: SELECTIVE_FOCUS</span>
      </div>

      <div className="absolute top-12 right-14 flex items-center gap-6">
         <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: progress / 100 }}
             className="w-48 h-px bg-[#b33951]/20 origin-right" 
         />
         <span className="font-mono text-xl font-black text-[#b33951] italic">{Math.floor(progress)}%</span>
      </div>

      <div className="absolute bottom-12 left-14 text-[9px] tracking-[0.4em] font-black text-[#1a0a0a]/30 uppercase">
        Use cursor to discover.
      </div>

    </motion.div>
  )
}
