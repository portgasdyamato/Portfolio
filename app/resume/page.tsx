"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Lock, Eye, EyeOff } from "lucide-react"

import CustomCursor from "@/components/custom-cursor"

export default function ResumePage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const pdfUrl = encodeURI("/Sakshi Agrahari 1CV.pdf#toolbar=0&navpanes=0&scrollbar=0")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode.trim() === "SAKS") {
      setError("")
      setIsUnlocked(true)
    } else {
      setError("Wrong passcode — try again.")
      setPasscode("")
      setShake(true)
      setTimeout(() => setShake(false), 600)
      inputRef.current?.focus()
    }
  }

  return (
    <div
      className="h-screen bg-[#0a0a0a] text-white flex flex-col font-inter select-none overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      <CustomCursor />

      {/* ── TOP BAR ── */}
      <header className="shrink-0 w-full px-6 sm:px-10 py-5 flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl z-50">
        <a
          href="/"
          className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Portfolio
        </a>

        <span className="hidden sm:block text-[10px] text-white/20 uppercase tracking-[0.3em] font-semibold">
          Sakshi Agrahari · CV
        </span>

        <div className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-[0.2em] font-semibold">
          <Lock size={10} className="text-[#F59E9E]/60" />
          Protected
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="flex-1 overflow-hidden flex">
        {!isUnlocked ? (
          /* ── LOCK SCREEN ── */
          <div className="flex-1 flex items-center justify-center p-6 relative">

            {/* Ambient glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full bg-[#F59E9E]/[0.04] blur-[120px]" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px]"
            >
              {/* Card */}
              <div className="bg-[#111111] border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

                {/* Top strip accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F59E9E]/40 to-transparent" />

                <div className="p-8 sm:p-10">
                  {/* Lock icon */}
                  <div className="mb-8 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#F59E9E]/10 flex items-center justify-center mb-5">
                      <Lock size={20} className="text-[#F59E9E]" strokeWidth={1.5} />
                    </div>

                    <p className="text-[10px] text-[#F59E9E]/80 font-bold uppercase tracking-[0.35em] mb-3">
                      Protected Document
                    </p>
                    <h1 className="text-[1.65rem] font-bold leading-tight text-white mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
                      Unlock Sakshi's Resume
                    </h1>
                    <p className="text-xs text-white/30 leading-relaxed max-w-[260px]">
                      Enter the passcode to view the CV within the portfolio.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <motion.div
                      animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <input
                        ref={inputRef}
                        type={showPass ? "text" : "password"}
                        value={passcode}
                        onChange={(e) => {
                          setPasscode(e.target.value.toUpperCase())
                          if (error) setError("")
                        }}
                        placeholder="PASSCODE"
                        autoFocus
                        autoComplete="off"
                        spellCheck={false}
                        className="w-full h-[52px] px-5 pr-12 rounded-xl bg-white/[0.04] border border-white/[0.07] text-white font-mono text-sm tracking-[0.3em] placeholder:text-white/20 placeholder:tracking-[0.3em] focus:outline-none focus:border-white/25 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(255,255,255,0.04)] transition-all duration-200 uppercase"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                        tabIndex={-1}
                      >
                        {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                      </button>
                    </motion.div>

                    {/* Hint */}
                    <p className="text-[10px] text-white/20 text-center tracking-wide">
                      Hint: First 4 letters of the owner's first name (all caps)
                    </p>

                    {/* Error */}
                    <AnimatePresence>
                      {error && (
                        <motion.p
                          key="err"
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-[11px] text-red-400/80 text-center font-medium"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      className="mt-1 w-full h-[52px] rounded-xl bg-white text-black font-bold text-xs uppercase tracking-[0.25em] hover:bg-[#F59E9E] hover:text-white transition-all duration-200 active:scale-[0.98] shadow-lg"
                    >
                      Unlock
                    </button>
                  </form>
                </div>

                {/* Bottom strip accent */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
              </div>

              {/* Subtle label below card */}
              <p className="text-center text-[10px] text-white/15 mt-5 tracking-[0.2em] uppercase">
                View-only · No download
              </p>
            </motion.div>
          </div>
        ) : (
          /* ── UNLOCKED PDF VIEWER ── */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-black overflow-hidden"
          >
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full border-none block"
            >
              <iframe
                src={pdfUrl}
                className="w-full h-full border-none block"
                title="Sakshi Agrahari Resume CV"
              />
            </object>
          </motion.div>
        )}
      </main>
    </div>
  )
}
