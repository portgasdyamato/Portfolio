"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Camera, Heart, Star, Mic2, Palette as PenTool, HelpCircle, Clock } from "lucide-react"
import { Suspense, useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function ModelViewer({ url, scale = 1, rotationSpeed = 1, floatIntensity = 1 }: any) {
  const { scene } = useGLTF(url)
  const group = useRef<any>(null)

  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh) {
        const originalMap = child.material.map
        child.material = new THREE.MeshBasicMaterial({ map: originalMap, color: child.material.color })
      }
    })
    const box = new THREE.Box3().setFromObject(scene)
    const center = new THREE.Vector3()
    box.getCenter(center)
    scene.position.sub(center)
  }, [scene])

  useFrame((state: any) => {
    if (!group.current) return
    group.current.rotation.y += 0.005 * rotationSpeed
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 * floatIntensity
  })

  return <group ref={group}><primitive object={scene} scale={scale} /></group>
}

const animals = [
  { name: "Pony", url: "/pony.glb", tag: "3P / SPIRITED", scale: 2.8 },
  { name: "Panda", url: "/panda.glb", tag: "3P / CHILL", scale: 3.2 },
  { name: "Penguin", url: "/penguin.glb", tag: "3P / SOCIAL", scale: 2.8 },
]

const driftingIcons = [
  { id: "sketching", icon: PenTool, x: "35%", y: "8%", dur: 5, delay: 0, desc: "Doodling and sketching my ideas." },
  { id: "singing", icon: Mic2, x: "52%", y: "38%", dur: 6, delay: 1, desc: "Practicing vocals and singing." },
  { id: "philosophy", icon: HelpCircle, x: "42%", y: "62%", dur: 4, delay: 0.5, desc: "Exploring philosophy and new places." },
  { id: "retro", icon: Clock, x: "65%", y: "18%", dur: 7, delay: 0.2, desc: "Collecting antique/retro items." },
]

