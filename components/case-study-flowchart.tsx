"use client"

import { motion } from "framer-motion"
import { 
  GitBranch, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Shield, 
  Mic, 
  Eye, 
  Activity, 
  Disc, 
  Layout, 
  Code2,
  Lock,
  Layers,
  Cpu,
  Zap,
  Sliders
} from "lucide-react"

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

// Fallback nodes per project slug for maximum personalization
const PROJECT_FLOWCHARTS: Record<string, { title: string; subtitle: string; nodes: FlowchartNode[] }> = {
  "yonder-wonder": {
    title: "Synthesis of Presence Flowchart",
    subtitle: "Dual identity preservation & lighting synthesis pipeline",
    nodes: [
      { id: "01", label: "Media Ingestion", subtext: "User uploads 2 separate portraits + context prompt", type: "input" },
      { id: "02", label: "Identity Lock Guard", subtext: "Decision filter: Locks entity boundaries to prevent hybrid morphing", type: "decision" },
      { id: "03", label: "SD & GAN Engine", subtext: "Context aware background & photorealistic lighting synthesis", type: "engine" },
      { id: "04", label: "Shared Memory Card", subtext: "High-fidelity synthesized present moment output", type: "output" }
    ]
  },
  "pocket-fund": {
    title: "Combat Budgeting Engine Flowchart",
    subtitle: "Financial anxiety reduction & gamified transaction pipeline",
    nodes: [
      { id: "01", label: "Transaction Input", subtext: "Manual entry or OCR receipt image scan", type: "input" },
      { id: "02", label: "Jargon Reframer", subtext: "Decision filter: Strips complex banking terms into plain language", type: "decision" },
      { id: "03", label: "HP Health Engine", subtext: "Categorizes Need / Want / Ick & updates financial vitals", type: "engine" },
      { id: "04", label: "Financial Sanctuary HUD", subtext: "Gamified dashboard with streak protection & rewards", type: "output" }
    ]
  },
  "vidya": {
    title: "Multimodal Transformation Flowchart",
    subtitle: "Inclusive learning pathway with accessibility guards",
    nodes: [
      { id: "01", label: "Multimodal Source", subtext: "PDF documents, audio, video & web text sources", type: "input" },
      { id: "02", label: "Accessibility Guard", subtext: "Decision filter: Checks font scale, contrast & screen reader rules", type: "decision" },
      { id: "03", label: "Gemini AI Core", subtext: "Generates bite-sized summaries & adaptive self-check quizzes", type: "engine" },
      { id: "04", label: "Inclusive Learning Hub", subtext: "Accessible interactive study workspace with dyslexia toggle", type: "output" }
    ]
  },
  "voxa": {
    title: "Voice Task Processing Flowchart",
    subtitle: "Hands-free speech to parsed NLP system state",
    nodes: [
      { id: "01", label: "Acoustic Speech Input", subtext: "Web Speech API streaming microphone audio input", type: "input" },
      { id: "02", label: "NLP Token Parser", subtext: "Decision filter: Validates intent, due date, priority & project tags", type: "decision" },
      { id: "03", label: "Task Vitals Engine", subtext: "Executes type-safe database mutations & calculates health score", type: "engine" },
      { id: "04", label: "Hands-Free Sanctuary", subtext: "Low-latency audio response + glassmorphic dashboard state", type: "output" }
    ]
  },
  "wassup": {
    title: "Spatial Multi-Column Flowchart",
    subtitle: "Contextual sentiment sensor to dynamic workspace utility",
    nodes: [
      { id: "01", label: "Spatial Chat Stream", subtext: "Real-time active messaging thread & media ingestion", type: "input" },
      { id: "02", label: "Sentiment Sensor", subtext: "Decision filter: Detects planning intent (trips, events, deadlines)", type: "decision" },
      { id: "03", label: "Utility Canvas Engine", subtext: "Proactively instantiates side workspace columns", type: "engine" },
      { id: "04", label: "Spatial Utility Grid", subtext: "Collaborative whiteboard, event planner & summary tab", type: "output" }
    ]
  },
  "pippofy": {
    title: "Spinning Vinyl Acoustic Flowchart",
    subtitle: "Analog vinyl rituals to digital atmospheric sanctuary",
    nodes: [
      { id: "01", label: "Vinyl Selection", subtext: "33 RPM vinyl record choice & track loading", type: "input" },
      { id: "02", label: "Crackle Health Filter", subtext: "Decision filter: Measures surface noise & analog warmth levels", type: "decision" },
      { id: "03", label: "AI Historian Core", subtext: "Fetches album liner notes, artist history & cultural context", type: "engine" },
      { id: "04", label: "Vinyl Sanctuary HUD", subtext: "Spinning vinyl player + ambient noise soundscape mixer", type: "output" }
    ]
  },
  "portfolio": {
    title: "Gamified Interaction Flowchart",
    subtitle: "Pixel character state machine & layout triggers",
    nodes: [
      { id: "01", label: "Visitor Scroll Input", subtext: "Page scroll position & cursor coordinates", type: "input" },
      { id: "02", label: "State Controller", subtext: "Decision filter: Determines active section & pixel sprite action", type: "decision" },
      { id: "03", label: "Framer Physics Engine", subtext: "Executes 60fps spring animations & glass morphing", type: "engine" },
      { id: "04", label: "Interactive Portfolio Realm", subtext: "Dynamic micro-interactions & feedback cards", type: "output" }
    ]
  }
}

