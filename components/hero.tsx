"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence, MotionValue, useTransform } from "framer-motion"
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

export default function Hero({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  const [mounted, setMounted] = useState(false)
  const [tagIdx, setTagIdx] = useState(0)

  // Optional: animate internal typography based on card's collapse progression
  // fallback to a constant 0 if not passed so it renders identically on server
  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  const scaleText = useTransform(sp, [0, 0.4], [1, 0.9])
  const opacityButtons = useTransform(sp, [0.1, 0.3], [1, 0])
  const yButtons = useTransform(sp, [0.1, 0.3], [0, 20])

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
    <div className="col-span-1 md:col-span-2 relative overflow-hidden" style={{ minHeight: "min(88vh, 760px)" }}>
      {/* ─── INHERIT PAGE BACKGROUND ─── */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />



      {/* ─── STATIC ROTATING BADGE (Top Right) ─── */}
      {mounted && (
        <div className="absolute top-10 right-10 lg:top-14 lg:right-14 w-28 h-28 pointer-events-none z-20">
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
            <div className="w-2.5 h-2.5 rounded-full bg-brand-600 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
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
              className="block text-[11px] tracking-[0.4em] font-bold text-brand-600 uppercase"
            >
              ✦ {TAGS[tagIdx]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* ── SPACIOUS HEADLINE & DESCRIPTION ── */}
        <motion.div style={{ scale: scaleText, originX: 0, originY: 0.5 }} className="flex-1 flex flex-col justify-center my-10 lg:my-12 gap-8">
          <div className="flex flex-col gap-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              <span className="block text-[64px] sm:text-[80px] lg:text-[110px] font-black tracking-tight leading-[0.9] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Crafting
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <span className="block text-[64px] sm:text-[80px] lg:text-[110px] font-black tracking-tight leading-[0.9] text-brand-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Visionary
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
              <span className="block text-[64px] sm:text-[80px] lg:text-[110px] font-light italic tracking-tight leading-[0.9] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Experiences.
              </span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col gap-8 max-w-xl"
          >
            <p className="text-[#1a0a0a]/80 font-medium text-base leading-relaxed tracking-wide">
              UI/UX designer sculpting human-centric interfaces where motion meets emotion and pixel-perfect precision.
            </p>

            {/* ── PREMIUM BUTTONS (Hide on compact) ── */}
            <motion.div style={{ opacity: opacityButtons, y: yButtons }} className="flex items-center gap-4 flex-wrap">
              <Magnetic
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center gap-2 bg-[#1a0a0a] text-white text-[10.5px] tracking-[0.25em] font-black uppercase px-9 py-4 rounded-full shadow-[0_8px_30px_rgba(26,10,10,0.2)] hover:scale-[1.03] transition-transform duration-300 min-w-[180px]"
              >
                View Work
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Magnetic>

              <Magnetic
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-center gap-2 bg-transparent text-[#b33951] text-[10.5px] tracking-[0.25em] font-black uppercase px-9 py-4 rounded-full border border-[#b33951]/40 hover:bg-[#b33951] hover:text-white hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(179,57,81,0.3)] transition-all duration-300 min-w-[180px]"
              >
                Let's Talk
              </Magnetic>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── CLEAN STATS BOTTOM ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-between items-end pt-8 border-t border-[#1a0a0a]/10"
        >
          <div className="flex gap-12 sm:gap-16">
             <div className="flex flex-col gap-1">
                <span className="text-[32px] sm:text-[40px] font-black leading-none tracking-tighter text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>~2</span>
                <span className="text-[9px] tracking-[0.3em] text-[#1a0a0a]/70 uppercase font-bold">Years Experience</span>
             </div>
             <div className="flex flex-col gap-1">
                <span className="text-[32px] sm:text-[40px] font-black leading-none tracking-tighter text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>99%</span>
                <span className="text-[9px] tracking-[0.3em] text-[#1a0a0a]/70 uppercase font-bold">Client Satisfaction</span>
             </div>
          </div>
          
          <div className="hidden sm:flex flex-col items-end gap-1 text-right">
             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mb-1" />
             <span className="text-[9px] tracking-[0.3em] text-[#1a0a0a]/70 uppercase font-bold">India</span>
             <span className="text-[9px] tracking-[0.3em] text-[#1a0a0a]/70 uppercase font-bold">Remote</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
