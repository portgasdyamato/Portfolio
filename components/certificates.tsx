"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Calendar, ExternalLink } from "lucide-react"

const certificates = [
	{
		title: "Advanced React Development",
		issuer: "Meta",
		date: "Dec 2023",
		status: "Completed",
		type: "Professional Certificate",
		color: "#61DAFB",
		credentialId: "ABC123XYZ",
	},
	{
		title: "UI/UX Design Specialization",
		issuer: "Google",
		date: "Oct 2023",
		status: "Completed",
		type: "Specialization",
		color: "#4285F4",
		credentialId: "GGL456DEF",
	},
	{
		title: "Full Stack Web Development",
		issuer: "freeCodeCamp",
		date: "Aug 2023",
		status: "Completed",
		type: "Certification",
		color: "#0A0A23",
		credentialId: "FCC789GHI",
	},
	{
		title: "AI for Everyone",
		issuer: "Coursera",
		date: "Jun 2023",
		status: "Completed",
		type: "Course Certificate",
		color: "#FF6B35",
		credentialId: "CRS012JKL",
	},
	{
		title: "AWS Cloud Practitioner",
		issuer: "Amazon Web Services",
		date: "Mar 2024",
		status: "In Progress",
		type: "Cloud Certification",
		color: "#FF9900",
		credentialId: "Pending",
	},
	{
		title: "TypeScript Fundamentals",
		issuer: "Microsoft",
		date: "Jan 2024",
		status: "Completed",
		type: "Technical Certificate",
		color: "#3178C6",
		credentialId: "MSF345MNO",
	},
]

export default function Certificates() {
	return (
		<>
			<motion.h2
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.9 }}
				className="text-3xl font-bold text-center flex items-center justify-center gap-2"
				style={{ fontFamily: "Gamer", }}
			>
				<FileText className="w-6 h-6 mt-8 mb-8 text-blue-600" />
				Professional Certificates
			</motion.h2>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8 }}
				className="bg-[#FFE4E4] p-5 rounded-3xl ml-8 mr-8"
			>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
					{certificates.map((cert, index) => (
						<motion.div
							key={cert.title}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 + index * 0.1 }}
							whileHover={{ scale: 1.02, y: -2 }}
							className="bg-orange-200  bg-opacity-35 p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
							style={{ fontFamily: "qax", }}
						>
							{/* Certificate ribbon */}
							<div
								className="absolute  top-0 right-0 w-16 h-16"
								style={{
									background: `linear-gradient(135deg, ${cert.color}90, ${cert.color}80)`,
									clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
								}}
							/>

							<div className="flex  items-start justify-between mb-3">
								<div className="flex items-center space-x-3">
									<motion.div
										className="p-2 rounded-lg"
										style={{ backgroundColor: `${cert.color}15` }}
										whileHover={{ rotate: 5 }}
									>
										<FileText className="w-5 h-5" style={{ color: cert.color }} />
									</motion.div>
									<div>
										<h3 className="font-semibold text-sm group-hover:text-gray-600 transition-colors">
											{cert.title}
										</h3>
										<p className="text-xs text-gray-500">{cert.type}</p>
									</div>
								</div>

								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ delay: 1.2 + index * 0.1 }}
									className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
										cert.status === "Completed"
											? "bg-green-100 text-green-700"
											: "bg-yellow-100 text-yellow-700"
									}`}
								>
									<CheckCircle className="w-3 h-3" />
									<span>{cert.status}</span>
								</motion.div>
							</div>

							<div className="space-y-3">
								<div className="flex items-center justify-between text-sm">
									<span className="font-medium text-gray-700">{cert.issuer}</span>
									<div className="flex items-center space-x-1 text-gray-500">
										<Calendar className="w-3 h-3" />
										<span className="text-xs">{cert.date}</span>
									</div>
								</div>

								{/* Credential ID */}
								<div className="flex items-center justify-between text-xs">
									<span className="text-gray-500">Credential ID:</span>
									<span className="font-mono text-gray-700">{cert.credentialId}</span>
								</div>

								{/* Progress bar for in-progress certificates */}
								{cert.status === "In Progress" && (
									<motion.div
										className="w-full bg-gray-200 rounded-full h-2"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.5 + index * 0.1 }}
									>
										<motion.div
											className="bg-yellow-500 h-2 rounded-full"
											initial={{ width: 0 }}
											animate={{ width: "75%" }}
											transition={{ delay: 1.7 + index * 0.1, duration: 1 }}
										/>
									</motion.div>
								)}

								{/* View Certificate Link */}
								{cert.status === "Completed" && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.5 + index * 0.1 }}
										className="flex items-center justify-end"
									>
										<button className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 transition-colors">
											<span>View Certificate</span>
											<ExternalLink className="w-3 h-3" />
										</button>
									</motion.div>
								)}
							</div>

							{/* Animated accent line */}
							<motion.div
								className="absolute bottom-0 left-0 h-1 rounded-b-xl"
								style={{ backgroundColor: cert.color }}
								initial={{ width: 0 }}
								whileHover={{ width: "100%" }}
								transition={{ duration: 0.3 }}
							/>
						</motion.div>
					))}
				</div>

				{/* Certificates Summary */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.8 }}
					className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
				>
					{[
						{ number: "6+", label: "Certificates Earned", color: "#10B981" },
						{ number: "4", label: "Tech Platforms", color: "#3B82F6" },
						{ number: "150+", label: "Learning Hours", color: "#8B5CF6" },
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ delay: 2 + index * 0.1, type: "spring" }}
							className="p-4 bg-white rounded-xl shadow-sm"
						>
							<motion.div
								className="text-xl font-bold"
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
							<div className="text-sm text-gray-600">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</>
	)
}
