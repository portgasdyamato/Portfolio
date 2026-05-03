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
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 md:mb-24 gap-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 bg-[#F59E9E]/10 rounded-full text-[11px] font-black mb-8 text-[#F59E9E] uppercase tracking-[0.3em] border border-[#F59E9E]/20">
            Methodology & Insights
          </div>
          <h2 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-medium tracking-[-0.04em] leading-[0.85] text-black/90 dark:text-white/95"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Product Design
            <br />
            <span className="text-[#F59E9E] italic italic-font italic font-light">& Research.</span>
          </h2>
          <p className="mt-12 text-lg md:text-xl text-black/40 dark:text-white/40 max-w-2xl font-inter leading-relaxed font-light">
            An exploration of my product thinking and design decision-making. I bridge the gap between complex user needs and elegant, high-performance interfaces through deep research and strategic logic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <Link href="/work/research/ai-legal-contract" key={study.id}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group cursor-pointer w-full rounded-[2.5rem] bg-white dark:bg-zinc-900 overflow-hidden shadow-[0_20px_50px_rgba(245,158,158,0.1)] hover:shadow-[0_30px_70px_rgba(245,158,158,0.2)] transition-all duration-500 flex flex-col h-full border border-black/5 dark:border-white/5"
            >
              {/* Card Header - Subtle & Clean */}
              <div className="px-8 pt-8 pb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F59E9E]/10 rounded-xl flex items-center justify-center text-[#F59E9E]">
                    <FileText size={20} strokeWidth={2} />
                  </div>
                  <span className="text-[#F59E9E] font-bold text-[10px] uppercase tracking-[0.2em] font-inter">Case Study</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E9E]/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F59E9E]/40" />
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 px-8 pb-8 flex flex-col">
                <div className="inline-block self-start px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[10px] font-bold mb-4 text-black/40 dark:text-white/40 uppercase tracking-widest border border-black/5 dark:border-white/5">
                  {study.category}
                </div>
                
                <h3 
                  className="text-3xl md:text-4xl font-bold mb-4 text-black/90 dark:text-white/90 leading-[1.1] transition-colors group-hover:text-[#F59E9E]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {study.title}
                </h3>
                
                <p className="text-black/50 dark:text-white/50 font-inter text-sm leading-relaxed mb-8 flex-1">
                  {study.description}
                </p>

                {/* Bottom Bar - Interactive feeling */}
                <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5">
                  <span className="text-[11px] font-bold text-[#F59E9E] uppercase tracking-wider">View Full Research</span>
                  <div className="w-8 h-8 rounded-full bg-[#F59E9E]/10 flex items-center justify-center text-[#F59E9E] group-hover:bg-[#F59E9E] group-hover:text-white transition-all duration-300">
                    <ArrowLeft size={14} className="rotate-180" strokeWidth={3} />
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
