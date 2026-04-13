"use client"

import { motion } from "framer-motion"
import { Calendar, Coffee, Laptop, Briefcase, Zap, ArrowRight, Sparkles } from "lucide-react"

export default function BookingCall() {
  const options = [
    { name: "Collaboration", icon: Zap },
    { name: "Interview", icon: Briefcase },
    { name: "Virtual Coffee", icon: Coffee },
    { name: "Freelance", icon: Laptop },
  ]

  const handleBookingClick = () => {
    window.open("https://cal.com/sakshi-pippo/contactme", "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[450px] mb-12 group animate-float"
    >
      <motion.div 
        onClick={handleBookingClick}
        whileHover={{ y: -5, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-white/40 p-8 backdrop-blur-xl transition-all hover:bg-white/50 border border-white/50 shadow-[0_8px_32px_rgba(245,158,158,0.15)]"
      >
        {/* Animated Background Elements */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F59E9E]/20 blur-3xl transition-all duration-700 group-hover:bg-[#F59E9E]/30 group-hover:scale-110" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#FFC0CB]/20 blur-3xl transition-all duration-700 group-hover:bg-[#FFC0CB]/30 group-hover:scale-110" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F59E9E] to-[#FFC0CB] text-white shadow-lg shadow-[#F59E9E]/20">
                <Calendar size={24} />
              </div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1 text-[#F59E9E]"
              >
                <Sparkles size={14} fill="currentColor" />
              </motion.div>
            </div>
            
            <motion.div
              className="flex items-center gap-2 rounded-full bg-[#F59E9E]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#F59E9E] border border-[#F59E9E]/20"
            >
              Let's Connect <ArrowRight size={12} strokeWidth={3} />
            </motion.div>
          </div>

          <h3 className="mb-3 text-2xl md:text-3xl font-bold text-[#1a0a0a] leading-tight" style={{ fontFamily: "qax" }}>
            Ready to start something <br />
            <span className="bg-gradient-to-r from-[#F59E9E] via-[#E88C8C] to-[#F59E9E] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">
              Great together?
            </span>
          </h3>
          
          <p className="mb-8 text-sm md:text-base text-black/60 leading-relaxed font-outfit font-medium">
            I'm always open to discussing new opportunities, collaborations, or just having a friendly intro chat over a virtual coffee.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {options.map((opt, i) => {
              const Icon = opt.icon
              return (
                <motion.div 
                  key={opt.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 border border-white/40 shadow-sm transition-all hover:bg-white/80 hover:shadow-md"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F59E9E]/15 text-[#F59E9E]">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-bold text-black/80 uppercase tracking-widest">{opt.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Interactive hover line */}
        <div className="absolute bottom-0 left-0 h-1.5 w-full scale-x-0 bg-gradient-to-r from-[#F59E9E] via-[#FFC0CB] to-[#F59E9E] transition-transform duration-500 origin-left group-hover:scale-x-100" />
      </motion.div>
    </motion.div>
  )
}
