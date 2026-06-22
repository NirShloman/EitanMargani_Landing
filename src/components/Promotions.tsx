import { SectionHeader } from "@/components/SectionHeader";
import { business, promotionsContent } from "@/lib/content";
import { MessageIcon, iconMap } from "@/lib/icons";

const PromoIcon = iconMap.tag;

function getPromoWhatsappUrl(promoTitle: string) {
  const digits = business.phoneRaw.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `972${digits.slice(1)}` : digits;
  const text = `שלום, אני מתעניין במבצע "${promoTitle}". אשמח לשמוע פרטים ומחיר.`;
  return `https://wa.me/${international}?text=${encodeURIComponent(text)}`;
}

export function Promotions() {
  const section = promotionsContent;

  return (
    <section id="promotions" className="section bg-brand-ink">
      <div className="container-page">
        <SectionHeader eyebrow={section.eyebrow} title={section.title} description={section.description} dark />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {section.items.map((promo) => (
            <article
              key={promo.title}
              className="relative isolate flex flex-col overflow-hidden rounded-brand border border-white/10 bg-white/10 p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-brand-yellow/30 hover:bg-white/15"
            >
              <span className="absolute inset-y-0 left-0 -z-10 w-1/2 animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink">
                <PromoIcon className="h-7 w-7" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-black leading-tight text-white">{promo.title}</h3>
              <p className="mt-2 flex-1 text-sm font-semibold leading-6 text-white/65">{promo.description}</p>

              <div className="mt-4 rounded-2xl bg-brand-yellow px-4 py-3 text-center text-lg font-black text-brand-ink">
                {promo.price}
              </div>

              <a
                href={getPromoWhatsappUrl(promo.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-green-500/40 bg-green-500/10 px-4 py-2.5 text-sm font-black text-green-400 transition hover:bg-green-500/20 hover:text-green-300"
              >
                <MessageIcon className="h-4 w-4" aria-hidden="true" />
                שאלו על המבצע
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
