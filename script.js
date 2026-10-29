/**
 * CREPE KING - Official Interactive Script
 * Features:
 * - Full Arabic / English Bilingual Support (i18n & RTL/LTR)
 * - Dark & Light Theme with LocalStorage Persistence
 * - Menu Category Filtering & Live Search
 * - Interactive Shopping Cart with WhatsApp Order Integration
 * - Interactive Table Reservation Modal
 * - Lightbox Image Modal for Branches
 * - Scroll Reveal Animations & Floating Back-To-Top
 * - Toast Notification System
 * Authors: Hailah & Mariam Al-Nasseri
 */

// ==================== I18N DICTIONARY ====================
const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_offers: "Special Offers",
    nav_menu: "Our Menu",
    nav_places: "Branches",
    nav_contact: "Contact",
    nav_book: "Book a Table",
    nav_cart: "Order Cart",

    // Hero
    hero_badge: "✨ The #1 Dessert Destination in Mukalla",
    hero_title_prefix: "Welcome to",
    hero_title_highlight: "CREPE KING",
    hero_subtitle: "Indulge in a royal symphony of warm Belgian chocolate, artisanal crepes, golden fluffy pancakes, and crispy waffles crafted to perfection.",
    hero_btn_explore: "Explore Menu",
    hero_btn_book: "Book a Table",
    hero_stat_customers: "Happy Guests",
    hero_stat_recipes: "Signature Dishes",
    hero_stat_rating: "Customer Rating",
    hero_stat_quality: "Fresh Quality",

    // Why Choose Us
    why_title: "Why Crepe King?",
    why_subtitle: "We combine passion, the finest ingredients, and an unforgettable ambiance",
    why_1_title: "Pure Belgian Chocolate",
    why_1_desc: "We use only authentic Nutella, rich dark Belgian cocoa, and velvety Lotus spread.",
    why_2_title: "Fresh Baked Daily",
    why_2_desc: "Every crepe and waffle batter is prepared fresh upon your order for peak crispiness.",
    why_3_title: "Cozy Family Atmosphere",
    why_3_desc: "Modern, comfortable seating designed for memorable moments with loved ones.",
    why_4_title: "Express Delivery & Takeout",
    why_4_desc: "Craving dessert at home? We deliver piping-hot happiness straight to your door.",

    // About
    about_badge: "Our Story",
    about_title: "The Legend of Crepe King",
    about_established: "Founded on August 5, 2022 • Mukalla, Yemen",
    about_p1: "What started as a heartfelt dream to redefine sweet treats in Mukalla blossomed into the beloved <strong>CREPE KING</strong>. Our guiding philosophy has always been simple: exceptional luxury quality paired with fair, accessible pricing.",
    about_p2: "Every plate we serve is a canvas of joy—generously drizzled with premium chocolate, adorned with freshly handpicked fruits, and crowned with gourmet ice cream.",
    about_quote: "“If you desire a dessert experience that lingers forever in your memory, Crepe King is your royal destination.”",
    about_signature: "— Hailah & Mariam Al-Nasseri (Founders)",
    about_btn_menu: "View Menu Highlights",

    // Offers
    offers_badge: "Limited Time Specials",
    offers_title: "Royal Special Offers",
    offers_subtitle: "Handcrafted combos at irresistible celebratory prices",
    offer_tag_bestseller: "Best Seller 🔥",
    offer_tag_popular: "Fan Favorite ⭐",
    offer_tag_special: "Chef Choice 👑",
    offer_1_title: "Royal Nutella Crepe Combo",
    offer_1_desc: "Stuffed with Nutella, crushed Lotus, fresh strawberries, banana slices, almonds, and artisan vanilla gelato.",
    offer_2_title: "Golden Honey & Choc Pancake",
    offer_2_desc: "Stack of 3 fluffy pancakes drizzled with organic honey, Belgian chocolate, and assorted fresh berries.",
    offer_3_title: "Imperial Waffle Supreme",
    offer_3_desc: "Crispy Belgian waffle crowned with dual white & dark chocolate swirl, Lotus crumbs, and gelato.",
    offer_btn_order: "Order Offer",

    // Menu
    menu_badge: "Artisanal Selection",
    menu_title: "Explore Our Royal Menu",
    menu_subtitle: "Order any two signature items and receive a third dessert treat on the house!",
    menu_search_placeholder: "Search delicious crepes, pancakes, waffles...",
    menu_tab_all: "All Delights",
    menu_tab_crepe: "Crepes",
    menu_tab_pancake: "Pancakes",
    menu_tab_waffle: "Waffles",
    menu_tab_drinks: "Drinks & Shakes",
    menu_add_cart: "Add to Order",
    menu_currency: "$",

    // Menu items
    item_1_title: "Crepe with Chocolate & Nuts",
    item_1_desc: "Rich milk chocolate spread, toasted hazelnuts, and almond slivers.",
    item_2_title: "Pancake with Chocolate & Fruits",
    item_2_desc: "Tower of fluffy pancakes with fresh banana, kiwi, and milk chocolate.",
    item_3_title: "Crepe with Dark Belgian Chocolate",
    item_3_desc: "Intense 70% dark cocoa drizzle for deep, authentic chocolate connoisseurs.",
    item_4_title: "Waffle with Black & White Chocolate",
    item_4_desc: "Crispy waffle lattice layered with dual contrasting chocolate swirls.",
    item_5_title: "Crepe with Wild Jam & Gelato",
    item_5_desc: "Sweet raspberry jam paired with a creamy scoop of artisanal ice cream.",
    item_6_title: "Lotus Biscoff Dream Crepe",
    item_6_desc: "Generous warm Lotus spread with crunchy caramelized biscuit crumbles.",
    item_7_title: "Pancake with Kinder & Marshmallows",
    item_7_desc: "Kinder chocolate melt, mini toasted marshmallows, and sweet drizzle.",
    item_8_title: "Sweet & Savory Cheese Pancake",
    item_8_desc: "Creamy cheese filling harmonized with golden clover honey drizzle.",
    item_9_title: "Pancake Berry Medley & Ice Cream",
    item_9_desc: "Loaded with fresh berries, dark chocolate sauce, and vanilla ice cream.",
    item_10_title: "Signature Crepe with Seasonal Fruits",
    item_10_desc: "Fresh strawberry, banana, pineapple with signature royal chocolate drizzle.",

    // Places
    places_badge: "Atmosphere & Lounges",
    places_title: "Our Branches & Lounges",
    places_subtitle: "Step into an inviting, warm retreat designed for comfort, laughter, and sweetness",
    places_zoom: "Click image to expand",

    // Testimonials
    reviews_badge: "Customer Love",
    reviews_title: "What Our Guests Say",
    review_1_text: "“Hands down the best crepes in Mukalla! The melted chocolate and fresh fruits taste like pure luxury. We visit every weekend!”",
    review_1_author: "Ahmed Ba-Wazir",
    review_1_role: "Loyal Customer",
    review_2_text: "“The atmosphere is beautiful and calming. The staff are so welcoming and the waffles have the perfect crunch and fluffiness.”",
    review_2_author: "Fatima Al-Kathiri",
    review_2_role: "Food Blogger",
    review_3_text: "“Crepe King is our go-to celebration spot. The special offers are unbeatable and the dark chocolate crepe is sensational!”",
    review_3_author: "Salem Al-Amoudi",
    review_3_role: "Regular Guest",

    // Booking Modal
    modal_book_title: "Reserve Your Royal Table",
    modal_book_desc: "Book your cozy spot ahead of time for you, your friends, or your family.",
    modal_name: "Full Name",
    modal_phone: "Phone / WhatsApp",
    modal_date: "Date",
    modal_time: "Time",
    modal_guests: "Guests Count",
    modal_guests_1: "1 - 2 Guests (Cozy Table)",
    modal_guests_2: "3 - 5 Guests (Family Booth)",
    modal_guests_3: "6+ Guests (VIP Lounge Area)",
    modal_notes: "Special Requests (Optional)",
    modal_submit_book: "Confirm Reservation",
    modal_close: "Close",

    // Cart Modal
    cart_title: "Your Sweet Order",
    cart_empty: "Your order bag is empty. Explore our delicious menu!",
    cart_total: "Estimated Total:",
    cart_clear: "Clear All",
    cart_whatsapp: "Order via WhatsApp",
    cart_checkout: "Submit Order",

    // Contact
    contact_badge: "Get in Touch",
    contact_title: "Visit Us or Say Hello",
    contact_subtitle: "We love hearing from our guests. Reach out for inquiries, catering, or feedback.",
    contact_address_title: "Our Location",
    contact_address: "Al-Mukalla, 60th Street, Hadhramaut, Yemen",
    contact_phone_title: "Phone & WhatsApp",
    contact_phone: "+967 781 520 621",
    contact_email_title: "Email Address",
    contact_email: "Alnasseri@CrepeKing.com",
    contact_hours_title: "Opening Hours",
    contact_hours_weekdays: "Weekdays: 9:00 AM – 12:00 Midnight",
    contact_hours_weekends: "Weekends: 11:00 AM – 3:00 AM",
    contact_form_name: "Your Name",
    contact_form_email: "Email Address",
    contact_form_subject: "Subject",
    contact_form_msg: "Write your message here...",
    contact_btn_send: "Send Message",

    // Footer
    footer_tagline: "The royal destination for artisanal crepes, fluffy pancakes, and handcrafted sweets.",
    footer_quick_links: "Quick Navigation",
    footer_rights: "All rights reserved.",
    footer_credits: "Designed & Developed with ❤️ by <strong>Hailah & Mariam Al-Nasseri</strong>",
    footer_cv_badge: "Portfolio Project • Front-End Web Development",

    // Toasts
    toast_added_cart: "added to your order!",
    toast_cleared_cart: "Order cart has been cleared.",
    toast_booked: "🎉 Your table reservation request was received! We will contact you shortly.",
    toast_contact_sent: "✉️ Thank you! Your message has been sent successfully.",
    toast_lang_switched: "Language switched to English",
    toast_theme_switched: "Theme mode updated",
  },

  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_offers: "العروض الخاصة",
    nav_menu: "قائمتنا",
    nav_places: "فروعنا وجلساتنا",
    nav_contact: "تواصل معنا",
    nav_book: "حجز طاولة",
    nav_cart: "سلة الطلبات",

    // Hero
    hero_badge: "✨ الوجهة الأولى لعشاق الحلويات في المكلا",
    hero_title_prefix: "مرحباً بكم في",
    hero_title_highlight: "كريب كينج (CREPE KING)",
    hero_subtitle: "نأخذكم في رحلة ملكية من ألذ وأشهى أنواع الكريب الفرنسي، والوافل المقرمش، والبان كيك الذهبي المغطى بالشوكولاتة البلجيكية الفاخرة.",
    hero_btn_explore: "استكشف القائمة",
    hero_btn_book: "احجز طاولتك الآن",
    hero_stat_customers: "عميل سعيد",
    hero_stat_recipes: "وصفة متميزة",
    hero_stat_rating: "تقييم الزوار",
    hero_stat_quality: "جودة وطزاجة يومية",

    // Why Choose Us
    why_title: "لماذا كريب كينج؟",
    why_subtitle: "نجمع بين الشغف، أفضل المكونات العالمية، والأجواء العائلية الراقية",
    why_1_title: "شوكولاتة بلجيكية أصلية",
    why_1_desc: "نستخدم نوتيلا أصلية، كاكاو بلجيكي داكن، وزبدة اللوتس الفاخرة لضمان أروع مذاق.",
    why_2_title: "تحضير طازج وفوري",
    why_2_desc: "تُخبز عجائن الكريب والوافل لحظة طلبك مباشرة لتبقى ساخنة وهشة ولذيذة.",
    why_3_title: "جلسات راقية ومريحة",
    why_3_desc: "ديكورات عصرية وإضاءات دافئة صُممت لتمنحكم أوقاتاً ممتعة مع الأصدقاء والعائلة.",
    why_4_title: "خدمة توصيل سريعة",
    why_4_desc: "نصلكم أينما كنتم في المكلا بطلبات ساخنة وتغليف أنيق يحافظ على الجودة.",

    // About
    about_badge: "قصتنا",
    about_title: "حكاية كريب كينج",
    about_established: "تأسس في 5 أغسطس 2022 • المكلا، اليمن",
    about_p1: "انطلقت فكرة <strong>كريب كينج (CREPE KING)</strong> من شغف حقيقي بتقديم تجربة حلويات استثنائية تنافس المقاهي العالمية على أرض المكلا. وكان شعارنا الدائم منذ اليوم الأول: <em>الجودة الأفضل والأسعار الأنسب</em>.",
    about_p2: "نحرص دائماً على رضاكم وإسعاد حواسكم، ونختار يومياً أرقى أصناف الفواكه الطازجة، والمكسرات المحمصة، مع الآيس كريم الفاخر لتزيين أطباقكم المفضلة.",
    about_quote: "“إذا كنت ترغب في تذوق طعم لا ينسى أبداً، فمكانك الدائم هو كريب كينج.”",
    about_signature: "— هيلة ومريم الناصري (المؤسستان)",
    about_btn_menu: "تصفح أطباقنا المميزة",

    // Offers
    offers_badge: "عروض لا تُفوّت",
    offers_title: "عروضنا الملكية الخاصة",
    offers_subtitle: "مجموعات لذيذة بأسعار احتفالية مميزة تناسب الجميع",
    offer_tag_bestseller: "الأكثر طلباً 🔥",
    offer_tag_popular: "المفضل دائماً ⭐",
    offer_tag_special: "اختيار الشيف 👑",
    offer_1_title: "كومبو كريب النوتيلا الملكي",
    offer_1_desc: "كريب محشو بنوتيلا فاخرة، بسكويت لوتس، فراولة طازجة، موز، مكسرات، ومغرفة آيس كريم فانيليا.",
    offer_2_title: "بان كيك العسل والشوكولاتة",
    offer_2_desc: "طبقات من البان كيك الهش الذهبي مع العسل الطبيعي، صوص الشوكولاتة، وتوت بري طازج.",
    offer_3_title: "سوبريم كيك ووافل بلجيكي",
    offer_3_desc: "وافل مقرمش مزين بمزيج الشوكولاتة البيضاء والداكنة مع اللوتس وكرة آيس كريم فاخرة.",
    offer_btn_order: "طلب العرض",

    // Menu
    menu_badge: "قائمتنا اللذيذة",
    menu_title: "منيو كريب كينج",
    menu_subtitle: "اطلب أي صنفين واحصل على الصنف الثالث مجاناً!",
    menu_search_placeholder: "ابحث في أصناف الكريب، البان كيك، الوافل...",
    menu_tab_all: "جميع الأصناف",
    menu_tab_crepe: "كريب",
    menu_tab_pancake: "بان كيك",
    menu_tab_waffle: "وافل",
    menu_tab_drinks: "مشروبات ومثلجات",
    menu_add_cart: "أضف للطلب",
    menu_currency: "$",

    // Menu items
    item_1_title: "كريب الشوكولاتة والمكسرات",
    item_1_desc: "شوكولاتة الحليب الفاخرة مع البندق المحمص وشرائح اللوز الشهية.",
    item_2_title: "بان كيك الشوكولاتة والفواكه",
    item_2_desc: "برج من البان كيك الهش محلى بالموز، الكيوي، وشلال الشوكولاتة.",
    item_3_title: "كريب الشوكولاتة الداكنة (Dark)",
    item_3_desc: "كاكاو بلجيكي مركز بنسبة 70% لعشاق الطعم الغني الأصيل.",
    item_4_title: "وافل الشوكولاتة البيضاء والداكنة",
    item_4_desc: "وافل بلجيكي مقرمش بمزيج متناسق من الشوكولاتة البيضاء والسوداء.",
    item_5_title: "كريب المربى الطبيعي والآيس كريم",
    item_5_desc: "مربى التوت اللذيذ مع سكوب آيس كريم فانيليا بارد ومنعش.",
    item_6_title: "كريب زبدة وبسكويت اللوتس",
    item_6_desc: "غمر من زبدة اللوتس الأصلية مع فتات البسكويت المقرمش.",
    item_7_title: "بان كيك كيندر والمارشميلو",
    item_7_desc: "قطع شوكولاتة كيندر الذائبة وحبات المارشميلو المحمرة.",
    item_8_title: "بان كيك الجبن اللذيذ والعسل",
    item_8_desc: "مزيج يجمع بين ملوحة الجبن اللذيذة وحلاوة العسل الطبيعي الصافي.",
    item_9_title: "بان كيك مكس الفواكه والآيس كريم",
    item_9_desc: "فواكه الموسم الطازجة مع صوص الشوكولاتة وآيس كريم منعش.",
    item_10_title: "كريب الفواكه والشوكولاتة الملكي",
    item_10_desc: "فراولة وموز وأناناس مع صوص الشوكولاتة الملكية الخاصة.",

    // Places
    places_badge: "أجواؤنا وجلساتنا",
    places_title: "جلسات وفروع كريب كينج",
    places_subtitle: "صممنا جلساتنا بأحدث الديكورات والإضاءات لتستمتع بأجمل الأوقات والذكريات",
    places_zoom: "اضغط على الصورة للتكبير",

    // Testimonials
    reviews_badge: "آراء زوارنا",
    reviews_title: "ماذا يقول عملاؤنا عنا؟",
    review_1_text: "“بلا منازع ألذ كريب في المكلا! الشوكولاتة المستخدمة أصلية والفواكه طازجة دائماً. مكاننا المفضل كل أسبوع!”",
    review_1_author: "أحمد باوزير",
    review_1_role: "عميل دائم",
    review_2_text: "“الديكور رائع والأجواء مريحة جداً. تعامل طاقم العمل راقٍ والوافل عندهم مقرمش ولذيذ بشكل لا يقاوم.”",
    review_2_author: "فاطمة الكثيري",
    review_2_role: "مهتمة بالحلويات والمطاعم",
    review_3_text: "“كريب كينج هو خيارنا الدائم للاحتفال والمناسبات اللطيفة. العروض قوية وطعم الكريب باللوتس إدمان حقيقي!”",
    review_3_author: "سالم العمودي",
    review_3_role: "زبون وفي",

    // Booking Modal
    modal_book_title: "حجز طاولة ملكية",
    modal_book_desc: "احجز طاولتك وجلساتك مسبقاً لتضمن قضاء أجمل اللحظات مع عائلتك وأصدقائك.",
    modal_name: "الاسم الكامل",
    modal_phone: "رقم الجوال / واتساب",
    modal_date: "التاريخ",
    modal_time: "الوقت",
    modal_guests: "عدد الضيوف",
    modal_guests_1: "1 - 2 أشخاص (طاولة هادئة)",
    modal_guests_2: "3 - 5 أشخاص (جلسة عائلية)",
    modal_guests_3: "6 أشخاص فأكثر (قسم الـ VIP)",
    modal_notes: "ملاحظات أو طلبات خاصة (اختياري)",
    modal_submit_book: "تأكيد طلب الحجز",
    modal_close: "إغلاق",

    // Cart Modal
    cart_title: "سلة طلباتك الشهية",
    cart_empty: "سلة الطلبات فارغة حالياً. تصفح قائمتنا اللذيذة وأضف طلباتك!",
    cart_total: "المجموع التقديري:",
    cart_clear: "إفراغ السلة",
    cart_whatsapp: "إرسال الطلب عبر واتساب",
    cart_checkout: "إتمام الطلب",

    // Contact
    contact_badge: "يسعدنا تواصلكم",
    contact_title: "زورونا أو تواصلوا معنا",
    contact_subtitle: "نسعد دائماً باستقبالكم والرد على استفساراتكم وحجوزاتكم ومناسباتكم الخاصة.",
    contact_address_title: "العنوان والموقع",
    contact_address: "المكلا، شارع الستين، حضرموت، اليمن",
    contact_phone_title: "الهاتف وواتساب",
    contact_phone: "781520621 (967+)",
    contact_email_title: "البريد الإلكتروني",
    contact_email: "Alnasseri@CrepeKing.com",
    contact_hours_title: "ساعات العمل",
    contact_hours_weekdays: "أيام الأسبوع: من 9:00 صباحاً حتى 12:00 منتصف الليل",
    contact_hours_weekends: "عطلة نهاية الأسبوع: من 11:00 صباحاً حتى 3:00 فجراً",
    contact_form_name: "الاسم الكريم",
    contact_form_email: "البريد الإلكتروني",
    contact_form_subject: "موضوع الرسالة",
    contact_form_msg: "اكتب رسالتك أو استفسارك هنا...",
    contact_btn_send: "إرسال الرسالة",

    // Footer
    footer_tagline: "الوجهة الملكية الفاخرة لأشهى الكريب والوافل والبان كيك والمشروبات في حضرموت.",
    footer_quick_links: "روابط سريعة",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_credits: "تم التصميم والتطوير بكل ❤️ بواسطة <b>هيلة ومريم الناصري</b>",
    footer_cv_badge: "مشروع معرض أعمال بورتفوليو • فرونت إند ويب متكامل",

    // Toasts
    toast_added_cart: "تمت إضافته إلى سلة الطلب!",
    toast_cleared_cart: "تم إفراغ سلة الطلبات.",
    toast_booked: "🎉 تم استلام طلب حجز الطاولة بنجاح! سنتواصل معكم لتأكيد الحجز.",
    toast_contact_sent: "✉️ شكراً لتواصلكم! تم إرسال رسالتكم بنجاح وسنرد عليكم قريباً.",
    toast_lang_switched: "تم تغيير لغة الموقع إلى العربية",
    toast_theme_switched: "تم تحديث مظهر الموقع",
  }
};

