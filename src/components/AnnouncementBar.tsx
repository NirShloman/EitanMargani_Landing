"use client";

import { promotionsContent } from "@/lib/content";

export function AnnouncementBar() {
  const dealCount = promotionsContent.items.length;

  return (
    <a
      href="#promotions"
      aria-label={`${dealCount} מבצעים חמים — לחצו לצפייה`}
      className="group fixed right-0 top-1/2 z-40 -translate-y-1/2 hidden items-center gap-2.5 rounded-r-none rounded-l-full bg-brand-yellow py-3 pl-5 pr-4 text-brand-ink shadow-yellow transition duration-300 hover:-translate-x-1 hover:shadow-[0_0_28px_rgba(249,217,21,0.5)] md:flex"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-ink text-xs font-black text-brand-yellow">
        {dealCount}
      </span>
      <span className="text-sm font-black">מבצעים</span>
      <span className="text-lg leading-none">🔥</span>
    </a>
  );
}
