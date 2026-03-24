"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Info, Heart, Coffee, Code2, Sparkles, User, Mail, FolderHeart } from "lucide-react"

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleInfo = () => {
    setIsInfoOpen(!isInfoOpen)
  }

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsInfoOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <div className="relative">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          opacity: 1, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="py-6 px-4 md:px-14 flex justify-between items-center bg-black/60 backdrop-blur-2xl fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      >
        <motion.button
          onClick={() => scrollToSection("home")}
          className="text-xl md:text-2xl font-light tracking-[0.2em] cursor-pointer text-white hover:text-primary transition-colors duration-300 uppercase"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Sakshi Agrahari
        </motion.button>
        
        {/* Desktop Navigation */}
        <div className="flex items-center space-x-12">
          <nav className="hidden md:flex space-x-12">
            {[
              { name: "PROJECTS", id: "projects", icon: FolderHeart },
              { name: "ABOUT", id: "about", icon: User },
              { name: "CONTACT", id: "contact", icon: Mail },
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-[10px] font-bold tracking-[0.4em] text-white/40 hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ y: -2 }}
              >
                <item.icon size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.name}
              </motion.button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleInfo}
              className="p-3 bg-white/5 rounded-full text-white/60 hover:text-primary transition-colors border border-white/10"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <Info size={18} />
            </motion.button>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-3 bg-white/5 rounded-full text-white/60 hover:text-primary transition-colors border border-white/10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-2xl shadow-2xl border-t border-white/5 md:hidden"
            >
              <nav className="p-8">
                <div className="space-y-6">
                  {[
                    { name: "PROJECTS", id: "projects" },
                    { name: "ABOUT", id: "about" },
                    { name: "CONTACT", id: "contact" },
                  ].map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        scrollToSection(item.id)
                        closeMenu()
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.1 }}
                      className="block w-full text-left py-2 text-xl font-light tracking-[0.2em] text-white/60 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Info Modal / Overlay */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setIsInfoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="gradient-glass-dark rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative mb-8 text-center">
                <motion.h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                  Welcome to <br /> <span className="text-primary italic font-light">My Space.</span>
                </motion.h2>
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  Crafting high-end digital experiences with cinematic motion.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Clean Build</h4>
                    <p className="text-white/30 text-xs">Optimized for speed and accessibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-1">Premium UX</h4>
                    <p className="text-white/30 text-xs">Aesthetic focus with smooth interactions.</p>
                  </div>
                </div>
              </div>

              <motion.button
                onClick={() => setIsInfoOpen(false)}
                className="w-full h-14 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-primary transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore More
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
