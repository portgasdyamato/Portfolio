"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion"

import Hero from "@/components/hero"
import Profile from "@/components/profile"

gsap.registerPlugin(ScrollTrigger)

export default function MorphingHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isShrunk, setIsShrunk] = useState(false)

  // We bridge GSAP scroll progress to Framer Motion
  const sp = useMotionValue(0)

  // ── MOUSE TILT LOGIC ──
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out mouse input
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 })
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 })

  // Transform mouse pos into 3D rotations
  const tiltX = useTransform(smoothY, [-0.5, 0.5], [10, -10]) // Hover bottom -> tilt up (positive X)
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]) // Hover right -> tilt away (positive Y)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !isShrunk) return
    const rect = cardRef.current.getBoundingClientRect()
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3500", // Even more vertical space for the "dead zone"
        scrub: 1.5,
        pin: true,
        onUpdate: (self) => {
          sp.set(self.progress)
          // Threshold to enable mouse tilt (only when shrunk to card size)
          setIsShrunk(self.progress > 0.22 && self.progress < 0.65)
        }
      }
    })

    // ── PHASE 1: MORPH TO CARD (0 to 0.25) ──
    tl.to(cardRef.current, {
      scale: 0.7,
      borderRadius: "28px",
      boxShadow: "0 60px 120px -20px rgba(179,57,81,0.25)",
      backgroundColor: "#FDE2E2",
      ease: "power2.inOut",
      duration: 0.3
    }, 0)

    // ── PHASE 2: THE "DEAD ZONE" (0.3 to 0.6) ──
    // This is the pause requested by the user. 
    // We add a segment where nothing macro happens to cardRef.
    tl.to({}, { duration: 0.3 }) 

    // ── PHASE 3: ROTATE (0.6 to 0.8) ──
    tl.to(cardRef.current, {
      rotateZ: 90, 
      scale: 0.4, 
      y: "15vh",
      ease: "power2.inOut",
      duration: 0.25
    }, 0.6)

    // ── PHASE 4: SLIDE TO POCKET (0.8 to 1.0) ──
    tl.to(cardRef.current, {
      y: "115vh",
      opacity: 0, 
      ease: "power3.in",
      duration: 0.2
    }, 0.8)

    // Sync Background Fade
    tl.to(containerRef.current, {
      backgroundColor: "#F5D5D5",
      ease: "none",
      duration: 0.3
    }, 0)
    
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen overflow-hidden flex items-center justify-center p-0 m-0 transition-colors bg-[#FDE2E2] z-10 relative"
    >
      {/* ── THE MORPHING CARD ── */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          transformOrigin: "center center",
          perspective: "1500px" // Enable 3D depth for the internal tilt
        }}
        className="w-full h-full flex flex-col justify-center relative overflow-hidden group/card"
      >
        {/* Tilting Surface (represents the physical card) */}
        <motion.div
          style={{ 
            rotateX: tiltX, 
            rotateY: tiltY,
            backgroundColor: "#FDE2E2", // Moved background here
            borderRadius: "inherit" // Inherit the GSAP-animated border-radius
          }}
          className="w-full h-full relative flex items-center shadow-[inherit]" // Inherit GSAP shadow
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl h-full flex items-center relative">
            {/* Subtle Print Grid Border */}
            <div className="hidden lg:block absolute top-[10vh] bottom-[10vh] left-[65%] w-[1px] bg-[#1a0a0a]/[0.15] pointer-events-none z-0" />

            <section className="grid grid-cols-1 lg:grid-cols-[13fr_7fr] flex-1 gap-0 lg:gap-8 w-full h-full items-center py-12 pointer-events-auto relative z-10">
              <Hero scrollProgress={sp} />
              <Profile scrollProgress={sp} />
            </section>
          </div>
        </motion.div>
      </div>

      {/* ── FIXED CIRCULAR TEXT BADGE ── */}
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
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-1.5 h-1.5 rounded-full bg-[#b33951]/60" />
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
