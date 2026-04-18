import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { services } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../utils/i18n";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.5)}
    className='xs:w-[190px] w-full'
  >
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeedMs={450}
      className='w-full min-h-[180px] p-6 rounded-[28px] glassmorphism border border-white/10 flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(145,94,255,0.4)] premium-shine overflow-hidden group'
    >
      <div className='w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center relative transition-colors duration-300 group-hover:bg-[#915eff]/20'>
        <div className='absolute inset-0 rounded-2xl blur-lg opacity-10 bg-[#915eff] group-hover:opacity-30' />
        <div className='text-[#915eff] group-hover:scale-110 transition-transform'>
          {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
      </div>

      <h3 className='text-white text-[16px] font-bold text-center leading-tight'>
        {title}
      </h3>
    </Tilt>
  </motion.div>
);

const About = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-[0.3em] font-medium'>{t('about.intro')}</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2'>
          {t('about.title1')} <span className='text-[#915eff]'>{t('about.title2')}</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t('about.description')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-5 sm:gap-10 justify-center'>
        {services.map((service, index) => {
          const idMap = ['web', 'mobile', 'desktop', 'fullstack'];
          return (
            <ServiceCard 
              key={service.title} 
              index={index} 
              icon={service.icon} 
              title={t(`about.services.${idMap[index]}`)} 
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
