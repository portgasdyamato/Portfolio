"use client"

import { motion } from "framer-motion"
import { GitBranch, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"

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

// Portfolio Theme Color Token (Strictly Rose Pink / Dark Charcoal - NO PURPLE)
const PORTFOLIO_PINK = "#F59E9E"
const PORTFOLIO_DARK = "#1a0a0a"

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
      { id: "02", label: "Jargon Reframer", subtext: "Strips complex banking terms into plain language", type: "decision" },
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
    title: "Concentric Arc Acoustic Wave",
    subtitle: "Streaming microphone speech to parsed NLP parameters",
    style: "arc",
    nodes: [
      { id: "01", label: "Acoustic Speech Input", subtext: "Streaming microphone audio input", type: "input" },
      { id: "02", label: "NLP Token Parser", subtext: "Validates intent, due dates & project tags", type: "decision" },
      { id: "03", label: "Task Vitals Engine", subtext: "Executes database mutations & health score", type: "engine" },
      { id: "04", label: "Hands-Free Sanctuary", subtext: "Low-latency audio feedback & dashboard", type: "output" }
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

  return (
    <section className="py-24 md:py-36 bg-[#FFF5F7] dark:bg-[#090608] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#1c1417_1.5px,transparent_1.5px)] [background-size:24px_24px] border-y border-pink-500/15 dark:border-white/10 relative overflow-hidden">
      
      {/* Portfolio Volumetric Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-20 blur-[170px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${themeColor}, transparent 70%)` }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.25em] uppercase shadow-md bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] mb-6">
            <GitBranch size={13} className="text-[#F59E9E]" /> Architectural Flow Geometry
          </div>
          
          <h2 className="text-[36px] sm:text-[48px] md:text-[62px] font-bold italic tracking-tight leading-[1.05] text-[#1a0a0a] dark:text-white font-outfit">
            {title.split(" Flow")[0]} <span className="text-[#F59E9E]">Architecture.</span>
          </h2>
          
          <p className="max-w-xl text-[#4a5568] dark:text-zinc-400 mt-4 text-base font-inter leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Outer Glassmorphic Container Card */}
        <div className="p-6 sm:p-10 md:p-14 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border-2 border-black/10 dark:border-white/15 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)]">
          
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b-2 border-black/10 dark:border-white/10 pb-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#F59E9E] animate-pulse shadow-sm" />
              <span className="text-xs font-mono font-black tracking-[0.2em] uppercase text-[#1a0a0a] dark:text-white">
                {title.toUpperCase()}
              </span>
            </div>
            
            <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm">
              <Sparkles size={11} className="text-[#F59E9E]" /> Architectural Geometry
            </span>
          </div>

          {/* RENDER PROMINENT GEOMETRIC DIAGRAM (100% UNCOVERED LINES & NO PURPLE) */}
          <div className="py-6">
            {style === "bezier" && <BezierFlowNetworkDiagram nodes={nodes} color={themeColor} />}
            {style === "concentric" && <OrbitalConcentricSpheresDiagram nodes={nodes} color={themeColor} />}
            {style === "sacred" && <SacredGeometryDiagram nodes={nodes} color={themeColor} />}
            {style === "arc" && <ConcentricArcWaveDiagram nodes={nodes} color={themeColor} />}
            {style === "radar" && <MinimalistRadarScopeDiagram nodes={nodes} color={themeColor} />}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-12 pt-6 border-t-2 border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#1a0a0a] dark:text-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Pipeline Verified • Geometric Precision Architecture</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase opacity-70 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">
              System Boundary // {slug.toUpperCase()}
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

/* =========================================================================
   STYLE 5: BEZIER FLOW NETWORK DIAGRAM (Reference Image 5)
   Crisp, fully-unobscured Bezier curves with compact node badges & text below
   ========================================================================= */
function BezierFlowNetworkDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-8 overflow-x-auto">
      <div className="min-w-[800px] flex flex-col items-center">
        
        {/* SVG Bezier Lines Canvas - FULLY VISIBLE & CRISP */}
        <div className="relative w-full h-[260px] mb-6">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 240" fill="none">
            {/* Primary High-Contrast Bezier Curves */}
            <path d="M 100 120 C 200 30, 300 30, 400 120" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.3" fill="none" className="dark:stroke-white/40" />
            <path d="M 100 120 C 200 210, 300 210, 400 120" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.3" fill="none" className="dark:stroke-white/40" />
            
            <path d="M 400 120 C 500 30, 600 30, 700 120" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.3" fill="none" className="dark:stroke-white/40" />
            <path d="M 400 120 C 500 210, 600 210, 700 120" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.3" fill="none" className="dark:stroke-white/40" />

            {/* Glowing Main Center Flow Line */}
            <line x1="80" y1="120" x2="720" y2="120" stroke={color} strokeWidth="3" />

            {/* Animated Glowing Pulse Dot travelling along the flow path */}
            <motion.circle 
              r="6" 
              fill={color}
              className="shadow-lg"
              animate={{ cx: [80, 400, 720], cy: [120, 120, 120] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Node Circles & Text Labels Positioned Cleanly along the Bezier Axis */}
          <div className="absolute inset-0 grid grid-cols-4 items-center justify-items-center px-6">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center max-w-[170px] z-10"
              >
                {/* Node Circle Badge - Compact so it never masks the lines */}
                <div 
                  className="w-14 h-14 rounded-full border-3 flex items-center justify-center font-mono font-black text-sm mb-4 shadow-xl bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] transition-transform hover:scale-110"
                  style={{ borderColor: color }}
                >
                  0{i + 1}
                </div>

                {/* Text Label Below Circle */}
                <div className="p-3 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-md w-full">
                  <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                    {node.label}
                  </h5>
                  <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-tight">
                    {node.subtext}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 3: ORBITAL CONCENTRIC SPHERES DIAGRAM (Reference Image 3)
   ========================================================================= */
function OrbitalConcentricSpheresDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Concentric Circle Orbital Graphic */}
      <div className="relative w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] shrink-0 flex items-center justify-center">
        {[360, 280, 200, 120].map((size, idx) => (
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
              borderColor: idx === 0 ? color : "rgba(26, 10, 10, 0.25)" 
            }}
          />
        ))}

        <div className="w-16 h-16 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shadow-2xl z-10">
          CORE
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-5 h-5 rounded-full shadow-xl" style={{ backgroundColor: color, transform: "translate(140px, 0)" }} />
        </motion.div>
      </div>

      {/* Nodes List Stacked Next to Orbital Graphic */}
      <div className="flex-1 space-y-4 w-full">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-5 bg-white dark:bg-zinc-950 rounded-[1.75rem] border-2 border-black/10 dark:border-white/15 flex items-center justify-between gap-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-base font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-xs text-[#4a5568] dark:text-zinc-400 font-inter">
                  {node.subtext}
                </p>
              </div>
            </div>
            <div className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
          </motion.div>
        ))}
      </div>

    </div>
  )
}

