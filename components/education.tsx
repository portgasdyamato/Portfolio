"use client"

import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValueEvent, MotionValue } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { BookOpen, GraduationCap, Star, Award, MapPin, Calendar, X, Briefcase } from "lucide-react"
import { FolderCard } from "./folder-card"

const educationJourney = [
  {
    level: "Middle School",
    institution: "Govt Co-ed Sr. Sec. School",
    duration: "2015-2018",
    date: "March 2015-18",
    icon: BookOpen,
    color: "from-brand-400 to-brand-600",
    gpa: "87%",
    description: "Built strong fundamentals in science and computers. Participated in various competitions and coding camps where my adventurous journey started to unfold.",
    achievements: ["Skit Competition (2nd Prize)", "Science Exhibition Winner", "Dell Code Camp", "Singing & Choir"],
    coverImage: "/mid.png"
  },
  {
    level: "Secondary Education",
    institution: "School of Excellence",
    duration: "2018-2020",
    date: "March 2018-20",
    icon: BookOpen,
    color: "from-brand-500 to-brand-700",
    gpa: "86%",
    description: "Strong academic foundation with focus on science. Actively participated in international cultural exchange programs.",
    achievements: ["Learning Buddy (US-India Exchange)", "Lead of Music Choir Group", "Classical Music Competition", "Science Club Member"],
    coverImage: "/sec.png"
  },
  {
    level: "High School Graduation",
    institution: "School of Excellence, Delhi",
    duration: "2021-2022",
    date: "2020-22",
    icon: Star,
    color: "from-brand-400 to-brand-600",
    gpa: "82%",
    description: "Specialized in Computer Science, Physics, Chemistry, and Mathematics.",
    achievements: ["Punctuality & Discipline Award", "Library Management System Project", "94% in Computer Science", "Club Leader"],
    coverImage: "/high.png"
  },
  {
    level: "B.Tech in Computer Science",
    institution: "AKTU, Lucknow",
    duration: "2022-2026",
    date: "Expected 2026",
    icon: GraduationCap,
    color: "from-brand-500 to-brand-700",
    gpa: "8.7 CGPA (First Class)",
    description: "Focusing on DBMS, Web Technology, Algorithms, AI, and Software Engineering.",
    achievements: ["UI/UX Solvathon Winner", "State TechFest (2nd Runner-Up)", "Hackathon (2nd Runner-Up)", "Harvard Aspire Scholar", "SheFi Scholar", "GSSoC Contributor"],
    coverImage: "/btech.png"
  },
  {
    level: "Continuous Professional Growth",
    institution: "Global & Remote",
    duration: "2023 - Present",
    date: "Ongoing",
    icon: Briefcase,
    color: "from-brand-400 to-brand-600",
    gpa: "Pro",
    description: "Expanding horizons through global exposure, internships, open source contributions, leadership fellowships and driving social impact.",
    achievements: [
        "BrightChamps - Creative Technology Instructor",
        "OpenSphere & LegalBridge - UI/UX Designer & Dev",
        "Cubble - UI/UX and Web Dev",
        "SheFi - Scholar (Web3)",
        "Pledge A Smile - Volunteer",
        "Freelance - Digital Product Designer"
    ],
    coverImage: "/grow.png"
  }
]

function FolderTimelineItem({ item, index, drawProgress, totalItems }: { item: typeof educationJourney[0], index: number, drawProgress: MotionValue<number>, totalItems: number }) {
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
  const coverImg = item.coverImage || '/cover.png';

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
          className="relative w-[280px] h-[380px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {hasReached && !isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1.35, opacity: 0 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 m-auto w-[330px] h-[330px] rounded-full border-[2px] border-[#F59E9E]"
                />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1.35, opacity: 0 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.8 }}
                  className="absolute inset-0 m-auto w-[330px] h-[330px] rounded-full border-[2px] border-[#F59E9E]"
                />
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{ scale: 1.35, opacity: 0 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.6 }}
                  className="absolute inset-0 m-auto w-[330px] h-[330px] rounded-full border-[2px] border-[#F59E9E]"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative z-10 w-full h-full">
            <FolderCard 
              items={[item]} 
              currentIndex={0}
              onNext={() => {}}
              onPrev={() => {}}
              direction={direction}
              coverImage={coverImg}
            />
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
    return `${x} ${y}`;
  });
  
  const pathD = dimensions.width > 0 
    ? `M ${pathPoints[0]} ` + pathPoints.slice(1).map(p => `L ${p}`).join(' ') 
    : "";

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
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
            className="h-[3px] w-32 bg-[#F59E9E] mx-auto mt-6 origin-center shadow-[0_0_8px_rgba(245,158,158,0.8)]"
          />
        </div>

        <div ref={containerRef} className="relative flex flex-col gap-20 sm:gap-24 md:gap-40 py-10 px-0 sm:px-4 md:px-24">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {dimensions.width > 0 && (
              <>
                {/* Background faint rope - dashed map trail */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                  <path 
                    d={pathD}
                    fill="none"
                    stroke="#000000"
                    strokeOpacity="0.15"
                    strokeWidth="4"
                    strokeDasharray="8 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                
                {/* Animated fill rope - Glowing string */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full drop-shadow-[0_0_12px_rgba(245,158,158,0.8)]">
                    {/* Outer Glow */}
                    <motion.path 
                      d={pathD}
                      fill="none"
                      stroke="#F59E9E"
                      strokeOpacity="0.4"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ pathLength: drawProgress }}
                    />
                    {/* Solid Pink Core */}
                    <motion.path 
                      d={pathD}
                      fill="none"
                      stroke="#F59E9E"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ pathLength: drawProgress }}
                    />
                  </svg>
                </div>
              </>
            )}
          </div>

          {educationJourney.map((item, index) => (
            <FolderTimelineItem key={index} item={item} index={index} drawProgress={drawProgress} totalItems={educationJourney.length} />
          ))}
        </div>
      </div>
    </div>
  )
}
