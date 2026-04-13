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
          y: -10,
          rotateX: 1,
          rotateY: -1,
        }}
        whileTap={{ scale: 0.98 }}
        className="relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#FFC0CB] via-[#F59E9E] to-[#E88C8C] p-8 md:p-10 transition-all duration-700 border border-white/30 shadow-2xl"
      >
        {/* Animated Background Flora Pattern */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center grayscale contrast-150">
          <svg width="400" height="400" viewBox="0 0 400 400" className="animate-[spin_40s_linear_infinite]">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d="M200,200 Q250,100 200,50 Q150,100 200,200"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                transform={`rotate(${i * 45} 200 200)`}
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div className="p-3.5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm">
              <Calendar size={28} className="text-white" strokeWidth={1.5} />
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-[#1a0a0a] text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-lg flex items-center gap-2"
            >
              Book Now <ArrowRight size={14} />
            </motion.div>
          </div>

          <div className="space-y-4 mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-[1.05] tracking-tight italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ready to create <br />
              <span className="opacity-70">something magic?</span>
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-[280px]">
              Schedule a virtual coffee, intro call, or discuss a potential project/interview.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/20">
            {options.map((opt, i) => (
              <span 
                key={opt.name}
                className="px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/10"
              >
                {opt.name}
              </span>
            ))}
          </div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </motion.div>
    </motion.div>
  )
}
