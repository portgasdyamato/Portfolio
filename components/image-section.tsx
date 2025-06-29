"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ImageSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="rounded-3xl overflow-hidden relative"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="relative"
      >
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Portfolio showcase"
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />

        {/* Optional caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <p className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
            Creative workspace inspiration
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
