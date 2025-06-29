"use client"

import { motion } from "framer-motion"

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", 
  "Node.js", "Python", "Figma", "Adobe XD"
]

export default function SkillsSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-4 rounded-lg shadow-lg text-center hover:bg-primary/5"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
