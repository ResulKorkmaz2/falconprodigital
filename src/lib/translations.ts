export interface Translation {
  nav: {
    home: string
    services: string
    about: string
    contact: string
    whatsapp: string
    freeAudit: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    whatsappCTA: string
    freeAuditCTA: string
  }
  services: {
    badge: string
    title: string
    description: string
    googleAds: {
      title: string
      description: string
      features: string[]
    }
    webDesign: {
      title: string
      description: string
      features: string[]
    }
    seoAnalytics: {
      title: string
      description: string
      features: string[]
    }
    cta: {
      title: string
      description: string
      startAudit: string
      scheduleCall: string
    }
  }
  about: AboutSection
  contact: {
    badge: string
    title: string
    description: string
    form: {
      title: string
      subtitle: string
      fields: {
        name: string
        email: string
        phone: string
        company: string
        service: string
        budget: string
        message: string
      }
      submit: string
      sending: string
    }
    whatsapp: {
      title: string
      description: string
      button: string
    }
  }
  footer: {
    description: string
    copyright: string
    disclaimer: string
  }
}

interface AboutSection {
  badge: string
  title: string
  subtitle: string
  description: string[]
  stats: {
    roi: string
    clients: string
    retention: string
    response: string
  }
  timeline: {
    founded: {
      title: string
      description: string
    }
    firstClients: {
      title: string
      description: string
    }
    expansion: {
      title: string
      description: string
    }
    milestone: {
      title: string
      description: string
    }
  }
}

