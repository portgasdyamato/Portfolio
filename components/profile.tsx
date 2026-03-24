"use client"

import { useState, useEffect } from "react"
import { motion, useTransform, MotionValue, useMotionValue } from "framer-motion"
import Image from "next/image"

const pfp = "/pfp2.png" // If your image is pfp.png

export default function Profile({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  // Gracefully handle absent scrollProgress
  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Morph values
  const yImage = useTransform(sp, [0, 0.6], [0, 20])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      style={{ y: yImage, transformOrigin: "top right" }}
      className="flex flex-col items-center justify-center mt-5 relative w-full"
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

      {/* ─── STATIC ROTATING BADGE (Right of Profile Image) ─── */}
      {mounted && (
        <div className="absolute top-[15%] right-[-10%] md:right-[-20%] lg:right-[-25%] w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-20">
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

      {/* ── LUXURY SIGNATURE LOCKUP (Always Visible Print Branding) ── */}
      <motion.div 
        style={{ marginTop: "36px" }}
        className="flex flex-col items-center w-full max-w-[280px] relative px-4"
      >
        <span className="text-[#1a0a0a] font-light italic text-[28px] sm:text-[32px] tracking-tight leading-none" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
          Sakshi Agrahari.
        </span>
        <span className="text-[#b33951] font-bold text-[9px] sm:text-[9.5px] tracking-[0.35em] uppercase mt-3 opacity-90">
          UI/UX & Creative Designer
        </span>
      </motion.div>

    </motion.div>
  )
}
