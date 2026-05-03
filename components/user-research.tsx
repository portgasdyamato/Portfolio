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
        <div className="w-full max-w-5xl">
          {caseStudies.map((study) => (
            <Link href="/work/research/ai-legal-contract" key={study.id}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group cursor-pointer w-full rounded-[3.5rem] bg-white dark:bg-zinc-900 overflow-hidden shadow-[0_40px_100px_rgba(245,158,158,0.12)] hover:shadow-[0_50px_120px_rgba(245,158,158,0.2)] transition-all duration-500 border border-[#F59E9E]/10"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left Section - Content */}
                  <div className="flex-1 p-10 md:p-14 flex flex-col justify-between">
                    <div>
                      {/* Mini-Toolbar Anchor */}
                      <div className="inline-flex items-center gap-4 bg-[#F59E9E] rounded-2xl px-5 py-2.5 shadow-lg shadow-[#F59E9E]/20 mb-12">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                          <span className="text-white font-black text-[10px] uppercase tracking-[0.2em] font-inter">Interactive Document</span>
                        </div>
                        <div className="w-px h-3 bg-white/20" />
                        <div className="flex items-center gap-3">
                          <Highlighter size={14} strokeWidth={2.5} className="text-white/80" />
                          <ZoomIn size={14} strokeWidth={2.5} className="text-white/80" />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#F59E9E]/10 rounded-2xl flex items-center justify-center text-[#F59E9E]">
                          <FileText size={24} strokeWidth={2} />
                        </div>
                        <span className="text-[#F59E9E]/40 font-black text-[11px] uppercase tracking-[0.3em] font-inter">
                          {study.category}
                        </span>
                      </div>
                      
                      <h3 
                        className="text-4xl md:text-6xl font-bold mb-6 text-black/90 dark:text-white/95 leading-[1.05] tracking-tight transition-colors group-hover:text-[#F59E9E]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {study.title}
                      </h3>
                      
                      <p className="text-black/40 dark:text-white/40 font-inter text-lg leading-relaxed max-w-xl font-light">
                        {study.description}
                      </p>
                    </div>

                    {/* Branded Footer Link */}
                    <div className="mt-12 flex items-center gap-6 group/link">
                      <span className="text-[12px] font-black text-[#F59E9E] uppercase tracking-[0.3em]">Open Case Study</span>
                      <div className="flex-1 h-px bg-[#F59E9E]/10 group-hover/link:bg-[#F59E9E]/30 transition-colors" />
                      <div className="w-14 h-14 rounded-full bg-[#F59E9E]/10 flex items-center justify-center text-[#F59E9E] group-hover:bg-[#F59E9E] group-hover:text-white group-hover:translate-x-2 transition-all duration-500 shadow-sm">
                        <ArrowLeft size={20} className="rotate-180" strokeWidth={3} />
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Visual Decorative (Optional) */}
                  <div className="hidden lg:flex w-72 bg-[#F59E9E]/5 border-l border-[#F59E9E]/5 items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F59E9E_1px,_transparent_1px)] bg-[size:24px_24px] opacity-[0.07]" />
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <FileText size={120} strokeWidth={0.5} className="text-[#F59E9E]/20" />
                    </motion.div>
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
