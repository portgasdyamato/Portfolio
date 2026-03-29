"use client"

import { useState, useEffect } from "react"
import { motion, useTransform, MotionValue, useMotionValue } from "framer-motion"
import Image from "next/image"

const pfp = "/pfp2.gif" // Dynamic PFP variant

export default function Profile({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  // Gracefully handle absent scrollProgress
  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Morph values
  const yImage = useTransform(sp, [0, 0.6], [0, -110])
  const nameOpacity = useTransform(sp, [0.1, 0.4], [0, 1])
  const nameY = useTransform(sp, [0.1, 0.4], [15, 0])

  return (
    <div className="relative h-full w-full">

      {/* ─── FLOATING GEOMETRY OVERLAY (decorative, static, brand-aesthetic) ─── */}
      {mounted && (
        <>
          {/* Sparkle marks ✦ scattered */}
          {[
            { top: "14%", left: "8%", size: "text-[18px]", delay: 0 },
            { top: "22%", left: "78%", size: "text-[12px]", delay: 0.5 },
            { top: "72%", left: "6%", size: "text-[10px]", delay: 1 },
            { top: "80%", left: "72%", size: "text-[14px]", delay: 0.3 },
          ].map(({ top, left, size, delay }, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + delay, duration: 0.5 }}
              className={`absolute pointer-events-none z-0 ${size} text-[#F59E9E]/40 select-none`}
              style={{ top, left }}
            >
              ✦
            </motion.span>
          ))}
        </>
      )}

      {/* ─── SCROLL-LIFTED CONTENT (Avatar & Identity) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ y: yImage, transformOrigin: "top right" }}
        className="flex flex-col items-center justify-between h-full pt-10 md:pt-24 lg:pt-32 pb-8 md:pb-12 relative w-full"
      >
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl overflow-hidden w-full max-w-[500px]"
        >
          <Image
            src={pfp}
            alt="Sakshi Agrahari"
            width={600}
            height={800}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </motion.div>

        <motion.div 
          style={{ opacity: nameOpacity, y: nameY }}
          className="flex flex-col items-center mt-6 text-center"
        >
          <span className="text-[32px] sm:text-[40px] font-medium italic text-[#1a0a0a] leading-tight mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            Sakshi Agrahari.
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.35em] text-[#F59E9E] uppercase font-bold">UI/UX & AI Product Designer</span>
            <span className="text-[9px] tracking-[0.2em] text-[#1a0a0a]/60 uppercase font-medium">Website Developer • Freelance Specialist</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── STATIC ROTATING BADGE (Safe High-Altitude) ─── */}
      {mounted && (
        <div className="absolute -top-2 right-2 md:-top-1 md:right-4 lg:top-0 lg:right-6 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
              <defs>
                <path id="badgePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="fill-[#c0756e]" style={{ fontSize: "8.5px", fontWeight: "bold", letterSpacing: "0.19em" }}>
                <textPath href="#badgePath">OPEN TO COLLABORATE ✦ AND WORK! ✦ </textPath>
              </text>
            </svg>
          </motion.div>
          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-600 shadow-[0_0_12px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      )}
    </div>
  )
}
