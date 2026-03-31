"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Figma, ChevronLeft, ChevronRight, Zap, Play, Info, ExternalLink } from "lucide-react"

const ARTIFACTS = [
  {
    name: "Spotify Experience Redesign",
    type: "Desktop Modal Protocol",
    description: "A cinematic reimagining of the Spotify desktop player, focusing on immersive modal transitions and glassmorphic UI depth.",
    url: "https://embed.figma.com/proto/9HGoM1V4IJ4v3rScyL4CqG/Spotify-Modal-Pop-Up--Redesign-?node-id=1-1532&scaling=scale-down-to-fit&content-scaling=fixed&page-id=0%3A1&embed-host=share",
    aspect: "aspect-[1.25/1]",
    width: "max-w-lg md:max-w-xl"
  },
  {
    name: "Kinetic UI Card",
    type: "Advanced Interaction Study",
    description: "An exploration of fluid layout shifts, elegantly transitioning between high-impact titles and descriptive layers.",
    url: "https://embed.figma.com/proto/SvtspfTdkmo95Hs4LA5JJc/Interactive-Card-with-Animation?node-id=1-69&p=f&scaling=scale-down-to-fit&content-scaling=fixed&page-id=0%3A1&embed-host=share",
    aspect: "aspect-[1.3/1]",
    width: "max-w-lg md:max-w-xl"
  },
  {
    name: "Interactive Flip Cards",
    type: "Micro-Interaction Lab",
    description: "A high-fidelity prototype exploring physical drag-and-flip mechanics and depth layers for mobile navigation.",
    url: "https://embed.figma.com/proto/As39bcQnDyAGkBN1hIbvwB/Untitled?node-id=1-82&scaling=scale-down-to-fit&content-scaling=fixed&page-id=0%3A1&embed-host=share",
    aspect: "aspect-[3/4.5]",
    width: "max-w-xs md:max-w-sm"
  }
]

export default function FigmaShowcase() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + ARTIFACTS.length) % ARTIFACTS.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "20%" : "-20%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)"
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "20%" : "-20%",
      opacity: 0,
      scale: 0.95,
      filter: "blur(4px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: 0.4 }
      }
    })
  }

  return (
    <section className="pt-0 pb-24 md:pb-40 relative overflow-visible" id="design-artifacts">
      {/* ── Immersive Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 50, 0],
            y: [0, 30, -30, 0],
            rotate: [360, 270, 180, 90, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#F59E9E]/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center relative z-10">
        {/* Header - Super Minimalist & Elegant */}
        <div className="flex flex-col items-center mb-16 md:mb-28 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-5 py-2 bg-white/5 border border-black/[0.03] dark:border-white/5 rounded-full shadow-sm backdrop-blur-md"
          >
            <div className="relative">
              <Figma size={14} className="text-[#F24E1E] relative z-10" />
              <div className="absolute inset-0 bg-[#F24E1E]/20 blur-sm animate-pulse" />
            </div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-foreground/50">
              Creative Lab
            </span>
          </motion.div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-8xl font-black font-outfit uppercase tracking-tighter text-foreground text-center mb-0 leading-[0.85]">
              Figma Design <br className="md:hidden" />
              <span className="text-foreground/10 font-serif italic font-medium ml-0 md:ml-4">Artifacts</span>
            </h2>
            {/* Subtle Floating Sparkles */}
            <motion.div 
              animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 md:-right-20 text-brand-500/30"
            >
              <Zap size={40} className="md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full flex flex-col items-center min-h-[400px] md:min-h-[550px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants as any}
              initial="enter"
              animate="center"
              exit="exit"
              className={`w-full flex flex-col items-center ${ARTIFACTS[index].width} mx-auto px-4 md:px-0`}
            >
              <div className="w-full flex flex-col items-center group pt-2 md:pt-4">
                {/* Details Above Frame */}
                <div className="flex flex-col items-center text-center mb-14 md:mb-20">
                   <span className="px-3 py-1 bg-brand-500/10 text-brand-500 text-[8px] font-black uppercase tracking-widest rounded-md mb-6">
                     Case Study 0{index + 1}
                   </span>
                   <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6 leading-tight max-w-3xl">
                     {ARTIFACTS[index].name}
                   </h3>
                   <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-500/40 to-transparent mb-8" />
                   <p className="text-sm md:text-lg font-medium text-foreground/50 max-w-3xl leading-relaxed italic px-4 md:px-0 font-serif">
                     "{ARTIFACTS[index].description}"
                   </p>
                </div>

                {/* The Pure Artifact Screen with Frame */}
                <div 
                  className="w-full overflow-hidden relative rounded-[2.5rem] bg-white/[0.02] dark:bg-black/20 border border-black/5 dark:border-white/10 backdrop-blur-xl transition-all duration-700 group-hover:shadow-[0_80px_120px_-30px_rgba(0,0,0,0.2)] md:group-hover:scale-[1.01]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Glassmorphic Top Bar */}
                  <div className="w-full h-12 bg-white/5 border-b border-white/5 flex items-center justify-between px-6 pointer-events-none">
                     <div className="flex gap-1.5 px-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/30" />
                     </div>
                     <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse shadow-[0_0_8px_rgba(245,126,126,0.8)]" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-foreground/20">Live Interactive Protocol</span>
                     </div>
                     <ExternalLink size={12} className="text-foreground/20" />
                  </div>

                  <div className={`w-full ${ARTIFACTS[index].aspect} max-h-[80vh] overflow-hidden relative`}>
                     <iframe 
                      width="100%" 
                      height="100%"
                      src={ARTIFACTS[index].url}
                      allowFullScreen
                      loading="lazy"
                      title={ARTIFACTS[index].name}
                      style={{ border: "none" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls - Refined & Intelligently Positioned */}
          <div className="absolute top-[80%] md:top-[65%] left-0 right-0 flex justify-between pointer-events-none px-2 md:-mx-16 z-50">
            <motion.button 
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="pointer-events-auto h-12 w-12 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-2xl border border-white/10 text-foreground hover:bg-brand-500 hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group/btn"
            >
              <ChevronLeft size={24} className="md:w-10 md:h-10 group-hover/btn:-translate-x-1 transition-transform duration-500" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="pointer-events-auto h-12 w-12 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-2xl border border-white/10 text-foreground hover:bg-brand-500 hover:text-white transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group/btn"
            >
              <ChevronRight size={24} className="md:w-10 md:h-10 group-hover/btn:translate-x-1 transition-transform duration-500" />
            </motion.button>
          </div>
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="flex items-center gap-6 mt-16 md:mt-24">
          <div className="flex gap-2">
            {ARTIFACTS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1)
                  setIndex(i)
                }}
                className={`group relative h-1.5 transition-all duration-700 rounded-full overflow-hidden ${index === i ? 'w-16 bg-brand-500' : 'w-4 bg-foreground/10 hover:bg-foreground/20'}`}
              >
                {index === i && (
                  <motion.div 
                    layoutId="activeProgress"
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-black font-mono tracking-[0.4em] opacity-30 mt-0.5">
            0{index + 1} / 0{ARTIFACTS.length}
          </span>
        </div>
      </div>
    </section>
  )
}
