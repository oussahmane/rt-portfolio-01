import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../utils/i18n";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col md:flex-row items-start gap-5 z-10`}
      >

        <div className="w-full">
          <motion.h1 
            variants={textVariant(0.1)}
            className={`font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[40px] text-[32px] lg:leading-[98px] mt-2 ${useLanguage().isRtl ? 'text-right' : 'text-left'}`}
          >
            {t('hero.greeting')} <span className='text-[#915eff] drop-shadow-[0_0_15px_rgba(145,94,255,0.5)]'>{t('hero.name')}</span>
          </motion.h1>
          <motion.p 
            variants={textVariant(0.2)}
            className={`text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 ${useLanguage().isRtl ? 'text-right' : 'text-left'}`}
          >
            {t('hero.subtitle')} <br className='sm:block hidden' />
            {t('hero.subtitleBr')}
          </motion.p>
          
          <motion.div 
            variants={textVariant(0.3)}
            className={`mt-10 flex flex-col sm:flex-row gap-5 ${useLanguage().isRtl ? 'sm:flex-row-reverse' : ''}`}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#915eff] py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300'
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                   const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                   window.scrollTo({top: y, behavior: 'smooth'});
                }
              }}
            >
              {t('hero.viewProjects')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='border border-[#915eff] py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold transition-all duration-300'
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                   const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
                   window.scrollTo({top: y, behavior: 'smooth'});
                }
              }}
            >
              {t('hero.contactMe')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
