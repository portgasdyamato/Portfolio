"use client"

import { motion } from "framer-motion"
import { GitBranch, Sparkles, Terminal, Mic, Radio, Disc, Cpu, Volume2, Activity, Zap, ShieldCheck } from "lucide-react"

interface FlowchartNode {
  id: string
  label: string
  subtext: string
  type?: "input" | "decision" | "engine" | "output" | string
}

interface CaseStudyFlowchartProps {
  slug: string
  color?: string
  flowchart?: {
    title?: string
    subtitle?: string
    nodes?: FlowchartNode[]
  }
}

const PORTFOLIO_PINK = "#F59E9E"

// Explanatory paragraphs for each project
const EXPLANATION_PARAGRAPHS: Record<string, string> = {
  "yonder-wonder": "The Yonder Wonder architecture decouples identity preservation from environmental lighting synthesis. By validating biometric geometry boundaries before stable diffusion prompt execution, the pipeline guarantees photorealistic memory synthesis while preventing face-morphing anomalies.",
  "pocket-fund": "Pocket Fund reframes financial tracking by routing transactions through plain-language NLP transformation. Expenses update the global 100 HP health score in real-time, eliminating financial anxiety through non-punitive gamification.",
  "vidya": "Vidya ingests complex educational media (PDFs, videos, handwritten notes) and filters them through AA/AAA accessibility rules. The system exhales content into Dyslexia-friendly typography, voice guidance, and bite-sized interactive quizzes.",
  "voxa": "VoXa streams real-time microphone audio into an instant NLP token parser, extracting action intent, task titles, due dates, and project tags automatically with sub-100ms latency for true hands-free productivity.",
  "wassup": "Wassup Web constantly monitors conversation intent in active messaging threads, automatically instantiating dynamic spatial side columns for collaborative whiteboards, event planning, and instant executive summaries.",
  "pippofy": "Pippofy bridges physical analog vinyl rituals with digital audio soundscapes. By analyzing vinyl surface crackle health and album history, it generates ambient soundscapes tailored to the user's focus state.",
  "portfolio": "The portfolio architecture connects visitor scroll coordinates and physics state machine inputs directly to a 60fps spring animation engine, creating responsive character interactions."
}

