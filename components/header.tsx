"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-4 px-6 flex justify-between items-center bg-[#FFE4E4] sticky top-0 z-50 backdrop-blur-sm"
    >
      <motion.button
        onClick={() => scrollToSection("home")}
        style={{ fontFamily: "Bianca", }}
        className="text-xl cursor-pointer hover:text-gray-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Sakshi Agrhari
      </motion.button>
      <nav className="space-x-8">
        {[
          { name: "PROJECTS", id: "projects" },
          { name: "ABOUT", id: "about" },
          { name: "CONTACT", id: "contact" },
        ].map((item) => (
          <motion.button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="text-sm hover:text-gray-600 transition-colors" style={{ fontFamily: "qax", }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.name}
          </motion.button>
        ))}
      </nav>
    </motion.header>
  )
}
