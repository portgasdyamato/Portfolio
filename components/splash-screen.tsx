"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

const roles = ["UI/UX Designer", "Interaction Designer", "Motion Designer", "Creative Director", "Visual Storyteller"]

// We split the name into chars for the staggered reveal
const nameChars = "Sakshi.".split("")

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<"loading" | "done">("loading")
  const finishCalled = useRef(false)

  // Cursor glow
  const cursorX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 400)
  const cursorY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 300)
  const glowX = useSpring(cursorX, { stiffness: 80, damping: 30 })
  const glowY = useSpring(cursorY, { stiffness: 80, damping: 30 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY) }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [cursorX, cursorY])

  // Rock-solid progress counter
  useEffect(() => {
    let count = 0
    const id = setInterval(() => {
      count += 1
      setProgress(count)
      if (count >= 100) {
        clearInterval(id)
        if (!finishCalled.current) {
          finishCalled.current = true
          setPhase("done")
          setTimeout(() => finishLoadingAction(), 1000)
        }
      }
    }, 28)
    return () => clearInterval(id)
  }, [finishLoadingAction])

  // Role cycling
  useEffect(() => {
    const id = setInterval(() => setRoleIndex(i => (i + 1) % roles.length), 600)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ clipPath: "circle(0% at 50% 50%)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center select-none"
      style={{ background: "linear-gradient(135deg, #FFF5F5 0%, #FFEAEA 40%, #FFF8F2 100%)" }}
    >
      {/* Interactive cursor glow — follows mouse */}
      <motion.div
        className="pointer-events-none fixed w-[600px] h-[600px] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(255,181,181,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Floating circles — artful decoration */}
      {[
        { size: 300, x: "-8vw", top: "-80px", opacity: 0.15, duration: 12 },
        { size: 200, x: "80vw", top: "60vh", opacity: 0.12, duration: 9 },
        { size: 140, x: "65vw", top: "8vh", opacity: 0.18, duration: 7 },
        { size: 90,  x: "10vw", top: "70vh", opacity: 0.2, duration: 10 },
        { size: 50,  x: "50vw", top: "85vh", opacity: 0.25, duration: 6 },
      ].map((c, i) => (
        <motion.div
          key={i}
          style={{ width: c.size, height: c.size, left: c.x, top: c.top }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          className="absolute rounded-full border-2 border-[#FFB5B5] pointer-events-none"
          initial={{ opacity: c.opacity }}
        />
      ))}

      {/* Fine dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #FFB5B5 1.2px, transparent 1.2px)",
          backgroundSize: "30px 30px",
          opacity: 0.12,
        }}
      />

      {/* Corner label: top-left */}
      <div className="absolute top-6 left-8 text-[9px] tracking-[0.4em] text-[#FFB5B5] font-bold uppercase">
        Portfolio 2025
      </div>
      {/* Corner label: top-right — live counter */}
      <div className="absolute top-6 right-8 font-mono text-[11px] text-[#d4796f] tracking-widest">
        {String(progress).padStart(3, "0")}<span className="text-[#FFB5B5]"> / 100</span>
      </div>
      {/* Corner label: bottom-left */}
      <div className="absolute bottom-6 left-8 text-[9px] tracking-[0.25em] text-[#c99e9a]/80 uppercase font-medium">
        Sakshi Agrahari — Loading Experience
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 flex flex-col items-center gap-8">

        {/* Role tag — cycles through titles */}
        <div className="h-5 flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="text-[10px] tracking-[0.55em] uppercase font-bold text-[#FFB5B5]"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Name — per-character stagger reveal */}
        <div className="relative flex items-end gap-0">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, rotateZ: -15, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-black tracking-tight leading-none"
              style={{
                fontSize: "clamp(72px, 14vw, 140px)",
                color: char === "." ? "#FFB5B5" : "#1a0a0a",
                display: "inline-block",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Tagline with mask-in underline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="relative text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#b08585] font-medium">
            Crafting visionary digital experiences
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-1.5 h-[1.5px] w-full bg-[#FFB5B5]/50 origin-left"
          />
        </motion.div>

        {/* ─── PROGRESS SECTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4 w-72 sm:w-96 mt-4"
        >
          {/* Segmented petal dots */}
          <div className="flex gap-2">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scaleY: progress >= (i + 1) * 5 ? 1 : 0.4,
                  opacity: progress >= (i + 1) * 5 ? 1 : 0.2,
                  backgroundColor: progress >= (i + 1) * 5 ? "#FFB5B5" : "#FFB5B5",
                }}
                className="w-[3px] h-4 rounded-full bg-[#FFB5B5]"
              />
            ))}
          </div>

          {/* Smooth gradient bar */}
          <div className="w-full h-[2px] rounded-full bg-[#FFB5B5]/15 relative overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }}
              className="h-full rounded-full relative"
              style={{ background: "linear-gradient(90deg, #FFD6D6, #FFB5B5, #d4796f)" }}
            >
              {/* Shimmer */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
              {/* Glowing head */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FFB5B5] rounded-full shadow-[0_0_12px_4px_rgba(255,181,181,0.6)]" />
            </motion.div>
          </div>

          {/* Text phase state */}
          <AnimatePresence mode="wait">
            {phase === "done" ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[10px] tracking-[0.6em] text-[#FFB5B5] font-black uppercase"
              >
                ✦ Welcome ✦
              </motion.p>
            ) : (
              <motion.p
                key="loading"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[9px] tracking-[0.4em] text-[#c99e9a] uppercase font-medium"
              >
                Loading magic...
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating petal shapes — organic, not mechanical */}
      {[...Array(12)].map((_, i) => {
        const size = 6 + Math.floor(i * 3.5)
        return (
          <motion.div
            key={`petal-${i}`}
            initial={{
              x: `${10 + (i * 7) % 80}vw`,
              y: "110vh",
              opacity: 0,
              rotate: Math.random() * 360,
            }}
            animate={{
              y: "-20vh",
              opacity: [0, 0.4, 0],
              rotate: [0, 180 + i * 30],
            }}
            transition={{
              duration: 7 + (i % 5),
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-[#FFB5B5] pointer-events-none"
            style={{ width: size, height: size, filter: "blur(1px)" }}
          />
        )
      })}
    </motion.div>
  )
}
