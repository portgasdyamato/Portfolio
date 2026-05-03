"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function UserResearch() {

  const caseStudies = [
    {
      id: "ai-legal-contract",
      title: "AI Legal Contract Feature Review",
      category: "Product Design",
      description: "A deep dive into my product thinking, reasoning, and the design decisions behind the AI legal contract feature.",
      pdfUrl: "/AI Legal Contract Reveiw Feature.pdf"
    }
  ]

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-16 gap-6">
        <div>
          <h2 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Product Design
            <br />
            <span className="text-[#F59E9E]">& Research.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/60 dark:text-white/60 max-w-2xl font-inter leading-relaxed">
            Showcasing my product design abilities—how I approach complex problems, my underlying reasoning, and the strategic thinking that drives my designs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Link href="/work/research/ai-legal-contract" key={study.id}>
            <motion.div
              whileHover={{ y: -5 }}
              className="group cursor-pointer w-full rounded-xl border-[3px] border-[#ECA8BA] bg-[#FCEBF0] overflow-hidden shadow-[0_8px_30px_rgba(236,168,186,0.3)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Title Bar */}
              <div className="flex justify-end items-center px-3 py-2 border-b-[3px] border-[#ECA8BA] gap-1.5 bg-[#FCEBF0]">
                {/* Tetris shape */}
                <div className="w-[22px] h-[22px] border-[2.5px] border-[#ECA8BA] flex flex-wrap p-[2px] gap-[2px] bg-white">
                  <div className="w-[4.5px] h-[4.5px] bg-[#ECA8BA]" />
                  <div className="w-[4.5px] h-[4.5px] bg-transparent" />
                  <div className="w-[4.5px] h-[4.5px] bg-[#ECA8BA]" />
                  <div className="w-[4.5px] h-[4.5px] bg-[#ECA8BA]" />
                </div>
                {/* Minus */}
                <div className="w-[22px] h-[22px] border-[2.5px] border-[#ECA8BA] flex items-center justify-center bg-white">
                  <div className="w-2.5 h-[3px] bg-[#ECA8BA]" />
                </div>
                {/* X */}
                <div className="w-[22px] h-[22px] border-[2.5px] border-[#ECA8BA] flex items-center justify-center bg-white relative">
                  <div className="w-[12px] h-[3px] bg-[#ECA8BA] rotate-45 absolute" />
                  <div className="w-[12px] h-[3px] bg-[#ECA8BA] -rotate-45 absolute" />
                </div>
              </div>

              {/* Address Bar */}
              <div className="flex items-center px-3 py-2 border-b-[3px] border-[#ECA8BA] gap-3 bg-[#FCEBF0]">
                {/* Chevron Left */}
                <div className="w-2.5 h-2.5 border-t-[3px] border-r-[3px] border-[#ECA8BA] rotate-45 ml-1" />
                {/* URL Bar */}
                <div className="flex-1 h-5 rounded-full border-[2.5px] border-[#ECA8BA] bg-[#FFF5F7]" />
                {/* Heart */}
                <svg className="w-5 h-5 text-[#ECA8BA] fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>

              {/* Main Body */}
              <div className="flex flex-1 p-3 gap-3 bg-[#FCEBF0]">
                {/* Content Area */}
                <div className="flex-1 bg-[#FFF5F7] rounded-lg border-[3px] border-[#ECA8BA] p-6 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-white transition-colors duration-500">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,_#ECA8BA_1px,_transparent_1px)] bg-[size:12px_12px]" />
                  
                  <FileText size={36} strokeWidth={1.5} className="text-[#ECA8BA] mb-5 group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="inline-block px-3 py-1 bg-[#ECA8BA]/10 rounded-full text-xs font-mono mb-4 text-[#ECA8BA] border border-[#ECA8BA]/30 font-bold uppercase tracking-wider">
                    {study.category}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-center mb-3 text-[#ECA8BA] tracking-tight leading-snug">
                    {study.title}
                  </h3>
                  
                  <p className="text-center text-xs sm:text-sm font-inter text-[#ECA8BA]/80 px-2 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Scrollbar Track */}
                <div className="w-5 flex flex-col py-1 items-center relative">
                  <div className="w-3.5 h-full border-[2.5px] border-[#ECA8BA]/40 rounded-full absolute" />
                  <div className="w-[10px] h-12 sm:h-16 bg-white border-[2.5px] border-[#ECA8BA] rounded-full z-10 mt-1 group-hover:mt-16 transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
