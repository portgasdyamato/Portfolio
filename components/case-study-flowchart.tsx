"use client"

import { motion } from "framer-motion"
import { GitBranch, Sparkles, Terminal } from "lucide-react"

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
  const explanationParagraph = EXPLANATION_PARAGRAPHS[slug] || "This system architecture decouples complex data inputs into clean, type-safe decision gates and high-performance UI states."

  return (
    <section className="py-16 sm:py-20 bg-[#FFF5F7] dark:bg-[#090608] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#1c1417_1.5px,transparent_1.5px)] [background-size:24px_24px] border-y border-pink-500/15 dark:border-white/10 relative overflow-hidden">
      
      {/* Volumetric Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-20 blur-[170px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${themeColor}, transparent 70%)` }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          
          {/* EXACT SIGNATURE PORTFOLIO SECTION TAG (MATCHING ALL OTHER SECTIONS) */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F59E9E]/10 rounded-full border border-[#F59E9E]/20 mb-5 shadow-sm">
            <GitBranch size={12} className="text-[#F59E9E]" />
            <span className="text-[10px] font-black text-[#F59E9E] uppercase tracking-[0.3em]">System Architecture</span>
          </div>
          
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold italic tracking-tight leading-[1.05] text-[#1a0a0a] dark:text-white font-outfit">
            {title.split(" Flow")[0]} <span className="text-[#F59E9E]">Architecture.</span>
          </h2>
          
          <p className="max-w-xl text-[#4a5568] dark:text-zinc-400 mt-3 text-sm md:text-base font-inter leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* UNENCLOSED FLOWCHART DIAGRAM CANVAS */}
        <div className="py-2">
          {style === "bezier" && <BezierFlowNetworkDiagram nodes={nodes} color={themeColor} />}
          {style === "concentric" && <OrbitalConcentricSpheresDiagram nodes={nodes} color={themeColor} />}
          {style === "sacred" && <SacredGeometryDiagram nodes={nodes} color={themeColor} />}
          {style === "arc" && <ConcentricArcWaveDiagram nodes={nodes} color={themeColor} />}
          {style === "radar" && <MinimalistRadarScopeDiagram nodes={nodes} color={themeColor} />}
        </div>

        {/* CREATIVE ARCHITECTURAL COMMENTARY CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-3xl mx-auto relative rounded-[2rem] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-[#F59E9E]/20 dark:border-white/10 p-6 sm:p-8 shadow-[0_15px_40px_rgba(245,158,158,0.08)] overflow-hidden"
        >
          {/* Subtle Decorative Watermark Quote Mark */}
          <span className="absolute right-6 top-2 text-7xl font-serif text-[#F59E9E]/10 select-none pointer-events-none">
            “
          </span>

          {/* Header Metadata Tag inside Container */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Terminal size={12} className="text-[#F59E9E]" />
              <span className="text-[9px] font-mono font-bold text-[#F59E9E] uppercase tracking-widest">
                ARCHITECTURAL NOTE // {slug.toUpperCase()}
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E9E] animate-pulse" />
              <span className="text-[9px] font-mono text-black/40 dark:text-white/40 uppercase tracking-widest">
                LOGIC BOUNDARY
              </span>
            </div>
          </div>

          {/* Explanation Paragraph Text */}
          <p className="text-sm sm:text-base text-[#2d3748] dark:text-zinc-200 font-inter leading-relaxed italic font-medium relative z-10">
            "{explanationParagraph}"
          </p>

          {/* Footer Metadata */}
          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[10px] font-mono text-black/40 dark:text-white/40">
            <span>PIPELINE DECOUPLING ENGINE</span>
            <span>SYSTEM VERIFIED</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

/* =========================================================================
   STYLE 5: BEZIER FLOW NETWORK DIAGRAM (Pure Single SVG Canvas)
   - SVG renders both the paths AND the node circles at exact coordinates
   - (125,80), (375,80), (625,80), (875,80)
   - ZERO path clipping, ZERO dislocated lines, ZERO pink borders on node circles!
   ========================================================================= */
function BezierFlowNetworkDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  const nodePositions = [125, 375, 625, 875] // X coordinates in 1000px viewBox

  return (
    <div className="relative py-4 overflow-x-auto">
      <div className="min-w-[800px] max-w-[1000px] mx-auto relative flex flex-col items-center">
        
        {/* PURE INTEGRATED SVG CANVAS (Path + Bezier Waves + Node Circles) */}
        <div className="w-full relative h-[240px]">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 240" fill="none">
            
            {/* Top & Bottom Continuous Bezier S-Curves Passing EXACTLY through Node Centers (125,80), (375,80), (625,80), (875,80) */}
            <path 
              d="M 125 80 C 200 10, 300 10, 375 80 C 450 150, 550 150, 625 80 C 700 10, 800 10, 875 80" 
              stroke="#1a0a0a" 
              strokeWidth="2.5" 
              strokeDasharray="6 4" 
              strokeOpacity="0.3" 
              className="dark:stroke-white/40"
              fill="none" 
            />
            
            <path 
              d="M 125 80 C 200 150, 300 150, 375 80 C 450 10, 550 10, 625 80 C 700 150, 800 150, 875 80" 
              stroke="#1a0a0a" 
              strokeWidth="2.5" 
              strokeDasharray="6 4" 
              strokeOpacity="0.3" 
              className="dark:stroke-white/40"
              fill="none" 
            />

            {/* Continuous Pink Center Axis Flow Line connecting Node 1 (125) to Node 4 (875) */}
            <line x1="125" y1="80" x2="875" y2="80" stroke={color} strokeWidth="3.5" strokeLinecap="round" />

            {/* Terminal Cap Dots */}
            <circle cx="125" cy="80" r="5" fill={color} />
            <circle cx="875" cy="80" r="5" fill={color} />

            {/* Animated Flow Dot traveling smoothly along the line */}
            <motion.circle 
              r="6" 
              fill="#1a0a0a"
              className="dark:fill-white shadow-md"
              animate={{ cx: [125, 375, 625, 875], cy: [80, 80, 80, 80] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />

            {/* INTEGRATED SVG NODE CIRCLES (Clean Solid Dark Circles, NO Pink Borders) */}
            {nodePositions.map((x, i) => (
              <g key={i}>
                {/* Node Circle Background */}
                <circle 
                  cx={x} 
                  cy="80" 
                  r="26" 
                  className="fill-[#1a0a0a] dark:fill-white shadow-xl"
                />

                {/* Node Number Text (01, 02, 03, 04) */}
                <text 
                  x={x} 
                  y="85" 
                  textAnchor="middle" 
                  className="fill-white dark:fill-[#1a0a0a] font-mono font-black text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  0{i + 1}
                </text>
              </g>
            ))}
          </svg>

          {/* HTML Text Cards Positioned Below SVG Nodes */}
          <div className="absolute top-[125px] left-0 right-0 grid grid-cols-4 justify-items-center px-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-lg w-[190px] text-center"
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
    </div>
  )
}

/* =========================================================================
   STYLE 3: ORBITAL CONCENTRIC SPHERES DIAGRAM (Reference Image 3)
   ========================================================================= */
function OrbitalConcentricSpheresDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-6 flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="relative w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] shrink-0 flex items-center justify-center">
        {[340, 260, 180, 100].map((size, idx) => (
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

        <div className="w-14 h-14 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shadow-xl z-10">
          CORE
        </div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: color, transform: "translate(130px, 0)" }} />
        </motion.div>
      </div>

      <div className="flex-1 space-y-3.5 w-full">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white dark:bg-zinc-950 rounded-2xl border-2 border-black/10 dark:border-white/15 flex items-center justify-between gap-5 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <span className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-md">
                0{i + 1}
              </span>
              <div>
                <h5 className="text-sm font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                  {node.label}
                </h5>
                <p className="text-xs text-[#4a5568] dark:text-zinc-400 font-inter">
                  {node.subtext}
                </p>
              </div>
            </div>
            <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
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
    <div className="relative py-8 flex flex-col items-center">
      <div className="relative w-full max-w-xl flex flex-col items-center">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-[#1a0a0a]/15 dark:bg-white/15 z-0" />

        <div className="space-y-5 relative z-10 w-full">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mx-auto w-full max-w-md p-5 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-lg text-center flex flex-col items-center"
            >
              <div 
                className="absolute -inset-2 rounded-[2.5rem] border-2 border-dashed pointer-events-none opacity-40"
                style={{ borderColor: color }}
              />

              <span className="text-[10px] font-mono font-black tracking-widest px-3 py-0.5 rounded-full uppercase bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] mb-2 shadow-sm">
                STAGE 0{i + 1}
              </span>
              <h5 className="text-base font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
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
    <div className="relative py-6">
      <div className="relative max-w-2xl mx-auto pl-8 sm:pl-16 border-l-4 border-[#1a0a0a]/15 dark:border-white/15 space-y-8">
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-5 bg-white dark:bg-zinc-950 rounded-2xl border-2 border-black/10 dark:border-white/15 shadow-lg"
          >
            <div 
              className="absolute -left-[43px] sm:-left-[75px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-zinc-900 shadow-md flex items-center justify-center text-white"
              style={{ backgroundColor: color }}
            />

            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-[10px] font-mono font-black tracking-widest px-3 py-0.5 rounded-full uppercase bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm">
                0{i + 1} // STAGE
              </span>
            </div>

            <h5 className="text-base font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
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
    <div className="relative py-6 flex flex-col items-center text-center">
      <div className="relative w-[340px] sm:w-[400px] h-[340px] sm:h-[400px] rounded-full border-2 border-black/15 dark:border-white/20 flex items-center justify-center p-8 shadow-inner my-4">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-black/15 dark:bg-white/15" />
          <div className="h-full w-0.5 bg-black/15 dark:bg-white/15 absolute" />
        </div>

        <div className="w-3/4 h-3/4 rounded-full border-2 border-dashed border-black/20 dark:border-white/20 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full border-2 border-black/30 dark:border-white/30 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full shadow-lg" style={{ backgroundColor: color }} />
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
              className={`absolute ${positions[i % 4]} p-3.5 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-xl max-w-[160px] text-center z-20`}
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
