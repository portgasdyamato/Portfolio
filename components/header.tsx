"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
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

  return (
    <div className="relative">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          opacity: 1, 
          y: isVisible ? 0 : -100 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center bg-[#FFE4E4]/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm"
      >
        <motion.button
          onClick={() => scrollToSection("home")}
          style={{ fontFamily: "Bianca", }}
          className="text-lg sm:text-xl cursor-pointer hover:text-gray-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sakshi Agrhari
        </motion.button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8">
          {[
            { name: "PROJECTS", id: "projects" },
            { name: "ABOUT", id: "about" },
            { name: "CONTACT", id: "contact" },
          ].map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="text-xs sm:text-sm hover:text-gray-600 transition-colors" style={{ fontFamily: "qax", }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </motion.button>
        
        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#FFE4E4] shadow-lg border-t border-gray-200 md:hidden"
            >
              <nav className="p-4">
                <div className="space-y-3">
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
                      className="block w-full text-left py-3 px-4 text-base font-medium text-gray-800 hover:bg-white/50 rounded-lg transition-colors"
                      style={{ fontFamily: "qax" }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
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
    </div>
  )
}
