import { ActionButtons } from "@/components/ActionButtons";
import { business, siteContent } from "@/lib/content";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-brand-ink/95 backdrop-blur-xl" aria-label="ניווט ראשי">
      <div className="container-page flex min-h-16 items-center justify-between gap-4 py-3">
        <a href="#top" className="flex flex-col leading-tight" aria-label="חזרה לראש הדף">
          <span className="text-lg font-black text-brand-yellow">{business.shortName}</span>
          <span className="text-xs font-bold text-white/50">יבוא ישיר · מחיר שמפתיע</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-2xl px-4 py-2 text-sm font-black text-white/75 transition hover:bg-white/10 hover:text-brand-yellow">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ActionButtons compact />
        </div>
      </div>
    </nav>
  );
}
