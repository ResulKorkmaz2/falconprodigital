// Company Information
export const COMPANY_INFO = {
  name: 'Falcon Pro Digital',
  nameArabic: 'فالكون برو ديجيتال',
  tagline: 'أكبر شركة إعلانات وتكنولوجيا معلومات وذكاء اصطناعي دولية في الخليج',
  taglineEnglish: "The Gulf's Largest International Advertising, Information Technology and AI Company",
  parentCompany: 'Aptiro LLC',
  parentCompanyLocation: 'الولايات المتحدة الأمريكية',
  founded: '2024',
  whatsappNumber: '+15053736924',
  whatsappDisplayNumber: '+1 (505) 373-6924',
  autoMessage: 'Hello, I would like to get help in Digital Marketing',
} as const;

// Service Areas
export const SERVICE_AREAS = [
  { name: 'السعودية', nameEnglish: 'Saudi Arabia', flag: '🇸🇦' },
  { name: 'قطر', nameEnglish: 'Qatar', flag: '🇶🇦' },
  { name: 'الكويت', nameEnglish: 'Kuwait', flag: '🇰🇼' },
  { name: 'الإمارات', nameEnglish: 'UAE', flag: '🇦🇪' },
] as const;

// Services Data
export const SERVICES = [
  {
    id: 'google-maps',
    title: 'تسجيل خرائط جوجل',
    titleEnglish: 'Google Maps Registration',
    description: 'تسجيل وتحسين بيانات شركتك على خرائط جوجل لزيادة الظهور المحلي',
    features: ['إنشاء وتحسين البروفايل', 'إدارة المراجعات', 'تحسين الصور والمعلومات'],
    popular: false,
    icon: '📍',
    image: '/images/seo.jpg',
  },
  {
    id: 'google-ads',
    title: 'إعلانات جوجل',
    titleEnglish: 'Google Ads',
    description: 'حملات إعلانية احترافية على جوجل لجلب العملاء المستهدفين وزيادة المبيعات مع أفضل عائد استثمار',
    features: [
      'إعلانات البحث والشبكة الإعلانية',
      'حملات YouTube احترافية',
      'استهداف جغرافي دقيق',
      'إدارة الميزانية والعروض',
      'تقارير مفصلة وتحليلات'
    ],
    popular: true,
    icon: '💡',
    image: '/images/google-ads.jpg',
  },
  {
    id: 'ecommerce-ads',
    title: 'إعلانات التجارة الإلكترونية',
    titleEnglish: 'E-commerce Advertising',
    description: 'حملات إعلانية متخصصة لمتاجر التجارة الإلكترونية تساعد في زيادة المبيعات وجذب العملاء المستهدفين',
    features: [
      'إعلانات المنتجات المتقدمة',
      'استهداف المشترين المحتملين',
      'إدارة حملات جوجل شوبينغ',
      'تتبع المبيعات والتحويلات',
      'إعلانات إعادة الاستهداف'
    ],
    popular: true,
    icon: '🛍️',
    image: '/images/content-marketing.jpg',
  },
  {
    id: 'social-media-ads',
    title: 'إعلانات وسائل التواصل',
    titleEnglish: 'Social Media Advertising',
    description: 'حملات إعلانية احترافية على جميع منصات التواصل الاجتماعي لزيادة المبيعات والوصول للعملاء المستهدفين',
    features: [
      'إعلانات فيسبوك وإنستجرام',
      'إعلانات الفيديو والريلز',
      'إعلانات TikTok وSnapchat',
      'إعادة الاستهداف الذكي',
      'تقارير أداء تفصيلية'
    ],
    popular: false,
    icon: '📢',
    image: '/images/social-media.jpg',
  },
  {
    id: 'social-media-management',
    title: 'إدارة وسائل التواصل',
    titleEnglish: 'Social Media Management',
    description: 'إدارة احترافية شاملة لحسابات وسائل التواصل الاجتماعي مع استراتيجيات محتوى متقدمة لبناء العلامة التجارية',
    features: [
      'إنشاء وإدارة المحتوى',
      'جدولة ونشر المنشورات',
      'التفاعل مع الجمهور',
      'تحليل الأداء والتقارير',
      'بناء استراتيجية المحتوى'
    ],
    popular: false,
    icon: '📈',
    image: '/images/content-marketing1.jpg',
  },
  {
    id: 'web-design',
    title: 'تصميم وتطوير المواقع',
    titleEnglish: 'Website Design & Development',
    description: 'تصميم وتطوير مواقع ويب حديثة ومتجاوبة مع جميع الأجهزة وتقنيات متطورة لضمان تجربة مستخدم مثالية',
    features: [
      'تصميم مخصص واحترافي',
      'متجاوب مع جميع الأجهزة',
      'سرعة تحميل عالية',
      'محسن لمحركات البحث',
      'لوحة تحكم سهلة'
    ],
    popular: true,
    icon: '🎨',
    image: '/images/web-design.jpg',
  },
  {
    id: 'desktop-software',
    title: 'برامج سطح المكتب',
    titleEnglish: 'Desktop Software',
    description: 'تطوير برامج سطح المكتب المخصصة والاحترافية لجميع القطاعات بأحدث التقنيات لتحسين كفاءة العمل',
    features: [
      'حلول برمجية مخصصة',
      'واجهة استخدام سهلة',
      'دعم فني متكامل',
      'تدريب شامل للمستخدمين',
      'تحديثات دورية مجانية'
    ],
    popular: false,
    icon: '⚙️',
    image: '/images/ozel-code.png',
  },
  {
    id: 'ai-solutions',
    title: 'حلول الذكاء الاصطناعي',
    titleEnglish: 'AI Solutions & Chatbots',
    description: 'حلول الذكاء الاصطناعي المتقدمة وروبوتات المحادثة الذكية لأتمتة أعمالك وزيادة الإنتاجية',
    features: [
      'روبوتات محادثة ذكية',
      'أتمتة العمليات التجارية',
      'تحليل البيانات المتقدم',
      'تكامل مع الأنظمة الحالية',
      'دعم متعدد اللغات'
    ],
    popular: true,
    icon: '🚀',
    image: '/images/email-marketing.jpg',
  },
] as const;

