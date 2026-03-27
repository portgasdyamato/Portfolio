"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, ShieldCheck, CheckCircle, Award, Sparkles, Globe } from "lucide-react"
import { useState } from "react"

const certificates = [
  {
    title: "Gen AI by GoogleCloud",
    issuer: "Google Cloud",
    date: "June 2025",
    color: "#4285F4",
    link: "https://www.linkedin.com/posts/sakshi-902777290_genaiacademy-certificateofcompletion-googlecloud-activity-7336733236309463040-xgyO",
    badgeType: "Cloud AI"
  },
  {
    title: "Solutions Architecture",
    issuer: "AWS",
    date: "May 2025",
    color: "#FF9900",
    link: "https://www.linkedin.com/posts/sakshi-902777290_aws-cloudcomputing-solutionsarchitecture-activity-7326979671756079104-NwBG",
    badgeType: "Engineering"
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    date: "May 2025",
    color: "#052D84",
    link: "https://www.credly.com/badges/35aa2436-4b24-4353-89eb-b206dbb92a09",
    badgeType: "Data Science"
  },
  {
    title: "Data Science Intro",
    issuer: "Cisco",
    date: "May 2025",
    color: "#00BCEB",
    link: "https://www.credly.com/badges/9d346f5d-0765-4dfb-acc2-3406c53d6b60/linked_in_profile",
    badgeType: "Analytics"
  },
  {
    title: "Virtual Internship",
    issuer: "Accenture",
    date: "May 2025",
    color: "#A100FF",
    link: "https://www.linkedin.com/posts/sakshi-902777290_forage-certificate-activity-7329145928525762561-kepT",
    badgeType: "Strategy"
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "May 2025",
    color: "#0078D4",
    link: "https://learn.microsoft.com/api/achievements/share/en-us/SakshiAgrahari-2382/9YX9KQ2U",
    badgeType: "Cloud Master"
  },
]

function CertificateCard({ cert, index }: { cert: typeof certificates[0], index: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative h-[360px] cursor-pointer"
    >
      {/* GLOSS BADGE CONTAINER */}
      <div className="absolute inset-0 bg-white/40 dark:bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/50 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] group-hover:bg-white/60 overflow-hidden">
        
        {/* Holographic Shimmer Overlay */}
        <motion.div 
           className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
           style={{
             background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4) 0%, transparent 60%)`,
           }}
        />

        {/* Card Content Interior */}
        <div className="relative h-full p-8 flex flex-col items-center text-center">
          
          {/* Top Label */}
          <div className="mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cert.color }} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40">{cert.badgeType}</span>
          </div>

          {/* Icon Badge Wall */}
          <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
            {/* Pulsing Rings */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full animate-pulse" />
            <div className="absolute -inset-2 border border-black/[0.03] dark:border-white/[0.03] rounded-full" />
            
            <div className="relative w-16 h-16 bg-white dark:bg-white/10 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
               <ShieldCheck size={32} style={{ color: cert.color }} strokeWidth={1.5} />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3">
             <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#1a0a0a] dark:text-white tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
               {cert.title}
             </h3>
             <div className="flex flex-col items-center">
               <p className="text-sm font-inter font-bold text-black/60 dark:text-white/60 italic">{cert.issuer}</p>
               <span className="text-[10px] uppercase font-black tracking-widest text-black/20 dark:text-white/20 mt-1">{cert.date}</span>
             </div>
          </div>

          {/* Bottom Lockup */}
          <div className="mt-auto pt-6 flex items-center justify-between w-full border-t border-black/[0.05] dark:border-white/[0.05]">
             <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full">
               <CheckCircle size={10} className="text-green-600 dark:text-green-400" />
               <span className="text-[8px] font-black uppercase tracking-widest text-green-600 dark:text-green-400">Verified</span>
             </div>
             
             {cert.link && (
               <a 
                 href={cert.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
               >
                 <ExternalLink size={14} />
               </a>
             )}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default function Certificates() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Section Background Deco */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pointer-events-none">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a0a0a]/5 dark:bg-white/5 rounded-full text-[#1a0a0a]/40 dark:text-white/40 font-black tracking-[0.2em] uppercase text-[9px] mb-6">
              <Award size={10} /> Professional Certification
            </div>
            <h2 className="text-[45px] md:text-[65px] font-bold italic text-[#1a0a0a] dark:text-white leading-[0.9]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Academic & <span className="text-black/30 dark:text-white/30">Industry Creds.</span>
            </h2>
          </div>
          <div className="hidden md:flex flex-col items-end text-right">
             <div className="flex items-center gap-2 text-2xl font-black italic text-black/10 dark:text-white/10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <Sparkles size={24} />
                <span>Verified Excellence</span>
             </div>
             <p className="text-xs font-inter uppercase tracking-widest text-black/20 dark:text-white/20 mt-2">Verified via Credly & LinkedIn</p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
