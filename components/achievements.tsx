"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal, Coins } from "lucide-react"
import { cn } from "@/lib/utils"

const achievements = [
  {
    icon: Trophy,
    title: "UI UX Solvathon Winner",
    description: "Won 1st Place among 700+ participants for in-depth UX research and high-fidelity UI design.",
    year: "2025",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Star,
    title: "Harvard Aspire Scholar",
    description: "Selected as a scholar for the Harvard Aspire Leadership Program, focusing on AI-integrated leadership.",
    year: "2025",
    color: "from-brand-400 to-brand-600",
  },
  {
    icon: Trophy,
    title: "GSSoc Campus Ambassador & Contributor",
    description: "Organised the event and contributed significantly to open source projects.",
    year: "2025",
    color: "from-yellow-400 to-amber-600",
  },
  {
    icon: Award,
    title: "Gen AI Exchange",
    description: "Innovating using GoogleCloud's Gen AI tools to build practical AI solutions.",
    year: "2025",
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: Star,
    title: "TechFest Winner",
    description: "2nd runner up in state level TechFest for developing a Culinary website with integrated AI chatbot.",
    year: "2024",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: Coins,
    title: "SheFi 14 Scholar",
    description: "Selected for US-based program empowering women in Web3 and blockchain technology.",
    year: "2025",
    color: "from-brand-400 to-brand-600",
  },
  {
    icon: Medal,
    title: "Hackathon Runner up",
    description: "2nd runner up in a hackathon focusing on turning designs into code using AI technology.",
    year: "2025",
    color: "from-orange-400 to-brand-600",
  },
]

export default function Achievements() {
  return (
    <div className="py-20 relative">
      {/* Background Decorative Rings (Contained) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] border border-brand-500/5 rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] border border-brand-500/5 rounded-full" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-500/5 dark:bg-brand-500/10 rounded-full text-brand-500 font-black tracking-[0.2em] uppercase text-[10px] mb-6">
            <Trophy size={12} /> Milestone recognition
          </div>
          <h2 className="text-4xl md:text-7xl font-bold font-outfit text-[#1a0a0a] dark:text-white leading-[0.9] tracking-tighter italic">
            Achievements & <span className="text-[#1a0a0a]/20 dark:text-white/20">Awards.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-20">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            // Dynamic column spans for a Bento feel
            const isLarge = index === 0 || index === 3
            
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={cn(
                  "group relative p-10 bg-white dark:bg-[#1a1a1a] border border-black/[0.05] dark:border-white/5 rounded-[3rem] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2",
                  "shadow-[0_10px_20px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_45px_100px_-25px_rgba(0,0,0,0.15),0_15px_30px_-15px_rgba(0,0,0,0.1)] hover:border-brand-500/30",
                  isLarge ? "md:col-span-3 lg:col-span-4 min-h-[400px]" : "md:col-span-3 lg:col-span-2 min-h-[350px]"
                )}
              >
                {/* Subtle Interior Glow - Contain it inside the card using overflow-hidden on the INNER container if needed or just use relative */}
                <div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none">
                  <div className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 blur-[120px]`} />
                  <Icon className="absolute -bottom-10 -right-10 w-48 h-48 text-brand-500/[0.01] dark:text-white/[0.01] rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="flex justify-between items-start mb-12">
                      <div className={cn(
                        "w-16 h-16 rounded-[1.8rem] flex items-center justify-center bg-white dark:bg-white/5 border border-brand-500/10 shadow-sm group-hover:bg-brand-500 group-hover:shadow-[0_10px_20px_-8px_rgba(245,158,158,0.5)] transition-all duration-500 transform group-hover:rotate-6",
                      )}>
                        <Icon className="w-8 h-8 text-brand-600 dark:text-white group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[10px] font-black font-inter text-brand-500/40 tracking-[0.3em] uppercase">
                           Class of {achievement.year}
                         </span>
                         <div className="h-[2px] w-8 bg-brand-500/10 mt-1 rounded-full group-hover:w-12 transition-all duration-500" />
                      </div>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500/30 group-hover:bg-brand-500 transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600/40 block">Distinction</span>
                      </div>
                      <h3 className={cn(
                        "font-bold font-outfit text-[#1a0a0a] dark:text-white leading-tight transition-colors italic",
                        isLarge ? "text-3xl md:text-6xl" : "text-2xl md:text-3xl"
                      )}>
                        {achievement.title}
                      </h3>
                      <p className="text-[#1a0a0a]/50 dark:text-white/40 text-base leading-relaxed font-inter max-w-[95%] font-medium group-hover:text-[#1a0a0a]/70 dark:group-hover:text-white/60 transition-colors">
                        {achievement.description}
                      </p>
                   </div>

                   {/* Footer Decor */}
                   <div className="relative z-10 mt-12 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-500/20" />
                         <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#1a0a0a]/20 dark:text-white/10">Auth Record</span>
                      </div>
                      <div className="w-12 h-0.5 bg-black/5 dark:bg-white/5 rounded-full" />
                   </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
