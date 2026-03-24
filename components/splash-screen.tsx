"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion"

const roles = ["UI/UX Designer", "Interaction Designer", "Motion Designer", "Creative Director", "Visual Storyteller"]
const nameChars = "Sakshi.".split("")

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [phase, setPhase] = useState<"loading" | "done">("loading")
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // Motion values — always called at top level, initialized to safe defaults
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const glowX = useSpring(cursorX, { stiffness: 80, damping: 30 })
  const glowY = useSpring(cursorY, { stiffness: 80, damping: 30 })

  useEffect(() => {
    setMounted(true)
    // Set initial position after mount (client-only)
    cursorX.set(window.innerWidth / 2)
    cursorY.set(window.innerHeight / 2)

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
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
          setTimeout(() => finishLoadingAction(), 900)
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
      {/* Interactive cursor glow — only renders after mount to avoid SSR mismatch */}
      {mounted && (
        <motion.div
          className="pointer-events-none fixed rounded-full"
          style={{
            x: glowX,
            y: glowY,
            translateX: "-50%",
            translateY: "-50%",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(255,181,181,0.35) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Floating circles — artful decoration */}
      {[
        { size: 300, left: "-8vw", top: "-80px", opacity: 0.15, duration: 12 },
        { size: 200, left: "80vw", top: "60vh", opacity: 0.12, duration: 9 },
        { size: 140, left: "65vw", top: "8vh", opacity: 0.18, duration: 7 },
        { size: 90,  left: "10vw", top: "70vh", opacity: 0.2, duration: 10 },
        { size: 50,  left: "50vw", top: "85vh", opacity: 0.25, duration: 6 },
      ].map((c, i) => (
        <motion.div
          key={i}
          style={{ width: c.size, height: c.size, left: c.left, top: c.top, opacity: c.opacity, position: "absolute" }}
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          className="rounded-full border-2 border-[#FFB5B5] pointer-events-none"
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

      {/* Corner labels */}
      <div className="absolute top-6 left-8 text-[9px] tracking-[0.4em] text-[#FFB5B5] font-bold uppercase">Portfolio 2025</div>
      <div className="absolute top-6 right-8 font-mono text-[11px] text-[#d4796f] tracking-widest">
        {String(progress).padStart(3, "0")}<span className="text-[#FFB5B5]"> / 100</span>
      </div>
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

        {/* Name — per-character stagger */}
        <div className="flex items-end">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, rotate: -15, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-tight leading-none"
              style={{
                fontSize: "clamp(72px, 14vw, 140px)",
                color: char === "." ? "#FFB5B5" : "#1a0a0a",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                display: "inline-block",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
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

        {/* ─── PROGRESS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-4 w-72 sm:w-96 mt-4"
        >
          {/* Segmented tick visualizer */}
          <div className="flex gap-1.5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scaleY: progress >= (i + 1) * 5 ? 1 : 0.35,
                  opacity: progress >= (i + 1) * 5 ? 1 : 0.2,
                }}
                className="w-[3px] h-4 rounded-full bg-[#FFB5B5] origin-bottom"
              />
            ))}
          </div>

          {/* Smooth gradient bar with shimmer */}
          <div className="w-full h-[2px] rounded-full bg-[#FFB5B5]/15 relative overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }}
              className="h-full rounded-full relative overflow-hidden"
              style={{ background: "linear-gradient(90deg, #FFD6D6, #FFB5B5, #d4796f)" }}
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />
            </motion.div>
            {/* Glowing tip */}
            <motion.div
              animate={{ left: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFB5B5] rounded-full shadow-[0_0_12px_4px_rgba(255,181,181,0.6)]"
            />
          </div>

          {/* Status text */}
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

      {/* Rising petal particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          initial={{ x: `${10 + (i * 7) % 80}vw`, y: "110vh", opacity: 0 }}
          animate={{ y: "-20vh", opacity: [0, 0.4, 0] }}
          transition={{ duration: 7 + (i % 5), repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
          className="absolute rounded-full bg-[#FFB5B5] pointer-events-none"
          style={{ width: 6 + i * 3, height: 6 + i * 3, filter: "blur(1px)" }}
        />
      ))}
    </motion.div>
  )
}
