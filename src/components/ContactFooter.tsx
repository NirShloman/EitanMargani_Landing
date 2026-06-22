import { ActionButtons } from "@/components/ActionButtons";
import { business, siteContent } from "@/lib/content";
import { getMailUrl, getTelUrl } from "@/lib/links";
import { MailIcon, MapPinIcon, PhoneIcon, iconMap } from "@/lib/icons";

export function ContactFooter() {
  const Clock = iconMap.clock;

  return (
    <footer id="contact" className="bg-brand-blueDark text-white">
      <div className="container-page grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <span className="mb-3 inline-flex rounded-full border border-brand-yellow/20 bg-brand-yellow/10 px-4 py-2 text-sm font-black text-brand-yellow">
            {siteContent.contact.title}
          </span>
          <p className="mt-3 max-w-md text-base font-semibold leading-8 text-white/70">{siteContent.contact.description}</p>
          <div className="mt-6 flex justify-start">
            <ActionButtons compact />
          </div>
        </div>

        <div className="rounded-brand border border-white/15 bg-white/10 p-6 shadow-card">
          <div className="mb-3 text-sm font-black text-brand-yellow">פרטי קשר</div>
          <a href={getTelUrl(business.phoneRaw)} className="flex items-center gap-3 text-3xl font-black text-brand-yellow hover:text-yellow-300">
            <PhoneIcon className="h-8 w-8" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a href={getMailUrl(business.email)} className="mt-4 flex items-center gap-3 break-all text-base font-bold text-white/80 hover:text-white">
            <MailIcon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
            {business.email}
          </a>
        </div>

        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xl font-black text-brand-yellow">
              <Clock className="h-6 w-6" aria-hidden="true" />
              שעות פעילות
            </div>
            {business.hours.map((line) => (
              <p key={line} className="font-bold leading-7 text-white/80">{line}</p>
            ))}
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2 text-xl font-black text-brand-yellow">
              <MapPinIcon className="h-6 w-6" aria-hidden="true" />
              כתובת וניווט
            </div>
            <p className="font-bold leading-7 text-white/80">{business.address}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={business.wazeUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-white/15">Waze</a>
              <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white transition hover:bg-white/15">Google Maps</a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-yellow py-3 text-center text-sm font-black text-brand-ink">
        {business.name} · {business.tagline}
      </div>
    </footer>
  );
}
