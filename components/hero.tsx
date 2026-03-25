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
    <div className="col-span-1 relative overflow-hidden" style={{ minHeight: "min(90vh, 800px)" }}>
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      {/* ─── MAIN CONTENT: single col, type fills space ─── */}
      <div
        className="relative z-10 h-full flex flex-col justify-between pt-20 pb-10 px-10 md:pt-24 md:pb-12 md:px-14 lg:pt-32 lg:pb-16 lg:px-16"
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
          <div className="flex flex-col justify-center py-4 gap-6">
          <div className="flex flex-col gap-1 md:gap-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[70px] sm:text-[90px] lg:text-[105px] font-black tracking-tight leading-[0.88] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Crafting
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[70px] sm:text-[90px] lg:text-[105px] font-black tracking-tight leading-[0.88] text-brand-600" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Smart Digital
                </span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                <span className="block text-[70px] sm:text-[90px] lg:text-[105px] font-light italic tracking-tight leading-[0.88] text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
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
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-8 sm:gap-14 pt-8 border-t border-[#1a0a0a]/[0.08]"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Contact</span>
                  <a href="mailto:sakshiagrahari2004@gmail.com" className="text-[13.5px] font-bold text-[#1a0a0a] hover:text-[#b33951] transition-colors">
                    sakshiagrahari2004@gmail.com
                  </a>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] tracking-[0.3em] text-[#b33951] uppercase font-bold">Location</span>
                  <span className="text-[13.5px] font-bold text-[#1a0a0a]">Planet Earth</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
