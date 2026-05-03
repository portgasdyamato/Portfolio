"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, X, Maximize2 } from "lucide-react"

export default function UserResearch() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const caseStudies = [
    {
      id: "legal-contract",
      title: "Design Legal Contract Feature",
      category: "User Research",
      description: "Comprehensive user research and findings for the legal contract feature.",
      pdfUrl: "/Decision-First-Legal-Intelligence.pdf"
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
            User Research
            <br />
            <span className="text-[#F59E9E]">Case Studies.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/60 dark:text-white/60 max-w-2xl font-inter leading-relaxed">
            Deep dives into user behavior, feature discovery, and data-driven insights.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedPdf(study.pdfUrl)}
            className="group cursor-pointer bg-[#F59E9E]/5 hover:bg-[#F59E9E]/10 border border-[#F59E9E]/20 p-8 rounded-3xl transition-all duration-300"
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
        ))}
      </div>

      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full max-w-6xl bg-white dark:bg-zinc-950 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col border border-black/10 dark:border-white/10"
            >
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-black/5 dark:border-white/5 bg-background/50 backdrop-blur-md z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F59E9E]/20 rounded-full flex items-center justify-center text-[#F59E9E]">
                    <FileText size={18} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-lg hidden sm:block">Research Document</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a 
                    href={selectedPdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-foreground/60 hover:text-foreground"
                    title="Open in new tab"
                  >
                    <Maximize2 size={20} strokeWidth={1.5} />
                  </a>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="p-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-900 relative">
                <iframe 
                  src={`${selectedPdf}#view=FitH`} 
                  className="absolute inset-0 w-full h-full border-0"
                  title="PDF Viewer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
