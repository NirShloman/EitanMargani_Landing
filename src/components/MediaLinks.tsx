import { SectionHeader } from "@/components/SectionHeader";
import { ShareButton } from "@/components/ShareButton";
import { business, siteContent } from "@/lib/content";
import { FacebookIcon, InstagramIcon, MessageIcon, TikTokIcon } from "@/lib/icons";
import { getWhatsappUrl } from "@/lib/links";

const stats = [
  { value: "2,000+", label: "לקוחות מרוצים" },
  { value: "30–50%", label: "חיסכון ממוצע" },
  { value: "תוך שעה", label: "זמן מענה" },
];

const socialLinks = [
  {
    label: "Facebook",
    text: "קהילה של אלפי בעלי רכב",
    href: business.social.facebook,
    icon: FacebookIcon,
    iconClass: "bg-blue-600 text-white",
  },
  {
    label: "Instagram",
    text: "מבצעים ומלאי לפני כולם",
    href: business.social.instagram,
    icon: InstagramIcon,
    iconClass: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400 text-white",
  },
  {
    label: "TikTok",
    text: "ראו חלקים בפעולה",
    href: business.social.tiktok,
    icon: TikTokIcon,
    iconClass: "bg-slate-950 text-white",
  },
];

export function MediaLinks() {
  const section = siteContent.media;
  const whatsappUrl = getWhatsappUrl(business);

  return (
    <section id="media" className="section bg-brand-blueDark">
      <div className="container-page">
        <SectionHeader
          eyebrow="הצטרפו לאלפים שחוסכים"
          title={section.title}
          description={section.description}
          dark
        />

        {/* Stats */}
        <div className="mx-auto mb-10 flex max-w-xl justify-center gap-10 sm:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-brand-yellow sm:text-3xl">{stat.value}</p>
              <p className="mt-0.5 text-sm font-bold text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp hero card */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="שליחת הודעה בוואטסאפ"
          className="group mb-4 flex items-center justify-between gap-5 rounded-brand border border-green-500/30 bg-green-500/10 p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-green-500/50 hover:bg-green-500/15 sm:p-7"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-500 text-white shadow-soft">
              <MessageIcon className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="text-right">
              <h3 className="text-xl font-black text-white sm:text-2xl">קבלו מחיר תוך דקות</h3>
              <p className="mt-0.5 text-sm font-bold text-white/60">שלחו מספר רכב, דגם או תמונה — ונחזור עם התאמה ומחיר</p>
            </div>
          </div>
          <span className="hidden shrink-0 rounded-2xl bg-green-500 px-5 py-3 text-sm font-black text-white shadow-soft transition group-hover:bg-green-400 sm:block">
            WhatsApp ←
          </span>
        </a>

        {/* Social channels */}
        <div className="grid gap-4 sm:grid-cols-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-brand border border-white/10 bg-white/10 p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-brand-yellow/30 hover:bg-white/15"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${link.iconClass}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="text-right">
                  <h3 className="text-base font-black text-white">{link.label}</h3>
                  <p className="text-xs font-bold text-white/55">{link.text}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <ShareButton />
        </div>
      </div>
    </section>
  );
}
