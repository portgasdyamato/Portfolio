"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon, Star } from "lucide-react"

interface JourneyItem {
  level: string
  institution: string
  duration: string
  date: string
  icon: LucideIcon
  color: string
  gpa: string
  description: string
  achievements: string[]
}

interface LearningJourneyProps {
  items: JourneyItem[]
  onCardClick: (index: number) => void
}

export default function LearningJourney({ items, onCardClick }: LearningJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative w-full py-12 overflow-hidden">
      {/* ─── Desktop Curved Path ─── */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[200px] h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 200 1400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F59E9E" stopOpacity="0" />
              <stop offset="10%" stopColor="#F59E9E" stopOpacity="1" />
              <stop offset="90%" stopColor="#F59E9E" stopOpacity="1" />
              <stop offset="100%" stopColor="#F59E9E" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <path
            d="M 100 0 C 100 100, 20 150, 20 300 C 20 450, 180 450, 180 600 C 180 750, 20 750, 20 900 C 20 1050, 180 1050, 180 1200 C 180 1350, 100 1350, 100 1400"
            fill="none"
            stroke="rgba(245, 158, 158, 0.15)"
            strokeWidth="4"
            strokeDasharray="4 6"
          />
          
          <motion.path
            d="M 100 0 C 100 100, 20 150, 20 300 C 20 450, 180 450, 180 600 C 180 750, 20 750, 20 900 C 20 1050, 180 1050, 180 1200 C 180 1350, 100 1350, 100 1400"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength: pathProgress }}
          />
        </svg>
      </div>

      {/* ─── Mobile Vertical Ribbon ─── */}
      <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 h-full pointer-events-none">
        <div className="h-full w-full bg-[#F59E9E]/10 border-l-[3px] border-dashed border-[#F59E9E]/20" />
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#F59E9E] shadow-[0_0_15px_rgba(245,158,158,0.5)]"
          style={{ height: useTransform(pathProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-12 md:gap-24 px-4 md:px-0 max-w-7xl mx-auto mt-10">
        {items.map((item, index) => (
          <JourneyCard 
            key={index} 
            item={item} 
            index={index} 
            onClick={() => onCardClick(index)}
          />
        ))}
        {/* End Spacer */}
        <div className="h-2" /> 
      </div>
    </div>
  )
}

function JourneyCard({ 
  item, 
  index, 
  onClick 
}: { 
  item: JourneyItem, 
  index: number, 
  onClick: () => void 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0
  
  // Spotlight Effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex w-full relative",
        isEven ? "lg:justify-start" : "lg:justify-end"
      )}
    >
      {/* ✦ REFINED BOUTIQUE NODE MARKER ✦ */}
      <div className={cn(
          "absolute top-8 hidden lg:flex items-center justify-center z-30",
          isEven ? "-right-[calc(11%+8px)]" : "-left-[calc(11%+8px)]"
        )}
      >
           <div className="w-2 h-2 rounded-full bg-[#1a0a0a] ring-2 ring-brand-500/10" />
      </div>

      <div className={cn(
        "relative flex w-full lg:w-[40%] z-20 group",
        isEven ? "pl-12 lg:pl-0 lg:pr-16" : "pl-12 lg:pl-16 lg:flex-row-reverse"
      )}>
        {/* Mobile Marker */}
        <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-[#1a0a0a] lg:hidden border border-background" />

        <motion.div 
          onClick={onClick}
          onMouseMove={handleMouseMove}
          whileHover={{ y: -4 }}
          className="w-full relative cursor-pointer"
        >
          {/* ✦ THE COMPACT ELITE CARD ✦ */}
          <div className="bg-white dark:bg-[#0c0c0c] p-5 md:p-10 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden transition-all duration-500 border border-black/[0.04] dark:border-white/[0.04] shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_20px_-10px_rgba(0,0,0,0.2)]">
            
            {/* Spotlight Glow */}
            <motion.div
              className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(251,113,133,0.05), transparent 80%)`
                ),
              }}
            />

            <div className="relative z-10 flex flex-col gap-4 md:gap-6">
               {/* Header: Clean & Compact */}
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-[#1a0a0a] flex items-center justify-center text-white shadow-md">
                        <item.icon size={15} strokeWidth={1.5} />
                     </div>
                     <span className="text-[9px] md:text-[10px] font-black font-inter text-black/30 dark:text-white/30 uppercase italic">
                       {item.date}
                     </span>
                  </div>
                  <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] text-brand-600/40 uppercase group-hover:text-brand-600 transition-colors">Archive</span>
               </div>

               {/* Typography Section */}
               <div className="space-y-4">
                  <div className="space-y-2">
                     <h3 className="text-xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#1a0a0a] dark:text-white leading-[0.95] group-hover:text-brand-600 transition-colors" style={{ fontFamily: "'Jersey 20', sans-serif" }}>
                        {item.level.split(' ').map((word, i) => (
                           <span key={i} className={cn(i % 2 === 1 ? "italic font-light" : "")}>
                             {word}{' '}
                           </span>
                        ))}
                     </h3>
                     
                     {/* Refined Institution Display */}
                     <div className="flex items-center gap-2 md:gap-3 py-0.5 md:py-1">
                        <div className="w-1 h-3 md:w-1.5 md:h-4 bg-brand-500/20 group-hover:bg-brand-500 transition-colors" />
                        <p className="text-[9px] md:text-[10px] font-black text-[#1a0a0a]/60 dark:text-white/60 uppercase tracking-[0.2em] font-inter">
                           {item.institution}
                        </p>
                     </div>
                  </div>

                  <p className="hidden md:block text-xs md:text-sm text-black/40 dark:text-white/30 leading-relaxed font-inter line-clamp-2 pt-2 border-t border-black/[0.02]">
                      {item.description}
                  </p>
               </div>

               {/* Footer: Details & Result */}
               <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-black/[0.04] dark:border-white/[0.04]">
                  <div className="flex flex-col">
                     <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-0.5">Results</span>
                     <span className="text-xl md:text-2xl font-black font-outfit text-[#1a0a0a] dark:text-white tracking-tighter">
                        {item.gpa}
                     </span>
                  </div>

                  {/* High-Visibility Details Button */}
                  <motion.div 
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-brand-500/10 border border-brand-500/10 md:border-brand-500/20 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-brand-600 hover:bg-brand-500 hover:text-white transition-all cursor-pointer"
                  >
                    Details &rarr;
                  </motion.div>
               </div>
            </div>

            {/* Pattern Mesh Overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
