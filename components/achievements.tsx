"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Star } from "lucide-react"

// Maritime compass star background template to wrap each botanical centerpiece with a vintage map vibe
const renderMaritimeStamp = (ink: string, paper: string, children: React.ReactNode, scaleVal = 0.55) => (
  <svg viewBox="0 0 100 100" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-20 h-20">
    {/* Concentric Maritime Map Frame */}
    <circle cx="50" cy="50" r="42" strokeWidth="2.2" />
    <circle cx="50" cy="50" r="39" strokeWidth="0.8" strokeDasharray="2.5 1.5" />
    
    {/* Antique Windrose/Compass Star Watermark (Pirate map vibe, clean and hand-etched) */}
    <g opacity="0.12" stroke={ink}>
      {/* North Point */}
      <path d="M 50,50 L 50,15 L 52.5,47.5 Z" fill={ink} stroke="none" />
      <path d="M 50,50 L 50,15 L 47.5,47.5 Z" strokeWidth="0.5" />
      
      {/* South Point */}
      <path d="M 50,50 L 50,85 L 47.5,52.5 Z" fill={ink} stroke="none" />
      <path d="M 50,50 L 50,85 L 52.5,52.5 Z" strokeWidth="0.5" />
      
      {/* East Point */}
      <path d="M 50,50 L 85,50 L 52.5,47.5 Z" fill={ink} stroke="none" />
      <path d="M 50,50 L 85,50 L 52.5,52.5 Z" strokeWidth="0.5" />
      
      {/* West Point */}
      <path d="M 50,50 L 15,50 L 47.5,52.5 Z" fill={ink} stroke="none" />
      <path d="M 50,50 L 15,50 L 47.5,47.5 Z" strokeWidth="0.5" />
      
      {/* Diagonal rays */}
      <line x1="50" y1="50" x2="74.7" y2="25.3" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="25.3" y2="74.7" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="74.7" y2="74.7" strokeWidth="0.5" />
      <line x1="50" y1="50" x2="25.3" y2="25.3" strokeWidth="0.5" />

      {/* Tiny inner dial */}
      <circle cx="50" cy="50" r="10" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
    </g>

    {/* Centerpiece graphic scaled and layered on top */}
    <g transform={`translate(0, 0) scale(${scaleVal})`} style={{ transformOrigin: '50px 50px' }}>
      {children}
    </g>
  </svg>
)

