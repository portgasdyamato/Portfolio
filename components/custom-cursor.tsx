"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { createPortal } from "react-dom"

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Direct tracking for the cursor for zero lag
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for a buttery hover transition
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 400, mass: 0.1 })
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 400, mass: 0.1 })

  useEffect(() => {
    setIsMounted(true)

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      let isHover = false

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        isHover = true
      }

      setIsHovering(isHover)
    }

    window.addEventListener("mousemove", moveCursor, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!isMounted) return null

  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[999999999] overflow-visible hidden md:block mix-blend-difference">
      
      <motion.div
        className="fixed top-0 left-0 pointer-events-none flex items-center justify-center text-white"
        style={{
          x: smoothX,
          y: smoothY,
          marginLeft: -16,
          marginTop: -16,
          willChange: "transform",
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          rotate: isHovering ? 45 : 0, // Spins from a + star into an X star on hover!
        }}
        transition={{ 
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.3
        }}
      >
        {/* Custom Unusual Vector Shape (4-Point Star) */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 0 12 10.5 24 12C12 13.5 12 24 12 24C12 24 12 13.5 0 12C12 10.5 12 0 12 0Z" />
        </svg>
      </motion.div>
    </div>,
    document.body
  )
}
