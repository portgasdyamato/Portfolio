"use client"

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion"
import { useState, useRef } from "react"
import { Star, Home, Heart, BookOpen, GraduationCap, Award, X, Sparkles, TrendingUp, Calendar, MapPin, Trophy } from "lucide-react"

const educationJourney = [
	{
		level: "Middle School",
		institution: "",
		duration: "2015-2018",
		date: "March 2018",
		icon: BookOpen,
		color: "#FFB347",
		gpa: "79%",
		achievements: [
			"Top Student",
			"Science Exhibition Winner",
			"Dell Code Camp",
			"Debate Competition Finalist",
		],
		description:
			"Built strong fundamentals in science and computer. Participated in various competitions and coding camp where my adventurous journey started to unfold to explore.",
		quote: "Where the foundation was laid",
	},
	{
		level: "9th Grade (Secondary)",
		institution: "School Of Excellence",
		duration: "2018-2019",
		date: "March 2019",
		icon: Home,
		color: "#FF6B9D",
		gpa: "83%",
		achievements: [
			"Cleared the Entrance exam for admission in this institute",
			"Got Selected out of 800 students ,only 80 were selected i.e in top 10%",
			"Gained Leadership Skills",
			"Participated in Singing competitions",
		],
		description:
			"Built a strong academic foundation while actively engaging in co-curricular activities, developing both intellectual and creative skills during the 9th grade.",
		quote: "Creativity & Excellence Achieved",
	},
	{
		level: "10th Grade (Secondary)",
		institution: "School Of Excellence",
		duration: "2019-2020",
		date: "March 2020",
		icon: Heart,
		color: "#FF6B9D",
		gpa: "86%",
		achievements: [
			"Participated in Science Clubs",
			"Joined Music Choir group of the School",
			"Learned Team work & Time management",
			"Participated in Various competitions",
		],
		description:
			"Excelled in board examinations with focus on science and mathematics. First exposure to computer programming sparked my interest in technology and coding.",
		quote: "Academic Excellence Achieved",
	},
	{
		level: "High School Graduation",
		institution: "School of Excellence, Delhi, India",
		duration: "2021-2022",
		date: "July 2022",
		icon: Star,
		color: "#87CEEB",
		gpa: "82%",
		achievements: [
			"94% in Computer Science",
			"Physics, Chemistry, Maths Specialization",
			"Club Leader and Project Contributor",
			"Enhanced Soft Skills and Leadership",
		],
		description:
			"Achieved high performance in STEM subjects with a specialization in Computer Science. Led student clubs and initiated various technical projects.",
		quote: "Foundational excellence in STEM",
	},
	{
		level: "B.Tech in Computer Science and Engineering",
		institution: "Dr. A.P.J Abdul Kalam Technical University, Lucknow",
		duration: "2022-2026",
		date: "Expected 2026",
		icon: GraduationCap,
		color: "#4ECDC4",
		gpa: "8.12/10 CGPA",
		achievements: [
			"UI UX Solvathon Winner",
			"Harvard Aspire Leadership Scholar",
			"SheFi 14th Cohort Scholar",
			"Open Source Contributor (GSSoC)",
			"TechFest & Hackathon Runner Up",
		],
		description:
			"Focusing on DBMS, Web Technology, Algorithms, AI, Cryptography, and Software Engineering. Actively participating in global leadership and technical communities.",
		quote: "Engineering solutions for the global stage",
	},
	{
		level: "Continuous Learning",
		institution: "Professional Development",
		duration: "2023-Future",
		date: "Lifelong",
		icon: Heart,
		color: "#96CEB4",
		gpa: "Always Growing",
		achievements: [
			"Industry Certifications",
			"Open Source Contributions",
			"Tech Mentorship",
			"Innovation Projects",
			"Conference Speaking",
		],
		description:
			"Planning to stay current with emerging technologies through certifications, advanced courses, and hands-on projects. Committed to lifelong learning and contributing to the tech community.",
		quote: "The journey continues",
	},
]