const PROJECT_FLOWCHARTS: Record<string, { title: string; subtitle: string; style: "bezier" | "concentric" | "sacred" | "arc" | "radar"; nodes: FlowchartNode[] }> = {
  "yonder-wonder": {
    title: "Dual Identity Bezier Flow",
    subtitle: "Branching biometric entity vectors & lighting synthesis",
    style: "bezier",
    nodes: [
      { id: "01", label: "Media Ingestion", subtext: "2 separate portraits + context prompt", type: "input" },
      { id: "02", label: "Identity Lock Guard", subtext: "Locks entity boundaries to prevent morphing", type: "decision" },
      { id: "03", label: "SD & GAN Engine", subtext: "Context aware lighting synthesis", type: "engine" },
      { id: "04", label: "Shared Memory Card", subtext: "Synthesized present moment output", type: "output" }
    ]
  },
  "pocket-fund": {
    title: "Orbital Budgeting Spheres",
    subtitle: "Nested financial vitals & anxiety reframing",
    style: "concentric",
    nodes: [
      { id: "01", label: "Transaction Input", subtext: "Manual or OCR receipt scan", type: "input" },
      { id: "02", label: "Jargon Reframer", subtext: "Strips banking terms into plain language", type: "decision" },
      { id: "03", label: "HP Health Engine", subtext: "Need / Want / Ick categorization", type: "engine" },
      { id: "04", label: "Financial Sanctuary", subtext: "Streak protection & financial vitals HUD", type: "output" }
    ]
  },
  "vidya": {
    title: "Sacred Geometry Knowledge Spectrum",
    subtitle: "Inclusive multimodal learning pathway",
    style: "sacred",
    nodes: [
      { id: "01", label: "Multimodal Source", subtext: "PDF, video & web text sources", type: "input" },
      { id: "02", label: "Accessibility Guard", subtext: "Font scale, contrast & screen reader rules", type: "decision" },
      { id: "03", label: "Gemini AI Core", subtext: "Bite-sized summaries & adaptive quizzes", type: "engine" },
      { id: "04", label: "Inclusive Learning Hub", subtext: "Accessible workspace with dyslexia toggle", type: "output" }
    ]
  },
  "voxa": {
    title: "Acoustic Equalizer Flow Network",
    subtitle: "Streaming microphone speech to parsed NLP parameters",
    style: "arc",
    nodes: [
      { id: "01", label: "Acoustic Speech Input", subtext: "Streaming microphone audio ingestion & noise filter", type: "input" },
      { id: "02", label: "NLP Token Parser", subtext: "Extracts action intent, due dates & project tags", type: "decision" },
      { id: "03", label: "Task Vitals Engine", subtext: "Executes database mutations & updates glow score", type: "engine" },
      { id: "04", label: "Hands-Free Sanctuary", subtext: "Sub-100ms voice response & dynamic dashboard", type: "output" }
    ]
  },
  "wassup": {
    title: "Target Scope Radar Grid",
    subtitle: "Contextual sentiment sensor to spatial utility",
    style: "radar",
    nodes: [
      { id: "01", label: "Spatial Chat Stream", subtext: "Real-time messaging thread & media ingestion", type: "input" },
      { id: "02", label: "Sentiment Sensor", subtext: "Detects event planning & trip intent", type: "decision" },
      { id: "03", label: "Utility Canvas Engine", subtext: "Instantiates side workspace columns", type: "engine" },
      { id: "04", label: "Spatial Utility Grid", subtext: "Whiteboard, event planner & calendar tab", type: "output" }
    ]
  },
  "pippofy": {
    title: "Orbital Vinyl Groove Spheres",
    subtitle: "Analog vinyl rituals to digital soundscape",
    style: "concentric",
    nodes: [
      { id: "01", label: "Vinyl Selection", subtext: "33 RPM vinyl record choice & track loading", type: "input" },
      { id: "02", label: "Crackle Health Filter", subtext: "Measures surface noise & analog warmth", type: "decision" },
      { id: "03", label: "AI Historian Core", subtext: "Fetches album liner notes & artist context", type: "engine" },
      { id: "04", label: "Vinyl Sanctuary HUD", subtext: "Spinning vinyl player + ambient noise mixer", type: "output" }
    ]
  },
  "portfolio": {
    title: "Bezier State Flow Network",
    subtitle: "Visitor scroll position to pixel character physics",
    style: "bezier",
    nodes: [
      { id: "01", label: "Visitor Scroll Input", subtext: "Page scroll position & cursor coordinates", type: "input" },
      { id: "02", label: "State Controller", subtext: "Determines active section & pixel sprite action", type: "decision" },
      { id: "03", label: "Framer Physics Engine", subtext: "Executes 60fps spring animations & glass morphing", type: "engine" },
      { id: "04", label: "Interactive Realm", subtext: "Dynamic micro-interactions & feedback cards", type: "output" }
    ]
  }
}

