import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { skills } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../utils/i18n";

const SkillCard = ({ name, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    className="xs:w-28 w-[calc(50%-12px)]"
  >
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeedMs={450}
      className="w-full h-28 flex flex-col items-center justify-center gap-2 p-4 rounded-3xl bg-white/5 border border-white/10 glassmorphism hover:bg-white/10 transition-all hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] group overflow-hidden premium-shine"
    >
      <div className='w-full h-full flex flex-col items-center justify-center text-white/70 group-hover:text-white text-[13px] font-bold text-center uppercase tracking-tighter overflow-hidden transition-colors'>
         <div className="w-1.5 h-1.5 rounded-full bg-[#915eff] mb-2 blur-[1px] group-hover:scale-150 transition-transform shadow-[0_0_8px_#915eff]" />
         {name}
         <div className="mt-2 w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(129,140,248,0.5)]"
            />
         </div>
      </div>
    </Tilt>
  </motion.div>
);

const Skills = () => {
  const { t } = useLanguage();

  return (
    <div className="relative z-0">
      
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest'>{t('skills.subtitle')}</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>{t('skills.title')}</h2>
      </motion.div>

      <div className='mt-20 flex flex-col gap-10 sm:gap-16'>
        {skills.map((category) => {
          const categoryIdMap = {
            "Frontend": "frontend",
            "Backend": "backend",
            "Mobile & Desktop": "mobile"
          };

          return (
            <div key={category.category}>
              <h3 className='text-white text-[20px] font-semibold mb-5 sm:mb-8 border-l-4 border-indigo-500 pl-4'>
                {t(`skills.categories.${categoryIdMap[category.category]}`)}
              </h3>
              <div className='flex flex-wrap items-center gap-4 sm:gap-6'>
                {category.items.map((skill, index) => (
                  <SkillCard key={skill.name} name={skill.name} index={index} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