export default function Education() {
	const [selectedItem, setSelectedItem] = useState<number | null>(null)
	const [hoveredItem, setHoveredItem] = useState<number | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	
	// Scroll-based animations
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	})
	
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	return (
		<motion.div
			ref={containerRef}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3, duration: 0.8 }}
			className="px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 rounded-2xl sm:rounded-3xl relative overflow-hidden"
		>
			{/* Header - Simplified without progress bar */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5 }}
				className="text-center mb-12 sm:mb-16 relative max-w-3xl mx-auto"
			>
				<motion.h2
					className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 tracking-wide"
					whileHover={{
						scale: 1.05,
					}}
					style={{ fontFamily: "Gamer" }}
				>
					My Learning Journey
				</motion.h2>
				
				<div className="w-32 h-1.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto rounded-full mb-6" />

				<p className="text-gray-600 mt-6 text-base sm:text-lg">
					Click on cards to explore detailed achievements
				</p>
			</motion.div>

			{/* Main Timeline Section */}
			<div className="relative max-w-7xl mx-auto">
				{/* Desktop Timeline View */}
				<div className="hidden lg:block relative pb-12">
					{/* Clean Animated Vertical Line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
						{/* Static gradient background */}
						<div className="absolute w-full h-full bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 rounded-full" />
						
						{/* Scroll-based colored overlay */}
						<motion.div
							className="absolute w-full origin-top rounded-full"
							style={{ 
								scaleY: smoothProgress,
								background: "linear-gradient(to bottom, #FFB347, #FF6B9D, #87CEEB, #4ECDC4, #96CEB4)",
							}}
						/>
					</div>

					{/* Timeline Items */}
					<div className="space-y-24 py-8">
						{educationJourney.map((item, index) => {
							const Icon = item.icon
							const isLeft = index % 2 === 0

							return (
								<TimelineCard
									key={item.level}
									item={item}
									index={index}
									isLeft={isLeft}
									Icon={Icon}
									hoveredItem={hoveredItem}
									setHoveredItem={setHoveredItem}
									setSelectedItem={setSelectedItem}
									selectedItem={selectedItem}
									scrollProgress={scrollYProgress}
								/>
							)
						})}
					</div>
				</div>

				{/* Mobile/Tablet Timeline View */}
				<div className="lg:hidden space-y-6 px-4">
					{educationJourney.map((item, index) => {
						const Icon = item.icon
						
						return (
							<MobileTimelineCard
								key={item.level}
								item={item}
								index={index}
								Icon={Icon}
								hoveredItem={hoveredItem}
								setHoveredItem={setHoveredItem}
								setSelectedItem={setSelectedItem}
								selectedItem={selectedItem}
							/>
						)
					})}
				</div>

				{/* Enhanced Stats Summary */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 px-4"
				>
					{[
						{ number: "10+", label: "Years Learning", color: "#FFB347", icon: TrendingUp },
						{ number: "4", label: "Institutions", color: "#FF6B9D", icon: Home },
						{ number: "85%", label: "Avg Score", color: "#4ECDC4", icon: Star },
						{ number: "20+", label: "Achievements", color: "#45B7D1", icon: Trophy },
						{ number: "∞", label: "Future Goals", color: "#96CEB4", icon: Sparkles },
					].map((stat, index) => {
						const StatIcon = stat.icon
						return (
							<motion.div
								key={stat.label}
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ 
									delay: index * 0.1,
									type: "spring",
									stiffness: 200,
								}}
								whileHover={{ 
									scale: 1.05,
									y: -8,
									transition: { duration: 0.3 }
								}}
								className="relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group overflow-hidden"
							>
								{/* Animated background gradient */}
								<motion.div
									className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
									style={{ 
										background: `radial-gradient(circle at center, ${stat.color}, transparent)`,
									}}
								/>

								<motion.div
									className="flex justify-center mb-3"
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
								>
									<div 
										className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md"
										style={{ backgroundColor: `${stat.color}20` }}
									>
										<StatIcon className="w-7 h-7" style={{ color: stat.color }} />
									</div>
								</motion.div>

								<div
									className="text-3xl font-bold mb-1 text-center"
									style={{ color: stat.color }}
								>
									{stat.number}
								</div>
								<div className="text-sm text-gray-600 font-medium text-center">
									{stat.label}
								</div>
							</motion.div>
						)
					})}
				</motion.div>
			</div>

			{/* Enhanced Modal */}
			<AnimatePresence>
				{selectedItem !== null && (
					<AchievementModal
						item={educationJourney[selectedItem]}
						onClose={() => setSelectedItem(null)}
					/>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

// Desktop Timeline Card Component
function TimelineCard({ item, index, isLeft, Icon, hoveredItem, setHoveredItem, setSelectedItem, selectedItem, scrollProgress }: any) {
	const cardRef = useRef<HTMLDivElement>(null)
	const isHovered = hoveredItem === index
	
	// Individual card scroll animation
	const opacity = useTransform(
		scrollProgress,
		[(index * 0.15), (index * 0.15) + 0.2],
		[0, 1]
	)
	
	const x = useTransform(
		scrollProgress,
		[(index * 0.15), (index * 0.15) + 0.2],
		[isLeft ? -50 : 50, 0]
	)

	return (
		<motion.div
			ref={cardRef}
			style={{ opacity, x }}
			className={`relative flex items-center ${
				isLeft ? "flex-row" : "flex-row-reverse"
			}`}
			onMouseEnter={() => setHoveredItem(index)}
			onMouseLeave={() => setHoveredItem(null)}
		>
			{/* Timeline Card */}
			<motion.div
				className={`w-[45%] ${isLeft ? "pr-16" : "pl-16"}`}
				whileHover={{ scale: 1.03 }}
				transition={{ duration: 0.3 }}
			>
				<motion.div
					className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-gray-100"
					onClick={() => setSelectedItem(selectedItem === index ? null : index)}
					whileHover={{
						boxShadow: `0 25px 70px -20px ${item.color}60`,
						borderColor: item.color,
					}}
				>
					{/* Color Accent Bar */}
					<div 
						className="h-3"
						style={{ 
							background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
						}}
					/>
					
					<div className="p-7">
						{/* Icon and Title Row */}
						<div className={`flex items-start gap-5 mb-5 ${isLeft ? "" : "flex-row-reverse text-right"}`}>
							<motion.div
								className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
								style={{ backgroundColor: `${item.color}` }}
								whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
								transition={{ duration: 0.5 }}
							>
								<Icon className="w-8 h-8 text-white" />
							</motion.div>

							<div className="flex-1">
								<h3 
									className="text-2xl font-bold mb-2"
									style={{ color: item.color }}
								>
									{item.level}
								</h3>
								<p className="text-sm text-gray-600 font-medium flex items-center gap-2">
									<Calendar className="w-4 h-4" />
									{item.date}
								</p>
								<p className="text-xs text-gray-400 mt-1">{item.duration}</p>
							</div>
						</div>

						{/* Institution */}
						{item.institution && (
							<div className="mb-4 flex items-start gap-2 bg-purple-50 p-3 rounded-xl">
								<MapPin className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
								<p className="text-sm font-semibold text-purple-700">
									{item.institution}
								</p>
							</div>
						)}

						{/* Description */}
						<p className="text-sm text-gray-600 leading-relaxed mb-5">
							{item.description}
						</p>

						{/* Footer with GPA and Achievements */}
						<div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
							<div 
								className="px-5 py-2.5 rounded-xl font-bold shadow-md"
								style={{ 
									backgroundColor: `${item.color}`,
									color: "white",
								}}
							>
								{item.gpa}
							</div>
							
							<div className="flex items-center gap-2 text-sm text-gray-500">
								<Award className="w-5 h-5" style={{ color: item.color }} />
								<span className="font-medium">{item.achievements.length} Achievements</span>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>

			{/* Timeline Center Icon */}
			<motion.div
				className="absolute left-1/2 transform -translate-x-1/2 z-20"
				whileHover={{ scale: 1.3 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				<motion.div
					className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl cursor-pointer border-4 border-white"
					style={{ backgroundColor: item.color }}
					animate={{
						boxShadow: isHovered 
							? `0 0 0 0 ${item.color}00, 0 0 0 20px ${item.color}00`
							: `0 0 0 0 ${item.color}40, 0 0 0 10px ${item.color}00`,
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
					}}
					onClick={() => setSelectedItem(selectedItem === index ? null : index)}
				>
					<Icon className="w-8 h-8 text-white relative z-10" />
				</motion.div>
			</motion.div>

			{/* Empty Space */}
			<div className="w-[45%]" />
		</motion.div>
	)
}

// Mobile Timeline Card Component
function MobileTimelineCard({ item, index, Icon, hoveredItem, setHoveredItem, setSelectedItem, selectedItem }: any) {
	const isHovered = hoveredItem === index

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay: index * 0.1 }}
			onMouseEnter={() => setHoveredItem(index)}
			onMouseLeave={() => setHoveredItem(null)}
		>
			<motion.div
				className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer overflow-hidden border border-gray-100"
				onClick={() => setSelectedItem(selectedItem === index ? null : index)}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
			>
				{/* Color Accent Bar */}
				<div 
					className="h-3"
					style={{ 
						background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
					}}
				/>

				<div className="p-6">
					{/* Header */}
					<div className="flex items-start gap-4 mb-4">
						<motion.div
							className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
							style={{ backgroundColor: item.color }}
							animate={{
								rotate: isHovered ? [0, -5, 5, 0] : 0,
							}}
							transition={{ duration: 0.5 }}
						>
							<Icon className="w-8 h-8 text-white" />
						</motion.div>

						<div className="flex-1">
							<h3 
								className="text-xl font-bold mb-1"
								style={{ color: item.color }}
							>
								{item.level}
							</h3>
							<p className="text-xs text-gray-600 font-medium flex items-center gap-1">
								<Calendar className="w-3 h-3" />
								{item.date}
							</p>
							<p className="text-xs text-gray-400 mt-0.5">{item.duration}</p>
						</div>
					</div>

					{/* Institution */}
					{item.institution && (
						<div className="mb-4 flex items-start gap-2 bg-purple-50 p-3 rounded-xl">
							<MapPin className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
							<p className="text-sm font-semibold text-purple-700">
								{item.institution}
							</p>
						</div>
					)}

					{/* Description */}
					<p className="text-sm text-gray-600 leading-relaxed mb-4">
						{item.description}
					</p>

					{/* Footer */}
					<div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
						<div 
							className="px-4 py-2 rounded-xl font-bold text-sm shadow-md"
							style={{ 
								backgroundColor: item.color,
								color: "white",
							}}
						>
							{item.gpa}
						</div>
						
						<div className="flex items-center gap-2 text-xs text-gray-500">
							<Award className="w-4 h-4" style={{ color: item.color }} />
							<span className="font-medium">{item.achievements.length} Achievements</span>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}

// Achievement Modal Component - With hidden scrollbar
function AchievementModal({ item, onClose }: any) {
	const Icon = item.icon

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-6"
			onClick={onClose}
		>
			<motion.div
				initial={{ scale: 0.9, opacity: 0, y: 30 }}
				animate={{ scale: 1, opacity: 1, y: 0 }}
				exit={{ scale: 0.9, opacity: 0, y: 30 }}
				transition={{ type: "spring", duration: 0.5 }}
				className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-hidden"
				onClick={(e) => e.stopPropagation()}
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}
			>
				<style jsx>{`
					.scrollbar-hidden::-webkit-scrollbar {
						display: none;
					}
				`}</style>

				{/* Header with gradient */}
				<div 
					className="relative p-10 text-white"
					style={{ 
						background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
					}}
				>
					<motion.button
						className="absolute top-6 right-6 p-3 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/40 transition-colors shadow-lg"
						onClick={onClose}
						whileHover={{ scale: 1.1, rotate: 90 }}
						whileTap={{ scale: 0.9 }}
					>
						<X className="w-6 h-6" />
					</motion.button>

					{/* Icon */}
					<motion.div
						className="w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 shadow-xl"
						animate={{ 
							rotate: [0, 5, -5, 0],
							scale: [1, 1.05, 1],
						}}
						transition={{ 
							duration: 3,
							repeat: Infinity,
						}}
					>
						<Icon className="w-12 h-12 text-white" />
					</motion.div>

					<h3 className="text-3xl sm:text-4xl font-bold text-center mb-3">
						{item.level}
					</h3>
					{item.institution && (
						<p className="text-white/95 text-center text-lg font-medium">
							{item.institution}
						</p>
					)}
				</div>

				<div className="p-8 sm:p-10">
					{/* Info Grid */}
					<div className="grid grid-cols-2 gap-5 mb-8">
						<div className="text-center p-5 bg-gray-50 rounded-2xl">
							<Calendar className="w-6 h-6 mx-auto mb-3 text-gray-600" />
							<div className="text-xs text-gray-500 mb-2 font-medium">Duration</div>
							<div className="text-base font-bold text-gray-800">{item.duration}</div>
						</div>
						<div className="text-center p-5 rounded-2xl" style={{ backgroundColor: `${item.color}10` }}>
							<Star className="w-6 h-6 mx-auto mb-3" style={{ color: item.color }} />
							<div className="text-xs text-gray-500 mb-2 font-medium">Score</div>
							<div className="text-base font-bold" style={{ color: item.color }}>{item.gpa}</div>
						</div>
					</div>

					{/* Description */}
					<div className="mb-8 p-6 bg-gray-50 rounded-2xl">
						<p className="text-gray-700 text-base leading-relaxed">
							{item.description}
						</p>
						<p className="text-gray-500 text-sm italic mt-4 text-right">
							"{item.quote}"
						</p>
					</div>

					{/* Achievements */}
					<div>
						<h4 className="font-bold text-gray-800 text-xl mb-5 flex items-center gap-3">
							<Trophy className="w-6 h-6" style={{ color: item.color }} />
							Key Achievements
						</h4>
						<div className="space-y-4">
							{item.achievements.map((achievement: string, i: number) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: i * 0.1 }}
									whileHover={{ x: 8, backgroundColor: `${item.color}05` }}
									className="flex items-start gap-4 p-4 rounded-xl transition-all border-2 border-transparent hover:border-gray-100"
								>
									<motion.div
										className="w-3 h-3 rounded-full mt-2 flex-shrink-0 shadow-md"
										style={{ backgroundColor: item.color }}
										animate={{
											scale: [1, 1.3, 1],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay: i * 0.3,
										}}
									/>
									<span className="text-base text-gray-700 leading-relaxed">
										{achievement}
									</span>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}
