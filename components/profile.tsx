"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const pfp = "/pfp2.png" // If your image is pfp.png

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className=" rounded-3xl overflow-hidden mt-5"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={pfp}
          alt="Julia Huang"
          width={600}
          height={800}
          className="w-full h-full object-cover"
          unoptimized
        />
      </motion.div>
    </motion.div>
  )
}
