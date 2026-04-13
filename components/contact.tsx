"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Linkedin, Github, MessageCircle } from "lucide-react"
import Image from "next/image"

const DiscordIcon = ({ className }: { className?: string }) => (
  <Image 
    src="/dc.svg" 
    alt="Discord" 
    width={24} 
    height={24} 
    className={className}
    style={{
      filter: 'brightness(0) invert(1)'
    }}
  />
)

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sakshiagrahari2004@gmail.com",
    color: "#FFFFFF",
    description: "Drop me a line",
    handle: "sakshiagrahari2004@gmail.com",
  },
  {
    name: "Discord",
    icon: DiscordIcon,
    url: "https://discord.com/users/934897501054586900",
    color: "#FFFFFF",
    description: "Follow my journey",
    handle: "@scerilia",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/ethsakshi",
    color: "#FFFFFF",
    description: "Let's connect professionally",
    handle: "@Sakshi",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/portgasdyamato",
    color: "#FFFFFF",
    description: "Check out my code",
    handle: "@pippo",
  },

]

export default function Contact() { 
  const handleSocialClick = (url: string) => { 
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        y: -10,
        rotateX: 1,
        rotateY: -1,
      }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="bg-gradient-to-br from-[#FFC0CB] via-[#F59E9E] to-[#E88C8C] p-6 sm:p-8 md:p-10 rounded-[2.5rem] sm:rounded-[3rem] relative overflow-hidden shadow-2xl border border-white/30 mb-8 sm:mb-16 md:mb-24 lg:mb-32 group perspective-1000" 
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />
      
      {/* Animated Background Flora Pattern (Matching BookingCall) */}
      <div className="absolute inset-0 opacity-10 flex items-center justify-center grayscale contrast-150 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 400 400" className="animate-[spin_60s_linear_infinite] w-full h-full">
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M200,200 Q250,100 200,50 Q150,100 200,200"
              fill="none"
              stroke="white"
              strokeWidth="1"
              transform={`rotate(${i * 30} 200 200)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header with Icon Container */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm mb-6 relative"
          >
            <MessageCircle size={28} className="text-white" strokeWidth={1.5} />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight italic mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's connect and <br />
            <span className="opacity-70">create magic together!</span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-white/80 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 font-medium"
          >
            I'd love to hear from you. Drop me a line or follow my journey.
          </motion.p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.button
                key={social.name}
                onClick={() => handleSocialClick(social.url)}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  hover: { 
                    scale: 1.02,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    transition: { duration: 0.3 }
                  },
                  tap: { scale: 0.98 }
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="w-full h-20 md:h-24 flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] transition-all group/item shadow-lg border border-white/20 relative overflow-hidden"
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    variants={{
                      hover: { backgroundColor: "#1a0a0a" }
                    }}
                    className="p-2.5 bg-white/20 rounded-xl transition-colors duration-500"
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm sm:text-base text-white">{social.name}</h3>
                    <p className="text-[10px] sm:text-xs text-white/60 font-mono tracking-tight uppercase">
                      {social.handle}
                    </p>
                  </div>
                </div>

                <motion.div 
                  variants={{
                    hover: { x: 5, y: -5, opacity: 1 }
                  }}
                  className="opacity-40 transition-all pr-2"
                >
                  <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={1.5} />
                </motion.div>
              </motion.button>
            )
          })}
        </div>

        {/* Call to action footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 md:mt-12 text-center"
        >
          <p className="text-white/60 italic text-sm font-medium tracking-wide">
            "Great things happen when creative minds connect!" 🚀
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
