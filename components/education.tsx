"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { BookOpen, GraduationCap, Star, Award, MapPin, Calendar, X, Briefcase } from "lucide-react"
import LearningJourney from "./learning-journey"

const educationJourney = [
  {
    level: "Middle School",
    institution: "Govt Co-ed Sr. Sec. School",
    duration: "2015-2018",
    date: "March 2015-18",
    icon: BookOpen,
    color: "from-purple-600 to-purple-800",
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
    color: "from-purple-400 to-slate-600",
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
    color: "from-slate-500 to-purple-600",
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
    color: "from-purple-600 to-purple-800",
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
    color: "from-purple-600 to-purple-800",
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
              className="w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-background rounded-[2rem] md:rounded-[3rem] p-6 md:p-14 relative border border-white/5 shadow-3xl scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 md:top-10 md:right-10 w-10 h-10 md:w-12 md:h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors z-[160]"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                <div>
                  <div className={`w-20 h-20 rounded-3xl mb-10 flex items-center justify-center bg-gradient-to-br ${educationJourney[selected].color}`}>
                    {(() => {
                      const Icon = educationJourney[selected].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6 uppercase leading-[1.1]">
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
