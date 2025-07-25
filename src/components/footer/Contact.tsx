import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguajeContext";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
	const { t } = useTranslation();
	return (
		<div className="border-b border-slate-800/50 pb-20">
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className="section-title"
			>
				{t("contact.title")}
			</motion.h2>
			<div className="text-center space-y-6">
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
					className="card p-8 max-w-2xl mx-auto"
				>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="flex items-center justify-center mb-4"
					>
						<FaMapMarkerAlt className="text-purple-400 mr-3 text-xl" />
						<p className="text-lg text-slate-300">
							{t("contact.address")}
						</p>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex items-center justify-center mb-6"
					>
						<FaPhone className="text-purple-400 mr-3 text-xl" />
						<p className="text-lg text-slate-300">
							{t("contact.phoneNo")}
						</p>
					</motion.div>
					<motion.a
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="btn-primary inline-flex items-center"
						href={`mailto:${t("contact.email")}`}
					>
						<FaEnvelope className="mr-2" />
						{t("contact.email")}
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
