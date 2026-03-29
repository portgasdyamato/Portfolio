"use client"

import { useRef, useMemo, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
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
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative w-full py-10 md:py-24">
      {/* ─── Premium Central Path (Desktop) ─── */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-brand-500/20 to-transparent pointer-events-none">
        <motion.div 
          style={{ scaleY: pathProgress }}
          className="absolute top-0 left-0 w-full h-full bg-brand-500 origin-top shadow-[0_0_15px_rgba(245,158,158,0.5)]"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-24 md:gap-40 px-4 md:px-0 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <JourneyCard 
            key={index} 
            item={item} 
            index={index} 
            onClick={() => onCardClick(index)}
          />
        ))}
        {/* End Spacer */}
        <div className="h-10" /> 
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

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex w-full relative",
        isEven ? "lg:justify-start" : "lg:justify-end"
      )}
    >
      {/* Central Node Dot (Desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-10 -translate-x-1/2 items-center justify-center z-30">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-4 h-4 rounded-full bg-background border-2 border-brand-500 shadow-[0_0_15px_rgba(245,158,158,0.4)]"
        />
      </div>

      {/* Card Wrapper */}
      <div className={cn(
        "relative flex w-full lg:w-[45%] pl-8 lg:pl-0 z-20 group",
        isEven ? "lg:pr-16" : "lg:pl-16"
      )}>
        {/* Mobile Marker Only */}
        <div className="absolute left-0 top-10 w-4 h-4 rounded-full bg-brand-500 shadow-[0_0_15px_rgba(245,158,158,0.4)] lg:hidden" />

        <motion.div 
          onClick={onClick}
          whileHover={{ y: -5, scale: 1.01 }}
          className="w-full relative cursor-pointer"
        >
          {/* Main Card */}
          <div className="relative glass-card p-6 md:p-10 rounded-[2.5rem] border-white/40 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-3xl overflow-hidden transition-all duration-500 group-hover:border-brand-500/40 group-hover:shadow-[0_40px_80px_-20px_rgba(245,158,158,0.15)]">
            
            {/* Header: Icon & Date */}
            <div className="flex items-center justify-between mb-8 sm:mb-12">
               <div className={cn(
                 "w-14 h-14 rounded-3xl flex items-center justify-center bg-gradient-to-br shadow-2xl shadow-brand-500/20",
                 item.color
               )}>
                 <item.icon className="w-7 h-7 text-white" />
               </div>
               
               <div className="flex flex-col items-end">
                  <span className="text-[10px] sm:text-[11px] font-black font-inter text-brand-500 uppercase tracking-[0.3em] mb-1">
                    {item.date}
                  </span>
                  <div className="h-px w-8 bg-brand-500/30" />
               </div>
            </div>

            {/* Content Body */}
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-600/60 block">Academic Level</span>
              <h3 className="text-2xl sm:text-4xl font-bold font-outfit text-[#1a0a0a] dark:text-white leading-tight italic">
                {item.level}
              </h3>
              
              <div className="flex flex-col gap-1.5 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-600/60 block">Institution</span>
                <p className="text-sm sm:text-lg font-medium text-[#1a0a0a]/70 dark:text-white/70 font-inter">
                  {item.institution}
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-inter line-clamp-2 pt-4 border-t border-brand-500/5 mt-6">
                {item.description}
              </p>
            </div>

            {/* Footer: Grade & Interaction */}
            <div className="flex items-center justify-between mt-10 sm:mt-12">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-brand-500/10 flex items-center justify-center">
                    <Star size={14} className="text-brand-500 fill-brand-500" />
                 </div>
                 <span className="text-lg sm:text-xl font-black font-outfit text-brand-600 tracking-tight">
                    {item.gpa}
                 </span>
               </div>

               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1a0a0a]/40 dark:text-white/30 group-hover:text-brand-500 transition-colors">
                  Details
                  <motion.span 
                    animate={{ x: [0, 5, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    &rarr;
                  </motion.span>
               </div>
            </div>

            {/* Background Aesthetic Detail */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} opacity-[0.03] blur-[100px] pointer-events-none`} />
          </div>

          {/* Exterior Index Number (Stealthy) */}
          <div className={cn(
            "absolute -top-10 text-[120px] font-black text-[#1a0a0a]/[0.02] dark:text-white/[0.01] pointer-events-none select-none z-0",
            isEven ? "right-10" : "left-10"
          )}>
            0{index + 1}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
