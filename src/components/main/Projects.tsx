import getColor from "../../utils/getColor"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaChevronDown } from "react-icons/fa"
import { useTranslation } from "../../context/LanguajeContext"
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../types/projects"
import { useState } from "react"

// Imágenes locales de fallback (solo para proyectos sin URL pública)
import ReactImg from "../../assets/projects/React.webp"
import autoImg from "../../assets/projects/auto.webp"
import viteFeaturedImg from "../../assets/projects/vite-featured.avif"
import clientsImg from "../../assets/clients.jpg"
import criptoImg from "../../assets/cripto.webp"
import veterinariaImg from "../../assets/veterinaria.png"
import budgetImg from "../../assets/budget.avif"
import websecImg from "../../assets/projects/websec.png"

interface ImageMap {
  [key: string]: string;
}

// Fallback solo para proyectos sin `url` (no tienen preview en microlink)
const fallbackImageMap: ImageMap = {
  "WebSec Framework - Framework para auditorías automáticas de seguridad web": websecImg,
  "WebSec Framework - Framework for automated web security audits": websecImg,
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
  "Budget Control": budgetImg,
}

const getMicrolinkImageUrl = (url: string): string =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url`

interface ProjectImageProps {
  project: projects
  className?: string
}

const ProjectImage: React.FC<ProjectImageProps> = ({ project, className }) => {
  const fallbackSrc = fallbackImageMap[project.title] || "/placeholder.svg"
  const initialSrc = project.url ? getMicrolinkImageUrl(project.url) : fallbackSrc
  const [src, setSrc] = useState<string>(initialSrc)
  const [isLoading, setIsLoading] = useState<boolean>(!!project.url)

  return (
    <div className="relative w-full h-64">
      {isLoading && (
        <div className="absolute inset-0 rounded-xl bg-slate-800/60 animate-pulse flex items-center justify-center">
          <span className="text-slate-500 text-sm">Loading preview...</span>
        </div>
      )}
      <img
        src={src}
        alt={project.title}
        className={className}
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s" }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (src !== fallbackSrc) setSrc(fallbackSrc)
          setIsLoading(false)
        }}
      />
    </div>
  )
}

const Projects: React.FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const projects = t("projects")

  return (
		<div className="border-b border-slate-800/50 pb-8">
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="flex justify-center mb-8"
			>
				<div className="flex items-center cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
					<h2 className="text-4xl font-light tracking-tight bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-purple-300 group-hover:to-purple-400 transition-all duration-300">
						{t("project_name")}
					</h2>
					<motion.div
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.3 }}
						className="text-purple-400 group-hover:text-purple-300 ml-4"
					>
						<FaChevronDown size={24} />
					</motion.div>
				</div>
			</motion.div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.4 }}
					>
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
									<ProjectImage
										project={project}
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
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default Projects

