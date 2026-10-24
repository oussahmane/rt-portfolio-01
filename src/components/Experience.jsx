import { workItems } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { useLanguage } from "../utils/i18n";
import SectionHeading from "./SectionHeading";

const Experience = ({ headingId }) => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeading
        id={headingId}
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        description={t("experience.description")}
      />

      <ol className="mt-12 flex flex-col gap-4">
        {workItems.map((item, index) => {
          const points = t(`experience.items.${item.id}.points`);
          const list = Array.isArray(points) ? points : [];

          return (
            <li key={item.id} className="surface p-6 sm:p-8">
              <p className="font-tech text-sm text-[#d5e2f4]">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {t(`experience.items.${item.id}.title`)}
              </h3>
              <p className="mt-1 text-secondary">{t(`experience.items.${item.id}.context`)}</p>
              <ul className="mt-5 list-disc space-y-2 ps-5 leading-relaxed text-secondary">
                {list.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
