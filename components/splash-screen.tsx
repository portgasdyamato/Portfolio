"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── Component: 3D Boutique Folder ──
function BoutiqueFolder({ color, tabColor, accent, title, icon: Icon, delay, rotate, mobileScale = 0.6 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate }}
      transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-[100px] sm:w-[140px] h-[85px] sm:h-[120px] cursor-pointer group transform-gpu"
      style={{ perspective: "1000px" }}
    >
      {/* BACK OF FOLDER */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[65px] sm:h-[95px] rounded-b-lg sm:rounded-b-xl rounded-tr-lg sm:rounded-tr-xl shadow-lg border border-black/5"
        style={{ backgroundColor: tabColor }}
      />

      {/* TAB OF FOLDER */}
      <div 
        className="absolute bottom-[65px] sm:bottom-[95px] left-0 w-1/2 h-[10px] sm:h-[16px] rounded-t-md sm:rounded-t-lg"
        style={{ backgroundColor: tabColor }}
      />

      {/* PEEKING DOCUMENT */}
      <motion.div 
        className="absolute left-[12%] w-[76%] h-[60px] sm:h-[85px] bg-white rounded-t-md sm:rounded-t-lg shadow-md border border-black/5 flex flex-col pt-1.5 sm:pt-2 px-2 sm:px-3 z-0"
        animate={{ bottom: [10, 20, 10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: delay + 0.5 }}
      >
        <div className="flex items-center gap-1 sm:gap-1.5 mb-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-black/[0.03] flex items-center justify-center">
             <Icon size={8} color={accent} />
          </div>
          <div className="w-1/2 h-1 bg-black/[0.05] rounded-full" />
        </div>
        <div className="space-y-1">
          <div className="w-full h-0.5 sm:h-1 bg-black/[0.02] rounded-full" />
          <div className="w-4/5 h-0.5 sm:h-1 bg-black/[0.02] rounded-full" />
        </div>
      </motion.div>

      {/* FRONT OF FOLDER */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[65px] sm:h-[95px] rounded-lg sm:rounded-xl shadow-xl border border-white/20 p-2.5 sm:p-4 flex flex-col justify-end overflow-hidden origin-bottom"
        style={{ backgroundColor: color, transform: "rotateX(-18deg)" }}
      >
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 opacity-15">
          <Icon size={18} color={accent} strokeWidth={1.5} />
        </div>
        <h3 className="text-[10px] sm:text-[14px] font-black italic text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {title}
        </h3>
        <p className="text-[5px] sm:text-[6px] uppercase tracking-widest text-white/50 font-bold">
          Archive
        </p>
      </div>
    </motion.div>
  )
}

// ─── Component: Polaroid Card ──
function Polaroid({ src, caption, rotate, delay }: { src: string, caption: string, rotate: number, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotate }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="p-2 sm:p-3 pb-6 sm:pb-8 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.08)] flex flex-col gap-1.5 sm:gap-2.5 border border-black/[0.03] transform-gpu w-[90px] sm:w-[130px]"
    >
      <div className="aspect-square bg-[#f8f8f8] overflow-hidden relative border border-black/[0.02] rounded-sm">
         <img src={src} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
      </div>
      <span className="text-[7px] sm:text-[9px] font-bold text-black/25 text-center uppercase tracking-[0.2em]">{caption}</span>
    </motion.div>
  )
}

// ─── Component: Sticky Note ──
function StickyNote({ text, color, delay }: { text: string, color: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, rotate: 6 }}
      transition={{ delay, duration: 0.6 }}
      className="px-3 sm:px-4 py-3 sm:py-4 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-black/[0.04] relative transform-gpu w-[110px] sm:w-[160px]"
      style={{ background: color }}
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 sm:w-14 h-4 sm:h-6 bg-white/40 backdrop-blur-md border border-black/[0.02] rotate-2 shadow-sm" />
      <span className="text-[8px] sm:text-[12px] font-bold text-[#1a0a0a]/50 leading-relaxed font-inter">{text}</span>
    </motion.div>
  )
}

function FigmaIcon({ size, color }: any) {
  return (
    <svg viewBox="0 0 38 57" width={size} height={size * 1.5}>
      <path d="M19 28.5a9.5 9.5 0 1 1 0-19H9.5v19H19z" fill={color}/>
      <path d="M19 47.5a9.5 9.5 0 1 1 0-19H9.5v19H19z" fill={color}/>
      <path d="M19 47.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z" fill={color}/>
      <path d="M28.5 28.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" fill={color}/>
      <path d="M28.5 47.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z" fill={color}/>
    </svg>
  )
}

function DesignIcon({ size, color }: any) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.5 1.5" />
      <path d="M14 11l7 7" />
    </svg>
  )
}