// ==================== APP STATE ====================
let currentLang = localStorage.getItem("crepe_king_lang") || "ar";
let currentTheme = localStorage.getItem("crepe_king_theme") || "dark";
let cartItems = JSON.parse(localStorage.getItem("crepe_king_cart") || "[]");

// ==================== DOM READY ====================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavbar();
  initMenuFilters();
  initCart();
  initModals();
  initContactForm();
  initScrollEffects();
});

// ==================== THEME MANAGEMENT ====================
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      showToast(translations[currentLang].toast_theme_switched);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("crepe_king_theme", theme);

  const icon = document.querySelector("#themeToggleBtn i");
  if (icon) {
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun";
      icon.setAttribute("title", currentLang === "ar" ? "الوضع النهاري" : "Switch to Light Mode");
    } else {
      icon.className = "fa-solid fa-moon";
      icon.setAttribute("title", currentLang === "ar" ? "الوضع الليلي" : "Switch to Dark Mode");
    }
  }
}

// ==================== LANGUAGE MANAGEMENT ====================
function initLanguage() {
  const langToggleBtn = document.getElementById("langToggleBtn");
  applyLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      applyLanguage(currentLang);
      showToast(translations[currentLang].toast_lang_switched);
    });
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("crepe_king_lang", lang);

  const isRTL = lang === "ar";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

  // Update text elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update language button display
  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = lang === "ar" ? "English" : "العربية";
  }

  // Update cart modal text dynamically
  updateCartUI();
}

