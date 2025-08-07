'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { Shield, Eye, Lock, Users, FileText, Globe, Calendar, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState('ar')

  const content = {
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: يناير 2024',
      intro: 'في فالكون برو ديجيتال، نحترم خصوصيتكم ونلتزم بحماية بياناتكم الشخصية. توضح هذه السياسة كيفية جمع واستخدام وحماية المعلومات التي تقدمونها لنا.',
      sections: [
        {
          title: 'المعلومات التي نجمعها',
          content: [
            'معلومات الاتصال: الاسم، عنوان البريد الإلكتروني، رقم الهاتف',
            'معلومات الشركة: اسم الشركة، المجال التجاري، الموقع الإلكتروني',
            'بيانات الاستخدام: كيفية تفاعلكم مع موقعنا وخدماتنا',
            'ملفات تعريف الارتباط: لتحسين تجربة التصفح وتحليل الأداء'
          ]
        },
        {
          title: 'كيف نستخدم معلوماتكم',
          content: [
            'تقديم خدمات التسويق الرقمي المطلوبة',
            'التواصل معكم بشأن مشاريعكم واستفساراتكم',
            'تحسين خدماتنا وتطوير حلول جديدة',
            'إرسال تحديثات مهمة حول خدماتنا (بموافقتكم)',
            'تحليل الأداء وقياس فعالية حملاتنا التسويقية'
          ]
        },
        {
          title: 'حماية البيانات',
          content: [
            'نستخدم أحدث تقنيات التشفير لحماية بياناتكم',
            'الوصول المحدود للبيانات فقط للموظفين المخولين',
            'النسخ الاحتياطي المنتظم وأنظمة الأمان المتقدمة',
            'مراجعة دورية لسياسات الأمان وتحديثها'
          ]
        },
        {
          title: 'مشاركة المعلومات',
          content: [
            'لا نبيع أو نؤجر معلوماتكم الشخصية لأطراف ثالثة',
            'قد نشارك المعلومات مع شركاء موثوقين لتنفيذ خدماتنا',
            'نلتزم بالحصول على موافقتكم المسبقة قبل أي مشاركة',
            'جميع الشركاء ملزمون بنفس معايير الخصوصية'
          ]
        },
        {
          title: 'حقوقكم',
          content: [
            'الحق في الوصول إلى بياناتكم المحفوظة لدينا',
            'طلب تصحيح أو تحديث المعلومات غير الدقيقة',
            'حذف بياناتكم الشخصية (الحق في النسيان)',
            'سحب الموافقة على معالجة البيانات في أي وقت',
            'تلقي نسخة من بياناتكم بتنسيق قابل للقراءة'
          ]
        },
        {
          title: 'الاتصال بنا',
          content: [
            'لأي استفسارات حول سياسة الخصوصية أو ممارسات البيانات لدينا، يرجى التواصل معنا عبر واتساب.',
            'نلتزم بالرد على جميع الاستفسارات خلال 48 ساعة من تلقيها.',
            'يمكنكم تعديل تفضيلات الخصوصية أو طلب حذف البيانات في أي وقت.'
          ]
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 2024',
      intro: 'At Falcon Pro Digital, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect the information you provide to us.',
      sections: [
        {
          title: 'Information We Collect',
          content: [
            'Contact Information: Name, email address, phone number',
            'Company Information: Company name, business sector, website',
            'Usage Data: How you interact with our website and services',
            'Cookies: To improve browsing experience and analyze performance'
          ]
        },
        {
          title: 'How We Use Your Information',
          content: [
            'Provide requested digital marketing services',
            'Communicate with you about your projects and inquiries',
            'Improve our services and develop new solutions',
            'Send important updates about our services (with your consent)',
            'Analyze performance and measure effectiveness of our campaigns'
          ]
        },
        {
          title: 'Data Protection',
          content: [
            'We use latest encryption technologies to protect your data',
            'Limited access to data only for authorized employees',
            'Regular backups and advanced security systems',
            'Periodic review and update of security policies'
          ]
        },
        {
          title: 'Information Sharing',
          content: [
            'We do not sell or rent your personal information to third parties',
            'We may share information with trusted partners to deliver services',
            'We commit to obtaining your prior consent before any sharing',
            'All partners are bound by the same privacy standards'
          ]
        },
        {
          title: 'Your Rights',
          content: [
            'Right to access your data stored with us',
            'Request correction or update of inaccurate information',
            'Delete your personal data (right to be forgotten)',
            'Withdraw consent for data processing at any time',
            'Receive a copy of your data in readable format'
          ]
        },
        {
          title: 'Contact Us',
          content: [
            'For any questions about this privacy policy or our data practices, please contact us via WhatsApp.',
            'We commit to responding to all inquiries within 48 hours of receipt.',
            'You can modify privacy preferences or request data deletion at any time.'
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
        <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-blue-600 via-primary-600 to-purple-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
                <Shield className="w-10 h-10" />
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content[language].title}
              </h1>
              
              <p className={`text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                {content[language].intro}
              </p>
              
              <div className={`inline-flex items-center gap-2 text-blue-200 ${language === 'ar' ? 'font-arabic' : ''}`}>
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
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-primary-500'
                  } font-arabic`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-primary-500'
                  }`}
                >
                  English
                </button>
              </div>
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
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
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
            <div className="mt-16 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'هل لديك أسئلة؟' : 'Have Questions?'}
              </h3>
              
              <p className={`text-gray-600 mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? 'تواصل معنا عبر واتساب لأي استفسارات حول سياسة الخصوصية'
                  : 'Contact us via WhatsApp for any privacy policy inquiries'
                }
              </p>
              
              <a
                href="https://wa.me/46724003075?text=مرحباً! لدي استفسار حول سياسة الخصوصية"
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