/* =========================================================================
   STYLE 1: SACRED GEOMETRY HOURGLASS DIAGRAM (Reference Image 1)
   ========================================================================= */
function SacredGeometryDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-12 flex flex-col items-center">
      <div className="relative w-full max-w-xl flex flex-col items-center">
        
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-[#1a0a0a]/20 dark:bg-white/20 z-0" />

        <div className="space-y-6 relative z-10 w-full">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mx-auto w-full max-w-md p-6 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center"
            >
              <div 
                className="absolute -inset-2 rounded-[3rem] border-2 border-dashed pointer-events-none opacity-50"
                style={{ borderColor: color }}
              />

              <span className="text-[10px] font-mono font-black tracking-widest px-3.5 py-1 rounded-full uppercase bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] mb-2 shadow-sm">
                STAGE 0{i + 1}
              </span>
              <h5 className="text-lg font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                {node.label}
              </h5>
              <p className="text-xs text-[#4a5568] dark:text-zinc-400 font-inter">
                {node.subtext}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 4: CONCENTRIC ARC WAVE DIAGRAM (Reference Image 4)
   ========================================================================= */
function ConcentricArcWaveDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-8">
      <div className="relative max-w-2xl mx-auto pl-8 sm:pl-16 border-l-4 border-[#1a0a0a]/20 dark:border-white/20 space-y-10">
        
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-6 bg-white dark:bg-zinc-950 rounded-[2rem] border-2 border-black/10 dark:border-white/15 shadow-xl"
          >
            <div 
              className="absolute -left-[43px] sm:-left-[75px] top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border-4 border-white dark:border-zinc-900 shadow-md flex items-center justify-center text-white"
              style={{ backgroundColor: color }}
            />

            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono font-black tracking-widest px-3 py-1 rounded-full uppercase bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm">
                0{i + 1} // STAGE
              </span>
            </div>

            <h5 className="text-lg font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
              {node.label}
            </h5>
            <p className="text-xs text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
              {node.subtext}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  )
}

/* =========================================================================
   STYLE 2: MINIMALIST TARGET RADAR SCOPE DIAGRAM (Reference Image 2)
   ========================================================================= */
function MinimalistRadarScopeDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-8 flex flex-col items-center text-center">
      <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border-2 border-black/15 dark:border-white/20 flex items-center justify-center p-8 shadow-inner my-6">
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-black/15 dark:bg-white/15" />
          <div className="h-full w-0.5 bg-black/15 dark:bg-white/15 absolute" />
        </div>

        <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-black/20 dark:border-white/20 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full border-2 border-black/30 dark:border-white/30 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full shadow-lg" style={{ backgroundColor: color }} />
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
              className={`absolute ${positions[i % 4]} p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-xl max-w-[170px] text-center z-20`}
            >
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#1a0a0a] dark:text-white block mb-0.5">
                0{i + 1} {node.label}
              </span>
              <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-tight">
                {node.subtext}
              </p>
            </motion.div>
          )
        })}

      </div>
    </div>
  )
}
