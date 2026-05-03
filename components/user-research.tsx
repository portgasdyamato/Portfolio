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
              className="group cursor-pointer bg-[#F59E9E]/5 hover:bg-[#F59E9E]/10 border border-[#F59E9E]/20 p-8 rounded-3xl transition-all duration-300 h-full"
            >
              <div className="w-14 h-14 bg-[#F59E9E]/20 rounded-2xl flex items-center justify-center mb-6 text-[#F59E9E]">
                <FileText size={24} strokeWidth={1.5} />
              </div>
              <div className="inline-block px-3 py-1 bg-background rounded-full text-xs font-mono mb-4 text-foreground/60 border border-border">
                {study.category}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-[#F59E9E] transition-colors">
                {study.title}
              </h3>
              <p className="text-foreground/60 font-inter text-sm">
                {study.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  )
}
