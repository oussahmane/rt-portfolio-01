import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { navLinks } from "../constants";
import { useLanguage } from "../utils/i18n";
import { scrollToSection } from "../utils/scroll";

const languages = [
  { code: "en", short: "EN", label: "English" },
  { code: "fr", short: "FR", label: "Français" },
  { code: "ar", short: "AR", label: "العربية" },
];

const LanguageSwitch = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className="flex items-center rounded-full border border-white/10 p-1"
    >
      {languages.map((lang) => {
        const selected = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            aria-pressed={selected}
            aria-label={lang.label}
            onClick={() => setLanguage(lang.code)}
            className={`min-h-9 min-w-10 cursor-pointer rounded-full px-3 text-sm font-medium leading-none ${
              selected ? "bg-[#e4eef8] text-[#101624]" : "text-secondary hover:text-white"
            } ${lang.code === "ar" ? "font-['Cairo',sans-serif]" : "font-tech"}`}
          >
            {lang.short}
          </button>
        );
      })}
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return undefined;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!toggle) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setToggle(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  if (pathname.startsWith("/admin")) return null;

  const goTo = (id) => {
    setToggle(false);
    setActive(id);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || toggle
          ? "border-white/10 bg-[#070b14]/88 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-10" aria-label={t("nav.primary")}>
        <Link
          to="/"
          className="flex min-h-11 items-center gap-3 text-white"
          onClick={() => {
            setActive("");
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            });
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm font-semibold">
            O
          </span>
          <span className="hidden text-sm font-medium sm:inline">{t("hero.name")}</span>
          <span className="sr-only">{t("nav.home")}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                aria-current={active === link.id ? "true" : undefined}
                onClick={() => goTo(link.id)}
                className={`min-h-11 cursor-pointer rounded-full px-3 text-sm font-medium ${
                  active === link.id ? "text-white" : "text-secondary hover:text-white"
                }`}
              >
                {t(`nav.${link.id}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitch />
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-expanded={toggle}
            aria-controls="mobile-menu"
            onClick={() => setToggle((open) => !open)}
          >
            {toggle ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
            <span className="sr-only">{toggle ? t("nav.closeMenu") : t("nav.openMenu")}</span>
          </button>
        </div>
      </nav>

      {toggle ? (
        <div id="mobile-menu" className="border-t border-white/10 px-5 py-3 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className="flex min-h-11 w-full cursor-pointer items-center text-start text-base font-medium text-white"
                  onClick={() => goTo(link.id)}
                >
                  {t(`nav.${link.id}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
