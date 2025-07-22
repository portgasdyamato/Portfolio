"use client"

import { motion } from "framer-motion"

export default function GrowWithMeHeading() {
  return (
    <div className="relative h-[600px] sm:h-[800px] md:h-[900px] lg:h-[1000px] mt-8 sm:mt-16 md:mt-24 lg:mt-32 w-full flex items-end overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-end h-[1200px] sm:h-[1600px] md:h-[2000px] lg:h-[2400px] w-full"
        style={{ willChange: "transform" }}
        initial={{ y: 0 }}
        animate={{ y: ["-50%", "50%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-widest uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" , fontFamily:"Gamer" }}
        >
        grow with me   grow with me
        </h2>
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl mt-4 sm:mt-6 md:mt-8 font-extrabold \ tracking-widest uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" , fontFamily:"Gamer" }}
        >
        grow with me   grow with me
        </h2>
      </motion.div>
    </div>
  )
}
