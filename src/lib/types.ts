export type IconName =
  | "battery"
  | "car"
  | "check"
  | "clock"
  | "disc"
  | "gauge"
  | "headphones"
  | "shield"
  | "spark"
  | "tag"
  | "target"
  | "truck"
  | "wrench";

export type PromotionTone = "blue" | "yellow";

export type SiteContent = {
  seo: {
    siteUrl: string;
    title: string;
    description: string;
    keywords: string[];
  };
  business: {
    name: string;
    shortName: string;
    blessing: string;
    brandLine: string;
    tagline: string;
    heroText: string;
    phoneDisplay: string;
    phoneRaw: string;
    email: string;
    address: string;
    wazeUrl: string;
    googleMapsUrl: string;
    whatsappMessage: string;
    hours: string[];
    brands: string[];
    social: {
      facebook: string;
      instagram: string;
      tiktok: string;
    };
  };
  navigation: Array<{ label: string; href: string }>;
  benefits: ContentSection & {
    items: Array<{ title: string; text: string; icon: IconName }>;
  };
  media: {
    title: string;
    description: string;
    shareButtonText: string;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    title: string;
    description: string;
    whatsappButton: string;
    phoneButton: string;
    emailButton: string;
  };
};

type ContentSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PromotionsContent = ContentSection & {
  items: Array<{
    title: string;
    description: string;
    price: string;
  }>;
};
