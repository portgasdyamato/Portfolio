"use client"

import { motion } from "framer-motion"
import { GitBranch, ArrowRight, Layers, Sparkles, CheckCircle2 } from "lucide-react"

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

export default function CaseStudyFlowchart({ slug, color = "#F59E5E", flowchart }: CaseStudyFlowchartProps) {
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
    <section className="py-24 md:py-36 bg-slate-50/60 dark:bg-zinc-950/60 border-y border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-black/70 dark:text-white/70 font-mono uppercase text-[9px] tracking-[0.25em] mb-6">
            <GitBranch size={12} style={{ color }} /> System Architecture & Flowchart
          </div>
          
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold italic tracking-tight leading-[1.05] text-foreground">
            {data.title.split(" Flowchart")[0]} <span style={{ color }}>Flowchart.</span>
          </h2>
          
          <p className="max-w-xl text-muted-foreground mt-4 text-sm md:text-base font-inter leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Minimal Editorial Flowchart Diagram */}
        <div className="p-6 sm:p-10 md:p-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl">
          
          {/* Header Status Line */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-foreground/80">
                {data.title.toUpperCase()}
              </span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-muted-foreground uppercase bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full border border-black/5 dark:border-white/5">
              <Sparkles size={10} style={{ color }} /> Low-Text System Logic
            </span>
          </div>

          {/* Connected Flowchart Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
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
                    className="w-full p-6 md:p-7 rounded-[1.75rem] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between gap-6 group hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase bg-black/5 dark:bg-white/5 text-muted-foreground border border-black/5 dark:border-white/5">
                        {node.type ? node.type.toUpperCase() : "STAGE"} 0{i + 1}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20 group-hover:scale-125 transition-transform" style={{ backgroundColor: color }} />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-base md:text-lg font-bold uppercase tracking-tight text-foreground font-outfit">
                        {node.label}
                      </h4>
                      <p className="text-xs text-muted-foreground font-inter leading-relaxed">
                        {node.subtext}
                      </p>
                    </div>
                  </motion.div>

                  {/* Flow Arrow Connector (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex items-center justify-center text-muted-foreground/30 shrink-0 -mx-2 z-20">
                      <motion.div 
                        animate={{ x: [0, 3, 0] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight size={18} style={{ color }} />
                      </motion.div>
                    </div>
                  )}

                </div>
              )
            })}
          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              <span>Pipeline Verified • AA/AAA Compliant Architecture</span>
            </div>
            <span className="text-[10px] tracking-widest uppercase opacity-60">
              Interactive Logic Boundary // V2.4
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}
