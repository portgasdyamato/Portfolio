"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMotionValue } from "framer-motion"

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
          
          {/* ── SUBTLE PRINT GRID BORDER ── */}
          <div className="hidden lg:block absolute pt-20 bottom-[10vh] left-[66.666%] w-[1px] bg-[#1a0a0a]/[0.05] pointer-events-none" />

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full h-full items-center py-12 pointer-events-auto">
            <Hero scrollProgress={sp} />
            <Profile scrollProgress={sp} />
          </section>
        </div>
      </div>
    </div>
  )
}
