import React from "react";
import AboutPic from "../../assets/user/about.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguajeContext";

const About: React.FC = () => {
	const { t } = useTranslation();
	return (
		<div className="border-b border-slate-800/50 pb-8">
			<motion.h2 
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="section-title"
			>
				{t("about.title1")}{" "}
				<span className="text-slate-500">{t("about.title2")}</span>
			</motion.h2>
			<div className="flex flex-wrap items-center">
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 lg:p-8"
				>
					<div className="flex items-center justify-center">
						<div className="relative group">
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
							<img
								src={AboutPic}
								alt="profile"
								draggable="false"
								onDragStart={(e) => e.preventDefault()}
								className="relative rounded-2xl w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-300"
							/>
						</div>
					</div>
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 200 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 lg:pl-8"
				>
					<div className="flex flex-col items-center lg:items-start">
						<p className="my-4 max-w-xl py-6 text-slate-300 leading-relaxed text-lg">
							{t("about.text")}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
