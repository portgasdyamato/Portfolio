"use client"

import { motion } from "framer-motion"
import Header from "@/components/header"
import Projects from "@/components/projects"
import FigmaShowcase from "@/components/figma-showcase"
import Certificates from "@/components/certificates"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"

export default function WorkPage() {
  return (
    <motion.div 
      key="work-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-background overflow-x-hidden pt-24 md:pt-32" 
    >
      <CustomCursor />
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl space-y-12 md:space-y-32">
        <section id="work" className="flex flex-col gap-12 md:gap-32">
          <div className="flex flex-col gap-24 md:gap-48">
            <Projects />
            <div className="pt-24 md:pt-32 border-t border-black/5 dark:border-white/5">
              <FigmaShowcase />
            </div>
          </div>
          <Certificates />
        </section>
      </main>

      <Footer />
    </motion.div>
  )
}
