"use client"

import { useRef, useMemo, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

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

  // Smooth out the progress for the path drawing
  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={containerRef} className="relative w-full py-20 overflow-hidden">
      {/* Central Curved Path - Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[600px] h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 600 1400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0" />
              <stop offset="15%" stopColor="#9333ea" stopOpacity="1" />
              <stop offset="85%" stopColor="#9333ea" stopOpacity="1" />
              <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
            </linearGradient>
            <marker id="markerArrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
               <polygon points="0 0, 10 3.5, 0 7" fill="#9333ea" />
            </marker>
          </defs>
          
          {/* Background Path (Dashed) */}
          <path
            d="M 300 0 C 300 0, 50 300, 50 500 C 50 800, 550 900, 550 1100 C 550 1300, 300 1400, 300 1400"
            fill="none"
            stroke="rgba(124, 58, 237, 0.15)"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          
          {/* Animated Progress Path */}
          <motion.path
            d="M 300 0 C 300 0, 50 300, 50 500 C 50 800, 550 900, 550 1100 C 550 1300, 300 1400, 300 1400"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            style={{ pathLength: pathProgress }}
          />
        </svg>
      </div>

      {/* Central Straight Line - Mobile */}
      <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-purple-500/20">
        <motion.div 
          className="w-full bg-purple-600 origin-top"
          style={{ scaleY: pathProgress, height: "100%" }}
        />
      </div>

      <div className="relative z-10 flex flex-col gap-32 md:gap-40 px-4 md:px-0 max-w-7xl mx-auto mt-20">
        {items.map((item, index) => (
          <JourneyCard 
            key={index} 
            item={item} 
            index={index} 
            total={items.length} 
            onClick={() => onCardClick(index)}
          />
        ))}
        {/* End Spacer */}
        <div className="h-20" /> 
      </div>
    </div>
  )
}

function JourneyCard({ 
  item, 
  index, 
  total,
  onClick 
}: { 
  item: JourneyItem, 
  index: number, 
  total: number,
  onClick: () => void 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end center"]
  })

  // More dramatic entrance
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className={cn(
        "flex items-center w-full relative",
        isEven ? "md:justify-start" : "md:justify-end"
      )}
    >
      <div className={cn(
        "relative flex w-full md:w-[42%] pl-16 md:pl-0 z-20",
        isEven ? "md:pr-8" : "md:pl-8 md:flex-row-reverse"
      )}>
        
        {/* Desktop Node Marker - Significantly Larger & Animated */}
        <div className={cn(
            "absolute top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.6)] z-30 transition-transform duration-500 hover:scale-110",
            isEven ? "-right-[calc(8%+32px)] xl:-right-[calc(18%+32px)]" : "-left-[calc(8%+32px)] xl:-left-[calc(18%+32px)]"
            // Adjusting position based on curve approximation for 3 items. 
            // Ideally this would follow the path mathematically, but CSS approximation is performant.
            // Simplified positioning to center for better alignment with the new wide curve.
          )}
             style={{ 
               right: isEven ? (index === 0 ? '-140px' : index === 2 ? '-140px' : 'auto') : 'auto',
               left: !isEven ? (index === 1 ? '-140px' : 'auto') : 'auto',
               // Fallback absolute centering if the above manual offsets are tricky
               // Let's rely on the flex container logic and absolute positioning relative to the container center
             }}
        >
             {/* Inner pulsing core */}
             <div className="w-4 h-4 rounded-full bg-purple-600 animate-pulse relative z-10" />
             
             {/* Rotating Ring */}
             <div className="absolute inset-0 border-2 border-purple-400/50 rounded-full border-t-transparent animate-spin duration-3000" />
             
             {/* Icon in Marker */}
             <item.icon className="absolute w-6 h-6 text-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Mobile Marker */}
        <div className="absolute left-[26px] top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full z-20 md:hidden border-2 border-background ring-4 ring-purple-500/20" />

        <div onClick={onClick} className="w-full group cursor-pointer">
           {/* Reusing the glass card design but enhancing it */}
          <div className="glass-card p-6 md:p-8 rounded-[2rem] relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-500/30">
             {/* Gradient Blob */}
             <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />

             <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg shadow-purple-500/10`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold font-inter bg-foreground/5 px-3 py-1 rounded-full text-muted-foreground uppercase tracking-widest">
                  {item.date}
                </span>
             </div>

             <h3 className="text-xl md:text-2xl font-bold font-outfit mb-2 leading-tight uppercase group-hover:text-purple-600 transition-colors">
               {item.level}
             </h3>
             
             <div className="flex items-center gap-2 text-muted-foreground text-sm font-inter mb-4">
                <span>{item.institution}</span>
             </div>

             <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 font-inter">
                {item.description}
             </p>

             <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <span className="text-lg font-black font-outfit text-purple-600">
                  {item.gpa}
                </span>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-purple-500 transition-colors">
                  View Details &rarr;
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
