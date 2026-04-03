"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Star, Users, Cpu, Coins, Zap, GraduationCap, Award } from "lucide-react"

const achievements = [
  {
    id: "solvathon",
    icon: Trophy,
    label: "1st Place",
    title: "UI/UX Solvathon",
    org: "700+ Participants",
    detail: "Secured first place for conducting deep UX research and crafting a high-fidelity, user-centric interface.",
    year: "2025",
    gradient: "from-[#FDE68A] to-[#D97706]", // Gold
  },
  {
    id: "harvard",
    icon: GraduationCap,
    label: "Selected Scholar",
    title: "Harvard Aspire",
    org: "Leadership Program",
    detail: "Chosen for the Harvard Aspire Leadership Program, engaging in AI-integrated leadership modules.",
    year: "2025",
    gradient: "from-[#E9D5FF] to-[#9333EA]", // Purple
  },
  {
    id: "techfest",
    icon: Star,
    label: "2nd Runner Up",
    title: "State TechFest",
    org: "State Level Competition",
    detail: "Won 3rd place in the state-level TechFest for developing a culinary platform with an AI chatbot.",
    year: "2024",
    gradient: "from-[#A7F3D0] to-[#059669]", // Green
  },
  {
    id: "shefi",
    icon: Coins,
    label: "US Program Scholar",
    title: "SheFi 14",
    org: "Web3 & Blockchain",
    detail: "Selected for a prestigious US-based cohort empowering women in Web3 and decentralized technologies.",
    year: "2025",
    gradient: "from-[#FECDD3] to-[#E11D48]", // Pink/Red
  },
  {
    id: "hackathon",
    icon: Zap,
    label: "2nd Place",
    title: "AI Hackathon",
    org: "Design-to-Code",
    detail: "Secured the runner-up position in an intense hackathon bridging UI design and AI code generation.",
    year: "2025",
    gradient: "from-[#DDD6FE] to-[#7C3AED]", // Violet
  },
  {
    id: "gssoc",
    icon: Users,
    label: "Campus Ambassador",
    title: "GSSoc Open Source",
    org: "Event Organiser",
    detail: "Led and organized campus events while making significant contributions to global open-source projects.",
    year: "2025",
    gradient: "from-[#FFB5B5] to-[#F43F5E]", // Brand to Rose
  },
  {
    id: "genai",
    icon: Cpu,
    label: "Innovator",
    title: "Gen AI Exchange",
    org: "Google Cloud",
    detail: "Architected and built practical AI solutions utilizing Google Cloud's Generative AI infrastructure.",
    year: "2025",
    gradient: "from-[#BFDBFE] to-[#2563EB]", // Blue
  },
]

