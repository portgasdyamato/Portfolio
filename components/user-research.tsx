"use client"

import { motion } from "framer-motion"
import { FileText, ArrowLeft, Highlighter, ZoomIn } from "lucide-react"
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

      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {caseStudies.map((study) => (
            <Link href="/work/research/ai-legal-contract" key={study.id}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group cursor-pointer w-full rounded-[2.5rem] bg-white dark:bg-zinc-900/50 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(245,158,158,0.05)] hover:shadow-[0_30px_70px_rgba(245,158,158,0.12)] transition-all duration-500 border border-[#F59E9E]/10 p-10 md:p-12"
              >
                <div className="flex flex-col h-full items-center text-center">
                  {/* Compact Context Badge */}
                  <div className="inline-flex items-center gap-2.5 bg-[#F59E9E]/5 rounded-full px-4 py-1.5 border border-[#F59E9E]/10 mb-8 group-hover:bg-[#F59E9E]/10 transition-colors">
                    <div className="w-1 h-1 rounded-full bg-[#F59E9E] animate-pulse" />
                    <span className="text-[#F59E9E] font-black text-[8px] uppercase tracking-[0.25em] font-inter">Research Viewer</span>
                    <div className="flex items-center gap-1.5 ml-1.5 border-l border-[#F59E9E]/20 pl-2">
                       <Highlighter size={10} strokeWidth={2.5} className="text-[#F59E9E]/50" />
                       <ZoomIn size={10} strokeWidth={2.5} className="text-[#F59E9E]/50" />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-6 bg-[#F59E9E]/20" />
                    <span className="text-[#F59E9E]/40 font-black text-[9px] uppercase tracking-[0.3em] font-inter">
                      {study.category}
                    </span>
                    <div className="h-px w-6 bg-[#F59E9E]/20" />
                  </div>
                  
                  <h3 
                    className="text-4xl md:text-5xl font-bold mb-6 text-black/90 dark:text-white/95 leading-tight tracking-tight group-hover:text-[#F59E9E] transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {study.title}
                  </h3>
                  
                  <p className="text-black/40 dark:text-white/40 font-inter text-base leading-relaxed max-w-md font-light mb-10">
                    {study.description}
                  </p>

                  {/* Refined Premium Button */}
                  <div className="flex flex-col items-center gap-3 group/btn">
                    <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/20 dark:text-white/20 group-hover:bg-[#F59E9E] group-hover:text-white group-hover:scale-105 transition-all duration-500 shadow-sm border border-black/5 dark:border-white/5">
                      <ArrowLeft size={20} className="rotate-180" strokeWidth={2} />
                    </div>
                    <span className="text-[9px] font-black text-black/20 dark:text-white/20 uppercase tracking-[0.3em] group-hover:text-[#F59E9E] transition-colors">
                      View Full Document
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
