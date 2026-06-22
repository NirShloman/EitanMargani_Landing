import { SectionHeader } from "@/components/SectionHeader";
import { siteContent } from "@/lib/content";
import { ChevronDown } from "@/lib/icons";

export function FAQ() {
  const section = siteContent.faq;

  return (
    <section id="faq" className="section bg-brand-ink">
      <div className="container-page">
        <SectionHeader title={section.title} dark />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {section.items.map((item, index) => (
            <details
              key={item.question}
              className="group rounded-brand border border-white/10 bg-white/10 shadow-card open:border-brand-yellow/25 open:bg-white/15"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-right marker:hidden">
                <span className="text-lg font-black text-white">{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-yellow transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-base font-semibold leading-8 text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
