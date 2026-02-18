"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  
  const cursorX = useSpring(0, { damping: 20, stiffness: 200 })
  const cursorY = useSpring(0, { damping: 20, stiffness: 200 })
  const dotX = useSpring(0, { damping: 10, stiffness: 400 })
  const dotY = useSpring(0, { damping: 10, stiffness: 400 })
  
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
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
  }, [cursorX, cursorY, dotX, dotY])

  if (!isMounted) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500/50 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(168, 85, 247, 0.1)" : "transparent",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-purple-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </>
  )
}
