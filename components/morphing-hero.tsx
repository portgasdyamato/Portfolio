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
  const cardOuterRef = useRef<HTMLDivElement>(null) // Macro Controller
  const cardVisualRef = useRef<HTMLDivElement>(null) // Micro Physics Card
  const [isShrunk, setIsShrunk] = useState(false)

  // Bridge GSAP to Framer
  const sp = useMotionValue(0)

  // ── MOUSE TILT LOGIC ──
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 })
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 })

  const tiltX = useTransform(smoothY, [-0.5, 0.5], [15, -15])
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-18, 18])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardVisualRef.current || !isShrunk) return
    const rect = cardVisualRef.current.getBoundingClientRect()
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
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      // DESKTOP: Full fancy morphing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3500",
          scrub: 1.5,
          pin: true,
          onUpdate: (self) => {
            sp.set(self.progress)
            setIsShrunk(self.progress > 0.1 && self.progress < 0.65)
          }
        }
      })

      tl.to(cardOuterRef.current, { scale: 0.7, ease: "power2.inOut", duration: 0.3 }, 0)
      tl.to(cardVisualRef.current, {
        borderRadius: "32px",
        boxShadow: "0 80px 160px -40px rgba(245,158,158,0.3)",
        backgroundColor: "#FFF5F5",
        ease: "power2.inOut",
        duration: 0.3
      }, 0)
      tl.to({}, { duration: 0.3 }) 
      tl.to(cardOuterRef.current, { rotateZ: 90, scale: 0.4, y: "18vh", ease: "power2.inOut", duration: 0.25 }, 0.6)
      tl.to(cardOuterRef.current, { y: "115vh", opacity: 0, ease: "power3.in", duration: 0.2 }, 0.8)
      tl.to(containerRef.current, { backgroundColor: "#FFEFEE", duration: 0.3 }, 0)
    })

    mm.add("(max-width: 1023px)", () => {
      // MOBILE/TABLET: Simple scroll with subtle fade-in, no pinning
      setIsShrunk(true) // Always keep card design on mobile but at 100% size
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => sp.set(self.progress)
        }
      })
      
      // No pinning, just static styling for the mobile section
      gsap.set(cardOuterRef.current, { scale: 1, y: 0, opacity: 1 })
      gsap.set(cardVisualRef.current, { 
        borderRadius: "0px", 
        boxShadow: "none",
        backgroundColor: "#FFF5F5" 
      })
    })

    return () => mm.revert()
  }, { scope: containerRef })

  return (
    <div 
      ref={containerRef} 
      className="w-full h-auto min-h-screen lg:h-screen lg:overflow-hidden flex items-center justify-center bg-[#FFEEEC] z-10 relative"
    >
      {/* ── THE MACRO WRAPPER (Handles GSAP Scaling/Z-Rotation) ── */}
      <div
        ref={cardOuterRef}
        style={{ transformOrigin: "center center", perspective: "2000px" }}
        className="w-full h-auto lg:h-full relative flex items-center justify-center p-0 m-0"
      >
        {/* ── THE INTERACTIVE PHYSICAL CARD (Handles 3D Tilt) ── */}
        <motion.div
          ref={cardVisualRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX: tiltX, 
            rotateY: tiltY,
            backgroundColor: "#FFF5F5",
            transformStyle: "preserve-3d" 
          }}
          className="w-full h-auto lg:h-full relative lg:overflow-hidden flex items-center"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl min-h-full py-20 lg:py-0 flex items-center relative" style={{ transform: "translateZ(50px)" }}>
            <div className="hidden lg:block absolute top-[10vh] bottom-[10vh] left-[65%] w-[1px] bg-[#1a0a0a]/[0.1] pointer-events-none z-0" />
            <section className="grid grid-cols-1 lg:grid-cols-[13fr_7fr] flex-1 gap-12 lg:gap-8 w-full min-h-full items-center py-12 pointer-events-auto relative z-10">
              <Hero scrollProgress={sp} />
              <Profile scrollProgress={sp} />
            </section>
          </div>
        </motion.div>
      </div>

      {/* Fixed Circular Badge */}
      <div className="absolute bottom-[-50px] sm:bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 pointer-events-none">
        <div className="w-[200px] sm:w-[300px] aspect-square opacity-[0.4] mix-blend-multiply origin-center overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>
             <svg viewBox="0 0 200 200" className="w-full h-full">
               <path id="cc" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" fill="none" />
               <text fill="#F59E9E" fontSize="12" fontWeight="900" letterSpacing="4" style={{ fontFamily: "'Inter', sans-serif" }}><textPath href="#cc">UI/UX DESIGN ✦ AI PRODUCT DESIGN ✦ WEB DEV ✦</textPath></text>
             </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
