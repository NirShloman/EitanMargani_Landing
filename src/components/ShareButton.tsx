"use client";

import { business, siteContent } from "@/lib/content";
import { getWhatsappUrl } from "@/lib/links";
import { ShareIcon } from "@/lib/icons";

export function ShareButton() {
  async function handleShare() {
    const url = window.location.href;
    const text = `${business.name} - ${business.tagline}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: business.name, text, url });
        return;
      } catch {
        return;
      }
    }

    window.open(getWhatsappUrl(business), "_blank", "noopener,noreferrer");
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blueDark px-6 py-4 text-base font-black text-brand-yellow shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-ink focus:outline-none focus:ring-4 focus:ring-brand-blue/25"
    >
      <ShareIcon className="h-5 w-5" aria-hidden="true" />
      {siteContent.media.shareButtonText}
    </button>
  );
}
