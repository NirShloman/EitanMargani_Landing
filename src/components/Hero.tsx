import { ActionButtons } from "@/components/ActionButtons";
import { business } from "@/lib/content";
import { iconMap, PhoneIcon } from "@/lib/icons";
import { getTelUrl } from "@/lib/links";

export function Hero() {
  const TruckIcon = iconMap.truck;
  const ShieldIcon = iconMap.shield;
  const HeadphonesIcon = iconMap.headphones;
  const features = [
    { icon: TruckIcon, text: "משלוח מהיר לכל רחבי הארץ" },
    { icon: ShieldIcon, text: "מוצרים איכותיים מהמותגים המובילים" },
    { icon: HeadphonesIcon, text: "שירות אישי ומקצועי בכל שלב" },
  ];

  return (
    <header id="top" className="relative isolate overflow-hidden bg-brand-ink">
      <div className="absolute inset-0 -z-20 bg-dot-light" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-blueDark/60 via-transparent to-transparent" />
      <div className="absolute -left-48 top-10 -z-10 h-[500px] w-[500px] rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-brand-yellow/5 blur-3xl" />

      <div className="container-page py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* RIGHT column in RTL — text & CTAs */}
          <div className="flex flex-col items-center gap-5 lg:items-start">

            <span className="rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-xs font-black text-brand-yellow">
              {business.blessing}
            </span>

            <h1 className="w-full text-center leading-tight tracking-tight lg:text-right">
              <span className="block text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                {business.shortName}
              </span>
              <span className="mt-1 block text-3xl font-black text-brand-yellow sm:text-4xl lg:text-5xl">
                יבוא ושיווק חלקי חילוף לרכב
              </span>
            </h1>

            <p className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-base font-bold leading-8 text-white/90 shadow-card text-center lg:text-right">
              {business.heroText}
            </p>

            <ActionButtons />

            <a
              href={getTelUrl(business.phoneRaw)}
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-lg font-black text-white/90 transition hover:text-brand-yellow"
            >
              <PhoneIcon className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
              {business.phoneDisplay}
            </a>

            <a
              href="#promotions"
              className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-2 text-sm font-black text-brand-yellow transition hover:border-brand-yellow/60 hover:bg-brand-yellow/20"
            >
              <span>🔥</span>
              מבצעים חמים עכשיו
              <span className="text-xs">↓</span>
            </a>
          </div>

          {/* LEFT column in RTL — features */}
          <div className="relative w-full space-y-4">
            <p className="text-center text-sm font-black text-white/40 lg:text-right">
              {business.brandLine}
            </p>

            {features.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-card backdrop-blur-sm transition duration-200 hover:border-brand-yellow/30 hover:bg-white/15"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-yellow/60 bg-brand-yellow/10">
                  <Icon className="h-7 w-7 text-brand-yellow" aria-hidden="true" />
                </div>
                <p className="text-base font-black text-white">{text}</p>
              </div>
            ))}

            <div className="absolute inset-0 -z-10 rounded-3xl bg-brand-yellow/5 blur-3xl" />
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 bg-brand-blueDark/60 py-4 backdrop-blur-sm">
        <div className="container-page flex flex-wrap items-center justify-center gap-3">
          {business.brands.map((brand) => (
            <span key={brand} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-black text-white sm:text-base">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
