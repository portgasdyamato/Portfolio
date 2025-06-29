"use client"

import { motion } from "framer-motion"

export default function GrowWithMeHeading() {
  return (
    <div className="relative h-[1000px] mt-16 w-full flex items-end overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-end h-[2400px] w-full"
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
          className="text-8xl font-extrabold text-black tracking-widest uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" , fontFamily:"Yang" }}
        >
        grow with me   grow with me
        </h2>
        <h2
          className="text-8xl mt-8 font-extrabold text-black tracking-widest uppercase whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" , fontFamily:"Yang"}}
        >
        grow with me   grow with me
        </h2>
      </motion.div>
    </div>
  )
}
