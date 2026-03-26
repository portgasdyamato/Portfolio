"use client"

import { motion } from "framer-motion"
import { Music, Camera, Coffee, Plane, Heart, Star, Sparkles, BookOpen, Palette, Cat, Tent } from "lucide-react"
import Image from "next/image"

const animals = [
  { name: "Snow Leopard", img: "/anim_1.png", tag: "Majestic" },
  { name: "Red Panda", img: "/anim_2.png", tag: "Adorable" },
  { name: "Ragdoll Cat", img: "/anim_3.png", tag: "Elegant" }
]

const hobbies = [
  { icon: Palette, text: "Oil Painting", x: "10%", y: "20%", size: 80 },
  { icon: Camera, text: "Street Photo", x: "25%", y: "45%", size: 60 },
  { icon: Coffee, text: "Caffeine Enthusiast", x: "40%", y: "15%", size: 70 },
  { icon: Music, text: "Experimental Jazz", x: "65%", y: "40%", size: 90 },
  { icon: Tent, text: "Slow Camping", x: "75%", y: "10%", size: 65 },
  { icon: BookOpen, text: "Curating Magazines", x: "82%", y: "55%", size: 75 },
]

export default function FunFacts() {
  return (
    <div className="py-12 flex flex-col gap-24">
      {/* ── Favorite Animals (The Trio) ── */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <h3 className="text-[40px] sm:text-[60px] font-bold italic text-[#1a0a0a] leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              My Favorite Trio.
            </h3>
            <p className="text-muted-foreground text-lg mt-4 font-inter leading-relaxed">
              Creatures that reflect my calm but creative energy — there's something about their quiet elegance that inspires my design aesthetic.
            </p>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
            {animals.map((anim, i) => (
              <motion.div 
                key={anim.name}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-pink-100/30 border border-[#F59E9E]/10">
                  <Image 
                    src={anim.img} 
                    alt={anim.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-6 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#F59E9E] mb-2 block">{anim.tag}</span>
                    <h4 className="text-xl font-bold font-inter text-[#1a0a0a] uppercase tracking-tighter">{anim.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hobbies: The Fun Facts Galaxy ── */}
      <div className="relative bg-white/40 backdrop-blur-md rounded-[3rem] p-10 md:p-20 border border-white/60 overflow-hidden min-h-[500px] flex flex-col lg:flex-row items-center gap-16 shadow-2xl shadow-[#1a0a0a]/[0.02]">
        
        {/* Floating Background Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
           {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3],
                  y: [0, -40, 0]
                }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
                className="absolute text-[#F59E9E]"
                style={{ 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%` 
                }}
              >
                <Sparkles size={10} strokeWidth={1} />
              </motion.div>
           ))}
        </div>

        <div className="z-10 relative flex-1 text-center lg:text-left">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-6">
             <Heart size={10} fill="currentColor" stroke="none" />
             Life Outside Work
           </div>
           <h3 className="text-[40px] md:text-[50px] font-bold italic text-[#1a0a0a] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
             Where I find Balance.
           </h3>
           <p className="text-muted-foreground text-lg max-w-sm mb-12 font-inter leading-relaxed mx-auto lg:ml-0">
             You'll find me exploring the space between structure and chaos — whether it's through the lens of a camera or the evolving textures of oil paint.
           </p>

           <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {["Art Theory", "Slow Travel", "Caffeine-Led"].map(t => (
                <span key={t} className="px-6 py-3 bg-white/80 rounded-2xl border border-white font-bold text-[11px] tracking-widest uppercase text-[#1a0a0a] shadow-sm">
                  {t}
                </span>
              ))}
           </div>
        </div>

        {/* The Galaxy of Hobbies (Desktop) */}
        <div className="relative flex-1 w-full h-[400px] hidden lg:block">
           {hobbies.map((h, i) => (
             <motion.div
               key={h.text}
               animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
               transition={{ 
                 duration: 4 + i, 
                 repeat: Infinity, 
                 ease: "easeInOut",
                 delay: i * 0.5 
               }}
               className="absolute group flex flex-col items-center gap-3 cursor-pointer"
               style={{ left: h.x, top: h.y }}
             >
                <div 
                  className="rounded-full bg-white/60 backdrop-blur-md border border-white shadow-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#F59E9E] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_20px_40px_-10px_rgba(245,158,158,0.4)]"
                  style={{ width: h.size, height: h.size }}
                >
                   <h.icon strokeWidth={1} size={h.size * 0.4} />
                </div>
                <div className="absolute top-full mt-4 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1a0a0a] whitespace-nowrap bg-white px-3 py-1 rounded-full border border-black/5 shadow-sm">
                      {h.text}
                   </span>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Mobile View of Hobbies */}
        <div className="lg:hidden grid grid-cols-2 gap-4 w-full">
           {hobbies.map((h, i) => (
             <motion.div 
               key={h.text} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-8 bg-white/80 rounded-[2rem] border border-white/50 flex flex-col items-center gap-4 text-center shadow-sm"
             >
                <div className="w-12 h-12 rounded-2xl bg-[#F59E9E]/10 flex items-center justify-center text-[#F59E9E]">
                   <h.icon strokeWidth={1.5} size={24} />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1a0a0a]">{h.text}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  )
}
