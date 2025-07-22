"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Medal, Coins } from "lucide-react"

const achievements = [
	{
		icon: Trophy,
		title: "GSSoc Campus Ambassador & Contributor",
		description: "Organised the event and contributed in open source project.",
		year: "2025",
		color: "#FFD700",
	},
	{
		icon: Award,
		title: "Gen AI Exchange by Hack2skill & GoogleCloud",
		description:
			"It is a practical programme that empowers learners to explore and innovate using GoogleCloud's Gen AI tools.",
		year: "2025",
		color: "#FF6B6B",
	},
	{
		icon: Star,
		title: "TechFest Winner",
		description:
			"Got 2nd runner up place in state level TechFest where we made a Culinary website with AI chatbot in it.",
		year: "2024",
		color: "#4ECDC4",
	},
	{
		icon: Coins,
		title: "SheFi 14 Scholar",
		description:
			"Got selected for SheFi Season 14, a program based in US that empowers women in Web3 and blockchain technology.",
		year: "2025",
		color: "#45B7D1",
	},
	{
		icon: Medal,
		title: "Hackathon Runner up",
		description:
			"Here also got 2nd runner up place in the hackathon we worked on the project where we turned design into code through AI.",
		year: "2025",
		color: "#45B7D1",
	},
]

export default function Achievements() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.8 }}
			className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl relative overflow-hidden"
		>
			<div className="text-center mb-4 sm:mb-6 md:mb-8">
				<motion.h2
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.9 }}
					className="text-2xl sm:text-3xl md:text-4xl my-6 sm:my-8 md:my-10 font-bold  tracking-wide cursor-pointer inline-block"
					whileHover={{
						scale: 1.1,
						color: "#FF6B6B",
					}}
					whileTap={{ scale: 0.95 }}
					style={{
						fontFamily: "Gamer",
						transformOrigin: "center",
					}}
				>
					Achievements and Awards
				</motion.h2>
			</div>

			<motion.div className=" bg-white p-10 rounded-3xl shadow-md">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					{achievements.map((achievement, index) => {
						const Icon = achievement.icon
						return (
							<motion.div
								key={achievement.title}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1 + index * 0.2 }}
								whileHover={{ scale: 1.05, y: -5 }}
								className="bg-[#ffe1e1] p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group achive-glass"
							>
								<div className="flex items-start space-x-4">
									<motion.div
										className="p-3 rounded-full"
										style={{ backgroundColor: `${achievement.color}20` }}
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.5 }}
									>
										<Icon
											className="w-6 h-6"
											style={{ color: achievement.color }}
										/>
									</motion.div>

									<div className="flex-1">
										<div className="flex justify-between items-start mb-2">
											<h3 className="font-semibold text-lg group-hover:text-gray-600 transition-colors">
												{achievement.title}
											</h3>
											<motion.span
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 1.2 + index * 0.2 }}
												className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-full"
											>
												{achievement.year}
											</motion.span>
										</div>
										<p className="text-gray-600 text-sm">
											{achievement.description}
										</p>
									</div>
								</div>

								{/* Animated border */}
								<motion.div
									className="absolute inset-0 rounded-2xl border-2 border-transparent"
									whileHover={{
										boxShadow: `0 0 20px ${achievement.color}30`,
									}}
									transition={{ duration: 0.3 }}
								/>
							</motion.div>
						)
					})}
				</div>
			</motion.div>
		</motion.div>
	)
}
