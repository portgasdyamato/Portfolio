"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Sparkles, Heart, Camera, Coffee, MapPin, Send, AlertCircle } from "lucide-react"

// ── Types for our scrap items ──
type ScrapItem = {
  id: string
  type: "photo" | "note" | "shape" | "stamp" | "image" | "video"
  content: string | JSX.Element
  rotation: number
  x: string // Percentage from left
  y: string // Percentage from top
  zIndex: number
  scale?: number
  caption?: string
  color?: string
}

const INITIAL_ITEMS: ScrapItem[] = [
  {
    id: "bk3-gif",
    type: "image",
    content: "/bk3.gif",
    rotation: -8,
    x: "20%",
    y: "18%",
    zIndex: 10,
    scale: 0.6,
  },
  {
    id: "blb-gif",
    type: "image",
    content: "/blb.gif",
    rotation: 5,
    x: "35%",
    y: "12%",
    zIndex: 12,
    scale: 0.5,
  },
  {
    id: "photo-2",
    type: "photo",
    content: "/slpash.gif",
    rotation: 12,
    x: "38%",
    y: "28%",
    zIndex: 11,
    scale: 0.75,
    caption: "Magic in the works",
  },
  {
    id: "bk-gif",
    type: "image",
    content: "/bk.gif",
    rotation: -5,
    x: "15%",
    y: "40%",
    zIndex: 9,
    scale: 0.5,
  },
  {
    id: "deer-gif",
    type: "image",
    content: "/deer.gif",
    rotation: -10,
    x: "22%",
    y: "55%",
    zIndex: 8,
    scale: 0.7,
  },
  {
    id: "tot-gif",
    type: "image",
    content: "/tot.gif",
    rotation: -5,
    x: "72%",
    y: "35%",
    zIndex: 100,
    scale: 0.45,
  },
  {
    id: "pot-gif",
    type: "image",
    content: "/pot.gif",
    rotation: 12,
    x: "82%",
    y: "75%",
    zIndex: 5,
    scale: 0.6,
  },
  {
    id: "player-video",
    type: "video",
    content: "/player.mp4",
    rotation: 15,
    x: "50%",
    y: "45%",
    zIndex: 150,
    scale: 0.48,
  },
  {
    id: "note-1",
    type: "note",
    content: "Building dreams, one pixel at a time. ✨",
    rotation: 8,
    x: "78%",
    y: "12%",
    zIndex: 5,
    scale: 0.7,
    color: "#FFF9C4", 
  },
  {
    id: "shape-blob",
    type: "shape",
    content: "mood",
    rotation: -12,
    x: "38%",
    y: "32%",
    zIndex: 2,
    scale: 0.5,
  },
  {
    id: "stamp-1",
    type: "stamp",
    content: "✦ CREATIVE",
    rotation: 20,
    x: "82%",
    y: "50%",
    zIndex: 15,
  },
  {
    id: "note-2",
    type: "note",
    content: "Inspired by the chaos of creativity.",
    rotation: -3,
    x: "65%",
    y: "72%",
    zIndex: 12,
    scale: 0.7,
    color: "#F8BBD0", 
  },
  {
    id: "map-pin",
    type: "shape",
    content: "location",
    rotation: 0,
    x: "50%",
    y: "88%",
    zIndex: 20,
  },
]

const NEGATIVE_WORDS = [
  'hate', 'bad', 'stupid', 'ugly', 'dumb', 'idiot', 'useless', 'worthless',
  'fuck', 'shit', 'bitch', 'asshole', 'kill', 'die', 'death', 'horrible',
  'terrible', 'worst', 'poor', 'trash', 'garbage', 'disgusting', 'negative',
  'evil', 'failure', 'broken'
];

