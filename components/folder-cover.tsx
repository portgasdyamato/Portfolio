"use client"

import type { LucideIcon } from "lucide-react"
import { BookOpen, GraduationCap, Briefcase, Monitor, Book } from "lucide-react"

export type FolderStage = 'middle' | 'secondary' | 'highschool' | 'btech' | 'growth'

interface StageConfig {
  bg: string           // light background paper color
  accent: string       // stage accent color
  label: string        // index label
  title: string[]      // lines of the title
  subtitle: string
  year: string
  Icon: LucideIcon
}

const STAGE_CONFIGS: Record<FolderStage, StageConfig> = {
  middle: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#7dd3fc',    // Sky Blue
    label: '01',
    title: ['MIDDLE', 'SCHOOL'],
    subtitle: 'Academic Records',
    year: '2015 – 2018',
    Icon: Book,
  },
  secondary: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#86efac',    // Light Green
    label: '02',
    title: ['SECONDARY', 'SCHOOL'],
    subtitle: 'Academic Records',
    year: '2018 – 2020',
    Icon: BookOpen,
  },
  highschool: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#d8b4fe',    // Light Purple
    label: '03',
    title: ['HIGH SCHOOL', 'GRADUATION'],
    subtitle: 'Academic Records',
    year: '2021 – 2022',
    Icon: GraduationCap,
  },
  btech: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#F59E9E',    // Brand Rose Pink
    label: '04',
    title: ['B.TECH', 'COMP. SCI.'],
    subtitle: 'Engineering — AKTU',
    year: '2022 – 2026',
    Icon: Monitor,
  },
  growth: {
    bg: '#FCFAF6',        // Clean Light Cream
    accent: '#fde047',    // Yellow
    label: '05',
    title: ['PROFESSIONAL', 'GROWTH'],
    subtitle: 'Global & Remote',
    year: '2024 – Present',
    Icon: Briefcase,
  },
}

export function FolderCoverDesign({ stage, direction = 'ltr' }: { stage: FolderStage; direction?: 'ltr' | 'rtl' }) {
  const { bg, accent, label, title, subtitle, year, Icon } = STAGE_CONFIGS[stage]

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

      {/* ── Icon ── */}
      <div
        className="absolute"
        style={{ top: 100, left: 30, lineHeight: 0 }}
      >
        <Icon
          size={28}
          strokeWidth={1.6}
          fill={accent}
          stroke={bg}
          style={{ opacity: 0.95 }}
        />
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
