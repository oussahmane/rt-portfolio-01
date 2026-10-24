import { useLanguage } from "../utils/i18n";

const SectionHeading = ({ eyebrow, title, description, id }) => {
  const { isRtl } = useLanguage();

  return (
    <div className="max-w-3xl">
      <p
        className={`text-[0.82rem] font-medium text-[#d5e2f4] ${
          isRtl ? "tracking-normal" : "uppercase tracking-[0.16em]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.2] text-white"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[68ch] text-[1.05rem] leading-relaxed text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
