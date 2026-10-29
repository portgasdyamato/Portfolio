import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CustomCursor from '@/components/custom-cursor'
import { siteConfig } from '@/lib/site-config'
import { 
  Sparkles, 
  Calendar, 
  Mail, 
  FileText, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Bot, 
  Code2, 
  ShieldCheck, 
  Zap,
  Briefcase
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire Sakshi Agrahari | AI Product Designer & Design Engineer',
  description: 'Hire Sakshi Agrahari (Pippo) for AI Product Design, Design Engineering, and Frontend Architecture. Official LinkedIn: linkedin.com/in/ethsakshi | Official GitHub: github.com/portgasdyamato. Available for select full-time, contract, and advisory opportunities worldwide.',
  alternates: {
    canonical: `${siteConfig.url}/hire`,
  },
  openGraph: {
    title: 'Hire Sakshi Agrahari | AI Product Designer & Design Engineer',
    description: 'Explore collaboration pathways, core capabilities, and official profiles (LinkedIn: @ethsakshi, GitHub: @portgasdyamato) for Sakshi Agrahari (Pippo).',
    url: `${siteConfig.url}/hire`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
}

export default function HirePage() {
  const engagementModels = [
    {
      title: "Full-Time / Founding Roles",
      badge: "High Impact",
      description: "Joining ambitious product teams or high-growth AI startups to own the product lifecycle from initial discovery and UX research to interactive prototyping and production Next.js frontend code.",
      roles: ["AI Product Designer", "Design Engineer", "Lead Frontend Engineer", "Product Design Engineer"],
      icon: Briefcase,
      color: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Applied AI & AI-Integrated Products",
      badge: "Applied AI",
      description: "Taking AI models from raw API endpoints into cohesive, intuitive production software. Integrating multi-modal inputs (vision, speech, text), prompt architectures, structured JSON tool calling, latency streaming UI, and resilient fallback states.",
      roles: ["LLM API & Model Integration", "Streaming UX & Latency Reduction", "Multi-Modal AI Pipelines", "Agentic Tooling & RAG UX"],
      icon: Cpu,
      color: "from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      title: "AI Product Prototyping & UX Strategy",
      badge: "Strategy & UX",
      description: "Translating ambiguous model capabilities into intuitive interfaces. Designing human-in-the-loop workflows, character-level citation models, per-section confidence scoring, and progressive disclosure patterns.",
      roles: ["0-to-1 AI UX Architecture", "Trust & Confidence Indicators", "Prompt & Context Priming UX", "Interactive High-Fidelity Prototyping"],
      icon: Bot,
      color: "from-purple-500/10 to-indigo-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      title: "Design Systems & Frontend Architecture",
      badge: "Engineering",
      description: "Bridging the gap between Figma design tokens and production TypeScript/React code. Building accessible, bulletproof UI component systems with fluid spring physics and 60fps animations.",
      roles: ["Multi-Brand Design Tokens", "Tailwind & Shadcn UI Systems", "Next.js SSR/App Router Architecture", "WCAG 2.1 AA/AAA Accessibility"],
      icon: Layers,
      color: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      title: "Corporate AI Training & Masterclasses",
      badge: "Workshops",
      description: "Upskilling engineering and product teams on AI-assisted development. Proven track record leading enterprise buildathons on Claude, Claude Code, Cursor, and agentic workflows.",
      roles: ["Claude Code Mastery", "AI-Assisted Pair Programming", "Productivity & Velocity Optimization", "Real-World Hackathons"],
      icon: Zap,
      color: "from-rose-500/10 to-pink-500/10",
      borderColor: "border-rose-500/20"
    }
  ]

  const proofPoints = [
    { metric: "1st Place", label: "UI/UX Solvathon Winner (700+ Competitors)" },
    { metric: "40%", label: "Reduction in Design Review Cycles at Cubble" },
    { metric: "10M+", label: "Accessible Learners Target Scale for Vidya" },
    { metric: "60-70", label: "Enterprise Engineers Trained on Claude Code" },
  ]

  return (
    <div className="min-h-screen bg-[#FFF5F5] dark:bg-[#0a0a0f] text-[#1a0a0a] dark:text-white overflow-x-hidden pt-28 md:pt-36">
      <CustomCursor />
      <Header />

      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-6xl space-y-24 md:space-y-36">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-[#1a0a0a]/60 dark:text-white/60 font-black tracking-[0.2em] uppercase text-[10px] shadow-sm">
            <Sparkles size={12} className="text-[#F59E9E]" /> Open For Select Opportunities
          </div>

          <h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] max-w-5xl"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Designing the Future of <br className="hidden sm:inline" />
            <span className="text-[#F59E9E] italic">Human-AI Interaction.</span>
          </h1>

          <p className="max-w-3xl text-base sm:text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed">
            I am <strong className="text-[#1a0a0a] dark:text-white font-semibold">Sakshi Agrahari (Pippo)</strong>—an AI-native product designer and design engineer. I unite human-centered UX research, strategic system architecture, and production frontend engineering to build AI products people understand and trust.
          </p>

          {/* Primary CTA Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a0a0a] dark:bg-white text-white dark:text-[#1a0a0a] rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <Calendar size={16} /> Book a Strategy Call
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 text-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/20 transition-all shadow-sm"
            >
              <Mail size={16} /> Email Directly
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 text-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/20 transition-all shadow-sm"
            >
              LinkedIn (@ethsakshi) <ArrowUpRight size={14} />
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/10 text-foreground rounded-full font-bold text-xs uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/20 transition-all shadow-sm"
            >
              GitHub (@portgasdyamato) <ArrowUpRight size={14} />
            </a>
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border border-black/10 dark:border-white/10 text-muted-foreground hover:text-foreground rounded-full font-bold text-xs uppercase tracking-widest transition-all"
            >
              <FileText size={16} /> Resume (PDF)
            </a>
          </div>
        </section>

        {/* Verified Proof Points */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {proofPoints.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 backdrop-blur-md flex flex-col items-center text-center shadow-sm"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-black font-outfit text-[#F59E9E] mb-2 tracking-tight">
                {item.metric}
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </section>

        {/* Why Pair With Me? */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              The Design Engineer <span className="text-[#F59E9E]">Advantage.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground font-inter text-base md:text-lg">
              Most teams struggle with the chasm between Figma concepts and shipping software. I eliminate that handoff friction entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-[2rem] bg-white/80 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold font-outfit">Applied AI & Integration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Directly integrating models (OpenAI, Claude, Gemini, DeepSeek, Whisper) into cohesive software with streaming UX, tool calling, and fallback state machines.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/80 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#F59E9E]/10 text-[#F59E9E] flex items-center justify-center">
                <Bot size={24} />
              </div>
              <h3 className="text-xl font-bold font-outfit">AI Native UX & Trust</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specialized in AI explainability, confidence scoring, citation grounding, and graceful failure states that transform complex LLMs into trustworthy tools.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/80 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold font-outfit">Production Frontend Code</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I do not stop at interactive prototypes. I write scalable, type-safe React, TypeScript, Next.js App Router, and Tailwind CSS with 60fps micro-animations.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-white/80 dark:bg-white/[0.02] border border-black/5 dark:border-white/5 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold font-outfit">Rigorous Research Grounding</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Backed by active design research at DIVINE Lab (IIT Delhi), open-source developer modernizations at Red Hat, and cognitive walkthrough expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Ways We Can <span className="text-[#F59E9E]">Collaborate.</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground font-inter text-base md:text-lg">
              Structured engagement models designed to deliver immediate velocity and clarity to your product roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, idx) => {
              const Icon = model.icon
              return (
                <div 
                  key={idx}
                  className={`p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br ${model.color} bg-white/70 dark:bg-white/[0.02] border ${model.borderColor} backdrop-blur-xl flex flex-col justify-between space-y-8 shadow-sm`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-foreground">
                        <Icon size={22} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-black/5 dark:bg-white/10 text-foreground/80">
                        {model.badge}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold font-outfit text-foreground">{model.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-inter">{model.description}</p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/5">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Focus Deliverables</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {model.roles.map((r, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs font-semibold text-foreground/90">
                            <CheckCircle2 size={13} className="text-[#F59E9E] shrink-0" />
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-foreground text-background font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Discuss This Engagement <ArrowUpRight size={14} />
                  </a>
                </div>
              )
            })}
          </div>
        </section>

        {/* Selected Flagship Case Studies Links */}
        <section className="p-8 sm:p-12 md:p-16 rounded-[3rem] bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/10 space-y-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold font-outfit">Ready to inspect verified case studies?</h2>
            <p className="text-sm sm:text-base text-muted-foreground font-inter">
              Review detailed architectural breakdowns, research insights, and interactive prototypes across enterprise legal intelligence, education, voice, and financial products.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/work/research/ai-legal-contract"
              className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[#F59E9E] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              Legal Intelligence UX <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/projects/vidya"
              className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[#F59E9E] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              Vidya AI Learning <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/projects/voxa"
              className="px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[#F59E9E] hover:text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              VoXa Voice Tasks <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/work"
              className="px-6 py-3 rounded-full bg-[#1a0a0a] dark:bg-white text-white dark:text-[#1a0a0a] hover:opacity-90 transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md"
            >
              All Featured Work <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      <Footer hideContact={false} />
    </div>
  )
}
