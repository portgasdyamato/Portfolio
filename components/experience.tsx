"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Plus, Minus } from "lucide-react"

const ROLE_EMBLEMS: Record<string, (color: string) => JSX.Element> = {
  iitDelhi: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 select-none shrink-0">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10" />
      <path d="M6 10h10" />
      <path d="M6 14h6" />
      <circle cx="16" cy="15" r="2" fill={color} stroke="none" />
    </svg>
  ),
  redHat: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 select-none shrink-0">
      <circle cx="12" cy="12" r="9" />
      <polygon points="12,3 14,9 20,9 15,13 17,19 12,15 7,19 9,13 4,9 10,9" fill={color} stroke="none" opacity="0.8" />
    </svg>
  ),
  brightchamps: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 select-none shrink-0">
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" fill={color} stroke="none" opacity="0.8" />
    </svg>
  ),
  opensphere: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 select-none shrink-0">
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" fill={color} stroke="none" />
    </svg>
  ),
  cubble: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 select-none shrink-0">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2.5" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M10 2h4" />
    </svg>
  ),
  freelance: (color: string) => (
    <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 select-none shrink-0">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  )
}

interface ExperienceItem {
  id: string
  number: string
  role: string
  organization: string
  parentOrg?: string
  location: string
  period: string
  current: boolean
  accentColor: string
  bgTint: string
  punchline: string
  bullets: string[]
  tags: string[]
  emblemKey?: string
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "iit-delhi",
    number: "01",
    role: "Design Research Intern",
    organization: "DIVINE Lab, IIT Delhi",
    parentOrg: "Ministry of Education & Multi-State ECCE Initiative",
    location: "Hybrid · New Delhi, India",
    period: "Sep 2026 – Present",
    current: true,
    accentColor: "#F59E9E",
    bgTint: "rgba(245, 158, 158, 0.12)",
    emblemKey: "iitDelhi",
    punchline: "Spearheading G2C digital transformation and AI early childhood education frameworks scaled across 14 Indian states.",
    bullets: [
      "Leading qualitative UX research (semi-structured interviews, contextual inquiries, usability audits) decoding cognitive load patterns for AI educational products.",
      "Partnering directly with state education ministries to translate foundational learning frameworks into accessible, high-trust UI workflows.",
      "Architecting production-ready AI interactive prototypes to validate research hypotheses in real-world classroom environments."
    ],
    tags: ["Qualitative UX", "Figma", "Design Systems", "AI Prototyping", "WCAG 2.1", "React.js"]
  },
  {
    id: "red-hat",
    number: "02",
    role: "LFX Mentee · Red Hat",
    organization: "Red Hat · Linux Foundation",
    parentOrg: "CNCF Mentorship · Mentors: Ashley Cui & Tom Sweeney",
    location: "Remote · United States",
    period: "Sep 2026 – Present",
    current: true,
    accentColor: "#10B981",
    bgTint: "rgba(16, 185, 129, 0.1)",
    emblemKey: "redHat",
    punchline: "Overhauling developer experience and modernizing the Podman open-source platform (podman.io) for global engineers.",
    bullets: [
      "Driving end-to-end strategic UX design, frontend engineering, and modernization of the Podman platform for a global open-source developer ecosystem.",
      "Conducting rigorous code and pull request reviews, contributing production-ready frontend code, and establishing scalable UI component patterns.",
      "Architected the complete user experience overhaul for complex Visual & UX workflows, onboarding flows, and community hubs."
    ],
    tags: ["Podman.io", "Next.js", "TypeScript", "Developer Experience", "Design Systems", "GitHub PRs"]
  },
  {
    id: "brightchamps",
    number: "03",
    role: "Coding & Design Instructor",
    organization: "BrightChamps",
    parentOrg: "Global Next-Gen EdTech",
    location: "Remote · San Francisco / Global",
    period: "Feb 2026 – Present",
    current: true,
    accentColor: "#F59E0B",
    bgTint: "rgba(245, 158, 11, 0.1)",
    emblemKey: "brightchamps",
    punchline: "Demystifying Generative AI, Roblox game development, and design systems for 100+ global students.",
    bullets: [
      "Designed and delivered structured curriculum in Generative AI, LLMs, prompt engineering, and UI/UX design, maintaining 95%+ student satisfaction.",
      "Instructed global learners in programming languages and tools including Python, HTML, CSS, and Lua for Roblox game development.",
      "Active instructor building confidence in AI-native workflows, computational thinking, and creative technology."
    ],
    tags: ["Generative AI", "Roblox Lua", "Python", "Prompt Engineering", "Design Systems", "HTML/CSS"]
  },
  {
    id: "opensphere",
    number: "04",
    role: "Product Designer & Web Developer",
    organization: "OpenSphere & LegalBridge",
    parentOrg: "Sister Companies · B2C & B2B LegalTech SaaS",
    location: "Remote · San Francisco Bay Area",
    period: "Oct 2025 – Feb 2026",
    current: false,
    accentColor: "#6366F1",
    bgTint: "rgba(99, 102, 241, 0.08)",
    emblemKey: "opensphere",
    punchline: "Architected a scalable Shadcn UI design system across 3 teams and engineered the full-stack Attorney Directory.",
    bullets: [
      "Spearheaded dual design strategy for OpenSphere (B2C) and LegalBridge (B2B SaaS), defining user flows and information architecture.",
      "Architected and governed a cross-product design system with Shadcn UI & Tailwind CSS adopted across 3 teams for UI consistency and WCAG 2.1 AA.",
      "Engineered the full-stack 'Attorney Directory' (React/TypeScript frontend with Node.js/PostgreSQL backend) and directed 2025 Immigration Awards."
    ],
    tags: ["React/TypeScript", "Shadcn UI", "Tailwind CSS", "Node.js", "PostgreSQL", "B2B SaaS"]
  },
  {
    id: "cubble",
    number: "05",
    role: "UI/UX Designer",
    organization: "Cubble",
    parentOrg: "FinTech & Social Discovery",
    location: "Remote · Edinburgh, UK",
    period: "June 2025 – Oct 2025",
    current: false,
    accentColor: "#10B981",
    bgTint: "rgba(16, 185, 129, 0.08)",
    emblemKey: "cubble",
    punchline: "Reduced design review cycles by ~40% through sprint co-location and delivered A/B tested features with higher completion.",
    bullets: [
      "Delivered end-to-end Figma-to-production flows for 3 features; live A/B tests confirmed 2 of 3 outperformed control on task completion.",
      "Reduced review cycles by ~40% by co-locating with engineering during sprints — recognized as the team's most efficient handoff process.",
      "Produced user journey maps, annotated design specs, and interactive prototypes that eliminated developer guesswork."
    ],
    tags: ["A/B Testing", "Figma", "User Journey Maps", "Sprint Delivery", "Design Tokens", "DesignOps"]
  },
  {
    id: "freelance",
    number: "06",
    role: "Web & UI/UX Designer",
    organization: "Freelance Studio",
    parentOrg: "Bridge Model · Oxford PhD Alumnus Manzer",
    location: "Remote · Global Clients",
    period: "Jun 2024 – Present",
    current: true,
    accentColor: "#8B5CF6",
    bgTint: "rgba(139, 92, 246, 0.08)",
    emblemKey: "freelance",
    punchline: "Designed and shipped 6+ production web platforms with 100% client retention on rapid 2-week sprints.",
    bullets: [
      "Developing the official website for Bridge Scholarship Organization, founded by Oxford PhD alumnus Manzer.",
      "Shipped 6+ client-facing websites — mobile-first, WCAG-audited, deployed on Vercel with 99.9% uptime.",
      "Delivered brand identities and scalable design systems in 2-week sprints with 100% client retention and ongoing retainer partnerships."
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Brand Systems", "Vercel", "WCAG 2.1"]
  }
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section id="experience" className="scroll-mt-28 py-10 sm:py-14 md:py-20 relative">
      
      {/* ── Editorial Header (No navigation bar filter/category, pure typography) ── */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-10 sm:mb-14 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FFFDF9] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-[#1a0a0a]/70 dark:text-white/70 font-black tracking-[0.2em] uppercase text-[9px] mb-4 shadow-sm">
          <Sparkles size={11} className="text-[#F59E9E]" />
          <span>Professional Experience</span>
        </div>

        <h2 className="text-[30px] sm:text-[42px] md:text-[56px] font-bold text-[#1a0a0a] dark:text-white leading-[1.08] tracking-tight">
          Where Strategic UX <span className="text-[#F59E9E] italic font-serif font-normal">Meets</span>
          <br className="hidden sm:inline" /> Production Engineering.
        </h2>

        <p className="mt-3.5 text-[14px] sm:text-[16px] text-[#1a0a0a]/65 dark:text-white/60 max-w-xl mx-auto leading-relaxed">
          Bridging qualitative research, cross-product design systems, and production frontend code across global teams.
        </p>
      </div>

      {/* ── Cute & Minimal Ledger (No navigation filter, no harsh active border, no organization tags) ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FFFDF9] dark:bg-zinc-900/60 rounded-[32px] divide-y divide-black/[0.04] dark:divide-white/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.02)] overflow-hidden">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id

            return (
              <div 
                key={exp.id}
                className={`transition-colors duration-300 ${
                  isExpanded ? "bg-[#FFF9F9]/50 dark:bg-white/[0.015]" : "hover:bg-black/[0.008] dark:hover:bg-white/[0.008]"
                }`}
              >
                {/* ── Clickable Row Header (Clean, spacious, no organization tag pill) ── */}
                <div
                  onClick={() => toggleItem(exp.id)}
                  className="w-full py-5 sm:py-6 px-5 sm:px-8 flex items-center justify-between gap-4 text-left cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                    
                    {/* Pure Pastel Color Swatch (No icons) */}
                    <div 
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm"
                      style={{ 
                        backgroundColor: exp.bgTint,
                        border: `1px solid ${exp.bgTint}`
                      }}
                    />

                    {/* Role Title & Organization */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-serif italic text-[14px] sm:text-[15px] text-[#1a0a0a]/35 dark:text-white/35 select-none">
                          {exp.number}
                        </span>
                        
                        <h3 className="text-[17px] sm:text-[20px] font-bold text-[#1a0a0a] dark:text-white tracking-tight group-hover:text-[#F59E9E] transition-colors">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] sm:text-[14px] text-[#1a0a0a]/65 dark:text-white/60">
                        <span className="font-semibold text-[#1a0a0a]/85 dark:text-white/85">
                          {exp.organization}
                        </span>
                        <span className="text-[#1a0a0a]/20 dark:text-white/20 hidden sm:inline">•</span>
                        <span className="text-[12px] sm:text-[13px] text-[#1a0a0a]/50 dark:text-white/40">
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Period & Minimalist Plus/Minus Toggle (No organization tag) */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    {/* Period */}
                    <span className="font-mono text-[11px] sm:text-[12px] text-[#1a0a0a]/45 dark:text-white/40 hidden sm:inline">
                      {exp.period}
                    </span>

                    {/* Cute Minimal Toggle Trigger */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${
                      isExpanded 
                        ? "bg-[#1a0a0a] text-white dark:bg-white dark:text-black border-[#1a0a0a] dark:border-white rotate-180 shadow-sm" 
                        : "bg-[#FFFDF9] dark:bg-zinc-800/80 border-black/[0.08] dark:border-white/[0.12] text-[#1a0a0a]/60 dark:text-white/60 group-hover:border-black/25 dark:group-hover:border-white/30 group-hover:text-[#1a0a0a] dark:group-hover:text-white group-hover:scale-105"
                    }`}>
                      {isExpanded ? <Minus size={13} strokeWidth={2} /> : <Plus size={13} strokeWidth={2} />}
                    </div>
                  </div>
                </div>

                {/* ── Expandable Details (Soft, Seamless, No Active Border) ── */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-1">
                        
                        {/* 1-Sentence Punchline Card with Soft Quote Glyph */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5]/90 dark:bg-zinc-800/50 mb-5 relative">
                          <span className="text-[#F59E9E] font-serif text-[32px] leading-none absolute -top-1.5 left-3 select-none opacity-40">
                            “
                          </span>
                          <p className="text-[13px] sm:text-[15px] font-medium text-[#1a0a0a]/90 dark:text-white/90 leading-relaxed pl-3.5">
                            {exp.punchline}
                          </p>
                          {exp.parentOrg && (
                            <p className="mt-2 text-[11px] font-mono text-[#F59E9E] font-semibold pl-3.5">
                              ↳ {exp.parentOrg}
                            </p>
                          )}
                        </div>

                        {/* Deliverables with Rose Dot Markers */}
                        <div className="space-y-3 mb-6 pl-1">
                          {exp.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span 
                                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" 
                                style={{ backgroundColor: exp.accentColor }}
                              />
                              <p className="text-[13px] sm:text-[14px] text-[#1a0a0a]/80 dark:text-white/70 leading-relaxed font-normal">
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Stack / Tools Badges */}
                        <div className="flex flex-wrap items-center gap-2 pt-3.5 border-t border-black/[0.04] dark:border-white/[0.04]">
                          <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-[#1a0a0a]/40 dark:text-white/40 mr-1 font-bold">
                            TOOLS:
                          </span>
                          {exp.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono text-[#1a0a0a]/85 dark:text-white/85 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-default select-none"
                              style={{
                                backgroundColor: exp.bgTint,
                                border: `1px solid ${exp.bgTint}`
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )
          })}
        </div>

        {/* ── Elegant Minimal Note at Bottom ── */}
        <div className="mt-8 text-center">
          <p className="text-[12px] sm:text-[13px] font-medium text-[#1a0a0a]/50 dark:text-white/40 italic font-serif">
            "Bridging human research and production code — where every detail has intention. <span className="text-[#F59E9E] not-italic">✦</span>"
          </p>
          <div className="mt-1 text-[9px] font-mono tracking-widest uppercase text-[#1a0a0a]/30 dark:text-white/30">
            Sakshi Agrahari · Design Engineering Records
          </div>
        </div>

      </div>
    </section>
  )
}
