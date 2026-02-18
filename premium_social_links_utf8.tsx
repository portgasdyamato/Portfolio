"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { name: "GITHUB", icon: Github, url: "https://github.com/portgasdyamato", color: "hover:bg-gray-800" },
  { name: "LINKEDIN", icon: Linkedin, url: "https://www.linkedin.com/in/sakshi-902777290/", color: "hover:bg-blue-600" },
  { name: "EMAIL", icon: Mail, url: "mailto:sakshiagrahari2004@gmail.com", color: "hover:bg-purple-600" },
]

export default function SocialLinks() {
  return (
    <div className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 glass-card p-12 rounded-[3rem]">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-2 uppercase">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-muted-foreground font-inter">Open for collaborations and interesting conversations.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl glass transition-all group ${link.color} hover:text-white font-bold font-inter tracking-widest text-xs`}
              >
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                {link.name}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
