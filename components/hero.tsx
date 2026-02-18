"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const designElements = [
  { shape: "circle", size: 20, x: 70, y: 20, delay: 0 },
  { shape: "square", size: 25, x: 80, y: 40, delay: 0.2 },
  { shape: "triangle", size: 18, x: 75, y: 60, delay: 0.4 },
  { shape: "line", size: 30, x: 85, y: 30, delay: 0.6 },
]

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-1 md:col-span-2 ml-8 mr-8 bg-[#FFE4E4] p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden mt-2 sm:mt-3 md:mt-5"
    >
      {/* Animated Design Elements */}
      {designElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: [0, 1, 0.7],
            scale: [0, 1.2, 1],
            rotate: [0, 360, 180],
            x: [0, -10, 10, 0],
            y: [0, -15, 5, 0],
          }}
          transition={{
            delay: element.delay,
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {element.shape === "circle" && <div className="w-full h-full bg-[#FFB5B5] rounded-full opacity-80" />}
          {element.shape === "square" && <div className="w-full h-full bg-[#FF9999] opacity-80" />}
          {element.shape === "triangle" && (
            <div
              className="w-0 h-0 opacity-80"
              style={{
                borderLeft: `${element.size / 2}px solid transparent`,
                borderRight: `${element.size / 2}px solid transparent`,
                borderBottom: `${element.size}px solid #FF7F7F`,
              }}
            />
          )}
          {element.shape === "line" && <div className="w-full h-1 bg-[#FF6B6B] opacity-80 transform rotate-45" />}
        </motion.div>
      ))}

      {/* Prototype Creation Animation */}
      <motion.div
        className="absolute top-8 right-8 w-24 h-24 "
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.path
            d="M50,10 L90,50 L50,90 L10,50 Z"
            fill="none"
            stroke="#FFB5B5"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="5"
            fill="#FF9999"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </svg>
      </motion.div>

      {/* Bottom right GIF - Hidden on mobile, visible on desktop */}
      <motion.div
        className="hidden lg:block absolute top-[190px] right-11 mr-8 w-34 h-64"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Image
          src="/bk3.gif"
          alt="Animated decoration"
          width={250}
          height={250}
          className="w-full h-full object-contain rounded-lg -rotate-12 mb-8"
          unoptimized={true}
        />
      </motion.div>

      <div className="max-w-2xl relative z-10">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Innovator Blending  
          
          Web Aesthetics with
          
          Machine Intelligence
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mt-2 sm:mt-3 md:mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Sakshi Agrahari <span className="mx-2">●</span> Interactive Projects bringing ideas to life
        </motion.p>
      </div>
    </motion.div>
  )
}
