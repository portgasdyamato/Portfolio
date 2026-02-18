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

import PixelCharacter from "@/components/pixel-character"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF1F1]" id="home">
      <Header />
      <main className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 space-y-2 sm:space-y-4 pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="grid gap-2 sm:gap-4 grid-cols-1 md:grid-cols-3">
          <Hero />
          <Profile />
        </div>

        {/* Projects */}
        <div id="projects">
          <Projects />
        </div>

        {/* Achievements */}
        <div id="about">
          <Achievements />
        </div>

        {/* Education - Full Width */}
        <Education />

        {/* Certificates */}
        <Certificates />

        {/* Design Process */}
        <div className="mt-10 mb-14">
          <DesignProcess />
        </div>
        

        {/* Skills - Full Width */}

        {/* Image and Contact - Responsive Layout */}
        <div className="grid gap-2 sm:gap-4 grid-cols-1 lg:grid-cols-[550px_auto_2fr] ml-0 lg:ml-8">
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

        {/* Social Links */}
        <SocialLinks />
      </main>
      
      {/* Floating Pixel Character - Visible on all devices */}
      <PixelCharacter />
    </div>
  )
}
