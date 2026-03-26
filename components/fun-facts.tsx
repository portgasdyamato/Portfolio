"use client"

import { motion } from "framer-motion"
import { Music, Camera, Coffee, Plane, Heart, Star, Sparkles, BookOpen, Palette, Mic2, MapPin, Headphones as HeadphoneIcon, Search, Palette as PenTool, Brain, Clock, HelpCircle } from "lucide-react"
import { Suspense, useRef, useState, useEffect } from "react"
import dynamic from "next/dynamic"

import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, PresentationControls, Float, Center, Environment, ContactShadows } from "@react-three/drei"

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
  }, [scene]);

  useFrame((state: any) => {
    if (!group.current) return
    group.current.rotation.y += 0.01 * rotationSpeed
  })

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={floatIntensity}>
      <Center>
        <primitive object={scene} scale={scale} ref={group} />
      </Center>
    </Float>
  )
}

const animals = [
  { name: "Pony", url: "/pony.glb", tag: "3P / SPIRITED", scale: 2.8 },
  { name: "Panda", url: "/panda.glb", tag: "3P / CHILL", scale: 3.2 },
  { name: "Penguin", url: "/penguin.glb", tag: "3P / SOCIAL", scale: 2.2 }
]

const hobbies = [
  { icon: HeadphoneIcon, text: "Podcasts & Lectures", sub: "Domain Expansion", color: "#F59E9E", x: "10%", y: "20%", size: 90 },
  { icon: Mic2, text: "Singing", sub: "Vocal Soul", color: "#F59E9E", x: "25%", y: "55%", size: 75 },
  { icon: PenTool, text: "Doodling & Sketching", sub: "Visual Journaling", color: "#F59E9E", x: "42%", y: "15%", size: 85 },
  { icon: MapPin, text: "Travelling", sub: "Global Nomad", color: "#F59E9E", x: "68%", y: "45%", size: 80 },
  { icon: HelpCircle, text: "Philosophy", sub: "Asking Why", color: "#F59E9E", x: "82%", y: "12%", size: 75 },
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
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
                  {/* Studio Floor / Showcase Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[40%] bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.03)_0%,_transparent_70%)] rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Subtle Grain/Texture Background */}
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                  
                  <div className="absolute inset-0 cursor-grab active:cursor-grabbing">
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-[#F59E9E]/20 font-mono text-[10px] animate-pulse">SYNCING_ASSET_0{i+1}...</div>}>
                      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
                        <PresentationControls 
                          global 
                          config={{ mass: 2, tension: 500 }} 
                          snap={{ mass: 4, tension: 1500 }}
                          azimuth={[-Math.PI / 4, Math.PI / 4]}
                          polar={[-Math.PI / 6, Math.PI / 6]}
                        >
                          <ModelViewer url={anim.url} scale={anim.scale} rotationSpeed={1.2} floatIntensity={1.5} />
                        </PresentationControls>
                      </Canvas>
                    </Suspense>
                  </div>
                  
                  {/* Premium Name Tag - Vertical HUD Pill */}
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

      {/* ── Life Outside: Hobbies Galaxy with Retro Antics ── */}
      <div className="relative bg-[#1a0a0a] rounded-[4rem] p-12 md:p-24 overflow-hidden min-h-[700px] flex flex-col lg:flex-row items-center gap-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
        
        {/* Particle/Starfield Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
           {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  opacity: [0.1, 1, 0.1],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2 + Math.random() * 4, repeat: Infinity }}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
           ))}
        </div>

        <div className="z-10 relative flex-1">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-8">
             <Heart size={10} fill="currentColor" stroke="none" />
             The Curious Mind
           </div>
           <h3 className="text-[45px] md:text-[60px] font-bold italic text-white leading-[1.1] mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
             Where I find <br /> <span className="text-[#F59E9E]">Internal Balance.</span>
           </h3>
           <p className="text-white/50 text-xl font-inter leading-relaxed mb-12 max-w-md">
             When I'm not designing, I'm researching things outside my domain — from abstract philosophy to the history of retro objects.
           </p>

           <div className="space-y-6">
              {[
                { label: "Researching", value: "Philosophy & Lectures" },
                { label: "Creating", value: "Singing & Doodling" },
                { label: "Experiencing", value: "Travelling & Retro Antiques" }
              ].map(item => (
                <div key={item.label} className="group border-b border-white/10 pb-4">
                   <span className="text-[8px] uppercase tracking-[0.5em] text-white/30 block mb-2">{item.label}</span>
                   <span className="text-lg text-white font-medium group-hover:text-[#F59E9E] transition-colors uppercase tracking-tight">{item.value}</span>
                </div>
              ))}
           </div>
        </div>

        {/* ── 3D OBJECTS GALAXY (Desktop) ── */}
        <div className="relative flex-1 w-full h-[500px] hidden lg:block perspective-[1000px]">
           
           {/* Headphones 3D Model */}
           <div className="absolute top-[10%] left-[20%] w-[180px] h-[180px] z-20 cursor-grab active:cursor-grabbing">
              <Canvas dpr={[1, 2]}>
                <Suspense fallback={null}>
                  <ModelViewer url="/headphones.glb" scale={0.4} rotationSpeed={1.4} floatIntensity={3} />
                </Suspense>
              </Canvas>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                 <span className="text-[7px] font-mono tracking-[0.5em] text-white/20 uppercase">RETRO_AUDIOPHILE</span>
              </div>
           </div>

           {/* Watch 3D Model */}
           <div className="absolute bottom-[10%] right-[15%] w-[160px] h-[160px] z-20">
              <Canvas dpr={[1, 2]}>
                <Suspense fallback={null}>
                  <ModelViewer url="/watch.glb" scale={0.45} rotationSpeed={-1.2} floatIntensity={3} />
                </Suspense>
              </Canvas>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                 <span className="text-[7px] font-mono tracking-[0.5em] text-white/20 uppercase">ANTIC_MECHANICS</span>
              </div>
           </div>

           {/* Hobbies Bubble Labels */}
           {hobbies.map((h, i) => (
             <motion.div
               key={h.text}
               animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
               transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.2 }}
               className="absolute group flex flex-col items-center gap-3 cursor-pointer"
               style={{ left: h.x, top: h.y }}
             >
                <div 
                  className="rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#F59E9E] group-hover:text-white group-hover:scale-110 shadow-2xl shadow-black/50"
                  style={{ width: h.size, height: h.size }}
                >
                   <h.icon strokeWidth={1} size={h.size * 0.35} className="text-white group-hover:text-white" />
                </div>
                <div className="absolute top-full mt-4 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                   <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#F59E9E] whitespace-nowrap mb-1">{h.text}</span>
                   <span className="text-[7px] text-white/40 uppercase tracking-widest whitespace-nowrap font-mono">{h.sub}</span>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden grid grid-cols-2 gap-4 w-full">
           {hobbies.map((h, i) => (
             <div key={h.text} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E9E]/10 flex items-center justify-center text-[#F59E9E]">
                   <h.icon strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-[0.15em] text-white">{h.text}</h5>
                  <p className="text-[8px] text-white/30 uppercase tracking-widest mt-1">{h.sub}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
