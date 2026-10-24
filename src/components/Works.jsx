import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { isProjectLink } from "../utils/links";
import { useLanguage } from "../utils/i18n";
import SectionHeading from "./SectionHeading";

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li
        key={tag}
        className="font-tech rounded-full border border-white/10 px-2.5 py-1 text-xs text-[#dbe6f5]"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const ProjectLinks = ({ source, demo, t }) => {
  const links = [
    isProjectLink(source) ? { href: source, label: t("works.source") } : null,
    isProjectLink(demo) ? { href: demo, label: t("works.demo") } : null,
  ].filter(Boolean);

  if (!links.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-secondary"
        >
          {link.label}
          <span className="sr-only">{t("nav.newTab")}</span>
        </a>
      ))}
    </div>
  );
};

const FeaturedProject = ({ project, t }) => {
  const name = t(`works.items.${project.id}.name`);
  const highlights = t(`works.items.${project.id}.highlights`);
  const list = Array.isArray(highlights) ? highlights : [];

  return (
    <article className="surface overflow-hidden">
      {project.image ? (
        <div className="aspect-video bg-[#101624]">
          <img
            src={project.image}
            alt={`${t("works.preview")}: ${name}`}
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : null}
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-5 text-sm font-medium text-[#d5e2f4]">{t("works.problemLabel")}</p>
        <p className="mt-1 leading-relaxed text-secondary">{t(`works.items.${project.id}.problem`)}</p>
        <p className="mt-4 text-sm font-medium text-[#d5e2f4]">{t("works.builtLabel")}</p>
        <p className="mt-1 leading-relaxed text-secondary">{t(`works.items.${project.id}.built`)}</p>
        <ul className="mt-4 list-disc space-y-1.5 ps-5 text-secondary">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="mt-5">
          <Tags tags={project.tags} />
        </div>
        <ProjectLinks source={project.source_code_link} demo={project.live_demo_link} t={t} />
      </div>
    </article>
  );
};

const Works = ({ headingId }) => {
  const { t } = useLanguage();
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <>
      <SectionHeading
        id={headingId}
        eyebrow={t("works.eyebrow")}
        title={t("works.title")}
        description={t("works.description")}
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {featured.map((project) => (
          <FeaturedProject key={project.id} project={project} t={t} />
        ))}
      </div>

      <h3 className="mt-16 text-lg font-semibold text-white">{t("works.moreLabel")}</h3>
      <ul className="mt-4 divide-y divide-white/10">
        {more.map((project) => (
          <li key={project.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <h4 className="text-base font-semibold text-white">
                {t(`works.items.${project.id}.name`)}
              </h4>
              <p className="mt-1 leading-relaxed text-secondary">
                {t(`works.items.${project.id}.summary`)}
              </p>
              <ProjectLinks source={project.source_code_link} demo={project.live_demo_link} t={t} />
            </div>
            <Tags tags={project.tags} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default SectionWrapper(Works, "projects");
