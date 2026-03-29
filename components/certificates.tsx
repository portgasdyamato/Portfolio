"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, ShieldCheck, CheckCircle, Award, Sparkles, Globe } from "lucide-react"
import { useState } from "react"

const CompanyLogo = ({ issuer, color }: { issuer: string; color: string }) => {
  if (issuer === "IBM") return <div className="text-[12px] font-black tracking-tighter text-[#052D84] scale-x-125">IBM</div>
  
  if (issuer === "Google Cloud") return (
    <svg viewBox="0 0 24 24" className="w-full h-full p-0.5">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
    </svg>
  )

  if (issuer === "AWS") return (
    <svg viewBox="0 0 24 24" className="w-full h-full p-0.5" fill="#FF9900">
      <path d="M16.94 13.78c-.62-.21-1.28-.31-1.95-.31-.58 0-1.15.08-1.68.25-.43.14-.81.38-1.1.7-.24.26-.41.58-.49.92-.08.35-.07.71.04 1.05.08.26.24.5.45.69.21.19.47.33.74.4.4.09.82.1 1.23.05.51-.06.99-.24 1.4-.52.27-.19.49-.44.65-.72.13-.23.2-.49.21-.76v-1.75zm3.17 6.43c-.45.38-1.01.62-1.6.68-.42.04-.84.01-1.25-.09-.34-.08-.66-.25-.91-.5-.2-.2-.35-.44-.45-.7-.14-.39-.18-.8-.12-1.2h-.03c-.23.36-.54.66-.91.88-.42.26-.9.43-1.4.5-.47.07-.95.06-1.41-.02-.45-.08-.87-.26-1.22-.54c-.33-.26-.59-.6-.74-.98-.16-.41-.24-.85-.22-1.29 0-.58.12-1.15.36-1.68.23-.5.58-.93 1.01-1.27.46-.35 1.01-.61 1.6-.74.65-.15 1.31-.22 1.98-.2h1.61v-.47c0-.21-.04-.42-.12-.62-.07-.17-.18-.33-.31-.47-.14-.14-.31-.24-.5-.31-.21-.07-.44-.11-.66-.1-.38-.01-.76.06-1.12.21-.29.12-.55.3-.77.53l-1.5-1.15c.44-.43.98-.76 1.57-.96 1-.34 2.06-.4 3.1-.17.61.13 1.17.43 1.62.88.42.43.72.97.86 1.56.12.51.17 1.02.15 1.54v4.52c0 .5.03 1 .1 1.49.07.45.18.89.34 1.32l-1.85.5zm-5.49-14.73c.48.06.95.16 1.4.3l.53-1.48c-.5-.16-1.02-.28-1.55-.35-.5-.07-1-.1-1.5-.09-1.06 0-2.11.16-3.11.47-1 .31-1.92.83-2.69 1.52-.73.65-1.3 1.47-1.65 2.38-.37.98-.55 2.03-.52 3.08 0 1.03.16 2.06.49 3.03.32.9.83 1.72 1.48 2.4.74.77 1.67 1.36 2.7 1.72 1.11.38 2.29.56 3.47.52.88.03 1.76-.08 2.61-.31l-.47-1.49c-.64.16-1.3.26-1.97.28-.9-.01-1.8-.16-2.64-.46-.81-.28-1.54-.74-2.11-1.35-.55-.57-.96-1.27-1.2-2.03-.26-.82-.39-1.67-.37-2.52s.15-1.7.43-2.52c.28-.82.74-1.55 1.35-2.16s1.38-1.07 2.22-1.33c.89-.28 1.83-.41 2.77-.38.5.01 1.03.04 1.55.12z"/>
    </svg>
  )

  if (issuer === "Microsoft") return (
    <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
      <div className="bg-[#F35022] w-full h-full" />
      <div className="bg-[#7FBA00] w-full h-full" />
      <div className="bg-[#00A4EF] w-full h-full" />
      <div className="bg-[#FFB900] w-full h-full" />
    </div>
  )

  if (issuer === "Cisco") return <div className="flex items-end gap-[1px] h-4"><div className="w-0.5 h-1 bg-cyan-500" /><div className="w-0.5 h-3 bg-cyan-500" /><div className="w-0.5 h-2 bg-cyan-500" /><div className="w-0.5 h-3 bg-cyan-500" /><div className="w-0.5 h-1 bg-cyan-500" /></div>
  
  if (issuer === "Accenture") return (
    <svg viewBox="0 0 24 24" className="w-full h-full p-1" fill="#A100FF">
      <path d="M17.4 12L7.1 5.3v13.4L17.4 12z M18.9 12l-10-6.5v13L18.9 12z"/>
    </svg>
  )

  if (issuer === "Columbia University") return (
    <svg viewBox="0 0 64 64" className="w-full h-full p-1" fill="#B9D9EB">
      <path d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30 30-13.432 30-30S48.568 2 32 2zm18.3 43.1c-1.3 1.3-3.1 2.1-5 2.1s-3.7-.8-5-2.1c-1.3-1.3-2.1-3.1-2.1-5s.8-3.7 2.1-5c1.3-1.3 3.1-2.1 5-2.1s3.7.8 5 2.1c1.3 1.3 2.1 3.1 2.1 5s-.8 3.7-2.1 5zm-15.6-11.4c-.6.6-1.5.9-2.4.9s-1.8-.3-2.4-.9c-.6-.6-.9-1.5-.9-2.4s.3-1.8.9-2.4c.6-.6 1.5-.9 2.4-.9s1.8.3 2.4.9c.6.6.9 1.5.9 2.4s-.3 1.8-.9 2.4zm10.6-5.8h-4.4v-4.4s0-2.2 2.2-2.2 2.2 2.2 2.2 2.2v4.4zm-15.6 0h-4.4v-4.4s0-2.2 2.2-2.2 2.2 2.2 2.2 2.2v4.4zm-15.6 0h-4.4v-4.4s0-2.2 2.2-2.2 2.2 2.2 2.2 2.2v4.4zm23.1-15.8c-1.3 1.3-3.1 2.1-5 2.1s-3.7-.8-5-2.1c-1.3-1.3-2.1-3.1-2.1-5s.8-3.7 2.1-5c1.3-1.3 3.1-2.1 5-2.1s3.7.8 5 2.1c1.3 1.3 2.1 3.1 2.1 5s-.8 3.7-2.1 5z"/>
    </svg>
  )
  
  return <ShieldCheck size={20} style={{ color }} />
}

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
           
           {/* COMPANY BRANDED SEAL */}
           <div className="relative w-14 h-14 flex items-center justify-center -mt-2">
              <div className="absolute inset-0 bg-black/[0.03] rounded-full animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-1 border-[0.5px] border-black/10 rounded-full border-dashed" />
              <div className="relative w-10 h-10 bg-white rounded-full shadow-lg border border-black/[0.05] flex items-center justify-center p-2.5 overflow-hidden">
                 <CompanyLogo issuer={cert.issuer} color={cert.color} />
              </div>
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
      <div className="absolute inset-x-0 bottom-0 h-[220px] bg-white/80 dark:bg-white/[0.08] backdrop-blur-2xl rounded-b-[2.5rem] border-t border-white/50 dark:border-white/20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)] z-20 pointer-events-none flex items-center justify-center">
         <div className="flex flex-col items-center opacity-40 group-hover:opacity-0 transition-opacity duration-300">
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
