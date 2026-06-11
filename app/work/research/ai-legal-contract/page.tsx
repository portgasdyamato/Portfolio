"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { ZoomIn, ZoomOut, Highlighter, ArrowLeft, Loader2, Eraser, ChevronUp, ChevronDown } from "lucide-react"
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

  // Drawing Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isHighlightMode) return;
    isDrawing.current = true;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    const newPoint = { x, y };
    currentStrokeRef.current = [newPoint];
    setCurrentStrokeState([newPoint]);
    
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing.current || !isHighlightMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;
    
    const newPoint = { x, y };
    currentStrokeRef.current = [...currentStrokeRef.current, newPoint];
    setCurrentStrokeState([...currentStrokeRef.current]);
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    
    const finalStroke = [...currentStrokeRef.current];
    if (finalStroke.length > 0) {
      setStrokes(prev => [...prev, finalStroke]);
    }
    
    currentStrokeRef.current = [];
    setCurrentStrokeState([]);
    
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore
    }
  }

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smart Sticky Toolbar logic
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const currentScrollY = scrollRef.current.scrollTop;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);

    // Update current page based on scroll position
    const canvases = scrollRef.current.querySelectorAll('canvas');
    let activePage = 1;
    canvases.forEach((canvas, index) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2) {
        activePage = index + 1;
      }
    });
    setCurrentPage(activePage);
  };

  const scrollToPage = useCallback((pageNumber: number) => {
    if (!scrollRef.current) return;
    const clampedPage = Math.max(1, Math.min(pageNumber, totalPages));
    const canvases = scrollRef.current.querySelectorAll('canvas');
    if (canvases[clampedPage - 1]) {
      canvases[clampedPage - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [totalPages]);

  // ── Arrow key navigation (Up/Down) ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't interfere with input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToPage(currentPage + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToPage(currentPage - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, scrollToPage]);

  // ── Wheel / Touchpad scroll with high sensitivity ──
  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const forwardWheel = (e: WheelEvent) => {
      if (isDrawing.current) return;
      e.preventDefault();

      // deltaMode: 0 = pixels (mouse wheel/trackpad), 1 = lines, 2 = pages
      // Touchpads report deltaMode=0 with small deltaY values (~3-10px per tick)
      // Mouse wheels report deltaMode=0 with larger deltaY (~100px) or deltaMode=1
      let multiplier: number;
      if (e.deltaMode === 1) {
        // Line mode (some mice) — each "line" maps to ~80px for fast scroll
        multiplier = 80;
      } else if (e.deltaMode === 2) {
        // Page mode — each "page" maps to scrollEl height
        multiplier = scrollEl.clientHeight;
      } else {
        // Pixel mode — distinguish touchpad (small deltaY) vs mouse wheel (large deltaY)
        // Touchpad: deltaY typically 3–15px per tick → boost 8x
        // Mouse wheel: deltaY typically 80–120px per tick → boost 5x
        const isTouchpad = Math.abs(e.deltaY) < 50 && !e.ctrlKey;
        multiplier = isTouchpad ? 8 : 5;
      }

      scrollEl.scrollBy({
        top: e.deltaY * multiplier,
        left: e.deltaX * multiplier,
        behavior: 'auto',
      });
    };

    window.addEventListener("wheel", forwardWheel, { passive: false });
    return () => window.removeEventListener("wheel", forwardWheel);
  }, []);

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"
    script.onload = () => {
      const pdfjsLib = (window as any).pdfjsLib
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js"
      
      const loadingTask = pdfjsLib.getDocument("/AI Legal Contract Reveiw Feature.pdf")
      loadingTask.promise.then(async (pdf: any) => {
        setTotalPages(pdf.numPages);
        const container = containerRef.current;
        if (!container) return;
        container.innerHTML = "";
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2.0 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          canvas.className = "w-full max-w-[1000px] h-auto mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white rounded-2xl overflow-hidden";
          container.appendChild(canvas);
          await page.render({ canvasContext: context, viewport }).promise;
        }
        setIsLoading(false);
      }).catch((err: any) => {
        console.error("Error loading PDF:", err);
        setIsLoading(false);
      });
    }
    document.head.appendChild(script)
    return () => { if (document.head.contains(script)) document.head.removeChild(script); }
  }, [])

  const generateSvgPath = (points: Point[]) => {
    if (points.length === 0) return "";
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(" ");
  }

  return (
    <>
      <style jsx global>{`
        ${isHighlightMode ? 'body * { cursor: none !important; }' : ''}
      `}</style>

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

      <div className="h-screen bg-white dark:bg-zinc-950 flex flex-col selection:bg-[#F59E9E]/30 relative overflow-hidden font-inter">
        
        {/* ── Smart Branded Toolbar ── */}
        <motion.div 
          initial={false}
          animate={{ y: isVisible ? 0 : -100 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="w-full z-50 fixed top-0 border-b border-[#F59E9E]/20 bg-[#F59E9E] shadow-[0_4px_20px_rgba(245,158,158,0.15)]"
        >
          {/* ── DESKTOP & TABLET (md+) layout ── */}
          <div className="hidden sm:flex items-center justify-between px-4 md:px-10 py-3 md:py-4">
            {/* Left: Back + Title */}
            <div className="flex items-center gap-3 md:gap-6 min-w-0">
              <Link 
                href="/work" 
                className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#F59E9E] transition-all duration-300 group shadow-sm border border-white/10 shrink-0" 
                title="Back to Work"
              >
                <ArrowLeft size={16} strokeWidth={3} className="text-white group-hover:text-[#F59E9E] transition-colors" />
              </Link>
              <div className="h-5 w-px bg-white/20 shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[9px] md:text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mb-0.5">Research</span>
                <h1 
                  className="text-sm md:text-xl font-bold text-white tracking-tight leading-tight truncate max-w-[200px] md:max-w-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  AI Legal Contract Review Feature Design
                </h1>
              </div>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {/* Page Navigator */}
              <div className="flex items-center gap-1 bg-white/10 rounded-2xl p-1 px-2 md:px-3 border border-white/10 shadow-inner">
                <button 
                  onClick={() => scrollToPage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="p-1.5 md:p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                  title="Previous Page (↑)"
                >
                  <ChevronUp size={14} strokeWidth={3} />
                </button>
                <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-widest min-w-[50px] md:min-w-[70px] text-center">
                  {currentPage} <span className="opacity-40">/</span> {totalPages}
                </span>
                <button 
                  onClick={() => scrollToPage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="p-1.5 md:p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                  title="Next Page (↓)"
                >
                  <ChevronDown size={14} strokeWidth={3} />
                </button>
              </div>

              {/* Zoom + Highlight Controls */}
              <div className="flex items-center gap-1 md:gap-2 bg-white/10 rounded-2xl p-1 px-2 md:px-3 border border-white/10 shadow-inner">
                <button onClick={handleZoomOut} className="p-1.5 md:p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer" title="Zoom Out">
                  <ZoomOut size={15} strokeWidth={2.5} />
                </button>
                <span className="text-[10px] md:text-[11px] font-mono font-black w-8 md:w-10 text-center text-white">{Math.round(zoom * 100)}%</span>
                <button onClick={handleZoomIn} className="p-1.5 md:p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer" title="Zoom In">
                  <ZoomIn size={15} strokeWidth={2.5} />
                </button>
                
                <div className="w-px h-4 bg-white/20 mx-0.5 md:mx-1" />

                <button 
                  onClick={() => setIsHighlightMode(!isHighlightMode)}
                  className={`p-1.5 md:p-2 rounded-xl transition-all cursor-pointer ${
                    isHighlightMode ? "bg-white text-[#F59E9E]" : "hover:bg-white/20 text-white"
                  }`}
                  title="Toggle Highlighter"
                >
                  <Highlighter size={15} strokeWidth={2.5} />
                </button>

                {strokes.length > 0 && (
                  <button onClick={() => { setStrokes([]); setCurrentStrokeState([]); }} className="p-1.5 md:p-2 hover:bg-white/20 rounded-xl transition-all text-white/80 hover:text-white cursor-pointer ml-0.5" title="Clear Highlights">
                    <Eraser size={15} strokeWidth={2.5} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── MOBILE (< sm) layout: 2-row compact ── */}
          <div className="flex sm:hidden flex-col">
            {/* Row 1: Back + title + page counter */}
            <div className="flex items-center justify-between px-3 pt-3 pb-1.5">
              <div className="flex items-center gap-2 min-w-0">
                <Link 
                  href="/work" 
                  className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white transition-all group shrink-0"
                >
                  <ArrowLeft size={14} strokeWidth={3} className="text-white group-hover:text-[#F59E9E] transition-colors" />
                </Link>
                <div className="flex flex-col min-w-0">
                  <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest leading-none">Research</span>
                  <span className="text-[11px] font-bold text-white truncate leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    AI Legal Contract Review
                  </span>
                </div>
              </div>
              {/* Page nav on mobile row 1 */}
              <div className="flex items-center gap-1 bg-white/10 rounded-xl p-0.5 px-2 border border-white/10 shrink-0">
                <button onClick={() => scrollToPage(currentPage - 1)} disabled={currentPage <= 1} className="p-1 hover:bg-white/20 rounded-lg transition-all text-white/80 disabled:opacity-30 disabled:pointer-events-none">
                  <ChevronUp size={12} strokeWidth={3} />
                </button>
                <span className="text-[9px] font-black text-white min-w-[36px] text-center">{currentPage} / {totalPages}</span>
                <button onClick={() => scrollToPage(currentPage + 1)} disabled={currentPage >= totalPages} className="p-1 hover:bg-white/20 rounded-lg transition-all text-white/80 disabled:opacity-30 disabled:pointer-events-none">
                  <ChevronDown size={12} strokeWidth={3} />
                </button>
              </div>
            </div>
            {/* Row 2: Zoom + Highlight controls */}
            <div className="flex items-center justify-center gap-2 pb-2.5 px-3">
              <div className="flex items-center gap-1 bg-white/10 rounded-xl p-0.5 px-2 border border-white/10">
                <button onClick={handleZoomOut} className="p-1.5 hover:bg-white/20 rounded-lg transition-all text-white/80">
                  <ZoomOut size={13} strokeWidth={2.5} />
                </button>
                <span className="text-[10px] font-mono font-black w-7 text-center text-white">{Math.round(zoom * 100)}%</span>
                <button onClick={handleZoomIn} className="p-1.5 hover:bg-white/20 rounded-lg transition-all text-white/80">
                  <ZoomIn size={13} strokeWidth={2.5} />
                </button>
              </div>
              <button 
                onClick={() => setIsHighlightMode(!isHighlightMode)}
                className={`p-2 rounded-xl transition-all ${isHighlightMode ? "bg-white text-[#F59E9E]" : "bg-white/10 text-white border border-white/10"}`}
              >
                <Highlighter size={13} strokeWidth={2.5} />
              </button>
              {strokes.length > 0 && (
                <button onClick={() => { setStrokes([]); setCurrentStrokeState([]); }} className="p-2 bg-white/10 rounded-xl text-white/80 border border-white/10">
                  <Eraser size={13} strokeWidth={2.5} />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* PDF Rendering Area - Scrollable Container */}
        <main 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 w-full overflow-y-auto overflow-x-hidden bg-zinc-50 dark:bg-zinc-950/50 relative selection:bg-transparent scroll-smooth pt-16"
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-[#F59E9E]/60 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm pointer-events-none">
              <Loader2 className="w-10 h-10 animate-spin" />
              <span className="text-xs font-black tracking-[0.3em] uppercase">Rendering Research...</span>
            </div>
          )}
          
          <div className="min-h-full w-full flex justify-center py-12 md:py-20 px-4 sm:px-8">
            {/* Zoomable Container */}
            <motion.div 
              animate={{ scale: zoom }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-[1000px] flex flex-col items-center origin-top relative"
            >
              {/* Real PDF Canvases */}
              <div ref={containerRef} className="w-full flex flex-col items-center relative z-0" />

              {/* Interactive Drawing Overlay */}
              <div 
                className={`absolute inset-0 z-20 touch-none overflow-visible ${isHighlightMode ? "pointer-events-auto cursor-none" : "pointer-events-none"}`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onWheel={(e) => {
                  if (!isDrawing.current) return;
                  e.stopPropagation();
                }}
              >
                <svg className="w-full h-full pointer-events-none overflow-visible">
                  {strokes.map((stroke, i) => (
                    <path 
                      key={`stroke-${i}`} 
                      d={generateSvgPath(stroke)} 
                      stroke="#F4FF00" 
                      strokeWidth={32} 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fill="none" 
                      opacity={0.45}
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  ))}
                  {currentStrokeState.length > 0 && (
                    <path 
                      d={generateSvgPath(currentStrokeState)} 
                      stroke="#F4FF00" 
                      strokeWidth={32} 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      fill="none" 
                      opacity={0.45}
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  )}
                </svg>
              </div>

              {/* Passive SVG Layer */}
              {!isHighlightMode && (
                <div className="absolute inset-0 z-10 pointer-events-none">
                  <svg className="w-full h-full overflow-visible">
                    {strokes.map((stroke, i) => (
                      <path 
                        key={`stroke-passive-${i}`} 
                        d={generateSvgPath(stroke)} 
                        stroke="#F4FF00" 
                        strokeWidth={32} 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none" 
                        opacity={0.45}
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    ))}
                  </svg>
                </div>
              )}
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}