export default function Scrapbook() {
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [items, setItems] = useState<ScrapItem[]>(INITIAL_ITEMS)
  const [inputValue, setInputValue] = useState("")
  const [showError, setShowError] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    setIsMounted(true)
    const fetchNotes = async () => {
      try {
        const res = await fetch("/api/scrapbook-notes")
        const data = await res.json()
        if (data.notes) {
          // Normalize coordinates if coming from DB (removing % if present before merge)
          const dbNotes = data.notes.map((n: any) => ({
            ...n,
            type: "note" as const,
            zIndex: 30,
            scale: 0.85,
          }))
          setItems([...INITIAL_ITEMS, ...dbNotes])
        }
      } catch (e) {
        console.error("Failed to load notes", e)
      }
    }
    fetchNotes()
  }, [])

  const handlePlayerHover = (isHovering: boolean) => {
    if (!audioRef.current || !videoRef.current) return
    if (isHovering) {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e))
      videoRef.current.play().catch(e => console.log("Video play blocked by browser:", e))
    } else {
      audioRef.current.pause()
      videoRef.current.pause()
    }
  }

  const handleAddMessage = async () => {
    if (!inputValue.trim()) return

    const lowerMessage = inputValue.toLowerCase()
    const isNegative = NEGATIVE_WORDS.some(word => lowerMessage.includes(word))

    if (isNegative) {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000)
    } else {
      const newItem: ScrapItem = {
        id: `user-note-${Date.now()}`,
        type: "note",
        content: inputValue,
        rotation: (Math.random() - 0.5) * 20,
        x: `${20 + Math.random() * 60}%`, // Wider spread to avoid main center gif
        y: `${30 + Math.random() * 40}%`,
        zIndex: 30,
        scale: 0.85,
        color: ["#E1F5FE", "#E8F5E9", "#FFF3E0", "#F3E5F5"][Math.floor(Math.random() * 4)],
      }

      setItems(prev => [...prev, newItem])
      setInputValue("")

      // Persist to DB
      try {
        await fetch("/api/scrapbook-notes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        })
      } catch (e) {
        console.error("Failed to save note", e)
      }
    }
  }

  return (
    <section ref={containerRef} className="relative w-full h-[110vh] md:h-[130vh] py-20 overflow-hidden bg-transparent select-none">
      {/* Ambient Audio Element */}
      <audio ref={audioRef} src="/pippo.mpeg" loop />

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-500/[0.03] blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col">
        {!isMounted ? null : (
          <>
            {/* Title */}
            <div className="flex flex-col items-center justify-center text-center mb-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-4"
          >
            <Camera size={12} fill="currentColor" strokeWidth={0} />
            The Scrapbook
          </motion.div>
          <h2 className="text-[32px] md:text-[45px] lg:text-[55px] font-bold italic text-[#1a0a0a] leading-[1.2] tracking-tight" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            Fragments of <span className="text-[#F59E9E]">Caffeine</span> <br className="hidden md:block" /> & Pure <span className="text-black/30">Imagination.</span>
          </h2>
        </div>

        {/* Input Field */}
        <div className="max-w-md mx-auto mb-16 relative z-[100] w-full px-2">
          <div className="relative group shadow-lg rounded-full">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddMessage()}
              placeholder="Leave a sweet note..."
              className="w-full bg-white/90 backdrop-blur-3xl border border-black/5 rounded-full px-6 py-4 pr-16 text-[#1a0a0a] placeholder:text-[#1a0a0a]/30 focus:outline-none focus:ring-4 focus:ring-brand-500/5 transition-all font-medium text-xs md:text-sm"
            />
            <button 
              onClick={handleAddMessage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1a0a0a] text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <Send size={15} />
            </button>
          </div>
          
          <AnimatePresence>
            {showError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                animate={{ opacity: 1, scale: 1, y: 20, x: "-50%" }}
                exit={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                className="absolute left-1/2 top-full bg-[#1a0a0a] text-white px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl whitespace-nowrap z-[101] border border-white/10"
              >
                <AlertCircle size={14} className="text-[#F59E9E]" />
                <span className="text-[9px] font-black tracking-widest uppercase">No negative energy! ✨</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

          <div className="relative flex-1 w-full max-w-7xl mx-auto min-h-[450px]">
            <AnimatePresence>
              {items.map((item) => (
                <ScrapWrapper 
                  key={item.id} 
                  item={item} 
                  progress={scrollYProgress} 
                  onHoverChange={item.id === 'player-video' ? handlePlayerHover : undefined}
                  videoRef={item.id === 'player-video' ? videoRef : undefined}
                />
              ))}
            </AnimatePresence>
          </div>
          </>
        )}
      </div>
    </section>
  )
}

