"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Music, Camera, Coffee, Plane, Heart, Star, Sparkles, BookOpen, Palette, Mic2, MapPin, Headphones as HeadphoneIcon, Search, Palette as PenTool, Brain, Clock, HelpCircle } from "lucide-react"
import { Suspense, useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"

import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Float, Center, Environment, ContactShadows } from "@react-three/drei"
import * as THREE from "three"

// ── 3D MODEL COMPONENT ──
function ModelViewer({ url, scale = 1, rotationSpeed = 1, floatIntensity = 2 }: any) {
  const { scene } = useGLTF(url)
  const group = useRef<any>(null)

  // FORCE SHADELESS LOOK (Self-Illuminated)
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        const originalMap = child.material.map;
        child.material = new THREE.MeshBasicMaterial({
          map: originalMap,
          color: child.material.color
        });
      }
    });

    // CENTER THE GEOMETRY ONCE LOADED
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center); 
  }, [scene]);

  useFrame((state: any) => {
    if (!group.current) return
    group.current.rotation.y += 0.005 * rotationSpeed
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.25 * floatIntensity
  })

  return (
    <group ref={group}>
       <primitive object={scene} scale={scale} />
    </group>
  )
}

const animals = [
  { name: "Pony", url: "/pony.glb", tag: "3P / SPIRITED", scale: 2.8 },
  { name: "Panda", url: "/panda.glb", tag: "3P / CHILL", scale: 3.2 },
  { name: "Penguin", url: "/penguin.glb", tag: "3P / SOCIAL", scale: 2.2 }
]

const retroItems = [
  {
    id: "headphones",
    name: "Headphones",
    url: "/headphones.glb",
    scale: 2.2,
    tag: "THE_RHYTHM",
    activities: ["Vocal Soul / Singing", "Podcasts / Domain Expansion"],
    description: "Finding my rhythm through pure audio immersion."
  },
  {
    id: "watch",
    name: "Watch",
    url: "/watch.glb",
    scale: 1.8,
    tag: "TIMECRAFT",
    activities: ["Retro Antiques / Exploring", "Philosophy / Timeless Thinking"],
    description: "Captivated by the mechanical perfection of vintage timepieces."
  }
]

