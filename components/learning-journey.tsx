"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
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
          whileHover={{ y: -8, scale: 1.02 }}
          className="w-full relative cursor-pointer"
        >
          {/* Main Card - High Contrast & Premium Elevation */}
          <div className="relative bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-[3.5rem] border border-black/[0.03] dark:border-white/5 transition-all duration-500 group-hover:border-brand-500/30 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_45px_100px_-25px_rgba(0,0,0,0.15),0_15px_30px_-15px_rgba(0,0,0,0.1)]">
            
            {/* Index Number (Oversized & Light) */}
            <div className={cn(
              "absolute -top-12 text-[160px] font-black text-black/[0.02] dark:text-white/[0.01] pointer-events-none select-none italic font-outfit",
              isEven ? "right-16" : "left-16"
            )}>
              0{index + 1}
            </div>

            {/* Header: Icon & Date */}
            <div className="flex items-center justify-between mb-12 relative z-10">
               <div className={cn(
                 "w-16 h-16 rounded-[1.8rem] flex items-center justify-center bg-[#FFF5F5]/50 dark:bg-white/5 border border-brand-500/10 shadow-sm group-hover:bg-brand-500 group-hover:shadow-[0_10px_20px_-8px_rgba(245,158,158,0.5)] transition-all duration-500 transform group-hover:-rotate-12",
                 item.color
               )}>
                 <item.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
               </div>
               
               <div className="flex flex-col items-end">
                  <span className="text-[11px] font-black font-inter text-brand-500/60 uppercase tracking-[0.4em] mb-1 group-hover:text-brand-500 transition-colors">
                    {item.date}
                  </span>
                  <div className="h-[2px] w-8 bg-brand-500/10 rounded-full group-hover:w-16 transition-all duration-700" />
               </div>
            </div>

            {/* Content Body */}
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                 <div className="h-1 w-6 bg-brand-500/20 rounded-full group-hover:w-12 transition-all" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600/40">Academic Milestone</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold font-outfit text-[#1a0a0a] dark:text-white leading-[1.1] italic tracking-tighter group-hover:text-brand-600 transition-colors">
                {item.level}
              </h3>
              
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20 dark:text-white/20">Institution</span>
                <p className="text-lg md:text-xl font-medium text-[#1a0a0a]/60 dark:text-white/60 font-inter leading-relaxed">
                  {item.institution}
                </p>
              </div>

              <p className="text-base text-muted-foreground/60 leading-relaxed font-inter line-clamp-2 pt-6 border-t border-black/[0.03] dark:border-white/[0.03] group-hover:text-muted-foreground transition-colors">
                {item.description}
              </p>
            </div>

            {/* Footer: Grade & Interactive */}
            <div className="flex items-center justify-between mt-12 relative z-10">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-brand-500/5 flex items-center justify-center border border-brand-500/10">
                    <Star size={16} className="text-brand-500 fill-brand-500 group-hover:scale-125 transition-transform" />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/20">Cumulative Grade</span>
                    <span className="text-xl md:text-2xl font-black font-outfit text-brand-600 tracking-tight">
                        {item.gpa}
                    </span>
                 </div>
               </div>

               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/30 group-hover:text-brand-500 transition-all">
                  Full Dossier
                  <motion.span 
                    animate={{ x: [0, 6, 0] }} 
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    &rarr;
                  </motion.span>
               </div>
            </div>

            {/* Background Aesthetic Detail */}
            <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden pointer-events-none">
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] blur-[120px] transition-opacity duration-1000`} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
