import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiDjango, SiNestjs, SiTypescript, SiBootstrap, SiJquery,
  SiSupabase, SiVite, SiCypress
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// Ciberseguridad
import { MdSecurity } from "react-icons/md";
import { TbShieldLock } from "react-icons/tb";
import { BsHddNetwork } from "react-icons/bs";
import { AiOutlinePieChart, AiOutlineFileSearch } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";

// OSINT y Ciberinteligencia
import { GiSpiderWeb, GiMagnifyingGlass } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";

import { motion } from "framer-motion";
import { useTranslation } from "../../context/LanguajeContext";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as "reverse",
    },
  },
});

const TechIcon = ({ icon, name, gradient, duration }: any) => (
  <motion.div
    variants={iconVariants(duration)}
    initial="initial"
    animate="animate"
    className="relative group flex flex-col items-center justify-center w-28"
  >
    <div
      className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}
    ></div>
    <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="text-7xl group-hover:scale-105 transition-transform duration-300 flex justify-center">
        {icon}
      </div>
    </div>
    <span className="mt-3 text-slate-300 text-sm font-medium text-center group-hover:text-white transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

const Technologies = () => {
  const { t } = useTranslation();

  const devTechs = [
    { icon: <FaReact className="text-cyan-400" />, name: "React.js", gradient: "from-cyan-600/20 to-blue-600/20" },
    { icon: <RiNextjsLine className="text-white" />, name: "Next.js", gradient: "from-slate-600/20 to-gray-600/20" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", gradient: "from-green-600/20 to-emerald-600/20" },
    { icon: <SiDjango className="text-green-700" />, name: "Django", gradient: "from-green-800/20 to-green-600/20" },
    { icon: <BiLogoPostgresql className="text-cyan-700" />, name: "PostgreSQL", gradient: "from-cyan-700/20 to-blue-700/20" },
    { icon: <SiNestjs style={{ color: "#E0234E" }} />, name: "Nest.js", gradient: "from-red-600/20 to-pink-600/20" },
    { icon: <RiTailwindCssFill className="text-cyan-400" />, name: "TailwindCSS", gradient: "from-cyan-600/20 to-blue-600/20" },
    { icon: <FaPython className="text-yellow-400" />, name: "Python", gradient: "from-yellow-600/20 to-amber-500/20" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript", gradient: "from-blue-500/20 to-indigo-500/20" },
    { icon: <SiBootstrap className="text-purple-400" />, name: "Bootstrap", gradient: "from-purple-600/20 to-indigo-600/20" },
    { icon: <SiJquery className="text-blue-300" />, name: "jQuery", gradient: "from-blue-300/20 to-blue-500/20" },
    { icon: <SiSupabase className="text-green-600" />, name: "Supabase", gradient: "from-emerald-600/20 to-green-600/20" },
    { icon: <SiVite className="text-purple-400" />, name: "Vite", gradient: "from-purple-500/20 to-fuchsia-500/20" },
    { icon: <SiCypress className="text-fuchsia-500" />, name: "Cypress", gradient: "from-fuchsia-500/20 to-pink-500/20" },
    { icon: <AiOutlineFileSearch className="text-lime-400" />, name: "Allure", gradient: "from-lime-400/20 to-green-400/20" },
  ];

  const cyberTechs = [
    { icon: <MdSecurity className="text-rose-500" />, name: "Seguridad", gradient: "from-rose-500/20 to-red-500/20" },
    { icon: <TbShieldLock className="text-red-400" />, name: "Pentesting", gradient: "from-red-400/20 to-pink-400/20" },
    { icon: <BsHddNetwork className="text-blue-400" />, name: "Análisis de Red", gradient: "from-blue-400/20 to-sky-400/20" },
    { icon: <AiOutlinePieChart className="text-orange-400" />, name: "Monitoreo", gradient: "from-orange-400/20 to-amber-400/20" },
    { icon: <GiArtificialIntelligence className="text-emerald-400" />, name: "Jupyter / Orange", gradient: "from-emerald-400/20 to-teal-400/20" },
    { icon: <BsHddNetwork className="text-teal-400" />, name: "WebSpy Analyzer", gradient: "from-teal-400/20 to-cyan-400/20" },
  ];

  const osintTechs = [
    { icon: <GiSpiderWeb className="text-sky-500" />, name: "SpiderFoot", gradient: "from-sky-500/20 to-blue-500/20" },
    { icon: <TbReportSearch className="text-violet-600" />, name: "Maltego", gradient: "from-violet-600/20 to-purple-600/20" },
    { icon: <GiMagnifyingGlass className="text-indigo-500" />, name: "Google Dorks", gradient: "from-indigo-500/20 to-blue-400/20" },
  ];

  return (
    <div className="border-b border-slate-800/50 pb-24 lg:mb-35">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="section-title"
      >
        {t("technologies.title")}
      </motion.h2>

      {/* --- Desarrollo Web --- */}
      <h3 className="text-xl text-cyan-400 font-semibold text-center mt-10 mb-6">
        💻 Desarrollo Web
      </h3>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 mb-12"
      >
        {devTechs.map((tech, i) => (
          <TechIcon key={i} icon={tech.icon} name={tech.name} gradient={tech.gradient} duration={2 + i * 0.3} />
        ))}
      </motion.div>

      {/* --- Ciberseguridad --- */}
      <h3 className="text-xl text-rose-400 font-semibold text-center mt-10 mb-6">
        🛡️ Ciberseguridad
      </h3>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8 mb-12"
      >
        {cyberTechs.map((tech, i) => (
          <TechIcon key={i} icon={tech.icon} name={tech.name} gradient={tech.gradient} duration={2.5 + i * 0.4} />
        ))}
      </motion.div>

      {/* --- Ciberinteligencia y OSINT --- */}
      <h3 className="text-xl text-emerald-400 font-semibold text-center mt-10 mb-6">
        🌐 Ciberinteligencia y OSINT
      </h3>
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {osintTechs.map((tech, i) => (
          <TechIcon key={i} icon={tech.icon} name={tech.name} gradient={tech.gradient} duration={3 + i * 0.4} />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
