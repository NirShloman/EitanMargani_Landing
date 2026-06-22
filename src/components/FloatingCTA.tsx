import { business } from "@/lib/content";
import { getTelUrl, getWhatsappUrl } from "@/lib/links";
import { MessageIcon, PhoneIcon } from "@/lib/icons";

export function FloatingCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-ink/95 p-3 shadow-strong backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a href={getWhatsappUrl(business)} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-3 py-3 font-black text-white hover:bg-green-400">
          <MessageIcon className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a href={getTelUrl(business.phoneRaw)} className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-yellow px-3 py-3 font-black text-brand-ink hover:bg-yellow-300">
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          התקשרו
        </a>
      </div>
    </div>
  );
}
