"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Send, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-1 md:col-span-2 relative overflow-hidden flex flex-col justify-center min-h-[450px] md:min-h-[550px] p-8 md:p-12 glass-card rounded-[2.5rem]"
    >
      {/* Dynamic Background Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-orange-500/10 opacity-50 dark:opacity-20" />
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-pink-500/20 blur-[100px] rounded-full animate-pulse" />

      <div className="max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 text-xs font-bold mb-6 uppercase tracking-widest text-purple-600 dark:text-purple-400 font-inter"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <h2 className="text-xl md:text-2xl font-bold font-outfit text-foreground/80 lowercase tracking-tight">
            I'm <span className="text-purple-600">Sakshi Agrahari</span> —
          </h2>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 font-outfit uppercase tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Crafting <span className="text-gradient">Meaningful</span> Digital Experiences.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Innovator blending web aesthetics with machine intelligence to bring bold ideas to life.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-purple-500/20 active:scale-95"
          >
            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/80 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-foreground border border-white/20 backdrop-blur-md rounded-2xl font-bold transition-all active:scale-95"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>

      {/* Hero GIF Decoration */}
      <motion.div
        className="hidden lg:block absolute bottom-12 right-12 w-48 h-48"
        initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
        animate={{ opacity: 1, scale: 1, rotate: -5 }}
        transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/bk3.gif"
          alt="Creative focus"
          width={400}
          height={400}
          className="w-full h-full object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
          unoptimized
        />
      </motion.div>
    </motion.div>
  )
}