const WOODBLOCK_ARTWORKS = {
  ginkgo: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <path d="M50,85 C48,70 47,55 46,45" strokeWidth="2.5" />
      <path d="M46,45 C30,42 16,30 22,18 C28,6 45,14 49,20 C50,20 50,20 51,20 C55,14 72,6 78,18 C84,30 70,42 54,45 Z" fill={ink} />
      <path d="M49,23 C42,28 32,35 28,37" stroke={paper} strokeWidth="1" opacity="0.8" />
      <path d="M50,24 C45,34 38,40 34,42" stroke={paper} strokeWidth="1" opacity="0.8" />
      <path d="M51,23 C58,28 68,35 72,37" stroke={paper} strokeWidth="1" opacity="0.8" />
      <path d="M50,24 C55,34 62,40 66,42" stroke={paper} strokeWidth="1" opacity="0.8" />
    </>
  ), 0.55),
  laurel: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <path d="M50,82 C42,75 34,60 34,42 C34,26 44,18 47,15" strokeWidth="2.2" />
      <path d="M50,82 C58,75 66,60 66,42 C66,26 56,18 53,15" strokeWidth="2.2" />
      <path d="M34,70 C28,68 25,62 30,60 C35,58 37,64 34,70 Z" fill={ink} />
      <path d="M32,54 C26,52 23,46 28,44 C33,42 35,48 32,54 Z" fill={ink} />
      <path d="M32,38 C26,36 23,30 28,28 C33,26 35,32 32,38 Z" fill={ink} />
      <path d="M66,70 C72,68 75,62 70,60 C65,58 63,64 66,70 Z" fill={ink} />
      <path d="M68,54 C74,52 77,46 72,44 C67,42 65,48 68,54 Z" fill={ink} />
      <path d="M68,38 C74,36 77,30 72,28 C67,26 65,32 68,38 Z" fill={ink} />
    </>
  ), 0.56),
  fern: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <path d="M35,85 C45,70 52,48 62,15" strokeWidth="2.5" />
      <path d="M42,72 C30,70 24,67 22,69 C32,64 43,66 42,72 Z" fill={ink} />
      <path d="M46,58 C34,56 28,53 26,55 C36,50 47,52 46,58 Z" fill={ink} />
      <path d="M50,44 C38,42 32,39 30,41 C40,36 51,38 50,44 Z" fill={ink} />
      <path d="M45,69 C57,63 63,60 65,62 C55,57 48,63 45,69 Z" fill={ink} />
      <path d="M49,55 C61,49 67,46 69,48 C59,43 52,49 49,55 Z" fill={ink} />
      <path d="M53,41 C65,35 71,32 73,34 Q63,29 53,41 Z" fill={ink} />
    </>
  ), 0.56),
  rose: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <path d="M50,85 C50,60 50,45 50,32" strokeWidth="2" />
      <path d="M50,68 L45,65 L50,62 Z" fill={ink} strokeWidth="0.5" />
      <path d="M50,52 L55,49 L50,46 Z" fill={ink} strokeWidth="0.5" />
      <path d="M50,60 C40,60 35,53 38,47 C41,45 47,49 50,54 Z" fill={ink} />
      <path d="M50,46 C60,46 65,39 62,33 C59,31 53,35 50,40 Z" fill={ink} />
      <path d="M50,32 C38,32 34,14 50,8 C66,14 62,32 50,32 Z" fill={ink} />
      <path d="M46,20 C42,12 48,10 50,12 C52,10 58,12 54,20" stroke={paper} strokeWidth="1" opacity="0.8" />
    </>
  ), 0.56),
  clover: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <path d="M50,85 C50,65 47,50 45,38" strokeWidth="2" strokeLinecap="round" />
      <path d="M45,38 C32,38 25,25 40,20 C48,22 46,32 45,38 Z" fill={ink} />
      <path d="M45,38 C58,38 65,25 50,20 C42,22 44,32 45,38 Z" fill={ink} />
      <path d="M45,38 C45,50 35,58 35,42 C38,36 42,37 45,38 Z" fill={ink} />
      <path d="M45,38 C45,50 55,58 55,42 C52,36 48,37 45,38 Z" fill={ink} />
    </>
  ), 0.56),
  butterfly: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <line x1="50" y1="20" x2="50" y2="70" strokeWidth="3" />
      <circle cx="50" cy="15" r="2.5" fill={ink} />
      <path d="M49,25 C30,10 12,20 18,44 C22,54 36,49 49,45 Z" fill={ink} />
      <path d="M49,46 C32,50 20,60 23,73 C26,80 39,73 49,63 Z" fill={ink} />
      <path d="M51,25 C70,10 88,20 82,44 C78,54 64,49 51,45 Z" fill={ink} />
      <path d="M51,46 C68,50 80,60 77,73 C74,80 61,73 51,63 Z" fill={ink} />
      <path d="M28,32 Q38,34 44,36" stroke={paper} strokeWidth="1" opacity="0.8" />
      <path d="M72,32 Q62,34 56,36" stroke={paper} strokeWidth="1" opacity="0.8" />
    </>
  ), 0.55),
  wildflower: (ink: string, paper: string) => renderMaritimeStamp(ink, paper, (
    <>
      <path d="M50,85 C47,60 44,45 42,28" strokeWidth="2" strokeLinecap="round" />
      <path d="M50,85 C53,68 56,53 60,36" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="42" cy="28" r="7.5" fill={ink} />
      <circle cx="42" cy="28" r="2" fill={paper} />
      <circle cx="60" cy="36" r="6" fill={ink} />
      <circle cx="60" cy="36" r="1.5" fill={paper} />
    </>
  ), 0.56),
}

