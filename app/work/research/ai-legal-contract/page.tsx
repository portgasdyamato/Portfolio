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

      <div className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col selection:bg-[#F59E9E]/30 relative overflow-x-hidden font-inter">
        {/* Premium Research Toolbar - BRANDED PINK */}
        <div className="w-full z-50 sticky top-0 border-b border-[#F59E9E]/20 bg-[#F59E9E] shadow-[0_4px_20px_rgba(245,158,158,0.15)]">
          <div className="flex items-center justify-between px-6 md:px-10 py-4">
            {/* Left: Back Button & Context */}
            <div className="flex items-center gap-6">
              <Link href="/work" className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#F59E9E] transition-all duration-300 group shadow-sm border border-white/10" title="Back to Work">
                <ArrowLeft size={18} strokeWidth={3} className="text-white transition-colors" />
              </Link>
              <div className="h-6 w-px bg-white/20 hidden sm:block" />
              <div className="flex flex-col hidden sm:flex">
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-0.5">Research</span>
                <h1 
                  className="text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  AI Legal Contract
                </h1>
              </div>
            </div>

            {/* Right: Controls - BRANDED WHITE ON PINK */}
            <div className="flex items-center gap-3 bg-white/10 rounded-2xl p-1.5 px-4 border border-white/10 shadow-inner">
              <div className="flex items-center gap-1">
                <button onClick={handleZoomOut} className="p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer shadow-none hover:shadow-sm" title="Zoom Out">
                  <ZoomOut size={18} strokeWidth={2.5} />
                </button>
                
                <span className="text-[11px] font-mono font-black w-12 text-center text-white">
                  {Math.round(zoom * 100)}%
                </span>

                <button onClick={handleZoomIn} className="p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer shadow-none hover:shadow-sm" title="Zoom In">
                  <ZoomIn size={18} strokeWidth={2.5} />
                </button>
              </div>
              
              <div className="w-px h-5 bg-white/20 mx-1" />

              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setIsHighlightMode(!isHighlightMode)}
                  className={`p-2 rounded-xl transition-all cursor-pointer shadow-none hover:shadow-sm ${
                    isHighlightMode 
                      ? "bg-white text-[#F59E9E]" 
                      : "hover:bg-white/20 text-white"
                  }`}
                  title="Toggle Highlighter"
                >
                  <Highlighter size={18} strokeWidth={2.5} />
                </button>

                {strokes.length > 0 && (
                  <button 
                    onClick={() => { setStrokes([]); setCurrentStrokeState([]); }}
                    className="p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer shadow-none hover:shadow-sm ml-1"
                    title="Clear Highlights"
                  >
                    <Eraser size={18} strokeWidth={2.5} />
                  </button>
                )}
              </div>
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
