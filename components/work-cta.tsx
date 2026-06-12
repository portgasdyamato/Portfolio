"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Zap, Palette, Code2, Users, ArrowUpRight } from "lucide-react"

const FEATURES = [
  { icon: Palette,    label: "Product Design" },
  { icon: Code2,      label: "Design Engineering" },
  { icon: Zap,        label: "AI Solutions" },
  { icon: Users,      label: "Human Centered" },
]

const CARDS = [
  {
    id: 1,
    rotate: 6, // Clockwise
    x: 60,
    y: -115,
    z: 10,
    image: "/card1.png"
  },
  {
    id: 2,
    rotate: 4, // Clockwise
    x: -50,
    y: -10,
    z: 20,
    image: "/card2.png"
  },
  {
    id: 3,
    rotate: 8, // Clockwise
    x: 50,
    y: 75,
    z: 30,
    image: "/card3.png"
  }
]

function QuoteDoodle() {
  return (
    <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 flex items-center gap-2 pointer-events-none rotate-[-4deg] z-50">
      <p className="text-right text-[12px] md:text-[14px] italic text-[#FF7A8A] leading-tight font-semibold tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
        Design that solves.<br/>
        Experiences that scale.<span className="inline-block ml-0.5 text-[#FF7A8A] text-[10px]">✦</span>
      </p>
    </div>
  )
}

function BackgroundPath() {
  return (
    <svg
      className="absolute inset-y-0 w-screen left-1/2 -translate-x-1/2 pointer-events-none overflow-visible"
      viewBox="0 0 1000 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      {/* Swooping curved line */}
      <path
        d="M -300 405 Q 300 155 600 305 T 1300 155"
        stroke="#FF7A8A"
        strokeWidth="1.2"
        opacity="0.3"
      />
    </svg>
  )
}