// ==================== NAVBAR & SCROLL ====================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navMenu = document.getElementById("navMenu");
  const navToggle = document.getElementById("navToggle");
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Sticky Navbar on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
      if (backToTopBtn) backToTopBtn.classList.add("visible");
    } else {
      navbar.classList.remove("scrolled");
      if (backToTopBtn) backToTopBtn.classList.remove("visible");
    }
  });

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    // Close menu on link click
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }
}

// ==================== MENU FILTER & SEARCH ====================
function initMenuFilters() {
  const filterBtns = document.querySelectorAll(".menu-filter-btn");
  const menuItems = document.querySelectorAll(".menu-card");
  const searchInput = document.getElementById("menuSearchInput");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      filterMenuItems(category, searchInput ? searchInput.value.trim().toLowerCase() : "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeFilterBtn = document.querySelector(".menu-filter-btn.active");
      const currentCategory = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
      filterMenuItems(currentCategory, e.target.value.trim().toLowerCase());
    });
  }

  function filterMenuItems(category, query) {
    menuItems.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");
      const title = card.querySelector(".menu-card-title")?.textContent.toLowerCase() || "";
      const desc = card.querySelector(".menu-card-desc")?.textContent.toLowerCase() || "";

      const matchesCat = category === "all" || cardCategory === category;
      const matchesSearch = query === "" || title.includes(query) || desc.includes(query);

      if (matchesCat && matchesSearch) {
        card.style.display = "flex";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        }, 10);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px) scale(0.95)";
        setTimeout(() => {
          card.style.display = "none";
        }, 250);
      }
    });
  }
}

