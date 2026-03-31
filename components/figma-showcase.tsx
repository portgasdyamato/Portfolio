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
      scale: 0.9,
      filter: "blur(8px)",
      rotateY: direction > 0 ? 10 : -10
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 180,
        damping: 25,
        mass: 1,
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "20%" : "-20%",
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
      rotateY: direction < 0 ? 10 : -10,
      transition: { 
        type: "spring",
        stiffness: 180,
        damping: 25,
        mass: 1,
        opacity: { duration: 0.4 }
      }
    })
  }

  return (
    <section className="pt-0 pb-32 md:pb-48 relative overflow-visible" id="design-artifacts">
      {/* ── Immersive Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 40, -40, 0],
            y: [0, -20, 20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[140px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 40, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#F59E9E]/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center relative z-10">
        {/* Header - Boutique Editorial Lockup */}
        <div className="flex flex-col items-center mb-12 md:mb-20">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="px-5 py-2 bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/5 rounded-full backdrop-blur-xl mb-10 flex items-center gap-3 group shadow-xl transition-all duration-500 hover:border-brand-500/30 hover:bg-white/15"
          >
            <div className="relative flex items-center justify-center">
              <Figma size={14} className="text-[#F24E1E] group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#F24E1E]/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-foreground/60 transition-colors group-hover:text-foreground">Creative Lab</span>
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(245,126,126,0.6)]" />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-brand-500 animate-ping opacity-75" />
            </div>
          </motion.div>
          
          <div className="relative text-center">
            <h2 className="text-4xl md:text-7xl font-bold font-outfit uppercase tracking-tighter text-foreground leading-[0.85] mb-4">
              Figma Design <br className="md:hidden" />
              <span className="text-foreground/5 font-serif italic font-medium ml-0 md:ml-4 select-none">Artifacts</span>
            </h2>
            <div className="flex justify-center items-center gap-6 opacity-30">
               <div className="h-[1px] w-12 bg-foreground" />
               <Zap size={14} />
               <div className="h-[1px] w-12 bg-foreground" />
            </div>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full flex flex-col items-center min-h-[450px] md:min-h-[600px] perspective-[2000px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants as any}
              initial="enter"
              animate="center"
              exit="exit"
              className={`w-full flex flex-col items-center ${ARTIFACTS[index].width} mx-auto px-4 md:px-0`}
              style={{ transformStyle: "preserve-3d" }}
            >
               <div className="w-full flex flex-col items-center group pt-0">
                {/* Details Above Frame - Editorial Space */}
                <div className="relative flex flex-col items-center text-center mb-10 md:mb-14 min-h-[140px] justify-center">
                   <div className="absolute inset-0 bg-white/[0.02] dark:bg-black/[0.02] blur-3xl -z-10 rounded-full scale-150" />
                   
                   <div className="flex items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-brand-500/10 text-brand-500 text-[9px] font-bold uppercase tracking-widest rounded-md border border-brand-500/10">
                        Case Study 0{index + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-foreground/40">{ARTIFACTS[index].type}</span>
                   </div>

                   <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-6 leading-tight max-w-4xl drop-shadow-sm px-2">
                     {ARTIFACTS[index].name}
                   </h3>
                   <div className="w-20 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-500/60 to-transparent mb-8" />
                   <p className="text-sm md:text-lg font-medium text-foreground/50 max-w-4xl leading-relaxed italic px-6 md:px-12 font-serif opacity-80 decoration-brand-500/10 underline underline-offset-8">
                     "{ARTIFACTS[index].description}"
                   </p>
                </div>

                {/* The Pure Artifact Screen with Frame */}
                <div 
                  className="w-full overflow-hidden relative rounded-2xl bg-black transition-all duration-1000 group-hover:shadow-[0_120px_160px_-40px_rgba(0,0,0,0.4)] md:group-hover:scale-[1.02]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Glassmorphic Top Bar - Advanced UI */}
                  <div className="w-full h-14 bg-white/5 flex items-center justify-between px-8 pointer-events-none relative z-20">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-inner opacity-60" />
                        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-inner opacity-60" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-inner opacity-60" />
                     </div>
                     <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse shadow-[0_0_15px_rgba(245,126,126,0.9)]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 font-mono">Interactive Laboratory Prototype</span>
                     </div>
                     <div className="flex items-center gap-4 text-foreground/30">
                        <Play size={14} className="opacity-50" />
                        <div className="w-[1px] h-4 bg-white/10" />
                        <ExternalLink size={14} className="group-hover:text-brand-500 transition-colors" />
                     </div>
                  </div>

                  <div className={`w-full ${ARTIFACTS[index].aspect} h-[70vh] overflow-hidden relative bg-black`}>
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

          {/* Controls - Premium Floating Interaction */}
          <div className="absolute top-[85%] md:top-[65%] left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-20 z-50">
            <motion.button 
              whileHover={{ scale: 1.15, x: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="pointer-events-auto h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-3xl border border-white/10 text-foreground hover:bg-brand-500 hover:text-white transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group/btn"
            >
              <ChevronLeft size={32} className="md:w-12 md:h-12 group-hover/btn:-translate-x-2 transition-transform duration-700 ease-out" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.15, x: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="pointer-events-auto h-14 w-14 md:h-24 md:w-24 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/10 backdrop-blur-3xl border border-white/10 text-foreground hover:bg-brand-500 hover:text-white transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] group/btn"
            >
              <ChevronRight size={32} className="md:w-12 md:h-12 group-hover/btn:translate-x-2 transition-transform duration-700 ease-out" />
            </motion.button>
          </div>
        </div>

        {/* Cinematic Progress Indicator */}
        <div className="flex flex-col md:flex-row items-center gap-8 mt-24 md:mt-32">
          <div className="flex items-center gap-8 bg-white/5 dark:bg-black/20 px-8 py-4 rounded-full backdrop-blur-md border border-white/10">
            <span className="text-[10px] font-black font-mono tracking-[0.5em] text-foreground/40 mt-0.5">0{index + 1}</span>
            <div className="flex gap-3">
              {ARTIFACTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1)
                    setIndex(i)
                  }}
                  className={`group relative h-2 transition-all duration-1000 rounded-full overflow-hidden ${index === i ? 'w-20 bg-brand-500' : 'w-4 bg-foreground/10 hover:bg-foreground/30'}`}
                >
                  {index === i && (
                    <motion.div 
                      layoutId="activeProgress"
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
            <span className="text-[10px] font-black font-mono tracking-[0.5em] text-foreground/40 mt-0.5">0{ARTIFACTS.length}</span>
          </div>
          <div className="flex items-center gap-4 text-foreground/20 font-black tracking-widest text-[9px] uppercase font-mono">
             <div className="w-8 h-[1px] bg-foreground/20" />
             Sequential Artifact Showcase
          </div>
        </div>
      </div>
    </section>
  )
}
