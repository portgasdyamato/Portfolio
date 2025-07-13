"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Calendar, ExternalLink } from "lucide-react"

const certificates = [
	{
		title: "Gen AI by GoogleCloud",
		issuer: "Google Cloud",
		date: "6 June 2025",
		status: "Completed",
		type: "Professional Certificate",
		color: "#61DAFB",
		credentialId: "2025H2S04GENAI-A100313",
		certificateUrl: "https://www.linkedin.com/posts/sakshi-902777290_genaiacademy-certificateofcompletion-googlecloud-activity-7336733236309463040-xgyO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaXv1IBLEEy9zfZtZus-NHd9uv4A480gxs",
	},
	{
		title: "AWS APAC - Solutions Architecture Job Simulation",
		issuer: "AWS",
		date: "10 May 2025",
		status: "Completed",
		type: "Vitual Internship",
		color: "#4285F4",
		credentialId: "QPCDgAGwgXEdJHFMv",
		certificateUrl: "https://www.linkedin.com/posts/sakshi-902777290_aws-cloudcomputing-solutionsarchitecture-activity-7326979671756079104-NwBG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaXv1IBLEEy9zfZtZus-NHd9uv4A480gxs", // Replace with actual URL
	},
	{
		title: "Artificial Intelligence Fundamentals",
		issuer: "IBM",
		date: "10 May 2025",
		status: "Completed",
		type: "Course Certificate",
		color: "#0A0A23",
		credentialId: "",
		certificateUrl: "https://www.credly.com/badges/35aa2436-4b24-4353-89eb-b206dbb92a09", // Replace with actual URL
	},
	{
		title: "Cisco Introduction to Data Science",
		issuer: "Cisco",
		date: "16 May 2025",
		status: "Completed",
		type: "Virtual Internship",
		color: "#FF6B35",
		credentialId: "",
		certificateUrl: "https://www.credly.com/badges/9d346f5d-0765-4dfb-acc2-3406c53d6b60/linked_in_profile", // Replace with actual URL
	},
	{
		title: "Accenture UK - Developer and Technology ",
		issuer: "Accenture",
		date: "16 May 2025",
		status: "Completed",
		type: "Virtual Internship",
		color: "#FF9900",
		credentialId: "RaGN8thJYRkFRd7m5",
		certificateUrl: "https://www.linkedin.com/posts/sakshi-902777290_forage-certificate-activity-7329145928525762561-kepT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaXv1IBLEEy9zfZtZus-NHd9uv4A480gxs", // No URL for in-progress certificates
	},
	{
		title: "Azure AI Fundamentals",
		issuer: "Microsoft",
		date: "16 May 2025",
		status: "Completed",
		type: "Professional Certificate",
		color: "#3178C6",
		credentialId: "",
		certificateUrl: "https://learn.microsoft.com/api/achievements/share/en-us/SakshiAgrahari-2382/9YX9KQ2U?sharingId=932EE269EA4F16DA", // Replace with actual URL
	},
]

export default function Certificates() {
	return (
		<div className="overflow-hidden">
			<div className="text-center mb-4">
				<motion.h2
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.9 }}
					className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text inline-flex items-center gap-2 mb-8 sm:mb-12 md:mb-16 mt-3 sm:mt-5 cursor-pointer"
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
					<FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
					Professional Certificates
				</motion.h2>
			</div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8 }}
				className="bg-[#FFE4E4] p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl ml-2 sm:ml-4 md:ml-8 mr-2 sm:mr-4 md:mr-8"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
					{certificates.map((cert, index) => (
						<motion.div
							key={cert.title}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1 + index * 0.1 }}
							whileHover={{ scale: 1.02, y: -2 }}
							className="bg-orange-200 achive-glass  bg-opacity-35 p-6 rounded-xl shadow-md hover:shadow-md transition-all cursor-pointer group relative overflow-hidden"
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
										<h3 className="font-semibold text-sm group-hover:text-gray-600 transition-colors" style={{ fontFamily: "Gamer", }}>
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
								{cert.status === "Completed" && cert.certificateUrl && (
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1.5 + index * 0.1 }}
										className="flex items-center justify-end"
									>
										<a
											href={cert.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 transition-colors hover:underline"
										>
											<span>View Certificate</span>
											<ExternalLink className="w-3 h-3" />
										</a>
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
						{ number: "9+", label: "Certificates Earned", color: "#10B981" },
						{ number: "5+", label: "Tech Platforms", color: "#3B82F6" },
						{ number: "350+", label: "Learning Hours", color: "#8B5CF6" },
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
		</div>
	)
}
