import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDjango } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import {motion} from "framer-motion"
import { useTranslation } from "../../context/LanguajeContext"	

const iconVariants = (duration: number) => ({
  initial: {y: -10 },
  animate: {
    y: [10, - 10],
    transition: {
    duration: duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse" as "reverse",
  }
},
})
const Technologies = () => {

  const {t} = useTranslation();

  return (
    <div className="border-b border-slate-800/50 pb-24 lg:mb-35">
      <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 1.5}}
        className="section-title"
      >
        {t('technologies.title')}
      </motion.h2>
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <FaReact className="text-7xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"       
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <RiNextjsLine className="text-7xl text-slate-300 group-hover:text-white transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <SiMongodb className="text-7xl text-green-500 group-hover:text-green-400 transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/20 to-green-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <SiDjango className="text-7xl text-green-700 group-hover:text-green-600 transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(6.75)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <DiRedis className="text-7xl text-red-600 group-hover:text-red-500 transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(8)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <FaNodeJs className="text-7xl text-green-500 group-hover:text-green-400 transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(7.5)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/20 to-blue-700/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <BiLogoPostgresql className="text-7xl text-cyan-700 group-hover:text-cyan-600 transition-colors duration-300"/>
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"       
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <SiNestjs style={{ color: "#E0234E" }} className="text-7xl group-hover:text-pink-600 transition-colors duration-300" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
          <div className="relative rounded-2xl border border-slate-700/30 p-6 bg-slate-900/50 backdrop-blur-sm group-hover:border-slate-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
            <RiTailwindCssFill className="text-7xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"/>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies