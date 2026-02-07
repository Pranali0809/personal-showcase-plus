import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
	{
		id: 1,
		title: "CloudOps",
		description:
			"An agentic cloud operations platform that analyzes live infrastructure data and converts it into actionable cost, security, and performance decisions.",
		image: "/images/CloudOps.png", // Updated path to the new images folder
		tech: ["Python", "AWS", "Bedrock", "Dynamo DB", "OpenAI"],
		liveUrl: "https://www.youtube.com/watch?v=Y7J7wXuzpDU",
		githubUrl: "https://github.com/parth1504/cost-eco-vision",
		featured: true,
		details: {
			whatItDoes: [
				"Monitors AWS cloud resources and detects inefficiencies, misconfigurations, and security risks in real time.",
				"Provides a unified dashboard for resource insights, alerts, and operational visibility.",
			],
			whatIWorkedOn: [
				"Integrated AWS services (EC2, S3, DynamoDB, Cost Explorer) using Boto3 for metrics and actions",
				"Designed and implemented agent-based reasoning workflows using AWS Bedrock and FastAPI.",
			],
			challenges: [
				"Optimized query performance for handling large volumes of cloud cost data",
				"Implemented efficient caching strategies for real-time updates",
			],
		},
	},
	{
		id: 2,
		title: "Vaidya.ai",
		description:
			"Vaidya.ai is an AI-powered healthcare platform that enables intelligent pre-appointment assessment and AI-assisted diagnosis with doctors as the human-in-the-loop.",
		image: "/images/Vaidyai.png", // Updated path to the new images folder
		tech: ["GCP", "Firestore", "ReactJS", "Agent Development Kit","Python Fast API"],
		liveUrl: "https://www.youtube.com/watch?v=w5L2xGES9GQ",
		githubUrl: "https://github.com/Pranali0809/wellspring-dialogue",
		featured: true,
		details: {
			whatItDoes: [
				"Processes doctor–patient conversations using voice transcription and AI-assisted diagnostic reasoning.",
				"Provides personalized health recommendations based on user input",
				"Collects structured patient history via an AI pre-appointment agent and maintains a longitudinal medical timeline.",
			],
			whatIWorkedOn: [
				"Designed and integrated agentic workflows using Med-LLMs, Whisper, VectorDB (RAG), and MCP-based tool calling.",
				"Built a full-stack system with FastAPI and Firestore to manage patients, appointments, and AI-generated outputs.",
			],
			challenges: [
				"Ensured HIPAA-compliant data handling practices",
				"Fine-tuned the AI model for medical accuracy",
			],
		},
	},
	{
		id: 3,
		title: "Smart Docs",
		description:
			"Built a real-time collaborative document editing platform with conflict-free editing and document-aware AI assistance.",
		image: "/images/SmartDocs.png", // Updated path to the new images folder
		tech: [ "GraphQL", "Apollo Server", "Websockets", "ShareDB", "MongoDB","React JS"],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
		details: {
			whatItDoes: [
				"Enables multiple users to edit the same document simultaneously with live cursor and content updates.",
				"Allows users to query and chat with the document to get context-aware answers based on its content.",
				
			],
			whatIWorkedOn: [
				"Implemented real-time collaboration using ShareDB and Operational Transformation (OT) for conflict resolution.",
				"Designed GraphQL APIs and subscriptions (websockets) for document updates, user presence, and access control.",
				"Integrated a LangChain-based RAG pipeline with vector search to enable document-grounded conversational querying.",
			],
			challenges: [
				"Handled complex document formats and edge cases",
				"Optimized WebSocket performance for large document sets",
			],
		},
	},
	{
		id: 4,
		title: "Plan Squad",
		description:
			"A collaborative group decision-making app that helps friends vote, plan hangouts, and finalize outings seamlessly in real time.",
		image: "/images/base44.png", // Updated path to the new images folder
		tech: ["Vibecoded", "Base44",],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
		details: {
			whatItDoes: [
				"Enables groups to vote on restaurants, movies, or activities within shared sessions.",
				"Aggregates votes to show ranked results with clear visual cues (gold, silver, bronze)",
				"Converts finalized results into planned hangouts with invitations and memories.",
			],
			whatIWorkedOn: [
				"[Vibecoded]",

			],
			challenges: [
				"Optimized TensorFlow models for mobile performance",
				"Implemented offline-first architecture for gym environments",
			],
		},
	},
	{
		id: 5,
		title: "Hiring Automation Platform",
		description:
			"Built an automated pipeline using Zapier to extract hiring and internship opportunities from Instagram Reel transcripts and convert them into a structured, trackable dataset.",
		image: "/images/Zapier.png", // Updated path to the new images folder
		tech: ["Automation", "Zapier", "Supadata", "OpenAI"],
		liveUrl: "#",
		githubUrl: "#",
		featured: false,
		details: {
			whatItDoes: [
				"Automatically processes Instagram Reel transcripts to identify companies, roles, and hiring programs.",
				"Structures unorganized video content into tabular data with deadlines, links, and opportunity details.",
			],
			whatIWorkedOn: [
				"Designed a multi-step Zapier workflow with AI-based information extraction using OpenAI API and indexed looping over results.",
				"Integrated third-party transcription output USING Supadata API with AI parsing and Google Sheets as a persistence layer.",
			],
			challenges: [
				"Designed efficient data pipelines for large-scale datasets",
				"Implemented model versioning and A/B testing capabilities",
			],
		},
	},
];

