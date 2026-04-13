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
          <div className="grid gap-2 sm:gap-4 grid-cols-1 lg:grid-cols-[550px_auto_2fr] items-start">
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
        </div>
      )}
      
      <div className={`pb-6 px-4 ${hideContact ? 'mt-32' : 'mt-8'}`}>
        <SocialLinks />
      </div>

      <PixelCharacter />
    </>
  )
}
