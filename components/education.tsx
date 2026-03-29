"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BookOpen, GraduationCap, Star, Award, MapPin, Calendar, X, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"
import LearningJourney from "./learning-journey"

const educationJourney = [
  {
    level: "Middle School",
    institution: "Govt Co-ed Sr. Sec. School",
    duration: "2015-2018",
    date: "March 2015-18",
    icon: BookOpen,
    color: "from-brand-400 to-brand-600",
    gpa: "87%",
    description: "Built strong fundamentals in science and computers. Participated in various competitions and coding camps where my adventurous journey started to unfold.",
    achievements: ["Top Student", "Science Exhibition Winner", "Dell Code Camp", "Debate Finalist"]
  },
  {
    level: "Secondary Education",
    institution: "School of Excellence",
    duration: "2018-2020",
    date: "March 2018-20",
    icon: BookOpen,
    color: "from-brand-300 to-brand-500",
    gpa: "86%",
    description: "Strong academic foundation with focus on science and early programming.",
    achievements: ["Top 10% Entrance", "Science Club Member", "Music Choir"]
  },
  {
    level: "High School Graduation",
    institution: "School of Excellence, Delhi",
    duration: "2021-2022",
    date: "2020-22",
    icon: Star,
    color: "from-brand-400 to-indigo-400",
    gpa: "82%",
    description: "Specialized in Computer Science, Physics, Chemistry, and Mathematics.",
    achievements: ["94% in Computer Science", "Club Leader", "Project Contributor"]
  },
  {
    level: "B.Tech in Computer Science",
    institution: "AKTU, Lucknow",
    duration: "2022-2026",
    date: "Expected 2026",
    icon: GraduationCap,
    color: "from-brand-500 to-brand-700",
    gpa: "8.7 CGPA",
    description: "Focusing on DBMS, Web Technology, Algorithms, AI, and Software Engineering.",
    achievements: ["UI UX Solvathon Winner", "Harvard Aspire Scholar", "SheFi Scholar", "GSSoC Contributor"]
  },
  {
    level: "Continuous Professional Growth",
    institution: "Global & Remote",
    duration: "2023 - Present",
    date: "Ongoing",
    icon: Briefcase,
    color: "from-brand-400 to-brand-600",
    gpa: "Pro",
    description: "Expanding horizons through global exposure, internships, open source contributions, leadership fellowships and driving social impact.",
    achievements: [
        "OpenSphere & LegalBridge - UI/UX Designer & Dev",
        "Cubble - FullStack Intern",
        "Harvard Aspire - Leadership Fellow",
        "SheFi - Scholar (Web3)",
        "GSSoC - Campus Ambassador",
        "Pledge A Smile - Volunteer",
        "Freelance - Digital Product Designer"
    ]
  }
]

export default function Education() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="py-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase tracking-tighter">
              Learning Trajectory
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl font-inter mt-4">
              My academic journey has been a continuous quest for knowledge and excellence.
            </p>
          </div>
        </motion.div>

        <LearningJourney items={educationJourney} onCardClick={setSelected} />

      </div>

      {/* Modal */}
      {/* ─── Premium Modal ─── */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FFF5F5]/40 dark:bg-black/60 backdrop-blur-3xl z-[150] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white/60 dark:bg-[#1a0a0a]/80 rounded-[3rem] p-8 md:p-20 relative border border-white/80 dark:border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Handle (Mobile) */}
              <div className="w-12 h-1 bg-black/5 dark:bg-white/10 rounded-full absolute top-6 left-1/2 -translate-x-1/2 md:hidden" />
              
              <button 
                className="absolute top-10 right-10 hidden md:flex w-14 h-14 bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full items-center justify-center hover:bg-brand-500 hover:text-white transition-all transform hover:rotate-90 z-[160] group"
                onClick={() => setSelected(null)}
              >
                <X size={24} className="opacity-60 group-hover:opacity-100" />
              </button>

              <div className="flex flex-col gap-16 md:gap-24">
                {/* Modal Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
                   <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                         <div className={cn("w-16 h-16 rounded-[2rem] flex items-center justify-center bg-gradient-to-br shadow-2xl shadow-brand-500/10", educationJourney[selected].color)}>
                            {(() => {
                              const Icon = educationJourney[selected].icon
                              return <Icon className="w-8 h-8 text-white" />
                            })()}
                         </div>
                         <div className="h-0.5 w-12 bg-brand-500/20" />
                      </div>
                      <h2 className="text-4xl md:text-7xl font-bold font-outfit text-[#1a0a0a] dark:text-white leading-[0.9] italic tracking-tighter">
                        {educationJourney[selected].level}
                      </h2>
                      <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-2 px-4 py-2 bg-brand-500/5 dark:bg-white/5 rounded-full text-sm font-medium border border-brand-500/10">
                          <MapPin size={16} className="text-brand-500" />
                          <span className="text-[#1a0a0a]/70 dark:text-white/70">{educationJourney[selected].institution}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-brand-500/5 dark:bg-white/5 rounded-full text-sm font-medium border border-brand-500/10">
                          <Calendar size={16} className="text-brand-500" />
                          <span className="text-[#1a0a0a]/70 dark:text-white/70">{educationJourney[selected].duration}</span>
                        </div>
                      </div>
                   </div>

                   {/* Grade Score Card */}
                   <div className="w-full md:w-auto p-10 bg-white/40 dark:bg-black/20 rounded-[2.5rem] border border-brand-500/10 flex flex-col items-center justify-center min-w-[200px] relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600/40 mb-2">Performance</span>
                      <span className="text-6xl font-black font-outfit text-brand-600 tracking-tighter">
                        {educationJourney[selected].gpa}
                      </span>
                      <div className="absolute -bottom-8 -right-8 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700">
                         <Star size={120} className="fill-brand-500" />
                      </div>
                   </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 pb-12">
                   <div className="md:col-span-12 space-y-12">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                           <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-600/60 flex-shrink-0">Key Milestones & Distinctions</h4>
                           <div className="h-px w-full bg-brand-500/10" />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                           {educationJourney[selected].achievements.map((ach, i) => (
                             <motion.div
                               key={i}
                               initial={{ opacity: 0, y: 20 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ delay: i * 0.1 }}
                               className="p-6 bg-white shadow-sm dark:bg-white/5 rounded-[1.5rem] border border-white/40 dark:border-white/5 hover:border-brand-500/20 hover:shadow-xl transition-all group flex items-start gap-4"
                             >
                                <div className={cn("mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br flex-shrink-0", educationJourney[selected].color)} />
                                <span className="text-sm font-semibold font-inter text-[#1a0a0a]/80 dark:text-white/80 group-hover:text-brand-600 transition-colors leading-relaxed">{ach}</span>
                             </motion.div>
                           ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                         <div className="flex items-center gap-4">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-600/60 flex-shrink-0">Scholastic Narrative</h4>
                            <div className="h-px w-full bg-brand-500/10" />
                         </div>
                         <p className="text-lg md:text-2xl font-inter text-[#1a0a0a]/60 dark:text-white/60 leading-relaxed max-w-4xl italic">
                            "{educationJourney[selected].description}"
                         </p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
