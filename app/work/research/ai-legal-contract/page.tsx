"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, Highlighter, ArrowLeft, Loader2, Eraser } from "lucide-react"
import Link from "next/link"
import CustomCursor from "@/components/custom-cursor"

type Point = { x: number; y: number }
type Stroke = Point[]

export default function AiLegalContractResearchPage() {
  const [zoom, setZoom] = useState(1)
  const [isHighlightMode, setIsHighlightMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Drawing state
  const [strokes, setStrokes] = useState<Stroke[]>([])
  const [currentStrokeState, setCurrentStrokeState] = useState<Stroke>([])
  const currentStrokeRef = useRef<Stroke>([])
  const isDrawing = useRef(false)

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5))

  // Mouse tracker for the custom highlighter cursor
  useEffect(() => {
    if (!isHighlightMode) return;
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePos)
    return () => window.removeEventListener("mousemove", updateMousePos)
  }, [isHighlightMode])

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

  // Drawing Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isHighlightMode) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    isDrawing.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    currentStrokeRef.current = [{x, y}];
    setCurrentStrokeState([{x, y}]);
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing.current || !isHighlightMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    currentStrokeRef.current.push({x, y});
    setCurrentStrokeState([...currentStrokeRef.current]);
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setStrokes(prev => [...prev, currentStrokeRef.current]);
    currentStrokeRef.current = [];
    setCurrentStrokeState([]);
  }

  const generateSvgPath = (points: Point[]) => {
    if (points.length === 0) return "";
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(" ");
  }

  return (
    <>
      <style jsx global>{`
        ${isHighlightMode ? 'body * { cursor: none !important; }' : ''}
      `}</style>

      {/* Standard Portfolio Cursor OR Custom Highlighter Cursor */}
      {!isHighlightMode && <CustomCursor />}
      {isHighlightMode && (
        <div 
          className="fixed pointer-events-none z-[999999] rounded-full bg-[#F4FF00] mix-blend-multiply opacity-70 border-[2px] border-yellow-400"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y, 
            width: 28, 
            height: 28, 
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.1s, height 0.1s, opacity 0.1s'
          }} 
        />
      )}

      <div className="min-h-screen bg-[#FFF5F7] dark:bg-[#FFF5F7] flex flex-col selection:bg-[#F59E9E]/30 relative overflow-x-hidden">
        {/* Retro Pink Browser Header */}
        <div className="w-full z-50 sticky top-0 border-b-[3px] border-[#ECA8BA] bg-[#FCEBF0] shadow-[0_8px_30px_rgba(236,168,186,0.3)]">
          {/* Title Bar */}
          <div className="flex justify-between items-center px-4 py-2 border-b-[3px] border-[#ECA8BA] bg-[#FCEBF0]">
            <div className="text-[#ECA8BA] font-black text-sm md:text-base tracking-widest uppercase font-inter ml-2">
              AI Legal Contract Feature
            </div>
            <div className="flex items-center gap-1.5">
              {/* Tetris */}
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
              <Link href="/work" className="w-[22px] h-[22px] border-[2.5px] border-[#ECA8BA] flex items-center justify-center bg-white relative cursor-pointer hover:bg-[#ECA8BA] group transition-colors">
                <div className="w-[12px] h-[3px] bg-[#ECA8BA] group-hover:bg-white rotate-45 absolute transition-colors" />
                <div className="w-[12px] h-[3px] bg-[#ECA8BA] group-hover:bg-white -rotate-45 absolute transition-colors" />
              </Link>
            </div>
          </div>

          {/* Address Bar */}
          <div className="flex items-center px-3 md:px-5 py-2.5 gap-2 md:gap-4 bg-[#FCEBF0]">
            {/* Back Button (Chevron Left) */}
            <Link href="/work" className="w-8 h-8 rounded-full border-[2.5px] border-[#ECA8BA] bg-[#FFF5F7] flex items-center justify-center cursor-pointer hover:bg-white transition-colors flex-shrink-0" title="Back to Work">
              <div className="w-3 h-3 border-t-[3px] border-l-[3px] border-[#ECA8BA] -rotate-45 ml-1" />
            </Link>
            
            {/* Controls URL Pill */}
            <div className="flex-1 rounded-full border-[2.5px] border-[#ECA8BA] bg-[#FFF5F7] flex items-center justify-between px-2 sm:px-5 py-1.5 overflow-hidden">
              <div className="hidden md:flex text-[#ECA8BA]/70 font-mono text-sm font-bold truncate mr-4">
                portfolio.local/research/ai-legal-contract
              </div>

              {/* Toolbar Controls */}
              <div className="flex items-center gap-1 sm:gap-2 mx-auto md:mx-0">
                <button onClick={handleZoomOut} className="p-1.5 hover:bg-[#ECA8BA]/20 rounded-full transition-colors text-[#ECA8BA] cursor-pointer" title="Zoom Out">
                  <ZoomOut size={18} strokeWidth={2.5} />
                </button>
                <span className="text-xs font-mono font-bold w-10 text-center text-[#ECA8BA]">
                  {Math.round(zoom * 100)}%
                </span>
                <button onClick={handleZoomIn} className="p-1.5 hover:bg-[#ECA8BA]/20 rounded-full transition-colors text-[#ECA8BA] cursor-pointer" title="Zoom In">
                  <ZoomIn size={18} strokeWidth={2.5} />
                </button>
                
                <div className="w-[2.5px] h-4 bg-[#ECA8BA]/30 mx-1 rounded-full" />

                <button 
                  onClick={() => setIsHighlightMode(!isHighlightMode)}
                  className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                    isHighlightMode ? "bg-[#F4FF00]/40 text-[#D4B000]" : "hover:bg-[#ECA8BA]/20 text-[#ECA8BA]"
                  }`}
                  title="Toggle Highlighter"
                >
                  <Highlighter size={18} strokeWidth={2.5} />
                </button>

                {strokes.length > 0 && (
                  <button 
                    onClick={() => { setStrokes([]); setCurrentStrokeState([]); }}
                    className="p-1.5 hover:bg-red-500/10 rounded-full transition-colors text-red-500/60 hover:text-red-500 cursor-pointer ml-1"
                    title="Clear Highlights"
                  >
                    <Eraser size={18} strokeWidth={2.5} />
                  </button>
                )}
              </div>
            </div>

            {/* Heart */}
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-[#ECA8BA] fill-current hover:scale-110 transition-transform cursor-pointer" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* PDF Rendering Area */}
        <main className="flex-1 w-full relative flex justify-center py-12 md:py-20 px-4 sm:px-8 overflow-x-hidden touch-none">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-[#ECA8BA]/60">
              <Loader2 className="w-10 h-10 animate-spin" />
              <span className="text-sm font-bold tracking-widest uppercase">Loading Document...</span>
            </div>
          )}
          
          {/* Zoomable Container */}
          <motion.div 
            animate={{ scale: zoom }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-[1000px] flex flex-col items-center origin-top relative z-10"
          >
            {/* Real PDF Canvases */}
            <div ref={containerRef} className="w-full flex flex-col items-center" />

            {/* Interactive Drawing Overlay */}
            <div 
              className={`absolute inset-0 z-20 touch-none ${isHighlightMode ? 'pointer-events-auto' : 'pointer-events-none'}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerUp}
            >
              <svg className="w-full h-full pointer-events-none" style={{ mixBlendMode: 'multiply' }}>
                {strokes.map((stroke, i) => (
                  <path 
                    key={i} 
                    d={generateSvgPath(stroke)} 
                    stroke="#F4FF00" 
                    strokeWidth={24} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                    opacity={0.6}
                  />
                ))}
                {currentStrokeState.length > 0 && (
                  <path 
                    d={generateSvgPath(currentStrokeState)} 
                    stroke="#F4FF00" 
                    strokeWidth={24} 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                    opacity={0.6}
                  />
                )}
              </svg>
            </div>
          </motion.div>
        </main>
      </div>
    </>
  )
}
