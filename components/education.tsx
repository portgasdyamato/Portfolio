"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Star, Home, Heart, BookOpen, GraduationCap, Award, X } from "lucide-react"

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
		quote: "- Where the foundation was laid",
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
		quote: "- Creativity & Excellence Achieved",
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
		quote: "- Academic Excellence Achieved",
	},
	{
		level: "High School (12th Grade)",
		institution: "School of Excellence",
		duration: "2021-2022",
		date: "July 2022",
		icon: Star,
		color: "#87CEEB",
		gpa: "82%",
		achievements: [
			"94% in Computer Science",
			"Made Projects",
			"Club Leader",
			"Enchanced Soft Skills",
		],
		description:
			"Specialized in Physics, Chemistry, and Mathematics and Computer Science. Led the club and participated in competitions, while solidifying my passion for computer science.",
		quote: "- Specialization begins",
	},
	{
		level: "Bachelor's in Computer Science",
		institution: "Dr A.P.J. Abdul Kalam Technical University",
		duration: "2022-2026",
		date: "Expected May 2026",
		icon: GraduationCap,
		color: "#4ECDC4",
		gpa: "7.232/10 CGPA",
		achievements: [
			"TechFest 2nd runner up",
			"Hackathon 2nd runner up Winner",
			"Artificial Intelligence Intern",
			"Tech Society Organizer",
			"Open Source Contributor",
		],
		description:
			"Currently pursuing advanced computer science exploring AI/ML, web development, and UI. Leading tech initiatives and contributing to research projects.",
		quote: "- Engineering the future",
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
		quote: "- The journey continues",
	},
]

