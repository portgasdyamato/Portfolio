"use client"

import { motion } from "framer-motion"
import { GitBranch, Sparkles, CheckCircle2 } from "lucide-react"

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

        {/* UNENCLOSED FLOWCHART DIAGRAM CANVAS (NO OUTER CONTAINER CARD) */}
        <div className="py-4">
          {style === "bezier" && <BezierFlowNetworkDiagram nodes={nodes} color={themeColor} />}
          {style === "concentric" && <OrbitalConcentricSpheresDiagram nodes={nodes} color={themeColor} />}
          {style === "sacred" && <SacredGeometryDiagram nodes={nodes} color={themeColor} />}
          {style === "arc" && <ConcentricArcWaveDiagram nodes={nodes} color={themeColor} />}
          {style === "radar" && <MinimalistRadarScopeDiagram nodes={nodes} color={themeColor} />}
        </div>

        {/* SHORT EXPLANATORY PARAGRAPH BELOW FLOWCHART */}
        <div className="mt-16 max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] text-[10px] font-mono font-bold uppercase tracking-widest shadow-sm">
            <Sparkles size={12} className="text-[#F59E9E]" /> Architecture Insight
          </div>
          
          <p className="text-base sm:text-lg text-[#2d3748] dark:text-zinc-200 font-inter leading-relaxed italic font-medium px-4">
            "{explanationParagraph}"
          </p>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 size={16} />
            <span>Pipeline Verified • Geometric Precision Architecture</span>
          </div>
        </div>

      </div>
    </section>
  )
}

/* =========================================================================
   STYLE 5: BEZIER FLOW NETWORK DIAGRAM (Reference Image 5)
   Mathematically perfect alignment: Node circles sit EXACTLY centered on line
   ========================================================================= */
function BezierFlowNetworkDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  // 4 horizontal node X coordinates in percentage: 12.5%, 37.5%, 62.5%, 87.5%
  const positions = ["12.5%", "37.5%", "62.5%", "87.5%"]

  return (
    <div className="relative py-12 overflow-x-auto">
      <div className="min-w-[850px] relative h-[320px] flex items-center">
        
        {/* SVG Bezier Lines Canvas - FULLY UNCOVERED & PERFECTLY CENTERED AT Y=90 */}
        <svg className="w-full h-full absolute inset-0 overflow-visible" viewBox="0 0 800 320" fill="none">
          {/* Top & Bottom Bezier S-Curves Connecting Nodes at (100,90), (300,90), (500,90), (700,90) */}
          <path d="M 100 90 C 200 10, 200 10, 300 90" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.35" fill="none" className="dark:stroke-white/40" />
          <path d="M 300 90 C 400 170, 400 170, 500 90" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.35" fill="none" className="dark:stroke-white/40" />
          <path d="M 500 90 C 600 10, 600 10, 700 90" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.35" fill="none" className="dark:stroke-white/40" />

          <path d="M 100 90 C 200 170, 200 170, 300 90" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.35" fill="none" className="dark:stroke-white/40" />
          <path d="M 300 90 C 400 10, 400 10, 500 90" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.35" fill="none" className="dark:stroke-white/40" />
          <path d="M 500 90 C 600 170, 600 170, 700 90" stroke="#1a0a0a" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.35" fill="none" className="dark:stroke-white/40" />

          {/* Main Straight Horizontal Flow Line passing EXACTLY through center Y=90 */}
          <line x1="100" y1="90" x2="700" y2="90" stroke={color} strokeWidth="4 strokeLinecap='round'" />

          {/* Terminal Cap Dots at Start (100,90) and End (700,90) */}
          <circle cx="100" cy="90" r="6" fill={color} />
          <circle cx="700" cy="90" r="6" fill={color} />

          {/* Animated Pulse Traveling along Main Axis Line */}
          <motion.circle 
            r="7" 
            fill="#1a0a0a"
            className="dark:fill-white shadow-lg"
            animate={{ cx: [100, 300, 500, 700], cy: [90, 90, 90, 90] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* HTML Node Circles Centered EXACTLY on Y=90 & Text Cards Positioning Below */}
        <div className="w-full absolute top-[90px] left-0 right-0 -translate-y-1/2">
          {nodes.map((node, i) => (
            <div 
              key={node.id} 
              className="absolute top-0 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center text-center"
              style={{ left: positions[i] }}
            >
              {/* Node Circle Badge - CENTERED DIRECTLY ON THE PATH AT Y=90 */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
                className="w-14 h-14 rounded-full border-4 shadow-2xl bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-sm transition-transform hover:scale-110 z-20"
                style={{ borderColor: color }}
              >
                0{i + 1}
              </motion.div>

              {/* Text Card Positioned Below Node Circle */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.1 }}
                className="mt-6 p-4 bg-white dark:bg-zinc-950 border-2 border-black/10 dark:border-white/15 rounded-2xl shadow-xl w-[170px] z-10"
              >
                <h5 className="text-xs font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                  {node.label}
                </h5>
                <p className="text-[10px] text-[#4a5568] dark:text-zinc-400 font-inter leading-tight">
                  {node.subtext}
                </p>
              </motion.div>
            </div>
          ))}
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
