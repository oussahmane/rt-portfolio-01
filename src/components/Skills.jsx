import { skillGroups } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { useLanguage } from "../utils/i18n";
import SectionHeading from "./SectionHeading";

const Skills = ({ headingId }) => {
  const { t } = useLanguage();

  return (
    <>
      <SectionHeading
        id={headingId}
        eyebrow={t("skills.eyebrow")}
        title={t("skills.title")}
        description={t("skills.description")}
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.id} aria-labelledby={`skill-${group.id}`}>
            <h3 id={`skill-${group.id}`} className="text-base font-semibold text-white">
              {t(`skills.categories.${group.id}`)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-tech rounded-full border border-white/10 px-3 py-1.5 text-sm text-[#e7eef8]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
