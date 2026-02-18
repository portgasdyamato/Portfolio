"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send, ArrowRight } from "lucide-react"

const contactOptions = [
  {
    name: "Email",
    value: "sakshiagrahari2004@gmail.com",
    icon: Mail,
    url: "mailto:sakshiagrahari2004@gmail.com",
    color: "from-blue-500/10 to-transparent"
  },
  {
    name: "LinkedIn",
    value: "Sakshi Agrahari",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sakshi-902777290/",
    color: "from-indigo-500/10 to-transparent"
  },
  {
    name: "GitHub",
    value: "@portgasdyamato",
    icon: Github,
    url: "https://github.com/portgasdyamato",
    color: "from-gray-500/10 to-transparent"
  }
]

export default function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold font-outfit mb-6 uppercase leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Let’s build <br />
                <span className="text-gradient">something bold</span>.
              </motion.h2>
              <p className="text-muted-foreground text-lg mb-12 font-inter max-w-md">
                Whether you have a project in mind or just want to say hi, my inbox is always open.
              </p>
              
              <div className="space-y-4">
                {contactOptions.map((option, i) => (
                  <motion.a
                    key={option.name}
                    href={option.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-6 glass rounded-2xl group transition-all hover:bg-white/5 active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <option.icon size={18} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-widest text-muted-foreground">{option.name}</span>
                        <span className="block font-bold font-inter text-sm">{option.value}</span>
                      </div>
                    </div>
                    <ArrowRight className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 rounded-full glass flex flex-col items-center justify-center p-12 text-center border-white/10 shadow-3xl"
              >
                <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-purple-500/40">
                  <Send className="text-white w-10 h-10 -rotate-12" />
                </div>
                <h3 className="text-2xl font-bold font-outfit uppercase mb-2">Message Me</h3>
                <p className="text-xs text-muted-foreground font-inter uppercase tracking-widest leading-loose">
                  Open for global <br /> collaborations & <br /> design systems
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
