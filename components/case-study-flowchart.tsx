"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

// Project Flowchart Data
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

export default function CaseStudyFlowchart({ slug, color = "#F59E9E", flowchart }: CaseStudyFlowchartProps) {
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

  return (
    <section className="py-24 md:py-36 bg-[#FFF5F7] dark:bg-[#090608] bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#1c1417_1.5px,transparent_1.5px)] [background-size:24px_24px] border-y border-pink-500/10 dark:border-white/10 relative overflow-hidden">
      
      {/* Portfolio Volumetric Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] opacity-20 blur-[180px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
      />

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-[0.25em] uppercase shadow-sm bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] mb-6">
            <GitBranch size={13} style={{ color }} /> Personalized System Architecture
          </div>
          
          <h2 className="text-[36px] sm:text-[48px] md:text-[62px] font-bold italic tracking-tight leading-[1.05] text-[#1a0a0a] dark:text-white font-outfit">
            {title.split(" Flow")[0]} <span style={{ color }}>Architecture.</span>
          </h2>
          
          <p className="max-w-xl text-[#4a5568] dark:text-zinc-400 mt-4 text-base font-inter leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Outer Architectural Container Card */}
        <div className="p-6 sm:p-10 md:p-14 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-3xl border-2 border-black/10 dark:border-white/15 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.12)]">
          
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b-2 border-black/10 dark:border-white/10 pb-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full animate-pulse shadow-sm" style={{ backgroundColor: color }} />
              <span className="text-xs font-mono font-black tracking-[0.2em] uppercase text-[#1a0a0a] dark:text-white">
                {title.toUpperCase()}
              </span>
            </div>
            
            <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase px-4 py-1.5 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm">
              <Sparkles size={11} style={{ color }} /> Architectural Geometry
            </span>
          </div>

          {/* RENDER BESPOKE GEOMETRIC DIAGRAM BASED ON PROJECT STYLE */}
          <div className="py-6">
            {style === "bezier" && <BezierFlowNetworkDiagram nodes={nodes} color={color} />}
            {style === "concentric" && <OrbitalConcentricSpheresDiagram nodes={nodes} color={color} />}
            {style === "sacred" && <SacredGeometryDiagram nodes={nodes} color={color} />}
            {style === "arc" && <ConcentricArcWaveDiagram nodes={nodes} color={color} />}
            {style === "radar" && <MinimalistRadarScopeDiagram nodes={nodes} color={color} title={title} subtitle={subtitle} />}
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
   S-Curve bezier paths connecting circular decision nodes
   ========================================================================= */
function BezierFlowNetworkDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-8 overflow-x-auto">
      <div className="min-w-[700px] flex flex-col items-center">
        
        {/* SVG Bezier Lines Overlay */}
        <div className="relative w-full h-[220px] mb-8">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" fill="none">
            {/* Background hairline curves */}
            <path d="M 50 100 C 150 20, 250 20, 350 100" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            <path d="M 50 100 C 150 180, 250 180, 350 100" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            <path d="M 350 100 C 450 20, 550 20, 650 100" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            <path d="M 350 100 C 450 180, 550 180, 650 100" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
            
            {/* Center main trunk line */}
            <line x1="50" y1="100" x2="750" y2="100" stroke={color} strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.6" />

            {/* Glowing animated dots on paths */}
            <motion.circle 
              r="4" 
              fill={color}
              animate={{ cx: [50, 350, 650, 750], cy: [100, 100, 100, 100] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Floating Nodes positioned along the bezier curve */}
          <div className="absolute inset-0 grid grid-cols-4 items-center gap-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center p-5 bg-[#FFF9FA] dark:bg-zinc-950/90 rounded-[2rem] border-2 border-black/10 dark:border-white/15 shadow-xl hover:scale-105 transition-transform"
              >
                <div 
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs mb-3 shadow-md bg-white dark:bg-zinc-900 text-[#1a0a0a] dark:text-white"
                  style={{ borderColor: color }}
                >
                  {node.id}
                </div>
                <h5 className="text-sm font-bold uppercase tracking-tight text-[#1a0a0a] dark:text-white font-outfit mb-1">
                  {node.label}
                </h5>
                <p className="text-[11px] text-[#4a5568] dark:text-zinc-400 font-inter leading-tight">
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
   Expanding concentric hairline circles with orbital stage labels
   ========================================================================= */
function OrbitalConcentricSpheresDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Concentric Circle Orbital Graphic */}
      <div className="relative w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] shrink-0 flex items-center justify-center">
        {/* Concentric Spheres */}
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
              borderColor: idx === 0 ? color : "rgba(100,100,100,0.25)" 
            }}
          />
        ))}

        {/* Core Center Pulse */}
        <div className="w-16 h-16 rounded-full bg-[#1a0a0a] dark:bg-white text-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-black text-xs shadow-2xl z-10">
          CORE
        </div>

        {/* Orbiting Satellite Dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: color, transform: "translate(130px, 0)" }} />
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
            className="p-5 bg-[#FFF9FA] dark:bg-zinc-950/80 rounded-[1.75rem] border-2 border-black/10 dark:border-white/15 flex items-center justify-between gap-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <span className="w-9 h-9 rounded-full bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] flex items-center justify-center font-mono font-bold text-xs shrink-0">
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
            <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
          </motion.div>
        ))}
      </div>

    </div>
  )
}

/* =========================================================================
   STYLE 1: SACRED GEOMETRY HOURGLASS DIAGRAM (Reference Image 1)
   Overlapping Fibonacci/Venn hairline circles with central vertical axis
   ========================================================================= */
function SacredGeometryDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-12 flex flex-col items-center">
      
      {/* Central Overlapping Sacred Circles */}
      <div className="relative w-full max-w-xl flex flex-col items-center">
        
        {/* Central Vertical Axis Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-black/20 dark:bg-white/20 z-0" />

        <div className="space-y-6 relative z-10 w-full">
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative mx-auto w-full max-w-md p-6 bg-white dark:bg-zinc-950 border-2 rounded-[2.5rem] shadow-xl text-center flex flex-col items-center"
              style={{ borderColor: i === 1 || i === 2 ? color : "rgba(0,0,0,0.12)" }}
            >
              {/* Sacred Geometry Circle Outer Frame */}
              <div 
                className="absolute -inset-2 rounded-[3rem] border border-dashed pointer-events-none opacity-40"
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
   Vertical axis line with expanding concentric arc curves bowing outward
   ========================================================================= */
function ConcentricArcWaveDiagram({ nodes, color }: { nodes: FlowchartNode[]; color: string }) {
  return (
    <div className="relative py-8">
      <div className="relative max-w-2xl mx-auto pl-8 sm:pl-16 border-l-4 border-black/10 dark:border-white/15 space-y-10">
        
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative p-6 bg-[#FFF9FA] dark:bg-zinc-950/90 rounded-[2rem] border-2 border-black/10 dark:border-white/15 shadow-xl"
          >
            {/* Axis Node Dot Connector */}
            <div 
              className="absolute -left-[43px] sm:-left-[75px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-zinc-900 shadow-md flex items-center justify-center text-white"
              style={{ backgroundColor: color }}
            />

            {/* Arc Curve graphic overlay */}
            <div 
              className="absolute right-0 top-0 bottom-0 w-24 border-r-2 border-dashed rounded-r-[2rem] pointer-events-none opacity-30"
              style={{ borderColor: color }}
            />

            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono font-black tracking-widest px-3 py-1 rounded-full uppercase bg-[#1a0a0a] text-white dark:bg-white dark:text-[#1a0a0a] shadow-sm">
                0{i + 1} // {node.type ? node.type.toUpperCase() : "STAGE"}
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
   Large central hairline circle with target scope grid & 4 cardinal dot nodes
   ========================================================================= */
function MinimalistRadarScopeDiagram({ nodes, color, title, subtitle }: { nodes: FlowchartNode[]; color: string; title: string; subtitle: string }) {
  return (
    <div className="relative py-8 flex flex-col items-center text-center">
      
      {/* Central Radar Target Scope */}
      <div className="relative w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border-2 border-black/10 dark:border-white/15 flex items-center justify-center p-8 shadow-inner my-6">
        
        {/* Inner Target Crosshair Lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-black/10 dark:bg-white/10" />
          <div className="h-full w-0.5 bg-black/10 dark:bg-white/10 absolute" />
        </div>

        {/* Inner Target Grid Rings */}
        <div className="w-3/4 h-3/4 rounded-full border border-dashed border-black/20 dark:border-white/20 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full border border-black/30 dark:border-white/30 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full shadow-lg" style={{ backgroundColor: color }} />
          </div>
        </div>

        {/* 4 Cardinal Dot Nodes along Scope Border */}
        {nodes.map((node, i) => {
          const positions = [
            "top-0 -translate-y-1/2 left-1/2 -translate-x-1/2", // Top
            "right-0 translate-x-1/2 top-1/2 -translate-y-1/2", // Right
            "bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2", // Bottom
            "left-0 -translate-x-1/2 top-1/2 -translate-y-1/2" // Left
          ]

          return (
            <motion.div
              key={node.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`absolute ${positions[i % 4]} p-4 bg-white dark:bg-zinc-950 border-2 rounded-2xl shadow-xl max-w-[160px] text-center z-20`}
              style={{ borderColor: color }}
            >
              <span className="text-[9px] font-mono font-black uppercase tracking-widest text-[#1a0a0a] dark:text-white block mb-0.5">
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