export const ProjectsSection = () => {
	const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section id="projects" className="py-20 bg-muted/30">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
						Featured <span className="gradient-text">Projects</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						A showcase of my recent work, highlighting technical expertise and creative problem-solving
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-2 gap-8"
				>
					{projects.map((project) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							className={`group card-artistic overflow-hidden hover-lift cursor-pointer ${
								project.featured ? "md:col-span-2 lg:col-span-1" : ""
							}`}
							onClick={() => setSelectedProject(project)}
						>
							{/* Project Image */}
							<div className="relative overflow-hidden bg-muted aspect-video">
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
								<div className="absolute top-4 right-4 z-20 flex gap-2">
									<motion.a
										href={project.liveUrl}
										onClick={(e) => e.stopPropagation()}
										className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<ExternalLink className="w-4 h-4" />
									</motion.a>
									<motion.a
										href={project.githubUrl}
										onClick={(e) => e.stopPropagation()}
										className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<Github className="w-4 h-4" />
									</motion.a>
								</div>
								<div className="absolute bottom-0 left-0 right-0 p-6 z-20">
									<div className="flex flex-wrap gap-2">
										{project.tech.slice(0, 4).map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
											>
												{tech}
											</span>
										))}
										{project.tech.length > 4 && (
											<span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
												+{project.tech.length - 4}
											</span>
										)}
									</div>
								</div>
								{/* Project Image */}
								<img
									src={project.image}
									alt={project.title}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>

							{/* Project Content */}
							<div className="p-6">
								<h3 className="project-title text-xl font-display font-semibold mb-3">
  {project.title}
</h3>

								<p className="text-muted-foreground leading-relaxed">
									{project.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Project Detail Modal */}
			<Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
				<DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
					{selectedProject && (
						<>
							<DialogHeader>
								<DialogTitle className="text-2xl font-display font-bold gradient-text">
									{selectedProject.title}
								</DialogTitle>
							</DialogHeader>

							<div className="space-y-6 mt-4">
								{/* Project Image Placeholder */}
								{/* <img
									src={selectedProject.image}
									alt={selectedProject.title}
									className="w-full h-full aspect-video bg-muted rounded-lg border border-border object-cover"
								/> */}

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2">
									{selectedProject.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Description */}
								<p className="text-muted-foreground leading-relaxed">
									{selectedProject.description}
								</p>

								{/* What it does */}
								<div>
									<h4 className="font-semibold text-lg mb-3">What it does</h4>
									<ul className="space-y-2">
										{selectedProject.details.whatItDoes.map((item, index) => (
											<li key={index} className="flex items-start gap-2 text-muted-foreground">
												<span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div>

								{/* What I worked on */}
								<div>
									<h4 className="font-semibold text-lg mb-3">What I worked on</h4>
									<ul className="space-y-2">
										{selectedProject.details.whatIWorkedOn.map((item, index) => (
											<li key={index} className="flex items-start gap-2 text-muted-foreground">
												<span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div>

								{/* Challenges & Outcomes
								<div>
									<h4 className="font-semibold text-lg mb-3">Challenges & Outcomes</h4>
									<ul className="space-y-2">
										{selectedProject.details.challenges.map((item, index) => (
											<li key={index} className="flex items-start gap-2 text-muted-foreground">
												<span className="w-1.5 h-1.5 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
												{item}
											</li>
										))}
									</ul>
								</div> */}

								{/* Action Buttons */}
								<div className="flex gap-4 pt-4">
									<a
										href={selectedProject.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="button-primary flex items-center gap-2"
									>
										<ExternalLink className="w-4 h-4" />
										View Live
									</a>
									<a
										href={selectedProject.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="button-accent flex items-center gap-2"
									>
										<Github className="w-4 h-4" />
										View Code
									</a>
								</div>
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
};
