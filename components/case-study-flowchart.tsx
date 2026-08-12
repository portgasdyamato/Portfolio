"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  GitBranch, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Shield, 
  Mic, 
  Volume2, 
  Eye, 
  Activity, 
  Disc, 
  Layout, 
  MessageSquare, 
  Compass, 
  Brain,
  RefreshCw,
  Zap,
  Lock,
  Code2
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
    <section className="py-24 md:py-36 bg-[#FFE0EA]/20 dark:bg-[#0d080a]/90 border-y border-pink-500/10 dark:border-white/5 relative overflow-hidden">
      
      {/* Portfolio Volumetric Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] opacity-15 blur-[140px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[9px] font-mono tracking-[0.25em] uppercase shadow-sm border mb-6"
            style={{ 
              backgroundColor: `${color}15`, 
              borderColor: `${color}30`, 
              color: color 
            }}
          >
            <GitBranch size={12} /> System Architecture & Flowchart
          </div>
          
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold italic tracking-tight leading-[1.05] text-foreground font-outfit">
            {data.title.split(" Flowchart")[0]} <span style={{ color }}>Flowchart.</span>
          </h2>
          
          <p className="max-w-xl text-muted-foreground mt-4 text-sm md:text-base font-inter leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Minimal Glassmorphic Flowchart Diagram Card */}
        <div className="p-6 sm:p-10 md:p-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl">
          
          {/* Header Status Line */}
          <div className="flex items-center justify-between border-b border-black/5 dark:border-white/10 pb-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-foreground/80">
                {data.title.toUpperCase()}
              </span>
            </div>
            <span 
              className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border"
              style={{ backgroundColor: `${color}10`, borderColor: `${color}25`, color }}
            >
              <Sparkles size={10} /> Low-Text System Logic
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
                    className="w-full p-6 md:p-7 rounded-[1.75rem] border border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between gap-6 group hover:shadow-xl"
                    style={{
                      borderColor: "rgba(0,0,0,0.06)"
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-[9px] font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase border"
                        style={{ backgroundColor: `${color}12`, borderColor: `${color}25`, color }}
                      >
                        {node.type ? node.type.toUpperCase() : "STAGE"} 0{i + 1}
                      </span>
                      <div className="w-2 h-2 rounded-full group-hover:scale-125 transition-transform" style={{ backgroundColor: color }} />
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
                    <div className="hidden lg:flex items-center justify-center shrink-0 -mx-2 z-20">
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

          {/* PROJECT-SPECIFIC VISUAL GRAPHIC CANVAS */}
          <PersonalizedProjectCanvas slug={slug} color={color} />

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

/* ─────────────────────────────────────────────────────────────
   PERSONALIZED PROJECT GRAPHIC CANVAS
───────────────────────────────────────────────────────────── */
function PersonalizedProjectCanvas({ slug, color }: { slug: string; color: string }) {
  switch (slug) {
    case "yonder-wonder":
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
              <Shield size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Biometric Boundary Guard</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Identity Lock Matrix</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Preserves 2 distinct entity geometries before photorealistic lighting synthesis
          </div>
        </div>
      )

    case "pocket-fund":
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Activity size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Gamified Financial Vitals</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Health Score Engine (84/100)</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Categorizes Need / Want / Ick to eliminate financial anxiety & reframes spend habits
          </div>
        </div>
      )

    case "vidya":
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Eye size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Inclusive Education Stream</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Accessibility Normalizer</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Transforms PDFs & videos into Dyslexia-friendly text, Audio streams & AI summaries
          </div>
        </div>
      )

    case "voxa":
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Mic size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Web Speech & NLP Engine</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Hands-Free Speech Pipeline</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Parses streaming speech into intent, task titles, due dates & project tags automatically
          </div>
        </div>
      )

    case "wassup":
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Layout size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Spatial Utility Architecture</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Sentiment-Driven Column Grid</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Detects planning intent in messages to instantiate collaborative whiteboards & calendars
          </div>
        </div>
      )

    case "pippofy":
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Disc size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Analog Physical Protocol</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Spinning Vinyl Acoustic Core</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Synthesizes 33 RPM vinyl crackle health scores with AI Historian album context
          </div>
        </div>
      )

    default:
      return (
        <div className="p-6 sm:p-8 bg-black/5 dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-500/10 border border-slate-500/20 flex items-center justify-center text-foreground">
              <Code2 size={24} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">System Architecture</span>
              <h5 className="text-sm font-bold uppercase tracking-wider text-foreground font-outfit mt-0.5">Production Pipeline Verified</h5>
            </div>
          </div>
          <div className="text-xs font-mono text-muted-foreground bg-white/50 dark:bg-white/5 px-4 py-2 rounded-xl border border-black/5 dark:border-white/5">
            Type-safe node transitions with high-performance responsive state rendering
          </div>
        </div>
      )
  }
}
