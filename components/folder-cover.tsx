"use client"

export type FolderStage = 'middle' | 'secondary' | 'highschool' | 'btech' | 'growth'

interface StageConfig {
  bg: string           // light background paper color
  accent: string       // stage accent color
  label: string        // index label
  title: string[]      // lines of the title
  subtitle: string
  year: string
}

const STAGE_CONFIGS: Record<FolderStage, StageConfig> = {
  middle: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#7dd3fc',    // Sky Blue
    label: '01',
    title: ['MIDDLE', 'SCHOOL'],
    subtitle: 'Academic Records',
    year: '2015 – 2018',
  },
  secondary: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#86efac',    // Light Green
    label: '02',
    title: ['SECONDARY', 'SCHOOL'],
    subtitle: 'Academic Records',
    year: '2018 – 2020',
  },
  highschool: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#d8b4fe',    // Light Purple
    label: '03',
    title: ['HIGH SCHOOL', 'GRADUATION'],
    subtitle: 'Academic Records',
    year: '2021 – 2022',
  },
  btech: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#F59E9E',    // Brand Rose Pink
    label: '04',
    title: ['B.TECH', 'COMP. SCI.'],
    subtitle: 'Engineering — AKTU',
    year: '2022 – 2026',
  },
  growth: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#fde047',    // Yellow
    label: '05',
    title: ['PROFESSIONAL', 'GROWTH'],
    subtitle: 'Global & Remote',
    year: '2024 – Present',
  },
}

// Custom high-fidelity vintage/woodblock vector stamp designs for each folder stage
const FOLDER_ARTWORKS = {
  middle: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[50px] h-[50px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="18" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="15" strokeDasharray="2 2" strokeWidth="0.8" />
      
      {/* Open Book */}
      <path d="M12,28 C16,25 20,25 22,28 C24,25 28,25 32,28" strokeWidth="1.5" />
      <path d="M12,17 C16,14 20,14 22,17 C24,14 28,14 32,17" strokeWidth="1.5" />
      <line x1="22" y1="17" x2="22" y2="28" strokeWidth="1.5" />
      <path d="M12,17 L12,28" strokeWidth="1.2" />
      <path d="M32,17 L32,28" strokeWidth="1.2" />
      
      {/* Sparkle star */}
      <path d="M22,9 L23,11 L25,11 L23,12 L22,14 L21,12 L19,11 L21,11 Z" fill={accent} stroke="none" />
    </svg>
  ),
  secondary: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[50px] h-[50px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="18" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="15" strokeDasharray="2 2" strokeWidth="0.8" />
      
      {/* North Point */}
      <path d="M22,22 L22,5 L25,18 Z" fill={accent} />
      <path d="M22,22 L22,5 L19,18 Z" />
      {/* South Point */}
      <path d="M22,22 L22,39 L19,26 Z" fill={accent} />
      <path d="M22,22 L22,39 L25,26 Z" />
      {/* East Point */}
      <path d="M22,22 L39,22 L26,25 Z" fill={accent} />
      <path d="M22,22 L39,22 L26,19 Z" />
      {/* West Point */}
      <path d="M22,22 L5,22 L18,19 Z" fill={accent} />
      <path d="M22,22 L5,22 L18,25 Z" />

      {/* Center core */}
      <circle cx="22" cy="22" r="3.5" fill={bg} stroke={accent} strokeWidth="1.5" />
    </svg>
  ),
  highschool: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[50px] h-[50px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="18" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="15" strokeDasharray="2 2" strokeWidth="0.8" />
      
      {/* Mortarboard Diamond */}
      <path d="M22,10 L31,14 L22,18 L13,14 Z" fill={accent} strokeWidth="1.4" />
      <path d="M17,16.5 L17,21 C17,23 27,23 27,21 L27,16.5" strokeWidth="1.4" />
      <path d="M22,14 C18,15.5 18,20 18,22" strokeWidth="0.8" />
      <circle cx="18" cy="22.5" r="1" fill={accent} stroke="none" />
      
      {/* Scroll at bottom */}
      <path d="M15,27 L29,27 C30,27 30,30 29,30 L15,30 C14,30 14,27 15,27 Z" fill={bg} strokeWidth="1.2" />
    </svg>
  ),
  btech: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[50px] h-[50px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="18" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="15" strokeDasharray="2 2" strokeWidth="0.8" />
      
      {/* Monitor screen box */}
      <rect x="12" y="11" width="20" height="15" rx="2" strokeWidth="1.6" />
      <rect x="14" y="13" width="16" height="11" rx="0.5" fill={bg} strokeWidth="0.8" />
      
      {/* Screen code lines */}
      <line x1="16" y1="16" x2="22" y2="16" strokeWidth="1" />
      <line x1="16" y1="19" x2="26" y2="19" strokeWidth="1" />
      <line x1="16" y1="22" x2="20" y2="22" strokeWidth="1" />
      
      {/* Pedestal stand */}
      <path d="M20,26 L19,30 L25,30 L24,26" fill={bg} strokeWidth="1" />
      <line x1="16" y1="31" x2="28" y2="31" strokeWidth="1.8" />
    </svg>
  ),
  growth: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[50px] h-[50px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="18" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="15" strokeDasharray="2 2" strokeWidth="0.8" />
      
      {/* Hot Air Balloon */}
      <path d="M22,9 C27.5,9 30,14 29,18 C28,21 25.5,23 25,25 L19,25 C18.5,23 16,21 15,18 C14,14 16.5,9 22,9 Z" fill={accent} strokeWidth="1.4" />
      <path d="M22,9 C24,9 25,15 25,25 M22,9 C20,9 19,15 19,25" stroke={bg} strokeWidth="0.8" />
      <line x1="20" y1="25" x2="20" y2="28" strokeWidth="0.8" />
      <line x1="24" y1="25" x2="24" y2="28" strokeWidth="0.8" />
      <rect x="19.5" y="28" width="5" height="3" rx="0.5" fill={bg} strokeWidth="1" />
    </svg>
  ),
}

