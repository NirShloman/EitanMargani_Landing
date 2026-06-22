# איתן מרגאני - דף נחיתה מקצועי לחלקי חילוף לרכב

פרויקט Next.js + TypeScript + Tailwind CSS לדף נחיתה שיווקי, נקי, מהיר וקל לתחזוקה.

הפרויקט נבנה מחדש לפי הסגנון של שלט העסק, עם דגש על:

- עיצוב צהוב/כחול מודרני ומזמין
- מינימום עומס וקריאה ברורה לפעולה
- מבנה קומפוננטות מסודר
- ניהול תוכן מקובץ אחד
- התאמה מלאה למובייל
- SEO בסיסי + Open Graph + JSON-LD
- Security Headers ודגשי אבטחה

## התקנה והרצה

```bash
npm install
npm run dev
```

פתיחה בדפדפן:

```txt
http://localhost:3000
```

## בדיקות לפני העלאה

```bash
npm run validate
npm run build
```

## ניהול תוכן

כל התוכן המרכזי נמצא כאן:

```txt
src/content/site.json
```

שם ניתן לעדכן:

- פרטי עסק
- טלפון, מייל, כתובת ושעות פעילות
- קישורי רשתות חברתיות
- טקסט פתיחה
- יתרונות
- מבצעים
- שאלות נפוצות
- SEO

מדריך מפורט לעורך תוכן:

```txt
docs/content-editing-guide.md
```

## קבצים מרכזיים

```txt
src/app/page.tsx                עמוד הבית
src/app/layout.tsx              SEO ו-layout כללי
src/app/globals.css             עיצוב גלובלי
src/components/                 קומפוננטות הדף
src/content/site.json           ניהול תוכן
src/lib/content.ts              טעינת תוכן וולידציה
src/lib/icons.tsx               אייקונים פנימיים ללא ספרייה חיצונית
next.config.mjs                 הגדרות Next.js + Security Headers
SECURITY.md                     דגשי אבטחה
```

## החלפת תמונת השלט

```txt
public/images/sign.jpg
```

להחליף את הקובץ בתמונה חדשה באותו שם.

## פריסה לייצור

אפשר לפרוס ל-Vercel, שרת Node, Docker או IIS מאחורי reverse proxy.

הפרויקט מוגדר עם:

```txt
output: "standalone"
```

כך שניתן לבנות ולהריץ אותו כיישום Next.js עצמאי.

## הערות להמשך

אם בעתיד הדף יהפוך לאתר מכירות מלא, מומלץ להוסיף:

- API ב-.NET Core לניהול מוצרים והזמנות
- מסד נתונים SQL Server
- אזור ניהול מאובטח
- קטלוג מוצרים
- סל קניות ותשלום
- אינטגרציה למלאי
