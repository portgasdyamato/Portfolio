"use client"

// v1.2 - Synchronized Core Experience
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"

const nameColumns = [
  "DESIGN", 
  "CONCEPT", 
  "AESTHETIC", 
  "PRODUCT", 
  "CREATIVE", 
  "DEVELOP",
  "IMPACT",
  "IDENTITY"
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
  const springY = useSpring(mouseY, { stiffness: 100, damping: 40 })

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
      let jump;
      if (count < 30) {
        jump = 6;
      } else if (count < 99) {
        jump = (100 - count) * 0.1;
      } else {
        jump = 0.5; // Final push to 100
      }
      
      count = Math.min(100, count + jump)
      setProgress(count)
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 1500)
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
        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex flex-col items-center justify-center select-none cursor-crosshair font-black"
    >
      {/* ── GRAIN OVERLAY (High-End Aesthetic) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply grain-overlay z-50" />

      {/* ── THE INFINITE VERTICAL TICKER GRID ── */}
      <div className="absolute inset-0 flex divide-x divide-[#F59E9E]/10 opacity-[0.15]">
        {[...Array(12)].map((_, i) => (
          <TickerColumn 
            key={i} 
            index={i} 
            mouseX={springX} 
            mouseY={springY}
          />
        ))}
      </div>

      {/* ── FLOATING DESIGN ELEMENTS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ 
             x: [0, 50, 0], 
             y: [0, -30, 0],
             rotate: [0, 10, 0]
           }} 
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute top-[15%] left-[10%] w-[300px] h-[300px] border-[0.5px] border-[#F59E9E]/20 rounded-full" 
         />
         <motion.div 
           animate={{ 
             x: [0, -40, 0], 
             y: [0, 60, 0],
             rotate: [0, -15, 0]
           }} 
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] border-[0.5px] border-[#F59E9E]/10" 
         />
      </div>

      {/* ── CENTRAL REVEAL: THE BRAND STAMP ── */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-full p-10 mt-[-5vh]">
          
          <div className="flex flex-col items-center gap-12">
              {/* Massive Center Initial */}
              <div className="relative group">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ 
                      opacity: 1, 
                      scale: progress < 100 ? 1 : 1.1,
                      filter: "blur(0px)"
                    }}
                    className="text-[140px] md:text-[240px] lg:text-[280px] leading-none text-[#F59E9E] italic select-none mix-blend-multiply flex items-center justify-center"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    {progress < 100 ? "S" : "A"}
                </motion.h1>
                <div className="absolute -inset-16 border-[0.5px] border-[#F59E9E]/30 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
                
                {/* Decorative Small Text Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-[350px] md:w-[500px] aspect-square opacity-[0.15]"
                    >
                       <svg viewBox="0 0 200 200" className="w-full h-full">
                         <path id="circlePath" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" fill="none" />
                         <text fill="#F59E9E" fontSize="7" fontWeight="900" letterSpacing="6" className="uppercase"><textPath href="#circlePath">✦ SAKSHI AGRAHARI / PORTFOLIO V.01 / CREATIVE DIRECTION / UI/UX / AI ✦</textPath></text>
                       </svg>
                    </motion.div>
                </div>
              </div>

              {/* The Name (Assembling through progress) */}
              <div className="flex flex-col items-center gap-2 sm:gap-6">
                  <h2 className="flex flex-col md:flex-row items-center gap-2 md:gap-8 overflow-hidden py-4">
                    {["SAKSHI", "AGRAHARI"].map((word, wIdx) => (
                        <div key={wIdx} className="flex overflow-hidden">
                            {word.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                                    animate={{ 
                                        y: progress > (15 + i * 4 + wIdx * 20) ? 0 : "100%", 
                                        opacity: progress > (15 + i * 4 + wIdx * 20) ? 1 : 0,
                                        rotateX: progress > (15 + i * 4 + wIdx * 20) ? 0 : -90
                                    }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-[40px] sm:text-[70px] md:text-[90px] lg:text-[120px] text-[#1a0a0a] font-light tracking-tight"
                                    style={{ 
                                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                                      perspective: "1000px"
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                  </h2>

                  {/* High-End HUD Stats */}
                  <div className="flex items-center gap-10 overflow-hidden">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="w-20 h-[0.5px] bg-[#F59E9E]/40" 
                      />
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-col items-center gap-1"
                      >
                        <p className="text-[10px] tracking-[1em] uppercase text-[#F59E9E] font-black">
                           Discovery Protocol
                        </p>
                        <span className="text-[8px] tracking-[0.4em] text-[#1a0a0a]/40 font-mono">ESTAB. 2026 // SYSTEM.DEPLOY</span>
                      </motion.div>
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="w-20 h-[0.5px] bg-[#F59E9E]/40" 
                      />
                  </div>
              </div>
          </div>
      </div>

      {/* ── PROGRESS FLASH (Cinematic Effect at 100) ── */}
      <AnimatePresence>
        {progress >= 100 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-white z-[100] pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* ── HUD CORNERS: ARCHIVE DATA ── */}
      <div className="absolute top-12 left-12 flex flex-col gap-1 text-[9px] tracking-widest text-[#F59E9E]/60 font-mono">
          <span>ID: SA_NODE_01</span>
          <span>ST: READY</span>
      </div>
      <div className="absolute top-12 right-12 flex flex-col items-end gap-1 text-[9px] tracking-widest text-[#F59E9E]/60 font-mono">
          <span>PORTFOLIO_V.1.3</span>
          <span>© 2026</span>
      </div>

      {/* ── BOTTOM CINEMATIC HUD ── */}
      <div className="absolute bottom-10 left-6 sm:left-12 md:left-16 flex flex-col gap-3">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.5em] text-[#F59E9E] uppercase font-black">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E9E] animate-pulse" />
              <span className="hidden sm:inline">Initializing Creative Core...</span>
              <span className="sm:hidden">Initializing...</span>
          </div>
          <div className="flex items-center gap-5 text-[#1a0a0a]/30 font-mono text-[11px]">
               <span className="flex items-center gap-2">
                 <span className="w-3 h-[1px] bg-[#1a0a0a]/20" />
                 SYNC://ACTIVE
               </span>
               <span className="opacity-50 hidden sm:inline">—</span>
               <span className="hidden sm:inline">LOC://EARTH</span>
          </div>
      </div>

      <div className="absolute bottom-10 right-6 sm:right-12 md:right-16 flex items-center gap-6 sm:gap-12">
          <div className="flex flex-col items-end gap-2">
               <span className="text-[8px] sm:text-[9px] tracking-[0.4em] font-black text-[#1a0a0a]/30 uppercase whitespace-nowrap">System Integrity</span>
               <div className="flex items-center gap-1.5">
                   {[...Array(8)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: progress > (i * 12.5) ? 1 : 0.1 }}
                        className="w-2 sm:w-3 h-[2px] bg-[#F59E9E]" 
                      />
                   ))}
               </div>
          </div>
          <div className="relative">
            <span className="text-5xl sm:text-8xl font-black text-[#F59E9E] opacity-[0.08] absolute -right-2 -bottom-2 sm:-right-4 -bottom-4 select-none">
              {Math.floor(progress)}
            </span>
            <span className="text-2xl sm:text-4xl font-mono font-black text-[#F59E9E] opacity-40 relative">
                {Math.floor(progress)}
            </span>
          </div>
      </div>

      {/* Frame Border */}
      <div className="absolute inset-0 z-50 pointer-events-none border-[12px] border-[#FFF5F5]" />
    </motion.div>
  )
}

function TickerColumn({ index, mouseX, mouseY }: { index: number, mouseX: any, mouseY: any }) {
  const [speed, setSpeed] = useState(15) 
  const isAlt = index % 2 === 0
  const columnWord = nameColumns[index % nameColumns.length]

  useEffect(() => {
    setSpeed(Math.random() * 10 + 10)
  }, [])

  return (
    <div className="h-full w-full flex-1 relative overflow-hidden flex flex-col items-center group">
       <motion.div 
         animate={{ y: isAlt ? ["-50%", "0%"] : ["0%", "-50%"] }}
         transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
         className="flex flex-col gap-12 py-12"
       >
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-12">
               {columnWord.split("").map((char, j) => (
                 <span 
                   key={j} 
                   className="text-[12px] text-[#F59E9E] font-mono tracking-tighter mix-blend-multiply opacity-20"
                 >
                    {char}
                 </span>
               ))}
            </div>
          ))}
       </motion.div>
    </div>
  )
}