// ==================== CART & ORDER MANAGEMENT ====================
function initCart() {
  const cartTriggerBtns = document.querySelectorAll(".cart-trigger-btn");
  const cartModal = document.getElementById("cartModal");
  const cartCloseBtn = document.getElementById("cartCloseBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");

  // Add to cart buttons across cards & offers
  document.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".btn-add-cart");
    if (addBtn) {
      const name = addBtn.getAttribute("data-name");
      const price = parseFloat(addBtn.getAttribute("data-price")) || 0;
      const image = addBtn.getAttribute("data-img") || "";

      addToCart({ name, price, image });
      showToast(`🛒 "${name}" ${translations[currentLang].toast_added_cart}`);
    }
  });

  // Open Cart Modal
  cartTriggerBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal("cartModal");
    });
  });

  // Close Cart Modal
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", () => closeModal("cartModal"));
  }

  // Clear Cart
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cartItems = [];
      saveCart();
      updateCartUI();
      showToast(translations[currentLang].toast_cleared_cart);
    });
  }

  // WhatsApp Order Integration
  if (whatsappOrderBtn) {
    whatsappOrderBtn.addEventListener("click", () => {
      if (cartItems.length === 0) return;

      const phone = "967781520621";
      let msg = currentLang === "ar"
        ? `*طلب جديد من موقع كريب كينج:*%0A------------------------%0A`
        : `*New Order from Crepe King Website:*%0A------------------------%0A`;

      let total = 0;
      cartItems.forEach((item, idx) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        msg += `${idx + 1}. ${item.name} (${item.quantity}x) - $${itemTotal}%0A`;
      });

      msg += `------------------------%0A*المجموع الكلي:* $${total}%0A`;
      msg += currentLang === "ar"
        ? `العنوان: المكلا - حضرموت%0Aشكراً كريب كينج!`
        : `Location: Mukalla - Hadhramaut%0AThank you Crepe King!`;

      const whatsappUrl = `https://wa.me/${phone}?text=${msg}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  updateCartUI();
}

function addToCart(product) {
  const existing = cartItems.find((item) => item.name === product.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  saveCart();
  updateCartUI();
}

function updateCartItemQty(index, delta) {
  if (cartItems[index]) {
    cartItems[index].quantity += delta;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem("crepe_king_cart", JSON.stringify(cartItems));
}

function updateCartUI() {
  const badgeCounts = document.querySelectorAll(".cart-badge-count");
  const cartList = document.getElementById("cartItemsList");
  const cartTotalPrice = document.getElementById("cartTotalPrice");
  const whatsappOrderBtn = document.getElementById("whatsappOrderBtn");

  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  badgeCounts.forEach((badge) => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? "inline-flex" : "none";
  });

  if (cartTotalPrice) {
    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
  }

  if (whatsappOrderBtn) {
    whatsappOrderBtn.disabled = cartItems.length === 0;
  }

  if (!cartList) return;

  if (cartItems.length === 0) {
    cartList.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>${translations[currentLang].cart_empty}</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = cartItems
    .map(
      (item, index) => `
      <div class="cart-item-row">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" class="cart-item-img">` : ""}
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)} ($${item.price} ea)</span>
        </div>
        <div class="cart-qty-ctrls">
          <button type="button" onclick="updateCartItemQty(${index}, -1)" class="cart-qty-btn" aria-label="Decrease"><i class="fa-solid fa-minus"></i></button>
          <span class="cart-qty-num">${item.quantity}</span>
          <button type="button" onclick="updateCartItemQty(${index}, 1)" class="cart-qty-btn" aria-label="Increase"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
    `
    )
    .join("");
}

// Make updateCartItemQty global
window.updateCartItemQty = updateCartItemQty;

// ==================== MODALS (BOOKING & LIGHTBOX) ====================
function initModals() {
  // Booking Modal triggers
  document.querySelectorAll(".book-table-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal("bookingModal");
    });
  });

  const bookingCloseBtn = document.getElementById("bookingCloseBtn");
  if (bookingCloseBtn) {
    bookingCloseBtn.addEventListener("click", () => closeModal("bookingModal"));
  }

  // Booking Form Submission
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      closeModal("bookingModal");
      bookingForm.reset();
      showToast(translations[currentLang].toast_booked);
    });
  }

  // Lightbox for Branches / Places
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");

  document.querySelectorAll(".place-img-card img").forEach((img) => {
    img.addEventListener("click", () => {
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Crepe King Atmosphere";
        openModal("lightboxModal");
      }
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", () => closeModal("lightboxModal"));
  }

  // Close modals clicking outside
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  });

  // ESC key to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach((modal) => {
        modal.classList.remove("active");
      });
      document.body.style.overflow = "";
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${currentLang === "ar" ? "جارِ الإرسال..." : "Sending..."}`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showToast(translations[currentLang].toast_contact_sent);
      }, 1200);
    });
  }
}

// ==================== SCROLL EFFECTS & REVEAL ====================
function initScrollEffects() {
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, duration = 3500) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.innerHTML = `
    <div class="toast-content">
      <i class="fa-solid fa-bell-concierge toast-icon"></i>
      <span>${message}</span>
    </div>
    <button class="toast-close" aria-label="Dismiss">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  });

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