export default function CaseStudyFlowchart({ slug, flowchart }: CaseStudyFlowchartProps) {
  const projectConfig = PROJECT_FLOWCHARTS[slug] || {
    title: "System Architecture Flowchart",
    subtitle: "Visual node-based architecture displaying system logic",
    style: "bezier" as const,
    nodes: [
      { id: "01", label: "User Input & Context", subtext: "Data & intent ingestion", type: "input" },
      { id: "02", label: "Decision Boundary", subtext: "Validation & safety logic", type: "decision" },
      { id: "03", label: "Processing Core", subtext: "AI model & state mutation", type: "engine" },
      { id: "04", label: "Rendered Interface", subtext: "High-fidelity UI state output", type: "output" }
    ]
  }

  const nodes = flowchart?.nodes?.length ? flowchart.nodes : projectConfig.nodes
  const title = flowchart?.title || projectConfig.title
  const subtitle = flowchart?.subtitle || projectConfig.subtitle
  const style = projectConfig.style
  const themeColor = PORTFOLIO_PINK
  const explanationParagraph = EXPLANATION_PARAGRAPHS[slug] || "This system architecture decouples complex data inputs into clean, type-safe decision gates and high-performance UI states."

  return (
    <section className="py-12 sm:py-16 bg-[#FFF5F7] dark:bg-[#090608] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#1c1417_1.5px,transparent_1.5px)] [background-size:24px_24px] border-y border-pink-500/15 dark:border-white/10 relative overflow-visible">
      
      {/* Volumetric Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-20 blur-[170px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${themeColor}, transparent 70%)` }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F59E9E]/10 rounded-full border border-[#F59E9E]/20 mb-4 shadow-sm">
            <GitBranch size={12} className="text-[#F59E9E]" />
            <span className="text-[10px] font-black text-[#F59E9E] uppercase tracking-[0.3em]">System Architecture</span>
          </div>
          
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold italic tracking-tight leading-[1.05] text-[#1a0a0a] dark:text-white font-outfit">
            {title.split(" Flow")[0]} <span className="text-[#F59E9E]">Architecture.</span>
          </h2>
          
          <p className="max-w-xl text-[#4a5568] dark:text-zinc-400 mt-2 text-sm md:text-base font-inter leading-relaxed text-justify">
            {subtitle}
          </p>
        </div>

        {/* UNENCLOSED FLOWCHART DIAGRAM CANVAS */}
        <div className="py-2 overflow-visible">
          {style === "bezier" && <BezierFlowNetworkDiagram nodes={nodes} color={themeColor} />}
          {style === "concentric" && <OrbitalConcentricSpheresDiagram nodes={nodes} color={themeColor} slug={slug} />}
          {style === "sacred" && <SacredGeometryDiagram nodes={nodes} color={themeColor} />}
          {style === "arc" && <ConcentricArcWaveDiagram nodes={nodes} color={themeColor} />}
          {style === "radar" && <MinimalistRadarScopeDiagram nodes={nodes} color={themeColor} />}
        </div>

        {/* CREATIVE PREMIUM COMMENTARY BLOCK */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-3xl mx-auto relative group"
        >
          {/* Volumetric Glowing Backdrop Aura */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[#F59E9E]/20 via-[#FF4D7A]/15 to-[#F59E9E]/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Main Glass Container */}
          <div className="relative rounded-[2.2rem] bg-gradient-to-br from-white/90 via-white/75 to-[#FFF5F7]/90 dark:from-zinc-950/90 dark:via-zinc-950/75 dark:to-[#090608]/90 backdrop-blur-2xl border border-[#F59E9E]/30 dark:border-white/15 p-7 sm:p-9 shadow-[0_20px_50px_rgba(245,158,158,0.12)] overflow-hidden">
            
            {/* Subtle Background Geometry Accent */}
            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full border border-[#F59E9E]/10 pointer-events-none" />
            <div className="absolute right-10 bottom-4 text-7xl font-serif text-[#F59E9E]/10 select-none pointer-events-none">
              ”
            </div>

            {/* Clean Professional Architectural Tag */}
            <div className="flex items-center justify-between mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E9E]" />
                <span className="text-[10px] font-semibold text-black/70 dark:text-white/70 uppercase tracking-widest font-inter">
                  Core Logic & Architecture
                </span>
              </div>
            </div>

            {/* Expressive Quote Text */}
            <p className="text-base sm:text-lg text-[#1a0a0a] dark:text-zinc-100 font-inter leading-relaxed italic font-medium relative z-10 text-justify">
              "{explanationParagraph}"
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* =========================================================================
   STYLE 5: BEZIER FLOW NETWORK DIAGRAM (Responsive SVG + Adaptive Cards)
   ========================================================================= */
function BezierFlowNetworkDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  const nodePositions = [125, 375, 625, 875]

  return (
    <div className="relative py-4 w-full overflow-hidden">
      {/* Desktop View (lg screens 1024px+) */}
      <div className="hidden lg:block min-w-[800px] max-w-[1000px] mx-auto relative flex flex-col items-center">
        <div className="w-full relative h-[250px]">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 250" fill="none">
            <path 
              d="M 125 90 C 200 20, 300 20, 375 90 C 450 160, 550 160, 625 90 C 700 20, 800 20, 875 90" 
              stroke="#1a0a0a" 
              strokeWidth="2.5" 
              strokeDasharray="6 4" 
              strokeOpacity="0.3" 
              className="dark:stroke-white/40"
              fill="none" 
            />
            
            <path 
              d="M 125 90 C 200 160, 300 160, 375 90 C 450 20, 550 20, 625 90 C 700 160, 800 160, 875 90" 
              stroke="#1a0a0a" 
              strokeWidth="2.5" 
              strokeDasharray="6 4" 
              strokeOpacity="0.3" 
              className="dark:stroke-white/40"
              fill="none" 
            />

            <line x1="125" y1="90" x2="875" y2="90" stroke={color} strokeWidth="3.5" strokeLinecap="round" />

            <circle cx="125" cy="90" r="5" fill={color} />
            <circle cx="875" cy="90" r="5" fill={color} />

            <motion.circle 
              r="6" 
              fill="#1a0a0a"
              className="dark:fill-white shadow-md"
              animate={{ cx: [125, 375, 625, 875], cy: [90, 90, 90, 90] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />

            {nodePositions.map((x, i) => (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy="90" 
                  r="26" 
                  className="fill-[#1a0a0a] dark:fill-white shadow-xl"
                />

                <text 
                  x={x} 
                  y="95" 
                  textAnchor="middle" 
                  className="fill-white dark:fill-[#1a0a0a] font-mono font-black text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  0{i + 1}
                </text>
              </g>
            ))}
          </svg>

          <div className="absolute top-[135px] left-0 right-0 grid grid-cols-4 justify-items-center px-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-lg w-[190px] text-center hover:scale-105 transition-transform"
              >
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                  {node.label}
                </h5>
                <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile & Tablet Responsive View (< 1024px) */}
      <div className="block lg:hidden w-full space-y-3 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-md flex items-center gap-3.5"
            >
              <span className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-[11px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 3: ORBITAL CONCENTRIC SPHERES DIAGRAM (Responsive Spheres)
   ========================================================================= */
function OrbitalConcentricSpheresDiagram({ nodes, color, slug }: { nodes: FlowchartNode[]; color: string; slug?: string }) {
  const IconComponent = slug === "pippofy" ? Disc : Cpu

  return (
    <div className="relative py-4 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 overflow-hidden w-full">
      <div className="relative w-[260px] sm:w-[320px] md:w-[360px] h-[260px] sm:h-[320px] md:h-[360px] shrink-0 flex items-center justify-center mx-auto">
        {[260, 200, 140, 80].map((size, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="absolute rounded-full border-2 border-dashed pointer-events-none"
            style={{ 
              width: `${size}px`, 
              height: `${size}px`, 
              borderColor: idx === 0 ? color : "rgba(26, 10, 10, 0.2)" 
            }}
          />
        ))}

        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex flex-col items-center justify-center shadow-2xl z-10">
          <IconComponent size={18} className="text-[#F59E9E]" />
          <span className="text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-widest mt-0.5">CORE</span>
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full shadow-lg" style={{ backgroundColor: color, transform: "translate(100px, 0)" }} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#1a0a0a] dark:bg-white shadow-md" style={{ transform: "translate(-70px, 0)" }} />
        </motion.div>
      </div>

      <div className="flex-1 space-y-3 sm:space-y-3.5 w-full">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-3.5 sm:p-4 bg-white dark:bg-zinc-950 rounded-2xl border-2 border-black/10 dark:border-white/15 flex items-center justify-between gap-3 sm:gap-5 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-xs sm:text-sm font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-[10px] sm:text-xs text-[#4a5568] dark:text-zinc-400 font-inter">
                  {node.subtext}
                </p>
              </div>
            </div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: color }} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 1: SACRED GEOMETRY DIAGRAM (Vidya)
   ========================================================================= */
function SacredGeometryDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  const circleCenters = [125, 375, 625, 875]

  return (
    <div className="relative py-4 w-full overflow-hidden">
      {/* Desktop View (lg screens 1024px+) */}
      <div className="hidden lg:block min-w-[800px] max-w-[1000px] mx-auto relative flex flex-col items-center">
        <div className="w-full relative h-[280px]">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 280" fill="none">
            {circleCenters.map((x, i) => (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy="130" 
                  r="125" 
                  stroke={color} 
                  strokeWidth="2.2" 
                  strokeDasharray={i % 2 === 0 ? "none" : "6 4"}
                  strokeOpacity={0.45}
                  fill="none" 
                />
                
                <circle 
                  cx={x} 
                  cy="130" 
                  r="75" 
                  stroke="#1a0a0a" 
                  strokeWidth="1.2" 
                  strokeOpacity="0.25"
                  className="dark:stroke-white/30"
                  fill="none" 
                />
              </g>
            ))}

            <line x1="125" y1="130" x2="875" y2="130" stroke={color} strokeWidth="3" strokeDasharray="4 3" />

            <motion.circle 
              r="6" 
              fill={color}
              className="shadow-lg"
              animate={{ cx: [125, 375, 625, 875], cy: [130, 130, 130, 130] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {circleCenters.map((x, i) => (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy="130" 
                  r="26" 
                  className="fill-[#1a0a0a] dark:fill-white shadow-2xl"
                />

                <text 
                  x={x} 
                  y="135" 
                  textAnchor="middle" 
                  className="fill-white dark:fill-[#1a0a0a] font-mono font-black text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  0{i + 1}
                </text>
              </g>
            ))}
          </svg>

          <div className="absolute top-[175px] left-0 right-0 grid grid-cols-4 justify-items-center px-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-xl w-[190px] text-center hover:scale-105 transition-transform"
              >
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                  {node.label}
                </h5>
                <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile & Tablet View (< 1024px) */}
      <div className="block lg:hidden w-full space-y-3 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-md flex items-center gap-3.5"
            >
              <span className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-[11px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 4: PURE VECTOR ACOUSTIC SOUNDWAVE FLOWCHART (VoXa)
   ========================================================================= */
function ConcentricArcWaveDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  const nodePositions = [125, 375, 625, 875]

  return (
    <div className="relative py-4 w-full overflow-hidden">
      {/* Desktop View (lg screens 1024px+) */}
      <div className="hidden lg:block min-w-[800px] max-w-[1000px] mx-auto relative flex flex-col items-center">
        <div className="w-full relative h-[230px]">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 230" fill="none">
            <path 
              d="M 125 100 Q 250 25, 375 100 T 625 100 T 875 100" 
              stroke={color} 
              strokeWidth="3.5" 
              fill="none" 
            />

            <path 
              d="M 125 100 Q 250 175, 375 100 T 625 100 T 875 100" 
              stroke={color} 
              strokeWidth="2" 
              strokeDasharray="6 4"
              strokeOpacity="0.45"
              fill="none" 
            />

            <line x1="125" y1="100" x2="875" y2="100" stroke="#1a0a0a" strokeWidth="2" strokeDasharray="3 3" strokeOpacity="0.3" className="dark:stroke-white/30" />

            {nodePositions.map((x, i) => (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy="100" 
                  r="45" 
                  stroke={color} 
                  strokeWidth="1.8" 
                  strokeDasharray="4 3"
                  strokeOpacity="0.45"
                  fill="none" 
                />
                
                <circle 
                  cx={x} 
                  cy="100" 
                  r="62" 
                  stroke="#1a0a0a" 
                  strokeWidth="1" 
                  strokeDasharray="2 4"
                  strokeOpacity="0.2"
                  className="dark:stroke-white/20"
                  fill="none" 
                />
              </g>
            ))}

            <motion.circle 
              r="6.5" 
              fill="#1a0a0a"
              className="dark:fill-white shadow-lg"
              animate={{ cx: [125, 375, 625, 875], cy: [100, 100, 100, 100] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />

            {nodePositions.map((x, i) => (
              <g key={i}>
                <circle 
                  cx={x} 
                  cy="100" 
                  r="28" 
                  className="fill-[#1a0a0a] dark:fill-white shadow-2xl"
                  stroke={color}
                  strokeWidth="2.5"
                />

                <text 
                  x={x} 
                  y="105" 
                  textAnchor="middle" 
                  className="fill-white dark:fill-[#1a0a0a] font-mono font-black text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  0{i + 1}
                </text>
              </g>
            ))}
          </svg>

          <div className="absolute top-[150px] left-0 right-0 grid grid-cols-4 justify-items-center px-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-[200px] text-center flex flex-col items-center"
              >
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                  {node.label}
                </h5>

                <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Mobile & Tablet View (< 1024px) */}
      <div className="block lg:hidden w-full space-y-3 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-md flex items-center gap-3.5"
            >
              <span className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-[11px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 2: MINIMALIST TARGET RADAR SCOPE DIAGRAM (Wassup - Overflow Fix)
   ========================================================================= */
function MinimalistRadarScopeDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-6 flex flex-col items-center text-center overflow-hidden w-full">
      {/* Desktop Protruding Scope View (lg screens 1024px+) */}
      <div className="hidden lg:flex relative w-[460px] h-[460px] rounded-full border-2 border-black/15 dark:border-white/20 items-center justify-center p-8 my-6">
        
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 bg-black/15 dark:bg-white/15" />
            <div className="h-full w-0.5 bg-black/15 dark:bg-white/15 absolute" />
          </div>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent to-[#F59E9E] absolute right-0 top-1/2 -translate-y-1/2 origin-left" />
          </motion.div>
        </div>

        <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-black/20 dark:border-white/20 flex items-center justify-center pointer-events-none">
          <div className="w-1/2 h-1/2 rounded-full border-2 border-black/30 dark:border-white/30 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-[#1a0a0a] text-white">
              <Radio size={18} className="text-[#F59E9E] animate-pulse" />
            </div>
          </div>
        </div>

        {nodes.map((node, i) => {
          const positions = [
            "top-0 -translate-y-1/2 left-1/2 -translate-x-1/2",
            "right-0 translate-x-1/2 top-1/2 -translate-y-1/2",
            "bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2",
            "left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
          ]

          return (
            <motion.div
              key={node.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`absolute ${positions[i % 4]} p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-2xl w-[190px] text-center z-30 hover:scale-105 transition-transform`}
            >
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#1a0a0a] dark:text-white block mb-1">
                0{i + 1} {node.label}
              </span>
              <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                {node.subtext}
              </p>
            </motion.div>
          )
        })}
      </div>

      {/* Mobile & Tablet Responsive View (< 1024px - Zero Horizontal Overflow!) */}
      <div className="block lg:hidden w-full px-2 space-y-6">
        {/* Animated Radar Center Core */}
        <div className="relative w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] rounded-full border-2 border-black/15 dark:border-white/20 flex items-center justify-center mx-auto my-2 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 bg-black/15 dark:bg-white/15" />
            <div className="h-full w-0.5 bg-black/15 dark:bg-white/15 absolute" />
          </div>

          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-1/2 h-0.5 bg-gradient-to-r from-transparent to-[#F59E9E] absolute right-0 top-1/2 -translate-y-1/2 origin-left" />
          </motion.div>

          <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-black/20 dark:border-white/20 flex items-center justify-center pointer-events-none">
            <div className="w-1/2 h-1/2 rounded-full border-2 border-black/30 dark:border-white/30 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center bg-[#1a0a0a] text-white">
                <Radio size={18} className="text-[#F59E9E] animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Radar Target Cards in Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto w-full">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-md flex items-center gap-3.5 text-left"
            >
              <span className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-[11px] text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                  {node.subtext}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
