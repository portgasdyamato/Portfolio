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
      
      {/* Intricate Academic Ribbon Scroll & Laurel Seal */}
      <g transform="translate(0, 0)">
        {/* Scroll rolled edges */}
        <path d="M12,25 C12,21 14,21 14,25 C14,29 12,29 12,25 Z" fill={accent} />
        <path d="M32,25 C32,21 30,21 30,25 C30,29 32,29 32,25 Z" fill={accent} />
        
        {/* Main scroll body lines */}
        <path d="M13,22 L31,22" strokeWidth="1.5" />
        <path d="M13,28 L31,28" strokeWidth="1.5" />
        
        {/* Rolled document curves */}
        <path d="M14,22 C14,14 30,14 30,22" strokeWidth="1" strokeDasharray="2 1" />
        
        {/* Ribbon bow in the middle */}
        <path d="M22,22 L22,32" strokeWidth="1.5" />
        <path d="M20,24 C18,22 18,20 22,22 C26,20 26,22 24,24" strokeWidth="1.2" />
        <path d="M20,28 L19,32 M24,28 L25,32" strokeWidth="1" />
        
        {/* Sparkle star at top */}
        <path d="M22,9 L23.5,12 L26.5,12 L24,13.5 L25,16.5 L22,14.5 L19,16.5 L20,13.5 L17.5,12 L20.5,12 Z" fill={accent} stroke="none" />
      </g>
    </svg>
  ),
  btech: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[50px] h-[50px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="22" r="18" strokeWidth="1.6" />
      <circle cx="22" cy="22" r="15" strokeDasharray="2 2" strokeWidth="0.8" />
      
      {/* Intricate Engineering Gear & Compute Matrix nodes */}
      <g transform="translate(22, 22)">
        {/* Gear outer body */}
        <circle cx="0" cy="0" r="9" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="5" strokeWidth="1" strokeDasharray="1.5 1.5" />
        
        {/* Gear Teeth (8 points) */}
        <line x1="9" y1="0" x2="12" y2="0" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="-9" y1="0" x2="-12" y2="0" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="0" y1="9" x2="0" y2="12" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="0" y1="-9" x2="0" y2="-12" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="6.36" y1="6.36" x2="8.48" y2="8.48" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="-6.36" y1="6.36" x2="-8.48" y2="8.48" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="6.36" y1="-6.36" x2="8.48" y2="-8.48" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        <line x1="-6.36" y1="-6.36" x2="-8.48" y2="-8.48" stroke={accent} strokeWidth="2.2" strokeLinecap="square" />
        
        {/* Center Node Star/Spark (Computer/Tech light) */}
        <circle cx="0" cy="0" r="2" fill={accent} stroke="none" />
        
        {/* Orbiting Tech satellite links */}
        <path d="M-13,-13 L-6,-6 M13,-13 L6,-6 M-13,13 L-6,6 M13,13 L6,6" strokeWidth="1" />
        <circle cx="-13" cy="-13" r="1.5" fill={accent} stroke="none" />
        <circle cx="13" cy="-13" r="1.5" fill={accent} stroke="none" />
        <circle cx="-13" cy="13" r="1.5" fill={bg} stroke={accent} strokeWidth="1" />
        <circle cx="13" cy="13" r="1.5" fill={bg} stroke={accent} strokeWidth="1" />
      </g>
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

      {/* ── Section label top-right ── */}
      <div
        className="absolute"
        style={{ top: 28, right: 24 }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '7px',
            fontWeight: 600,
            color: 'rgba(0,0,0,0.4)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          EDUCATION
        </span>
      </div>

      {/* ── Custom High-Detail Icon ── */}
      <div
        className="absolute"
        style={{ top: 92, left: 30 }}
      >
        {FOLDER_ARTWORKS[stage](accent, bg)}
      </div>

      {/* ── Year ── */}
      <div
        className="absolute"
        style={{ top: 106, right: 24 }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '8px',
            fontWeight: 600,
            color: 'rgba(0,0,0,0.45)',
            letterSpacing: '0.12em',
          }}
        >
          {year}
        </span>
      </div>

      {/* ── Main title — large, bold, left-aligned ── */}
      <div
        className="absolute"
        style={{ top: 148, left: 30, right: 20 }}
      >
        {title.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: title.some(t => t.length > 9) ? '24px' : '30px',
              fontWeight: 700,
              fontStyle: "italic",
              color: 'rgba(26,26,26,0.92)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* ── Accent rule under title ── */}
      <div
        className="absolute"
        style={{ top: 268, left: 30, width: 48, height: 3, backgroundColor: accent }}
      />

      {/* ── Subtitle ── */}
      <div
        className="absolute"
        style={{ top: 286, left: 30 }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '8px',
            fontWeight: 600,
            color: 'rgba(0,0,0,0.5)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          {subtitle}
        </span>
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
