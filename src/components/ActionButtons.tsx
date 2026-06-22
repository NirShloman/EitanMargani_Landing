import { business, siteContent } from "@/lib/content";
import { getMailUrl, getTelUrl, getWhatsappUrl } from "@/lib/links";
import { MailIcon, MessageIcon, PhoneIcon } from "@/lib/icons";

const whatsappUrl = getWhatsappUrl(business);

export function ActionButtons({ compact = false }: { compact?: boolean }) {
  const size = compact ? "px-4 py-3 text-sm" : "px-5 py-4 text-base";
  const contact = siteContent.contact;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שליחת הודעה בוואטסאפ"
        className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-green-500 ${size} font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-500/30`}
      >
        <MessageIcon className="h-5 w-5" aria-hidden="true" />
        {contact.whatsappButton}
      </a>
      <a
        href={getTelUrl(business.phoneRaw)}
        aria-label="התקשרות לעסק"
        className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-yellow ${size} font-black text-brand-ink shadow-yellow transition hover:-translate-y-0.5 hover:bg-yellow-300 focus:outline-none focus:ring-4 focus:ring-brand-yellow/30`}
      >
        <PhoneIcon className="h-5 w-5" aria-hidden="true" />
        {contact.phoneButton}
      </a>
      <a
        href={getMailUrl(business.email)}
        aria-label="שליחת מייל לעסק"
        className={`inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 ${size} font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/20`}
      >
        <MailIcon className="h-5 w-5" aria-hidden="true" />
        {contact.emailButton}
      </a>
    </div>
  );
}
