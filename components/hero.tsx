"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const TAGS = ["UI/UX Design", "Motion Design", "Interaction Design", "Creative Direction"]

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

  // Mouse glow
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const gx = useSpring(mx, { stiffness: 50, damping: 25 })
  const gy = useSpring(my, { stiffness: 50, damping: 25 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my])

  useEffect(() => {
    const id = setInterval(() => setTagIdx(i => (i + 1) % TAGS.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="col-span-1 md:col-span-2 relative overflow-hidden"
      style={{ minHeight: "min(88vh, 760px)", borderRadius: "2.5rem", background: "transparent" }}
    >
      {/* ─── INHERIT PAGE BACKGROUND ─── */}
      <div
        className="absolute inset-0"
        style={{ background: "transparent" }}
      />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,181,181,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.25,
        }}
      />

      {/* Mouse-reactive soft glow orb */}
      {mounted && (
        <motion.div
          className="absolute pointer-events-none rounded-full"
          style={{
            x: gx,
            y: gy,
            translateX: "-50%",
            translateY: "-50%",
            left: 0,
            top: 0,
            width: 800,
            height: 800,
            background: "radial-gradient(circle, rgba(255,181,181,0.18) 0%, transparent 60%)",
          }}
        />
      )}

      {/* ─── STATIC ROTATING BADGE (Top Right) ─── */}
      {mounted && (
        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 w-28 h-28 pointer-events-none z-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
              <defs>
                <path id="badgePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="fill-[#c0756e]" style={{ fontSize: "10.5px", fontWeight: "bold", letterSpacing: "0.22em" }}>
                <textPath href="#badgePath">OPEN TO HIRE · OPEN TO HIRE ·</textPath>
              </text>
            </svg>
          </motion.div>
          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFB5B5] shadow-[0_0_12px_rgba(255,181,181,0.8)]" />
          </div>
        </div>
      )}

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12 lg:p-14" style={{ minHeight: "inherit" }}>
        
        {/* Top Tagline */}
        <div className="h-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={tagIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="block text-[11px] tracking-[0.4em] font-bold text-[#FFB5B5] uppercase"
            >
              ✦ {TAGS[tagIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* ── SPACIOUS HEADLINE ── */}
        <div className="flex-1 flex flex-col justify-center my-10 lg:my-14 gap-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block text-[64px] sm:text-[80px] lg:text-[110px] font-black tracking-tight leading-[0.9] text-[#1a0a0a]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Crafting
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <span
              className="block text-[64px] sm:text-[80px] lg:text-[110px] font-black tracking-tight leading-[0.9] text-[#c0756e]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Visionary
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="block text-[64px] sm:text-[80px] lg:text-[110px] font-light italic tracking-tight leading-[0.9] text-[#1a0a0a]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Experiences.
            </span>
          </motion.div>
        </div>

        {/* ── INTENTIONALLY SPACED BOTTOM ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end pt-10 border-t border-[#FFB5B5]/30 relative"
        >
          {/* Description */}
          <div className="md:col-span-5 lg:col-span-4">
            <p className="text-[#9e6a65] text-sm md:text-base leading-relaxed tracking-wide">
              UI/UX designer sculpting human-centric interfaces where motion meets emotion and pixel-perfect precision.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="md:col-span-4 flex items-center gap-4 flex-wrap">
            <Magnetic
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2.5 bg-white text-[#1a0a0a] shadow-[0_4px_20px_rgba(255,181,181,0.5)] text-[11px] tracking-[0.3em] font-black uppercase px-9 py-4.5 rounded-full hover:bg-black hover:text-white transition-all duration-400"
            >
              View Work
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Magnetic>

            <Magnetic
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border-2 border-[#1a0a0a]/15 text-[#1a0a0a] text-[11px] tracking-[0.3em] font-black uppercase px-8 py-4 rounded-full hover:border-[#1a0a0a]/40 hover:bg-black/5 transition-all duration-300"
            >
              Let's Talk
            </Magnetic>
          </div>

          {/* Clean Stats Group */}
          <div className="md:col-span-3 lg:col-span-4 flex gap-10 justify-start md:justify-end">
             <div className="flex flex-col gap-1">
                <span className="text-[32px] sm:text-[40px] font-black leading-none tracking-tighter text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>~2</span>
                <span className="text-[9px] tracking-[0.3em] text-[#c0756e]/80 uppercase font-bold">Years</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[32px] sm:text-[40px] font-black leading-none tracking-tighter text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>99%</span>
                <span className="text-[9px] tracking-[0.3em] text-[#c0756e]/80 uppercase font-bold">Satisfaction</span>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
