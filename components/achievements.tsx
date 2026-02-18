"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal, Coins } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "GSSoc Campus Ambassador & Contributor",
    description: "Organised the event and contributed in open source project.",
    year: "2025",
    color: "from-yellow-400 to-amber-600",
  },
  {
    icon: Award,
    title: "Gen AI Exchange",
    description: "Empowering learners to explore and innovate using GoogleCloud's Gen AI tools.",
    year: "2025",
    color: "from-blue-400 to-indigo-600",
  },
  {
    icon: Star,
    title: "TechFest Winner",
    description: "2nd runner up place in state level TechFest for Culinary website with AI chatbot.",
    year: "2024",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: Coins,
    title: "SheFi 14 Scholar",
    description: "Selected for US-based program empowering women in Web3 and blockchain.",
    year: "2025",
    color: "from-purple-400 to-pink-600",
  },
  {
    icon: Trophy,
    title: "UI UX Solvathon Winner",
    description: "Won 1st Place among 700+ participants for research and high-fidelity UI.",
    year: "2025",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Star,
    title: "Harvard Aspire Scholar",
    description: "Selected for AI Integrated Leadership Program Cohort V.",
    year: "2025",
    color: "from-red-400 to-rose-600",
  },
]

export default function Achievements() {
  return (
    <div className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase tracking-tighter">
            Featured <span className="text-gradient-indigo">Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-inter mt-4">
            A track record of excellence in design, innovation, and leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 glass-card rounded-[2rem] overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-white dark:group-hover:bg-white/10 transition-colors">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <span className="text-xs font-bold font-inter bg-foreground/5 dark:bg-white/5 px-3 py-1 rounded-full text-muted-foreground uppercase tracking-wider">
                      {achievement.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-outfit mb-3 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors uppercase">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-inter line-clamp-3">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
