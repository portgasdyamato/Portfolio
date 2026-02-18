import Header from "@/components/header"
import Hero from "@/components/hero"
import Profile from "@/components/profile"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"
import DesignProcess from "@/components/design-process"
import Achievements from "@/components/achievements"
import Certificates from "@/components/certificates"
import Education from "@/components/education"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-purple-500/30 overflow-x-hidden" id="home">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 pt-28 md:pt-40">
        
        {/* Bento Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Hero />
          <Profile />
        </section>

        {/* Featured Projects */}
        <section id="projects" className="scroll-mt-32">
          <Projects />
        </section>

        {/* Achievements Section */}
        <section id="about" className="scroll-mt-32">
          <Achievements />
        </section>

        {/* Education Journey */}
        <section className="scroll-mt-32">
          <Education />
        </section>

        {/* Certificates & Credentials */}
        <section className="scroll-mt-32">
          <Certificates />
        </section>

        {/* Soft Skills & Design Process */}
        <section className="scroll-mt-32">
          <DesignProcess />
        </section>

        {/* Technical Skills */}
        <section className="scroll-mt-32">
          <Skills />
        </section>

        {/* Contact & Socials */}
        <section id="contact" className="scroll-mt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Contact />
            <div className="flex flex-col gap-12">
               <SocialLinks />
            </div>
          </div>
        </section>
        
      </main>

      {/* Footer Decoration */}
      <footer className="py-12 text-center border-t border-border/50">
        <p className="text-sm font-bold font-outfit text-muted-foreground uppercase tracking-widest">
          © 2026 SAKSHI AGRAHARI <span className="mx-2 opacity-30">•</span> BUILT FOR IMPACT
        </p>
      </footer>
    </div>
  )
}
