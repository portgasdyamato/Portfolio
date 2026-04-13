"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles, Layers, Folder as FolderIcon, Send } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import Folder from './ui/Folder'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const NAV_ITEMS = [
  { label: "About", id: "about", path: "/#about", color: "#FDE047", icon: <Sparkles size={8} /> },
  { label: "Work", id: "work", path: "/work", color: "#1E1E1E", icon: <Layers size={8} /> },
  { label: "Skills", id: "skills", path: "/#skills", color: "#F59E9E", icon: <FolderIcon size={8} /> },
  { label: "Contact", id: "contact", path: "/#contact", color: "#A78BFA", icon: <Send size={8} /> },
]

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 10) setVisible(true)
      else if (currentScrollY < lastScrollY) setVisible(true)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) setVisible(false)
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastScrollY])

  const handleNavClick = (id: string, path?: string) => {
    if (path) {
      if (path.startsWith("/#") && pathname === "/") {
        scrollTo(path.replace("/#", ""))
      } else {
        router.push(path)
      }
    } else {
      scrollTo(id)
    }
    setMenuOpen(false)
  }

  return (
    <div className="fixed top-6 sm:top-8 left-0 right-0 z-[1000] px-4 sm:px-6 flex justify-center pointer-events-none">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto"
      >
        {/* ── UNIFIED BOUTIQUE NAV PILL ── */}
        <div className="flex items-center bg-white/60 backdrop-blur-3xl border border-black/[0.04] p-1.5 sm:p-2 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.06)] gap-1 sm:gap-2">
          
          {/* Main Navigation Folders (Desktop & Tablet) */}
          <nav className="hidden sm:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <Folder 
                key={item.id}
                color={item.color}
                size={0.65}
                label={item.label}
                active={pathname === item.path || (pathname === "/" && item.path === "/#index" && false)}
                items={[item.icon, item.icon, item.icon]}
                onClick={() => handleNavClick(item.id, item.path)}
                className="hover:scale-105 transition-transform"
              />
            ))}
          </nav>

          {/* Compressed Mobile Toggle (Phones Only) */}
          <div className="sm:hidden flex items-center pr-2">
             <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-black/60 hover:text-black transition-all bg-black/[0.02]"
             >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
             {/* Small indicator on mobile if any folder is active */}
             <div className="ml-1 w-1.5 h-1.5 rounded-full bg-[#F59E9E] animate-pulse" />
          </div>

          {/* Separator Line (Desktop/Tablet Only) */}
          <div className="h-8 w-[1px] bg-black/[0.1] mx-1 hidden sm:block" />

          {/* Scrapbook Trigger Button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNavClick("scrapbook", "/#scrapbook")}
            className="w-10 sm:w-11 h-10 sm:h-11 rounded-full flex items-center justify-center bg-[#1a0a0a] text-white hover:bg-black transition-all shadow-[0_4px_12px_rgba(0,0,0,0.1)] group relative overflow-hidden shrink-0"
          >
            <div className="absolute inset-0 bg-[#F59E9E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <circle cx="7" cy="7" r="4.5" fill="white" />
              <circle cx="17" cy="7" r="4.5" fill="white" />
              <circle cx="7" cy="17" r="4.5" fill="white" />
              <circle cx="17" cy="17" r="4.5" fill="white" />
            </svg>
          </motion.button>

        </div>

        {/* HIGH-FIDELITY MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10, rotate: -2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 p-4 bg-white/95 backdrop-blur-3xl rounded-[32px] border border-black/0.05 shadow-2xl sm:hidden w-[300px] origin-top"
            >
              <div className="grid grid-cols-2 gap-3">
                 {NAV_ITEMS.map((item, idx) => (
                   <motion.button
                     key={item.id}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.05 } }}
                     onClick={() => handleNavClick(item.id, item.path)}
                     className={`flex flex-col items-center justify-center p-4 rounded-[24px] border border-black/0.03 transition-all relative overflow-hidden ${pathname === item.path ? 'bg-black/[0.02]' : 'hover:bg-black/[0.01]'}`}
                   >
                       <div className="scale-[0.8] mb-3 transform-gpu">
                          <Folder 
                            color={item.color} 
                            items={[item.icon, item.icon, item.icon]}
                            active={pathname === item.path}
                          />
                       </div>
                       <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${pathname === item.path ? 'text-[#F59E9E]' : 'text-black/40'}`}>
                         {item.label}
                       </span>
                   </motion.button>
                 ))}
                 
                 <motion.button
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
                   onClick={() => handleNavClick("scrapbook", "/#scrapbook")}
                   className="col-span-2 flex items-center justify-center gap-3 p-4 rounded-[24px] bg-[#1a0a0a] text-white mt-1 shadow-lg"
                 >
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scrapbook</span>
                    <div className="flex gap-1.5 opacity-40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                 </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.header>
    </div>
  )
}
