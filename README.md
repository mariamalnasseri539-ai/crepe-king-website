# 👑 CREPE KING — Luxury Artisanal Dessert Lounge Website

> **مشروع فرونت إند ويب متكامل للسي في وبورتفوليو الأعمال**  
> **A High-End Front-End Web Development Portfolio Project**  
> Developed by: **Hailah & Mariam Al-Nasseri** (هيلة ومريم الناصري)

---

## 🌟 نظرة عامة على المشروع (Project Overview)
**كريب كينج (CREPE KING)** هو موقع ويب متكامل وعصري لمقهى وحلويات راقية، صُمم بمواصفات عالمية ليعكس أرقى تجارب المستخدم (UI/UX) باستخدام أحدث تقنيات الويب: **HTML5, CSS3, Vanilla JavaScript (ES6+)**.

تم تطوير هذا المشروع من فكرة مشروع سنة أولى جامعية ليصبح مشروعاً احترافياً متقدماً جاهزاً للإدراج في السيرة الذاتية (CV) وحسابات GitHub ومعارض الأعمال.

---

## ✨ المميزات الرئيسية المطورة (Key Features)

### 1. 🌓 الوضع الليلي والنهاري (Dark & Light Theme Mode)
- **وضع ليلي ملكي (Royal Night Lounge):** ألوان شوكولاتة داكنة مخملية مع إضاءات ذهبية دافئة تعكس أجواء المقاهي الفاخرة ليلاً.
- **وضع نهاري منعش (Morning Artisan Bakery):** خلفيات عاجية مشرقة بظلال ناعمة وألوان كراميل شهية.
- **حفظ التفضيلات تلقائياً:** يتم حفظ تفضيل المستخدم في `localStorage` مع مراعاة تفضيل نظام التشغيل الافتراضي.

### 2. 🌐 دعم كامل للغتين العربية والإنجليزية (Bilingual RTL / LTR Engine)
- محرك ترجمة مدمج وسريع بدون أي مكتبات ثقيلة (`i18n`).
- تبديل سلس ومرن بين اتجاه الصفحة من اليمين لليسار (`dir="rtl"`) ومن اليسار لليمين (`dir="ltr"`).
- خطوط طباعية عربية حديثة وعالمية: **Cairo** للعربية و **Plus Jakarta Sans** للإنجليزية.

### 3. 💡 إضاءات وتأثيرات بصرية وأنيميشن متقدم (Glow & Micro-Interactions)
- **تأثيرات الإضاءة والتوهج (Ambient Glow):** خلفيات بإضاءات تدرجية متوهجة تعكس فخامة المقهى.
- **زجاجيات حديثة (Glassmorphism):** قائمة علوية وبطاقات بخاصية تشتيت الضوء `backdrop-filter: blur()`.
- **حركات تفاعلية (Micro-Interactions):** تأثيرات تكبير ثلاثية الأبعاد خفيفة للبطاقات عند التمرير (`Hover 3D Lift`).
- **أنيميشن الظهور التدريجي (Scroll Reveal):** ظهور الأقسام والبطاقات بانسيابية فائقة عند التمرير باستخدام `IntersectionObserver`.
- **شارات متحركة ونبضية:** وميض جذاب لشارات الخصومات والعروض الملكية الخاصة.

### 4. 🍽️ منيو تفاعلي مع فلترة وبحث فوري (Interactive Filterable Menu & Search)
- تصنيف الأطباق حسب الفئة: **الكل (All)**، **كريب (Crepes)**، **بان كيك (Pancakes)**، **وافل (Waffles)**.
- شريط بحث ذكي وفوري يبحث في أسماء ومكونات الأطباق لحظياً.

### 5. 🛒 سلة طلبات تفاعلية وربط مباشر بالواتساب (Cart & WhatsApp Ordering)
- إمكانية إضافة الأطباق والعروض إلى سلة الطلبات بضغطة زر.
- نافذة تفاعلية (Modal) لاستعراض السلة وتعديل الكميات وحساب المجموع الكلي.
- زر **"إرسال الطلب عبر واتساب"** يقوم بتجهيز رسالة تفصيلية منسقة بجميع الأصناف والمجموع وإرسالها مباشرة لرقم المقهى!

### 6. 📅 نظام حجز طاولات تفاعلي (Table Reservation Modal)
- نافذة مخصصة لحجز الطاولات باختيار التاريخ، الوقت، عدد الضيوف (طاولة هادئة، جلسة عائلية، قسم VIP)، وأي طلبات خاصة.
- تأكيد الحجز مع نظام تنبيهات Toast Notification أنيق.

