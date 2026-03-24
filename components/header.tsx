"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Info, Sparkles, Code2 } from "lucide-react"

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const NAV = [
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* ── FLOATING PILL HEADER ── */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-3xl"
        >
          <div
            className="flex items-center justify-between gap-4 px-8 py-4 rounded-full"
            style={{
              background: scrolled
                ? "linear-gradient(135deg, rgba(255, 225, 225, 0.7), rgba(255, 185, 185, 0.45))"
                : "linear-gradient(135deg, rgba(255, 235, 235, 0.5), rgba(255, 200, 200, 0.25))",
              backdropFilter: "blur(32px) saturate(200%)",
              WebkitBackdropFilter: "blur(32px) saturate(200%)",
              border: "1px solid rgba(255, 181, 181, 0.4)",
              boxShadow: scrolled
                ? "0 8px 40px rgba(255, 181, 181, 0.25), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.6)"
                : "0 4px 24px rgba(255, 181, 181, 0.15), inset 0 1px 0 rgba(255,255,255,0.5)",
            }}
          >
            {/* Logo — Large elegant text */}
            <button
              onClick={() => scrollTo("home")}
              className="shrink-0 group flex items-center"
            >
              <span
                className="text-[20px] md:text-[24px] font-black italic tracking-wide text-[#1a0a0a] group-hover:text-[#c0756e] transition-colors duration-300"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: "0.06em" }}
              >
                Sakshi Agrahari
              </span>
            </button>

            {/* Center divider */}
            <div className="hidden md:block w-px h-4 bg-[#FFB5B5]/40" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative px-4 py-1.5 text-[10px] tracking-[0.45em] uppercase font-bold text-[#9e6a65]/80 hover:text-[#1a0a0a] transition-colors duration-200 group rounded-full hover:bg-[#FFB5B5]/10"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right: ping + info */}
            <div className="flex items-center gap-2.5">
              {/* Availability dot */}
              <div className="hidden sm:flex items-center gap-1.5 bg-[#FFB5B5]/12 border border-[#FFB5B5]/25 px-3 py-1.5 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB5B5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#c0756e]" />
                </span>
                <span className="text-[9px] tracking-[0.35em] font-bold text-[#c0756e] uppercase">Available</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setInfoOpen(true)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#c0756e] hover:bg-[#FFB5B5]/20 transition-all"
                style={{ border: "1px solid rgba(255,181,181,0.3)" }}
              >
                <Info size={13} />
              </motion.button>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-[#c0756e]"
                style={{ border: "1px solid rgba(255,181,181,0.3)" }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={14} /> : <Menu size={14} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                className="mt-2 rounded-3xl overflow-hidden md:hidden"
                style={{
                  background: "rgba(255, 252, 250, 0.88)",
                  backdropFilter: "blur(28px) saturate(180%)",
                  WebkitBackdropFilter: "blur(28px) saturate(180%)",
                  border: "1px solid rgba(255, 181, 181, 0.25)",
                  boxShadow: "0 8px 40px rgba(255, 181, 181, 0.18)",
                }}
              >
                {NAV.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => { scrollTo(item.id); setMenuOpen(false) }}
                    className="w-full flex items-center justify-between px-7 py-5 text-left border-b border-[#FFB5B5]/10 last:border-0 hover:bg-[#FFB5B5]/8 transition-colors group"
                  >
                    <span
                      className="text-2xl font-black italic text-[#1a0a0a] group-hover:text-[#c0756e] transition-colors"
                      style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                      {item.label}
                    </span>
                    <span className="text-[#FFB5B5] text-lg">→</span>
                  </motion.button>
                ))}
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
            className="fixed inset-0 z-[200] flex items-center justify-center p-6"
            style={{ background: "rgba(26,10,10,0.35)", backdropFilter: "blur(8px)" }}
            onClick={() => setInfoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-sm w-full rounded-[2.5rem] p-10 overflow-hidden relative"
              style={{
                background: "rgba(253, 248, 245, 0.96)",
                backdropFilter: "blur(40px)",
                border: "1px solid rgba(255,181,181,0.3)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.12), 0 8px 24px rgba(255,181,181,0.15)",
              }}
            >
              {/* Bg blob */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFB5B5]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-[#FFB5B5]/20 flex items-center justify-center mb-6">
                <Sparkles className="text-[#c0756e]" size={20} />
              </div>
              <p className="text-[9px] tracking-[0.6em] font-bold text-[#FFB5B5] uppercase mb-2">Portfolio note</p>
              <h3
                className="text-3xl font-black text-[#1a0a0a] leading-tight mb-4"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Designed with<br /><em>intention.</em>
              </h3>
              <p className="text-[#9e6a65] text-sm leading-relaxed mb-8">
                Every interaction here is deliberately crafted — from cinematic loading to the finest hover state. This is Sakshi's design philosophy made tangible.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { icon: Sparkles, t: "Cinematic Motion Design" },
                  { icon: Code2, t: "Pixel-Perfect Engineering" },
                ].map(({ icon: Icon, t }) => (
                  <div key={t} className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-[#FFB5B5]/15">
                    <div className="w-8 h-8 rounded-xl bg-[#FFB5B5]/15 flex items-center justify-center text-[#c0756e]">
                      <Icon size={13} />
                    </div>
                    <span className="text-[10px] tracking-[0.2em] font-bold text-[#1a0a0a] uppercase">{t}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setInfoOpen(false)}
                className="w-full h-13 py-4 bg-[#1a0a0a] text-white font-black uppercase text-[9px] tracking-[0.5em] rounded-full hover:bg-[#FFB5B5] hover:text-[#1a0a0a] transition-all duration-300"
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
