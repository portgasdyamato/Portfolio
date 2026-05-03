"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, Highlighter, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function AiLegalContractResearchPage() {
  const [zoom, setZoom] = useState(1)
  const [isHighlightMode, setIsHighlightMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5))

  useEffect(() => {
    // Load PDF.js script dynamically to avoid SSR/Worker issues
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js"
      
      const loadingTask = pdfjsLib.getDocument("/AI Legal Contract Reveiw Feature.pdf")
      loadingTask.promise.then((pdf: any) => {
        const numPages = pdf.numPages;
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = ""; // Clear existing
        
        let pagesRendered = 0;

        for (let i = 1; i <= numPages; i++) {
          pdf.getPage(i).then((page: any) => {
            const viewport = page.getViewport({ scale: 2.0 }); // Render at 2x resolution for crispness
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            // Clean styling for each page
            canvas.className = "w-full max-w-[1000px] h-auto mb-4 md:mb-8 shadow-[0_5px_30px_rgba(0,0,0,0.08)] bg-white rounded-lg md:rounded-xl overflow-hidden";
            canvas.dataset.pageNumber = i.toString();
            
            container.appendChild(canvas);

            // Sort canvases by page number to ensure correct order
            const canvases = Array.from(container.querySelectorAll("canvas"));
            canvases.sort((a: any, b: any) => parseInt(a.dataset.pageNumber) - parseInt(b.dataset.pageNumber));
            canvases.forEach(c => container.appendChild(c));
            
            page.render({ canvasContext: context, viewport }).promise.then(() => {
              pagesRendered++;
              if (pagesRendered === numPages) setIsLoading(false);
            });
          });
        }
      }).catch((err: any) => {
        console.error("Error loading PDF:", err);
        setIsLoading(false);
      });
    }
    document.head.appendChild(script)
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        ${isHighlightMode ? 'body * { cursor: url("/highlighter.png"), crosshair !important; }' : ''}
      `}</style>

      <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 flex flex-col selection:bg-[#F59E9E]/30 relative overflow-x-hidden">
        {/* Custom Premium Control Panel */}
        <header className="h-[72px] border-b border-black/5 dark:border-white/5 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl flex items-center justify-between px-6 md:px-10 z-50 sticky top-0 shadow-sm">
          <div className="flex items-center gap-6">
            <Link href="/work" className="p-2.5 bg-black/[0.03] hover:bg-black/[0.06] dark:bg-white/[0.03] dark:hover:bg-white/[0.06] rounded-full transition-all flex items-center justify-center">
              <ArrowLeft size={18} className="text-black/80 dark:text-white/80" />
            </Link>
            <div className="h-5 w-px bg-black/10 dark:bg-white/10 hidden sm:block" />
            <h1 className="font-bold text-base md:text-lg hidden sm:block text-black/90 dark:text-white/90 font-inter tracking-tight">
              AI Legal Contract Feature Review
            </h1>
          </div>

          <div className="flex items-center gap-2 bg-black/[0.02] dark:bg-white/[0.02] rounded-full p-1.5 px-2 border border-black/[0.04] dark:border-white/[0.04] shadow-sm">
            <button 
              onClick={handleZoomOut}
              className="p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-all text-black/50 hover:text-black/90 dark:text-white/50 dark:hover:text-white/90 shadow-none hover:shadow-sm"
              title="Zoom Out"
            >
              <ZoomOut size={18} strokeWidth={2} />
            </button>
            
            <span className="text-xs font-mono font-medium w-12 text-center text-black/60 dark:text-white/60">
              {Math.round(zoom * 100)}%
            </span>

            <button 
              onClick={handleZoomIn}
              className="p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-all text-black/50 hover:text-black/90 dark:text-white/50 dark:hover:text-white/90 shadow-none hover:shadow-sm"
              title="Zoom In"
            >
              <ZoomIn size={18} strokeWidth={2} />
            </button>

            <div className="w-px h-5 bg-black/10 dark:bg-white/10 mx-2" />

            <button 
              onClick={() => setIsHighlightMode(!isHighlightMode)}
              className={`p-2 rounded-full transition-all flex items-center gap-2 ${
                isHighlightMode 
                  ? "bg-[#F59E9E]/20 text-[#F59E9E] shadow-inner" 
                  : "hover:bg-white dark:hover:bg-zinc-800 text-black/50 hover:text-black/90 dark:text-white/50 dark:hover:text-white/90 shadow-none hover:shadow-sm"
              }`}
              title="Toggle Highlighter"
            >
              <Highlighter size={18} strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* PDF Rendering Area */}
        <main className="flex-1 w-full relative flex justify-center py-12 md:py-20 px-4 sm:px-8">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-black/40 dark:text-white/40">
              <Loader2 className="w-10 h-10 animate-spin text-[#F59E9E]" />
              <span className="text-sm font-semibold tracking-widest uppercase">Loading Document...</span>
            </div>
          )}
          
          {/* PDF Pages Container */}
          <motion.div 
            ref={containerRef}
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full flex flex-col items-center origin-top relative z-10"
          />
        </main>
      </div>
    </>
  )
}
