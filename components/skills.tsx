"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Code, Palette, Database, Globe, Zap, Star } from "lucide-react"

const skillCategories = [
	{
		name: "Frontend",
		icon: Globe,
		color: "#61DAFB",
		skills: [
			{ name: "React", level: 95, icon: "⚛️", experience: "3+ years" },
			{ name: "Next.js", level: 90, icon: "▲", experience: "2+ years" },
			{ name: "TypeScript", level: 88, icon: "📘", experience: "2+ years" },
			{ name: "JavaScript", level: 92, icon: "🟨", experience: "4+ years" },
			{ name: "HTML/CSS", level: 95, icon: "🎨", experience: "5+ years" },
			{ name: "Tailwind CSS", level: 90, icon: "💨", experience: "2+ years" },
		],
	},
	{
		name: "Backend",
		icon: Database,
		color: "#68D391",
		skills: [
			{ name: "Node.js", level: 85, icon: "🟢", experience: "3+ years" },
			{ name: "Python", level: 80, icon: "🐍", experience: "2+ years" },
			{ name: "Express.js", level: 82, icon: "🚀", experience: "2+ years" },
			{ name: "PostgreSQL", level: 75, icon: "🐘", experience: "2+ years" },
			{ name: "MongoDB", level: 78, icon: "🍃", experience: "1+ years" },
			{ name: "GraphQL", level: 70, icon: "📊", experience: "1+ years" },
		],
	},
	{
		name: "Design",
		icon: Palette,
		color: "#F687B3",
		skills: [
			{ name: "Figma", level: 90, icon: "🎨", experience: "3+ years" },
			{ name: "Adobe XD", level: 85, icon: "🔷", experience: "2+ years" },
			{ name: "Photoshop", level: 80, icon: "🖼️", experience: "4+ years" },
			{ name: "Illustrator", level: 75, icon: "✨", experience: "2+ years" },
			{ name: "UI/UX Design", level: 88, icon: "📱", experience: "3+ years" },
			{ name: "Prototyping", level: 85, icon: "🔧", experience: "2+ years" },
		],
	},
	{
		name: "Tools & Others",
		icon: Zap,
		color: "#9F7AEA",
		skills: [
			{ name: "Git", level: 90, icon: "🌿", experience: "4+ years" },
			{ name: "Docker", level: 75, icon: "🐳", experience: "1+ years" },
			{ name: "AWS", level: 70, icon: "☁️", experience: "1+ years" },
			{ name: "Firebase", level: 80, icon: "🔥", experience: "2+ years" },
			{ name: "Vercel", level: 85, icon: "▲", experience: "2+ years" },
			{ name: "VS Code", level: 95, icon: "💙", experience: "5+ years" },
		],
	},
]

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState(0)
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

	const currentCategory = skillCategories[selectedCategory]

	return (
		<>
			<motion.h2
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 1.2 }}
				className="text-3xl font-bold mb-8  text-center flex items-center justify-center gap-2  "
			>
				<Code className="w-8 h-8 text-[#FF6B6B] " />
				Technical Skills & Expertise
			</motion.h2>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 1.1 }}
				className=" p-8 rounded-3xl relative overflow-hidden mt-10"
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-5">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 25% 25%, ${currentCategory.color} 2px, transparent 2px)`,
							backgroundSize: "50px 50px",
						}}
					/>
				</div>

				{/* Category Selector */}
				<div className="flex justify-center mb-10 overflow-y-visible">
					<div className="flex space-x-3 bg-white/30 backdrop-blur-sm rounded-3xl p-3 shadow-lg">
						{skillCategories.map((category, index) => {
							const Icon = category.icon
							return (
								<motion.button
									key={category.name}
									onClick={() => setSelectedCategory(index)}
									className={`flex items-center space-x-3 px-6 py-3 rounded-2xl transition-all font-medium ${
										selectedCategory === index
											? "text-white shadow-lg"
											: "text-gray-700 hover:bg-white/20"
									}`}
									style={{
										backgroundColor:
											selectedCategory === index ? category.color : "transparent",
									}}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.3 + index * 0.1 }}
								>
									<Icon className="w-5 h-5" />
									<span className="text-lg">{category.name}</span>
								</motion.button>
							)
						})}
					</div>
				</div>

				{/* Skills Display - Simple Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedCategory}
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.3 }}
						className=" bg-gradient-to-br from-[#ffd4d4] to-[#ffd4d4] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-20 rounded-3xl  shadow-lg"
					>
						{currentCategory.skills.map((skill, index) => (
							<motion.div
								key={skill.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								onHoverStart={() => setHoveredSkill(skill.name)}
								onHoverEnd={() => setHoveredSkill(null)}
								className=" bg-white backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-white/20"
								whileHover={{ scale: 1.02, y: -2 }}
							>
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center space-x-3">
										<motion.span
											className="text-3xl"
											animate={{
												scale: hoveredSkill === skill.name ? [1, 1.2, 1] : 1,
												rotate: hoveredSkill === skill.name ? [0, 10, -10, 0] : 0,
											}}
											transition={{ duration: 0.5 }}
										>
											{skill.icon}
										</motion.span>
										<div>
											<h3 className="font-bold text-lg text-gray-800 group-hover:text-gray-600 transition-colors">
												{skill.name}
											</h3>
											<p className="text-sm text-gray-600">{skill.experience}</p>
										</div>
									</div>

									<div className="text-right">
										<span className="text-lg font-bold text-gray-700">
											{skill.level}%
										</span>
										<div className="flex space-x-1 mt-1">
											{[...Array(5)].map((_, starIndex) => (
												<motion.div
													key={starIndex}
													initial={{ opacity: 0, scale: 0 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{
														delay: 1.5 + index * 0.1 + starIndex * 0.05,
													}}
												>
													<Star
														className={`w-4 h-4 ${
															starIndex < Math.floor(skill.level / 20)
																? "text-yellow-400 fill-current"
																: "text-gray-300"
														}`}
													/>
												</motion.div>
											))}
										</div>
									</div>
								</div>

								{/* Skill Progress Bar */}
								<div className="relative">
									<div className="w-full bg-white/30 rounded-full h-3">
										<motion.div
											className="h-3 rounded-full relative overflow-hidden"
											style={{ backgroundColor: currentCategory.color }}
											initial={{ width: 0 }}
											animate={{ width: `${skill.level}%` }}
											transition={{
												delay: 1.6 + index * 0.1,
												duration: 1,
												ease: "easeOut",
											}}
										>
											{/* Animated shine effect */}
											<motion.div
												className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40"
												animate={{ x: ["-100%", "100%"] }}
												transition={{
													duration: 2,
													repeat: Number.POSITIVE_INFINITY,
													delay: 2 + index * 0.2,
												}}
											/>
										</motion.div>
									</div>

									{/* Skill level indicator */}
									<motion.div
										className="absolute -top-10 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg"
										style={{
											left: `${skill.level}%`,
											transform: "translateX(-50%)",
										}}
										initial={{ opacity: 0, y: 10 }}
										animate={{
											opacity: hoveredSkill === skill.name ? 1 : 0,
											y: hoveredSkill === skill.name ? 0 : 10,
										}}
										transition={{ duration: 0.2 }}
									>
										{skill.level}%
										<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800" />
									</motion.div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Skills Summary */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2 }}
					className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
				>
					{[
						{ number: "20+", label: "Technologies", color: "#FF6B6B" },
						{ number: "5+", label: "Years Experience", color: "#FF9999" },
						{ number: "4", label: "Specializations", color: "#FFB5B5" },
						{ number: "90%", label: "Avg Proficiency", color: "#FF7F7F" },
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 2.2 + index * 0.1, type: "spring" }}
							className="p-6 bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20"
						>
							<motion.div
								className="text-2xl font-bold"
								style={{ color: stat.color }}
								animate={{ scale: [1, 1.05, 1] }}
								transition={{
									duration: 2,
									repeat: Number.POSITIVE_INFINITY,
									delay: index * 0.3,
								}}
							>
								{stat.number}
							</motion.div>
							<div className="text-sm text-gray-700 font-medium">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>

				{/* Floating Skill Icons */}
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					{["⚛️", "🐍", "🎨", "☁️", "📱", "🚀"].map((icon, index) => (
						<motion.div
							key={index}
							className="absolute text-3xl opacity-10"
							animate={{
								y: [0, -30, 0],
								x: [0, 15, -15, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 6 + index,
								repeat: Number.POSITIVE_INFINITY,
								delay: index * 0.8,
							}}
							style={{
								left: `${10 + index * 15}%`,
								top: `${20 + (index % 2) * 60}%`,
							}}
						>
							{icon}
						</motion.div>
					))}
				</div>
			</motion.div>
		</>
	)
}

