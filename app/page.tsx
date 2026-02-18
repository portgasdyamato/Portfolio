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
import ImageSection from "@/components/image-section"
import GrowWithMeHeading from "@/components/GrowWithMeHeading"

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-purple-500/30 overflow-x-hidden" id="home">
      <Header />

      <main className="container mx-auto px-8 sm:px-6 lg:px-8 max-w-8xl space-y-24 md:space-y-32 pt-36 md:pt-52">
        
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

        {/* Image and Contact - Original Grid Layout */}
        <div className="grid gap-2 sm:gap-4 grid-cols-1 lg:grid-cols-[550px_auto_2fr]">
          <div className="order-1">
            <ImageSection />
          </div>

          <div className="order-3 lg:order-2 hidden md:flex justify-center ml-0 lg:ml-24 mb-4 sm:mb-8 md:mb-12 lg:mb-20">
            <GrowWithMeHeading />
          </div>
          
          <div id="contact" className="order-2 lg:order-3 w-full ml-0 lg:ml-40 mr-0 lg:mr-8 mb-4 sm:mb-6 lg:mb-8">
            <Contact />
          </div>
        </div>

        {/* Unified Pink Footer */}

        
      </main>
        <div className="pb-6 px-4">
          <SocialLinks />
        </div>

    </div>
  )
}
