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
  // We keep sp locally to drive anything else we need, but buttons shouldn't fade anymore.
  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  // Mouse glow
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const gx = useSpring(mx, { stiffness: 50, damping: 25 })
  const gy = useSpring(my, { stiffness: 50, damping: 25 })

  // Business Card Morph Elements
  const contactOpacity = useTransform(sp, [0.3, 0.6], [0, 1])
  const contactY = useTransform(sp, [0.3, 0.6], [10, 0])

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
    <div className="col-span-1 md:col-span-2 relative overflow-hidden" style={{ minHeight: "min(90vh, 800px)" }}>
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

      {/* ─── MAIN CONTENT ─── */}
      <div className="relative z-10 flex flex-col justify-start h-full pt-16 pb-12 px-12 md:pt-24 md:pb-16 md:px-16 lg:pt-32 lg:pb-20 lg:px-20" style={{ minHeight: "inherit" }}>
        
        {/* Top Tagline */}
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

        {/* ── SPACIOUS HEADLINE & DESCRIPTION ── */}
        <div className="flex flex-col justify-center py-[4vh] gap-8">
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

            {/* ── PREMIUM BUTTONS ── */}
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

            {/* ── CARD-ONLY META DETAILS (Fades in during morph) ── */}
            <motion.div 
              style={{ opacity: contactOpacity, y: contactY }}
              className="grid grid-cols-2 gap-x-12 gap-y-4 pt-10 border-t border-[#1a0a0a]/[0.05]"
            >
              <div className="flex flex-col">
                <span className="text-[8px] tracking-[0.3em] text-[#b33951] uppercase font-bold mb-1">Contact</span>
                <span className="text-[11px] font-bold text-[#1a0a0a]">hello@sakshi.design</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[8px] tracking-[0.3em] text-[#b33951] uppercase font-bold mb-1">Location</span>
                <span className="text-[11px] font-bold text-[#1a0a0a]">Gurugram, India</span>
              </div>
              <div className="flex flex-col col-span-2 mt-2">
                <span className="text-[8px] tracking-[0.3em] text-[#b33951] uppercase font-bold mb-1">Digital Presence</span>
                <div className="flex items-center gap-4 text-[11px] font-bold text-[#1a0a0a]">
                  <span>sakshiagrahari.com</span>
                  <span className="w-1 h-1 rounded-full bg-[#1a0a0a]/20" />
                  <span>@sakshi_agrahari</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── CARD FOOTER SPECS (Elegant Aesthetic) ── */}
        <div className="flex flex-wrap items-end gap-12 sm:gap-20 mt-auto pt-10 w-full mb-0">
          <div className="flex flex-col gap-1.5">
             <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Experience</span>
             <span className="text-[20px] sm:text-[24px] font-medium italic text-[#1a0a0a] leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>~2 Yrs.</span>
          </div>
          <div className="flex flex-col gap-1.5">
             <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Clients</span>
             <span className="text-[20px] sm:text-[24px] font-medium italic text-[#1a0a0a] leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>40+ Global.</span>
          </div>
          <div className="flex flex-col gap-1.5 hidden sm:flex ml-auto border-l border-[#1a0a0a]/10 pl-8">
             <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Inquiry</span>
             <span className="text-[20px] sm:text-[24px] font-medium italic text-[#1a0a0a] leading-none flex items-center gap-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
               <span className="w-1.5 h-1.5 rounded-full bg-[#b33951] animate-pulse" /> Available.
             </span>
          </div>
        </div>

      </div>
    </div>
  )
}
