"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const TAGS = ["UI/UX Design", "Motion Design", "Interaction Design", "Design Systems", "Creative Direction"]

// ── helper: Magnetic button ──
function Magnetic({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18 })
  const sy = useSpring(y, { stiffness: 200, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [tagIdx, setTagIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse glow
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const gx = useSpring(mx, { stiffness: 50, damping: 25 })
  const gy = useSpring(my, { stiffness: 50, damping: 25 })

  // Parallax layers — ALL declared at top
  const p1x = useTransform(gx, (v) => v * 0.018)
  const p1y = useTransform(gy, (v) => v * 0.018)
  const p2x = useTransform(gx, (v) => v * -0.012)
  const p2y = useTransform(gy, (v) => v * -0.012)
  const p3x = useTransform(gx, (v) => v * 0.03)
  const p3y = useTransform(gy, (v) => v * 0.03)

  useEffect(() => {
    setMounted(true)
    const el = containerRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      mx.set(e.clientX - r.left - r.width / 2)
      my.set(e.clientY - r.top - r.height / 2)
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [mx, my])

  useEffect(() => {
    const id = setInterval(() => setTagIdx(i => (i + 1) % TAGS.length), 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      ref={containerRef}
      className="col-span-1 md:col-span-2 relative overflow-hidden"
      style={{ minHeight: "min(88vh, 780px)", borderRadius: "2.5rem" }}
    >
      {/* ─── BACKGROUND CANVAS ─── */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #FFF9F7 0%, #FFF0EE 55%, #FFF9F5 100%)" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,181,181,0.45) 1.3px, transparent 1.3px)",
          backgroundSize: "28px 28px",
          opacity: 0.3,
        }}
      />

      {/* Mouse-reactive glow orb */}
      {mounted && (
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            x: gx,
            y: gy,
            translateX: "-50%",
            translateY: "-50%",
            left: "50%",
            top: "50%",
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(255,181,181,0.22) 0%, transparent 65%)",
          }}
        />
      )}

      {/* ─── GIANT GHOST LETTERS (background art) ─── */}
      <motion.div
        style={{ x: p2x, y: p2y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="text-[28vw] font-black leading-none tracking-tighter whitespace-nowrap"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,181,181,0.18)",
          }}
        >
          SAKSHI
        </span>
      </motion.div>

      {/* ─── ORBITING BADGE ─── */}
      {mounted && (
        <div className="absolute top-10 right-10 lg:top-14 lg:right-14 w-20 h-20 lg:w-24 lg:h-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="relative w-full h-full"
          >
            {/* Circular text path */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text
                className="fill-[#c0756e]"
                style={{ fontSize: "9.5px", fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em", fontWeight: 700 }}
              >
                <textPath href="#circle">OPEN TO HIRE · OPEN TO HIRE ·</textPath>
              </text>
            </svg>
          </motion.div>
          {/* Center star */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-[#FFB5B5]" />
          </div>
        </div>
      )}

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 flex flex-col h-full p-8 md:p-12 lg:px-16 lg:py-14" style={{ minHeight: "inherit" }}>

        {/* Top: tag line */}
        <div className="flex items-start justify-between">
          <div className="h-6 overflow-hidden mt-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={tagIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="block text-[10px] tracking-[0.55em] uppercase font-bold text-[#FFB5B5]"
              >
                {TAGS[tagIdx]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Year floating tag */}
          <motion.div
            style={{ x: p3x, y: p3y }}
            className="hidden lg:flex items-center gap-2 bg-white/70 border border-[#FFB5B5]/25 rounded-full px-4 py-2 shadow-sm"
          >
            <span className="text-[9px] tracking-[0.5em] text-[#9e6a65] font-semibold uppercase">Portfolio '25</span>
          </motion.div>
        </div>

        {/* ── HEADLINE — the star of the show ── */}
        <div className="flex-1 flex flex-col justify-center my-6 lg:my-0">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="block text-[13vw] sm:text-[11vw] lg:text-[9.5vw] font-black tracking-tighter leading-[0.85] text-[#1a0a0a]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Crafting
              </span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              {/* Outlined stroke text */}
              <span
                className="block text-[13vw] sm:text-[11vw] lg:text-[9.5vw] font-black tracking-tighter leading-[0.85]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  color: "transparent",
                  WebkitTextStroke: "2px #1a0a0a",
                }}
              >
                Visionary
              </span>
              {/* Inline rotating ping badge */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:flex w-16 h-16 rounded-full bg-[#FFB5B5]/20 border-2 border-[#FFB5B5]/60 items-center justify-center shrink-0"
              >
                <span className="text-xl">✦</span>
              </motion.div>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="block text-[13vw] sm:text-[11vw] lg:text-[9.5vw] font-light italic tracking-tight leading-[0.85] text-[#FFB5B5]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Experiences.
              </span>
            </motion.div>
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-[#FFB5B5]/20 pt-7"
        >
          {/* Bio + CTAs */}
          <div className="flex flex-col gap-5">
            <p className="text-[#9e6a65] text-sm leading-relaxed max-w-[280px]">
              UI/UX designer sculpting human-centric interfaces where motion meets emotion.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <Magnetic
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2.5 bg-[#1a0a0a] text-white text-[10px] tracking-[0.4em] font-bold uppercase px-7 py-4 rounded-full hover:bg-[#FFB5B5] hover:text-[#1a0a0a] transition-all duration-300"
              >
                View Work
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Magnetic>

              <Magnetic
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 border border-[#FFB5B5]/50 text-[#c0756e] text-[10px] tracking-[0.4em] font-bold uppercase px-7 py-4 rounded-full hover:bg-[#FFB5B5]/12 transition-all duration-300"
              >
                Let's Talk
              </Magnetic>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-8 sm:gap-12 shrink-0">
            {[
              { n: "4+", l: "Years" },
              { n: "42+", l: "Projects" },
              { n: "99%", l: "Satisfaction" },
            ].map(s => (
              <div key={s.l} className="flex flex-col gap-0.5">
                <span
                  className="text-[36px] lg:text-[44px] font-black leading-none tracking-tighter text-[#1a0a0a]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {s.n}
                </span>
                <span className="text-[8px] tracking-[0.55em] text-[#c0756e]/60 uppercase font-bold">{s.l}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Parallax floating card: top-left */}
      {mounted && (
        <motion.div
          style={{ x: p1x, y: p1y }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute left-10 bottom-32 hidden xl:flex items-center gap-3 bg-white/75 border border-[#FFB5B5]/25 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-md pointer-events-none"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB5B5] animate-pulse" />
          <span className="text-[9px] tracking-[0.35em] text-[#c0756e] font-bold uppercase">India · Remote</span>
        </motion.div>
      )}
    </div>
  )
}
