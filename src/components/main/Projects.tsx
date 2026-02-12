import getColor from "../../utils/getColor"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { useTranslation } from "../../context/LanguajeContext"
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../types/projects"

import ReactImg from "../../assets/projects/React.webp"
import autoImg from "../../assets/projects/auto.webp"
import viteFeaturedImg from "../../assets/projects/vite-featured.avif"
import cocinaconnosotrosImg from "../../assets/projects/cocinaconnosotros.png"
import termalImg from "../../assets/projects/termal.png"
import clientsImg from "../../assets/clients.jpg"
import criptoImg from "../../assets/cripto.webp"
import veterinariaImg from "../../assets/veterinaria.png"
import budgetImg from "../../assets/budget.avif"
import cubanCasImg from "../../assets/projects/cuban-cas.png"

interface ImageMap {
  [key: string]: string;
}

const imageMap: ImageMap = {
  "Sistema de Gestión de Recetas de Comida": cocinaconnosotrosImg,
  "Food Recipe Management System": cocinaconnosotrosImg,
  "Termal Print Pro (MPV)": termalImg,
  "Thermal Print Pro (MVP)": termalImg,
  "Buscador de Noticias": ReactImg,
  "News Search Engine": ReactImg,
  "App de Clima": viteFeaturedImg,
  "Weather App": viteFeaturedImg,
  "Cotizador de Seguros de Autos": autoImg,
  "Car Insurance Quoter": autoImg,
  "CRM para Gestión de Clientes": clientsImg,
  "Client Management CRM": clientsImg,
  "Cotizador de Criptomonedas": criptoImg,
  "Cryptocurrency Quoter": criptoImg,
  "Gestión de Pacientes de una Veterinaria": veterinariaImg,
  "Veterinary Patient Management": veterinariaImg,
  "Control de Presupuesto": budgetImg,
  "Budget Tracker": budgetImg,
	"Proyecto de Tesis de Ciberseguridad": cubanCasImg,
	"Cybersecurity Thesis Project": cubanCasImg,
}

const Projects: React.FC = () => {
  const { t } = useTranslation()

  const projects = t("projects")

  return (
		<div className="border-b border-slate-800/50 pb-8">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="section-title"
			>
				{t("project_name")}
			</motion.h2>
			<div>
				{Array.isArray(projects) &&
					projects.map((project: projects, index) => (
						<div key={index} className="mb-16 flex flex-wrap lg:justify-center items-center">
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
								className="w-full lg:w-1/3 sm:w-1/2"
							>
								<div className="relative group">
									<div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
									<img
										src={imageMap[project.title] || "/placeholder.svg"}
										alt={project.title}
										className="relative mb-6 rounded-xl shadow-lg w-full h-64 object-cover border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-300 group-hover:shadow-xl"
									/>
								</div>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								initial={{ opacity: 0, x: 100 }}
								transition={{ duration: 1 }}
								className="w-full max-w-xl lg:w-2/3 mt-6 md:mt-0 sm:mb-8 lg:pl-8"
							>
								<div className="flex items-center mb-4 sm:mt-4">
									<h3 className="text-2xl font-semibold text-slate-200 hover:text-white transition-colors duration-300">
										{project.title}
									</h3>
									<div className="flex items-center ml-4 space-x-2">
										{project.url && (
											<a
												href={project.url}
												className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
												target="_blank"
												rel="noopener noreferrer"
												title="Open in new tab"
											>
												<FaExternalLinkAlt
													className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
													style={{ fontSize: 16 }}
												/>
											</a>
										)}
										{project.code && (
											<a
												href={project.code}
												className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group"
												target="_blank"
												rel="noopener noreferrer"
												title="View code"
											>
												<FaGithub
													className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
													style={{ fontSize: 16 }}
												/>
											</a>
										)}
									</div>
								</div>
								<p className="mb-6 text-slate-400 leading-relaxed">{project.description}</p>

								<div className="flex flex-wrap gap-2">
									{project.technologies?.map((tech: string, index: number) => (
										<span
											key={index}
											className={`tech-badge ${getColor(
												tech
											)}`}
										>
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Projects

