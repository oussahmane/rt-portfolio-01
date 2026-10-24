import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";

import { profiles } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { useLanguage } from "../utils/i18n";
import SectionHeading from "./SectionHeading";

const socialLinks = [
  { name: "GitHub", href: profiles.github, icon: Github },
  { name: "LinkedIn", href: profiles.linkedin, icon: Linkedin },
  { name: "X", href: profiles.twitter, icon: FaXTwitter },
  { name: "Instagram", href: profiles.instagram, icon: Instagram },
  { name: "Facebook", href: profiles.facebook, icon: Facebook },
  { name: "TikTok", href: profiles.tiktok, icon: FaTiktok },
];

const Contact = ({ headingId }) => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t("contact.nameRequired");
    if (!form.email.trim()) nextErrors.email = t("contact.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t("contact.emailInvalid");
    }
    if (!form.message.trim()) nextErrors.message = t("contact.messageRequired");
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setStatus("");
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    try {
      const { db } = await import("../firebase");
      const { addDoc, collection, serverTimestamp } = await import("firebase/firestore");
      await addDoc(collection(db, "messages"), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
        status: "unread",
        processingStatus: "pending",
      });
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <SectionHeading
            id={headingId}
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            description={t("contact.description")}
          />
          <a
            href={`mailto:${profiles.email}`}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-medium text-white underline-offset-4 hover:underline"
          >
            <Mail aria-hidden="true" size={18} />
            {profiles.email}
          </a>

          <h3 className="mt-10 text-sm font-medium text-[#d5e2f4]">{t("contact.profiles")}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={link.name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#dbe6f5] hover:border-white/30 hover:text-white"
                  >
                    <Icon aria-hidden="true" size={18} />
                    <span className="sr-only">{t("nav.newTab")}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <form className="surface no-print p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-5">
            <label className="flex flex-col gap-2" htmlFor="contact-name">
              <span className="text-sm font-medium text-white">{t("contact.nameLabel")}</span>
              <input
                id="contact-name"
                className="field"
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name ? (
                <span id="contact-name-error" className="text-sm text-[#f0c9c9]">
                  {errors.name}
                </span>
              ) : null}
            </label>

            <label className="flex flex-col gap-2" htmlFor="contact-email">
              <span className="text-sm font-medium text-white">{t("contact.emailLabel")}</span>
              <input
                id="contact-email"
                className="field"
                type="email"
                name="email"
                autoComplete="email"
                inputMode="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("contact.emailPlaceholder")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email ? (
                <span id="contact-email-error" className="text-sm text-[#f0c9c9]">
                  {errors.email}
                </span>
              ) : null}
            </label>

            <label className="flex flex-col gap-2" htmlFor="contact-message">
              <span className="text-sm font-medium text-white">{t("contact.messageLabel")}</span>
              <textarea
                id="contact-message"
                className="field min-h-36 resize-y"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message ? (
                <span id="contact-message-error" className="text-sm text-[#f0c9c9]">
                  {errors.message}
                </span>
              ) : null}
            </label>

            <button type="submit" className="btn btn-primary w-full sm:w-fit" disabled={loading}>
              {loading ? t("contact.sending") : t("contact.send")}
            </button>

            <p role="status" aria-live="polite" className="min-h-6 text-sm text-secondary">
              {status === "success" ? t("contact.success") : null}
              {status === "error" ? t("contact.error") : null}
            </p>
          </div>
        </form>
      </div>

      <p className="mt-14 text-sm text-secondary">
        © {new Date().getFullYear()} {t("hero.name")}. {t("contact.rights")}
      </p>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
