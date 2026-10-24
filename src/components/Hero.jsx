import { Github, Linkedin, Mail } from "lucide-react";
import { profiles } from "../constants";
import { useLanguage } from "../utils/i18n";
import { scrollToSection } from "../utils/scroll";

const Hero = () => {
  const { t, isRtl } = useLanguage();

  const profileLinks = [
    { id: "github", href: profiles.github, icon: Github, external: true },
    { id: "linkedin", href: profiles.linkedin, icon: Linkedin, external: true },
    { id: "email", href: `mailto:${profiles.email}`, icon: Mail, external: false },
  ];

  return (
    <section className="relative flex min-h-[100svh] items-center" aria-labelledby="hero-heading">
      <div className="hero-scrim pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 lg:px-10">
        <p
          className={`text-[0.82rem] font-medium text-[#d5e2f4] ${
            isRtl ? "tracking-normal" : "uppercase tracking-[0.16em]"
          }`}
        >
          {t("hero.eyebrow")}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-[clamp(3rem,8vw,5.4rem)] font-semibold leading-none tracking-tight text-white"
        >
          {t("hero.name")}
        </h1>
        <p className="mt-5 max-w-2xl text-[clamp(1.35rem,2.4vw,1.9rem)] font-medium leading-snug text-[#e7eef8]">
          {t("hero.headline")}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-secondary">
          {t("hero.description")}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn btn-primary w-full sm:w-auto" onClick={() => scrollToSection("projects")}>
            {t("hero.viewProjects")}
          </button>
          <button type="button" className="btn btn-secondary w-full sm:w-auto" onClick={() => scrollToSection("contact")}>
            {t("hero.contactMe")}
          </button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {profileLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#dbe6f5] underline-offset-4 hover:underline"
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                >
                  <Icon aria-hidden="true" size={16} />
                  {t(`hero.${link.id}`)}
                  {link.external ? <span className="sr-only">{t("nav.newTab")}</span> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
