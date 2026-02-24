"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"
import { createPortal } from "react-dom"

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Ring follows with gentle lag
  const ringX = useSpring(0, { damping: 25, stiffness: 250 })
  const ringY = useSpring(0, { damping: 25, stiffness: 250 })

  // Dot follows faster — trails inside the ring
  const dotX = useSpring(0, { damping: 15, stiffness: 450 })
  const dotY = useSpring(0, { damping: 15, stiffness: 450 })

  useEffect(() => {
    setIsMounted(true)

    const moveCursor = (e: MouseEvent) => {
      ringX.set(e.clientX)
      ringY.set(e.clientY)
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor, { passive: true })
    window.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [ringX, ringY, dotX, dotY])

  if (!isMounted) return null

  // We use a Portal to ensure the cursor is always at the body root, 
  // bypassing any parent overflow:hidden or transform constraints.
  return createPortal(
    <div className="fixed inset-0 pointer-events-none z-[999999999] overflow-visible">
      {/* Outer ring — gentle lag, expands on hover */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-brand-500/50 pointer-events-none hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(255, 181, 181, 0.1)" : "transparent",
          willChange: "transform",
        }}
      />
      {/* Inner dot — faster spring */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-brand-500 rounded-full pointer-events-none hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          scale: isHovering ? 0.5 : 1,
          willChange: "transform",
        }}
      />
    </div>,
    document.body
  )
}
