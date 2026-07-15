"use client"
import { motion } from "framer-motion"
import { Github, Mail, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "Github",   url: "https://github.com/portgasdyamato",        icon: Github,   code: "GH",   accent: "#7dd3fc" },
  { name: "Email",    url: "mailto:sakshiagrahari2004@gmail.com",       icon: Mail,     code: "ML",   accent: "#86efac" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ethsakshi",     icon: Linkedin, code: "LI",   accent: "#F59E9E" },
]

/** Perforated circle row – top/bottom stamp edge */
const PerfRow = ({ count = 28 }: { count?: number }) => (
  <div className="flex justify-center gap-[3px] px-2">
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        style={{ width: 7, height: 7, borderRadius: "50%", background: "#e8dfc5", flexShrink: 0 }}
      />
    ))}
  </div>
)

/** Mini windrose compass — same vibe as the stamp artwork icons */
const Windrose = ({ size = 64, color = "#5c4a1e", opacity = 0.12 }: { size?: number; color?: string; opacity?: number }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} fill="none" style={{ opacity }}>
    <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="1.2" />
    <circle cx="40" cy="40" r="29" stroke={color} strokeWidth="0.7" strokeDasharray="2 3" />
    <path d="M40,40 L40,5  L43,34 Z" fill={color} />
    <path d="M40,40 L40,5  L37,34 Z" fill={color} opacity="0.5" />
    <path d="M40,40 L40,75 L37,46 Z" fill={color} />
    <path d="M40,40 L40,75 L43,46 Z" fill={color} opacity="0.5" />
    <path d="M40,40 L75,40 L46,43 Z" fill={color} />
    <path d="M40,40 L75,40 L46,37 Z" fill={color} opacity="0.5" />
    <path d="M40,40 L5,40  L34,37 Z" fill={color} />
    <path d="M40,40 L5,40  L34,43 Z" fill={color} opacity="0.5" />
    <line x1="40" y1="40" x2="66" y2="14" stroke={color} strokeWidth="0.5" opacity="0.35" />
    <line x1="40" y1="40" x2="14" y2="14" stroke={color} strokeWidth="0.5" opacity="0.35" />
    <line x1="40" y1="40" x2="66" y2="66" stroke={color} strokeWidth="0.5" opacity="0.35" />
    <line x1="40" y1="40" x2="14" y2="66" stroke={color} strokeWidth="0.5" opacity="0.35" />
    <circle cx="40" cy="40" r="4.5" fill={color} />
    <circle cx="40" cy="40" r="2"   fill="#f5edcf" />
  </svg>
)

