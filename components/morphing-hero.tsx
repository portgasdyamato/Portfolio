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

    // PHASE 2 (60% to 100%): Drop into the pocket
    tl.to(cardRef.current, {
      y: 800, // Slide straight down into the bottom edge pocket
      ease: "power2.in", // Accelerate like gravity
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
          transformOrigin: "center center",
          backgroundColor: "#FDE2E2" 
        }}
        className="w-full h-full flex flex-col justify-center relative"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl h-full flex items-center relative">

          {/* ── SUBTLE PRINT GRID BORDER ── */}
          <div className="hidden lg:block absolute top-[10vh] bottom-[10vh] left-[65%] w-[1px] bg-[#1a0a0a]/[0.15] pointer-events-none z-0" />

          <section className="grid grid-cols-1 lg:grid-cols-[13fr_7fr] flex-1 gap-0 lg:gap-8 w-full h-full items-center py-12 pointer-events-auto relative z-10">
            <Hero scrollProgress={sp} />
            <Profile scrollProgress={sp} />
          </section>
        </div>
      </div>

      {/* ── FIXED CIRCULAR TEXT BADGE (Straddles Section Boundary) ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 hidden lg:block pointer-events-none">
        <div className="w-[220px] sm:w-[260px] lg:w-[300px] aspect-square opacity-[0.45] mix-blend-multiply origin-center">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }} 
            className="w-full h-full relative"
          >
             <svg viewBox="0 0 200 200" className="w-full h-full">
               <defs>
                 <path id="center-curve" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
               </defs>
               <text fill="#b33951" fontSize="12.5" fontWeight="900" letterSpacing="4.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                 <textPath href="#center-curve" startOffset="0%">
                   UI/UX DESIGN ✦ AI PRODUCT DESIGN ✦ WEB DEV ✦ 
                 </textPath>
               </text>
             </svg>
             {/* Center dot for perfect balance */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-1.5 h-1.5 rounded-full bg-[#b33951]/60" />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
