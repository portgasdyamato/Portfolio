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
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[500px] h-full pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 500 1200" preserveAspectRatio="none">
          <motion.path
            d="M 250 0 C 250 0, 100 200, 100 400 C 100 600, 400 800, 400 1000 C 400 1200, 250 1200, 250 1200"
            fill="none"
            stroke="rgba(124, 58, 237, 0.2)" /* Purple-500/20 */
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M 250 0 C 250 0, 100 200, 100 400 C 100 600, 400 800, 400 1000 C 400 1200, 250 1200, 250 1200"
            fill="none"
            stroke="#9333ea" /* Purple-600 */
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
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

      <div className="relative z-10 flex flex-col gap-32 md:gap-48 px-4 md:px-0 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <JourneyCard 
            key={index} 
            item={item} 
            index={index} 
            total={items.length} 
            onClick={() => onCardClick(index)}
          />
        ))}
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

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const xOffset = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -50 : 50, 0])
  
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className={cn(
        "flex items-center w-full",
        isEven ? "md:justify-start" : "md:justify-end"
      )}
    >
      <div className={cn(
        "relative flex w-full md:w-[45%] pl-16 md:pl-0",
        isEven ? "md:pr-12" : "md:pl-12 md:flex-row-reverse"
      )}>
        {/* Node/Marker */}
        <div className="absolute left-6 md:left-auto md:right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.5)] z-20 hidden md:block"
             style={isEven ? { right: '-8px' } : { left: '-8px', right: 'auto' }}
        >
           <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-75" />
        </div>
        
        {/* Mobile Marker */}
        <div className="absolute left-[28px] top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full z-20 md:hidden border-2 border-background" />

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
