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
      className="bg-[#FFE4E4] p-6 rounded-3xl"
    >
      <div className="flex justify-between">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            whileHover={{ y: -2 }}
            className="text-sm hover:text-gray-600 transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
