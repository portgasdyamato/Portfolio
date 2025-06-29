"use client"

import { motion } from "framer-motion"
import { Sparkles, Star, Zap } from "lucide-react"

export default function BigHeadingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gradient-to-br from-[#FFE4E4] via-[#FFD1D1] to-[#FFB5B5] p-16 rounded-3xl relative overflow-hidden text-center"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${15 + Math.floor(i / 4) * 30}%`,
              fontSize: "2rem",
            }}
          >
            {["✨", "🎨", "💫", "🚀", "⭐", "🎯", "💡", "🌟", "🔥", "💎", "🎪", "🌈"][i]}
          </motion.div>
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-8 left-8 w-6 h-6 bg-[#FF6B6B] rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute top-12 right-12 w-4 h-4 bg-[#FF9999] opacity-30"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: [0, 360],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-8 left-16 w-5 h-5 bg-[#FFB5B5] opacity-25"
          animate={{
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2,
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Decorative icons */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center items-center space-x-4 mb-6"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Sparkles className="w-8 h-8 text-[#FF6B6B]" />
          </motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <Star className="w-10 h-10 text-[#FF9999] fill-current" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Zap className="w-8 h-8 text-[#FF7F7F]" />
          </motion.div>
        </motion.div>

        {/* Big Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
        >
          <motion.span
            className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FF9999]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Ready to Create
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-gray-700"
          >
            Something
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="italic text-[#FF6B6B]"
          >
            Amazing?
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
        >
          Let's collaborate and bring your vision to life with innovative design and cutting-edge technology
        </motion.p>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="w-32 h-1 bg-gradient-to-r from-[#FF6B6B] to-[#FF9999] mx-auto rounded-full"
        />

        {/* Call to action text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-8"
        >
          <p className="text-lg text-gray-700 font-medium">✨ Your next project starts here ✨</p>
        </motion.div>
      </div>

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        animate={{
          borderColor: ["#FF6B6B00", "#FF6B6B30", "#FF6B6B00"],
          boxShadow: ["0 0 0px #FF6B6B00", "0 0 30px #FF6B6B20", "0 0 0px #FF6B6B00"],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </motion.div>
  )
}
