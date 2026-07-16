"use client"

import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon, Hexagon, ChevronRight, ChevronLeft, Star, Sparkles, Heart, BookOpen, GraduationCap } from "lucide-react"
import { useState, type ReactNode } from "react"

interface FolderCardProps {
  items: Array<{
    level: string
    institution: string
    duration: string
    date: string
    icon: LucideIcon
    color: string
    gpa: string
    description: string
    achievements: string[]
  }>
  currentIndex: number
  onNext: (e: React.MouseEvent) => void
  onPrev: (e: React.MouseEvent) => void
  direction?: 'ltr' | 'rtl'
  coverImage?: string
  coverNode?: ReactNode
}

const folderWrapperVariants = {
  rest: { 
    rotateX: 0, 
    rotateY: 0, 
    y: 0, 
    transition: { type: "spring" as const, stiffness: 300, damping: 30 } 
  },
  hover: { 
    rotateX: 4, 
    rotateY: -4, 
    y: -8, 
    transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
  }
};



export function FolderCard({ items, currentIndex, onNext, onPrev, direction = 'ltr', coverImage, coverNode }: FolderCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const isOpen = isHovered;

  return (
    <div 
      className="relative w-[280px] h-[380px] shrink-0"
      style={{ perspective: "1500px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative"
        initial="rest"
        animate={isOpen ? "hover" : "rest"}
        variants={folderWrapperVariants}
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* Back Cover of the Folder (Manila Interior) */}
        <div 
          className={`absolute inset-0 ${direction === 'rtl' ? 'rounded-l-2xl rounded-r-sm' : 'rounded-r-2xl rounded-l-sm'} shadow-2xl pointer-events-none bg-[#f3ebd4] dark:bg-[#2d2a22] overflow-hidden`}
          style={{ transform: "translateZ(-10px)" }} 
        >
          {coverNode
            ? <div className="absolute inset-0 w-full h-full z-0">{coverNode}</div>
            : <img src={coverImage || "/cover.png"} alt="Cover" className={`absolute inset-0 w-full h-full object-fill ${direction === 'ltr' ? 'scale-[1.12]' : 'scale-[1.10]'} opacity-80 z-0`} />
          }
          {/* Back cover vignette */}
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.1)_120%)] pointer-events-none ${direction === 'rtl' ? 'rounded-l-2xl rounded-r-sm scale-[1.10]' : 'rounded-r-2xl rounded-l-sm'}`} />
        </div>
        
        {/* The Internal Files / Documents Stack */}
        <div className="absolute inset-0 pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
            {items.map((item, idx) => {
              const offset = idx - currentIndex;
              
              // Only render the current page, the next 2 pages in stack, and turned pages (offset < 0)
              if (offset > 2) return null;
              
              const isTop = offset === 0;
              const isPast = offset < 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{ 
                    x: isPast ? (direction === 'rtl' ? 250 : -250) : (direction === 'rtl' ? -offset * 2 : offset * 2), 
                    y: isPast ? 0 : (offset * 2), 
                    z: isPast ? 0 : isTop ? (isOpen ? 0.5 : 0.2) : (-offset * 0.1),
                    rotateZ: isPast ? (direction === 'rtl' ? 15 : -15) : isTop ? 0 : (direction === 'rtl' ? -offset * 1 : offset * 1),
                    scale: isPast ? 0.8 : (1 - offset * 0.02),
                    opacity: isPast ? 0 : 1 - (offset * 0.1)
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`absolute inset-y-1 right-1 left-0 bg-white ${direction === 'rtl' ? 'rounded-l-xl rounded-r-sm' : 'rounded-r-xl rounded-l-sm'} shadow-2xl p-6 flex flex-col ${isTop ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'}`}
                  style={{ transformStyle: "preserve-3d", zIndex: items.length - idx, transformOrigin: direction === 'rtl' ? "100% 50%" : "0% 50%" }}
                >
                  {/* Physical Manila Tab */}
                  <div className={`absolute ${direction === 'rtl' ? '-left-[26px] w-[26px] border-r-0 rounded-l-md' : '-right-[26px] w-[26px] border-l-0 rounded-r-md'} top-10 py-4 bg-[#f8f9fa] shadow-[-2px_0_5px_rgba(0,0,0,0.05)_inset,2px_2px_5px_rgba(0,0,0,0.15)] flex items-center justify-center border border-black/10 z-0`}>
                    <span style={{ writingMode: 'vertical-rl' }} className="text-[9px] font-black tracking-[0.2em] text-gray-500 uppercase rotate-180 drop-shadow-sm">
                      DO NOT OPEN
                    </span>
                  </div>
                  
                  {/* Subtle lined paper texture */}
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,#00000005_100%)] bg-[size:100%_24px] pointer-events-none rounded-r-xl" />

                  <div className="flex flex-col relative z-10 h-full">
                     <div className="flex justify-between items-start mb-2">
                       <motion.h3 className="font-bold text-[17px] leading-tight text-[#1a1a1a] pr-2">
                         {item.level}
                       </motion.h3>
                       <span className="text-[9px] font-mono font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-sm border border-brand-100 whitespace-nowrap">{item.duration}</span>
                     </div>
                     
                     <motion.p className="text-[11px] text-gray-500 font-bold mb-3 uppercase tracking-wider">
                       {item.institution}
                     </motion.p>
                     
                     <div className="w-6 h-[2px] bg-brand-200 rounded-full mb-3" />
                     
                     <p className="text-[10px] text-gray-600 font-medium leading-relaxed mb-4">{item.description}</p>
                     
                     <div className="mb-auto">
                       <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mb-1.5">Distinctions</div>
                       <ul className="text-[8.5px] leading-tight text-gray-700 grid grid-cols-2 gap-x-2 gap-y-1.5 list-inside list-disc font-medium">
                         {item.achievements.slice(0, 6).map((ach, i) => (
                           <li key={i} className="pr-1">{ach}</li>
                         ))}
                         {item.achievements.length > 6 && <li className="text-brand-500 font-bold list-none">+{item.achievements.length - 6} more</li>}
                       </ul>
                     </div>
                     
                     <div className="pt-3 border-t border-black/10 mt-4 flex items-end justify-between">
                       <div>
                         <div className="text-[8px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Performance</div>
                         <motion.div className="text-[11px] font-black text-brand-500 whitespace-nowrap pr-2">
                           {item.gpa}
                         </motion.div>
                       </div>
                       
                       <div className="text-[8px] text-gray-400 font-mono font-bold">
                         {item.date}
                       </div>
                     </div>
                  </div>
                </motion.div>
              )
            })}
        </div>

        {/* Navigation Controls (Only visible when hovered to not clutter the resting state, and only if multiple pages exist) */}
        <AnimatePresence>
          {isHovered && items.length > 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50 pointer-events-auto"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); onPrev(e); }}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-colors pointer-events-auto"
                disabled={currentIndex === 0}
                style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); onNext(e); }}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-colors pointer-events-auto"
                disabled={currentIndex === items.length - 1}
                style={{ opacity: currentIndex === items.length - 1 ? 0.3 : 1 }}
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Front Cover of the Folder */}
        <motion.div
          animate={isOpen ? "hover" : "rest"}
          variants={{
            rest: { 
              rotateY: 0, 
              z: 10,
              transition: { type: "spring", stiffness: 220, damping: 25 } 
            },
            hover: { 
              rotateY: direction === 'rtl' ? 140 : -140, 
              z: 10,
              transition: { type: "spring", stiffness: 300, damping: 20, mass: 0.8 } 
            }
          }}
          className="absolute inset-0 pointer-events-none"
          style={{ transformOrigin: direction === 'rtl' ? "100% 50%" : "0% 50%", transformStyle: "preserve-3d", zIndex: 50 }}
        >
             {/* Outside of the Front Cover */}
           <div 
             className={`absolute inset-0 bg-transparent ${direction === 'rtl' ? 'rounded-l-2xl rounded-r-sm shadow-[-5px_0_20px_rgba(0,0,0,0.6)]' : 'rounded-r-2xl rounded-l-sm shadow-[5px_0_20px_rgba(0,0,0,0.6)]'} flex flex-col overflow-hidden`}
             style={{ backfaceVisibility: "hidden" }}
           >
             {coverNode
               ? <div className="absolute inset-0 w-full h-full z-0">{coverNode}</div>
               : <img src={coverImage || "/cover.png"} alt="Cover" className={`absolute inset-0 w-full h-full object-fill ${direction === 'ltr' ? 'scale-[1.12]' : 'scale-[1.10]'} z-0`} />
             }
             
             {/* Vintage Vignette */}
             <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.1)_120%)] pointer-events-none z-0 ${direction === 'rtl' ? 'rounded-l-2xl rounded-r-sm scale-[1.10]' : 'rounded-r-2xl rounded-l-sm'}`} />

             {/* Subtle paper edge shadow */}
             <div className="absolute inset-0 shadow-[inset_-2px_0_12px_rgba(255,255,255,0.03)] pointer-events-none rounded-r-2xl rounded-l-sm z-0" />
           </div>

           {/* Inside of the Front Cover (Manila Interior - Softened Clean Shadows) */}
           <div 
             className={`absolute inset-0 bg-[#f3ebd4] dark:bg-[#2d2a22] ${direction === 'rtl' ? 'rounded-l-2xl rounded-r-sm shadow-[inset_-3px_0_8px_rgba(0,0,0,0.06)]' : 'rounded-r-2xl rounded-l-sm shadow-[inset_3px_0_8px_rgba(0,0,0,0.06)]'} overflow-hidden`}
             style={{ backfaceVisibility: "hidden", transform: `rotateY(180deg) translateZ(1px)` }}
           >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.06)_120%)] pointer-events-none z-0" />
             {/* Spine/Crease detail on the inside - Softened */}
             <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/5 to-transparent pointer-events-none z-0" />
           </div>
        </motion.div>

      </motion.div>
    </div>
  )
}
