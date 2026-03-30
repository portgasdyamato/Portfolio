"use client"

// v1.3 - Unified Discovery Deployment
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import SplashScreen from "@/components/splash-screen"
import Header from "@/components/header"
import MorphingHero from "@/components/morphing-hero"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"
import Achievements from "@/components/achievements"
import FunFacts from "@/components/fun-facts"
import Certificates from "@/components/certificates"
import Education from "@/components/education"
import ImageSection from "@/components/image-section"
import SkillsShowcase from "@/components/skills-showcase"
import GrowWithMeHeading from "@/components/GrowWithMeHeading"
import NewsTicker from "@/components/news-ticker"
import CustomCursor from "@/components/custom-cursor"
import PixelCharacter from "@/components/pixel-character"
import { Sparkles } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

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
          <SplashScreen key="splash" finishLoadingAction={() => setIsLoading(false)} />
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
                    <h2 className="text-[40px] md:text-[60px] lg:text-[75px] font-bold italic text-[#1a0a0a] leading-[1.05] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Before you learn about me <span className="text-[#F59E9E]">Professionally,</span>
                      <br /> let's learn some <span className="text-black/30">fun facts</span> about me.
                    </h2>
                  </div>
                  <FunFacts />
                  <Education />
                </section>

                {/* ── WORK SECTION ── */}
                <section id="projects" className="scroll-mt-32 flex flex-col gap-12 md:gap-32">
                  <Projects />
                  <Achievements />
                  <Certificates />
                </section>

                {/* ── SKILLS SECTION ── */}
                <section id="skills" className="scroll-mt-32">
                  <SkillsShowcase />
                </section>

                <div className="grid gap-2 sm:gap-4 grid-cols-1 lg:grid-cols-[550px_auto_2fr]">
                  <div className="order-1">
                    <ImageSection />
                  </div>
                  <div className="order-3 lg:order-2 hidden md:flex justify-center ml-0 lg:ml-24 mb-4 sm:mb-8 md:mb-12 lg:mb-20">
                    <GrowWithMeHeading />
                  </div>
                  <div id="contact" className="order-2 lg:order-3 w-full lg:w-2/3 ml-0 lg:ml-40 mr-0 lg:mr-8 mb-4 sm:mb-6 lg:mb-8">
                    <Contact />
                  </div>
                </div>
              </main>
              
              <div className="pb-6 px-4">
                <SocialLinks />
              </div>

              <PixelCharacter />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
