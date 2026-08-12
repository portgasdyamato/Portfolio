"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Brain, 
  Layers, 
  Search, 
  Sliders, 
  Volume2, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  FileText, 
  Disc, 
  Eye, 
  RefreshCw, 
  SlidersHorizontal,
  Mic,
  MessageSquare,
  Compass,
  Layout,
  Code2
} from "lucide-react"

interface ProjectBespokeDiagramProps {
  slug: string
  color?: string
  title: string
}

export default function ProjectBespokeDiagram({ slug, color = "#F59E9E", title }: ProjectBespokeDiagramProps) {
  switch (slug) {
    case "yonder-wonder":
      return <YonderWonderDiagram color={color} />
    case "pocket-fund":
      return <PocketFundDiagram color={color} />
    case "vidya":
      return <VidyaDiagram color={color} />
    case "voxa":
      return <VoxaDiagram color={color} />
    case "wassup":
      return <WassupDiagram color={color} />
    case "pippofy":
      return <PippofyDiagram color={color} />
    default:
      return <GenericBespokeDiagram title={title} color={color} />
  }
}

/* ─────────────────────────────────────────────────────────────
   1. YONDER WONDER: Dual Identity Holographic Synthesis Diagram
───────────────────────────────────────────────────────────── */
function YonderWonderDiagram({ color }: { color: string }) {
  const [identityLockActive, setIdentityLockActive] = useState(true)

  return (
    <section className="py-24 md:py-36 bg-[#080509] text-white border-y border-white/10 relative overflow-hidden">
      {/* Volumetric background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-20 blur-[160px] pointer-events-none rounded-full"
        style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
      />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Lock size={12} className="text-[#D8B4FE]" /> Identity Preservation Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            Dual-Entity <span className="text-[#D8B4FE]">Synthesis Architecture.</span>
          </h2>
          <p className="max-w-2xl text-white/50 mt-4 text-sm md:text-base font-inter">
            Interactive visual pipeline detailing how Yonder Wonder isolates real human identities before photorealistic context blending.
          </p>
        </div>

        {/* BESPOKE DIAGRAM CANVAS */}
        <div className="p-8 sm:p-12 md:p-16 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl relative">
          
          {/* Identity Lock Toggle Switch */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-8 mb-12">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${identityLockActive ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
              <span className="text-xs font-mono tracking-widest text-white/80 uppercase">
                IDENTITY_LOCK_GUARD: <strong className={identityLockActive ? "text-emerald-400" : "text-rose-400"}>{identityLockActive ? "ACTIVE (2 SEPARATE ENTITIES)" : "DISABLED (UNCANNY MORPH)"}</strong>
              </span>
            </div>

            <button
              onClick={() => setIdentityLockActive(!identityLockActive)}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono uppercase tracking-wider text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw size={14} className={identityLockActive ? "" : "animate-spin"} />
              Toggle Guard State
            </button>
          </div>

          {/* VISUAL PIPELINE GRAPH */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Entities (Col 1-4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 font-mono font-bold text-xs">
                    P_01
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-white">Person A (User)</h5>
                    <p className="text-[11px] text-white/40 font-mono">Facial Mesh & Identity Vector</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 font-mono font-bold text-xs">
                    P_02
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-white">Person B (Loved One)</h5>
                    <p className="text-[11px] text-white/40 font-mono">Facial Mesh & Identity Vector</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              </div>
            </div>

            {/* Central Decision Core (Col 5-8) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative p-8 bg-black/40 border border-white/15 rounded-3xl text-center shadow-xl">
              <motion.div 
                animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 rounded-full border-2 border-dashed border-[#D8B4FE]/50 flex items-center justify-center mb-6"
              >
                <Shield size={32} className={identityLockActive ? "text-emerald-400" : "text-rose-500"} />
              </motion.div>

              <h4 className="text-base font-bold uppercase tracking-widest text-white mb-2 font-outfit">
                {identityLockActive ? "Biometric Boundary Guard" : "Unfiltered AI Morph"}
              </h4>
              <p className="text-xs text-white/50 leading-relaxed font-inter">
                {identityLockActive 
                  ? "Locks identity parameters so Person A and Person B remain distinct individuals sharing the same lighting canvas."
                  : "WARNING: High risk of uncanny face morphing (creating a hybrid person instead of 2 people)."}
              </p>
            </div>

            {/* Output Synthesis (Col 9-12) */}
            <div className="lg:col-span-4 p-8 bg-gradient-to-b from-purple-950/40 to-black/60 border border-purple-500/30 rounded-3xl flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
              <div className="w-full aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 mb-6 flex flex-col items-center justify-center p-6 relative">
                <Sparkles size={28} className="text-[#D8B4FE] mb-3 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                  {identityLockActive ? "SYNTHESIZED_MEMORIES_CANVAS.PNG" : "UNCANNY_HYBRID_RENDER.PNG"}
                </span>
                <span className="text-[10px] font-mono text-purple-300 mt-2">
                  {identityLockActive ? "Stable Diffusion + GAN Lighting Sync" : "Morph Conflict Error"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
                <CheckCircle2 size={12} /> 94% Emotional Usability Score
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   2. POCKET FUND: Cyber-Luxury Financial HP & Combat Flowchart
───────────────────────────────────────────────────────────── */
function PocketFundDiagram({ color }: { color: string }) {
  const [activeTab, setActiveTab] = useState<"need" | "want" | "ick">("need")

  const tabData = {
    need: { title: "Essentials (Needs)", hpEffect: "+15 HP", color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-emerald-950/20", desc: "Rent, groceries, health — non-punitive essential tracking." },
    want: { title: "Lifestyle (Wants)", hpEffect: "+5 HP", color: "text-purple-400", border: "border-purple-500/40", bg: "bg-purple-950/20", desc: "Dining out, entertainment — balanced intentional choices." },
    ick: { title: "Impulse (Icks)", hpEffect: "-10 HP", color: "text-rose-400", border: "border-rose-500/40", bg: "bg-rose-950/20", desc: "Late fees, unused subscriptions — constructive reframing." }
  }

  return (
    <section className="py-24 md:py-36 bg-[#09060c] text-white border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Zap size={12} className="text-[#C026D3]" /> Cyber-Luxury Gamification System
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            Combat Budgeting <span className="text-[#C026D3]">Engine.</span>
          </h2>
          <p className="max-w-2xl text-white/50 mt-4 text-sm md:text-base font-inter">
            Interactive breakdown of how transactions bypass financial anxiety and feed directly into the Financial Health Score.
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl">
          
          {/* Top HP Meter */}
          <div className="p-6 bg-black/60 border border-white/10 rounded-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Activity className="text-[#C026D3]" size={24} />
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Global Financial Vitals</span>
                <h4 className="text-lg font-bold uppercase tracking-wider text-white font-outfit">Financial Health HP: 84 / 100</h4>
              </div>
            </div>

            <div className="w-full md:w-1/2 h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
              <motion.div 
                animate={{ width: "84%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-emerald-400 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.8)]"
              />
            </div>
          </div>

          {/* Categorization Tabs */}
          <div className="grid grid-cols-3 gap-3 mb-10">
            {(["need", "want", "ick"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 px-3 rounded-2xl text-xs font-mono uppercase tracking-widest transition-all cursor-pointer border ${
                  activeTab === key 
                    ? 'bg-purple-500/20 border-purple-400 text-white shadow-lg' 
                    : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                }`}
              >
                {key.toUpperCase()} CATEGORY
              </button>
            ))}
          </div>

          {/* Active Flow State Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={`p-8 rounded-3xl border ${tabData[activeTab].border} ${tabData[activeTab].bg} flex flex-col md:flex-row items-center justify-between gap-8`}
            >
              <div className="space-y-3">
                <span className={`text-xs font-mono font-bold tracking-widest uppercase ${tabData[activeTab].color}`}>
                  EFFECT: {tabData[activeTab].hpEffect}
                </span>
                <h3 className="text-2xl font-bold font-outfit uppercase text-white">{tabData[activeTab].title}</h3>
                <p className="text-sm text-white/70 max-w-xl font-inter leading-relaxed">{tabData[activeTab].desc}</p>
              </div>

              <div className="p-6 bg-black/60 border border-white/10 rounded-2xl flex flex-col items-center text-center shrink-0 min-w-[200px]">
                <Brain className="text-[#C026D3] mb-3" size={24} />
                <span className="text-[10px] font-mono text-white/40 uppercase">Gemini AI Coach</span>
                <span className="text-xs font-bold text-white mt-1">Anxiety Level: Low</span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   3. VIDYA: Multimodal Accessibility & Sensory Transformation
───────────────────────────────────────────────────────────── */
function VidyaDiagram({ color }: { color: string }) {
  const [viewMode, setViewMode] = useState<"standard" | "dyslexia" | "amber" | "audio">("amber")

  return (
    <section className="py-24 md:py-36 bg-[#0a0703] text-white border-y border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Eye size={12} className="text-[#F59E0B]" /> Inclusive Education Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            Multimodal <span className="text-[#F59E0B]">Knowledge Engine.</span>
          </h2>
          <p className="max-w-2xl text-white/50 mt-4 text-sm md:text-base font-inter">
            Test how Vidya converts complex educational media into accessible sensory streams.
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-white/[0.02] backdrop-blur-3xl border border-amber-500/20 rounded-[3rem] shadow-2xl">
          
          {/* View Mode Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: "amber", label: "Amber High-Contrast AAA" },
              { id: "dyslexia", label: "Dyslexia OpenSans Mode" },
              { id: "audio", label: "Voice-Guided Audio Stream" },
              { id: "standard", label: "Standard PDF Layout" }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setViewMode(btn.id as any)}
                className={`px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  viewMode === btn.id 
                    ? 'bg-[#F59E0B] text-black font-bold border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Interactive Content Sandbox */}
          <div className={`p-8 sm:p-12 rounded-3xl transition-all duration-500 border ${
            viewMode === 'amber' 
              ? 'bg-[#451A03]/60 border-amber-500/60 text-amber-100' 
              : viewMode === 'dyslexia'
              ? 'bg-zinc-900 border-white/20 text-white tracking-wide font-sans'
              : viewMode === 'audio'
              ? 'bg-black border-purple-500/40 text-purple-200'
              : 'bg-zinc-950 border-white/10 text-white/70'
          }`}>
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest opacity-60">Source: Quantum_Physics_Lecture.PDF</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F59E0B]">AA/AAA Compliant</span>
            </div>

            {viewMode === 'audio' ? (
              <div className="flex flex-col items-center text-center py-10 space-y-6">
                <Volume2 size={48} className="text-[#F59E0B] animate-pulse" />
                <h4 className="text-xl font-bold font-mono uppercase tracking-widest text-white">Voice Guidance Stream Active</h4>
                <p className="text-sm font-mono text-white/60 max-w-lg">Reading: "Quantum superposition describes a system existing in multiple states until measured..."</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className={`text-2xl md:text-3xl font-bold uppercase tracking-tight ${viewMode === 'amber' ? 'text-amber-400' : 'text-white'}`}>
                  Quantum Superposition & Wave Functions
                </h3>
                <p className={`text-base leading-relaxed ${viewMode === 'dyslexia' ? 'text-lg leading-loose font-normal' : ''}`}>
                  Vidya automatically normalizes complex visual equations into bite-sized summaries, dyslexia-friendly typography, and interactive self-check quizzes to ensure equal access to knowledge.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   4. VOXA: Acoustic Waveform & Speech-to-NLP Diagram
───────────────────────────────────────────────────────────── */
function VoxaDiagram({ color }: { color: string }) {
  return (
    <section className="py-24 md:py-36 bg-[#040810] text-white border-y border-sky-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-300 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Mic size={12} className="text-[#4A90E2]" /> Acoustic Intelligence Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            Speech-to-NLP <span className="text-[#4A90E2]">Parsing Pipeline.</span>
          </h2>
          <p className="max-w-2xl text-white/50 mt-4 text-sm md:text-base font-inter">
            Hands-free task creation workflow converting raw streaming speech into structured task parameters.
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-white/[0.02] backdrop-blur-3xl border border-sky-500/20 rounded-[3rem] shadow-2xl">
          
          {/* Speech Input Box */}
          <div className="p-8 bg-black/60 border border-sky-500/30 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                <Mic size={28} className="animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-sky-300 uppercase tracking-widest">Web Speech API Input</span>
                <p className="text-lg font-bold font-outfit text-white italic mt-1">
                  "Remind me to update client proposal tomorrow at 3pm"
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 h-10">
              {[40, 75, 30, 90, 60, 100, 45, 80, 35].map((h, i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [`${h}%`, `${100 - h}%`, `${h}%`] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1.5 bg-sky-400 rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Parsed Output Tokens */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-sky-950/30 border border-sky-500/30 rounded-2xl">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block mb-2">Parsed Action</span>
              <h5 className="text-lg font-bold font-outfit text-white">Create Task</h5>
              <span className="text-xs font-mono text-white/40 mt-1 block">Intent: Task_Add</span>
            </div>

            <div className="p-6 bg-purple-950/30 border border-purple-500/30 rounded-2xl">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-2">Parsed Task Name</span>
              <h5 className="text-lg font-bold font-outfit text-white">Update Client Proposal</h5>
              <span className="text-xs font-mono text-white/40 mt-1 block">Entity: Work</span>
            </div>

            <div className="p-6 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">Parsed Due Date</span>
              <h5 className="text-lg font-bold font-outfit text-white">Tomorrow @ 3:00 PM</h5>
              <span className="text-xs font-mono text-white/40 mt-1 block">Timestamp Resolved</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   5. WASSUP WEB: Spatial AI Messenger Multi-Column Flow
───────────────────────────────────────────────────────────── */
function WassupDiagram({ color }: { color: string }) {
  return (
    <section className="py-24 md:py-36 bg-[#050811] text-white border-y border-blue-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Layout size={12} className="text-[#4A90E2]" /> Spatial UI Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            Active Spatial <span className="text-[#4A90E2]">Utility Grid.</span>
          </h2>
          <p className="max-w-2xl text-white/50 mt-4 text-sm md:text-base font-inter">
            How Wassup Web turns passive messenger threads into proactive collaborative workspaces.
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-white/[0.02] backdrop-blur-3xl border border-blue-500/20 rounded-[3rem] shadow-2xl grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-black/60 border border-white/10 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase text-blue-400 font-bold">Col 1: Main Thread</span>
              <MessageSquare size={16} className="text-white/40" />
            </div>
            <p className="text-xs text-white/60 font-mono leading-relaxed">"Let's finalize the trip schedule for next weekend!"</p>
          </div>

          <div className="p-6 bg-blue-950/40 border border-blue-500/40 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase text-blue-300 font-bold">Col 2: Sentiment Sensor</span>
              <Compass size={16} className="text-blue-400" />
            </div>
            <p className="text-xs text-white/80 font-mono leading-relaxed">Proactive Trigger: Trip Planning & Calendar Scheduling Detected.</p>
          </div>

          <div className="p-6 bg-purple-950/40 border border-purple-500/40 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase text-purple-300 font-bold">Col 3: Whiteboard Tab</span>
              <Layout size={16} className="text-purple-400" />
            </div>
            <p className="text-xs text-white/80 font-mono leading-relaxed">Active Spatial Utility: Auto-generates shared itinerary & destination map.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   6. PIPPOFY: Analog Vinyl Physical Sanctuary
───────────────────────────────────────────────────────────── */
function PippofyDiagram({ color }: { color: string }) {
  return (
    <section className="py-24 md:py-36 bg-[#0a0803] text-white border-y border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Disc size={12} className="text-[#DDAA22]" /> Analog Physical Protocol
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            Spinning Vinyl <span className="text-[#DDAA22]">Acoustic Engine.</span>
          </h2>
          <p className="max-w-2xl text-white/50 mt-4 text-sm md:text-base font-inter">
            Synthesizing physical analog vinyl rituals with Crackle Health Scores and AI Historian insights.
          </p>
        </div>

        <div className="p-8 sm:p-12 bg-white/[0.02] backdrop-blur-3xl border border-amber-500/20 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Animated Vinyl Disc */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-black border-4 border-amber-500/30 flex items-center justify-center shrink-0 shadow-2xl">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-full h-full rounded-full border-8 border-zinc-900/80 flex items-center justify-center p-8"
            >
              <div className="w-16 h-16 rounded-full bg-[#DDAA22] border-2 border-white flex items-center justify-center">
                <Disc size={24} className="text-black" />
              </div>
            </motion.div>
          </div>

          {/* Acoustic Controls */}
          <div className="space-y-6 flex-1">
            <div className="p-6 bg-black/60 border border-white/10 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">Atmosphere Layer</span>
              <span className="text-xs font-mono font-bold text-[#DDAA22] uppercase">Rain + Vinyl Crackle (33 RPM)</span>
            </div>

            <div className="p-6 bg-amber-950/30 border border-amber-500/30 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-white/60">AI Vinyl Historian</span>
              <span className="text-xs font-mono font-bold text-amber-300 uppercase">Context: 1974 Jazz Fusion Master</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────
   7. GENERIC BESPOKE DIAGRAM (FALLBACK)
───────────────────────────────────────────────────────────── */
function GenericBespokeDiagram({ title, color }: { title: string; color: string }) {
  return (
    <section className="py-24 md:py-36 bg-[#0a0a0c] text-white border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 font-mono uppercase text-[9px] tracking-[0.3em] mb-4">
            <Code2 size={12} style={{ color }} /> Technical Architecture
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit uppercase tracking-tighter text-white">
            System <span style={{ color }}>Blueprint.</span>
          </h2>
        </div>

        <div className="p-8 sm:p-12 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-[10px] font-mono uppercase text-white/40 block mb-2">Stage 01</span>
              <h4 className="text-lg font-bold font-outfit text-white">Input & Context Ingestion</h4>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-[10px] font-mono uppercase text-white/40 block mb-2">Stage 02</span>
              <h4 className="text-lg font-bold font-outfit text-white">Logic Processing Engine</h4>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <span className="text-[10px] font-mono uppercase text-white/40 block mb-2">Stage 03</span>
              <h4 className="text-lg font-bold font-outfit text-white">High-Fidelity Interface State</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
