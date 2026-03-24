"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Hero from "@/components/hero"
import Profile from "@/components/profile"

export default function MorphingHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // We use the container height (e.g., 200vh) to strictly control the scroll progress.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // 1) 0.0 -> 0.4: Morph phase (shrink into business card)
  // 2) 0.4 -> 0.7: Card stays sticky and fully visible
  // 3) 0.7 -> 1.0: Card elegantly tilts and slides up off-screen
  
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 0.8, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.7, 1], ["0vh", "0vh", "-50vh"])
  const rotateX = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, 0, 15])
  const rotateZ = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 0, 0, -5])
  
  // Adjust boundary rounding during morph
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["0rem", "3rem"])
  
  // Create a profound, physical drop-shadow dynamically during shrink
  const boxShadow = useTransform(
    scrollYProgress, 
    [0.1, 0.4], 
    ["0 0px 0px rgba(0,0,0,0)", "0 60px 120px -20px rgba(179,57,81,0.25)"]
  )

  return (
    <div ref={containerRef} className="relative w-full h-[200vh]">
      {/* ── STICKY VIEWPORT ── */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center p-0 md:p-8">
        
        {/* ── THE MORPHING CARD ── */}
        <motion.div
          style={{
            scale,
            opacity,
            y,
            rotateX,
            rotateZ,
            borderRadius,
            boxShadow,
            transformPerspective: 1200,
            transformOrigin: "center center",
          }}
          className="w-full h-full bg-[#FFEAEA] overflow-hidden flex flex-col justify-center"
        >
          {/* Inner Grid strictly aligned */}
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl h-full flex items-center">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-full items-center py-20">
              <Hero scrollProgress={scrollYProgress} />
              <Profile scrollProgress={scrollYProgress} />
            </section>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
