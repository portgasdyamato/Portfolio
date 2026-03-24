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

      {/* ─── FLOATING GEOMETRY (center zone, visible) ─── */}

      {/* Large slowly-rotating diamond outline */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: "22%", top: "30%", width: 100, height: 100 }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="70" height="70" rx="4"
            fill="none" stroke="#b33951" strokeWidth="1.5" strokeOpacity="0.38"
            transform="rotate(45 50 50)"
          />
        </svg>
      </motion.div>

      {/* Medium ring — slowly floating up/down */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: "30%", top: "52%", width: 64, height: 64 }}
      >
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" fill="none" stroke="#1a0a0a" strokeWidth="1" strokeOpacity="0.18" />
          <circle cx="32" cy="32" r="20" fill="#b33951" fillOpacity="0.08" />
          <circle cx="32" cy="32" r="3" fill="#b33951" fillOpacity="0.45" />
        </svg>
      </motion.div>

      {/* Small 4-point sparkle star */}
      <motion.div
        animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.12, 1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: "19%", top: "62%", width: 32, height: 32 }}
      >
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z" fill="#b33951" fillOpacity="0.4" />
        </svg>
      </motion.div>

      {/* Tiny dashed orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none hidden lg:block"
        style={{ right: "26%", top: "18%", width: 52, height: 52 }}
      >
        <svg viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
          <circle cx="26" cy="26" r="22" fill="none" stroke="#b33951" strokeWidth="0.9" strokeOpacity="0.3" strokeDasharray="3 5" />
          <circle cx="26" cy="4" r="3" fill="#b33951" fillOpacity="0.55" />
        </svg>
      </motion.div>


      <div
        className="relative z-10 h-full flex flex-col justify-start pt-28 pb-14 px-10 md:pt-36 md:pb-16 md:px-14 lg:pt-44 lg:pb-20 lg:px-16"
        style={{ minHeight: "inherit" }}
      >

        {/* ── ALL CONTENT ── */}
        <div className="flex flex-col min-w-0">

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
                <span className="block text-[72px] sm:text-[90px] lg:text-[120px] font-black tracking-tight leading-[0.88] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Crafting
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[72px] sm:text-[90px] lg:text-[120px] font-black tracking-tight leading-[0.88] text-brand-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Smart Digital
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[72px] sm:text-[90px] lg:text-[120px] font-light italic tracking-tight leading-[0.88] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
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
      </div>
    </div>
  )
}