export const translations: Record<'en' | 'ar', Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services', 
      about: 'About Us',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      freeAudit: 'Free Audit'
    },
    hero: {
      badge: 'ROI-Focused Digital Marketing',
      title: 'ROI-Driven Google Ads & Web Design for GCC Brands',
      subtitle: 'High-converting ads and web design for Gulf brands',
      description: 'Maximize your business growth with our proven Google Ads strategies and conversion-optimized web design. Serving ambitious SMEs across Saudi Arabia, Kuwait, and Qatar.',
      whatsappCTA: 'WhatsApp Us',
      freeAuditCTA: 'Get Free Audit'
    },
    services: {
      badge: 'Our Services',
      title: 'Comprehensive Digital Marketing Solutions for GCC',
      description: 'We provide end-to-end digital marketing services designed to maximize your ROI and drive sustainable business growth across Saudi Arabia, Kuwait, and Qatar.',
      googleAds: {
        title: 'Google Ads Management',
        description: 'Strategic campaign management with proven ROI optimization. We handle everything from keyword research to conversion tracking.',
        features: [
          'Campaign Setup & Optimization',
          'Keyword Research & Bidding',
          'Ad Copy Creation & Testing',
          'Conversion Tracking & Analytics',
          'Monthly Performance Reports'
        ]
      },
      webDesign: {
        title: 'Conversion-Focused Web Design',
        description: 'Modern, responsive websites designed to convert visitors into customers. Optimized for speed, SEO, and user experience.',
        features: [
          'Responsive Mobile-First Design',
          'Lightning-Fast Loading Speed',
          'SEO-Optimized Structure',
          'Conversion Rate Optimization',
          'Multi-language Support (EN/AR)'
        ]
      },
      seoAnalytics: {
        title: 'SEO & Analytics',
        description: 'Comprehensive SEO strategies and detailed analytics to track your digital marketing performance and ROI.',
        features: [
          'Technical SEO Audits',
          'Local SEO for GCC Markets',
          'Google Analytics Setup',
          'Performance Monitoring',
          'Competitor Analysis'
        ]
      },
      cta: {
        title: 'Ready to Boost Your ROI?',
        description: 'Get a free digital marketing audit and discover how we can help you achieve 3x better results.',
        startAudit: 'Start Free Audit',
        scheduleCall: 'Schedule Call'
      }
    },
    about: {
      badge: 'About Us',
      title: 'Driving Digital Success in the GCC',
      subtitle: 'Your Trusted Partner for Growth',
      description: [
        'Founded with a mission to empower businesses across Saudi Arabia, Kuwait, and Qatar, Falcon Pro Digital combines cutting-edge technology with deep market insights.',
        'We understand the unique challenges and opportunities in the GCC market, delivering tailored solutions that drive measurable results.',
        'Our team of certified experts specializes in Google Ads, web development, and SEO strategies that convert visitors into customers and maximize your return on investment.'
      ],
      stats: {
        roi: 'Average ROI Increase',
        clients: 'Happy Clients',
        retention: 'Client Retention Rate',
        response: 'Response Time'
      },
      timeline: {
        founded: {
          title: 'Founded',
          description: 'Started with a vision to help GCC businesses thrive digitally'
        },
        firstClients: {
          title: 'First 10 Clients',
          description: 'Achieved 250% average ROI for our initial client base'
        },
        expansion: {
          title: 'Regional Expansion',
          description: 'Expanded services across Saudi Arabia, Kuwait, and Qatar'
        },
        milestone: {
          title: '50+ Success Stories',
          description: 'Helping businesses achieve sustainable digital growth'
        }
      }
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Ready to Boost Your Digital Presence?',
      description: 'Get a free digital marketing audit and discover how we can help you achieve 3x better ROI. Our experts are ready to analyze your current strategy and provide actionable insights.',
      form: {
        title: 'Send Us a Message',
        subtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
        fields: {
          name: 'Full Name *',
          email: 'Email Address *',
          phone: 'Phone Number',
          company: 'Company Name',
          service: 'Service Interested In *',
          budget: 'Monthly Budget (USD)',
          message: 'Message *'
        },
        submit: 'Send Message',
        sending: 'Sending...'
      },
      whatsapp: {
        title: 'Prefer WhatsApp?',
        description: 'Get instant responses to your questions',
        button: 'Start WhatsApp Chat'
      }
    },
    footer: {
      description: 'ROI-driven Google Ads and web design services for ambitious SMEs across the GCC region.',
      copyright: ' 2025 Falcon Pro Digital. All rights reserved.',
      disclaimer: 'We are not an official Google Partner. We are an independent digital marketing agency specializing in Google Ads management and web design services.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن', 
      contact: 'اتصل بنا',
      whatsapp: 'واتساب',
      freeAudit: 'تدقيق مجاني'
    },
    hero: {
      badge: 'تسويق رقمي يركز على العائد على الاستثمار',
      title: 'إعلانات جوجل وتصميم مواقع عالية العائد للعلامات التجارية الخليجية',
      subtitle: 'إعلانات وتصميم مواقع عالية التحويل للعلامات التجارية الخليجية',
      description: 'عظّم نمو أعمالك باستراتيجياتنا المثبتة لإعلانات جوجل وتصميم المواقع المحسن للتحويل. نخدم الشركات الصغيرة والمتوسطة الطموحة في المملكة العربية السعودية والكويت وقطر.',
      whatsappCTA: 'تواصل عبر واتساب',
      freeAuditCTA: 'احصل على تدقيق مجاني'
    },
    services: {
      badge: 'خدماتنا',
      title: 'حلول تسويق رقمي شاملة لدول الخليج',
      description: 'نقدم خدمات تسويق رقمي شاملة مصممة لتعظيم عائدك على الاستثمار ودفع النمو المستدام للأعمال في المملكة العربية السعودية والكويت وقطر.',
      googleAds: {
        title: 'إدارة إعلانات جوجل',
        description: 'إدارة استراتيجية للحملات مع تحسين مؤكد للعائد على الاستثمار. نتولى كل شيء من البحث عن الكلمات المفتاحية إلى تتبع التحويلات.',
        features: [
          'إعداد وتحسين الحملات',
          'البحث عن الكلمات المفتاحية والمزايدة',
          'إنشاء واختبار نصوص الإعلانات',
          'تتبع التحويلات والتحليلات',
          'تقارير الأداء الشهرية'
        ]
      },
      webDesign: {
        title: 'تصميم مواقع عالية التحويل',
        description: 'مواقع ويب حديثة ومتجاوبة مصممة لتحويل الزوار إلى عملاء. محسنة للسرعة وتحسين محركات البحث وتجربة المستخدم.',
        features: [
          'تصميم متجاوب يركز على الهاتف المحمول',
          'سرعة تحميل فائقة',
          'هيكل محسن لمحركات البحث',
          'تحسين معدل التحويل',
          'دعم متعدد اللغات (إنجليزي/عربي)'
        ]
      },
      seoAnalytics: {
        title: 'تحسين محركات البحث والتحليلات',
        description: 'استراتيجيات شاملة لتحسين محركات البحث وتحليلات مفصلة لتتبع أداء التسويق الرقمي والعائد على الاستثمار.',
        features: [
          'تدقيق تحسين محركات البحث التقني',
          'تحسين محركات البحث المحلية لأسواق الخليج',
          'إعداد جوجل أناليتكس',
          'مراقبة الأداء',
          'تحليل المنافسين'
        ]
      },
      cta: {
        title: 'هل أنت مستعد لتعزيز عائدك على الاستثمار؟',
        description: 'احصل على تدقيق مجاني للتسويق الرقمي واكتشف كيف يمكننا مساعدتك في تحقيق نتائج أفضل بـ 3 أضعاف.',
        startAudit: 'ابدأ التدقيق المجاني',
        scheduleCall: 'حدد موعد مكالمة'
      }
    },
    about: {
      badge: 'من نحن',
      title: 'قيادة النجاح الرقمي في دول مجلس التعاون',
      subtitle: 'شريكك الموثوق للنمو',
      description: [
        'تأسست برسالة تمكين الشركات في المملكة العربية السعودية والكويت وقطر، تجمع فالكون برو ديجيتال بين التكنولوجيا المتطورة والرؤى العميقة للسوق.',
        'نحن نفهم التحديات والفرص الفريدة في سوق دول مجلس التعاون، ونقدم حلولاً مخصصة تحقق نتائج قابلة للقياس.',
        'يختص فريقنا من الخبراء المعتمدين في إعلانات جوجل وتطوير المواقع واستراتيجيات تحسين محركات البحث التي تحول الزوار إلى عملاء وتعظم عائدك على الاستثمار.'
      ],
      stats: {
        roi: 'متوسط زيادة العائد على الاستثمار',
        clients: 'عميل سعيد',
        retention: 'معدل الاحتفاظ بالعملاء',
        response: 'وقت الاستجابة'
      },
      timeline: {
        founded: {
          title: 'التأسيس',
          description: 'بدأنا برؤية لمساعدة الشركات الخليجية على الازدهار رقمياً'
        },
        firstClients: {
          title: 'أول 10 عملاء',
          description: 'حققنا 250% متوسط عائد على الاستثمار لقاعدة عملائنا الأولى'
        },
        expansion: {
          title: 'التوسع الإقليمي',
          description: 'وسعنا خدماتنا عبر المملكة العربية السعودية والكويت وقطر'
        },
        milestone: {
          title: '+50 قصة نجاح',
          description: 'مساعدة الشركات على تحقيق نمو رقمي مستدام'
        }
      }
    },
    contact: {
      badge: 'تواصل معنا',
      title: 'هل أنت مستعد لتعزيز حضورك الرقمي؟',
      description: 'احصل على تدقيق مجاني للتسويق الرقمي واكتشف كيف يمكننا مساعدتك في تحقيق عائد أفضل بـ 3 أضعاف على الاستثمار.',
      form: {
        title: 'أرسل لنا رسالة',
        subtitle: 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة.',
        fields: {
          name: 'الاسم الكامل *',
          email: 'عنوان البريد الإلكتروني *',
          phone: 'رقم الهاتف',
          company: 'اسم الشركة',
          service: 'الخدمة المهتم بها *',
          budget: 'الميزانية الشهرية (دولار أمريكي)',
          message: 'الرسالة *'
        },
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...'
      },
      whatsapp: {
        title: 'تفضل واتساب؟',
        description: 'احصل على ردود فورية على أسئلتك',
        button: 'ابدأ محادثة واتساب'
      }
    },
    footer: {
      description: 'خدمات إعلانات جوجل وتصميم المواقع المدفوعة بالعائد على الاستثمار للشركات الطموحة في منطقة الخليج.',
      copyright: '© 2025 فالكون برو ديجيتال. جميع الحقوق محفوظة.',
      disclaimer: 'نحن لسنا شريكاً رسمياً لجوجل. نحن وكالة تسويق رقمي مستقلة متخصصة في إدارة إعلانات جوجل وخدمات تصميم المواقع.'
    }
  }
}
