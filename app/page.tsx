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
      <main className="container mx-auto p-4 space-y-4">
        {/* Hero Section */}
        <div className="grid gap-4 md:grid-cols-3" >
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

        {/* Image and Contact */}
        <div className="grid gap-4 ml-8 md:grid-cols-[550px_auto_2fr] ">
          <div>
            <ImageSection />
          </div>

          <div className="flex ml-24 mb-20 justify-center">
            <GrowWithMeHeading />
          </div>
          <div id="contact" className="w-2/3 ml-40 mr-8 mb-8">
            <Contact />
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </main>
      
      {/* Floating Pixel Character */}
      <PixelCharacter />
    </div>
  )
}
