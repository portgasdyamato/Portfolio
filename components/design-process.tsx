"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Code, Rocket, Users, Target, MessageSquare, Zap } from "lucide-react"

const softSkills = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Brainstorming and concept development with an analytical mindset.",
    color: "from-amber-500/10 to-transparent",
    delay: 0,
  },
  {
    icon: Palette,
    title: "Creativity",
    description: "Translating complex ideas into intuitive visual interfaces and prototypes.",
    color: "from-blue-500/10 to-transparent",
    delay: 0.1,
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Bridging the gap between technical teams and business stakeholders.",
    color: "from-emerald-500/10 to-transparent",
    delay: 0.2,
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Empowering and motivating teams to deliver their best work.",
    color: "from-rose-500/10 to-transparent",
    delay: 0.3,
  },
  {
    icon: Target,
    title: "Critical Thinking",
    description: "Analyzing information objectively to make reasoned judgments and decisions.",
    color: "from-cyan-500/10 to-transparent",
    delay: 0.4,
  },
  {
    icon: Zap,
    title: "Conflict Management",
    description: "Resolving disagreements constructively to maintain a harmonious team environment.",
    color: "from-purple-500/10 to-transparent",
    delay: 0.5,
  },
]

export default function DesignProcess() {
  return (
    <div className="py-20">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 uppercase tracking-tight">
            Inter-Personal Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter">
            Beyond the pixels and code, I focus on the human side of product development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: skill.delay + 0.5 }}
                className="group relative p-8 glass-card rounded-[2rem] overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-outfit mb-3 uppercase tracking-wide">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-inter">
                    {skill.description}
                  </p>
                </div>
                
                <div className="absolute top-4 right-4 text-[6rem] font-bold text-black/5 dark:text-white/5 pointer-events-none font-outfit select-none leading-none">
                  0{index + 1}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
