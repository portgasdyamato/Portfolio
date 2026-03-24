"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Info, Sparkles, Code2 } from "lucide-react"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const NAV = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ── HEADER BAR ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_1px_30px_rgba(255,181,181,0.15)] border-b border-[#FFB5B5]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-[#FFB5B5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span
                className="text-white font-black text-sm"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                S
              </span>
            </div>
            <span
              className="text-[#1a0a0a] font-bold tracking-[0.12em] text-sm uppercase group-hover:text-[#FFB5B5] transition-colors"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "0.18em" }}
            >
              Sakshi Agrahari
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative px-5 py-2.5 text-[10px] tracking-[0.4em] uppercase font-bold text-[#9e6a65] hover:text-[#1a0a0a] transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-1.5 left-5 right-5 h-[1.5px] bg-[#FFB5B5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.08, rotate: 5 }}
              whileTap={{ scale: 0.93 }}
              onClick={() => setInfoOpen(true)}
              className="w-9 h-9 rounded-full bg-[#FFB5B5]/15 border border-[#FFB5B5]/30 flex items-center justify-center text-[#c0756e] hover:bg-[#FFB5B5]/30 transition-all"
            >
              <Info size={14} />
            </motion.button>

            <button
              className="md:hidden w-9 h-9 rounded-full bg-[#FFB5B5]/15 border border-[#FFB5B5]/30 flex items-center justify-center text-[#c0756e]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#FFB5B5]/20 bg-white/95 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col py-4 px-6">
                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => { scrollTo(item.id); setMenuOpen(false) }}
                    className="py-4 text-left text-xl font-black text-[#1a0a0a] hover:text-[#FFB5B5] transition-colors tracking-tight border-b border-[#FFB5B5]/10 last:border-0"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── INFO / ABOUT MODAL ── */}
      <AnimatePresence>
        {infoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#1a0a0a]/40 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setInfoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FDF8F5] border border-[#FFB5B5]/30 rounded-[2.5rem] p-10 max-w-md w-full shadow-[0_40px_80px_rgba(0,0,0,0.12)]"
            >
              {/* Decorative blob */}
              <div className="w-16 h-16 rounded-full bg-[#FFB5B5]/20 flex items-center justify-center mb-6">
                <Sparkles className="text-[#FFB5B5]" size={24} />
              </div>

              <p className="text-[10px] tracking-[0.5em] font-bold text-[#FFB5B5] uppercase mb-2">About this site</p>
              <h3
                className="text-4xl font-black text-[#1a0a0a] leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Designed with intention.
              </h3>
              <p className="text-[#9e6a65] text-sm leading-relaxed mb-8">
                Every interaction on this portfolio was thoughtfully sculpted — from the cinematic splash screen to the
                smallest hover state. This is a living canvas of Sakshi's design philosophy: precision meets playfulness.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: Sparkles, label: "Cinematic Motion Design" },
                  { icon: Code2, label: "Pixel-Perfect Engineering" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 bg-white border border-[#FFB5B5]/20 rounded-2xl p-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#FFB5B5]/15 flex items-center justify-center text-[#c0756e]">
                      <Icon size={15} />
                    </div>
                    <span className="text-[11px] tracking-[0.2em] font-bold text-[#1a0a0a] uppercase">{label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setInfoOpen(false)}
                className="w-full h-14 bg-[#1a0a0a] text-white font-black uppercase text-[10px] tracking-[0.4em] rounded-full hover:bg-[#FFB5B5] hover:text-[#1a0a0a] transition-all duration-400"
              >
                Enter Portfolio
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