const achievements = [
  {
    id: "solvathon",
    label: "25c",
    title: "UI/UX SOLVATHON",
    org: "700+ Participants",
    summary: "WON FIRST PLACE SOLVATHON", // Exactly four words
    detail: "Secured first place for conducting deep UX research and crafting a high-fidelity, user-centric interface.",
    year: "2025",
    accent: "#0ea5e9", // Sky Blue
    paperColor: "#f0f9ff",
    art: WOODBLOCK_ARTWORKS.ginkgo
  },
  {
    id: "harvard",
    label: "28c",
    title: "HARVARD ASPIRE",
    org: "Leadership Program",
    summary: "SELECTED HARVARD LEADER COHORT", // Exactly four words
    detail: "Chosen for the Harvard Aspire Leadership Program, engaging in AI-integrated leadership modules.",
    year: "2025",
    accent: "#8b5cf6", // Purple
    paperColor: "#faf5ff",
    art: WOODBLOCK_ARTWORKS.laurel
  },
  {
    id: "techfest",
    label: "10c",
    title: "STATE TECHFEST",
    org: "State Level Competition",
    summary: "THIRD PLACE STATE TECHFEST", // Exactly four words
    detail: "Won 3rd place in the state-level TechFest for developing a culinary platform with an AI chatbot.",
    year: "2024",
    accent: "#10b981", // Green
    paperColor: "#f0fdf4",
    art: WOODBLOCK_ARTWORKS.fern
  },
  {
    id: "shefi",
    label: "30c",
    title: "SHEFI 14 SCHOLAR",
    org: "Web3 & Blockchain",
    summary: "SELECTED GLOBAL SHEFI SCHOLAR", // Exactly four words
    detail: "Selected for a prestigious US-based cohort empowering women in Web3 and decentralized technologies.",
    year: "2025",
    accent: "#f43f5e", // Rose
    paperColor: "#fff1f2",
    art: WOODBLOCK_ARTWORKS.rose
  },
  {
    id: "hackathon",
    label: "15c",
    title: "AI HACKATHON",
    org: "Design-to-Code",
    summary: "SECURED HACKATHON RUNNER UP", // Exactly four words
    detail: "Secured the runner-up position in an intense hackathon bridging UI design and AI code generation.",
    year: "2025",
    accent: "#f97316", // Orange
    paperColor: "#fff7ed",
    art: WOODBLOCK_ARTWORKS.clover
  },
  {
    id: "gssoc",
    label: "5c",
    title: "GSSOC OPEN SOURCE",
    org: "Event Organiser",
    summary: "GSSOC CAMPUS EVENT ORGANISER", // Exactly four words
    detail: "Led and organized campus events while making significant contributions to global open-source projects.",
    year: "2025",
    accent: "#eab308", // Yellow
    paperColor: "#fefce8",
    art: WOODBLOCK_ARTWORKS.butterfly
  },
  {
    id: "genai",
    label: "50c",
    title: "GEN AI EXCHANGE",
    org: "Google Cloud",
    summary: "GOOGLE CLOUD AI BUILDER", // Exactly four words
    detail: "Architected and built practical AI solutions utilizing Google Cloud's Generative AI infrastructure.",
    year: "2025",
    accent: "#14b8a6", // Teal
    paperColor: "#f0fdfa",
    art: WOODBLOCK_ARTWORKS.wildflower
  },
]

