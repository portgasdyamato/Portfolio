"use client"

// v1.2 - Synchronized Core Experience
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const nameColumns = [
  "SAKSHI", 
  "AGRAHARI", 
  "DESIGNER", 
  "CREATIVE", 
  "DEVELOPER"
]

const randomChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+".split("")

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // Mouse Interaction (Variable Speed Ticker)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 40 })

  useEffect(() => {
    setMounted(true)
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  // Progress logic
  useEffect(() => {
    let count = 0
    const interval = setInterval(() => {
      // Non-linear "organic" progress
      const jump = count < 30 ? 6 : (100 - count) * 0.08
      count = Math.min(100, count + jump)
      setProgress(count)
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 2200)
        }
      }
    }, 60)
    return () => clearInterval(interval)
  }, [finishLoadingAction])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(0 0 100% 0)", 
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex flex-col items-center justify-center select-none cursor-crosshair font-black"
    >
      {/* ── THE INFINITE VERTICAL TICKER GRID ── */}
      <div className="absolute inset-0 flex divide-x divide-[#b33951]/10 opacity-[0.25]">
        {[...Array(12)].map((_, i) => (
          <TickerColumn 
            key={i} 
            index={i} 
            progress={progress} 
            mouseX={springX} 
          />
        ))}
      </div>

      {/* ── CENTRAL REVEAL: THE BRAND STAMP ── */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-10 mt-[-5vh]">
          
          <div className="flex flex-col items-center gap-10">
              {/* Massive Center Initial */}
              <div className="relative group">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[120px] md:text-[200px] leading-none text-[#b33951] italic select-none mix-blend-multiply"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    {progress < 100 ? "S" : "A"}
                </motion.h1>
                <div className="absolute -inset-12 border-[0.5px] border-[#b33951]/20 rounded-full animate-spin-slow opacity-40 pointer-events-none" />
              </div>

              {/* The Name (Assembling through progress) */}
              <div className="flex flex-col items-center gap-4">
                  <h2 className="flex items-center gap-3 overflow-hidden py-4">
                    {["SAKSHI", "AGRAHARI"].map((word, wIdx) => (
                        <div key={wIdx} className="flex overflow-hidden">
                            {word.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ 
                                        y: progress > (10 + i * 5) ? 0 : 200, 
                                        opacity: progress > (10 + i * 5) ? 1 : 0 
                                    }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-[#1a0a0a]"
                                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            {wIdx === 0 && <span className="w-6 md:w-10" />}
                        </div>
                    ))}
                  </h2>

                  {/* High-End HUD Stats */}
                  <div className="flex items-center gap-6 overflow-hidden">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="w-12 h-px bg-[#b33951]" 
                      />
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                        className="text-[12px] tracking-[0.8em] uppercase text-[#b33951] font-black"
                      >
                         Discovery Protocol v.01
                      </motion.p>
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="w-12 h-px bg-[#b33951]" 
                      />
                  </div>
              </div>
          </div>
      </div>

      {/* ── BOTTOM CINEMATIC HUD ── */}
      <div className="absolute bottom-12 left-16 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.5em] text-[#b33951] uppercase font-black">
              <span className="w-2 h-2 rounded-full bg-[#b33951] animate-ping" />
              <span>Establishing Aesthetic Gravity...</span>
          </div>
          <div className="flex items-center gap-5 text-[#1a0a0a]/30 font-mono text-[11px]">
               <span>SYNC://PORTFOLIO_CORE</span>
               <span className="opacity-50">—</span>
               <span>LOCATION://EARTH_NODES</span>
          </div>
      </div>

      <div className="absolute bottom-12 right-16 flex items-center gap-10">
          <div className="flex flex-col items-end gap-1">
               <span className="text-[10px] tracking-[0.4em] font-black text-[#1a0a0a]/20 uppercase">Core Integrity</span>
               <div className="flex items-center gap-2">
                   {[...Array(5)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: progress > (i * 20) ? 1 : 0.1 }}
                        className="w-4 h-1 bg-[#b33951]" 
                      />
                   ))}
               </div>
          </div>
          <span className="text-7xl font-mono font-black text-[#b33951] opacity-20">
              {Math.floor(progress)}
          </span>
      </div>

      <div className="absolute inset-0 z-50 pointer-events-none border-[12px] border-[#FFF5F5]" />
    </motion.div>
  )
}

function TickerColumn({ index, mouseX }: { index: number, mouseX: any }) {
  const [speed, setSpeed] = useState(10) // Default slow speed for SSR
  const [displayChars, setDisplayChars] = useState<string[]>(Array(20).fill("X"))
  const isAlt = index % 2 === 0

  useEffect(() => {
    // Client-side only initialization
    setSpeed(Math.random() * 4 + 2)
    const newChars = Array(20).fill(0).map(() => randomChars[Math.floor(Math.random() * randomChars.length)])
    setDisplayChars(newChars)
  }, [])

  return (
    <div className="h-full w-full flex-1 relative overflow-hidden flex flex-col items-center">
       <motion.div 
         animate={{ y: isAlt ? ["-100%", "0%"] : ["0%", "-100%"] }}
         transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
         className="flex flex-col gap-8 py-8"
       >
          {displayChars.map((char, i) => (
            <span key={i} className="text-[14px] text-[#b33951]/40 font-mono tracking-tighter mix-blend-multiply opacity-50">
               {char}
            </span>
          ))}
       </motion.div>
    </div>
  )
}
