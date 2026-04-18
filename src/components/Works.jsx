import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../utils/i18n";

const ProjectCard = ({
  index,
  tags,
  source_code_link,
  live_demo_link,
  image,
  t
}) => {
  const projKey = `proj${index + 1}`;

  return (
    <motion.div variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", (index % 3) * 0.1, 0.75)}>
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeedMs={450}
        className='p-5 rounded-3xl sm:w-[360px] w-full glassmorphism border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] premium-shine overflow-hidden'
      >
        <div className='relative w-full'>
          <div className='w-full rounded-2xl bg-white/5 glassmorphism overflow-hidden relative group'>
             {image ? (
               <img
                 src={image}
                 alt='project_image'
                 className='w-full h-auto object-cover'
               />
             ) : (
               /* Premium dynamic gradient placeholder with lower opacity */
               <div className={`h-[230px] w-full bg-gradient-to-br ${
                 index === 0 ? "from-indigo-600/10 to-purple-600/10" : 
                 index === 1 ? "from-blue-600/10 to-teal-600/10" : 
                 "from-pink-600/10 to-orange-600/10"
               } flex flex-col items-center justify-center border border-white/5`}>
                   <div className="w-16 h-16 rounded-full bg-white/5 blur-xl absolute" />
                   <span className="text-white font-black text-4xl opacity-10 select-none">Project</span>
                   <span className="text-white/40 font-bold uppercase tracking-widest text-[10px] z-10 text-center px-2">
                      {t(`works.items.${projKey}.name`)}
                   </span>
               </div>
             )}
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <Github className="w-1/2 h-1/2 text-white" />
            </div>
            <div
              onClick={() => window.open(live_demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <ExternalLink className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{t(`works.items.${projKey}.name`)}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{t(`works.items.${projKey}.desc`)}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${projKey}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
               #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest'>{t('works.subtitle')}</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>{t('works.title')}</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t('works.description')}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-4 sm:gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
             key={`project-${index}`} 
             index={index} 
             tags={project.tags} 
             source_code_link={project.source_code_link} 
             live_demo_link={project.live_demo_link} 
             image={project.image}
             t={t} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