export default function SocialLinks() {
  return (
    <div
      className="w-full pt-2 pb-0 overflow-hidden"
      style={{ background: "#f5edcf" }}  // same manila cream as folder interior
    >
      {/* ── Top perforation strip mimicking a stamp tear ── */}
      <div className="w-full py-1" style={{ background: "#eadbb0" }}>
        <PerfRow count={32} />
      </div>

      {/* ── Main footer body ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="w-full max-w-5xl mx-auto px-6 sm:px-10 py-8"
      >

        {/* ──────── STAMP SHEET ROW ──────── */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, rotate: idx % 2 === 0 ? -2 : 2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                title={link.name}
                className="relative flex flex-col items-center"
                style={{ width: 100 }}
              >
                {/* Top perf edge of individual stamp */}
                <div className="flex gap-[2.5px] justify-center">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#eadbb0" }} />
                  ))}
                </div>

                {/* Stamp body */}
                <div
                  className="relative flex flex-col items-center justify-between overflow-hidden"
                  style={{
                    width: 100,
                    height: 120,
                    background: "#FCFAF6",
                    border: "1.5px solid rgba(92,74,30,0.2)",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.10), inset 0 0 0 4px rgba(255,255,255,0.6)",
                    padding: "8px 8px 6px",
                  }}
                >
                  {/* Stamp paper background color band */}
                  <div
                    className="absolute inset-x-0 top-0 h-[60%]"
                    style={{ background: link.accent, opacity: 0.18 }}
                  />

                  {/* POSTAGE label */}
                  <div
                    className="relative z-10 text-[6.5px] font-black tracking-[0.35em] uppercase w-full text-center pt-[2px]"
                    style={{ color: "#5c4a1e", fontFamily: "'Libre Baskerville', serif" }}
                  >
                    POSTAGE
                  </div>

                  {/* Icon circle — styled like a stamp vignette */}
                  <div
                    className="relative z-10 flex items-center justify-center rounded-full"
                    style={{
                      width: 40,
                      height: 40,
                      background: link.accent,
                      boxShadow: `0 0 0 2px rgba(92,74,30,0.15), 0 2px 6px rgba(0,0,0,0.12)`,
                    }}
                  >
                    <Icon size={18} strokeWidth={2} style={{ color: "#2c1f0e" }} />
                  </div>

                  {/* Code label */}
                  <div
                    className="relative z-10 text-[7px] font-black tracking-[0.22em] uppercase"
                    style={{ color: "#5c4a1e", fontFamily: "monospace" }}
                  >
                    {link.name.toUpperCase()}
                  </div>

                  {/* Cancellation lines diagonal */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                    {[0,1,2,3].map(i => (
                      <div
                        key={i}
                        className="absolute top-0"
                        style={{
                          left: `${15 + i * 18}%`,
                          width: "1px",
                          height: "100%",
                          background: "#5c4a1e",
                          transform: "rotate(25deg)",
                          transformOrigin: "top center",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom perf edge */}
                <div className="flex gap-[2.5px] justify-center">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#eadbb0" }} />
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* ──────── DOSSIER RECORD BLOCK ──────── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            background: "#FCFAF6",
            border: "1.5px solid rgba(92,74,30,0.18)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          }}
        >
          {/* Ruled lines ghost */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(92,74,30,0.06) 24px)`,
              opacity: 1,
            }}
          />
          {/* Red margin vertical line */}
          <div className="absolute top-0 bottom-0 left-14 w-px" style={{ background: "rgba(192,57,43,0.22)" }} />

          {/* Windrose watermark center */}
          <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none">
            <Windrose size={120} color="#5c4a1e" opacity={0.06} />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between px-7 py-5 gap-4">
            {/* Left: Folder tab + Name */}
            <div className="flex items-center gap-4">
              {/* Folder icon */}
              <svg width="30" height="24" viewBox="0 0 30 24" fill="none" className="shrink-0 opacity-60">
                <path d="M0,5 L7,5 L9,1 L15,1 L15,5 L30,5 L30,23 L0,23 Z" fill="#c9a84c" opacity="0.25" />
                <path d="M0,5 L7,5 L9,1 L15,1 L15,5" stroke="#5c4a1e" strokeWidth="1" fill="none" />
                <rect x="0" y="5" width="30" height="18" stroke="#5c4a1e" strokeWidth="1" fill="none" />
                <line x1="2" y1="9"  x2="28" y2="9"  stroke="#5c4a1e" strokeWidth="0.5" opacity="0.4" />
                <line x1="2" y1="13" x2="28" y2="13" stroke="#5c4a1e" strokeWidth="0.5" opacity="0.4" />
              </svg>
              <div>
                <div className="text-[8px] font-bold tracking-[0.28em] uppercase mb-0.5" style={{ color: "#8a6e3a", fontFamily: "'Libre Baskerville', serif" }}>
                  PERSONAL DOSSIER · RECORD FILE
                </div>
                <div
                  className="text-xl sm:text-2xl font-bold italic leading-tight"
                  style={{ fontFamily: "'Libre Baskerville', serif", color: "#2c1f0e" }}
                >
                  Sakshi Agrahari
                </div>
                <div className="text-[9px] font-bold tracking-[0.18em] uppercase mt-0.5" style={{ color: "#7a5c2a" }}>
                  AI Product · Design Engineer
                </div>
              </div>
            </div>

            {/* Right: Record details */}
            <div className="flex gap-5 sm:gap-8 pl-1 sm:pl-0">
              {[
                { label: "Status",   value: "Available" },
                { label: "Year",     value: "2026"      },
                { label: "Ref",      value: "SA-2026"   },
              ].map((f) => (
                <div key={f.label} className="flex flex-col">
                  <span className="text-[7px] font-bold tracking-[0.22em] uppercase mb-1" style={{ color: "#8a6e3a", fontFamily: "'Libre Baskerville', serif" }}>
                    {f.label}
                  </span>
                  <span className="text-xs font-black leading-none" style={{ color: "#2c1f0e", fontFamily: "monospace" }}>
                    {f.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Far right: rubber stamp */}
            <div
              className="shrink-0 px-3 py-1.5 border-2 rounded-sm -rotate-2 opacity-40"
              style={{ borderColor: "#8b1a1a", color: "#8b1a1a", fontFamily: "monospace", fontSize: "9px", fontWeight: 900, letterSpacing: "0.2em" }}
            >
              ON FILE
            </div>
          </div>
        </div>

        {/* ──────── Copyright footnote ──────── */}
        <div className="text-center mt-5">
          <span className="text-[8px] font-bold tracking-[0.28em] uppercase" style={{ color: "#8a6e3a", fontFamily: "'Libre Baskerville', serif" }}>
            © 2026 Sakshi Agrahari · Built for Impact
          </span>
        </div>

      </motion.div>

      {/* ── Bottom perforation strip ── */}
      <div className="w-full py-1" style={{ background: "#eadbb0" }}>
        <PerfRow count={32} />
      </div>
    </div>
  )
}
