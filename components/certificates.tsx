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
    title: "Enterprise Design Thinking",
    issuer: "IBM",
    date: "Sep 2025",
    color: "#052D84",
    link: "https://www.credly.com/badges/e15a6371-e278-4eea-ad7e-135957896f55/linked_in_profile",
    badgeType: "Design Strategy"
  },
  {
    title: "Open AI Engineering",
    issuer: "Columbia University",
    date: "July 2025",
    color: "#B9D9EB",
    link: "https://badges.plus.columbia.edu/be6f3a00-2061-41b7-8a52-8b171b834be6#acc.bYQjX6PC",
    badgeType: "Applied AI"
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM",
    date: "May 2025",
    color: "#052D84",
    link: "https://www.credly.com/badges/35aa2436-4b24-4353-89eb-b206dbb92a09",
    badgeType: "Foundation"
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
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-[420px] cursor-pointer"
      style={{ zIndex: hovered ? 100 : 10 }}
    >
      {/* 1. FRAME BACKING */}
      <div className="absolute inset-x-0 bottom-0 h-[300px] bg-black/5 dark:bg-white/[0.02] rounded-[2.5rem] border border-black/5 dark:border-white/5" />

      {/* 2. THE CERTIFICATE DOCUMENT (Inside Slot) */}
      <motion.div 
        animate={{ 
          y: hovered ? -100 : 30, 
          scale: hovered ? 1.05 : 0.95,
          rotate: hovered ? -2 : 0,
          zIndex: hovered ? 50 : 0
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="absolute inset-x-8 top-0 h-[320px] bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-black/[0.03] flex flex-col items-center p-8 overflow-hidden"
      >
        {/* Document Details */}
        <div className="absolute inset-3 border-[0.5px] border-black/5 rounded-lg pointer-events-none" />
        <div className="w-full flex justify-between items-start mb-6 relative z-10">
           <div className="flex flex-col gap-1 text-left items-start">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1a0a0a] border-b border-black/10 pb-0.5">{cert.issuer}</span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-black/20">Official Credential</span>
           </div>
           <div className="w-12 h-12 bg-black/[0.03] rounded-2xl flex items-center justify-center -mt-2">
              <ShieldCheck size={24} style={{ color: cert.color }} strokeWidth={1.5} />
           </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 w-full mb-8">
           <h3 className="text-2xl font-black text-[#1a0a0a] leading-tight mb-2 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
             {cert.title}
           </h3>
           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent mb-4" />
           <p className="text-[9px] font-inter uppercase tracking-[0.2em] text-black/40 font-medium">Verified Certificate</p>
        </div>

        <div className="w-full flex justify-between items-end relative z-10">
           <div className="flex flex-col gap-1 items-start text-left">
              <span className="text-[8px] font-black uppercase tracking-widest text-black/20">Issued Date</span>
              <span className="text-[10px] font-bold text-black/60 font-inter">{cert.date}</span>
           </div>
           <div className="flex flex-col items-end gap-1">
             <div className="w-12 h-0.5 bg-black/5 rounded-full" />
             <span className="text-[7px] font-black tracking-widest text-black/20 uppercase">Auth Sign</span>
           </div>
        </div>
      </motion.div>

      {/* 3. GLASS FRONT (Pocket Face) */}
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-white/30 dark:bg-white/[0.05] backdrop-blur-3xl rounded-b-[2.5rem] border-t border-white/40 dark:border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] z-20 pointer-events-none flex items-center justify-center">
         <div className="flex flex-col items-center opacity-20 group-hover:opacity-0 transition-opacity duration-300">
            <Award size={32} className="text-[#1a0a0a] dark:text-white" strokeWidth={1} />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] mt-2 text-[#1a0a0a] dark:text-white">View Credential</span>
         </div>
      </div>

      {/* 4. ACTIONS (Visible only on hover or when document is out) */}
      <div className="absolute inset-x-10 bottom-8 flex items-center justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full">
            <CheckCircle size={10} className="text-green-600 dark:text-green-400" />
            <span className="text-[8px] font-black uppercase tracking-widest text-green-600 dark:text-green-400">Verified</span>
          </div>
          {cert.link && (
            <a 
              href={cert.link} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-[#1a0a0a]/5 dark:bg-white/5 rounded-full hover:bg-white dark:hover:bg-white/20 shadow-sm transition-all text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
            >
              <ExternalLink size={16} />
            </a>
          )}
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 pointer-events-none">
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

        {/* Certificates Grid - Increased Gap for Pop-Out room */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-12">
          {certificates.map((cert, index) => (
            <CertificateCard key={cert.title} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
