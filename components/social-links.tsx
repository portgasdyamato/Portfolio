import { motion } from "framer-motion"
import { Github, Mail, Linkedin, Plane } from "lucide-react"

const socialLinks = [
  { name: "Github", url: "https://github.com/portgasdyamato", icon: Github },
  { name: "Email", url: "mailto:sakshiagrahari2004@gmail.com", icon: Mail },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ethsakshi", icon: Linkedin },
]

// Extended barcode pattern for realistic look
const barcodeWidths = [3, 1, 4, 2, 5, 1, 2, 1, 4, 3, 6, 1, 2, 4, 2, 1, 3, 5, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2]

export default function SocialLinks() {
  return (
    <div className="w-full flex justify-center pb-8 pt-16 px-6 md:px-4 overflow-hidden md:overflow-visible perspective-1000">
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: -6, y: -6, boxShadow: "18px 18px 0px 0px #E58585" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full max-w-6xl flex flex-col md:flex-row shadow-[12px_12px_0px_0px_#E58585] relative group rounded-xl md:rounded-l-xl md:rounded-r-[2rem]"
      >
        {/* Left Side: Main Ticket Body */}
        <div className="flex-[3] bg-[#FFFDF9] dark:bg-[#1a0a0a] text-[#1a0a0a] dark:text-white relative flex flex-col rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
          
          {/* Authentic Top/Bottom Cutouts (Notches) using global background color */}
          <div className="hidden md:block absolute right-0 top-0 w-8 h-4 bg-background rounded-b-full translate-x-1/2 z-20" />
          <div className="hidden md:block absolute right-0 bottom-0 w-8 h-4 bg-background rounded-t-full translate-x-1/2 z-20" />

          {/* Background Watermark Pattern */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
             <div className="text-[200px] font-black italic -rotate-12 leading-none whitespace-nowrap font-outfit">FIRST CLASS</div>
          </div>

          {/* Ticket Header */}
          <div className="flex justify-between items-center px-6 sm:px-8 py-2 bg-[#1a0a0a] text-[#FFFDF9] dark:bg-white dark:text-[#1a0a0a] relative z-10 rounded-tl-xl md:rounded-tr-none">
            <div className="flex items-center gap-3">
              <Plane size={16} className="-rotate-45 text-[#F59E9E]" />
              <span className="font-bold tracking-[0.3em] text-[10px] sm:text-xs">BOARDING PASS</span>
            </div>
            <div className="font-mono text-[9px] sm:text-[10px] opacity-90 tracking-widest">
              CLASS: FIRST CLASS
            </div>
          </div>

          {/* Main Passenger Grid */}
          <div className="grid grid-cols-4 px-6 sm:px-8 py-3 relative z-10 border-b border-[#1a0a0a]/10 dark:border-white/10">
            <div className="col-span-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">Name of Passenger</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mt-1 leading-none">Sakshi Agrahari</h2>
            </div>
          </div>

          {/* Flight Path & VIP Stamp Grid */}
          <div className="grid grid-cols-4 px-6 sm:px-8 py-3 relative z-10 border-b border-[#1a0a0a]/10 dark:border-white/10">
            <div className="col-span-2 sm:col-span-1 flex flex-col border-r border-[#1a0a0a]/10 dark:border-white/10 pr-4">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">From</span>
              <span className="text-xl font-black font-mono mt-1 text-[#F59E9E]">AI PRODUCT</span>
              <span className="text-[10px] opacity-60 mt-1 font-bold tracking-widest leading-none">DESIGN ENGINEER</span>
            </div>
            
            <div className="col-span-2 sm:col-span-2 flex flex-col px-4 sm:border-r border-[#1a0a0a]/10 dark:border-white/10">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">To</span>
              <span className="text-xl font-black font-mono mt-1 text-[#F59E9E]">YOUR TEAM</span>
              <span className="text-[10px] opacity-60 mt-1 font-bold tracking-widest leading-none">COLLABORATION</span>
            </div>

            <div className="hidden sm:flex col-span-1 flex-col pl-4 justify-center items-center">
              <motion.div 
                whileHover={{ rotate: 15, scale: 1.1 }}
                className="w-12 h-12 border-[3px] border-[#F59E9E] rounded-full flex items-center justify-center -rotate-12 shrink-0 shadow-sm"
              >
                <div className="w-[85%] h-[85%] border-[1.5px] border-dashed border-[#F59E9E] rounded-full flex items-center justify-center">
                  <span className="text-[#F59E9E] text-[7px] font-black uppercase text-center leading-none tracking-widest">
                    V.I.P.<br/><br/>CLASS
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Meta Data Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 px-6 sm:px-8 py-3 gap-3 sm:gap-4 relative z-10 border-b border-[#1a0a0a]/10 dark:border-white/10">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">Flight</span>
              <span className="text-sm sm:text-lg font-bold font-mono mt-1 leading-none">SA-2026</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">Date</span>
              <span className="text-sm sm:text-lg font-bold font-mono mt-1 leading-none">ANYTIME</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">Gate</span>
              <span className="text-sm sm:text-lg font-bold font-mono mt-1 leading-none">W.W.W</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] opacity-60 font-outfit">Seat</span>
              <span className="text-sm sm:text-lg font-black font-mono mt-1 leading-none">01A</span>
            </div>
          </div>

          {/* Social Links Footer */}
          <div className="px-6 sm:px-8 py-3 bg-[#1a0a0a]/5 dark:bg-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-bl-xl relative z-10 flex-1">
            <span className="text-[10px] font-mono font-bold tracking-widest opacity-70">CONNECT WITH ME // SOCIALS</span>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 transition-transform hover:-translate-y-1 hover:rotate-6 bg-[#1a0a0a] text-white rounded-xl shadow-md"
                  >
                    <Icon size={16} strokeWidth={2.5} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Ticket Stub */}
        <div className="w-full md:w-[320px] bg-[#221f1e] text-[#f5f5f4] relative flex flex-col justify-center items-center rounded-b-xl md:rounded-bl-none md:rounded-r-[2rem] overflow-hidden">
          
          {/* Perforated Edge overlay (left side) */}
          <div className="hidden md:flex absolute -left-[5px] top-0 bottom-0 w-2 flex-col justify-evenly py-2 z-10">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-[10px] h-[10px] bg-[#FFFDF9] dark:bg-[#1a0a0a] rounded-full" />
            ))}
          </div>

          <div className="flex flex-col items-center w-full px-10 py-6 h-full justify-center gap-5">
            
            {/* Header */}
            <div className="flex items-center gap-2">
              <Plane size={20} className="-rotate-45" />
              <span className="font-bold tracking-[0.2em] text-[11px] sm:text-xs">BOARDING PASS</span>
            </div>

            {/* Dashed Line */}
            <div className="w-full border-t border-dashed border-white/20"></div>

            {/* Barcode Block */}
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex gap-[2px] h-14 w-full justify-center bg-[#f5f5f4] p-2 rounded-sm mix-blend-screen">
                {barcodeWidths.map((width, i) => (
                  <div 
                    key={i} 
                    className="h-full bg-[#221f1e]" 
                    style={{ width: `${width}px` }}
                  />
                ))}
              </div>
              <span className="text-sm font-bold tracking-[0.15em]">
                TKT-82930-SA
              </span>
            </div>

            {/* Dashed Line */}
            <div className="w-full border-t border-dashed border-white/20"></div>

            {/* Footer */}
            <span className="text-[9px] font-medium tracking-widest opacity-80 mt-1">
              © 2026 BUILT FOR IMPACT
            </span>

          </div>
        </div>
      </motion.div>
    </div>
  )
}
