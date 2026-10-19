"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, Plus, Minus, 
  Workflow, Component, 
  Layers, Shield, Shapes, 
  LucideIcon 
} from "lucide-react"

interface EngagementEntry {
  id: string
  number: string
  role: string
  organization: string
  context: string
  period: string
  asRole: string
  location: string
  keyBadge: string
  tagIcon: LucideIcon
  accentColor: string
  bgTint: string
  punchline: string
  tags: string[]
}

const SPEAKING_ITEMS: EngagementEntry[] = [
  {
    id: "ozone-ai",
    number: "01",
    role: "AI Trainer",
    organization: "Ozone Group",
    context: "Claude Buildathon & Agent Workflows",
    period: "June 2026",
    asRole: "Lead Speaker",
    location: "Experience Centre · Hybrid",
    keyBadge: "70+ Leaders",
    tagIcon: Workflow,
    accentColor: "#D97706",
    bgTint: "rgba(217, 119, 6, 0.12)",
    punchline: "Invited to co-lead Ozone Group's first Claude Buildathon alongside Akshay Kumar, training 70+ industry professionals across departments from prompt ideation to production deployments on GitHub & Vercel.",
    tags: ["Claude Code", "Agentic AI", "Enterprise AI", "Buildathon"]
  },
  {
    id: "iit-guwahati",
    number: "02",
    role: "Guest Speaker",
    organization: "IIT Guwahati",
    context: "NSET Programme Keynote",
    period: "Jan 2026",
    asRole: "Keynote Speaker",
    location: "Virtual Keynote & Masterclass",
    keyBadge: "Figma Keynote",
    tagIcon: Component,
    accentColor: "#7C3AED",
    bgTint: "rgba(124, 58, 237, 0.12)",
    punchline: "Delivered an interactive session on 'Design Thinking & Scalable Web Design' for NSET Programme engineering scholars, conducting a live Figma demo on auto-layout, design tokens, and component architecture.",
    tags: ["Design Systems", "Live Prototyping", "Design Thinking", "Figma Masterclass"]
  }
]

const VOLUNTEER_ITEMS: EngagementEntry[] = [
  {
    id: "bridge-scholarship",
    number: "01",
    role: "Web Developer & UI Architect",
    organization: "Bridge Scholarship",
    context: "Founded by Oxford PhD Alumnus Manzer",
    period: "July – Sep 2026",
    asRole: "Core Contributor",
    location: "Remote · Global Initiative",
    keyBadge: "Oxford Initiative",
    tagIcon: Layers,
    accentColor: "#0284C7",
    bgTint: "rgba(2, 132, 199, 0.12)",
    punchline: "Architecting and developing the official web platform to showcase the 'Bridge Model,' engineer international scholar directories, and implement transparent impact dashboards for global donors.",
    tags: ["Web Architecture", "Next.js", "WCAG 2.1 AA", "Scholar Platform"]
  },
  {
    id: "medisec-ngo",
    number: "02",
    role: "Publication Designer",
    organization: "MediSec NGO",
    context: "US-Based Healthcare Initiative",
    period: "Aug 2025",
    asRole: "Pro-Bono Lead",
    location: "Remote · United States",
    keyBadge: "Pediatric Safety",
    tagIcon: Shield,
    accentColor: "#059669",
    bgTint: "rgba(5, 150, 105, 0.12)",
    punchline: "Led the design and development of an educational digital cybersecurity booklet tailored for hospitalized pediatric patients, translating healthcare data privacy into accessible, reassuring visual content.",
    tags: ["Pediatric UX", "Healthcare Safety", "Editorial Design", "Child Privacy"]
  },
  {
    id: "pledge-a-smile",
    number: "03",
    role: "Outreach & Design Volunteer",
    organization: "Pledge a Smile NGO",
    context: "Grassroots Child Welfare",
    period: "Sep – Oct 2025",
    asRole: "Community Volunteer",
    location: "Community Outreach",
    keyBadge: "Child Welfare",
    tagIcon: Shapes,
    accentColor: "#E11D48",
    bgTint: "rgba(225, 29, 72, 0.12)",
    punchline: "Spearheaded grassroots fundraising campaigns leveraging design-led storytelling and interactive community drives to fund education kits and essential supplies for children.",
    tags: ["Community Outreach", "Fundraising", "Youth Welfare"]
  }
]

