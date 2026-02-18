"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pfp = "/pfp2.png"

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 rounded-[2.5rem] overflow-hidden glass-card group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      
      <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-white text-xl font-bold font-outfit">Sakshi Bhalavi</h3>
        <p className="text-white/70 text-sm font-inter">UX Researcher & UI Designer</p>
      </div>

      <motion.div
        className="h-full w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={pfp}
          alt="Sakshi"
          fill
          className="object-cover transition-transform duration-700"
          unoptimized
        />
      </motion.div>
    </motion.div>
  )
}
