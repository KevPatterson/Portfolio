import React from "react"
import {motion} from "framer-motion"

import {useTranslation} from "../../context/LanguajeContext"
import getColor from "../../utils/getColor";

const Experiencies: React.FC = () => {

  const {t} = useTranslation();

  const experiences = t("experiences")

  return (
    <div className="border-b border-slate-800/50 pb-8">
      <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: 100}}
        transition={{duration: 0.5}}
        className="section-title"
      >
        {t('experiences_title')}
      </motion.h2>
      <div className="space-y-12">
        {Array.isArray(experiences) &&
        experiences.map((experience, index) => (
          <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1}}
            key={index} 
            className="card p-8"
          >
            <div className="flex flex-wrap lg:justify-between items-start">
              <div className="w-full lg:w-1/4 mb-4 lg:mb-0"> 
                <p className="text-lg font-medium text-slate-400 bg-slate-800/50 px-4 py-2 rounded-lg inline-block">
                  {experience.year}
                </p>
              </div>
              <motion.div
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h3 className="text-2xl font-semibold text-slate-200 mb-2">
                  {experience.role}
                </h3>
                <p className="text-lg text-purple-300 mb-4 font-medium">
                  {experience.company}
                </p>
                <p className="mb-6 text-slate-400 leading-relaxed">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className={`tech-badge ${getColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experiencies