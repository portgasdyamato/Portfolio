"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Mail, Instagram, Linkedin, Github, Code2, MessageCircle } from "lucide-react"
import Image from "next/image"

const DiscordIcon = ({ className }: { className?: string }) => (
  <Image 
    src="/dc.svg" 
    alt="Discord" 
    width={24} 
    height={24} 
    className={className}
    style={{
      filter: 'brightness(0) saturate(100%) invert(64%) sepia(73%) saturate(1458%) hue-rotate(315deg) brightness(102%) contrast(101%)'
    }}
  />
)

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:sakshiagrahari2004@gmail.com",
    color: "#FF6B6B",
    description: "Drop me a line",
    handle: "sakshiagrahari2004@gmail.com",
  },
  {
    name: "Discord",
    icon: DiscordIcon,
    url: "https://discord.com/users/934897501054586900",
    color: "#FF9999",
    description: "Follow my journey",
    handle: "@scerilia",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sakshi-902777290/",
    color: "#FFB5B5",
    description: "Let's connect professionally",
    handle: "@Sakshi",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/portgasdyamato",
    color: "#FF7F7F",
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
      transition={{ delay: 0.6 }}
      className="bg-gradient-to-br from-[#FFE4E4] via-[#FFD1D1] to-[#FFB5B5] p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-lg mt-8 sm:mt-16 md:mt-24 lg:mt-32" 
    >
      {/* Sharp Petal Flower Pattern Background (2nd pattern style) */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          {/* Large Sharp Petal Flower */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(16)].map((_, i) => {
              const angle = (i * 22.5 * Math.PI) / 180
              const x1 = 200 + 70 * Math.cos(angle)
              const y1 = 200 + 70 * Math.sin(angle)
              const x2 = 200 + 90 * Math.cos(angle)
              const y2 = 200 + 90 * Math.sin(angle)
              const nextAngle = ((i + 1) * 22.5 * Math.PI) / 180
              const x3 = 200 + 70 * Math.cos(nextAngle)
              const y3 = 200 + 70 * Math.sin(nextAngle)

              return (
                <motion.path
                  key={i}
                  d={`M200,200 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                  stroke="#FF6B6B"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              )
            })}
          </motion.g>

          {/* Medium Sharp Petal Flower */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(12)].map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const x1 = 120 + 35 * Math.cos(angle)
              const y1 = 120 + 35 * Math.sin(angle)
              const x2 = 120 + 50 * Math.cos(angle)
              const y2 = 120 + 50 * Math.sin(angle)
              const nextAngle = ((i + 1) * 30 * Math.PI) / 180
              const x3 = 120 + 35 * Math.cos(nextAngle)
              const y3 = 120 + 35 * Math.sin(nextAngle)

              return (
                <motion.path
                  key={i}
                  d={`M120,120 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                  stroke="#FF9999"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.12,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              )
            })}
          </motion.g>

          {/* Small Sharp Petal Flower */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {[...Array(10)].map((_, i) => {
              const angle = (i * 36 * Math.PI) / 180
              const x1 = 320 + 25 * Math.cos(angle)
              const y1 = 320 + 25 * Math.sin(angle)
              const x2 = 320 + 35 * Math.cos(angle)
              const y2 = 320 + 35 * Math.sin(angle)
              const nextAngle = ((i + 1) * 36 * Math.PI) / 180
              const x3 = 320 + 25 * Math.cos(nextAngle)
              const y3 = 320 + 25 * Math.sin(nextAngle)

              return (
                <motion.path
                  key={i}
                  d={`M320,320 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                  stroke="#FFB5B5"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.08,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              )
            })}
          </motion.g>
        </svg>
      </div>

      {/* Floating Sharp Petal Elements */}
      <div className="absolute inset-0 opacity-12">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 1.2,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {[...Array(8)].map((_, j) => {
                const angle = (j * 45 * Math.PI) / 180
                const x1 = 10 + 6 * Math.cos(angle)
                const y1 = 10 + 6 * Math.sin(angle)
                const x2 = 10 + 8 * Math.cos(angle)
                const y2 = 10 + 8 * Math.sin(angle)
                const nextAngle = ((j + 1) * 45 * Math.PI) / 180
                const x3 = 10 + 6 * Math.cos(nextAngle)
                const y3 = 10 + 6 * Math.sin(nextAngle)

                return (
                  <path
                    key={j}
                    d={`M10,10 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                    stroke="#FF7F7F"
                    strokeWidth="0.5"
                    fill="none"
                  />
                )
              })}
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header with Sharp Petal Flower Icon */}
        <div className="text-center mb-6 sm:mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/30 backdrop-blur-sm rounded-full mb-3 sm:mb-4 relative"
          >
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" className="sm:w-8 sm:h-8">
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180
                  const x1 = 16 + 8 * Math.cos(angle)
                  const y1 = 16 + 8 * Math.sin(angle)
                  const x2 = 16 + 12 * Math.cos(angle)
                  const y2 = 16 + 12 * Math.sin(angle)
                  const nextAngle = ((i + 1) * 30 * Math.PI) / 180
                  const x3 = 16 + 8 * Math.cos(nextAngle)
                  const y3 = 16 + 8 * Math.sin(nextAngle)

                  return (
                    <motion.path
                      key={i}
                      d={`M16,16 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                      stroke="#FF6B6B"
                      strokeWidth="1.5"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  )
                })}
              </motion.g>
            </svg>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
          >
            Let's Connect and Create Magic Together!
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-700 text-sm sm:text-base md:text-lg flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            I'd love to hear from you
          </motion.p>
        </div>

        {/* Social Links */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <motion.button
                key={social.name}
                onClick={() => handleSocialClick(social.url)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,  
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex h-16 sm:h-20 md:h-24 items-center justify-between p-3 sm:p-4 md:p-5 bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl hover:bg-white/60 transition-all group/item shadow-sm border border-white/30 relative overflow-hidden"
              >
                {/* Animated sharp petal decoration */}
                <motion.div
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover/item:opacity-25"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60 * Math.PI) / 180
                      const x1 = 6 + 3 * Math.cos(angle)
                      const y1 = 6 + 3 * Math.sin(angle)
                      const x2 = 6 + 4 * Math.cos(angle)
                      const y2 = 6 + 4 * Math.sin(angle)
                      const nextAngle = ((i + 1) * 60 * Math.PI) / 180
                      const x3 = 6 + 3 * Math.cos(nextAngle)
                      const y3 = 6 + 3 * Math.sin(nextAngle)

                      return (
                        <path
                          key={i}
                          d={`M6,6 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                          stroke={social.color}
                          strokeWidth="0.5"
                          fill="none"
                        />
                      )
                    })}
                  </svg>
                </motion.div>

                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <motion.div
                    className="p-2 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl shadow-sm relative"
                    style={{ backgroundColor: `${social.color}30` }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" style={{ color: social.color }} />

                    {/* Small sharp petal decoration around icon */}
                    <motion.div
                      className="absolute -top-1 -right-1 opacity-40"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        {[...Array(4)].map((_, i) => {
                          const angle = (i * 90 * Math.PI) / 180
                          const x1 = 5 + 2 * Math.cos(angle)
                          const y1 = 5 + 2 * Math.sin(angle)
                          const x2 = 5 + 3 * Math.cos(angle)
                          const y2 = 5 + 3 * Math.sin(angle)
                          const nextAngle = ((i + 1) * 90 * Math.PI) / 180
                          const x3 = 5 + 2 * Math.cos(nextAngle)
                          const y3 = 5 + 2 * Math.sin(nextAngle)

                          return (
                            <path
                              key={i}
                              d={`M5,5 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                              stroke={social.color}
                              strokeWidth="0.5"
                              fill="none"
                            />
                          )
                        })}
                      </svg>
                    </motion.div>
                  </motion.div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">{social.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1" style={{ fontFamily: "qax", }}>{social.description}</p>
                    <p className="text-xs text-gray-500 font-mono bg-white/30 px-2 py-1 rounded-full inline-block">
                      {social.handle}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                  className="opacity-60 group-hover/item:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
                </motion.div>
              </motion.button>
            )
          })}
        </div>

        {/* Stats with sharp petal decorations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center"
        >
          {[
            { number: "24h", label: "Response Time" },
            { number: "3+", label: "Platforms" },
            { number: "100%", label: "Professional" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2 + index * 0.1, type: "spring" }}
              className="p-3 sm:p-4 bg-white/40 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm border border-white/20 relative"
            >
              {/* Sharp petal decoration */}
              <motion.div
                className="absolute top-2 right-2 opacity-15"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  {[...Array(5)].map((_, i) => {
                    const angle = (i * 72 * Math.PI) / 180
                    const x1 = 5 + 2 * Math.cos(angle)
                    const y1 = 5 + 2 * Math.sin(angle)
                    const x2 = 5 + 3 * Math.cos(angle)
                    const y2 = 5 + 3 * Math.sin(angle)
                    const nextAngle = ((i + 1) * 72 * Math.PI) / 180
                    const x3 = 5 + 2 * Math.cos(nextAngle)
                    const y3 = 5 + 2 * Math.sin(nextAngle)

                    return (
                      <path
                        key={i}
                        d={`M5,5 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`}
                        stroke="#FF6B6B"
                        strokeWidth="0.5"
                        fill="none"
                      />
                    )
                  })}
                </svg>
              </motion.div>

              <div className="text-sm sm:text-base md:text-lg font-bold text-gray-800">{stat.number}</div>
              <div className="text-xs sm:text-xs text-gray-600" style={{ fontFamily: "qax", }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action with sharp petal line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="mt-6 sm:mt-8 text-center relative"
        >
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -top-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            <svg width="64" height="8" viewBox="0 0 64 8" fill="none">
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180
                const x1 = 32 + 2 * Math.cos(angle)
                const y1 = 4 + 2 * Math.sin(angle)
                const x2 = 32 + 3 * Math.cos(angle)
                const y2 = 4 + 3 * Math.sin(angle)
                const nextAngle = ((i + 1) * 60 * Math.PI) / 180
                const x3 = 32 + 2 * Math.cos(nextAngle)
                const y3 = 4 + 2 * Math.sin(nextAngle)

                return (
                  <path key={i} d={`M32,4 L${x1},${y1} L${x2},${y2} L${x3},${y3} Z`} fill="#FF6B6B" opacity={0.6} />
                )
              })}
            </svg>
          </motion.div>
          <p className="text-gray-700 italic text-sm sm:text-base">"Great things happen when creative minds connect!" 🚀</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
