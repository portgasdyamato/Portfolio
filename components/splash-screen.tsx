"use client"

// v1.1 - Unified Physics & Discovery System
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const finishCalled = useRef(false)

  // Motion Values for Interaction
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 30 })

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
      const jump = Math.random() * 5 + 0.5
      count = Math.min(100, count + jump)
      setProgress(count)
      
      if (count >= 100) {
        clearInterval(interval)
        if (!finishCalled.current) {
          finishCalled.current = true
          setTimeout(() => finishLoadingAction(), 1500)
        }
      }
    }, 45)
    return () => clearInterval(interval)
  }, [finishLoadingAction])

  // Parallax for the card
  const cardRotateX = useTransform(springY, [0, 1000], [10, -10])
  const cardRotateY = useTransform(springX, [0, 1920], [-10, 10])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(0 0 100% 0)", 
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] bg-[#FFF5F5] overflow-hidden flex flex-col items-center justify-center select-none cursor-wait"
    >
      {/* ── AMBIENT HUD ── */}
      <div className="absolute top-12 left-14 flex items-center gap-6">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] tracking-[0.5em] text-[#b33951] font-black uppercase">Filing Assets</span>
             <div className="w-12 h-px bg-[#b33951]/20" />
          </div>
          <span className="font-mono text-[11px] text-[#1a0a0a]/20">STG://BOOT.SEQ</span>
      </div>

      <div className="absolute top-12 right-14 font-mono text-xl font-black text-[#b33951]">
         {Math.floor(progress).toString().padStart(3, '0')}
      </div>

      {/* ── THE "OUT OF BOX" CONCEPT: THE SLIDING BUSINESS CARD ── */}
      <div className="relative w-full h-full flex items-center justify-center p-12 lg:p-24 overflow-hidden">
        
        {/* Top Sleeve */}
        <motion.div 
            initial={{ y: 0 }}
            animate={{ y: progress > 80 ? -1000 : 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#FFF5F5] z-30 border-b border-[#b33951]/5 flex items-end justify-center pb-2"
        >
             <div className="w-[1px] h-20 bg-[#b33951]/10 rounded-full" />
        </motion.div>

        {/* Bottom Sleeve */}
        <motion.div 
            initial={{ y: 0 }}
            animate={{ y: progress > 80 ? 1000 : 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#FFF5F5] z-30 border-t border-[#b33951]/5 flex items-start justify-center pt-2"
        >
             <div className="w-[1px] h-20 bg-[#b33951]/10 rounded-full" />
        </motion.div>

        {/* ── THE CARD REVEAL ── */}
        <motion.div
           style={{ rotateX: cardRotateX, rotateY: cardRotateY, perspective: "1000px" }}
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: progress > 40 ? 1 : 0.8, opacity: progress > 40 ? 1 : 0 }}
           transition={{ duration: 0.8, ease: "anticipate" }}
           className="relative z-20 w-fit h-fit"
        >
            <div className="bg-[#FDE2E2] px-12 py-10 sm:px-20 sm:py-16 md:px-32 md:py-24 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(179,57,81,0.2)] border border-[#b33951]/10 flex flex-col items-center gap-12 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                
                <div className="flex flex-col items-center gap-4 relative z-10">
                    <Sparkles className="text-[#b33951] mb-2" size={20} />
                    <div className="h-5 flex items-center overflow-hidden">
                        <motion.span 
                            animate={{ y: [20, 0, -20] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="text-[10px] tracking-[0.7em] uppercase font-black text-[#b33951]/60"
                        >
                            Loading Portfolio
                        </motion.span>
                    </div>
                </div>

                <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-black text-[#1a0a0a] leading-none tracking-tighter" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Sakshi <br className="sm:hidden" /> Agrahari.
                </h1>

                <div className="flex flex-col items-center gap-6 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-8 md:w-12 h-px bg-[#1a0a0a]/10" />
                        <p className="text-[10px] tracking-[0.5em] uppercase font-black text-[#1a0a0a]">
                            UI/UX & AI Product
                        </p>
                        <div className="w-8 md:w-12 h-px bg-[#1a0a0a]/10" />
                    </div>
                </div>
            </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-14 text-[9px] tracking-[0.4em] font-black text-[#1a0a0a]/20 uppercase">
        Discovery Protocol v1.0
      </div>

    </motion.div>
  )
}
