"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BookOpen, GraduationCap, Star, Award, MapPin, Calendar, X } from "lucide-react"

const educationJourney = [
  {
    level: "B.Tech in Computer Science",
    institution: "AKTU, Lucknow",
    duration: "2022-2026",
    date: "Expected 2026",
    icon: GraduationCap,
    color: "from-purple-600 to-purple-800",
    gpa: "8.7 CGPA",
    description: "Focusing on DBMS, Web Technology, Algorithms, AI, and Software Engineering.",
    achievements: ["UI UX Solvathon Winner", "Harvard Aspire Scholar", "SheFi Scholar", "GSSoC Contributor"]
  },
  {
    level: "High School Graduation",
    institution: "School of Excellence, Delhi",
    duration: "2021-2022",
    date: "July 2022",
    icon: Star,
    color: "from-slate-500 to-purple-600",
    gpa: "82% Marks",
    description: "Specialized in Computer Science, Physics, Chemistry, and Mathematics.",
    achievements: ["94% in Computer Science", "Club Leader", "Project Contributor"]
  },
  {
    level: "Secondary Education",
    institution: "School of Excellence",
    duration: "2018-2020",
    date: "March 2020",
    icon: BookOpen,
    color: "from-purple-400 to-slate-600",
    gpa: "86% Marks",
    description: "Strong academic foundation with focus on science and early programming.",
    achievements: ["Top 10% Entrance", "Science Club Member", "Music Choir"]
  }
]

export default function Education() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationJourney.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelected(index)}
                className="group cursor-pointer glass-card p-10 rounded-[2.5rem] flex flex-col relative overflow-hidden"
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
                
                <div className="flex justify-between items-start mb-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg shadow-purple-500/10`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold font-inter bg-foreground/5 px-4 py-1.5 rounded-full text-muted-foreground uppercase tracking-wider">
                    {item.date}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-outfit mb-3 leading-tight uppercase">{item.level}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-inter mb-6">
                    <MapPin size={14} className="text-purple-500" />
                    {item.institution}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-inter">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/50 pt-8 mt-auto">
                  <span className="text-xl font-black font-outfit text-purple-600">
                    {item.gpa}
                  </span>
                  <div className="px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest">
                    Details
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-[150] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="w-full max-w-4xl bg-background rounded-[3rem] p-8 md:p-14 relative border border-white/5 shadow-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-[160]"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <div className={`w-20 h-20 rounded-3xl mb-10 flex items-center justify-center bg-gradient-to-br ${educationJourney[selected].color}`}>
                    {(() => {
                      const Icon = educationJourney[selected].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <h2 className="text-5xl font-bold font-outfit mb-6 uppercase leading-[1.1]">
                    {educationJourney[selected].level}
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-lg font-inter text-muted-foreground">
                      <MapPin size={20} className="text-purple-500" />
                      {educationJourney[selected].institution}
                    </div>
                    <div className="flex items-center gap-3 text-lg font-inter text-muted-foreground">
                      <Calendar size={20} className="text-purple-500" />
                      {educationJourney[selected].duration}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="px-8 py-6 glass rounded-[2rem] border-purple-500/20 mb-10">
                    <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2 block">Performance</span>
                    <span className="text-4xl font-black font-outfit text-purple-600">
                      {educationJourney[selected].gpa}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Distinctions</h4>
                  <div className="space-y-4">
                    {educationJourney[selected].achievements.map((ach, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-5 glass rounded-2xl hover:bg-purple-500/5 transition-colors border-white/5"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${educationJourney[selected].color}`} />
                        <span className="text-sm font-semibold font-inter">{ach}</span>
                      </motion.div>
                    ))}
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
