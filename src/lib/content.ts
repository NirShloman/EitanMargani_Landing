import rawContent from "@/content/site.json";
import rawPromotions from "@/content/promotions.json";
import type { SiteContent, PromotionsContent } from "@/lib/types";

const allowedIcons = new Set([
  "battery",
  "car",
  "check",
  "clock",
  "disc",
  "gauge",
  "headphones",
  "shield",
  "spark",
  "tag",
  "target",
  "truck",
  "wrench"
]);

function assertNonEmpty(value: unknown, path: string): asserts value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Content validation failed: ${path} must be a non-empty string`);
  }
}

function assertArray(value: unknown, path: string): asserts value is unknown[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Content validation failed: ${path} must be a non-empty array`);
  }
}

function validateContent(content: SiteContent) {
  assertNonEmpty(content.seo.title, "seo.title");
  assertNonEmpty(content.seo.description, "seo.description");
  assertNonEmpty(content.business.name, "business.name");
  assertNonEmpty(content.business.phoneRaw, "business.phoneRaw");
  assertNonEmpty(content.business.email, "business.email");
  assertArray(content.benefits.items, "benefits.items");
  assertArray(content.faq.items, "faq.items");

  for (const [index, item] of content.benefits.items.entries()) {
    assertNonEmpty(item.title, `benefits.items[${index}].title`);
    assertNonEmpty(item.text, `benefits.items[${index}].text`);
    if (!allowedIcons.has(item.icon)) {
      throw new Error(`Content validation failed: benefits.items[${index}].icon is not supported`);
    }
  }
}

function validatePromotions(promotions: PromotionsContent) {
  assertArray(promotions.items, "promotions.items");

  for (const [index, item] of promotions.items.entries()) {
    assertNonEmpty(item.title, `promotions.items[${index}].title`);
    assertNonEmpty(item.description, `promotions.items[${index}].description`);
    assertNonEmpty(item.price, `promotions.items[${index}].price`);
  }
}

const content = rawContent as SiteContent;
validateContent(content);

const promotions = rawPromotions as PromotionsContent;
validatePromotions(promotions);

export const siteContent = content;
export const business = content.business;
export const promotionsContent = promotions;