// Navigation Menu
export const NAVIGATION_MENU = [
  { name: 'الرئيسية', href: '#home', id: 'home' },
  { name: 'خدماتنا', href: '#services', id: 'services' },
  { name: 'أسعارنا', href: '/pricing', id: 'pricing' },
  { name: 'من نحن', href: '#about', id: 'about' },
  { name: 'اتصل بنا', href: '#contact', id: 'contact' },
] as const;

// Hero Section Content
export const HERO_CONTENT = {
  title: 'أكبر شركة إعلانات وتكنولوجيا معلومات وذكاء اصطناعي دولية في الخليج',
  subtitle: 'نقدم حلول التسويق الرقمي والذكاء الاصطناعي المتقدمة لرفع مستوى أعمالك في منطقة الخليج',
  serviceAreas: 'نخدم المملكة العربية السعودية | دولة قطر | دولة الكويت | دولة الإمارات العربية المتحدة',
  ctaText: 'ابدأ مشروعك الآن',
  ctaSecondaryText: 'تعرف على خدماتنا',
} as const;

// About Section Content
export const ABOUT_CONTENT = {
  title: 'من نحن',
  subtitle: 'فالكون برو ديجيتال - رائدون في التسويق الرقمي والذكاء الاصطناعي',
  description: 'نحن شركة متخصصة في تقديم حلول التسويق الرقمي والذكاء الاصطناعي المبتكرة في منطقة الخليج. كفرع من شركة Aptiro LLC الأمريكية، نجمع بين الخبرة الدولية والفهم العميق للسوق المحلي.',
  highlights: [
    {
      title: 'خبرة دولية',
      description: 'فرع من شركة Aptiro LLC الأمريكية المتخصصة في التكنولوجيا',
    },
    {
      title: 'تغطية شاملة',
      description: 'نخدم أربع دول خليجية بفريق متخصص ومحلي',
    },
    {
      title: 'حلول متقدمة',
      description: 'استخدام أحدث تقنيات الذكاء الاصطناعي والتسويق الرقمي',
    },
    {
      title: 'دعم مستمر',
      description: 'فريق دعم عربي متاح على مدار الساعة عبر الواتساب',
    },
  ],
  stats: [
    { number: '500+', label: 'عميل راضٍ' },
    { number: '4', label: 'دول خليجية' },
    { number: '8', label: 'خدمة متخصصة' },
    { number: '24/7', label: 'دعم فني' },
  ],
} as const;

// Contact Section Content
export const CONTACT_CONTENT = {
  title: 'تواصل معنا',
  subtitle: 'نحن هنا لمساعدتك في تطوير أعمالك رقمياً',
  description: 'الطريقة الوحيدة للتواصل معنا هي عبر الواتساب للحصول على رد سريع وخدمة مخصصة',
  whatsappText: 'تواصل عبر الواتساب',
  autoMessageNote: 'سيتم إرسال رسالة تلقائية باللغة الإنجليزية لبدء المحادثة',
  serviceAreas: {
    title: 'نخدم في:',
    areas: SERVICE_AREAS,
  },
} as const;

// Footer Content
export const FOOTER_CONTENT = {
  companyDescription: 'شركة فالكون برو ديجيتال، فرع من شركة Aptiro LLC الأمريكية، رائدة في مجال التسويق الرقمي والذكاء الاصطناعي في منطقة الخليج.',
  sections: {
    services: {
      title: 'خدماتنا',
      links: [
        { name: 'إعلانات جوجل', href: '#services' },
        { name: 'تصميم المواقع', href: '#services' },
        { name: 'الذكاء الاصطناعي', href: '#services' },
        { name: 'إدارة وسائل التواصل', href: '#services' },
      ],
    },
    quickLinks: {
      title: 'روابط سريعة',
      links: [
        { name: 'الرئيسية', href: '#home' },
        { name: 'خدماتنا', href: '#services' },
        { name: 'من نحن', href: '#about' },
        { name: 'اتصل بنا', href: '#contact' },
      ],
    },
    contact: {
      title: 'تواصل معنا',
      whatsapp: 'واتساب',
    },
  },
  copyright: `© ${new Date().getFullYear()} فالكون برو ديجيتال - فرع من شركة Aptiro LLC. جميع الحقوق محفوظة.`,
} as const;

// WhatsApp Integration
export const WHATSAPP_CONFIG = {
  number: COMPANY_INFO.whatsappNumber,
  message: encodeURIComponent(COMPANY_INFO.autoMessage),
  link: `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.autoMessage)}`,
} as const;
