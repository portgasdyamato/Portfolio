"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Info, Sparkles, Code2, ArrowUpRight } from "lucide-react"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const NAV = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Contact", id: "contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ── PREMIUM FROSTED GLASS NAV ── */}
      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-4xl"
        >
          <div
            className="flex items-center justify-between gap-3 sm:gap-6 px-4 py-2.5 sm:px-10 sm:py-5 rounded-full border border-white/30 bg-white/20 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 scale-100"
          >
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="group flex items-center pr-6 border-r border-black/5 shrink-0"
            >
              <span
                className="text-[22px] sm:text-[26px] font-bold italic tracking-tight text-[#1a0a0a] group-hover:text-[#F59E9E] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Sakshi Agrahari
              </span>
            </button>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-2 relative">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-6 py-2 text-[11px] tracking-[0.35em] uppercase font-black transition-colors duration-300 z-10 ${
                    hoveredItem && hoveredItem !== item.id ? "text-[#1a0a0a]/30" : "text-[#1a0a0a]"
                  }`}
                >
                  {item.label}
                  {hoveredItem === item.id && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white shadow-lg shadow-black/5 rounded-full -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4 pl-6 border-l border-black/5 shrink-0">
               {/* Availability */}
               <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 bg-black/5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E9E] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E9E]" />
                </span>
                <span className="text-[10px] tracking-[0.25em] font-black text-[#1a0a0a] uppercase">Live</span>
              </div>

              {/* Info Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInfoOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1a0a0a] text-white hover:bg-[#F59E9E] transition-all shadow-xl"
              >
                <Info size={14} strokeWidth={3} />
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-[#1a0a0a] hover:text-[#F59E9E] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-full left-0 right-0 mt-3 p-4 bg-white/90 border border-black/5 rounded-3xl backdrop-blur-2xl shadow-2xl md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-1">
                  {NAV.map((item, i) => (
                    <button
                      key={item.id}
                      onClick={() => { scrollTo(item.id); setMenuOpen(false) }}
                      className="w-full flex items-center justify-between px-6 py-4 rounded-2xl hover:bg-black/5 transition-colors group"
                    >
                      <span className="text-xl font-bold italic text-[#1a0a0a]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                        {item.label}
                      </span>
                      <ArrowUpRight size={16} className="text-[#1a0a0a]/30 group-hover:text-[#F59E9E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      {/* ── INFO MODAL ── */}
      <AnimatePresence>
        {infoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
            onClick={() => setInfoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                 <button onClick={() => setInfoOpen(false)} className="text-black/20 hover:text-black transition-colors"><X size={20}/></button>
              </div>

               <div className="w-14 h-14 rounded-2xl bg-[#FFF5F5] flex items-center justify-center mb-8">
                <Sparkles className="text-[#F59E9E]" size={24} />
              </div>

              <h3 className="text-4xl font-bold italic text-[#1a0a0a] mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                Designed for <br /> <em>Impact.</em>
              </h3>
              
              <p className="text-[#1a0a0a]/60 text-base leading-relaxed mb-8">
                Every detail in this portfolio is meticulously crafted — from the cinematic morphing hero to the custom-engineered GSAP physics. This is where high-end design meets high-performance code.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Code2, t: "Engineered with React & GSAP" },
                  { icon: Sparkles, t: "UI/UX Visual Excellence" }
                ].map(({ icon: Icon, t }) => (
                  <div key={t} className="flex items-center gap-4 bg-black/5 rounded-2xl px-5 py-4 border border-black/5 transition-colors hover:border-[#F59E9E]/20 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1a0a0a] group-hover:text-[#F59E9E] transition-colors shadow-sm">
                      <Icon size={18} />
                    </div>
                    <span className="text-[11px] tracking-[0.2em] font-black text-[#1a0a0a] uppercase">{t}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
