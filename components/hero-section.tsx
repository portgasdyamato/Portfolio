"use client"

import { motion } from "framer-motion"
import { ArrowDownCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-background to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 p-4"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello, I'm [Your Name]
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Frontend Developer & UI/UX Designer
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDownCircle className="w-10 h-10 text-primary cursor-pointer" />
        </motion.div>
      </motion.div>
    </section>
  )
}
