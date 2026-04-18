import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../utils/i18n";

const ExperienceCard = ({ experience, index }) => {
  const { t, isRtl } = useLanguage();
  const side = index % 2 === 0 ? "left" : "right";
  
  return (
    <VerticalTimelineElement
      contentClassName="glassmorphism border border-white/10 premium-shine"
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        color: "#fff",
        padding: "1.25rem",
      }}
      date={t(`experience.items.item${index + 1}.date`)}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-[60%] h-[60%] object-contain text-white'>
             {experience.icon}
          </div>
        </div>
      }
    >
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "text-right" : "text-left"}>
        <div>
          <h3 className='text-white text-[24px] font-bold'>{t(`experience.items.item${index + 1}.title`)}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {t(`experience.items.item${index + 1}.company`)}
          </p>
        </div>

        <ul className={`mt-5 list-disc space-y-2 ${isRtl ? 'pr-5 mr-2' : 'ml-5 pl-1'}`}>
          {t(`experience.items.item${index + 1}.points`).map((point, pointIndex) => (
            <li
              key={`experience-point-${pointIndex}`}
              className='text-white-100 text-[14px] tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useLanguage();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-widest'>{t('experience.subtitle')}</p>
        <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>{t('experience.title')}</h2>
      </motion.div>

      <div className='mt-20 flex flex-col' dir={useLanguage().isRtl ? "rtl" : "ltr"}>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
