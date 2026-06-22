import { SectionHeader } from "@/components/SectionHeader";
import { siteContent } from "@/lib/content";
import { iconMap } from "@/lib/icons";

export function Benefits() {
  const section = siteContent.benefits;

  return (
    <section id="benefits" className="section bg-brand-blueDark">
      <div className="container-page">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} description={section.description} dark />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {section.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="group rounded-brand border border-white/10 bg-white/10 p-5 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-yellow/30 hover:bg-white/15"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink transition group-hover:scale-105">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-bold leading-6 text-white/60">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