function ScrapWrapper({ 
  item, 
  progress, 
  onHoverChange,
  videoRef
}: { 
  item: ScrapItem; 
  progress: any; 
  onHoverChange?: (isHovering: boolean) => void;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}) {
  const isLeft = parseFloat(item.x) < 50
  // Reduced shift range for better containment
  const yShift = useTransform(progress, [0, 1], [isLeft ? -30 : 30, isLeft ? 30 : -30])
  const rotationShift = useTransform(progress, [0, 1], [-item.rotation, item.rotation])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
      drag={item.type === "note"} // Make notes draggable
      dragMomentum={false}
      animate={{ 
        opacity: 1, 
        scale: item.scale || 1, 
        rotate: item.rotation,
      }}
      style={{
        left: item.x,
        top: item.y,
        zIndex: item.zIndex,
        y: yShift,
        rotate: rotationShift,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className={`absolute w-fit h-fit transform-gpu origin-center ${item.type === "note" ? "cursor-grab active:cursor-grabbing" : ""}`}
      whileHover={{ scale: (item.scale || 1) * 1.08, zIndex: 200 }} // Move to forward layers on hover
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 30,
        layout: { duration: 0.3 }
      }}
    >
      {item.type === "photo" && (
        <div className="bg-white p-2 md:p-2.5 pb-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] rounded-3xl border border-black/5 whitespace-nowrap overflow-hidden">
          <div className="relative w-[120px] md:w-[180px] aspect-[4/5] overflow-hidden grayscale-[0.3] hover:grayscale-0 transition-all duration-700 rounded-2xl">
            <Image
              src={item.content as string}
              alt="Moment"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          {item.caption && (
            <p className="mt-3 text-center font-handwriting text-[#1a0a0a]/50 text-[9px] md:text-[10px] italic" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              {item.caption}
            </p>
          )}
        </div>
      )}

      {item.type === "image" && (
        <div 
          className="relative w-[180px] md:w-[350px] max-w-[85vw] opacity-90 transition-opacity"
          style={(item.id === 'tot-gif' || item.id === 'tot2-gif') ? { mixBlendMode: 'multiply' } : {}}
        >
           <img 
              src={item.content as string} 
              alt="Floating Scrap" 
              className="w-full h-auto object-contain drop-shadow-[10px_10px_30px_rgba(0,0,0,0.05)]" 
           />
        </div>
      )}
      
      {item.type === "video" && (
        <div className="relative w-[300px] md:w-[480px] max-w-[90vw] overflow-hidden rounded-2xl shadow-2xl bg-black/5 aspect-[16/10]">
          <video
            ref={videoRef}
            src={item.content as string}
            muted
            loop
            playsInline
            className="w-full h-full object-cover rotate-90"
          />
        </div>
      )}

      {item.type === "note" && (
        <div
          style={{ 
            backgroundColor: item.color,
            boxShadow: "2px 5px 15px rgba(0,0,0,0.08), inset 0 0 40px rgba(0,0,0,0.02)"
          }}
          className="p-5 md:p-6 w-[160px] md:w-[230px] rounded-sm relative overflow-hidden group/note border-t border-white/40 pt-10"
        >
          {/* Notebook Spiral - Real world inspired detail */}
          <div className="absolute top-2 left-0 right-0 flex justify-center gap-3 px-4 opacity-30">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-black/40 shadow-inner" />
                <div className="w-0.5 h-3 bg-black/20" />
              </div>
            ))}
          </div>

          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          
          {/* Folded Corner Effect */}
          <div className="absolute top-0 right-0 w-6 h-6 bg-black/5 clip-path-fold origin-top-right transition-transform group-hover/note:scale-110" />
          
          {/* Content with Handwriting Font */}
          <p 
            className="text-[#1a0a0a]/80 font-medium leading-relaxed tracking-tight text-[11px] md:text-[13px] relative z-10 italic"
            style={{ 
              fontFamily: "'Libre Baskerville', serif",
              lineHeight: "1.6"
            }}
          >
            "{item.content}"
          </p>
          
          {/* Subtle Sparkle Indicator for the note */}
          <div className="absolute bottom-2 right-2 opacity-0 group-hover/note:opacity-100 transition-opacity">
            <Sparkles size={10} className="text-[#1a0a0a]/20" />
          </div>
        </div>
      )}

      {item.type === "stamp" && (
        <div className="px-4 py-2 border-2 border-dashed border-[#F59E9E]/20 rounded-full flex items-center justify-center bg-transparent">
          <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em] text-[#F59E9E]/60 uppercase whitespace-nowrap">
            {item.content}
          </span>
        </div>
      )}

      {item.type === "shape" && (
        <div className="transform-gpu">
           {item.content === "mood" && <MorphingBlob />}
           {item.content === "location" && <LocationTag />}
        </div>
      )}
    </motion.div>
  )
}

function MorphingBlob() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 50% 40% 50%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="w-20 h-20 md:w-32 md:h-32 bg-brand-500/[0.04] border border-brand-500/10 backdrop-blur-sm flex items-center justify-center relative"
    >
      <motion.span 
        animate={{ rotate: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="text-2xl md:text-3xl opacity-30"
      >
        ✨
      </motion.span>
    </motion.div>
  )
}

function LocationTag() {
  return (
    <div className="flex items-center gap-2 bg-white/40 backdrop-blur-3xl border border-black/5 px-3 py-2 rounded-xl shadow-lg">
      <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white shadow shadow-brand-600/20">
        <MapPin size={12} />
      </div>
      <div className="flex flex-col">
        <span className="text-[7px] font-black uppercase tracking-widest text-brand-600">Location</span>
        <span className="text-[10px] font-bold text-[#1a0a0a]/70 whitespace-nowrap">Planet Earth</span>
      </div>
    </div>
  )
}
