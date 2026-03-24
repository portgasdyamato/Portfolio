"use client"

import { motion, useTransform, MotionValue, useMotionValue } from "framer-motion"
import Image from "next/image"

const pfp = "/pfp2.png" // If your image is pfp.png

export default function Profile({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  // Gracefully handle absent scrollProgress
  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  // Morph values
  const yImage = useTransform(sp, [0, 0.6], [0, 20])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      style={{ y: yImage, transformOrigin: "top right" }}
      className="flex flex-col items-center justify-center mt-5"
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
