import { motion } from "framer-motion";

import { focusAreas } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn } from "../utils/motion";
import { useLanguage } from "../utils/i18n";
import SectionHeading from "./SectionHeading";

const About = ({ headingId }) => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeading
        id={headingId}
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.description")}
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, index) => (
          <motion.li
            key={area}
            variants={fadeIn("up", "tween", index * 0.05, 0.5)}
            className="surface p-6"
          >
            <h3 className="text-lg font-semibold text-white">{t(`about.areas.${area}.title`)}</h3>
            <p className="mt-3 leading-relaxed text-secondary">{t(`about.areas.${area}.text`)}</p>
          </motion.li>
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(About, "about");
