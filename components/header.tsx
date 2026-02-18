"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Info } from "lucide-react"
import Link from "next/link"

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

  const closeInfo = () => {
    setIsInfoOpen(false)
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
        className="py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center bg-[#FFE4E4]/90 backdrop-blur-md fixed top-0 left-0 right-0 pl-4 md:pl-20 z-50 shadow-sm"
      >
        <motion.button
          onClick={() => scrollToSection("home")}
          style={{ fontFamily: "Bianca", }}
          className="text-lg sm:text-xl cursor-pointer px-8 hover:text-gray-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sakshi Agrahari
        </motion.button>
        
        {/* Desktop Navigation */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8">
            {[
              { name: "PROJECTS", id: "projects" },
              { name: "ABOUT", id: "about" },
              { name: "CONTACT", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-md sm:text-md hover:text-gray-600 transition-colors tracking-widest"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Info Button - Desktop */}
          <motion.button
            onClick={toggleInfo}
            className="hidden md:block p-2 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Site Info & Easter Eggs"
          >
            <Info className="w-4 h-4 text-black hover:text-gray-600 transition-colors duration-200" />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Info Button - Mobile */}
          <motion.button
            onClick={toggleInfo}
            className="p-2 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Site Info"
          >
            <Info className="w-4 h-4 text-black hover:text-gray-600 transition-colors duration-200" />
          </motion.button>
          
          <motion.button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </motion.button>
        </div>
        
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
                      className="block w-full text-left py-3 px-4 text-base font-semibold tracking-widest text-gray-800 hover:bg-white/50 rounded-lg transition-colors"
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

      {/* Info Modal */}
      <AnimatePresence>
        {isInfoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
            onClick={closeInfo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="gradient-glass rounded-2xl p-6 max-w-md w-full max-h-[80vh] min-h-[420px] h-[520px] overflow-y-auto shadow-2xl border border-white/40 custom-scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Hide scrollbars for this modal only */}
              <style jsx global>{`
                .custom-scrollbar-hide {
                  scrollbar-width: none; /* Firefox */
                  -ms-overflow-style: none; /* IE and Edge */
                }
                .custom-scrollbar-hide::-webkit-scrollbar {
                  display: none; /* Chrome, Safari, Opera */
                }
              `}</style>
              <div className="relative mb-6">
                <motion.h2 
                  className="text-2xl font-bold text-gray-800 text-center mb-2"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  🎮 Easter Eggs
                </motion.h2>
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 64 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
                <motion.button
                  onClick={closeInfo}
                  className="absolute top-0 right-0 p-2 bg-gray-200/30 hover:bg-white/30 rounded-full transition-all duration-200 hover:rotate-90"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <X className="w-5 h-5 text-gray-700" />
                </motion.button>
              </div>
              
              <div className="grid grid-cols-1 gap-4 cursor-pointer">
                {[{
                  icon: "🎨",
                  title: "Animated Character",
                  items: [
                    "A small character follows the cursor around the screen, riding a skateboard while painting.",
                    "The character can also jump, making the interaction feel lively and playful.",
                    "On double-click, the character stops and rests in its place.",
                    "Once stopped, you can hover over the character to see a happy expression, adding a touch of personality.",
                    "If the cursor stays still for a while, the character switches to a resting animation (like sitting and sipping coffee)."
                  ],
                  color: "from-blue-100 to-blue-50",
                  borderColor: "border-blue-200"
                },
                {
                  icon: "📚",
                  title: "Interactive Education Timeline",
                  items: [
                    "The Education section features a central timeline with cards branching out on both sides.",
                    "Each timeline point has a unique icon representing the institute or achievement.",
                    "Clicking on an icon opens a modal popup displaying detailed information about the institute, achievements, and experiences."
                  ],
                  color: "from-pink-100 to-pink-50",
                  borderColor: "border-pink-200"
                },
                {
                  icon: "🌐",
                  title: "Live Projects Certifications",
                  items: [
                    "Every project includes a clickable live demo and a Git Repository button to view the code.",
                    "Certifications are fully linked to their respective achievement pages."
                  ],
                  color: "from-purple-100 to-purple-50",
                  borderColor: "border-purple-200"
                },
                {
                  icon: "🔗",
                  title: "Social Profiles",
                  items: [
                    "All social links are active, redirecting to my live profiles across platforms.",
                    "Each profile is styled with hover effects for better interactivity."
                  ],
                  color: "from-green-100 to-green-50",
                  borderColor: "border-green-200"
                },
                {
                  icon: "✨",
                  title: "Creative Design Elements",
                  items: [
                    "Hover effects on all project cards to make them visually engaging.",
                    "Smooth scroll animations between sections for seamless navigation.",
                    "Backdrop blur effects throughout the site for a modern aesthetic."
                  ],
                  color: "from-orange-100 to-orange-50",
                  borderColor: "border-orange-200"
                },
                {
                  icon: "🛠️",
                  title: "Tech Stack",
                  items: [
                    "Next.js 14 with TypeScript for a modern and scalable web application.",
                    "Framer Motion for smooth and engaging animations.",
                    "Tailwind CSS for responsive and customizable design.",
                    "Lucide React for lightweight and versatile icons.",
                    "Custom pixel art fonts to enhance the visual appeal."
                  ],
                  color: "from-cyan-100 to-cyan-50",
                  borderColor: "border-cyan-200"
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  items: [
                    "Optimized layouts for mobile, tablet, and desktop devices.",
                    "Mobile dropdown menu with smooth animations.",
                    "Hidden decorative elements on mobile for better user experience.",
                    "Education timeline adapts to cards on smaller screens.",
                    "Pixel character interaction works seamlessly across all devices."
                  ],
                  color: "from-orange-100 to-orange-50",
                  borderColor: "border-orange-200"
                }].map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`gradient-glass p-4 rounded-xl border ${section.borderColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div 
                      className="flex items-center mb-3 pb-2 border-b border-gray-300/50"
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span 
                        className="text-xl mr-3 p-2 rounded-full bg-white/30"
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        {section.icon}
                      </motion.span>
                      <motion.h3
                        className="font-bold text-gray-800 text-sm group-hover:text-gray-900 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {section.title}
                      </motion.h3>
                      <motion.div
                        className="ml-auto w-2 h-2 rounded-full bg-gray-700 opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 + itemIndex * 0.05 }}
                          className="text-md text-gray-800 flex items-start group/item hover:bg-white/10 p-2 rounded-lg transition-all duration-200 cursor-pointer"
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          style={{ fontFamily: "Pixel" }}
                        >
                          <motion.span 
                            className="text-gray-500 mr-2 mt-0.5 font-bold"
                            whileHover={{ scale: 1.3, color: "#374151" }}
                            transition={{ duration: 0.2 }}
                          >
                            •
                          </motion.span>
                          <motion.span 
                            className="leading-relaxed group-hover/item:text-gray-950 transition-colors"
                            whileHover={{ fontWeight: 500 }}
                          >
                            {item}
                          </motion.span>
                          <motion.div
                            className="ml-auto opacity-0 group-hover/item:opacity-100"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span className="text-xs text-gray-500">✨</span>
                          </motion.div>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100 p-4 rounded-xl border border-pink-200 text-center mt-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.p 
                    className="text-sm text-pink-800 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    🚀 "Great things happen when creative minds connect!"
                  </motion.p>
                  
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
