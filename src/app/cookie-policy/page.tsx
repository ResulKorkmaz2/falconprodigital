'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Cookie, Settings, BarChart3, Target, Globe, Calendar, Mail } from 'lucide-react'

export default function CookiePolicyPage() {
  const [language, setLanguage] = useState('ar')

  const content = {
    ar: {
      title: 'سياسة ملفات تعريف الارتباط',
      lastUpdated: 'آخر تحديث: يناير 2024',
      intro: 'نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتكم على موقعنا وتقديم خدمات مخصصة. توضح هذه السياسة أنواع الكوكيز التي نستخدمها وكيفية إدارتها.',
      sections: [
        {
          title: 'ما هي ملفات تعريف الارتباط؟',
          content: [
            'ملفات صغيرة يتم حفظها على جهازكم عند زيارة موقعنا',
            'تساعد في تذكر تفضيلاتكم وتحسين أداء الموقع',
            'تمكننا من فهم كيفية استخدامكم للموقع وتحسينه',
            'آمنة ولا تحتوي على معلومات شخصية حساسة'
          ]
        },
        {
          title: 'أنواع ملفات تعريف الارتباط',
          content: [
            'الكوكيز الأساسية: ضرورية لعمل الموقع الأساسي ولا يمكن إيقافها',
            'كوكيز الأداء: تساعد في فهم كيفية تفاعل الزوار مع الموقع',
            'كوكيز الوظائف: تحفظ اختياراتكم مثل اللغة والتفضيلات',
            'كوكيز التسويق: تساعد في عرض إعلانات مخصصة وذات صلة'
          ]
        },
        {
          title: 'الكوكيز التي نستخدمها',
          content: [
            'Google Analytics: لتحليل حركة الزوار وسلوك المستخدمين',
            'كوكيز الجلسة: لضمان عمل الموقع بشكل صحيح أثناء تصفحكم',
            'كوكيز التفضيلات: لحفظ اختياراتكم مثل اللغة المفضلة',
            'كوكيز الأمان: لحماية موقعنا من الهجمات والأنشطة المشبوهة'
          ]
        },
        {
          title: 'كوكيز الطرف الثالث',
          content: [
            'Google Analytics: لقياس الأداء وفهم سلوك المستخدمين',
            'Google Ads: لتتبع فعالية حملاتنا الإعلانية',
            'WhatsApp Business: لتسهيل التواصل عبر واتساب',
            'Cloudflare: لحماية الموقع وتسريع التحميل'
          ]
        },
        {
          title: 'إدارة ملفات تعريف الارتباط',
          content: [
            'يمكنكم حذف أو منع الكوكيز من خلال إعدادات المتصفح',
            'قد يؤثر إيقاف الكوكيز على وظائف معينة في الموقع',
            'يمكنكم إلغاء الاشتراك في Google Analytics عبر الإضافة الرسمية',
            'نحترم اختياراتكم ونقدم خيارات مرنة لإدارة الكوكيز'
          ]
        },
        {
          title: 'الاتصال بنا',
          content: [
            'لأي استفسارات حول سياسة الكوكيز، تواصلوا معنا عبر واتساب.',
            'نلتزم بتوضيح أي معلومات حول استخدامنا للكوكيز.',
            'يمكنكم طلب المساعدة في إدارة إعدادات الكوكيز الخاصة بكم.'
          ]
        }
      ]
    },
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last Updated: January 2024',
      intro: 'We use cookies to improve your experience on our website and provide personalized services. This policy explains the types of cookies we use and how to manage them.',
      sections: [
        {
          title: 'What are Cookies?',
          content: [
            'Small files stored on your device when you visit our website',
            'Help remember your preferences and improve site performance',
            'Enable us to understand how you use the site and improve it',
            'Safe and do not contain sensitive personal information'
          ]
        },
        {
          title: 'Types of Cookies',
          content: [
            'Essential Cookies: Necessary for basic site functionality and cannot be disabled',
            'Performance Cookies: Help understand how visitors interact with the website',
            'Functionality Cookies: Remember your choices like language and preferences',
            'Marketing Cookies: Help show personalized and relevant advertisements'
          ]
        },
        {
          title: 'Cookies We Use',
          content: [
            'Google Analytics: To analyze visitor traffic and user behavior',
            'Session Cookies: To ensure the website works correctly during browsing',
            'Preference Cookies: To save your choices like preferred language',
            'Security Cookies: To protect our website from attacks and suspicious activities'
          ]
        },
        {
          title: 'Third-Party Cookies',
          content: [
            'Google Analytics: To measure performance and understand user behavior',
            'Google Ads: To track effectiveness of our advertising campaigns',
            'WhatsApp Business: To facilitate communication via WhatsApp',
            'Cloudflare: To protect the website and speed up loading'
          ]
        },
        {
          title: 'Managing Cookies',
          content: [
            'You can delete or block cookies through your browser settings',
            'Disabling cookies may affect certain website functions',
            'You can opt out of Google Analytics via the official browser add-on',
            'We respect your choices and provide flexible options for managing cookies'
          ]
        },
        {
          title: 'Contact Us',
          content: [
            'For any questions about our cookie policy, contact us via WhatsApp.',
            'We commit to clarifying any information about our cookie usage.',
            'You can request help managing your cookie settings.'
          ]
        }
      ]
    }
  }

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="bg-gradient-to-br from-slate-50 to-white min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
                <Cookie className="w-10 h-10" />
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content[language].title}
              </h1>
              
              <p className={`text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content[language].intro}
              </p>
              
              <div className={`inline-flex items-center gap-2 text-orange-200 ${language === 'ar' ? 'font-arabic' : ''}`}>
                <Calendar className="w-5 h-5" />
                {content[language].lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Language Toggle */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    language === 'ar'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-500'
                  } font-arabic`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Settings Demo */}
        <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="text-center mb-8">
                <Settings className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'إدارة تفضيلات الكوكيز' : 'Manage Cookie Preferences'}
                </h3>
                <p className={`text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' 
                    ? 'يمكنكم التحكم في أنواع الكوكيز المسموح بها'
                    : 'You can control which types of cookies are allowed'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <Target className="w-6 h-6 text-green-500" />,
                    title: language === 'ar' ? 'كوكيز أساسية' : 'Essential Cookies',
                    desc: language === 'ar' ? 'مطلوبة لعمل الموقع' : 'Required for site functionality',
                    enabled: true,
                    disabled: true
                  },
                  { 
                    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
                    title: language === 'ar' ? 'كوكيز التحليل' : 'Analytics Cookies',
                    desc: language === 'ar' ? 'تساعد في تحسين الموقع' : 'Help improve the website',
                    enabled: true,
                    disabled: false
                  },
                  { 
                    icon: <Settings className="w-6 h-6 text-purple-500" />,
                    title: language === 'ar' ? 'كوكيز الوظائف' : 'Functional Cookies',
                    desc: language === 'ar' ? 'تحفظ تفضيلاتكم' : 'Remember your preferences',
                    enabled: true,
                    disabled: false
                  },
                  { 
                    icon: <Globe className="w-6 h-6 text-orange-500" />,
                    title: language === 'ar' ? 'كوكيز التسويق' : 'Marketing Cookies',
                    desc: language === 'ar' ? 'لإعلانات مخصصة' : 'For personalized ads',
                    enabled: false,
                    disabled: false
                  }
                ].map((cookie, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                      {cookie.icon}
                      <div>
                        <h4 className={`font-semibold text-gray-900 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {cookie.title}
                        </h4>
                        <p className={`text-sm text-gray-600 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {cookie.desc}
                        </p>
                      </div>
                    </div>
                    <div className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      cookie.enabled ? 'bg-green-500' : 'bg-gray-300'
                    } ${cookie.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        cookie.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>

              <p className={`text-sm text-gray-500 mt-6 text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? '* هذا مثال توضيحي. يمكنكم إدارة الكوكيز من خلال إعدادات المتصفح'
                  : '* This is a demonstration. You can manage cookies through browser settings'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {content[language].sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-orange-600" />
              </div>
              
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'هل تحتاج مساعدة؟' : 'Need Help?'}
              </h3>
              
              <p className={`text-gray-600 mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? 'تواصل معنا عبر واتساب لأي استفسارات حول سياسة الكوكيز'
                  : 'Contact us via WhatsApp for any cookie policy inquiries'
                }
              </p>
              
              <a
                href="https://wa.me/46724003075?text=مرحباً! لدي استفسار حول سياسة الكوكيز"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 ${language === 'ar' ? 'font-arabic' : ''}`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