export default function FunFacts() {
  const [mounted, setMounted] = useState(false)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="py-24 flex flex-col gap-32">

      {/* ── SECTION 1: Favorite Trio ── */}
      <div className="relative px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F59E9E]/10 rounded-full text-[#F59E9E] font-black tracking-widest uppercase text-[9px] mb-6">
              <Star size={10} fill="currentColor" /> The 3P Favorites
            </div>
            <h3 className="text-[45px] sm:text-[65px] font-bold italic text-[#1a0a0a] leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              My Favorite Trio.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-inter">
              Pony, Panda, and Penguin. There's a certain spirit in each that matches my approach to life.
            </p>
          </div>
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {animals.map((anim) => (
              <div key={anim.name} className="relative w-full aspect-[4/5] overflow-hidden rounded-[4rem] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f7f7f7_60%,_#ececec_100%)] border border-[#F59E9E]/10 shadow-2xl">
                <div className="absolute inset-0">
                  <Suspense fallback={null}>
                    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
                      <OrbitControls enablePan={false} enableZoom={false} makeDefault minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
                      <ModelViewer url={anim.url} scale={anim.scale} rotationSpeed={1.2} floatIntensity={1.5} />
                    </Canvas>
                  </Suspense>
                </div>
                <div className="absolute top-8 left-8">
                  <div className="px-4 py-1.5 bg-[#1a0a0a] rounded-full text-white text-[8px] font-black tracking-[0.2em]">{anim.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 2: Hobbies Galaxy ── */}
      {/*
        LAYOUT STRATEGY:
        - Outer container: position=relative, overflow=hidden, fixed height
        - Row 1 (heading + camera): normal flow, sits at top via padding
        - Row 2 (headphones + icons): absolutely positioned in the LOWER HALF
          using top: 48%, so it never depends on Row 1's dynamic height.
          This guarantees it stays fully inside bounds.
      */}
      <div className="relative bg-[#000000] rounded-[5rem] h-[90vh] overflow-hidden px-8 lg:px-24 pt-20 lg:pt-24 pb-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] text-white">

        {/* Starfield */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {[...Array(120)].map((_, i) => (
            <motion.div key={i} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }} className="absolute w-[1px] h-[1px] bg-white rounded-full" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(245,158,158,0.03)_0%,_transparent_70%)] pointer-events-none" />

        {/* ── ROW 1: Heading + Camera (top zone, normal flow) ── */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-start gap-10 lg:gap-20">
          {/* Col 1: Text */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[#F59E9E] font-black tracking-[0.2em] uppercase text-[8px] border border-white/5 w-fit">
              <Heart size={8} fill="currentColor" strokeWidth={0} /> The Internal Balance
            </div>
            <h3 className="text-[45px] lg:text-[70px] font-bold italic text-white leading-[0.8]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              My <span className="text-[#F59E9E]">Hobbies.</span>
            </h3>
            <p className="text-white/30 text-base lg:text-lg font-inter leading-relaxed max-w-xl">
              Finding focus through simple pleasures — from the rhythm of capturing light to the morning espresso that fuels it all.
            </p>
          </div>

          {/* Col 2: Camera */}
          <div className="relative w-full h-[300px] lg:h-[420px] overflow-visible z-20">
            <div onMouseEnter={() => setHoveredId('camera')} onMouseLeave={() => setHoveredId(null)} className="absolute w-[500px] h-[520px] -top-[140px] left-[60%] -translate-x-1/2 cursor-grab active:cursor-grabbing">
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }} style={{ overflow: 'visible' }}>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} enablePan={false} makeDefault />
                  <ModelViewer url="/camera.glb" scale={7.0} rotationSpeed={-1.2} floatIntensity={1.5} />
                </Suspense>
              </Canvas>
              <AnimatePresence>
                {hoveredId === 'camera' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[240px] bg-black/80 border border-white/10 backdrop-blur-3xl p-4 rounded-3xl text-center z-50 pointer-events-none shadow-2xl">
                    <span className="text-[10px] text-[#F59E9E] font-black uppercase tracking-widest">Street & nature photography.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── ROW 2: Headphones + Icons (absolutely in bottom half, top: 46%) ── */}
        <div className="absolute inset-x-0 z-20" style={{ top: '46%', bottom: 0 }}>

          {/* Headphones (scale 7.0, left side) */}
          <div className="absolute top-0 left-[-10%] lg:left-[-5%] w-[500px] h-[500px] overflow-visible">
            <div onMouseEnter={() => setHoveredId('headphones')} onMouseLeave={() => setHoveredId(null)} className="w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8] }} style={{ overflow: 'visible' }}>
                <Suspense fallback={null}>
                  <OrbitControls enableZoom={false} enablePan={false} makeDefault />
                  <ModelViewer url="/headphones.glb" scale={7.0} rotationSpeed={1.5} floatIntensity={1.0} />
                </Suspense>
              </Canvas>
            </div>
            <AnimatePresence>
              {hoveredId === 'headphones' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-[-18%] left-1/2 -translate-x-1/2 w-[240px] bg-black/80 border border-white/10 backdrop-blur-3xl p-4 rounded-3xl text-center z-50 pointer-events-none shadow-2xl">
                  <span className="text-[10px] text-[#F59E9E] font-black uppercase tracking-widest">Listening to lectures, podcasts, and music.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Drifting Icons */}
          {driftingIcons.map((h) => (
            <div key={h.id} className="absolute z-20" style={{ left: h.x, top: h.y }}>
              <motion.div animate={{ y: [0, 12, 0], x: [0, 8, 0] }} transition={{ duration: h.dur, repeat: Infinity, delay: h.delay }} onMouseEnter={() => setHoveredId(h.id)} onMouseLeave={() => setHoveredId(null)} className="group relative flex flex-col items-center">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#F59E9E] transition-all duration-700 cursor-pointer shadow-lg">
                  <h.icon strokeWidth={1} size={24} />
                </div>
                <span className="text-[7px] font-black uppercase tracking-[0.2em] text-white/20 mt-2 group-hover:text-white transition-colors">{h.id}</span>
                <AnimatePresence>
                  {hoveredId === h.id && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute bottom-[130%] left-1/2 -translate-x-1/2 w-[180px] bg-[#F59E9E] p-3 rounded-2xl text-center z-50 pointer-events-none shadow-2xl">
                      <span className="text-[8px] text-[#1a0a0a] font-black uppercase tracking-wider leading-tight">{h.desc}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
