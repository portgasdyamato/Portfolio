import { Star, Minus } from "lucide-react"

export default function NewsTicker() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center my-12" aria-label="News Ticker">
      
      {/* Yellow Ribbon (Left to Right) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] bg-[#FFE4E4] rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-10  py-3 sm:py-4">
        <div className="flex animate-scroll-right w-fit">
          {/* Two sets of content for seamless looping */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {[...Array(12)].map((_, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center mx-6 gap-6 whitespace-nowrap">
                  <span className="text-black font-serif font-bold text-2xl sm:text-4xl tracking-wide uppercase">
                    Sakshi (Pippo) • UI UX Designer • Website Developer
                  </span>
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-black fill-black" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Blue Ribbon (Right to Left) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] bg-[#87CEEB] -rotate-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-20 py-3 sm:py-4 mix-blend-normal">
        <div className="flex animate-scroll-left w-fit">
          {/* Two sets of content for seamless looping */}
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {[...Array(12)].map((_, i) => (
                <div key={`${setIndex}-${i}`} className="flex items-center mx-6 gap-6 whitespace-nowrap">
                  <span className="text-black font-serif font-bold text-2xl sm:text-4xl tracking-wide uppercase">
                    Sakshi (Pippo) • UI UX Designer • Website Developer
                  </span>
                  <Minus className="w-8 h-8 sm:w-10 sm:h-10 text-black stroke-[4px]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}
