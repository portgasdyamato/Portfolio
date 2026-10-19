"use client"

import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValueEvent, MotionValue } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { BookOpen, GraduationCap, Star, Award, MapPin, Calendar, X, Briefcase } from "lucide-react"
import { FolderCard } from "./folder-card"
import { FolderCoverDesign, type FolderStage } from "./folder-cover"

const educationJourney = [
  {
    stage: 'middle' as FolderStage,
    level: "Middle School",
    institution: "Govt Co-ed Sr. Sec. School",
    duration: "2015-2018",
    date: "March 2015-18",
    icon: BookOpen,
    color: "from-brand-400 to-brand-600",
    gpa: "87%",
    description: "Built foundational curiosity in science, logic, and coding with competitive distinction.",
    achievements: ["Dell Coding Camp", "Science Fair Winner", "Skit Contest (2nd)", "Choir & Music Lead"],
  },
  {
    stage: 'secondary' as FolderStage,
    level: "Secondary School",
    institution: "School of Excellence, Delhi",
    duration: "2018-2020",
    date: "March 2018-20",
    icon: BookOpen,
    color: "from-brand-500 to-brand-700",
    gpa: "86%",
    description: "Strong foundation in science and tech. Selected for international cross-cultural exchange.",
    achievements: ["US-India Exchange", "Choir Group Lead", "Classical Singing", "Science Club Member"],
  },
  {
    stage: 'highschool' as FolderStage,
    level: "High School Graduation",
    institution: "School of Excellence, Delhi",
    duration: "2020-2022",
    date: "Graduated 2022",
    icon: Star,
    color: "from-brand-400 to-brand-600",
    gpa: "82% (92/100 CS)",
    description: "Top 10% entrance rank (80/800). Specialized in Computer Science, Math, and Physics.",
    achievements: ["Top 10% Rank (80/800)", "92/100 in Comp Sci", "Punctuality Award", "Library System Dev", "Choir Group Lead", "Science Club Leader"],
  },
  {
    stage: 'btech' as FolderStage,
    level: "B.Tech Computer Science",
    institution: "Dr. A.P.J. AKTU, Lucknow",
    duration: "2022-2026",
    date: "Class of 2026",
    icon: GraduationCap,
    color: "from-brand-500 to-brand-700",
    gpa: "First Class (8.54 GPA)",
    description: "Core focus on DBMS, Web Tech, Algorithms & AI, bridging design with production code.",
    achievements: ["UI/UX Solvathon (1st)", "Harvard Aspire Scholar", "SheFi Scholar (USA)", "State TechFest (2nd)", "24h Hackathon (2nd)", "First Class Honours"],
  },
  {
    stage: 'growth' as FolderStage,
    level: "Professional Growth",
    institution: "IIT Delhi · Red Hat · Industry",
    duration: "2024 - Present",
    date: "Active Roles",
    icon: Briefcase,
    color: "from-brand-400 to-brand-600",
    gpa: "Industry Pro",
    description: "Spearheading UX research at IIT Delhi, modernizing Podman at Red Hat, and training 70+ pros.",
    achievements: [
        "DIVINE Lab (IIT Delhi)",
        "Red Hat (LFX Mentee)",
        "Ozone AI Workshop Lead",
        "UX Collective Author",
        "BrightChamps Instructor",
        "OpenSphere Designer",
        "Cubble UI/UX Designer",
        "Global Mentorship Scholar"
    ],
  }
]

