"use client"

import { motion } from "framer-motion"
import { Calendar, Coffee, Laptop, Briefcase, Zap, ArrowRight, Sparkles, MessageSquare } from "lucide-react"

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
      className="w-full max-w-[450px] mb-12 group perspective-1000"
    >
      <motion.div 
        onClick={handleBookingClick}
        whileHover={{ 
          y: -8,
          rotateX: 2,
          rotateY: -2,
          boxShadow: "0 20px 40px rgba(245, 158, 158, 0.2)"
        }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FFF5F7] via-[#FFE4E9] to-[#FFD1DA] p-8 backdrop-blur-2xl transition-all duration-500 border border-white/60 shadow-[0_8px_32px_rgba(245,158,158,0.1)]"
      >
        {/* Decorative Floating Mesh Gradient */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#F59E9E]/30 to-transparent blur-[60px] transition-all duration-1000 group-hover:scale-125" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-tr from-[#FFC0CB]/30 to-transparent blur-[60px] transition-all duration-1000 group-hover:scale-125" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <div className="absolute inset-0 bg-[#F59E9E]/20 rounded-2xl blur-sm group-hover:blur-md transition-all" />
                <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-white/90 text-[#F59E9E] shadow-sm">
                  <Calendar size={22} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#F59E9E]/80 tracking-widest uppercase block mb-0.5">Scheduler</span>
                <div className="flex items-center gap-1.5 font-outfit font-black text-[#1a0a0a] text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#F59E9E] animate-pulse" />
                  Available to Book
                </div>
              </div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-[#F59E9E] rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white shadow-sm transition-all"
            >
              Let's sync <ArrowRight size={12} strokeWidth={3} />
            </motion.div>
          </div>

          <h3 className="mb-4 text-2xl md:text-3xl font-bold text-[#1a0a0a] leading-[1.15]" style={{ fontFamily: "qax" }}>
            Ready to start <br />
            <span className="relative">
              something great?
              <motion.div 
                className="absolute -bottom-1 left-0 h-px w-full bg-[#F59E9E]/40"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </h3>
          
          <p className="mb-8 text-sm md:text-base text-black/50 leading-relaxed font-outfit font-medium max-w-[90%]">
            Discuss opportunities, collaborations, or just a friendly intro chat over a virtual coffee.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {options.map((opt, i) => {
              const Icon = opt.icon
              return (
                <motion.div 
                  key={opt.name}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    borderColor: "rgba(245, 158, 158, 0.4)"
                  }}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/50 p-3 border border-white/40 shadow-sm transition-all duration-300"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F59E9E]/10 text-[#F59E9E]">
                    <Icon size={14} />
                  </div>
                  <span className="text-[10px] font-bold text-black/70 tracking-tight">{opt.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Subtle Glass Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </motion.div>
    </motion.div>
  )
}
