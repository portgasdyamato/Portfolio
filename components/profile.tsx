"use client"

import { motion, useTransform, MotionValue, useMotionValue } from "framer-motion"
import Image from "next/image"

const pfp = "/pfp2.png" // If your image is pfp.png

export default function Profile({ scrollProgress }: { scrollProgress?: MotionValue<number> }) {
  // Gracefully handle absent scrollProgress
  const mockScroll = useMotionValue(0)
  const sp = scrollProgress || mockScroll

  // Morph values
  const opacitySubtitle = useTransform(sp, [0.4, 0.6], [0, 1])
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

      {/* ── Sub-info Line (Fades in during morph) ── */}
      <motion.div 
        style={{ opacity: opacitySubtitle, marginTop: "24px" }}
        className="flex items-center gap-2 text-[#b33951] font-bold text-[11px] tracking-[0.2em] uppercase whitespace-nowrap"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#b33951]" />
        Sakshi Agrahari | Creative Designer
      </motion.div>

    </motion.div>
  )
}
