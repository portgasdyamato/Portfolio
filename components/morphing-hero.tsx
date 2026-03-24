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

          {/* ── GIANT BACKGROUND CIRCULAR TEXT (Top Middle of Card) ── */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] sm:w-[550px] md:w-[650px] aspect-square pointer-events-none z-0 opacity-10 mix-blend-multiply">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              className="w-full h-full"
            >
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <path id="hero-curve" d="M 250, 250 m -210, 0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0" />
                </defs>
                <text fill="#1a0a0a" fontSize="23.5" fontWeight="900" letterSpacing="12" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <textPath href="#hero-curve" startOffset="0%">
                    UI/UX SPECIALIST • AI PRODUCT DESIGNER • SAKSHI AGRAHARI • PORTFOLIO 2024 • 
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

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