export default function SplashScreen({ finishLoadingAction }: { finishLoadingAction: () => void }) {
  const [progress, setProgress] = useState(0)
  const finishCalled = useRef(false)

  useEffect(() => {
    let count = 0
    const iv = setInterval(() => {
      const jump = count < 30 ? 5 : count < 88 ? (100 - count) * 0.12 : 0.6
      count = Math.min(100, count + jump)
      setProgress(count)
      if (count >= 100 && !finishCalled.current) {
        clearInterval(iv)
        finishCalled.current = true
        setTimeout(() => finishLoadingAction(), 1100)
      }
    }, 50)
    return () => clearInterval(iv)
  }, [finishLoadingAction])

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.9, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] overflow-hidden select-none bg-[#FCFAF5]"
      style={{ cursor: 'crosshair' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply grain-overlay z-10" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1.5px)', backgroundSize: '24px 24px sm:32px 32px' }} 
      />

      {/* ── Header Labels ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="absolute top-6 sm:top-8 left-0 right-0 z-50 flex justify-between px-6 sm:px-10 pointer-events-none"
      >
        <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-black/20">© 2026</span>
        <div className="flex gap-4">
          <span className="hidden sm:block text-[10px] font-black uppercase tracking-[0.4em] text-black/20">Creative Intent</span>
          <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-[#F59E9E] animate-pulse">Running</span>
        </div>
      </motion.div>

      {/* ── Scattered Artifacts (Positions updated for better mobile spacing) ── */}
      
      {/* Top Left: Polaroid */}
      <div className="absolute top-[8%] sm:top-[12%] left-[5%] sm:left-[10%] z-20">
        <Polaroid src="/slpash.gif" caption="mood_01" rotate={-8} delay={0.4} />
      </div>

      {/* Mid Left: Figma Folder */}
      <div className="absolute top-[38%] sm:top-[45%] left-[2%] sm:left-[6%] z-20">
        <BoutiqueFolder 
          color="#1E1E1E" 
          tabColor="#2C2C2C" 
          accent="#A259FF" 
          title="Figma" 
          icon={FigmaIcon} 
          delay={0.6}
          rotate={-5}
        />
      </div>

      {/* Top Right: Status Sticky */}
      <div className="absolute top-[10%] sm:top-[15%] right-[5%] sm:right-[10%] z-20">
        <StickyNote text="Crafting digital magic." color="#FFF9E5" delay={0.5} />
      </div>

      {/* Mid Right: Design Gear Folder */}
      <div className="absolute top-[35%] sm:top-[42%] right-[2%] sm:right-[8%] z-20">
        <BoutiqueFolder 
          color="#F59E9E" 
          tabColor="#E88C8C" 
          accent="#ffffff" 
          title="Toolkit" 
          icon={DesignIcon} 
          delay={0.7}
          rotate={8}
        />
      </div>

      {/* Floating Characters - Hid for small mobile, showed on larger mobile */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-[18%] sm:bottom-[22%] left-[15%] sm:left-[18%] z-20 hidden sm:block"
      >
        <img src="/pot.gif" className="w-10 sm:w-28 drop-shadow-2xl opacity-90" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute bottom-[22%] sm:bottom-[28%] right-[15%] sm:right-[22%] z-20 hidden sm:block"
      >
        <img src="/deer.gif" className="w-12 sm:w-36 drop-shadow-2xl opacity-90" />
      </motion.div>

      {/* ── Center: Typography ── */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none px-6">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 sm:mb-10"
        >
          <span className="text-[10px] sm:text-[12px] font-medium text-black/20 bg-black/[0.02] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-black/[0.02]" style={{ fontFamily: "'Inter', sans-serif" }}>
             Archive: <span className="text-black/50 font-semibold tracking-wide">Sakshi A.</span>
          </span>
        </motion.div>

        <div className="flex flex-col items-center w-full">
            <div className="flex flex-wrap justify-center overflow-visible">
              {"Sakshi".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: progress > 10 + i * 5 ? 1 : 0, y: progress > 10 + i * 5 ? 0 : 30, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-bold italic text-[#1a0a0a] tracking-tight sm:tracking-tighter leading-[0.8]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center overflow-visible">
              {"Agrahari".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: progress > 40 + i * 4 ? 1 : 0, y: progress > 40 + i * 4 ? 0 : 30, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-light italic text-[#F59E9E] tracking-tight sm:tracking-tighter leading-[0.8]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: progress > 70 ? 1 : 0, y: progress > 70 ? 0 : 10 }}
          transition={{ duration: 1 }}
          className="mt-8 sm:mt-12 flex flex-col items-center"
        >
          <div className="h-[1px] w-24 sm:w-32 bg-black/[0.08] mb-3 sm:mb-4" />
          <h2 className="text-[9px] sm:text-[13px] tracking-[0.4em] sm:tracking-[0.6em] text-black/25 uppercase font-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            Designer &amp; Builder
          </h2>
        </motion.div>
      </div>

      {/* ── Legend ── */}
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: progress > 60 ? 1 : 0 }}
         className="absolute bottom-10 sm:bottom-12 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
      >
        <div className="flex items-center gap-4 sm:gap-8">
           {["Archive", "Moodboard", "Toolkit"].map((text, idx) => (
             <span key={idx} className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.25em] text-black/15">
                {text}
             </span>
           ))}
        </div>
      </motion.div>

      {/* ── Progress ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] sm:h-[4px] bg-black/[0.02] z-50">
        <motion.div
          className="h-full bg-[#1a0a0a]/80"
          style={{ width: `${progress}%` }}
        />
      </div>

    </motion.div>
  )
}
