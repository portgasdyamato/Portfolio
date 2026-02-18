"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

const processSteps = [
	{
		icon: Lightbulb,
		title: "Problem Solving",
		description: "Brainstorming and concept development",
		color: "#FFF3CD",
		delay: 0,
	},
	{
		icon: Palette,
		title: "Creativity",
		description: "Visual design and prototyping",
		color: "#D1ECF1",
		delay: 0.2,
	},
	{
		icon: Code,
		title: "Conflict Rsolution",
		description: "Analysing & Solving Conflicts",
		color: "#D4EDDA",
		delay: 0.4,
	},
	{
		icon: Rocket,
		title: "Leadership",
		description: "Empowering & Motivating ",
		color: "#ff9191",
		delay: 0.6,
	},
]

export default function DesignProcess() {
	const [hoveredStep, setHoveredStep] = useState<number | null>(null)

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.9 }}
			className="col-span-3 mt-20 overflow-hidden"
		>
			<div className="text-center mb-24">
				<motion.h2
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1 }}
					className="text-3xl font-bold cursor-pointer inline-block"
					whileHover={{ 
						scale: 1.1,
						transition: { 
						  type: "tween", 
						  duration: 0.15,
						  ease: "easeOut"
						}
					  }}
					style={{ fontFamily: "Gamer", }}
				>
					Inter-Personal / Soft Skills
				</motion.h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-20 ml-8 mr-8 ">
				{processSteps.map((step, index) => {
					const Icon = step.icon
					return (
						<motion.div
							key={step.title}
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2 + step.delay }}
							onHoverStart={() => setHoveredStep(index)}
							onHoverEnd={() => setHoveredStep(null)}
							className="relative "
						>
							<motion.div
								className="p-6 rounded-2xl cursor-pointer relative overflow-hidden h-48 flex flex-col justify-between"
								style={{ backgroundColor: step.color }}
								whileHover={{ scale: 1.05, y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								{/* Animated background pattern */}
								<motion.div
									className="absolute inset-0 opacity-10"
									animate={{
										backgroundPosition:
											hoveredStep === index
												? ["0% 0%", "100% 100%"]
												: "0% 0%",
									}}
									transition={{
										duration: 2,
										repeat: Number.POSITIVE_INFINITY,
									}}
									style={{
										backgroundImage:
											"radial-gradient(circle, currentColor 1px, transparent 1px)",
										backgroundSize: "20px 20px",
									}}
								/>

								<div className="relative z-10 flex flex-col items-center text-center flex-1">
									<motion.div
										animate={{
											rotate: hoveredStep === index ? 360 : 0,
											scale: hoveredStep === index ? 1.2 : 1,
										}}
										transition={{ duration: 0.5 }}
										className="mb-4"
									>
										<Icon className="w-8 h-8 mx-auto" />
									</motion.div>

									<div className="flex-1 flex flex-col justify-center">
										<h3 className="font-semibold text-lg mb-2">
											{step.title}
										</h3>
										<p className="text-sm text-gray-600">
											{step.description}
										</p>
									</div>
								</div>

								{/* Connection line to next step */}
								{index < processSteps.length - 1 && (
									<motion.div
										className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300"
										initial={{ scaleX: 0 }}
										animate={{ scaleX: 1 }}
										transition={{
											delay: 1.5 + step.delay,
											duration: 0.5,
										}}
									/>
								)}
							</motion.div>

							{/* Step number */}
							<motion.div
								className="absolute -top-2 -left-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center text-xs font-bold"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{
									delay: 1.4 + step.delay,
									type: "spring",
								}}
							>
								{index + 1}
							</motion.div>
						</motion.div>
					)
				})}
			</div>

			{/* Animated progress bar */}
		</motion.div>
	)
}