const hobbies = [
  { icon: Camera, text: "Photography", sub: "Capturing Light", x: "10%", y: "75%", size: 100 },
  { icon: Coffee, text: "Caffeine", sub: "Espresso Shots", x: "30%", y: "85%", size: 85 },
  { icon: PenTool, text: "Sketching", sub: "Visual Journal", x: "55%", y: "82%", size: 90 },
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
  const [activeRetro, setActiveRetro] = useState<any>(retroItems[0])

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="py-24 flex flex-col gap-32">
      {/* ── Favorite Trio: 3D Animal Showcase ── */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-widest uppercase text-[9px] mb-6">
               <Star size={10} fill="currentColor" />
               The 3P Favorites
            </div>
            <h3 className="text-[45px] sm:text-[65px] font-bold italic text-[#1a0a0a] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              My Favorite Trio.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-inter">
              Pony, Panda, and Penguin. There's a certain spirit in each that matches my approach to life — curiosity, patience, and a bit of playfulness.
            </p>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {animals.map((anim, i) => (
              <motion.div 
                key={anim.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group relative flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[4rem] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f7f7f7_60%,_#ececec_100%)] border border-[#F59E9E]/10 shadow-2xl shadow-[#1a0a0a]/[0.08] group-hover:border-[#F59E9E]/25 transition-all duration-700">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.03)_0%,_transparent_70%)] rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                  
                  <div className="absolute inset-0">
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-[#F59E9E]/20 font-mono text-[10px] animate-pulse">SYNCING_ASSET_0{i+1}...</div>}>
                      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
                        <OrbitControls enablePan={false} enableZoom={false} makeDefault minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
                        <ModelViewer url={anim.url} scale={anim.scale} rotationSpeed={1.2} floatIntensity={1.5} />
                      </Canvas>
                    </Suspense>
                  </div>
                  
                  <div className="absolute top-8 left-8 flex flex-col items-start gap-3 pointer-events-none z-20">
                     <div className="px-4 py-1.5 bg-[#1a0a0a] rounded-full text-white text-[8px] font-black tracking-[0.2em] shadow-xl">
                        {anim.tag}
                     </div>
                  </div>

                  <div className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none z-20 overflow-hidden">
                    <span className="text-[10px] font-black text-[#F59E9E]/40 uppercase tracking-[0.4em] mb-1 group-hover:text-[#F59E9E] transition-colors">{anim.name}</span>
                    <h4 className="text-3xl font-black italic text-[#1a0a0a] uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      {anim.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Life Outside: Interactive Retro Display ── */}
      <div className="relative bg-[#000000] rounded-[4rem] p-12 md:p-24 overflow-hidden min-h-[850px] shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] flex flex-col items-center">
        
        {/* Particle/Starfield Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.1, 1, 0.1], scale: [0.3, 1, 0.3] }}
                transition={{ duration: 2 + Math.random() * 6, repeat: Infinity }}
                className="absolute w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_8px_white]"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
           ))}
        </div>

        {/* Global Nebula Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,158,0.05)_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
           
           {/* ── LEFT: Selection & Floating Icons ── */}
           <div className="flex flex-col justify-between">
              <div>
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-8 border border-white/5 backdrop-blur-md">
                   <Heart size={10} fill="currentColor" stroke="none" />
                   The Internal Balance
                 </div>
                 <h3 className="text-[45px] md:text-[70px] font-bold italic text-white leading-[1] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                   Retro <br /> <span className="text-[#F59E9E]">Artifacts.</span>
                 </h3>

                 <div className="flex flex-col gap-6 max-w-sm mb-20">
                    {retroItems.map((item) => (
                      <button
                        key={item.id}
                        onMouseEnter={() => setActiveRetro(item)}
                        className={`group relative text-left p-6 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                          activeRetro.id === item.id 
                          ? 'bg-[#F59E9E] border-[#F59E9E] scale-[1.02]' 
                          : 'bg-white/5 border-white/5 hover:border-white/10'
                        }`}
                      >
                         <span className={`text-[10px] font-black tracking-[0.5em] uppercase block mb-2 transition-colors duration-500 ${
                           activeRetro.id === item.id ? 'text-black/50' : 'text-[#F59E9E]'
                         }`}>0{retroItems.indexOf(item) + 1} / ACCESS_ITEM</span>
                         <h5 className={`text-4xl font-black italic uppercase tracking-tighter transition-colors duration-500 ${
                           activeRetro.id === item.id ? 'text-[#1a0a0a]' : 'text-white'
                         }`}>{item.name}</h5>
                      </button>
                    ))}
                 </div>
              </div>

              {/* Floating Hobbies at the bottom of the section */}
              <div className="relative h-[250px] w-full hidden lg:block">
                 {hobbies.map((h, i) => (
                   <motion.div
                     key={h.text}
                     animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                     transition={{ duration: 6 + i, repeat: Infinity }}
                     className="absolute flex flex-col items-center gap-3 group"
                     style={{ left: h.x, top: h.y }}
                   >
                      <div className="w-16 h-16 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white group-hover:bg-[#F59E9E] group-hover:text-white transition-all duration-500 group-hover:scale-110">
                        <h.icon strokeWidth={1} size={28} />
                      </div>
                      <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center whitespace-nowrap">
                         <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F59E9E]">{h.text}</span>
                         <span className="text-[7px] font-mono uppercase tracking-widest text-white/30">{h.sub}</span>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* ── RIGHT: Large Interative Display ── */}
           <div className="relative flex-1 flex flex-col bg-white/[0.03] rounded-[4rem] border border-white/5 overflow-hidden backdrop-blur-3xl p-12 lg:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(245,158,158,0.08)_0%,_transparent_60%)] pointer-events-none" />
              
              <div className="relative h-full flex flex-col">
                 <div className="flex justify-between items-start mb-12">
                    <div className="flex flex-col gap-2">
                       <span className="text-[9px] font-black tracking-[0.6em] text-[#F59E9E] uppercase">{activeRetro.tag}</span>
                       <h4 className="text-[50px] font-black italic text-white uppercase leading-none tracking-tighter">{activeRetro.name}.</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                       <span className="text-[8px] font-mono text-white/30 tracking-[0.2em]">3D_LIVE</span>
                    </div>
                 </div>

                 <div className="flex-1 relative cursor-grab active:cursor-grabbing mb-12 min-h-[350px]">
                    <AnimatePresence mode="wait">
                       <motion.div 
                         key={activeRetro.id}
                         initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                         animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                         exit={{ opacity: 0, scale: 1.1, rotateY: -30 }}
                         transition={{ duration: 0.8, ease: "circOut" }}
                         className="w-full h-full"
                       >
                          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }}>
                             <Suspense fallback={null}>
                                <OrbitControls enableZoom={false} enablePan={false} makeDefault minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.5} />
                                <ModelViewer url={activeRetro.url} scale={activeRetro.scale} rotationSpeed={1.5} floatIntensity={4} />
                             </Suspense>
                          </Canvas>
                       </motion.div>
                    </AnimatePresence>
                 </div>

                 <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                       <span className="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase block border-b border-white/5 pb-2">Activities</span>
                       <div className="space-y-3">
                          {activeRetro.activities.map((act: string) => (
                             <div key={act} className="flex items-center gap-3 group">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F59E9E]" />
                                <span className="text-xs text-white/80 uppercase font-inter tracking-wider transition-colors">{act}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                    <div className="space-y-4">
                       <span className="text-[9px] font-black tracking-[0.4em] text-white/30 uppercase block border-b border-white/5 pb-2">About Piece</span>
                       <p className="text-xs text-white/50 leading-relaxed font-inter uppercase tracking-wide">
                          {activeRetro.description}
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Mobile Floating View (Simplified) */}
        <div className="lg:hidden grid grid-cols-3 gap-4 w-full mt-12 bg-white/5 p-8 rounded-[3rem] border border-white/5 backdrop-blur-xl">
           {hobbies.map((h) => (
             <div key={h.text} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F59E9E]/10 flex items-center justify-center text-[#F59E9E]">
                   <h.icon strokeWidth={1} size={18} />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-white/30">{h.text}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
