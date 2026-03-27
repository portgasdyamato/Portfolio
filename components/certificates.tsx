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
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative h-[360px] cursor-pointer"
      style={{ zIndex: hovered ? 50 : index }}
    >
      {/* Glossy Frame Background */}
      <div className="absolute inset-x-0 bottom-0 h-[280px] bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] border border-white/50 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:bg-white/60" />

      {/* THE ACTUAL CERTIFICATE PAPER (Pops Up) */}
      <motion.div 
        initial={{ y: 60 }}
        animate={{ 
          y: hovered ? -100 : 60, 
          rotate: hovered ? -2 : 0,
          scale: hovered ? 1.05 : 1
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="absolute inset-x-6 top-0 h-[320px] bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-black/[0.03] flex flex-col items-center p-8 overflow-hidden z-10"
      >
        {/* Certificate Border Deco */}
        <div className="absolute inset-3 border-[0.5px] border-black/5 rounded-lg pointer-events-none" />
        <div className="absolute inset-4 border border-black/[0.02] rounded-md pointer-events-none" />
        
        {/* Top Header */}
        <div className="w-full flex justify-between items-center mb-10 relative z-10">
           <div className="flex flex-col gap-0.5">
              <span className="text-[7px] font-black uppercase tracking-[0.3em] text-black/30">Official Credential</span>
              <span className="text-[10px] font-bold text-black/60 italic font-inter leading-none">{cert.issuer}</span>
           </div>
           <div className="w-10 h-10 bg-black/[0.03] rounded-full flex items-center justify-center">
              <ShieldCheck size={18} style={{ color: cert.color }} />
           </div>
        </div>

        {/* Certificate Title / Core Info */}
        <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 w-full mb-8">
           <h3 className="text-2xl md:text-3xl font-black text-[#1a0a0a] leading-tight mb-2 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
             {cert.title}
           </h3>
           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent mb-4" />
           <p className="text-[9px] font-inter uppercase tracking-[0.2em] text-black/40 font-medium">Valid and Verified Completion</p>
        </div>

        {/* Bottom Lockup on the Document */}
        <div className="w-full flex justify-between items-end relative z-10">
           <div className="flex flex-col gap-1">
              <span className="text-[8px] font-black uppercase tracking-widest text-black/20">Issued Date</span>
              <span className="text-[10px] font-bold text-black/60 font-inter">{cert.date}</span>
           </div>
           <div className="flex flex-col items-end gap-1">
             <div className="w-12 h-0.5 bg-black/5 rounded-full" />
             <span className="text-[7px] font-black tracking-widest text-black/20 uppercase">Signature Area</span>
           </div>
        </div>
      </motion.div>

      {/* Interactive Reveal info on the card (Bottom Section) */}
      <div className="absolute inset-x-8 bottom-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 rounded-full">
            <CheckCircle size={10} className="text-green-600 dark:text-green-400" />
            <span className="text-[8px] font-black uppercase tracking-widest text-green-600 dark:text-green-400">Credential Verified</span>
          </div>
          
          {cert.link && (
            <a 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-[#1a0a0a]/5 dark:bg-white/5 rounded-full hover:bg-[#1a0a0a]/10 dark:hover:bg-white/10 transition-all text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
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