function MilestoneCard({ item, index }: { item: typeof achievements[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  // Perforated stamp holes along the edges
  const horizHoles = Array.from({ length: 18 })
  const vertHoles = Array.from({ length: 23 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[3/4] cursor-pointer group perspective-[1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <motion.div
        animate={{ 
          rotateY: isHovered ? 180 : 0, 
          scale: isHovered ? 1.02 : 1,
          rotateZ: isHovered ? (index % 2 === 0 ? -1.5 : 1.5) : 0
        }}
        transition={{ 
          rotateY: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.7, ease: "easeOut" },
          rotateZ: { duration: 0.7, ease: "easeOut" }
        }}
        className="relative w-full h-full preserve-3d"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── 1. FRONT FACE (Postage Stamp with Botanical Centerpiece & Detailed Print Margins) ── */}
        <div 
          className="absolute inset-0 bg-white dark:bg-[#151515] p-3 rounded-none shadow-[0_6px_20px_rgba(0,0,0,0.05)] border border-black/[0.04] dark:border-white/[0.04] flex flex-col justify-between overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden" 
          }}
        >
          {/* Perforations - Top Edge */}
          <div className="absolute top-[-5px] left-0 right-0 flex justify-between px-[4px] pointer-events-none z-20">
            {horizHoles.map((_, i) => (
              <div key={`t-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>
          {/* Perforations - Bottom Edge */}
          <div className="absolute bottom-[-5px] left-0 right-0 flex justify-between px-[4px] pointer-events-none z-20">
            {horizHoles.map((_, i) => (
              <div key={`b-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_0_-1px_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_-1px_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>
          {/* Perforations - Left Edge */}
          <div className="absolute left-[-5px] top-0 bottom-0 flex flex-col justify-between py-[4px] pointer-events-none z-20">
            {vertHoles.map((_, i) => (
              <div key={`l-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_1px_0_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_1px_0_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>
          {/* Perforations - Right Edge */}
          <div className="absolute right-[-5px] top-0 bottom-0 flex flex-col justify-between py-[4px] pointer-events-none z-20">
            {vertHoles.map((_, i) => (
              <div key={`r-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_-1px_0_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_-1px_0_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>

          {/* Inner Stamp Canvas */}
          <div 
            className="w-full h-full border flex flex-col justify-between p-3 relative overflow-hidden z-10"
            style={{ backgroundColor: item.paperColor, borderColor: `${item.accent}20` }}
          >
            {/* Fine Inner Accent Border Frame */}
            <div className="absolute inset-[3px] border border-solid opacity-20 rounded-sm pointer-events-none" style={{ borderColor: item.accent }} />

            {/* Header: Denomination & Year */}
            <div className="w-full flex justify-between items-start font-mono z-10" style={{ color: `${item.accent}70` }}>
              <span className="text-[12px] font-black leading-none">{item.label}</span>
              <span className="text-[7px] font-bold tracking-widest leading-none mt-1 uppercase">Postage</span>
            </div>

            {/* Center Graphic: The Woodblock Print Artwork centerpiece with security watermark */}
            <div className="flex-1 flex items-center justify-center py-2 z-10 relative w-full h-full">
              {/* Detailed Banknote-style Security Guilloche Wave background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.08] select-none" viewBox="0 0 100 100" fill="none" stroke={item.accent} strokeWidth="0.4">
                <circle cx="50" cy="50" r="10" strokeDasharray="1 1" />
                <circle cx="50" cy="50" r="18" />
                <circle cx="50" cy="50" r="26" strokeDasharray="2 1" />
                <circle cx="50" cy="50" r="34" />
                <circle cx="50" cy="50" r="42" strokeDasharray="3 1" />
                <path d="M 10,50 Q 30,30 50,50 T 90,50" />
                <path d="M 10,35 Q 30,15 50,35 T 90,35" />
                <path d="M 10,65 Q 30,45 50,65 T 90,65" />
                <path d="M 50,10 Q 30,30 50,50 T 50,90" />
                <path d="M 35,10 Q 15,30 35,50 T 35,90" />
                <path d="M 65,10 Q 45,30 65,50 T 65,90" />
              </svg>
              <div className="relative z-10 flex items-center justify-center">
                {item.art(item.accent, item.paperColor)}
              </div>
            </div>

            {/* Bottom Title & 4-Word Summary */}
            <div className="text-center mt-auto mb-1 z-10">
              <h4 className="text-[16px] font-outfit font-bold italic leading-tight px-0.5" style={{ color: item.accent }}>
                {item.title}
              </h4>
              <span className="text-[6.5px] font-mono block mt-1.5 uppercase tracking-widest font-black leading-none opacity-70" style={{ color: item.accent }}>
                {item.summary}
              </span>
            </div>

            {/* Bottom metadata */}
            <div className="w-full flex justify-between items-center text-[6px] font-mono tracking-widest z-10" style={{ color: `${item.accent}60` }}>
              <span>DELHI G.P.O.</span>
              <span>{item.year}</span>
            </div>

          </div>
        </div>

        {/* ── 2. BACK FACE (Vintage Postcard Back - Also Perforated) ── */}
        <div 
          className="absolute inset-0 bg-white dark:bg-[#151515] p-3 rounded-none shadow-[0_6px_16px_rgba(0,0,0,0.03)] border border-black/[0.04] dark:border-white/[0.04] flex flex-col justify-between overflow-hidden"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          {/* Perforations - Top Edge */}
          <div className="absolute top-[-5px] left-0 right-0 flex justify-between px-[4px] pointer-events-none z-20">
            {horizHoles.map((_, i) => (
              <div key={`bt-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>
          {/* Perforations - Bottom Edge */}
          <div className="absolute bottom-[-5px] left-0 right-0 flex justify-between px-[4px] pointer-events-none z-20">
            {horizHoles.map((_, i) => (
              <div key={`bb-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_0_-1px_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_-1px_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>
          {/* Perforations - Left Edge */}
          <div className="absolute left-[-5px] top-0 bottom-0 flex flex-col justify-between py-[4px] pointer-events-none z-20">
            {vertHoles.map((_, i) => (
              <div key={`bl-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_1px_0_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_1px_0_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>
          {/* Perforations - Right Edge */}
          <div className="absolute right-[-5px] top-0 bottom-0 flex flex-col justify-between py-[4px] pointer-events-none z-20">
            {vertHoles.map((_, i) => (
              <div key={`br-${i}`} className="w-2.5 h-2.5 rounded-full bg-background shadow-[inset_-1px_0_1.5px_rgba(0,0,0,0.03)] dark:shadow-[inset_-1px_0_1.5px_rgba(0,0,0,0.4)]" />
            ))}
          </div>

          {/* Inner Content Box Frame */}
          <div 
            className="w-full h-full border flex flex-col justify-between p-3 relative overflow-hidden"
            style={{ backgroundColor: item.paperColor, borderColor: `${item.accent}20` }}
          >
            {/* Fine Inner Accent Border Frame */}
            <div className="absolute inset-[3px] border border-solid opacity-20 rounded-sm pointer-events-none" style={{ borderColor: item.accent }} />

            <div className="flex-1 flex flex-col justify-between z-10 h-full">
              
              {/* Postcard divider top */}
              <div className="w-full border-b border-black/[0.04] dark:border-white/[0.04] pb-1 flex justify-between items-center text-[7px] font-mono" style={{ color: `${item.accent}80` }}>
                <span>POST CARD</span>
                <span>REC_ID: 0{index + 1}</span>
              </div>

              {/* Detailed narrative */}
              <div className="flex-1 flex flex-col items-center justify-center py-2">
                <div 
                  className="w-7 h-7 rounded-full flex items-center justify-center mb-1.5"
                  style={{ backgroundColor: `${item.accent}12`, color: item.accent }}
                >
                  <Award size={14} fill={item.accent} style={{ color: item.accent }} />
                </div>
                
                <h4 className="text-[15px] font-outfit font-bold italic text-center px-1 leading-tight text-slate-800 dark:text-white">
                  {item.title}
                </h4>
                <span className="text-[7.5px] font-mono uppercase tracking-widest mt-0.5 block text-slate-400 dark:text-slate-500">
                  {item.org}
                </span>
                
                <p className="text-[11px] font-inter leading-relaxed px-1 mt-2.5 text-center text-slate-600 dark:text-slate-350">
                  "{item.detail}"
                </p>
              </div>

              {/* Footer details */}
              <div className="w-full border-t border-black/[0.04] dark:border-white/[0.04] pt-1 flex justify-between items-center text-[6.5px] font-mono mt-1" style={{ color: `${item.accent}80` }}>
                <span>ARCHIVAL POSTCARD</span>
                <span>{item.year}</span>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-32 overflow-visible w-full">
      
      {/* Background ambient accents */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-[#FFB5B5]/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-visible">

        {/* ── Header ── */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FCFAF6] border border-black/5 rounded-full text-[#1a0a0a]/50 font-black tracking-[0.2em] uppercase text-[9px] mb-6 shadow-sm">
            <Star size={10} className="text-[#F59E9E]" /> Milestones & Memories
          </div>
          <h2
            className="text-[40px] md:text-[60px] lg:text-[70px] font-bold text-[#1a0a0a] leading-[1] tracking-tighter"
          >
            A visual archive of my{" "}
            <span className="text-[#F59E9E]">Awards.</span>
          </h2>
          <p className="max-w-md text-muted-foreground mt-4 font-inter text-sm">
            Hover over any memory card to flip it and read the story behind the recognition.
          </p>
        </div>

        {/* ── Flip Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 overflow-visible pb-10 max-w-6xl mx-auto">
          {achievements.map((item, i) => (
            <div key={item.id} className="w-full max-w-[240px] sm:max-w-[320px] mx-auto">
              <MilestoneCard item={item} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