export default function CaseStudyFlowchart({ slug, color = "#F59E9E", flowchart }: CaseStudyFlowchartProps) {
  const data = flowchart?.nodes?.length 
    ? { title: flowchart.title || "System Architecture Flowchart", subtitle: flowchart.subtitle || "Visual logic pipeline", nodes: flowchart.nodes }
    : PROJECT_FLOWCHARTS[slug] || {
        title: "System Architecture Flowchart",
        subtitle: "Visual node-based architecture displaying system logic",
        nodes: [
          { id: "01", label: "User Input & Context", subtext: "Data & intent ingestion", type: "input" },
          { id: "02", label: "Decision Boundary", subtext: "Validation & safety logic", type: "decision" },
          { id: "03", label: "Processing Core", subtext: "AI model & state mutation", type: "engine" },
          { id: "04", label: "Rendered Interface", subtext: "High-fidelity UI state output", type: "output" }
        ]
      }

  return (
    <section className="py-24 md:py-36 bg-[#FFF5F7] dark:bg-[#0c0709] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#1f1519_1.5px,transparent_1.5px)] [background-size:24px_24px] border-y border-pink-500/10 dark:border-white/10 relative overflow-hidden">
      
      {/* Portfolio Volumetric Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-25 blur-[160px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.25em] uppercase shadow-sm bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] mb-6">
            <GitBranch size={13} style={{ color }} /> System Architecture & Flowchart
          </div>
          
          <h2 className="text-[36px] sm:text-[48px] md:text-[62px] font-bold italic tracking-tight leading-[1.05] text-[#1a0a0a] dark:text-white font-outfit">
            {data.title.split(" Flowchart")[0]} <span style={{ color }}>Flowchart.</span>
          </h2>
          
          <p className="max-w-xl text-[#4a5568] dark:text-zinc-400 mt-4 text-base font-inter leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* High-Contrast Glassmorphic Container Card */}
        <div className="p-6 sm:p-10 md:p-12 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border-2 border-black/10 dark:border-white/15 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)]">
          
          {/* Header Status Line */}
          <div className="flex items-center justify-between border-b-2 border-black/10 dark:border-white/10 pb-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: color }} />
              <span className="text-xs font-mono font-black tracking-[0.2em] uppercase text-[#1a0a0a] dark:text-white">
                {data.title.toUpperCase()}
              </span>
            </div>
            
            <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm">
              <Sparkles size={11} style={{ color }} /> Low-Text System Logic
            </span>
          </div>

          {/* Connected Flowchart Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
            {data.nodes.map((node, i, arr) => {
              const isLast = i === arr.length - 1

              return (
                <div key={node.id} className="flex flex-col lg:flex-row items-center gap-4 relative">
                  
                  {/* Node Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="w-full p-6 md:p-7 rounded-[2rem] border-2 border-black/10 dark:border-white/15 bg-[#FFF9FA] dark:bg-zinc-950/80 transition-all duration-300 flex flex-col justify-between gap-6 group hover:shadow-2xl hover:-translate-y-1"
                    style={{
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)"
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black tracking-widest px-3 py-1 rounded-full uppercase bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                        {node.type ? node.type.toUpperCase() : "STAGE"} 0{i + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-base md:text-lg font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit">
                        {node.label}
                      </h4>
                      <p className="text-xs text-[#4a5568] dark:text-zinc-400 font-inter leading-relaxed">
                        {node.subtext}
                      </p>
                    </div>
                  </motion.div>

                  {/* Flow Arrow Connector (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center justify-center shrink-0 -mx-2 z-20">
                      <motion.div 
                        animate={{ x: [0, 4, 0] }} 
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center shadow-md"
                      >
                        <ArrowRight size={16} style={{ color }} />
                      </motion.div>
                    </div>
                  )}

                </div>
              )
            })}
          </div>

          {/* PROJECT-SPECIFIC VISUAL GRAPHIC CANVAS */}
          <PersonalizedProjectCanvas slug={slug} color={color} />

          {/* Bottom Summary Bar */}
          <div className="mt-10 pt-6 border-t-2 border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold text-[#1a0a0a] dark:text-white">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-500" />
              <span>Pipeline Verified • AA/AAA Compliant Architecture</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase opacity-70 bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full">
              Interactive Logic Boundary // V2.4
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   HIGH-CONTRAST PERSONALIZED PROJECT GRAPHIC CANVAS
───────────────────────────────────────────────────────────── */
function PersonalizedProjectCanvas({ slug, color }: { slug: string; color: string }) {
  switch (slug) {
    case "yonder-wonder":
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center text-pink-300 shrink-0">
              <Shield size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-pink-300 font-bold uppercase tracking-widest">Biometric Boundary Guard</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Identity Lock Matrix</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Locks individual facial meshes to guarantee Person A and Person B remain distinct entities during AI lighting synthesis.
          </div>
        </div>
      )

    case "pocket-fund":
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center text-purple-300 shrink-0">
              <Activity size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-widest">Gamified Financial Vitals</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Health Score Engine (84/100 HP)</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Automatically categorizes expenses into Need, Want, and Ick to reframe spend habits without punitive financial anxiety.
          </div>
        </div>
      )

    case "vidya":
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
              <Eye size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-widest">Inclusive Education Normalizer</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Accessibility Pathway Hub</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Transforms PDFs, video links, and handwritten notes into Dyslexia-friendly text, voice guidance, and bite-sized quizzes.
          </div>
        </div>
      )

    case "voxa":
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center text-sky-300 shrink-0">
              <Mic size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-sky-300 font-bold uppercase tracking-widest">Web Speech & NLP Engine</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Hands-Free Speech Pipeline</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Streams microphone audio into an instant NLP parser that extracts task names, due dates, priorities, and projects.
          </div>
        </div>
      )

    case "wassup":
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center text-blue-300 shrink-0">
              <Layout size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-blue-300 font-bold uppercase tracking-widest">Spatial Utility Architecture</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Sentiment-Driven Column Grid</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Proactively senses event planning context in chat streams to instantiate collaborative whiteboards & calendar columns.
          </div>
        </div>
      )

    case "pippofy":
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-300 shrink-0">
              <Disc size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-widest">Analog Physical Protocol</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Spinning Vinyl Acoustic Core</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Synthesizes 33 RPM physical vinyl crackle health scores with AI Historian liner notes and atmospheric rain soundscapes.
          </div>
        </div>
      )

    default:
      return (
        <div className="p-6 sm:p-8 bg-[#1a0a0a] text-white rounded-[2rem] border-2 border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border-2 border-white/20 flex items-center justify-center text-white shrink-0">
              <Code2 size={28} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">System Architecture</span>
              <h5 className="text-lg font-bold uppercase tracking-wider text-white font-outfit mt-0.5">Production Pipeline Verified</h5>
            </div>
          </div>
          <div className="text-xs font-inter leading-relaxed text-zinc-300 bg-white/10 px-5 py-3 rounded-xl border border-white/15 max-w-lg">
            Type-safe node transitions with high-performance responsive state rendering and 60fps physics animations.
          </div>
        </div>
      )
  }
}
