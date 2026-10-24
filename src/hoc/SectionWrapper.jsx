import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        aria-labelledby={`${idName}-heading`}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: "some", margin: "0px 0px -10% 0px" }}
        className="relative z-0 mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-10"
      >
        <Component headingId={`${idName}-heading`} />
      </motion.section>
    );
  };

export default SectionWrapper;
