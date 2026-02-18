"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react"

const certificates = [
  {
    title: "Gen AI by GoogleCloud",
    issuer: "Google Cloud",
    date: "June 2025",
    color: "from-blue-400 to-blue-600",
    certificateUrl: "https://www.linkedin.com/posts/sakshi-902777290_genaiacademy-certificateofcompletion-googlecloud-activity-7336733236309463040-xgyO",
  },
  {
    title: "Solutions Architecture",
    issuer: "AWS",
    date: "May 2025",
    color: "from-orange-400 to-orange-600",
    certificateUrl: "https://www.linkedin.com/posts/sakshi-902777290_aws-cloudcomputing-solutionsarchitecture-activity-7326979671756079104-NwBG",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    date: "May 2025",
    color: "from-indigo-400 to-indigo-600",
    certificateUrl: "https://www.credly.com/badges/35aa2436-4b24-4353-89eb-b206dbb92a09",
  },
  {
    title: "Data Science",
    issuer: "Cisco",
    date: "May 2025",
    color: "from-cyan-400 to-cyan-600",
    certificateUrl: "https://www.credly.com/badges/9d346f5d-0765-4dfb-acc2-3406c53d6b60/linked_in_profile",
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    color: "from-sky-400 to-sky-600",
    certificateUrl: "https://learn.microsoft.com/api/achievements/share/en-us/SakshiAgrahari-2382/9YX9KQ2U",
  },
  {
    title: "Enterprise Design Thinking",
    issuer: "IBM",
    date: "2025",
    color: "from-blue-600 to-blue-800",
    certificateUrl: "",
  },
]

export default function Certificates() {
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
              Verified <span className="text-gradient-indigo">Credentials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl font-inter mt-4">
              A commitment to excellence and continuous professional development.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 glass-card rounded-[2rem] overflow-hidden flex flex-col"
            >
              <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
              
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:bg-white dark:group-hover:bg-white/10 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-foreground/80" />
                </div>
                {cert.certificateUrl && (
                  <a 
                    href={cert.certificateUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold font-outfit mb-2 leading-tight uppercase group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-inter mb-6">
                <span className="font-bold text-foreground/80">{cert.issuer}</span>
                <span className="opacity-30">•</span>
                <span>{cert.date}</span>
              </div>
              
              <div className="mt-auto flex items-center gap-2">
                <div className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-1">
                  <CheckCircle size={10} /> Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
