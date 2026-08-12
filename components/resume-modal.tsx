"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, X, Check, KeyRound, ArrowRight, AlertCircle, FileText } from "lucide-react"
import { useRouter } from "next/navigation"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const router = useRouter()
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setPasscode("")
      setError("")
      setSuccess(false)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (passcode.trim() === "SAKS") {
      setError("")
      setSuccess(true)
      if (typeof window !== "undefined") {
        sessionStorage.setItem("cv_unlocked", "true")
      }
      setTimeout(() => {
        onClose()
        router.push("/resume")
      }, 400)
    } else {
      setError("Incorrect passcode. Access denied.")
      setSuccess(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-md bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-[2.5rem] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col items-center text-center">
            {/* Header Icon */}
            <div className="w-14 h-14 rounded-2xl bg-[#F59E9E]/10 border border-[#F59E9E]/20 flex items-center justify-center text-[#F59E9E] mb-5 shadow-inner">
              <Lock size={24} />
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F59E9E] mb-2 font-inter">
              Protected Document
            </span>

            <h3 className="text-2xl font-bold italic font-outfit text-foreground mb-2">
              Unlock Sakshi's Resume
            </h3>

            <p className="text-xs text-muted-foreground font-inter leading-relaxed max-w-xs mb-6">
              Please enter the passcode to view and download the official CV.
            </p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
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
                  className="w-full h-14 px-5 pl-12 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-foreground font-mono text-sm tracking-widest placeholder:text-muted-foreground/40 focus:outline-none focus:border-[#F59E9E] focus:ring-2 focus:ring-[#F59E9E]/20 transition-all uppercase"
                />
                <KeyRound size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 justify-center text-red-500 text-xs font-semibold font-inter"
                >
                  <AlertCircle size={14} />
                  <span>{error}</span>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 justify-center text-emerald-500 text-xs font-semibold font-inter"
                >
                  <Check size={14} />
                  <span>Passcode Accepted! Opening CV...</span>
                </motion.div>
              )}

              <button
                type="submit"
                className="w-full h-14 bg-[#1a0a0a] dark:bg-white text-white dark:text-black rounded-2xl font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-[#F59E9E] dark:hover:bg-[#F59E9E] dark:hover:text-white transition-all shadow-lg active:scale-[0.98]"
              >
                <span>Unlock & View CV</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
