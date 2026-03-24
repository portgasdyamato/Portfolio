"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const ROLES = ["Interaction Designer", "Motion Curator", "UI/UX Strategist", "Creative Director"]

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [roleIdx, setRoleIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse parallax – safe defaults for SSR
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  // All transforms declared unconditionally at top level
  const blobX = useTransform(sx, (v) => v * 0.04)
  const blobY = useTransform(sy, (v) => v * 0.04)
  const card1X = useTransform(sx, (v) => v * -0.015)
  const card1Y = useTransform(sy, (v) => v * -0.015)
  const card2X = useTransform(sx, (v) => v * 0.025)
  const card2Y = useTransform(sy, (v) => v * 0.025)

  useEffect(() => {
    setMounted(true)
    const el = containerRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mx.set(e.clientX - rect.left - rect.width / 2)
      my.set(e.clientY - rect.top - rect.height / 2)
    }
    el.addEventListener("mousemove", onMove)
    return () => el.removeEventListener("mousemove", onMove)
  }, [mx, my])

  useEffect(() => {
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [])

  if (!mounted) return <div className="col-span-1 md:col-span-2 min-h-[580px]" />

  return (
    <div
      ref={containerRef}
      className="col-span-1 md:col-span-2 min-h-[580px] lg:min-h-[680px] relative overflow-hidden rounded-[2.5rem] bg-[#FDF8F5] border border-[#FFB5B5]/20 shadow-sm"
    >
      {/* Organic pink blobs */}
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-[90px]"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: blobX, y: blobY, background: "radial-gradient(circle, rgba(255,181,181,0.28) 0%, transparent 70%)" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-16 right-0 w-[360px] h-[360px] rounded-full blur-[80px]"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ background: "radial-gradient(circle, rgba(255,181,181,0.18) 0%, transparent 70%)" }}
      />

      {/* Fine dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,181,181,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      {/* ── LAYOUT ── */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">

        {/* Top row: status pill + role tag */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#FFB5B5]/30 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFB5B5] animate-pulse" />
            <span className="text-[10px] tracking-[0.35em] font-bold text-[#c0756e] uppercase">Open to work</span>
          </div>

          <div className="h-8 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[11px] tracking-[0.5em] text-[#FFB5B5] font-bold uppercase"
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* ── HERO HEADLINE ── */}
        <div className="my-8 lg:my-0">
          {/* Giant editorial number — art direction element */}
          <div
            className="absolute right-10 top-16 text-[260px] font-black leading-none select-none pointer-events-none hidden xl:block"
            style={{ color: "rgba(255,181,181,0.07)", fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            S.
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {/* Line 1 */}
            <span
              className="block text-[56px] sm:text-[76px] lg:text-[96px] font-black leading-[0.88] tracking-tight text-[#1a0a0a]"
            >
              Crafting
            </span>
            {/* Line 2 — outlined / ghost text */}
            <span
              className="block text-[56px] sm:text-[76px] lg:text-[96px] font-black leading-[0.88] tracking-tight"
              style={{ WebkitTextStroke: "2px #1a0a0a", color: "transparent" }}
            >
              visionary
            </span>
            {/* Line 3 — pink italic accent */}
            <span
              className="block text-[56px] sm:text-[76px] lg:text-[96px] font-light italic leading-[0.88] tracking-tight text-[#FFB5B5]"
            >
              experiences.
            </span>
          </motion.h1>
        </div>

        {/* Bottom row: copy + CTA + stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col lg:flex-row gap-8 items-start lg:items-end justify-between border-t border-[#FFB5B5]/20 pt-8"
        >
          <div className="max-w-xs">
            <p className="text-[#9e6a65] text-sm leading-relaxed">
              UI/UX designer who sculpts interfaces at the intersection of motion, emotion, and pixel-level precision.
            </p>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 bg-[#1a0a0a] text-white text-[11px] tracking-[0.3em] font-bold uppercase px-7 py-4 rounded-full hover:bg-[#FFB5B5] hover:text-[#1a0a0a] transition-all duration-400 group"
              >
                View Work
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 border border-[#FFB5B5]/40 text-[#c0756e] text-[11px] tracking-[0.3em] font-bold uppercase px-7 py-4 rounded-full hover:bg-[#FFB5B5]/10 transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-10 lg:gap-16">
            {[
              { n: "4+", label: "Years Exp." },
              { n: "42+", label: "Projects" },
              { n: "99%", label: "Satisfaction" },
            ].map(s => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span
                  className="text-[40px] font-black leading-none text-[#1a0a0a] tabular-nums"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {s.n}
                </span>
                <span className="text-[8px] tracking-[0.5em] text-[#c0756e]/60 uppercase font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating glass pills — interactive parallax */}
      <motion.div
        style={{ x: card1X, y: card1Y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute top-8 right-[30%] bg-white/70 backdrop-blur-md border border-[#FFB5B5]/30 shadow-lg rounded-2xl px-5 py-3 hidden lg:flex items-center gap-3 pointer-events-none"
      >
        <div className="w-3 h-3 rounded-full bg-[#FFB5B5]" />
        <span className="text-[10px] tracking-[0.3em] text-[#c0756e] font-bold uppercase">UI/UX</span>
      </motion.div>

      <motion.div
        style={{ x: card2X, y: card2Y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-24 right-12 bg-white/70 backdrop-blur-md border border-[#FFB5B5]/30 shadow-lg rounded-2xl px-5 py-3 hidden lg:flex items-center gap-3 pointer-events-none"
      >
        <div className="w-3 h-3 rounded-full bg-[#1a0a0a]" />
        <span className="text-[10px] tracking-[0.3em] text-[#1a0a0a] font-bold uppercase">Motion</span>
      </motion.div>
    </div>
  )
}
