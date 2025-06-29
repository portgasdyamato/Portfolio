"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Briefcase, MapPin, Calendar, Users, Code, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

const professionalJourney = [
  {
    position: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    duration: "2022-Present",
    date: "Current",
    icon: Rocket,
    color: "#FF6B9D",
    type: "Full-time",
    achievements: ["Led team of 5 developers", "Increased performance by 40%", "Launched 3 major products"],
    description:
      "Leading frontend development initiatives and mentoring junior developers. Architected scalable React applications serving 100K+ users daily.",
    technologies: ["React", "Next.js", "TypeScript", "AWS"],
    quote: "- Building the future of web",
  },
  {
    position: "Frontend Developer",
    company: "StartupXYZ",
    location: "Remote",
    duration: "2021-2022",
    date: "1 Year",
    icon: Code,
    color: "#4ECDC4",
    type: "Full-time",
    achievements: ["Built MVP from scratch", "Reduced load time by 60%", "Implemented design system"],
    description:
      "Developed the entire frontend architecture for a fintech startup. Collaborated closely with designers and backend engineers to deliver pixel-perfect user experiences.",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Firebase"],
    quote: "- Where innovation meets execution",
  },
  {
    position: "Junior Web Developer",
    company: "Digital Agency Pro",
    location: "Los Angeles, CA",
    duration: "2020-2021",
    date: "1 Year",
    icon: Users,
    color: "#45B7D1",
    type: "Full-time",
    achievements: ["Delivered 15+ client projects", "Improved SEO rankings", "Mentored 2 interns"],
    description:
      "Worked on diverse client projects ranging from e-commerce platforms to corporate websites. Gained expertise in multiple frameworks and CMS platforms.",
    technologies: ["WordPress", "Shopify", "JavaScript", "PHP"],
    quote: "- Learning through diversity",
  },
  {
    position: "Frontend Intern",
    company: "InnovateLab",
    location: "Berkeley, CA",
    duration: "Summer 2019",
    date: "3 Months",
    icon: Briefcase,
    color: "#96CEB4",
    type: "Internship",
    achievements: ["Completed 5 feature implementations", "Received outstanding review", "Converted to part-time"],
    description:
      "First professional experience in web development. Contributed to an internal dashboard application and learned industry best practices.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    quote: "- The beginning of my journey",
  },
]

export default function Professional() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 rounded-3xl relative overflow-hidden ml-8 mr-8"
    >
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-wide">PROFESSIONAL EXPERIENCE</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-purple-300 rounded-full" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {professionalJourney.map((item, index) => {
            const Icon = item.icon
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={item.position}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.3, duration: 0.6 }}
                className={`relative flex items-center  ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline Card */}
                <motion.div
                  className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-100">
                    {/* Header */}
                    <div className={`flex justify-between items-start mb-4 ${isLeft ? "text-left" : "text-right"}`}>
                      <div className={isLeft ? "" : "order-2"}>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.position}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Company */}
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-lg font-semibold text-blue-600">{item.company}</p>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        {item.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Read More Button */}
                    <Button size="sm" className="mb-3" style={{ backgroundColor: item.color }}>
                      {selectedItem === index ? "Show Less" : "View Details"}
                    </Button>

                    {/* Quote */}
                    <p className="text-xs italic text-gray-500 text-right">{item.quote}</p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {selectedItem === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Achievements:</h4>
                          <div className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <motion.div
                                key={achievement}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                          <div className="mt-3 text-xs text-gray-500">
                            <strong>Duration:</strong> {item.duration}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Timeline Icon */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                  style={{ backgroundColor: item.color }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2 + index * 0.3, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Empty Space for Opposite Side */}
                <div className="w-5/12" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
      >
        {[
          { number: "4+", label: "Years Experience", color: "#FF6B9D" },
          { number: "4", label: "Companies", color: "#4ECDC4" },
          { number: "25+", label: "Projects Delivered", color: "#45B7D1" },
          { number: "10+", label: "Technologies", color: "#96CEB4" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.7 + index * 0.1, type: "spring" }}
            className="p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm"
          >
            <div className="text-2xl font-bold" style={{ color: stat.color }}>
              {stat.number}
            </div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
