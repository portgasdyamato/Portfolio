"use client"

import { motion } from "framer-motion"
import { Code, Layout, Palette, Database, Smartphone, Globe, Cpu, Search } from "lucide-react"

const skillCategories = [
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-brand-500/20 to-brand-700/20"
  },
  {
    title: "Development",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Experience",
    icon: Search,
    skills: ["UX Research", "User Testing", "Accessibility", "Information Architecture"],
    color: "from-brand-500/20 to-brand-300/20"
  },
  {
    title: "Technical",
    icon: Cpu,
    skills: ["PostgreSQL", "Prisma", "AWS", "API Design", "AI Integration"],
    color: "from-orange-500/20 to-amber-500/20"
  }
]

export default function Skills() {
  return (
    <div className="py-20 px-4 md:px-8 bg-foreground/[0.02] rounded-[3rem] border border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase tracking-tighter">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-inter mt-4">
            A comprehensive set of tools and methodologies leveraged to build world-class products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 glass-card rounded-[2.5rem] relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-outfit mb-6 uppercase tracking-wider">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1.5 glass rounded-lg text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
