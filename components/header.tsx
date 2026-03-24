"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Info, Heart, Code2, Sparkles, User, Mail, FolderHeart } from "lucide-react"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)
  const toggleInfo = () => setIsInfoOpen(!isInfoOpen)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }
    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <div className="fixed top-8 left-0 right-0 z-50 px-6 sm:px-12 pointer-events-none flex justify-center font-outfit">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -150, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-pill py-2 px-2 shadow-2xl flex items-center gap-2 pointer-events-auto max-w-fit pr-10 pl-6"
      >
        <button
          onClick={() => scrollToSection("home")}
          className="text-white font-black italic tracking-tighter text-2xl hover:text-primary transition-colors pr-6 border-r border-white/10"
        >
          S.
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { name: "Projects", id: "projects", icon: FolderHeart },
            { name: "About", id: "about", icon: User },
            { name: "Contact", id: "contact", icon: Mail },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-[9px] font-bold tracking-[0.4em] text-white/40 hover:text-white transition-all py-3 px-6 rounded-full hover:bg-white/5 uppercase"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="h-6 w-[1px] bg-white/10 mx-2 hidden md:block" />

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleInfo}
            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary group hover:bg-primary hover:text-black transition-all"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Info size={14} />
          </motion.button>
          
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-20 left-0 right-0 bg-[#080808] border border-white/5 rounded-[2rem] p-6 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {[
                  { name: "Projects", id: "projects" },
                  { name: "About", id: "about" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id)
                      closeMenu()
                    }}
                    className="text-left py-4 px-6 text-2xl font-black text-white italic tracking-tighter uppercase leading-none hover:text-primary"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Experimental Portfolio Info Modal */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#030303]/90 backdrop-blur-3xl flex items-center justify-center p-8 pointer-events-auto"
            onClick={() => setIsInfoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 100, opacity: 0 }}
              className="bg-[#080808] border border-white/10 rounded-[3rem] p-12 max-w-lg w-full shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grain" />
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-primary font-bold tracking-[0.6em] text-[10px] uppercase">Aesthetic Intelligence</span>
                  <h3 className="text-5xl font-black text-white italic tracking-tighter leading-[0.85] uppercase">
                    Curatory<br />Statement.
                  </h3>
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-md">
                  This portfolio explores the intersection of cinematic motion and functional precision. Every pixel is intentional, every interaction is sculpted. Designed for the future of digital product experiences.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/5">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Sparkles size={16} /></div>
                    <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase italic">Cinematic Direction</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/5">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"><Code2 size={16} /></div>
                    <span className="text-[10px] tracking-[0.2em] font-bold text-white uppercase italic">Technical Precision</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsInfoOpen(false)}
                  className="mt-4 h-16 w-full bg-white text-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-primary transition-all duration-300"
                >
                  Enter Reality
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
