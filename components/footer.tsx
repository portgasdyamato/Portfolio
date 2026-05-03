"use client"

import ImageSection from "@/components/image-section"
import GrowWithMeHeading from "@/components/GrowWithMeHeading"
import Contact from "@/components/contact"
import SocialLinks from "@/components/social-links"
import PixelCharacter from "@/components/pixel-character"

export default function Footer({ hideContact = false }: { hideContact?: boolean }) {
  return (
    <>
      {!hideContact && (
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 max-w-8xl mt-12 md:mt-32">
          {/* Relative wrapper so the heading can be absolutely centered without eating layout space */}
          <div className="relative flex flex-col lg:flex-row items-start justify-between gap-6">

            {/* Left: BookingCall card */}
            <div className="w-full lg:w-[420px] shrink-0 z-10">
              <ImageSection />
            </div>

            {/* Center: GROW WITH ME — absolutely centered in the full row, pointer-events-none so it never blocks clicks */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-0">
              <GrowWithMeHeading />
            </div>

            {/* Right: Contact card */}
            <div id="contact" className="w-full lg:w-[420px] shrink-0 z-10 mb-4 sm:mb-6 lg:mb-8">
              <Contact />
            </div>

          </div>
        </div>
      )}
      
      <div className={`pb-6 px-4 ${hideContact ? 'mt-4' : 'mt-8'}`}>
        <SocialLinks />
      </div>

      <PixelCharacter />
    </>
  )
}
