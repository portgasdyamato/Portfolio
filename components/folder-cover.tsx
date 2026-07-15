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

// Custom high-fidelity vintage/woodblock vector illustrations for the folder covers
const FOLDER_ARTWORKS = {
  middle: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[42px] h-[42px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Open Book Pages */}
      <path d="M6,34 C12,30 18,30 22,34 C26,30 32,30 38,34" strokeWidth="1.6" />
      <path d="M6,14 C12,10 18,10 22,14 C26,10 32,10 38,14" strokeWidth="1.6" />
      <line x1="22" y1="14" x2="22" y2="34" strokeWidth="1.6" />
      <path d="M6,14 L6,34" strokeWidth="1.4" />
      <path d="M38,14 L38,34" strokeWidth="1.4" />
      
      {/* Detail Text Lines on pages */}
      <line x1="10" y1="18" x2="18" y2="18" strokeWidth="0.8" opacity="0.8" />
      <line x1="10" y1="22" x2="18" y2="22" strokeWidth="0.8" opacity="0.8" />
      <line x1="10" y1="26" x2="18" y2="26" strokeWidth="0.8" opacity="0.8" />
      <line x1="26" y1="18" x2="34" y2="18" strokeWidth="0.8" opacity="0.8" />
      <line x1="26" y1="22" x2="34" y2="22" strokeWidth="0.8" opacity="0.8" />
      <line x1="26" y1="26" x2="34" y2="26" strokeWidth="0.8" opacity="0.8" />
      
      {/* Sparkles / Stars above book */}
      <path d="M22,4 L23,6 L25,7 L23,8 L22,10 L21,8 L19,7 L21,6 Z" fill={accent} stroke="none" />
      <circle cx="12" cy="6" r="1" fill={accent} stroke="none" />
      <circle cx="32" cy="7" r="1.2" fill={accent} stroke="none" />
    </svg>
  ),
  secondary: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[42px] h-[42px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Compass Outer Ring and dotted inner guide */}
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
    <svg viewBox="0 0 44 44" className="w-[42px] h-[42px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Cap Diamond Top */}
      <path d="M22,6 L39,13 L22,20 L5,13 Z" fill={accent} strokeWidth="1.6" stroke={accent} />
      
      {/* Under cap base skull */}
      <path d="M12,17.5 L12,24 C12,27 22,29 22,24 L22,17.5" strokeWidth="1.6" />
      <path d="M32,17.5 L32,24 C32,27 22,29 22,24" strokeWidth="1.6" />
      
      {/* Tassel cord and fringe */}
      <path d="M22,13 C16,15 15,22 15,25" strokeWidth="1" />
      <rect x="13.5" y="25" width="3" height="5" rx="0.5" fill={accent} stroke="none" />
      
      {/* Rolled Diploma Scroll at bottom */}
      <path d="M11,33 L33,33 C34.5,33 34.5,37 33,37 L11,37 C9.5,37 9.5,33 11,33 Z" fill={bg} strokeWidth="1.4" />
      {/* Ribbon tie */}
      <circle cx="22" cy="35" r="2.2" fill={accent} stroke="none" />
      <path d="M22,35 L19,39 M22,35 L25,39" strokeWidth="1.2" />
    </svg>
  ),
  btech: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[42px] h-[42px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Vintage CRT Computer Monitor Box */}
      <rect x="6" y="6" width="32" height="24" rx="3.5" strokeWidth="1.8" />
      {/* Inner Screen */}
      <rect x="9" y="9" width="26" height="18" rx="1.5" fill={bg} strokeWidth="1.2" />
      
      {/* Code Text lines */}
      <path d="M12,13.5 L18,13.5" strokeWidth="1.5" />
      <path d="M12,17.5 L28,17.5" strokeWidth="1.5" />
      <path d="M12,21.5 L22,21.5" strokeWidth="1.5" />
      
      {/* Pedestal stand */}
      <path d="M18,30 L16,36 L28,36 L26,30" fill={bg} strokeWidth="1.4" />
      <line x1="11" y1="38" x2="33" y2="38" strokeWidth="2.2" />
      
      {/* Small design code brackets */}
      <path d="M3,12 L1,14 L3,16" strokeWidth="1" />
      <path d="M41,12 L43,14 L41,16" strokeWidth="1" />
    </svg>
  ),
  growth: (accent: string, bg: string) => (
    <svg viewBox="0 0 44 44" className="w-[42px] h-[42px]" fill="none" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Hot Air Balloon Envelope */}
      <path d="M22,4 C31,4 35,12 33,19 C31,23 27,27 26,29 L18,29 C17,27 13,23 11,19 C9,12 13,4 22,4 Z" fill={accent} strokeWidth="1.8" />
      
      {/* Curved Stripe accents inside envelope */}
      <path d="M22,4 C25.5,4 27.5,14 26,29 M22,4 C18.5,4 16.5,14 18,29" stroke={bg} strokeWidth="1.2" />
      <path d="M13,13 C18,15 26,15 31,13" stroke={bg} strokeWidth="1" opacity="0.8" />
      
      {/* Basket hanging ropes */}
      <line x1="19.5" y1="29" x2="19.5" y2="34" strokeWidth="0.9" />
      <line x1="24.5" y1="29" x2="24.5" y2="34" strokeWidth="0.9" />
      
      {/* Basket */}
      <rect x="18" y="34" width="8" height="5" rx="1" fill={bg} strokeWidth="1.4" />
      
      {/* Fluffy clouds below balloon */}
      <path d="M4,34 C6,34 7,32 8.5,32 C10,32 11,34 13,34" strokeWidth="1" opacity="0.8" />
      <path d="M31,34 C33,34 34,32 35.5,32 C37,32 38,34 40,34" strokeWidth="1" opacity="0.8" />
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
        style={{ top: 96, left: 30 }}
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
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontSize: title.some(t => t.length > 9) ? '30px' : '38px',
              fontWeight: 800,
              color: 'rgba(26,26,26,0.92)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
              textTransform: 'uppercase',
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
