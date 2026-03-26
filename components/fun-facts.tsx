"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Music, Camera, Coffee, Heart, Star, Mic2, MapPin, Headphones as HeadphoneIcon, Search, Palette as PenTool, Brain, Clock, HelpCircle } from "lucide-react"
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

const hobbyData = [
  {
    id: "headphones",
    name: "Podcasts & Singing",
    url: "/headphones.glb",
    icon: HeadphoneIcon,
    tag: "THE_RHYTHM",
    scale: 2.8,
    description: "Deep diving into podcasts and expressing my soul through singing. Audio is my domain expansion.",
    activities: ["Vocal Soul / Singing", "Podcasts / Domain Expansion"]
  },
  {
    id: "camera",
    name: "Photography",
    url: "/watch.glb", // Reusing watch.glb for photography item as capture of beauty
    icon: Camera,
    tag: "OPTIC_SOUL",
    scale: 2.2,
    description: "Capturing the world through a lens. Finding beauty in the mundane and the extraordinary.",
    activities: ["Light Capture / Travel", "Visual Documentation"]
  }
]

const floatingHobbies = [
  { icon: Coffee, text: "Caffeine", sub: "Espresso Shots", x: "10%", y: "75%" },
  { icon: PenTool, text: "Sketching", sub: "Visual Journal", x: "35%", y: "82%" },
  { icon: HelpCircle, text: "Philosophy", sub: "Asking Why", x: "60%", y: "78%" },
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
  const [hoveredHobby, setHoveredHobby] = useState<any>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="py-24 flex flex-col gap-32">
      {/* ── Favorite Trio: 3D Animal Showcase (RESTORED TO ORIGINAL FULL STATE) ── */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-4 md:px-0">
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
                    <h4 className="text-3xl font-black italic text-[#1a0a0a] uppercase tracking-tighter opacity-10 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-right">
                      {anim.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Life Outside: Hobbies Galaxy (Pure Background Interactivity) ── */}
      <div className="relative bg-[#000000] rounded-[5rem] min-h-[900px] overflow-hidden p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
        
        {/* Particle Sky Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.2, 1, 0.2] }}
                transition={{ duration: 2 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5 }}
                className="absolute w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_8px_white]"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
           ))}
        </div>
        <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-[#F59E9E]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch h-full">
           
           {/* LEFT: Heading & Floating 3D Interactions */}
           <div className="flex flex-col justify-center gap-12 relative h-full">
              <div>
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-8 border border-white/5 backdrop-blur-md">
                   <Heart size={10} fill="currentColor" stroke="none" />
                   The Internal Balance
                 </div>
                 <h3 className="text-[50px] md:text-[80px] font-bold italic text-white leading-[0.9] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                   Hobbies <br /> <span className="text-[#F59E9E]">& Artifacts.</span>
                 </h3>
                 <p className="text-white/30 text-lg font-inter leading-relaxed max-w-sm">
                   Interaction is discovery. Hover over my artifacts to reveal the rituals behind them.
                 </p>
              </div>

              {/* FLOATING 3D STAGE - HEADPHONES & WATCH */}
              <div className="relative h-[400px] w-full mt-10">
                 {/* Headphones Float */}
                 <div 
                   onMouseEnter={() => setHoveredHobby(hobbyData[0])}
                   className="absolute top-[0%] left-[5%] w-[250px] h-[250px] cursor-grab active:cursor-grabbing z-20"
                 >
                    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7] }}>
                       <Suspense fallback={null}>
                          <OrbitControls enableZoom enablePan={false} makeDefault minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.5} />
                          <ModelViewer url="/headphones.glb" scale={1.2} rotationSpeed={1.5} floatIntensity={3} />
                       </Suspense>
                    </Canvas>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[90%] font-black tracking-[0.4em] text-white/20 uppercase pointer-events-none">THE_AUDIO</div>
                 </div>

                 {/* Watch Float */}
                 <div 
                   onMouseEnter={() => setHoveredHobby(hobbyData[1])}
                   className="absolute bottom-[0%] left-[40%] w-[220px] h-[220px] cursor-grab active:cursor-grabbing z-20"
                 >
                    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7] }}>
                       <Suspense fallback={null}>
                          <OrbitControls enableZoom enablePan={false} makeDefault />
                          <ModelViewer url="/watch.glb" scale={1.2} rotationSpeed={-1.2} floatIntensity={4} />
                       </Suspense>
                    </Canvas>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[90%] font-black tracking-[0.4em] text-white/20 uppercase pointer-events-none">THE_CAPTURE</div>
                 </div>
              </div>

              {/* BOTTOM FLOATING ICONS */}
              <div className="relative h-[150px] mt-auto">
                 {floatingHobbies.map((h, i) => (
                    <motion.div
                       key={h.text}
                       onMouseEnter={() => setHoveredHobby(hobbyData.find(item => item.id === h.text.toLowerCase()) || { name: h.text, description: h.sub, activities: ["Ritual Routine"], tag: "HOBBY", icon: h.icon, stats: [] })}
                       animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
                       transition={{ duration: 4 + i, repeat: Infinity }}
                       className="absolute flex flex-col items-center gap-2 group cursor-pointer"
                       style={{ left: h.x, top: h.y }}
                    >
                       <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#F59E9E] transition-all duration-500">
                          <h.icon strokeWidth={1} size={24} />
                       </div>
                       <span className="text-[7px] font-black uppercase tracking-widest text-white/20">{h.text}</span>
                    </motion.div>
                 ))}
              </div>
           </div>

           {/* RIGHT: High-End Feature Area (Content Detail) */}
           <div className="relative flex flex-col justify-center bg-white/[0.02] rounded-[4rem] border border-white/5 backdrop-blur-3xl p-12 lg:p-16 min-h-[600px] self-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(245,158,158,0.05)_0%,_transparent_60%)] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                 {hoveredHobby ? (
                    <motion.div 
                       key={hoveredHobby.id || hoveredHobby.name}
                       initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                       animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                       exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                       transition={{ duration: 0.5 }}
                       className="relative z-10 h-full flex flex-col"
                    >
                       <div className="flex flex-col gap-6">
                          <span className="text-[10px] font-black tracking-[0.8em] text-[#F59E9E] uppercase">{hoveredHobby.tag}</span>
                          <h4 className="text-[50px] lg:text-[70px] font-black italic text-white uppercase leading-none tracking-tighter">{hoveredHobby.name}</h4>
                          <div className="h-0.5 w-20 bg-[#F59E9E]" />
                       </div>

                       {hoveredHobby.url && (
                          <div className="h-[250px] mt-10">
                            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7] }}>
                               <Suspense fallback={null}>
                                  <OrbitControls enableZoom={false} enablePan={false} makeDefault />
                                  <ModelViewer url={hoveredHobby.url} scale={hoveredHobby.scale * 1.5} rotationSpeed={2.5} floatIntensity={0} />
                               </Suspense>
                            </Canvas>
                          </div>
                       )}

                       <div className="mt-12 space-y-8">
                          <p className="text-xl text-white/50 leading-relaxed font-inter italic uppercase tracking-tight">
                             {hoveredHobby.description}
                          </p>
                          <div className="flex flex-wrap gap-4">
                             {hoveredHobby.activities?.map((act: string) => (
                                <div key={act} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] text-white font-black uppercase tracking-widest transition-colors hover:border-[#F59E9E]">
                                   {act}
                                </div>
                             ))}
                          </div>
                       </div>
                    </motion.div>
                 ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center text-center space-y-6">
                       <span className="text-[10px] font-black tracking-[0.6em] text-white/20 uppercase">Awaiting_Exploration</span>
                       <div className="w-12 h-0.5 bg-white/5" />
                       <p className="max-w-[200px] text-[10px] text-white/10 uppercase tracking-[0.3em] font-mono">Hover over my rituals to expand the timeline.</p>
                    </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

      </div>
    </div>
  )
}
