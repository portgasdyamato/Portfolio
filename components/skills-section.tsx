"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 88, icon: "⚛️" },
  { name: "Next.js", level: 70, icon: "▲" },
  { name: "TypeScript", level: 50, icon: "📝" },
  { name: "Tailwind", level: 91, icon: "🎨" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "Three.js", level: 70, icon: "🎲" },
  { name: "ML/AI", level: 75, icon: "🤖" },
  { name: "MongoDB", level: 50, icon: "🍃" },
  { name: "Figma", level: 94, icon: "🎯" },
  { name: "Git", level: 85, icon: "📚" }
];

export default function SkillsSection() {
  return (
    <motion.div className="w-full h-full flex flex-col">
      <motion.h3
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1 text-center text-gray-700"
        style={{
          fontFamily: "Gamer", 
          imageRendering: "pixelated",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        🎮 Skills 🎮
      </motion.h3>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 flex-1 overflow-y-auto mt-4 sm:mt-6 md:mt-8 py-2 px-1"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-white/90 rounded-lg p-2 sm:p-3 border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            style={{
              boxShadow: "0 4px 12px rgba(0,0,0,0.1), 0 2px 4px rgba(252,165,165,0.2)",
            }}
          >
            <div className="flex items-center justify-between mb-1 sm:mb-2">
              <span
                className="text-xs sm:text-sm font-bold text-gray-700"
                style={{
                  fontFamily: "qax",
                  imageRendering: "pixelated",
                }}
              >
                {skill.icon} {skill.name}
              </span>
              <span
                className="text-xs text-pink-600 font-bold"
                style={{
                  fontFamily: "SuperPixel, monospace",
                  imageRendering: "pixelated",
                }}
              >
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-pink-100 rounded-full h-2 sm:h-3 shadow-inner-md">
              <motion.div
                className="h-2 sm:h-3 rounded-full shadow-sm bg-gradient-to-br from-[#ffcece] via-[#ffb3b3] to-[#fccfcf]"
                style={{
                  
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.6)",
                  width: `${skill.level}%`,
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  delay: index * 0.1 + 0.5, 
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>          ))}
      </div>
    </motion.div>
  );
}