export default function WorkCta() {
  return (
    <section className="w-full flex justify-center items-center py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
      `}} />
      <div className="w-full max-w-[1100px] relative flex flex-col lg:flex-row">
        <BackgroundPath />

        <div className="grid grid-cols-1 lg:grid-cols-2 w-full relative z-20 gap-10 lg:gap-0">
          
          {/* ════════════════════════════════════
              LEFT COLUMN — Copy & CTA
          ════════════════════════════════════ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center p-5 sm:p-8 md:p-10 lg:p-12 lg:pr-6 h-full z-20 w-full max-w-3xl mx-auto lg:mx-0">
            
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7A8A]/10 rounded-full text-[#FF7A8A] font-black tracking-[0.2em] uppercase text-[9px] mb-6 self-center lg:self-start"
            >
              <Zap size={11} className="text-[#FF7A8A]" fill="currentColor" strokeWidth={0} />
              <span className="leading-none">
                Explore My Work
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[34px] sm:text-[40px] lg:text-[50px] font-bold italic leading-[1.1] tracking-tight text-[#111111]"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              See Ideas <span className="font-medium text-[#FF7A8A]">Turn</span>
              <br />
              Into Products<span className="text-[#FF7A8A]">.</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="mt-4 lg:mt-5 text-[14px] text-zinc-500 leading-[1.6] max-w-[480px]"
            >
              Explore case studies, AI-native product experiences, design systems, and frontend builds crafted from research to real-world execution.
            </motion.p>

            {/* Primary CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-8 mb-10 inline-block self-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111111] text-white rounded-full font-medium text-[13px] tracking-wide shadow-xl hover:bg-zinc-800 transition-colors"
                >
                  Work Page
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </Link>
              </motion.button>
            </motion.div>

            {/* Divider + Features row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-black/[0.04] w-full"
            >
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#FF7A8A] uppercase mb-4">
                What You'll Find
              </p>
              <div className="flex items-start justify-center lg:justify-between w-full gap-2 sm:gap-6 lg:gap-4 flex-wrap lg:flex-nowrap">
                {FEATURES.map(({ icon: Icon, label }, i) => (
                  <div key={label} className="flex items-stretch flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1"
                    >
                      {/* Icon circle - aligned at top */}
                      <div className="w-10 h-10 rounded-full bg-white shadow-[0_5px_10px_rgba(0,0,0,0.16)] flex items-center justify-center mb-3">
                        <Icon size={16} strokeWidth={1.5} className="text-[#FF7A8A]" />
                      </div>
                      {/* Text label - top-aligned, starting at same baseline */}
                      <span className="text-[10px] font-medium text-zinc-500 leading-tight max-w-[80px]">
                        {label}
                      </span>
                    </motion.div>
                    
                    {/* Vertical Divider centered vertically relative to the icons */}
                    {i < FEATURES.length - 1 && (
                      <div className="hidden sm:block w-[1px] h-8 bg-black/[0.06] self-start mt-1 mx-2 lg:mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ════════════════════════════════════
              RIGHT COLUMN / BOTTOM ROW
              Floating Card Deck (All Screens)
          ════════════════════════════════════ */}
          <div className="flex relative items-center justify-center min-h-[400px] lg:min-h-[500px] w-full pointer-events-none mt-[-2rem] lg:mt-0 z-10">
            
            <QuoteDoodle />

            {/* Circular Ring around the cards */}
            {/* Circular Ring around the cards */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible z-0 -translate-x-2 sm:-translate-x-10 lg:-translate-x-14 scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-center">
              <svg
                className="w-[620px] h-[400px] opacity-95"
                viewBox="0 0 620 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A8A" stopOpacity="0.1" />
                    <stop offset="30%" stopColor="#FF7A8A" stopOpacity="0.5" />
                    <stop offset="70%" stopColor="#FF7A8A" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF7A8A" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Primary Tilted Ellipse (wider and thicker stroke) */}
                <ellipse
                  cx="310"
                  cy="200"
                  rx="285"
                  ry="130"
                  transform="rotate(-12, 310, 200)"
                  stroke="url(#ringGrad)"
                  strokeWidth="2.5"
                />
                
                {/* Secondary inner ring for celestial depth */}
                <ellipse
                  cx="310"
                  cy="200"
                  rx="280"
                  ry="125"
                  transform="rotate(-12, 310, 200)"
                  stroke="#FF7A8A"
                  strokeWidth="1"
                  strokeDasharray="4 8"
                  opacity="0.25"
                />

                {/* Left Sparkle */}
                <g transform="translate(31, 259)">
                  <path d="M 0,-7 C 0,-1.8 1.8,0 7,0 C 1.8,0 0,1.8 0,7 C 0,1.8 -1.8,0 -7,0 C -1.8,0 0,-1.8 0,-7 Z" fill="#FF7A8A" />
                  <circle cx="0" cy="0" r="10" stroke="#FF7A8A" strokeWidth="0.5" opacity="0.3" fill="none" />
                </g>

                {/* Right Sparkle in Pink Circle */}
                <g transform="translate(589, 141)">
                  <circle cx="0" cy="0" r="12" fill="#FF7A8A" />
                  <path d="M 0,-5 C 0,-1.2 1.2,0 5,0 C 1.2,0 0,1.2 0,5 C 0,1.2 -1.2,0 -5,0 C -1.2,0 0,-1.2 0,-5 Z" fill="white" />
                </g>

                {/* Top-Right Decorative Mini Sparkle */}
                <g transform="translate(485, 100)" opacity="0.7">
                  <path d="M 0,-4 C 0,-1 1,0 4,0 C 1,0 0,1 0,4 C 0,1 -1,0 -4,0 C -1,0 0,-1 0,-4 Z" fill="#FF7A8A" />
                </g>
              </svg>
            </div>

            {/* Wrapper to handle translate-x and translate-y without Framer Motion override */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 -translate-x-2 sm:-translate-x-10 lg:-translate-x-14 -translate-y-4 sm:-translate-y-6 lg:-translate-y-8 scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-center">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative w-full h-full flex items-center justify-center pointer-events-auto"
                style={{ perspective: "1000px" }}
              >
                {CARDS.map((card) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.8, rotate: card.rotate, rotateX: 6, rotateY: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: card.rotate, rotateX: 6, rotateY: -10 }}
                    whileHover={{ scale: 1.04, rotate: 0, rotateX: 0, rotateY: 0, zIndex: 50 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute group shadow-2xl rounded-[20px]"
                    style={{
                      width: "340px",
                      left: `calc(50% + ${card.x}px - 170px)`,
                      top: `calc(50% + ${card.y}px - 105px)`,
                      zIndex: card.z,
                      cursor: "pointer",
                    }}
                  >
                    <Link href="/work" className="block w-full h-auto relative">
                      <img 
                        src={card.image} 
                        alt={`Case Study ${card.id}`} 
                        className="w-full h-auto rounded-[20px] object-contain"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
