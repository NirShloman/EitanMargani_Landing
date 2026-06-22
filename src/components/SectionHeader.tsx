type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "right";
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, description, align = "center", dark = false }: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-right";

  return (
    <div className={`mb-9 flex flex-col ${alignment}`}>
      {eyebrow ? (
        <span className={`mb-3 inline-flex rounded-full px-4 py-2 text-sm font-black ring-1 ${
          dark
            ? "bg-white/10 text-brand-yellow ring-brand-yellow/20"
            : "bg-brand-yellowSoft text-brand-blueDark ring-brand-yellow/60"
        }`}>
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`max-w-3xl text-3xl font-black tracking-tight sm:text-4xl ${
        dark ? "text-brand-yellow" : "text-brand-ink"
      }`}>
        {title}
      </h2>
      <span className="mt-3 h-1.5 w-24 rounded-full bg-brand-yellow" />
      {description ? (
        <p className={`mt-4 max-w-2xl text-base font-semibold leading-8 sm:text-lg ${
          dark ? "text-white/70" : "text-slate-600"
        }`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
