"use client"

import { motion } from "framer-motion"

const socialLinks = [
  { name: "GITHUB", url: "https://github.com/portgasdyamato" },
  { name: "EMAIL", url: "mailto:sakshiagrahari2004@gmail.com" },
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/sakshi-902777290/" },
]

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="bg-[#FFE4E4] p-8 rounded-3xl"
    >
      <div className="flex justify-between items-center mb-8">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -2 }}
            className="text-sm font-bold hover:text-gray-600 transition-colors tracking-widest"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
      
      <div className="border-t border-black/10 pt-6 text-center">
        <p className="text-[10px] sm:text-xs font-bold font-outfit text-gray-800 uppercase tracking-[0.2em] opacity-60">
          © 2026 SAKSHI AGRAHARI • BUILT FOR IMPACT
        </p>
      </div>
    </motion.div>
  )
}
