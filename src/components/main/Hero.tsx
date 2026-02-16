import profilePic from "../../assets/user/Profile.png"
import {motion} from "framer-motion"
import { useTranslation} from "../../context/LanguajeContext"
import { TextHover } from "../TextHover"


const container = (delay: number) => ({
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x: 0, transition: {duration: 0.5, delay: delay}},
})

const Hero: React.FC = () => {

  const {t} = useTranslation();

  return (
    <div className="border-b border-slate-800/50 pb-8 lg:mb-35">
      <div className="flex flex-wrap items-center py-16">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <TextHover text={t('hero.name')} className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl gradient-text" />
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight font-medium bg-gradient-to-r from-blue-300 via-slate-300 to-purple-400 bg-clip-text text-transparent"
            >
              {t('hero.fullStackDeveloper')}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light tracking-tight text-slate-300 leading-relaxed"
            >
              {t('hero.content')}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.div
              initial={{opacity: 0, x: 100, scale: 0.8}}
              animate={{opacity: 1, x: 0, scale: 1}}
              transition={{duration: 1, delay: 1.2}}
              className="relative group"
            >
              <div className="absolute rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src={profilePic} 
                alt="profile"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                className="relative object-contain w-80 h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl transition-all duration-300" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