function EngagementRow({
  item,
  isExpanded,
  onToggle,
  isLast,
  fillHeight = false
}: {
  item: EngagementEntry
  isExpanded: boolean
  onToggle: () => void
  isLast: boolean
  fillHeight?: boolean
}) {
  const TagIcon = item.tagIcon

  return (
    <div
      className={`transition-colors duration-300 flex flex-col ${fillHeight ? "flex-1 justify-center" : ""} ${
        isExpanded ? "bg-[#FFF9F9]/50 dark:bg-white/[0.015]" : "hover:bg-black/[0.008] dark:hover:bg-white/[0.008]"
      } ${!isLast ? "border-b border-black/[0.04] dark:border-white/[0.04]" : ""}`}
    >
      {/* Row Header - Strictly Justified */}
      <div
        onClick={onToggle}
        className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer select-none group"
      >
        {/* Left: Swatch + Title/Role */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {/* Pastel Swatch */}
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-xs"
            style={{
              backgroundColor: item.bgTint,
              border: `1px solid ${item.bgTint}`
            }}
          />

          {/* Title & Subtitle */}
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="font-serif italic text-[13px] sm:text-[14px] text-[#1a0a0a]/35 dark:text-white/35 select-none shrink-0">
                {item.number}
              </span>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#1a0a0a] dark:text-white tracking-tight group-hover:text-[#F59E9E] transition-colors truncate">
                {item.organization}
              </h4>
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[12px] sm:text-[13px] text-[#1a0a0a]/65 dark:text-white/60">
              <span className="font-semibold text-[#1a0a0a]/85 dark:text-white/85">
                {item.role}
              </span>
              <span className="text-[#1a0a0a]/20 dark:text-white/20 hidden sm:inline">•</span>
              <span className="text-[11px] text-[#1a0a0a]/45 dark:text-white/40 font-mono hidden sm:inline whitespace-nowrap">
                {item.period}
              </span>
              {item.asRole && (
                <>
                  <span className="text-[#1a0a0a]/20 dark:text-white/20 hidden sm:inline">•</span>
                  <span className="text-[11.5px] text-[#1a0a0a]/65 dark:text-white/60 font-medium hidden sm:inline whitespace-nowrap">
                    {item.asRole}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right: Solid Black Tag Badge (Text Only, No Icon) + Plus Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <span className="inline-flex items-center text-[9.5px] font-mono tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-xs select-none whitespace-nowrap">
            {item.keyBadge}
          </span>

          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${
              isExpanded
                ? "bg-[#1a0a0a] text-white dark:bg-white dark:text-black border-[#1a0a0a] dark:border-white rotate-180 shadow-sm"
                : "bg-[#FFFDF9] dark:bg-zinc-800/80 border-black/[0.08] dark:border-white/[0.12] text-[#1a0a0a]/60 dark:text-white/60 group-hover:border-black/25 dark:group-hover:border-white/30 group-hover:text-[#1a0a0a] dark:group-hover:text-white group-hover:scale-105"
            }`}
          >
            {isExpanded ? <Minus size={12} strokeWidth={2} /> : <Plus size={12} strokeWidth={2} />}
          </div>
        </div>
      </div>

      {/* Expandable Details */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 pt-1">
              {/* 1-Sentence Punchline Card */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F5]/90 dark:bg-zinc-800/50 mb-3.5 relative">
                <span className="text-[#F59E9E] font-serif text-[28px] leading-none absolute -top-1 left-2.5 select-none opacity-40">
                  “
                </span>
                <p className="text-[12.5px] sm:text-[13.5px] font-medium text-[#1a0a0a]/85 dark:text-white/85 leading-relaxed pl-3">
                  {item.punchline}
                </p>
                {item.context && (
                  <p className="mt-1.5 text-[10.5px] font-mono text-[#F59E9E] font-semibold pl-3">
                    ↳ {item.context} · {item.location}
                  </p>
                )}
              </div>

              {/* Tags in Expanded Area - Solid Black, Only Icon (No Circular Container), 1 Icon for this item's tags */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2.5 border-t border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.18em] text-[#1a0a0a]/40 dark:text-white/40 font-bold mr-1">
                  FOCUS:
                </span>
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-xs select-none cursor-default hover:scale-[1.02] transition-transform duration-200"
                  >
                    <TagIcon size={11} className="text-[#F59E9E] shrink-0" strokeWidth={2.2} />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function VolunteerSpeaking() {
  const [expandedSpeaking, setExpandedSpeaking] = useState<string | null>(null)
  const [expandedVolunteer, setExpandedVolunteer] = useState<string | null>(null)

  return (
    <section id="community" className="scroll-mt-28 py-10 sm:py-14 md:py-16 relative">
      {/* Container width tailored to fit content comfortably with 45:55 ratio without suffocating */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* ── Editorial Header ── */}
        <div className="max-w-2xl mx-auto text-center px-4 mb-8 sm:mb-12 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF9] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-[#1a0a0a]/70 dark:text-white/70 font-black tracking-[0.2em] uppercase text-[9px] mb-4 shadow-sm">
            <Sparkles size={11} className="text-[#F59E9E]" />
            <span>Community & Keynotes</span>
          </div>

          <h2 className="text-[30px] sm:text-[40px] md:text-[48px] font-bold text-[#1a0a0a] dark:text-white leading-[1.08] tracking-tight">
            Speaking Engagements <span className="text-[#F59E9E] italic font-serif font-normal">&</span>
            <br className="hidden sm:inline" /> Social Impact.
          </h2>

          <p className="mt-2.5 text-[13px] sm:text-[14.5px] text-[#1a0a0a]/65 dark:text-white/60 max-w-lg mx-auto leading-relaxed">
            Leading AI workshops and guest lectures at technical institutes, and engineering pro-bono platforms for global non-profit initiatives.
          </p>
        </div>

        {/* ── UNIFIED CONTAINER: 45:55 ratio grid layout ── */}
        <div className="bg-[#FFFDF9] dark:bg-zinc-900/60 rounded-[32px] border border-black/[0.05] dark:border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] divide-y lg:divide-y-0 lg:divide-x divide-black/[0.05] dark:divide-white/[0.06]">
            
            {/* ── COLUMN 1: SPEAKING (45% width, fills equal height) ── */}
            <div className="flex flex-col flex-1 h-full">
              {SPEAKING_ITEMS.map((item, idx) => (
                <EngagementRow
                  key={item.id}
                  item={item}
                  isExpanded={expandedSpeaking === item.id}
                  onToggle={() => setExpandedSpeaking(prev => prev === item.id ? null : item.id)}
                  isLast={idx === SPEAKING_ITEMS.length - 1}
                  fillHeight={true}
                />
              ))}
            </div>

            {/* ── COLUMN 2: VOLUNTEERING (55% width) ── */}
            <div className="flex flex-col flex-1 h-full">
              {VOLUNTEER_ITEMS.map((item, idx) => (
                <EngagementRow
                  key={item.id}
                  item={item}
                  isExpanded={expandedVolunteer === item.id}
                  onToggle={() => setExpandedVolunteer(prev => prev === item.id ? null : item.id)}
                  isLast={idx === VOLUNTEER_ITEMS.length - 1}
                  fillHeight={false}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
