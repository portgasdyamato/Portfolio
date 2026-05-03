"use client"

import { motion } from "framer-motion"
import { FileText, ArrowLeft } from "lucide-react"
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
      <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24 gap-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F59E9E]/10 rounded-full border border-[#F59E9E]/20">
          <span className="text-[10px] font-black text-[#F59E9E] uppercase tracking-[0.3em]">Methodology & Insights</span>
        </div>
        
        <h2 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.85] flex flex-wrap justify-center items-center gap-x-6 gap-y-2"
        >
          <span 
            className="text-black/90 dark:text-white/95 italic font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Product Design
          </span>
          <span className="text-[#F59E9E] font-bold">& Research.</span>
        </h2>
        
        <p className="mt-4 text-base md:text-lg text-black/40 dark:text-white/40 max-w-2xl font-inter leading-relaxed">
          An exploration of my product thinking and design decision-making, merging deep user research with strategic logic and elegant, high-performance interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((study) => (
          <Link href="/work/research/ai-legal-contract" key={study.id}>
            <motion.div
              whileHover={{ y: -10 }}
              className="group cursor-pointer w-full rounded-[3rem] bg-white dark:bg-zinc-900 overflow-hidden shadow-[0_30px_60px_rgba(245,158,158,0.1)] hover:shadow-[0_40px_80px_rgba(245,158,158,0.2)] transition-all duration-500 flex flex-col h-full border border-[#F59E9E]/10"
            >
              {/* Card Mini-Toolbar - VISUAL ANCHOR TO FULL VIEW */}
              <div className="px-10 pt-10 pb-6">
                <div className="flex items-center justify-between bg-[#F59E9E] rounded-2xl px-6 py-3 shadow-lg shadow-[#F59E9E]/20 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="text-white font-bold text-[9px] uppercase tracking-[0.25em] font-inter">Live Document</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      <Highlighter size={12} strokeWidth={2.5} />
                    </div>
                    <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white">
                      <ZoomIn size={12} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 px-10 pb-10 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 bg-[#F59E9E]/10 rounded-2xl flex items-center justify-center text-[#F59E9E]">
                    <FileText size={20} strokeWidth={2} />
                  </div>
                  <div className="h-[1px] flex-1 bg-[#F59E9E]/10" />
                  <span className="text-black/30 dark:text-white/30 font-bold text-[9px] uppercase tracking-widest">{study.category}</span>
                </div>
                
                <h3 
                  className="text-4xl font-bold mb-5 text-black/90 dark:text-white/90 leading-[1.05] transition-colors group-hover:text-[#F59E9E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {study.title}
                </h3>
                
                <p className="text-black/50 dark:text-white/50 font-inter text-sm leading-relaxed mb-10 flex-1 font-light">
                  {study.description}
                </p>

                {/* Interactive Footer */}
                <div className="flex items-center gap-4 group/btn">
                  <div className="flex-1 h-[1px] bg-[#F59E9E]/10 group-hover/btn:bg-[#F59E9E]/30 transition-colors" />
                  <span className="text-[11px] font-black text-[#F59E9E] uppercase tracking-[0.2em]">Open Research</span>
                  <div className="w-12 h-12 rounded-2xl bg-[#F59E9E]/10 flex items-center justify-center text-[#F59E9E] group-hover:bg-[#F59E9E] group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-500 shadow-sm">
                    <ArrowLeft size={18} className="rotate-180" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
