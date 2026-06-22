import fs from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "src", "content", "site.json");
const allowedIcons = new Set(["battery", "car", "check", "clock", "disc", "gauge", "headphones", "shield", "spark", "tag", "target", "truck", "wrench"]);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function requiredString(value, pathName) {
  assert(typeof value === "string" && value.trim().length > 0, `${pathName} חייב להיות טקסט לא ריק`);
}

function requiredArray(value, pathName) {
  assert(Array.isArray(value) && value.length > 0, `${pathName} חייב להיות מערך עם לפחות פריט אחד`);
}

const raw = fs.readFileSync(filePath, "utf8");
const content = JSON.parse(raw);

requiredString(content.seo?.siteUrl, "seo.siteUrl");
requiredString(content.seo?.title, "seo.title");
requiredString(content.seo?.description, "seo.description");
requiredString(content.business?.name, "business.name");
requiredString(content.business?.phoneRaw, "business.phoneRaw");
requiredString(content.business?.email, "business.email");
requiredArray(content.benefits?.items, "benefits.items");
requiredArray(content.promotions?.items, "promotions.items");
requiredArray(content.faq?.items, "faq.items");

for (const [index, item] of content.benefits.items.entries()) {
  requiredString(item.title, `benefits.items[${index}].title`);
  requiredString(item.text, `benefits.items[${index}].text`);
  assert(allowedIcons.has(item.icon), `benefits.items[${index}].icon אינו אייקון נתמך`);
}

for (const [index, item] of content.promotions.items.entries()) {
  requiredString(item.title, `promotions.items[${index}].title`);
  requiredString(item.subtitle, `promotions.items[${index}].subtitle`);
  requiredString(item.note, `promotions.items[${index}].note`);
  assert(allowedIcons.has(item.icon), `promotions.items[${index}].icon אינו אייקון נתמך`);
  assert(item.tone === "blue" || item.tone === "yellow", `promotions.items[${index}].tone חייב להיות blue או yellow`);
}

console.log("✅ Content validation passed");