export default function Education() {
	const [selectedItem, setSelectedItem] = useState<number | null>(null)

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.8 }}
			className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden"
		>
			{/* Header */}
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.9 }}
				className="text-center mb-6 sm:mb-8 md:mb-12"
			>
				<div className="overflow-hidden">
					<motion.h2
						className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 tracking-wide cursor-pointer inline-block"
						whileHover={{
							scale: 1.05,
							transition: {
								type: "tween",
								duration: 0.15,
								ease: "easeOut",
							},
						}}
						style={{
							fontFamily: "Gamer",
						}}
					>
						My Learning Journey
					</motion.h2>
				</div>
				<div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full" />
				<p className="text-gray-600 mt-4 text-lg">
					Click on the icons to explore achievements
				</p>
			</motion.div>

			<motion.div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden">
				{/* Desktop Timeline View */}
				<div className="hidden md:block relative">
					{/* Vertical Line */}
					<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-300 via-pink-300 to-purple-300 rounded-full" />

					{/* Timeline Items */}
					<div className="space-y-12">
						{educationJourney.map((item, index) => {
							const Icon = item.icon
							const isLeft = index % 2 === 0

							return (
								<motion.div
									key={item.level}
									initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
									className={`relative flex items-center ${
										isLeft ? "flex-row" : "flex-row-reverse"
									}`}
								>
									{/* Timeline Card */}
									<motion.div
										className={`w-5/12 bg-[#FFD1D1] py-8 px-8 rounded-xl ${
											isLeft ? "pr-8" : "pl-8"
										}`}
									>
										<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
											{/* Header */}
											<div className={`flex justify-between items-start mb-4 ${isLeft ? "text-left" : "text-right"}`}>
                        <div className={isLeft ? "" : "order-2 text-left"}>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{item.level}</h3>
                          <p className="text-sm text-gray-500 font-medium">{item.date}</p>
                          <p className="text-xs text-gray-400">{item.duration}</p>
                        </div>
                      </div>

											{/* Institution */}
											<p className="text-lg font-semibold text-purple-600 mb-3">
												{item.institution}
											</p>

											{/* GPA/Percentage */}
											<div className="flex justify-between items-center mb-4">
												<span className="text-sm font-medium text-gray-500">
													Score:
												</span>
												<span className="font-bold text-gray-700">
													{item.gpa}
												</span>
											</div>

											{/* Quote */}
											<p className="text-xs italic text-gray-500 text-right">
												{item.quote}
											</p>
										</div>
									</motion.div>

									{/* Timeline Icon - Clickable */}
									<motion.div
										className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 cursor-pointer"
										style={{ backgroundColor: item.color }}
										initial={{ scale: 0, rotate: -180 }}
										animate={{ scale: 1, rotate: 0 }}
										transition={{ delay: 1.2 + index * 0.2, type: "spring" }}
										whileHover={{ scale: 1.2, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
										onClick={() =>
											setSelectedItem(
												selectedItem === index ? null : index
											)
										}
									>
										<Icon className="w-6 h-6 text-white" />
									</motion.div>

									{/* Empty Space for Opposite Side */}
									<div className="w-5/12" />
								</motion.div>
							)
						})}
					</div>
				</div>

				{/* Mobile Card View */}
				<div className="md:hidden grid gap-4">
					{educationJourney.map((item, index) => {
						const Icon = item.icon
						return (
							<motion.div
								key={item.level}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 + index * 0.1 }}
								whileTap={{ scale: 0.98 }}
								className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 cursor-pointer"
								onClick={() =>
									setSelectedItem(
										selectedItem === index ? null : index
									)
								}
							>
								<div className="flex items-center space-x-3 mb-3">
									<div
										className="w-10 h-10 rounded-full flex items-center justify-center"
										style={{ backgroundColor: item.color }}
									>
										<Icon className="w-5 h-5 text-white" />
									</div>
									<div className="flex-1">
										<h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: "qax" }}>
											{item.level}
										</h3>
										<p className="text-sm text-gray-500">
											{item.date}
										</p>
									</div>
									<div className="text-right">
										<span className="text-sm font-bold text-gray-700">
											{item.gpa}
										</span>
									</div>
								</div>

								<p className="text-sm text-purple-600 font-medium mb-2">
									{item.institution}
								</p>
								<p className="text-xs text-gray-600" >
									{item.description}
								</p>
								<p className="text-xs italic text-gray-500 mt-2">
									{item.quote}
								</p>
							</motion.div>
						)
					})}
				</div>

				{/* Stats Summary */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.5 }}
					className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 text-center"
				>
					{[
						{ number: "10+", label: "Years Learning", color: "#FFB347" },
						{ number: "4", label: "Schools", color: "#FF6B9D" },
						{ number: "90%", label: "Avg Score", color: "#4ECDC4" },
						{ number: "15+", label: "Achievements", color: "#45B7D1" },
						{ number: "∞", label: "Future Goals", color: "#96CEB4" },
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 2.7 + index * 0.1, type: "spring" }}
							className="p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-sm"
						>
							<div
								className="text-lg sm:text-xl font-bold"
								style={{ color: stat.color }}
							>
								{stat.number}
							</div>
							<div className="text-xs text-gray-600 font-medium">
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>

			{/* Popup Modal for Achievements */}
			<AnimatePresence>
				{selectedItem !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
						onClick={() => setSelectedItem(null)}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0, y: 50 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0.8, opacity: 0, y: 50 }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="bg-white rounded-3xl p-5 max-w-md w-full mx-4 shadow-2xl relative overflow-y-auto max-h-[80vh] md:overflow-visible md:max-h-full"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close Button */}
							<motion.button
								className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
								onClick={() => setSelectedItem(null)}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<X className="w-5 h-5 text-gray-600" />
							</motion.button>

							{/* Icon */}
							<motion.div
								className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
								style={{
									backgroundColor: educationJourney[selectedItem].color,
								}}
								animate={{ rotate: [0, 10, -10, 0] }}
								transition={{ duration: 0.5 }}
							>
								{(() => {
									const Icon = educationJourney[selectedItem].icon
									return <Icon className="w-8 h-8 text-white" />
								})()}
							</motion.div>

							{/* Title */}
							<h3
								className="text-3xl text-gray-800 text-center mb-2"
								style={{ fontFamily: "qax" }}
							>
								{educationJourney[selectedItem].level}
							</h3>
							<p className="text-purple-600 font-semibold text-center mb-6">
								{educationJourney[selectedItem].institution}
							</p>

							{/* Description */}
							<p className="text-gray-600 text-sm leading-relaxed mb-6 text-center font-serif" style={{ fontFamily: "qax" }}>
								{educationJourney[selectedItem].description}
							</p>

							{/* Achievements */}
							<div className="space-y-3">
								<h4
									className="font-semibold text-gray-700 mb-4 flex items-center gap-2"
									style={{ fontFamily: "qax" }}
								>
									<Award className="w-5 h-5 text-yellow-500" />
									Key Achievements
								</h4>
								{educationJourney[selectedItem].achievements.map(
									(achievement, i) => (
										<motion.div
											key={achievement}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: i * 0.1 }}
											className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                      
                      
										>
											<div
												className="w-3 h-3 rounded-full"
												style={{
													backgroundColor:
														educationJourney[selectedItem].color,
												}}
											/>
											<span className="text-gray-700 text-sm font-serif" style={{ fontFamily: "qax" }}>
												{achievement}
											</span>
										</motion.div>
									)
								)}
							</div>

							{/* Score */}
							<div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl text-center">
								<p className="text-sm text-gray-600 mb-1">
									Academic Score
								</p>
								<p className="text-2xl font-bold text-gray-800">
									{educationJourney[selectedItem].gpa}
								</p>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}

// Fixed TypeScript errors by explicitly typing parameters and ensuring valid index types
const EducationTimeline = ({
	achievements,
}: {
	achievements: {
		level: string
		institution: string
		duration: string
		date: string
		icon: any
		color: string
		gpa: string
		achievements: string[]
		description: string
		quote: string
	}[]
}) => {
	return (
		<div>
			{achievements.map((achievement, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					{/* Render achievement details */}
				</motion.div>
			))}
		</div>
	)
}
