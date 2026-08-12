"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Lock, KeyRound, AlertCircle } from "lucide-react"
import Link from "next/link"
import CustomCursor from "@/components/custom-cursor"

export default function ResumePage() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState("")

  // No toolbar, no navpanes, no scrollbar in the PDF viewer
  const pdfUrl = encodeURI("/Sakshi Agrahari 1CV.pdf#toolbar=0&navpanes=0&scrollbar=0")

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode.trim() === "SAKS") {
      setError("")
      setIsUnlocked(true)
    } else {
      setError("Incorrect passcode. Access denied.")
      setPasscode("")
    }
  }

  return (
    <div
      className="h-screen bg-black text-white flex flex-col font-inter select-none overflow-hidden"
      onContextMenu={(e) => e.preventDefault()}
    >
      <CustomCursor />

      {/* ── STICKY TOP BAR ── */}
      <header className="shrink-0 w-full bg-black border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between z-50">
        {/* Left: Back to Portfolio */}
        <Link
          href="/"
          className="flex items-center gap-2.5 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 group border border-white/10"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Center: Document Title */}
        <span className="hidden md:block text-xs font-bold text-white/60 tracking-wide">
          Sakshi Agrahari — Official CV
        </span>

        {/* Right: Lock Status */}
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 text-zinc-400 rounded-full font-black text-xs uppercase tracking-[0.2em] border border-white/10">
          <Lock size={13} className="text-[#F59E9E]" />
          <span>Protected View</span>
        </div>
      </header>

      {/* ── MAIN AREA ── */}
      <main className="flex-1 overflow-hidden flex flex-col">
        {!isUnlocked ? (
          /* Locked — Passcode Form */
          <div className="flex-1 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 sm:p-10 shadow-2xl text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F59E9E]/10 border border-[#F59E9E]/20 flex items-center justify-center text-[#F59E9E] mx-auto mb-6">
                <Lock size={28} />
              </div>

              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E9E] mb-2 block">
                Protected Document
              </span>

              <h1 className="text-3xl font-bold italic font-outfit text-white mb-3">
                Unlock Sakshi's Resume
              </h1>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-xs mx-auto mb-8">
                Please enter the passcode to view the resume.
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
          </div>
        ) : (
          /* Unlocked — Full-bleed PDF viewer, no rounded corners, no scrollbar */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex-1 bg-black overflow-hidden"
          >
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full border-none block"
              style={{ display: "block" }}
            >
              <iframe
                src={pdfUrl}
                className="w-full h-full border-none block"
                title="Sakshi Agrahari Resume CV"
                style={{ display: "block" }}
              />
            </object>
          </motion.div>
        )}
      </main>
    </div>
  )
}
