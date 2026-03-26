"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Music, Camera, Coffee, Heart, Star, Mic2, MapPin, Headphones as HeadphoneIcon, Palette as PenTool, HelpCircle, Clock } from "lucide-react"
import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

// ── 3D MODEL COMPONENT ──
function ModelViewer({ url, scale = 1, rotationSpeed = 1, floatIntensity = 2 }: any) {
  const { scene } = useGLTF(url)
  const group = useRef<any>(null)

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

const hobbyItems = [
  {
    id: "headphones",
    name: "Headphones",
    url: "/headphones.glb",
    scale: 1.5,
    description: "Listening to lectures, podcasts, and music.",
    is3D: true
  },
  {
    id: "camera",
    name: "Camera",
    url: "/watch.glb", // Reusing watch.glb as the Camera placeholder
    scale: 1.3,
    description: "Street & nature photography.",
    is3D: true
  },
  {
    id: "sketching",
    name: "Sketching",
    icon: PenTool,
    description: "Doodling and sketching my ideas."
  },
  {
    id: "singing",
    name: "Singing",
    icon: Mic2,
    description: "Practicing vocals and singing."
  },
  {
    id: "philosophy",
    name: "Philosophy",
    icon: HelpCircle,
    description: "Exploring philosophy and traveling to new places."
  },
  {
    id: "retro",
    name: "Retro",
    icon: Clock,
    description: "Researching and collecting antique/retro items."
  }
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="py-24 flex flex-col gap-32">
      {/* ── Favorite Trio: Animal Showcase (Restored) ── */}
      <div className="relative px-4 lg:px-0">
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
              <motion.div key={anim.name} className="group relative flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[4rem] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f7f7f7_60%,_#ececec_100%)] border border-[#F59E9E]/10 shadow-2xl shadow-[#1a0a0a]/[0.08]">
                  <div className="absolute inset-0">
                    <Suspense fallback={<div className="w-full h-full flex items-center justify-center animate-pulse">SYNCING...</div>}>
                      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
                        <OrbitControls enablePan={false} enableZoom={false} makeDefault minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
                        <ModelViewer url={anim.url} scale={anim.scale} rotationSpeed={1.2} floatIntensity={1.5} />
                      </Canvas>
                    </Suspense>
                  </div>
                  <div className="absolute top-8 left-8">
                     <div className="px-4 py-1.5 bg-[#1a0a0a] rounded-full text-white text-[8px] font-black tracking-[0.2em]">{anim.tag}</div>
                  </div>
                  <div className="absolute bottom-10 right-10 flex flex-col items-end pointer-events-none group-hover:translate-y-[-10px] transition-transform duration-500">
                    <span className="text-[10px] font-black text-[#F59E9E]/40 uppercase tracking-[0.4em] mb-1">{anim.name}</span>
                    <h4 className="text-3xl font-black italic text-[#1a0a0a] uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-500">{anim.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hobbies Section (Night Sky Reveal Below) ── */}
      <div className="relative bg-[#000000] rounded-[5rem] min-h-[800px] overflow-hidden p-12 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
        
        {/* Sky Particles */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.2, 1, 0.2] }}
                transition={{ duration: 3 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
                className="absolute w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_8px_white]"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
           ))}
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch h-full">
           
           {/* LEFT: Heading */}
           <div className="flex flex-col justify-center gap-6 self-start lg:sticky lg:top-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-4 border border-white/5 w-fit">
                <Heart size={10} fill="currentColor" stroke="none" />
                The Internal Balance
              </div>
              <h3 className="text-[50px] lg:text-[80px] font-bold italic text-white leading-[0.9] mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                My <br /> <span className="text-[#F59E9E]">Hobbies.</span>
              </h3>
              <p className="text-white/30 text-lg font-inter leading-relaxed max-w-sm">
                I find balance through continuous exploration — from street photography to collecting mechanical antiquities.
              </p>
           </div>

           {/* RIGHT: Interaction Area */}
           <div className="flex flex-col justify-center space-y-24">
              
              {/* 1. 3D Artifacts Row */}
              <div className="grid grid-cols-2 gap-12">
                 {hobbyItems.filter(h => h.is3D).map((h) => (
                    <div key={h.id} className="relative flex flex-col items-center">
                       <div 
                         onMouseEnter={() => setHoveredId(h.id)}
                         onMouseLeave={() => setHoveredId(null)}
                         className="w-[200px] h-[200px] cursor-grab active:cursor-grabbing relative z-20"
                       >
                          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7] }}>
                             <Suspense fallback={null}>
                                <OrbitControls enableZoom={false} enablePan={false} makeDefault />
                                <ModelViewer url={h.url} scale={h.scale} rotationSpeed={1.5} floatIntensity={3} />
                             </Suspense>
                          </Canvas>
                       </div>
                       
                       {/* Disclosure Below */}
                       <AnimatePresence>
                          {hoveredId === h.id && (
                             <motion.div
                               initial={{ opacity: 0, y: -20 }}
                               animate={{ opacity: 1, y: 0 }}
                               exit={{ opacity: 0, y: -20 }}
                               className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[220px] bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-3xl text-center z-30 pointer-events-none"
                             >
                                <span className="text-[10px] text-white/80 font-inter uppercase tracking-widest">{h.description}</span>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 ))}
              </div>

              {/* 2. Floating Icons Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {hobbyItems.filter(h => !h.is3D).map((h) => (
                    <div key={h.id} className="relative flex flex-col items-center group">
                       <div 
                         onMouseEnter={() => setHoveredId(h.id)}
                         onMouseLeave={() => setHoveredId(null)}
                         className="w-16 h-16 rounded-[1.8rem] bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#F59E9E] transition-all duration-500 cursor-pointer shadow-xl"
                       >
                          {h.icon && <h.icon strokeWidth={1} size={28} />}
                       </div>
                       
                       <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-4 group-hover:text-white transition-colors">{h.name}</span>

                       {/* Disclosure Below */}
                       <AnimatePresence>
                          {hoveredId === h.id && (
                             <motion.div
                               initial={{ opacity: 0, y: -10 }}
                               animate={{ opacity: 1, y: 10 }}
                               exit={{ opacity: 0, y: -10 }}
                               className="absolute top-full left-1/2 -translate-x-1/2 w-[180px] bg-[#F59E9E] p-3 rounded-2xl text-center z-30 shadow-2xl pointer-events-none"
                             >
                                <span className="text-[9px] text-[#1a0a0a] font-black uppercase tracking-wider">{h.description}</span>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 ))}
              </div>

           </div>
        </div>

      </div>
    </div>
  )
}