export function FolderCoverDesign({ stage, direction = 'ltr' }: { stage: FolderStage; direction?: 'ltr' | 'rtl' }) {
  const { bg, accent, label, title, subtitle, year } = STAGE_CONFIGS[stage]

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden border border-black/5 rounded-none"
      style={{ backgroundColor: bg }}
    >
      {/* ── Background SVG structure (Light Theme Manila Rules with visible Grid) ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 280 380"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Fine grid overlay - soft but defined lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={`vl-${i}`}
            x1={i * 20} y1="0" x2={i * 20} y2="380"
            stroke="rgba(0,0,0,0.035)" strokeWidth="0.6"
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`hl-${i}`}
            x1="0" y1={i * 20} x2="280" y2={i * 20}
            stroke="rgba(0,0,0,0.035)" strokeWidth="0.6"
          />
        ))}

        {/* Giant ghosted index number */}
        <text
          x="10" y="310"
          fontSize="220"
          fontWeight="900"
          fontFamily="'Inter', sans-serif"
          fill="rgba(0,0,0,0.038)"
          letterSpacing="-10"
        >
          {label}
        </text>

        {/* Left structural rule */}
        <line x1="30" y1="24" x2="30" y2="356"
          stroke="rgba(0,0,0,0.09)" strokeWidth="1"/>

        {/* Thin horizontal rule separating header from body */}
        <line x1="30" y1="80" x2="260" y2="80"
          stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>

        {/* Label / index block at top-left */}
        <rect x="30" y="24" width="36" height="20" rx="0"
          fill={accent} opacity="1"/>

        {/* Divider before subtitle */}
        <line x1="30" y1="280" x2="260" y2="280"
          stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>

        {/* Bottom rule */}
        <line x1="0" y1="356" x2="280" y2="356"
          stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>

        {/* Corner tick marks — bottom right */}
        <line x1="248" y1="356" x2="260" y2="356"
          stroke={accent} strokeWidth="2" opacity="0.8"/>
        <line x1="260" y1="344" x2="260" y2="356"
          stroke={accent} strokeWidth="2" opacity="0.8"/>

        {/* Corner tick marks — top left */}
        <line x1="30" y1="8" x2="42" y2="8"
          stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
      </svg>

      {/* ── Realistic Vertical Spine Crease ── */}
      <div 
        className={`absolute top-0 bottom-0 w-4 bg-gradient-to-r from-black/[0.04] to-transparent pointer-events-none z-20 ${
          direction === 'rtl' ? 'right-0 border-l border-black/[0.03]' : 'left-0 border-r border-black/[0.03]'
        }`} 
      />

      {/* ── Index label text ── */}
      <div
        className="absolute"
        style={{ top: 24, left: 30, width: 36, height: 20,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '9px',
            fontWeight: 750,
            color: '#ffffff', // White text on color accent tabs
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </span>
      </div>

      {/* ── Custom High-Detail Icon ── */}
      <div
        className="absolute"
        style={{ top: 92, left: 30 }}
      >
        {FOLDER_ARTWORKS[stage](accent, bg)}
      </div>

      {/* ── Detailed Central Archival Label Plate (Archival Folder design) ── */}
      <div 
        className="absolute top-[162px] left-[30px] right-[24px] bg-white/60 dark:bg-black/20 border border-black/10 dark:border-white/10 p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] rounded-sm z-10 flex flex-col justify-between"
        style={{ height: '110px' }}
      >
        {/* Double Frame inside Label Plate */}
        <div className="absolute inset-[2.5px] border border-solid border-black/[0.04] dark:border-white/[0.04] pointer-events-none" />
        
        {/* Top classification */}
        <div className="flex justify-between items-center text-[6.5px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">
          <span>{subtitle}</span>
          <span className="font-bold opacity-80" style={{ color: accent }}>RECORD FILE</span>
        </div>

        {/* Dossier Title */}
        <div className="my-auto py-1">
          {title.map((line, i) => (
            <h4 
              key={i} 
              className="text-[16px] font-bold text-slate-800 dark:text-slate-100 font-mono tracking-wider leading-[1.1] uppercase m-0"
            >
              {line}
            </h4>
          ))}
        </div>

        {/* Bottom parameters */}
        <div className="flex justify-between items-end border-t border-black/[0.08] dark:border-white/[0.08] pt-1.5 mt-0.5 text-[6.5px] font-mono text-slate-400 dark:text-slate-500 tracking-wider">
          <span>CLASSIFICATION: 0{label}</span>
          <span className="font-bold">{year}</span>
        </div>
      </div>

      {/* ── Bottom label ── */}
      <div
        className="absolute"
        style={{ bottom: 18, left: 30 }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '6.5px',
            fontWeight: 500,
            color: 'rgba(0,0,0,0.35)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Portfolio — Academic Dossier
        </span>
      </div>
    </div>
  )
}
