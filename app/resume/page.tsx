"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lock, KeyRound, AlertCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import CustomCursor from "@/components/custom-cursor"

export default function ResumePage() {
  const router = useRouter()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  // Disable browser PDF toolbar, download, and navigation controls
  const pdfUrl = encodeURI("/Sakshi Agrahari 1CV.pdf#toolbar=0&navpanes=0&scrollbar=0")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const unlocked = sessionStorage.getItem("cv_unlocked") === "true"
      setIsUnlocked(unlocked)
      setIsLoading(false)
    }
  }, [])

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode.trim() === "SAKS") {
      setError("")
      setIsUnlocked(true)
      if (typeof window !== "undefined") {
        sessionStorage.setItem("cv_unlocked", "true")
      }
    } else {
      setError("Incorrect passcode. Access denied.")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col font-inter selection:bg-[#F59E9E]/30 relative overflow-x-hidden select-none">
      <CustomCursor />

      {/* ── STICKY TOP BAR WITH BACK TO PORTFOLIO BUTTON ── */}
      <header className="sticky top-0 z-50 w-full bg-zinc-900/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between shadow-xl">
        {/* Left: Back to Portfolio Button */}
        <Link 
          href="/"
          className="flex items-center gap-2.5 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 group border border-white/10 shadow-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Center: Document Title */}
        <div className="hidden md:flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
          <Sparkles size={14} className="text-[#F59E9E]" />
          <span className="text-xs font-bold text-white tracking-wide">
            Sakshi Agrahari — Official CV
          </span>
        </div>

        {/* Right: Protected View-Only Indicator (No download link) */}
        {isUnlocked ? (
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 text-zinc-400 rounded-full font-black text-xs uppercase tracking-[0.2em] border border-white/10 select-none">
            <Lock size={13} className="text-[#F59E9E]" />
            <span>Protected View</span>
          </div>
        ) : <div />}
      </header>

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 flex flex-col items-center justify-center">
        {!isUnlocked ? (
          /* Locked State - Passcode Verification Form */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl text-center my-auto"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F59E9E]/10 border border-[#F59E9E]/20 flex items-center justify-center text-[#F59E9E] mx-auto mb-6 shadow-inner">
              <Lock size={28} />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E9E] mb-2 block">
              Protected Document
            </span>

            <h1 className="text-3xl font-bold italic font-outfit text-white mb-3">
              Unlock Sakshi's Resume
            </h1>

            <p className="text-xs text-zinc-400 font-inter leading-relaxed max-w-xs mx-auto mb-8">
              Please enter the passcode to view the resume on the portfolio site.
            </p>

            <form onSubmit={handlePasscodeSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value)
                    if (error) setError("")
                  }}
                  placeholder="ENTER PASSCODE"
                  autoFocus
                  className="w-full h-14 px-5 pl-12 rounded-2xl bg-white/5 border border-white/10 text-white font-mono text-sm tracking-widest placeholder:text-zinc-500 focus:outline-none focus:border-[#F59E9E] focus:ring-2 focus:ring-[#F59E9E]/20 transition-all uppercase"
                />
                <KeyRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 justify-center text-red-400 text-xs font-semibold"
                >
                  <AlertCircle size={14} />
                  <span>{error}</span>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full h-14 bg-white text-black hover:bg-[#F59E9E] hover:text-white rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all shadow-lg active:scale-[0.98] mt-2"
              >
                Unlock Resume
              </button>
            </form>
          </motion.div>
        ) : (
          /* Unlocked State - Protected Integrated PDF Viewer (No Download Toolbar) */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-[85vh] flex flex-col items-center bg-zinc-900 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden relative select-none"
          >
            {/* Embedded PDF Viewer with disabled toolbars */}
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full border-none rounded-[2rem]"
            >
              <iframe
                src={pdfUrl}
                className="w-full h-full border-none pointer-events-auto"
                title="Sakshi Agrahari Resume CV"
              />
            </object>
          </motion.div>
        )}
      </main>
    </div>
  )
}
