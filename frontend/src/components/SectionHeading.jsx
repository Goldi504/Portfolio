const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}) => {
  const alignment =
    align === "left"
      ? "text-left"
      : "mx-auto max-w-3xl text-center";

  return (
    <div className={`mb-16 ${alignment}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;