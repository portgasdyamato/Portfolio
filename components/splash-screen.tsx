"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const roles = ["UI/UX Designer", "Interaction Designer", "Motion Designer", "Creative Director", "Visual Storyteller"]

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [done, setDone] = useState(false)
  const finishCalled = useRef(false)

  // Progress ticker — guaranteed to reach 100
  useEffect(() => {
    let current = 0
    const timer = setInterval(() => {
      current += 1
      setProgress(current)
      if (current >= 100) {
        clearInterval(timer)
        if (!finishCalled.current) {
          finishCalled.current = true
          setDone(true)
          setTimeout(() => finishLoadingAction(), 900)
        }
      }
    }, 28) // ~2.8s total
    return () => clearInterval(timer)
  }, [finishLoadingAction])

  // Role cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 540)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-[#FDF8F5] overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Soft pink ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#FFB5B5]/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-[#FFB5B5]/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#FFE0E0]/25 rounded-full blur-[80px]"
        />
      </div>

      {/* Fine dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c0506a 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Corner labels */}
      <div className="absolute top-8 left-8 text-[10px] tracking-[0.3em] text-[#FFB5B5] font-semibold uppercase opacity-60">
        Portfolio 2025
      </div>
      <div className="absolute top-8 right-8 text-[10px] tracking-[0.3em] text-[#c0756e] font-mono opacity-60">
        {String(progress).padStart(3, "0")} / 100
      </div>
      <div className="absolute bottom-8 left-8 text-[10px] tracking-[0.15em] text-[#c0756e]/60 font-mono uppercase">
        Sakshi Agrahari — Loading Experience
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">

        {/* Animated role tag */}
        <div className="h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-[11px] tracking-[0.5em] uppercase font-bold text-[#FFB5B5]"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Main name with letter reveal */}
        <div className="relative">
          <h1 className="text-[72px] sm:text-[110px] md:text-[140px] font-black tracking-tighter text-[#1a0a0a] leading-none">
            {"Sakshi.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
                style={{ color: char === "." ? "#FFB5B5" : "#1a0a0a" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Decorative underline with stroke */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#FFB5B5]/40 origin-left"
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm text-[#9e6a65] tracking-[0.15em] uppercase font-medium"
        >
          Crafting visionary digital experiences
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-64 sm:w-80 flex flex-col items-center gap-3"
        >
          {/* Track */}
          <div className="w-full h-[2px] bg-[#FFB5B5]/20 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#FFB5B5] to-[#c0756e] rounded-full relative"
            >
              {/* Glowing tip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#c0756e] rounded-full shadow-[0_0_8px_#FFB5B5]" />
            </motion.div>
          </div>

          {/* Segmented dots beneath bar */}
          <div className="flex gap-1.5">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  backgroundColor: progress >= (i + 1) * 10 ? "#FFB5B5" : "#FFB5B5",
                  opacity: progress >= (i + 1) * 10 ? 1 : 0.2,
                  scale: progress >= (i + 1) * 10 ? 1 : 0.7
                }}
                className="w-1 h-1 rounded-full bg-[#FFB5B5]"
              />
            ))}
          </div>
        </motion.div>

        {/* Exit animation: progress text */}
        <AnimatePresence>
          {done && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] tracking-[0.5em] text-[#FFB5B5] uppercase font-bold"
            >
              Welcome ✦
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Floating decorative shapes */}
      {[
        { size: 80, x: "10vw", y: "20vh", delay: 0 },
        { size: 50, x: "85vw", y: "15vh", delay: 1 },
        { size: 120, x: "75vw", y: "70vh", delay: 0.5 },
        { size: 40, x: "15vw", y: "75vh", delay: 1.5 },
      ].map((s, i) => (
        <motion.div
          key={i}
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
          animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
          className="absolute rounded-full border border-[#FFB5B5]/20 pointer-events-none"
        />
      ))}
    </motion.div>
  )
}
