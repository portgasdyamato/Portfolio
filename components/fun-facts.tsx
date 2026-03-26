"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Music, Camera, Coffee, Heart, Star, Mic2, Palette as PenTool, Headphones as HeadphoneIcon } from "lucide-react"
import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Center, Environment } from "@react-three/drei"
import * as THREE from "three"

// ── 3D MODEL COMPONENT (Shared) ──
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
    name: "Podcasts & Singing",
    url: "/headphones.glb",
    icon: HeadphoneIcon,
    tag: "THE_RHYTHM",
    scale: 2.2,
    description: "Deep diving into podcasts and expressing my soul through singing. Audio is my domain expansion.",
    stats: { focus: "98%", vibe: "Sonic", sessions: "Daily" }
  },
  {
    id: "camera",
    name: "Photography",
    url: "/camera.glb", // Assuming camera.glb exists
    icon: Camera,
    tag: "OPTIC_SOUL",
    scale: 1.8,
    description: "Capturing the world through a lens. Finding beauty in the mundane and the extraordinary.",
    stats: { focus: "High", lens: "35mm", shots: "Infinite" }
  },
  {
    id: "coffee",
    name: "Caffeine Fuel",
    icon: Coffee,
    tag: "ENERGY_CORE",
    description: "The morning espresso that fuels my design sprints and creative brainstorming.",
    stats: { roast: "Dark", energy: "100%", cups: "2-3" }
  },
  {
    id: "sketching",
    name: "Sketching",
    icon: PenTool,
    tag: "VISUAL_LOG",
    description: "Visualizing thoughts before they become pixels. Doodling is my way of journaling.",
    stats: { medium: "Ink", flow: "Steady", ideation: "Fast" }
  }
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
  const [hoveredHobby, setHoveredHobby] = useState<any>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="py-24 flex flex-col gap-32">
      {/* ── Favorite Trio: Animal Showcase (Kept for completeness) ── */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 px-4 md:px-0">
         {/* ... (Previous Animals Logic Kept for consistent page structure) ... */}
         {/* (Simplified version for focus on Hobbies) */}
         <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-widest uppercase text-[9px] mb-6">
               <Star size={10} fill="currentColor" />
               The 3P Favorites
            </div>
            <h3 className="text-[45px] sm:text-[60px] font-bold italic text-[#1a0a0a] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              My Soul Animals.
            </h3>
         </div>
         <div className="flex-1 w-full grid grid-cols-3 gap-4">
            {["Pony", "Panda", "Penguin"].map((name, i) => (
               <div key={name} className="aspect-square rounded-[3rem] bg-[#f7f7f7] border border-black/5 flex items-center justify-center font-black italic text-black/10 text-2xl uppercase tracking-tighter">
                  {name}
               </div>
            ))}
         </div>
      </div>

      {/* ── THE HOBBIES GALAXY: NIGHT SKY ── */}
      <div className="relative bg-[#000000] rounded-[5rem] min-h-[900px] overflow-hidden p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
        
        {/* Starfield & Nebula */}
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
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#F59E9E]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch h-full">
           
           {/* 1. LEFT COLUMN: HEADING & INTRO */}
           <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[9px] mb-8 border border-white/5 backdrop-blur-md">
                <Heart size={10} fill="currentColor" stroke="none" />
                The Internal Balance
              </div>
              <h3 className="text-[50px] md:text-[80px] font-bold italic text-white leading-[0.9] mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Crafting <br /> <span className="text-[#F59E9E]">Hobbies.</span>
              </h3>
              <p className="text-white/40 text-lg font-inter leading-relaxed max-w-sm">
                Beyond the screen, I find balance in these rituals — from mechanical antiques to the perfect shot.
              </p>
           </div>

           {/* 2. CENTER: THE 3D STAGE (FREE FLOATING) */}
           <div className="relative flex items-center justify-center min-h-[500px]">
              {/* Headphones Stage */}
              <div 
                 className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] cursor-grab active:cursor-grabbing z-20 group"
                 onMouseEnter={() => setHoveredHobby(hobbyData[0])}
              >
                 <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }}>
                    <Suspense fallback={null}>
                       <OrbitControls enableZoom={false} enablePan={false} makeDefault minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.5} />
                       <ModelViewer url="/headphones.glb" scale={1.8} rotationSpeed={1.5} floatIntensity={3} />
                    </Suspense>
                 </Canvas>
              </div>

              {/* Camera Stage (Placeholder for interactible) */}
              <div 
                 className="absolute bottom-[10%] right-[-10%] w-[320px] h-[320px] cursor-grab active:cursor-grabbing z-20 group"
                 onMouseEnter={() => setHoveredHobby(hobbyData[1])}
              >
                 <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }}>
                    <Suspense fallback={null}>
                       <OrbitControls enableZoom={false} enablePan={false} makeDefault minPolarAngle={Math.PI/3} maxPolarAngle={Math.PI/1.5} />
                       <ModelViewer url="/camera.glb" scale={1.5} rotationSpeed={-1.2} floatIntensity={4} />
                    </Suspense>
                 </Canvas>
              </div>
              
              {/* Central Floating Icons at bottom */}
              <div className="absolute bottom-0 inset-x-0 flex justify-center gap-12 pb-10">
                 {hobbyData.slice(2).map((h, i) => (
                    <motion.button
                       key={h.id}
                       onMouseEnter={() => setHoveredHobby(h)}
                       animate={{ y: [0, 10, 0] }}
                       transition={{ duration: 4 + i, repeat: Infinity }}
                       className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#F59E9E] transition-all duration-500 hover:scale-110"
                    >
                       <h.icon strokeWidth={1} size={28} />
                    </motion.button>
                 ))}
              </div>
           </div>

           {/* 3. RIGHT COLUMN: FEATURE AREA (DYNAMIC CONTENT) */}
           <div className="relative flex flex-col bg-white/[0.03] rounded-[4rem] border border-white/5 overflow-hidden backdrop-blur-3xl p-12 lg:p-16 self-center h-fit min-h-[650px] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(245,158,158,0.06)_0%,_transparent_60%)] pointer-events-none" />
              
              <AnimatePresence mode="wait">
                 {hoveredHobby ? (
                    <motion.div 
                       key={hoveredHobby.id}
                       initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                       animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                       exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                       transition={{ duration: 0.6, ease: "circOut" }}
                       className="relative h-full flex flex-col"
                    >
                       <div className="flex justify-between items-start mb-8">
                          <div className="flex flex-col gap-2">
                             <span className="text-[9px] font-black tracking-[0.6em] text-[#F59E9E] uppercase">{hoveredHobby.tag}</span>
                             <h4 className="text-[45px] font-black italic text-white uppercase leading-none tracking-tighter">{hoveredHobby.name}</h4>
                          </div>
                          <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                             <hoveredHobby.icon size={22} className="text-white/20" />
                          </div>
                       </div>

                       {/* Large Showcase Model */}
                       {hoveredHobby.url && (
                          <div className="flex-1 relative min-h-[300px] mb-10 translate-x-4">
                             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }}>
                                <Suspense fallback={null}>
                                   <OrbitControls enableZoom={false} enablePan={false} makeDefault />
                                   <ModelViewer url={hoveredHobby.url} scale={hoveredHobby.scale * 1.5} rotationSpeed={2} floatIntensity={0} autoRotate={false} />
                                </Suspense>
                             </Canvas>
                          </div>
                       )}

                       <div className="mt-auto space-y-10">
                          <p className="text-lg text-white/50 font-inter leading-relaxed italic uppercase tracking-tight border-l-2 border-[#F59E9E] pl-6 py-2">
                             {hoveredHobby.description}
                          </p>

                          <div className="grid grid-cols-3 gap-6">
                             {Object.entries(hoveredHobby.stats).map(([key, val]: any) => (
                                <div key={key} className="flex flex-col gap-1">
                                   <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#F59E9E]/40">{key}</span>
                                   <span className="text-sm font-black text-white italic tracking-tighter uppercase">{val}</span>
                                </div>
                             ))}
                          </div>
                       </div>
                    </motion.div>
                 ) : (
                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="h-full flex flex-col items-center justify-center text-center space-y-4"
                    >
                       <div className="w-1 w-1 bg-[#F59E9E] rounded-full animate-ping mb-6" />
                       <span className="text-[10px] font-black tracking-[0.6em] text-white/20 uppercase">Awaiting_Interaction</span>
                       <p className="text-white/10 text-[11px] uppercase tracking-widest font-mono">Hover over an artifact to expand knowledge.</p>
                    </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>

      </div>
    </div>
  )
}