function MilestoneCard({ item, index }: { item: typeof achievements[0]; index: number }) {
  const Icon = item.icon
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[3/4] cursor-pointer group perspective-[1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <motion.div
        animate={{ 
          rotateY: isHovered ? 180 : 0, 
          rotateZ: isHovered ? (index % 2 === 0 ? -5 : 6) : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ 
          rotateY: { duration: 0.8, type: "spring", stiffness: 200, damping: 20 },
          scale: { duration: 0.8, type: "spring", stiffness: 200, damping: 20 },
          rotateZ: { delay: isHovered ? 0.3 : 0, duration: 0.5, type: "spring", stiffness: 300, damping: 25 }
        }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── 1. FRONT FACE (The Unified Exhibition Placard) ── */}
        <div 
          className="absolute inset-0 bg-white dark:bg-[#1a1a1a] p-1.5 sm:p-2 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-black/[0.04] dark:border-white/[0.05] flex flex-col pointer-events-none"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Decorative Tape Front */}
          <div className="absolute top-[-8px] left-[42%] w-12 h-4 bg-white/80 dark:bg-black/80 shadow-sm border border-black/5 rotate-[2deg] z-20" />

          {/* Unified Gallery Background */}
          <div className="relative w-full h-full rounded-xl border-[0.5px] border-black/[0.04] dark:border-white/[0.05] bg-[#FDFBF7] dark:bg-[#151515] overflow-hidden flex flex-col items-center justify-center p-6 pb-12">
            
            {/* Elegant Year Tag (Architectural Detail) */}
            <div className="absolute top-4 right-5 text-right z-10">
               <span className="text-[14px] font-bold italic text-[#F59E9E] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{item.year}</span>
               <div className="w-8 h-[1px] bg-[#F59E9E]/30 mt-1 ml-auto" />
            </div>

            {/* Central Graphic (Minimalist Rings) */}
            <div className="relative w-32 h-32 flex items-center justify-center mb-6">
               <div className="absolute inset-0 rounded-full border border-black/[0.06] dark:border-white/[0.06] scale-[1.3]" />
               <div className="absolute inset-4 rounded-full border border-black/[0.08] dark:border-white/[0.08] scale-[1.15]" />
               <motion.div 
                 animate={{ scale: isHovered ? 1.05 : 1 }} 
                 className="relative w-16 h-16 rounded-full bg-[#F59E9E] shadow-[0_8px_20px_rgba(245,158,158,0.35)] flex items-center justify-center text-white"
               >
                 <Icon size={24} strokeWidth={1.5} />
               </motion.div>
            </div>

            {/* Typography Section */}
            <div className="flex flex-col items-center gap-1 text-center">
               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#F59E9E] bg-[#F59E9E]/10 px-2 py-0.5 rounded-sm mb-1">
                 {item.label}
               </span>
               <h4 className="text-[20px] font-bold italic text-[#1a0a0a] dark:text-white leading-[1.1]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                 {item.title}
               </h4>
            </div>

            {/* Bottom context hints */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 opacity-30">
               <span className="text-[7px] font-black uppercase tracking-[0.4em] text-[#1a0a0a] dark:text-white">REVEAL STORY</span>
            </div>
          </div>
        </div>

        {/* ── 2. BACK FACE (The Memory / Journal Entry) ── */}
        <div 
          className="absolute inset-0 bg-[#FFFDF9] dark:bg-[#1a1a1a] rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-[#F59E9E]/20 p-6 flex flex-col items-center text-center pointer-events-none"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Decorative Tape Back (Peeling Animation) */}
          <motion.div 
            animate={{ 
               rotateZ: isHovered ? (index % 2 === 0 ? -14 : 14) : -2, // Peels away more dramatically
               rotateX: isHovered ? 35 : 0, // Lifts off the paper in 3D
               y: isHovered ? -3 : 0,
               boxShadow: isHovered ? "0px 10px 15px rgba(0,0,0,0.12), 0px 4px 6px rgba(0,0,0,0.05)" : "0px 1px 2px rgba(0,0,0,0.05)"
            }}
            transition={{ delay: isHovered ? 0.3 : 0, duration: 0.5, type: "spring", stiffness: 300 }}
            className={`absolute top-[-8px] w-12 h-4 bg-white/90 dark:bg-black/90 border border-black/[0.08] z-20 ${
              index % 2 === 0 ? 'origin-bottom-left left-[45%]' : 'origin-bottom-right right-[45%]'
            }`} 
          />
          
          <div className="mt-6 mb-4 w-10 h-10 rounded-full bg-[#F59E9E]/10 flex items-center justify-center border border-[#F59E9E]/30 text-[#F59E9E]">
            <Award size={18} />
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#1a0a0a]/40 dark:text-white/40 mb-2">
            The Story
          </span>
          
          <h4 className="text-[22px] font-bold italic text-[#1a0a0a] dark:text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {item.title}
          </h4>

          {/* Separator Line */}
          <div className="w-10 h-[1.5px] bg-[#F59E9E]/80 mx-auto my-2" />

          <p className="text-[12px] sm:text-[13px] text-[#1a0a0a]/70 dark:text-white/70 font-inter leading-relaxed px-2 italic mb-3">
            "{item.detail}"
          </p>

          <div className="mt-auto pt-3 border-t border-black/15 dark:border-white/15 w-full flex flex-col gap-1">
             <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#1a0a0a]/30 dark:text-white/30">
               Recognized By
             </span>
             <span className="text-[10px] font-bold text-[#F59E9E] uppercase tracking-widest">
               {item.org}
             </span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 relative scroll-mt-32 overflow-visible">
      
      {/* Background ambient accents */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-[#FFB5B5]/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-visible">

        {/* ── Header ── */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF9] dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-full text-[#1a0a0a]/50 dark:text-white/50 font-black tracking-[0.2em] uppercase text-[9px] mb-6 shadow-sm">
            <Star size={10} className="text-[#F59E9E]" /> Milestones & Memories
          </div>
          <h2
            className="text-[40px] md:text-[60px] lg:text-[70px] font-bold italic text-[#1a0a0a] dark:text-white leading-[1] tracking-tighter"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A visual archive of my{" "}
            <span className="text-[#F59E9E]">Awards.</span>
          </h2>
          <p className="max-w-md text-muted-foreground mt-4 font-inter text-sm">
            Hover over any memory card to flip it and read the story behind the recognition.
          </p>
        </div>

        {/* ── Flip Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 overflow-visible pb-10 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <div key={item.id} className="w-full max-w-[320px] mx-auto">
              <MilestoneCard item={item} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
