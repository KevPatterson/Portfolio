import { motion } from "framer-motion";

import { useTranslation } from "../../context/LanguajeContext";

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
					<motion.p
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="text-lg text-slate-300 mb-4"
					>
						{t("contact.address")}
					</motion.p>
					<motion.p
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-lg text-slate-300 mb-6"
					>
						{t("contact.phoneNo")}
					</motion.p>
					<motion.a
						whileInView={{ opacity: 1, x: 0 }}
						initial={{ opacity: 0, x: -100 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="btn-primary inline-block"
						href={`mailto:${t("contact.email")}`}
					>
						{t("contact.email")}
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
