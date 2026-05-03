"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, Highlighter, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AiLegalContractResearchPage() {
  const [zoom, setZoom] = useState(1)
  const [isHighlightMode, setIsHighlightMode] = useState(false)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2.5))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-zinc-950 flex flex-col overflow-hidden selection:bg-[#F59E9E]/30">
      {/* Custom Control Panel */}
      <header className="h-16 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 z-50 sticky top-0">
        <div className="flex items-center gap-4">
          <Link href="/work" className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back to Work</span>
          </Link>
          <div className="h-4 w-px bg-black/20 dark:bg-white/20 mx-2 hidden sm:block" />
          <h1 className="font-bold text-sm md:text-base hidden sm:block font-inter">
            AI Legal Contract Feature Review
          </h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4 bg-zinc-100 dark:bg-zinc-900 rounded-full p-1.5 px-3 border border-black/5 dark:border-white/5">
          <button 
            onClick={handleZoomOut}
            className="p-1.5 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-all text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            title="Zoom Out"
          >
            <ZoomOut size={18} />
          </button>
          
          <span className="text-xs font-mono w-12 text-center text-black/60 dark:text-white/60">
            {Math.round(zoom * 100)}%
          </span>

          <button 
            onClick={handleZoomIn}
            className="p-1.5 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-all text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            title="Zoom In"
          >
            <ZoomIn size={18} />
          </button>

          <div className="w-px h-4 bg-black/10 dark:bg-white/10 mx-1" />

          <button 
            onClick={() => setIsHighlightMode(!isHighlightMode)}
            className={`p-1.5 rounded-full transition-all flex items-center gap-2 ${
              isHighlightMode 
                ? "bg-[#F59E9E]/20 text-[#F59E9E] hover:bg-[#F59E9E]/30" 
                : "hover:bg-white dark:hover:bg-zinc-800 text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
            }`}
            title="Highlighter"
          >
            <Highlighter size={18} />
          </button>
        </div>
      </header>

      {/* PDF Viewer Area */}
      <main className="flex-1 w-full bg-zinc-200/50 dark:bg-zinc-900/50 relative overflow-auto custom-scrollbar flex justify-center p-4 sm:p-8">
        <motion.div 
          animate={{ scale: zoom }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="w-full max-w-[1000px] bg-white dark:bg-zinc-950 shadow-2xl origin-top flex-shrink-0"
          style={{ height: "141.4vw", maxHeight: "1414px" }} // Approximate A4 aspect ratio 1:1.414
        >
          {isHighlightMode && (
            <div className="absolute inset-0 z-20 cursor-[url('/highlighter.png'),_crosshair]" />
          )}
          <iframe 
            src="/AI Legal Contract Reveiw Feature.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
            className="w-full h-full border-0 relative z-10"
            title="PDF Document"
          />
        </motion.div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(150, 150, 150, 0.3);
          border-radius: 20px;
        }
      `}</style>
    </div>
  )
}
