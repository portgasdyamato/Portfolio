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

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + ARTIFACTS.length) % ARTIFACTS.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      z: 0,
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "circOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: { duration: 0.5, ease: "circIn" }
    })
  } as any

  return (
    <section className="pt-0 pb-16 md:pb-32 relative overflow-hidden" id="design-artifacts">
      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center">
        {/* Header - Super Minimalist */}
        <div className="flex flex-col items-center mb-16 md:mb-24 gap-4">
          <div className="flex items-center gap-2 opacity-40 text-[9px] md:text-[11px] font-black uppercase tracking-[0.5em] text-foreground/70">
            <Figma size={12} className="text-brand-500" />
            Creative Lab
          </div>
          <h2 className="text-3xl md:text-6xl font-black font-outfit uppercase tracking-tighter text-foreground text-center mb-0 leading-[0.9]">
            Figma Design <span className="text-foreground/20 font-serif italic font-medium">Artifacts</span>
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative w-full flex flex-col items-center min-h-[350px] md:min-h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className={`w-full flex flex-col items-center ${ARTIFACTS[index].width} mx-auto px-4 md:px-0`}
            >
              <div className="w-full flex flex-col items-center group pt-6 md:pt-12">
                {/* Details Above Frame */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-14">
                   <h3 className="text-xl md:text-4xl font-black uppercase tracking-tight text-foreground mb-3 md:mb-4">{ARTIFACTS[index].name}</h3>
                   <div className="w-12 h-[1px] bg-brand-500/30 mb-4 md:mb-6" />
                   <p className="text-xs md:text-base font-medium text-foreground/60 max-w-2xl leading-relaxed italic px-8 md:px-0">
                     {ARTIFACTS[index].description}
                   </p>
                </div>

                {/* The Pure Artifact Screen */}
                <div className="w-full overflow-hidden relative rounded-[2rem] bg-white/5 border border-white/10">
                  <div className={`w-full ${ARTIFACTS[index].aspect} max-h-[75vh] overflow-hidden relative`}>
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

          {/* Controls */}
          <div className="absolute top-[82%] md:top-[60%] -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-1 md:-mx-12 z-50">
            <button 
              onClick={() => paginate(-1)}
              className="pointer-events-auto h-10 w-10 md:h-16 md:w-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/10 text-foreground hover:bg-brand-500 hover:text-white transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] group"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="pointer-events-auto h-10 w-10 md:h-16 md:w-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-xl border border-white/10 text-foreground hover:bg-brand-500 hover:text-white transition-all shadow-xl group"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Minimal Progress Dots */}
        <div className="flex gap-4 mt-8">
          {ARTIFACTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              className={`h-1 transition-all duration-700 rounded-full ${index === i ? 'w-12 bg-brand-500' : 'w-3 bg-foreground/10'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
