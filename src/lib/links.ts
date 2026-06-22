import type { SiteContent } from "@/lib/types";

export function getWhatsappUrl(business: SiteContent["business"]) {
  const digits = business.phoneRaw.replace(/\D/g, "");
  const international = digits.startsWith("0") ? `972${digits.slice(1)}` : digits;
  return `https://wa.me/${international}?text=${encodeURIComponent(business.whatsappMessage)}`;
}

export function getTelUrl(phoneRaw: string) {
  return `tel:${phoneRaw.replace(/\D/g, "")}`;
}

export function getMailUrl(email: string, subject = "בקשת הצעת מחיר") {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}
