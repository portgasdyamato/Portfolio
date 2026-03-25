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
import DesignProcess from "@/components/design-process"
import Achievements from "@/components/achievements"
import Certificates from "@/components/certificates"
import Education from "@/components/education"
import ImageSection from "@/components/image-section"
import GrowWithMeHeading from "@/components/GrowWithMeHeading"
import NewsTicker from "@/components/news-ticker"
import CustomCursor from "@/components/custom-cursor"
import PixelCharacter from "@/components/pixel-character"

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
        {isLoading && (
          <SplashScreen key="splash" finishLoadingAction={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="min-h-screen bg-background overflow-x-hidden" 
        id="home"
      >
        <CustomCursor />
        <Header />

        {/* ─── FULL BLEED MORPHING HERO SECTION ─── */}
        <MorphingHero />

        {/* ─── REST OF PAGE ─── */}
        <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl space-y-24 md:space-y-32">
            <div className="w-screen relative left-1/2 -translate-x-1/2">
              <NewsTicker />
            </div>

            <section id="projects" className="scroll-mt-32">
              <Projects />
            </section>

            <section id="about" className="scroll-mt-32">
              <Achievements />
            </section>

            <section className="scroll-mt-32">
              <Education />
            </section>

            <section className="scroll-mt-32">
              <Certificates />
            </section>

            <section className="scroll-mt-32">
              <DesignProcess />
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
    </>
  )
}
