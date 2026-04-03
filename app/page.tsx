"use client"

// v1.3 - Unified Discovery Deployment
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import SplashScreen from "@/components/splash-screen"
import Header from "@/components/header"
import MorphingHero from "@/components/morphing-hero"

import Footer from "@/components/footer"
import FunFacts from "@/components/fun-facts"
import Education from "@/components/education"
import Achievements from "@/components/achievements"

import SkillsShowcase from "@/components/skills-showcase"

import NewsTicker from "@/components/news-ticker"
import CustomCursor from "@/components/custom-cursor"

import { Sparkles } from "lucide-react"

// Global session tracker (Survivies SPA navigations, resets on Refresh)
let hasShownSplash = false;

export default function Home() {
  const [isLoading, setIsLoading] = useState(!hasShownSplash)

  const handleFinishLoading = () => {
    setIsLoading(false);
    hasShownSplash = true;
  };

  useEffect(() => {
    // Force set overflow to hidden until splash exits
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" finishLoadingAction={handleFinishLoading} />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="min-h-screen bg-background overflow-x-hidden" 
            id="home"
          >
            <CustomCursor />
            <Header />

            {/* ─── FULL BLEED MORPHING HERO SECTION ─── */}
            <MorphingHero />

            {/* ─── REST OF PAGE ─── */}
            <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl space-y-12 md:space-y-32">
                <div className="w-screen relative left-1/2 -translate-x-1/2">
                  <NewsTicker />
                </div>

                {/* ── ABOUT SECTION ── */}
                <section id="about" className="scroll-mt-32 flex flex-col gap-12 md:gap-32">
                  <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 mt-10 md:mt-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-6">
                      <Sparkles size={12} fill="currentColor" strokeWidth={0} />
                      Beyond The Resume
                    </div>
                    <h2 className="text-[40px] md:text-[60px] lg:text-[75px] font-bold italic text-[#1a0a0a] leading-[1.05] tracking-tight" style={{ fontFamily: "'Jersey 20', sans-serif" }}>
                      Before you learn about me <span className="text-[#F59E9E]">Professionally,</span>
                      <br /> let's learn some <span className="text-black/30">fun facts</span> about me.
                    </h2>
                  </div>
                  <FunFacts />
                  <Education />
                </section>

                <Achievements />

                {/* ── SKILLS SECTION ── */}
                <section id="skills" className="scroll-mt-32">
                  <SkillsShowcase />
                </section>

              </main>

              <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
