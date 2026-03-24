"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMotionValue, motion } from "framer-motion"

import Hero from "@/components/hero"
import Profile from "@/components/profile"

gsap.registerPlugin(ScrollTrigger)

export default function MorphingHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  // We bridge GSAP scroll progress to Framer Motion so the internal components 
  // (Hero text, buttons, etc) naturally trigger their micro-animations exactly as before.
  const sp = useMotionValue(0)

  useGSAP(() => {
    // The master scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000", // Locks scroll for 2000 pixels down
        scrub: 1, // Smooth linear interpolation (lerp)
        pin: true, // Crucial: physically locks the page exactly here
        onUpdate: (self) => {
          // Sync GSAP's scroll progress (0 to 1) into Framer Motion
          sp.set(self.progress)
        }
      }
    })

    // PHASE 1 (0% to 60%): Shrink to Business Card
    tl.to(cardRef.current, {
      scale: 0.85,
      borderRadius: "24px",
      boxShadow: "0 60px 120px -20px rgba(179,57,81,0.15)",
      ease: "power2.inOut",
      duration: 0.6
    }, 0)

    // Outer Stage Background Fade (makes the card pop out visually from the edges)
    tl.to(containerRef.current, {
      backgroundColor: "#F5D5D5",
      ease: "none",
      duration: 0.6
    }, 0)

    // PHASE 2 (60% to 100%): 3D Tilt Away & Exit
    tl.to(cardRef.current, {
      rotateX: -45, // Tilt backwards into perspective
      y: 400, // Slide down
      opacity: 0, // Fade out
      ease: "power3.in",
      duration: 0.4
    }, 0.6)
    
  }, { scope: containerRef })

  return (
    // We use z-10 so it correctly pins above the following content until exit
    <div 
      ref={containerRef} 
      className="w-full h-screen overflow-hidden flex items-center justify-center p-0 m-0 transition-colors bg-[#FDE2E2] z-10 relative"
    >
      {/* ── THE MORPHING CARD ── */}
      <div
        ref={cardRef}
        style={{ 
          perspective: 1200, 
          transformOrigin: "center center",
          backgroundColor: "#FDE2E2" 
        }}
        className="w-full h-full overflow-hidden flex flex-col justify-center"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl h-full flex items-center relative">

          {/* ── FLOATING ABSTRACT GEOMETRY EMBLEM (Center Overlap) ── */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-[18%] left-[62%] -translate-x-1/2 w-[240px] aspect-square pointer-events-none z-0"
          >
            {/* Main spinning emblem */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
              className="absolute inset-0"
            >
               <svg viewBox="0 0 200 200" className="w-full h-full opacity-[0.22] mix-blend-multiply">
                 {/* Outer dashed ring */}
                 <circle cx="100" cy="100" r="94" fill="none" stroke="#b33951" strokeWidth="1" strokeDasharray="4 6" />
                 {/* Inner solid ring */}
                 <circle cx="100" cy="100" r="82" fill="none" stroke="#1a0a0a" strokeWidth="0.6" />
                 {/* Premium 4-point star */}
                 <polygon points="100,25 112,88 175,100 112,112 100,175 88,112 25,100 88,88" fill="none" stroke="#b33951" strokeWidth="1.2" />
                 {/* Center registration dot */}
                 <circle cx="100" cy="100" r="3" fill="#1a0a0a" />
               </svg>
            </motion.div>
            
            {/* Floating detached elements */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 45, 0] }} 
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -top-8 -right-8 opacity-40 mix-blend-multiply"
            >
               <div className="w-16 h-16 border-[1.5px] border-[#b33951] rounded-full" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [12, -12, 12] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="absolute bottom-6 -left-10 opacity-60 mix-blend-multiply"
            >
               <div className="w-10 h-10 border border-[#1a0a0a] rounded-sm transform rotate-12" />
            </motion.div>
          </motion.div>

          {/* ── SUBTLE PRINT GRID BORDER ── */}
          <div className="hidden lg:block absolute top-[10vh] bottom-[10vh] left-[65%] w-[1px] bg-[#1a0a0a]/[0.15] pointer-events-none z-0" />

          <section className="grid grid-cols-1 lg:grid-cols-[13fr_7fr] flex-1 gap-0 lg:gap-8 w-full h-full items-center py-12 pointer-events-auto relative z-10">
            <Hero scrollProgress={sp} />
            <Profile scrollProgress={sp} />
          </section>
        </div>
      </div>
    </div>
  )
}
