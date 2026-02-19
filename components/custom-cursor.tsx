"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)

  // Ring follows with gentle lag
  const ringX = useSpring(0, { damping: 20, stiffness: 200 })
  const ringY = useSpring(0, { damping: 20, stiffness: 200 })

  // Dot follows faster — trails inside the ring
  const dotX = useSpring(0, { damping: 10, stiffness: 400 })
  const dotY = useSpring(0, { damping: 10, stiffness: 400 })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const moveCursor = (e: MouseEvent) => {
      ringX.set(e.clientX - 16)
      ringY.set(e.clientY - 16)
      dotX.set(e.clientX - 2)
      dotY.set(e.clientY - 2)
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).closest("button") ||
        (e.target as HTMLElement).closest("a")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [ringX, ringY, dotX, dotY])

  if (!isMounted) return null

  return (
    <>
      {/* Outer ring — gentle lag, expands on hover */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-500/60 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? "rgba(255, 153, 153, 0.12)" : "transparent",
        }}
      />
      {/* Inner dot — faster spring, stays visible on hover and scales with ring */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-brand-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          scale: isHovering ? 2.5 : 1,
        }}
      />
    </>
  )
}
