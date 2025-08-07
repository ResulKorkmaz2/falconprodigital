'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { FileText, Scale, HandShake, AlertTriangle, Calendar, Mail } from 'lucide-react'

export default function TermsOfServicePage() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar')

  const content = {
    ar: {
      title: 'شروط وأحكام الخدمة',
      lastUpdated: 'آخر تحديث: يناير 2024',
      intro: 'تحكم هذه الشروط والأحكام استخدامكم لخدمات فالكون برو ديجيتال. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.',
      sections: [
        {
          title: 'قبول الشروط',
          content: [
            'باستخدام خدماتنا، فإنكم توافقون على الالتزام بهذه الشروط والأحكام',
            'إذا كنتم لا توافقون على هذه الشروط، يرجى عدم استخدام خدماتنا',
            'نحتفظ بالحق في تعديل هذه الشروط في أي وقت',
            'سيتم إشعاركم بأي تغييرات جوهرية في الشروط'
          ]
        },
        {
          title: 'الخدمات المقدمة',
          content: [
            'إدارة حملات إعلانات جوجل الاحترافية',
            'تصميم وتطوير المواقع الإلكترونية',
            'خدمات تحسين محركات البحث (SEO)',
            'استشارات التسويق الرقمي والتحليلات',
            'إنشاء وإدارة روبوتات المحادثة الذكية'
          ]
        },
        {
          title: 'مسؤوليات العميل',
          content: [
            'تقديم معلومات دقيقة وكاملة عن مشروعكم',
            'التعاون معنا في تنفيذ المشاريع والحملات',
            'احترام مواعيد التسليم والمراجعات المحددة',
            'سداد المستحقات في المواعيد المحددة',
            'توفير الصلاحيات والوصول اللازم للحسابات'
          ]
        },
        {
          title: 'مسؤولياتنا',
          content: [
            'تقديم خدمات عالية الجودة وفقاً للمعايير المتفق عليها',
            'الالتزام بالمواعيد النهائية المحددة في العقد',
            'حماية بياناتكم والحفاظ على سريتها',
            'تقديم الدعم الفني والاستشارات اللازمة',
            'ضمان الشفافية في جميع التعاملات والتقارير'
          ]
        },
        {
          title: 'الدفع والفواتير',
          content: [
            'يتم الدفع وفقاً للشروط المحددة في كل عقد',
            'قد نطلب دفعة مقدمة لبعض المشاريع الكبيرة',
            'تستحق الفواتير للدفع خلال 30 يوماً من تاريخ الإصدار',
            'قد نتوقف عن تقديم الخدمات في حالة التأخير في الدفع',
            'جميع الأسعار لا تشمل الضرائب المطبقة'
          ]
        },
        {
          title: 'الملكية الفكرية',
          content: [
            'نحتفظ بحقوق الملكية الفكرية لأساليبنا وأدواتنا المطورة',
            'العميل يحتفظ بملكية المحتوى والبيانات المقدمة',
            'نحتفظ بحق استخدام المشاريع في محفظة أعمالنا',
            'لا يجوز نسخ أو توزيع استراتيجياتنا الخاصة دون إذن',
            'جميع العلامات التجارية المذكورة هي ملك لأصحابها'
          ]
        },
        {
          title: 'إخلاء المسؤولية',
          content: [
            'لا نضمن نتائج محددة للحملات الإعلانية',
            'النتائج تعتمد على عوامل السوق والمنافسة',
            'لا نتحمل مسؤولية الخسائر الناتجة عن قرارات العميل',
            'نبذل قصارى جهدنا لتحقيق أفضل النتائج الممكنة',
            'قد تتأثر الخدمات بعوامل خارجة عن سيطرتنا'
          ]
        },
        {
          title: 'إنهاء الخدمة',
          content: [
            'يمكن لأي طرف إنهاء العقد بإشعار مسبق 30 يوماً',
            'في حالة انتهاك الشروط، قد ننهي الخدمة فوراً',
            'العميل مسؤول عن سداد المستحقات حتى تاريخ الإنهاء',
            'سنقوم بتسليم جميع البيانات والحسابات عند الإنهاء',
            'تبقى بعض البنود سارية المفعول بعد إنهاء العقد'
          ]
        },
        {
          title: 'تسوية النزاعات',
          content: [
            'نسعى لحل أي خلافات ودياً قبل اللجوء للطرق القانونية',
            'يحكم هذا العقد قانون المملكة العربية السعودية',
            'أي نزاع يحل أمام المحاكم المختصة في الرياض',
            'نحن ملتزمون بالتفاوض بحسن نية لحل المشاكل',
            'يمكن اللجوء للوساطة قبل التقاضي'
          ]
        }
      ]
    },
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: January 2024',
      intro: 'These Terms and Conditions govern your use of Falcon Pro Digital services. Please read these terms carefully before using our services.',
      sections: [
        {
          title: 'Acceptance of Terms',
          content: [
            'By using our services, you agree to comply with these terms and conditions',
            'If you do not agree to these terms, please do not use our services',
            'We reserve the right to modify these terms at any time',
            'You will be notified of any material changes to the terms'
          ]
        },
        {
          title: 'Services Provided',
          content: [
            'Professional Google Ads campaign management',
            'Website design and development',
            'Search Engine Optimization (SEO) services',
            'Digital marketing consulting and analytics',
            'AI chatbot creation and management'
          ]
        },
        {
          title: 'Client Responsibilities',
          content: [
            'Provide accurate and complete information about your project',
            'Cooperate with us in project and campaign execution',
            'Respect agreed delivery dates and review timelines',
            'Pay dues on agreed dates',
            'Provide necessary permissions and account access'
          ]
        },
        {
          title: 'Our Responsibilities',
          content: [
            'Deliver high-quality services according to agreed standards',
            'Meet deadlines specified in the contract',
            'Protect your data and maintain confidentiality',
            'Provide technical support and necessary consultations',
            'Ensure transparency in all dealings and reports'
          ]
        },
        {
          title: 'Payment and Billing',
          content: [
            'Payment is made according to terms specified in each contract',
            'We may require advance payment for some large projects',
            'Invoices are due for payment within 30 days of issue date',
            'We may suspend services in case of payment delays',
            'All prices exclude applicable taxes'
          ]
        },
        {
          title: 'Intellectual Property',
          content: [
            'We retain intellectual property rights to our developed methods and tools',
            'Client retains ownership of provided content and data',
            'We reserve the right to use projects in our portfolio',
            'Our proprietary strategies may not be copied or distributed without permission',
            'All mentioned trademarks belong to their respective owners'
          ]
        },
        {
          title: 'Disclaimer',
          content: [
            'We do not guarantee specific results for advertising campaigns',
            'Results depend on market factors and competition',
            'We are not responsible for losses resulting from client decisions',
            'We strive to achieve the best possible results',
            'Services may be affected by factors beyond our control'
          ]
        },
        {
          title: 'Service Termination',
          content: [
            'Either party may terminate the contract with 30 days advance notice',
            'In case of terms violation, we may terminate services immediately',
            'Client is responsible for paying dues until termination date',
            'We will deliver all data and accounts upon termination',
            'Some clauses remain effective after contract termination'
          ]
        },
        {
          title: 'Dispute Resolution',
          content: [
            'We seek to resolve any disputes amicably before legal recourse',
            'This contract is governed by Saudi Arabian law',
            'Any dispute shall be resolved before competent courts in Riyadh',
            'We are committed to negotiating in good faith to resolve issues',
            'Mediation may be sought before litigation'
          ]
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="bg-gradient-to-br from-slate-50 to-white min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8">
                <Scale className="w-10 h-10" />
              </div>
              
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {currentContent.title}
              </h1>
              
              <p className={`text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                {currentContent.intro}
              </p>
              
              <div className={`inline-flex items-center gap-2 text-green-200 ${language === 'ar' ? 'font-arabic' : ''}`}>
                <Calendar className="w-5 h-5" />
                {currentContent.lastUpdated}
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
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-green-500'
                  } font-arabic`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    language === 'en'
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-green-500'
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
              {currentContent.sections.map((section, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className={`text-gray-700 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className={`text-xl font-bold text-amber-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? 'إشعار مهم' : 'Important Notice'}
                  </h3>
                  <p className={`text-amber-800 leading-relaxed ${language === 'ar' ? 'font-arabic text-right' : 'text-left'}`}>
                    {language === 'ar' 
                      ? 'هذه الشروط والأحكام قابلة للتطبيق القانوني. من المهم قراءتها وفهمها بالكامل قبل الموافقة على أي خدمة. إذا كان لديكم أي استفسارات، يرجى التواصل معنا قبل بدء المشروع.'
                      : 'These Terms and Conditions are legally enforceable. It is important to read and understand them completely before agreeing to any service. If you have any questions, please contact us before starting the project.'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? 'أسئلة حول الشروط؟' : 'Questions About Terms?'}
              </h3>
              
              <p className={`text-gray-600 mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? 'تواصل معنا عبر واتساب لتوضيح أي نقطة في شروط وأحكام الخدمة'
                  : 'Contact us via WhatsApp to clarify any point in the terms of service'
                }
              </p>
              
              <a
                href="https://wa.me/46724003075?text=مرحباً! لدي استفسار حول شروط وأحكام الخدمة"
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
