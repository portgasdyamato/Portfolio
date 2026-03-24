"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, AnimatePresence, MotionValue, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const TAGS = ["UI/UX Design", "AI Product Design", "Website Development", "Frontend Engineering", "Interaction Designer"]

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

  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  // Business Card Morph Elements
  const contactOpacity = useTransform(sp, [0.3, 0.6], [0, 1])
  const contactY = useTransform(sp, [0.3, 0.6], [10, 0])

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY) }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my])

  useEffect(() => {
    const id = setInterval(() => setTagIdx(i => (i + 1) % TAGS.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="col-span-1 md:col-span-2 relative overflow-hidden" style={{ minHeight: "min(90vh, 800px)" }}>
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      {/* ─── MAIN CONTENT: internal 2-column layout ─── */}
      <div
        className="relative z-10 h-full pt-28 pb-14 px-10 md:pt-36 md:pb-16 md:px-14 lg:pt-44 lg:pb-20 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-0"
        style={{ minHeight: "inherit" }}
      >

        {/* ── LEFT COLUMN: headline, bio, buttons, footer ── */}
        <div className="flex flex-col min-w-0 pr-4">

          {/* Rotating tagline */}
          <div className="h-6 overflow-hidden mt-2">
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

          {/* Headline */}
          <div className="flex flex-col justify-center py-[4vh] gap-8">
            <div className="flex flex-col gap-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[54px] sm:text-[70px] lg:text-[100px] font-black tracking-tight leading-[0.9] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Crafting
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[54px] sm:text-[70px] lg:text-[100px] font-black tracking-tight leading-[0.9] text-brand-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Smart Digital
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[54px] sm:text-[70px] lg:text-[100px] font-light italic tracking-tight leading-[0.9] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Experiences.
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
              className="flex flex-col gap-8 max-w-xl"
            >
              <p className="text-[#1a0a0a]/80 font-medium text-base leading-relaxed tracking-wide">
                I code high-performance websites and design intelligent products. I am an AI Product Designer, UI/UX Specialist, and Website Developer.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 flex-wrap mt-2">
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
              </div>

              {/* Morph-reveal contact info */}
              <motion.div
                style={{ opacity: contactOpacity, y: contactY }}
                className="grid grid-cols-2 gap-x-12 gap-y-4 pt-10 border-t border-[#1a0a0a]/[0.05]"
              >
                <div className="flex flex-col">
                  <span className="text-[8px] tracking-[0.3em] text-[#b33951] uppercase font-bold mb-1">Contact</span>
                  <span className="text-[11px] font-bold text-[#1a0a0a]">sakshiagrahari2004@gmail.com</span>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[8px] tracking-[0.3em] text-[#b33951] uppercase font-bold mb-1">Location</span>
                  <span className="text-[11px] font-bold text-[#1a0a0a]">Planet Earth</span>
                </div>
                <div className="flex flex-col col-span-2 mt-2">
                  <span className="text-[8px] tracking-[0.3em] text-[#b33951] uppercase font-bold mb-1">Status</span>
                  <div className="flex items-center gap-4 text-[11px] font-bold text-[#1a0a0a]">
                    <span>Available for Freelance</span>
                    <span className="w-1 h-1 rounded-full bg-[#1a0a0a]/20" />
                    <span>sakshiagrahari.com</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer metrics */}
          <div className="flex flex-wrap items-end gap-12 sm:gap-20 mt-auto pt-10 w-full">
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Experience</span>
              <span className="text-[20px] sm:text-[24px] font-medium italic text-[#1a0a0a] leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>~2 Yrs.</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Rating</span>
              <span className="text-[20px] sm:text-[24px] font-medium italic text-[#1a0a0a] leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>98% Success.</span>
            </div>
            <div className="flex flex-col gap-1.5 hidden sm:flex ml-auto border-l border-[#1a0a0a]/10 pl-8 text-right">
              <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Inquiry</span>
              <span className="text-[20px] sm:text-[24px] font-medium italic text-[#1a0a0a] leading-none flex items-center justify-end gap-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b33951] animate-pulse" /> Freelance.
              </span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Creative Designer Card Panel ── */}
        <div className="hidden lg:flex flex-col items-center justify-between h-full py-6 pl-6 border-l border-[#1a0a0a]/[0.06] relative">

          {/* Top: discipline label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col items-center gap-1 text-center"
          >
            <span className="text-[7px] tracking-[0.5em] text-[#b33951]/50 uppercase font-bold">Since</span>
            <span className="text-[22px] font-black text-[#1a0a0a]/8 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>2022</span>
          </motion.div>

          {/* Center: stacked large ghost discipline words */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col items-center gap-3 flex-1 justify-center"
          >
            {[
              { label: "Design", size: "text-[13px]", color: "text-[#1a0a0a]/20" },
              { label: "—", size: "text-[10px]", color: "text-[#b33951]/30" },
              { label: "Code", size: "text-[13px]", color: "text-[#1a0a0a]/20" },
              { label: "—", size: "text-[10px]", color: "text-[#b33951]/30" },
              { label: "Create", size: "text-[13px]", color: "text-[#1a0a0a]/20" },
              { label: "—", size: "text-[10px]", color: "text-[#b33951]/30" },
              { label: "Ship", size: "text-[13px]", color: "text-[#1a0a0a]/20" },
            ].map(({ label, size, color }, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                className={`${size} ${color} tracking-[0.22em] uppercase font-black`}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

          {/* Color swatches — brand palette indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[7px] tracking-[0.45em] text-[#1a0a0a]/25 uppercase font-bold mb-1">Palette</span>
            <div className="flex flex-col gap-1.5">
              {["#FDE2E2", "#b33951", "#1a0a0a", "#c0756e"].map((hex, i) => (
                <div
                  key={hex}
                  className="w-6 h-6 rounded-sm shadow-sm border border-[#1a0a0a]/10"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
            {/* Pulsing availability dot */}
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-[#b33951] animate-pulse" />
              <span className="text-[7px] tracking-[0.35em] text-[#b33951]/60 uppercase font-bold">Open</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
