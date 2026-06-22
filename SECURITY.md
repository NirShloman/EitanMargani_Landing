# דגשי אבטחת מידע בפרויקט

הפרויקט נבנה כדף נחיתה סטטי/שיווקי ללא שמירת מידע אישי בשרת וללא טפסי הזנת מידע רגיש.

## מה מיושם

- אין `dangerouslySetInnerHTML` עבור תוכן משתמש. שימוש יחיד הוא JSON-LD מובנה, עם escaping בסיסי.
- כל התוכן נטען מקובץ JSON מקומי ומאומת בזמן build.
- קישורים חיצוניים נפתחים עם `rel="noopener noreferrer"`.
- אין API ציבורי ואין כתיבה למסד נתונים.
- קיימים Security Headers ב-`next.config.mjs`:
  - Content-Security-Policy
  - Strict-Transport-Security
  - X-Frame-Options
  - X-Content-Type-Options
  - Referrer-Policy
  - Permissions-Policy
- אין תלות בספריות UI כבדות. הפרויקט שומר על שטח תקיפה קטן.

## לפני עלייה לייצור

1. לעדכן את `seo.siteUrl` ב-`src/content/site.json` לדומיין האמיתי.
2. לעדכן קישורי רשתות חברתיות אמיתיים.
3. לוודא שהאתר מוגש רק דרך HTTPS.
4. להריץ:

```bash
npm run validate
npm run build
```

5. אם מוסיפים בעתיד טפסים או אזור ניהול, יש להוסיף:
   - CSRF protection
   - Rate limiting
   - Validation server-side
   - CAPTCHA לפי צורך
   - Audit logs לפעולות ניהול
   - הרשאות משתמשים ברורות