### 7. 🖼️ معرض صور الجلسات مع معاينة مكبرة (Branch Lightbox Gallery)
- استعراض فروع وجلسات المقهى الفاخرة مع إمكانية الضغط على أي صورة لتكبيرها في نافذة Lightbox عصرية.

### 8. 📱 تجاوب كامل مع جميع الشاشات (100% Fully Responsive Design)
- متوافق ومختبر على جميع مقاسات الهواتف الذكية (iPhone, Android)، الأجهزة اللوحية (Tablets)، والشاشات المكتبية بدقة فائقة.
- قائمة منسدلة خاصة بالهواتف (Mobile Drawer Menu) بتصميم انسيابي مريح للإبهام.

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

| التقنية | الاستخدام |
| :--- | :--- |
| **HTML5** | بنية دلالية قياسية (Semantic Elements, Accessibility, SEO-friendly) |
| **CSS3** | تصميم كامل بالمتغيرات (CSS Custom Properties), Flexbox, CSS Grid, Glassmorphism, Keyframes Animation |
| **JavaScript (ES6+)** | إدارة الحالة (State Management), LocalStorage, DOM Manipulation, i18n Dictionary, Event Listeners, IntersectionObserver |
| **Font Awesome 6** | أيقونات حديثة متوافقة مع جميع الأجهزة |
| **Google Fonts** | خطوط Cairo & Plus Jakarta Sans & Quicksand |

---

## 📁 هيكلية ملفات المشروع (Project Structure)

```
our progict (HTML)/
│
├── index.html                # الصفحة الرئيسية للمشروع (Standard Entry Point)
├── 1.html                    # نسخة مطابقة لضمان فتح المشروع بأي ملف
├── style.css                 # ملف التنسيقات الكامل وتصميم الواجهات والألوان
├── script.js                 # ملف الجافاسكريبت التفاعلي والميزات المتقدمة
├── README.md                 # ملف التوثيق والشرح للسي في ومجتمع المطورين
│
├── CREPE KING/               # مجلد صور الشعار والعروض وقسم عن المقهى
│   ├── Logopit_1698939712286.png  (شعار المقهى عالي الدقة)
│   ├── 222.jpg               (صورة خلفية الهيدر)
│   ├── mmhh.jpg              (خلفية العروض الخاصة)
│   ├── mh.jpg                (صورة قسم حكاية كريب كينج)
│   └── ...                   (صور العروض والحلويات)
│
└── Project photos/           # مجلد صور الأطباق وجلسات الفروع
    ├── 1.jpg - 10.jpg        (صور أصناف المنيو الفاخرة)
    └── f.1.jpg - f.6.webp    (صور جلسات وفروع كريب كينج)
```

---

## 🚀 كيفية تشغيل المشروع ونشره أونلاين (How to Run & Deploy)

### التشغيل المحلي:
1. انقر نقراً مزدوجاً على ملف `index.html` أو `1.html` لفتحه في أي متصفح ويب (Chrome, Edge, Firefox, Safari).
2. أو افتح المجلد في **VS Code** وشغّله بواسطة إضافة **Live Server**.

### النشر المجاني عبر GitHub Pages لعرضه في السي في:
1. ارفع ملفات هذا المجلد إلى مستودع جديد على GitHub باسم مثلاً `crepe-king-website`.
2. ادخل على **Settings** > **Pages**.
3. اختر فرع **main** أو **master** واضغط **Save**.
4. ستحصل على رابط حي ومباشر للمشروع مثل:
   `https://username.github.io/crepe-king-website/`
5. أضف الرابط ورابط الكود في سيرتك الذاتية في قسم **Projects**!

---

## 💼 كيف تصف هذا المشروع في سيرتك الذاتية (CV Description Snippet)

> **CREPE KING — Responsive Restaurant & Dessert Web Application**  
> *Technologies:* HTML5, CSS3 (Custom Variables, Flexbox, Grid), Vanilla JavaScript (ES6+), LocalStorage.  
> - Designed and engineered a fully responsive, bilingual (Arabic/English with RTL/LTR) dessert lounge web application.  
> - Implemented seamless Dark & Light theme toggling with persistent user preference storage using `localStorage`.  
> - Built an interactive menu engine with real-time text search, category filtering, and image lightbox modals.  
> - Integrated a shopping bag modal with automated WhatsApp ordering message generator and a table reservation system.  
> - Crafted high-performance CSS animations, glassmorphic UI elements, and scroll-reveal effects utilizing `IntersectionObserver`.

---

❤️ **صُنع بكل فخر وإتقان بواسطة:** هيلة ومريم الناصري | المكلا، حضرموت، اليمن