function FolderTimelineItem({ item, index, drawProgress, totalItems, isMobile }: { item: typeof educationJourney[0], index: number, drawProgress: MotionValue<number>, totalItems: number, isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.2, once: false });
  const [hasReached, setHasReached] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useMotionValueEvent(drawProgress, "change", (latest) => {
    const triggerPoint = totalItems > 1 ? index / (totalItems - 1) : 0;
    if (latest >= triggerPoint && !hasReached) {
      setHasReached(true);
    } else if (latest < triggerPoint && hasReached) {
      setHasReached(false);
    }
  });
  
  const isEven = index % 2 === 0;
  const direction = isEven ? 'ltr' : 'rtl';

  return (
    <div ref={ref} className={`relative z-10 w-full max-w-sm mx-auto ${isEven ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: isEven ? -30 : 30, rotateZ: isEven ? -10 : 15 },
          visible: { opacity: 1, x: 0, rotateZ: isEven ? -4 : 8 }
        }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className={isEven ? 'origin-bottom-left flex justify-center md:justify-start' : 'origin-bottom-right flex justify-center md:justify-end'}
      >
        <div 
          className="relative w-[220px] h-[298px] sm:w-[280px] sm:h-[380px] flex items-center justify-center shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute w-[280px] h-[380px] origin-center z-10 education-folder-scale">
            <AnimatePresence>
              {hasReached && !isHovered && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 -m-6 rounded-[2.5rem] bg-[#F59E9E]/10 blur-2xl pointer-events-none -translate-x-3"
                />
              )}
            </AnimatePresence>
            <div className="relative z-10 w-full h-full">
              <FolderCard 
                items={[item]} 
                currentIndex={0}
                onNext={() => {}}
                onPrev={() => {}}
                direction={direction}
                coverNode={<FolderCoverDesign stage={item.stage} direction={direction} />}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the exact Y fractions where the first and last folders are placed.
  const firstFolderY = 0.5 / educationJourney.length;
  const lastFolderY = (educationJourney.length - 0.5) / educationJourney.length;

  // Map scroll progress so the line starts drawing EXACTLY when the first folder hits the center,
  // and finishes EXACTLY when the last folder hits the center.
  const drawProgress = useTransform(
    scrollYProgress,
    [firstFolderY, lastFolderY],
    [0, 1]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        const target = entry.target as HTMLElement;
        setDimensions({
          width: target.offsetWidth,
          height: target.offsetHeight
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const pathPoints = educationJourney.map((_, i) => {
    const isMobile = dimensions.width < 768; // standard md breakpoint
    // On md and above, padding is px-24 (96px). Folder is 280px wide. Center is 140px.
    const mdPadding = 96;
    const folderCenterOffset = 140;
    const xOffset = mdPadding + folderCenterOffset; // 236
    
    const x = isMobile 
      ? dimensions.width * 0.5 
      : (i % 2 === 0 ? xOffset : dimensions.width - xOffset);
    const y = (i + 0.5) * (dimensions.height / educationJourney.length);
    return { x, y };
  });
  
  // Create smooth S-curves between checkpoints instead of rigid diagonal lines
  let pathD = "";
  if (dimensions.width > 0 && pathPoints.length > 0) {
    pathD = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
    for (let i = 0; i < pathPoints.length - 1; i++) {
      const p0 = pathPoints[i];
      const p1 = pathPoints[i + 1];
      const midY = (p0.y + p1.y) / 2;
      pathD += ` C ${p0.x} ${midY}, ${p1.x} ${midY}, ${p1.x} ${p1.y}`;
    }
  }

  return (
    <div className="py-16 sm:py-20 md:py-28 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[40px] md:text-[60px] lg:text-[70px] font-bold italic text-[#1a0a0a] leading-[1] tracking-tighter"
          >
            Some clues about <span className="text-[#F59E9E]">me.</span>
          </motion.h2>
          
          {/* Delicate hand-crafted curved underline */}
          <div className="relative w-36 sm:w-44 h-3 mx-auto mt-3">
            <svg viewBox="0 0 160 12" fill="none" className="w-full h-full overflow-visible">
              <motion.path 
                d="M 6 7 C 45 2, 95 10, 154 5"
                stroke="#F59E9E"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />
            </svg>
          </div>
        </div>

        <div ref={containerRef} className="relative flex flex-col gap-20 sm:gap-24 md:gap-40 py-10 px-0 sm:px-4 md:px-24">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {dimensions.width > 0 && (
              <>
                {/* Background faint guide trail */}
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d={pathD}
                    fill="none"
                    stroke="#1a0a0a"
                    strokeOpacity="0.12"
                    strokeWidth="4"
                    strokeDasharray="6 9"
                    strokeLinecap="round"
                  />
                  {/* Waypoint beads */}
                  {pathPoints.map((pt, idx) => (
                    <circle 
                      key={idx} 
                      cx={pt.x} 
                      cy={pt.y} 
                      r="6" 
                      fill="#FFFDF9" 
                      stroke="#1a0a0a" 
                      strokeOpacity="0.2" 
                      strokeWidth="2.5" 
                    />
                  ))}
                </svg>
                
                {/* Animated active journey trail */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full">
                    <motion.path 
                      d={pathD}
                      fill="none"
                      stroke="#F59E9E"
                      strokeWidth="5.5"
                      strokeDasharray="8 8"
                      strokeLinecap="round"
                      style={{ pathLength: drawProgress }}
                    />
                  </svg>
                </div>
              </>
            )}
          </div>

          {educationJourney.map((item, index) => (
            <FolderTimelineItem key={index} item={item} index={index} drawProgress={drawProgress} totalItems={educationJourney.length} isMobile={dimensions.width > 0 && dimensions.width < 768} />
          ))}
        </div>
      </div>
    </div>
  )
}
