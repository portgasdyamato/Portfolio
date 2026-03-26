"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Camera, Coffee, Heart, Star, Palette as PenTool, Headphones as HeadphoneIcon } from "lucide-react"
import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Center } from "@react-three/drei"
import * as THREE from "three"

// ── 3D MODEL COMPONENT (No Container, Free Floating) ──
function ModelViewer({ url, scale = 1, rotationSpeed = 1, floatIntensity = 2, autoRotate = true }: any) {
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
    if (autoRotate) group.current.rotation.y += 0.005 * rotationSpeed
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.2 * floatIntensity
  })

  return (
    <group ref={group}>
       <primitive object={scene} scale={scale} />
    </group>
  )
}

const hobbyData = [
  {
    id: "headphones",
    name: "Headphones",
    url: "/headphones.glb",
    icon: HeadphoneIcon,
    tag: "3P / THE_RHYTHM",
    scale: 2.2,
    description: "Finding focus through immersive audio — from sonic depth to vocal power.",
    stats: { focus: "Deep", mode: "Pure", utility: "Daily" }
  },
  {
    id: "camera",
    name: "Photography",
    url: "/camera.glb",
    icon: Camera,
    tag: "3P / OPTIC_VISION",
    scale: 1.8,
    description: "The art of chasing light and preserving moments that words can't capture.",
    stats: { lens: "35mm", focus: "Manual", light: "Natural" }
  },
  {
    id: "coffee",
    name: "Caffeine",
    icon: Coffee,
    tag: "3P / ENERGY",
    description: "The fuel behind late-night design sprints and abstract ideas.",
    stats: { roast: "Dark", boost: "High", craft: "Drip" }
  },
  {
    id: "sketching",
    name: "Sketching",
    icon: PenTool,
    tag: "3P / JOURNAL",
    description: "Translating abstract thoughts into messy, meaningful ink on paper.",
    stats: { medium: "Ink", flow: "Loose", craft: "Free" }
  }
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
  const [hoveredHobby, setHoveredHobby] = useState<any>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="py-24 flex flex-col gap-32">
      {/* ── Favorite Trio: Animal Showcase (Simplified) ── */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
         <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-widest uppercase text-[9px] mb-6">
               <Star size={10} fill="currentColor" />
               The 3P Favorites
            </div>
            <h3 className="text-[45px] sm:text-[60px] font-bold italic text-[#1a0a0a] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              My Soul Animals.
            </h3>
         </div>
         <div className="flex-1 w-full grid grid-cols-3 gap-8">
            {["Pony", "Panda", "Penguin"].map((name) => (
               <div key={name} className="aspect-[4/5] rounded-[3rem] bg-[#f7f7f7] border border-black/5 flex items-center justify-center font-black italic text-black/5 uppercase tracking-tighter text-3xl">
                  {name}
               </div>
            ))}
         </div>
      </div>

      {/* ── THE NIGHT SKY: 2-COLUMN FEATURE ── */}
      <div className="relative bg-[#000000] rounded-[5rem] min-h-[850px] overflow-hidden p-12 lg:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Particle/Starfield Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
           {[...Array(80)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.2, 1, 0.2] }}
                transition={{ duration: 2 + Math.random() * 8, repeat: Infinity }}
                className="absolute w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_8px_white]"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              />
           ))}
        </div>

        {/* ── COLUMN 1: INTERACTIVE STAGE ── */}
        <div className="relative z-10 h-full flex flex-col justify-center">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-8 border border-white/5 backdrop-blur-md w-fit">
             <Heart size={10} fill="currentColor" stroke="none" />
             The Internal Balance
           </div>
           
           <h3 className="text-[50px] md:text-[80px] font-bold italic text-white leading-[0.9] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
             My World <br /> <span className="text-[#F59E9E]">At Rest.</span>
           </h3>

           {/* Free Floating 3D Models (No Boxes) */}
           <div className="relative h-[450px] w-full">
              {/* Headphones Stage */}
              <div 
                 className="absolute top-[0%] left-[-5%] w-[320px] h-[320px] cursor-grab active:cursor-grabbing z-20"
                 onMouseEnter={() => setHoveredHobby(hobbyData[0])}
              >
                 <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7] }}>
                    <Suspense fallback={null}>
                       <OrbitControls enableZoom={false} enablePan={false} makeDefault minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.5} />
                       <ModelViewer url="/headphones.glb" scale={2.5} rotationSpeed={1.5} floatIntensity={3} />
                    </Suspense>
                 </Canvas>
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[7px] text-white/20 font-black tracking-[0.5em] uppercase pointer-events-none">THE_AUDIO_PIECE</div>
              </div>

              {/* Camera Stage */}
              <div 
                 className="absolute bottom-[0%] right-[5%] w-[320px] h-[320px] cursor-grab active:cursor-grabbing z-20"
                 onMouseEnter={() => setHoveredHobby(hobbyData[1])}
              >
                 <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7] }}>
                    <Suspense fallback={null}>
                       <OrbitControls enableZoom={false} enablePan={false} makeDefault minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.5} />
                       <ModelViewer url="/camera.glb" scale={2} rotationSpeed={-1.2} floatIntensity={4} />
                    </Suspense>
                 </Canvas>
                 <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[7px] text-white/20 font-black tracking-[0.5em] uppercase pointer-events-none">THE_OPTIC_ITEM</div>
              </div>

              {/* Central Floating Icons */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6">
                 {hobbyData.slice(2).map((h, i) => (
                    <motion.button
                       key={h.id}
                       onMouseEnter={() => setHoveredHobby(h)}
                       animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                       transition={{ duration: 5 + i, repeat: Infinity }}
                       className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#F59E9E] transition-all duration-500"
                    >
                       <h.icon strokeWidth={1} size={24} />
                    </motion.button>
                 ))}
              </div>
           </div>
        </div>

        {/* ── COLUMN 2: FEATURE AREA (DYNAMIC) ── */}
        <div className="relative z-10 h-full flex items-center justify-center">
           <AnimatePresence mode="wait">
              {hoveredHobby ? (
                 <motion.div 
                    key={hoveredHobby.id}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="w-full max-w-lg bg-white/[0.03] backdrop-blur-3xl rounded-[4rem] border border-white/10 p-12 lg:p-16 relative overflow-hidden shadow-2xl"
                 >
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F59E9E]/10 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="relative flex flex-col">
                       <span className="text-[10px] font-black tracking-[0.5em] text-[#F59E9E] uppercase mb-4">{hoveredHobby.tag}</span>
                       <h4 className="text-[55px] font-black italic text-white uppercase leading-none tracking-tighter mb-10">{hoveredHobby.name}</h4>

                       {/* Large Feature 3D Centerpiece */}
                       {hoveredHobby.url && (
                          <div className="h-[350px] w-full mb-10">
                             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }}>
                                <Suspense fallback={null}>
                                   <OrbitControls enableZoom={false} enablePan={false} makeDefault />
                                   <ModelViewer url={hoveredHobby.url} scale={hoveredHobby.scale * 1.6} rotationSpeed={1.5} floatIntensity={0} autoRotate={false} />
                                </Suspense>
                             </Canvas>
                          </div>
                       )}

                       <div className="space-y-8">
                          <p className="text-xl text-white/50 font-inter leading-relaxed italic border-l-2 border-[#F59E9E] pl-6 uppercase tracking-tight">
                             {hoveredHobby.description}
                          </p>

                          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                             {Object.entries(hoveredHobby.stats).map(([k, v]: any) => (
                                <div key={k} className="flex flex-col gap-1">
                                   <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F59E9E]/40">{k}</span>
                                   <span className="text-xs font-black text-white uppercase tracking-widest italic">{v}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>
                 </motion.div>
              ) : (
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    className="text-center group"
                 >
                    <div className="w-1.5 h-1.5 bg-[#F59E9E] rounded-full mx-auto mb-8 animate-ping" />
                    <span className="text-[11px] font-black tracking-[0.8em] text-white uppercase block">Explore_Artifacts</span>
                    <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] mt-4 font-mono group-hover:text-white/40 transition-colors">Hover an icon or 3D model to expand</p>
                 </motion.div>
              )}
           </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
