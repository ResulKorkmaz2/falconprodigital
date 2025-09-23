'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import { COMPANY_INFO } from '@/lib/constants'

interface PricingCardProps {
  title: string
  price: string
  period?: string
  badge?: string
  features: string[]
  warnings?: string[]
  buttonText: string
  isPopular?: boolean
  priceColor?: string
}

const PricingCard = ({ 
  title, 
  price, 
  period, 
  badge, 
  features, 
  warnings = [], 
  buttonText, 
  isPopular = false,
  priceColor = "text-primary-600"
}: PricingCardProps) => {
  const handleWhatsAppClick = () => {
    const message = `مرحباً، أريد معلومات أكثر عن باقة "${title}" بسعر ${price}${period || ''}`
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className={`relative p-6 lg:p-8 rounded-3xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      isPopular 
        ? 'border-primary-600 bg-gradient-to-br from-primary-50 to-white shadow-xl' 
        : 'border-gray-200 bg-white hover:border-primary-300 shadow-lg'
    }`}>
      
      {/* Popular Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            {badge}
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`text-4xl font-black ${priceColor}`}>{price}</span>
          {period && <span className="text-gray-500 text-lg">{period}</span>}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      {/* Warnings */}
      {warnings.length > 0 && (
        <div className="space-y-3 mb-6">
          {warnings.map((warning, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-gray-600 text-sm leading-relaxed">{warning}</span>
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button
          onClick={handleWhatsAppClick}
          className={`w-full py-3 px-6 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg ${
            isPopular
              ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
              : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
          }`}
        >
          {buttonText}
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="w-full py-2 px-6 rounded-2xl font-medium text-sm border border-gray-300 text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
        >
          طلب عرض سعر
        </button>
      </div>
    </div>
  )
}

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-right bg-white hover:bg-gray-50 flex items-center justify-between transition-colors duration-200"
      >
        <span className="font-bold text-gray-900 flex items-center">
          <span className="text-2xl ml-3">{question.split(' ')[0]}</span>
          {question.substring(question.indexOf(' ') + 1)}
        </span>
        <svg 
          className={`w-6 h-6 text-primary-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4 bg-gray-50">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function PricingContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-green-600 via-emerald-600 to-blue-700 flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <Container className="relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              💰 أسعار شفافة
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed mb-8">
              أسعار بسيطة وشفافة بدون رسوم خفية أو مفاجآت. اختر الباقة المثالية لاحتياجات عملك وابدأ النمو اليوم.
            </p>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-green-100">
              <span className="text-2xl ml-2">✨</span>
              بدون رسوم خفية - بدون مفاجآت
            </div>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
        <Container>

        {/* Web Design & Development */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              🌐 تصميم وتطوير المواقع
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مواقع إلكترونية احترافية تمثل عملك في العالم الرقمي. جميع الباقات تشمل تصميم متجاوب وتحسين محركات البحث.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="الباقة الأساسية"
              price="$169"
              period="/دفعة واحدة"
              features={[
                "موقع متجاوب من 3 صفحات",
                "تصميم حديث أساسي", 
                "نموذج اتصال",
                "إعداد SEO أساسي",
                "شهادة SSL مشمولة",
                "دعم واتساب وإيميل لمدة 15 يوم",
                "متجاوب مع الجوال"
              ]}
              warnings={[
                "تصميم قائم على القوالب",
                "تخصيص محدود",
                "استضافة أساسية (6 أشهر)"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-blue-600"
            />

            <PricingCard
              title="باقة البداية"
              price="$269"
              period="/دفعة واحدة"
              badge="الأكثر شعبية"
              isPopular={true}
              features={[
                "موقع متجاوب من 5 صفحات",
                "تصميم حديث متجاوب الجوال أولاً",
                "تكامل نموذج الاتصال",
                "تحسين محركات البحث",
                "شهادة SSL مشمولة",
                "دعم واتساب وإيميل لمدة 30 يوم",
                "إعداد Google Analytics",
                "تكامل وسائل التواصل الاجتماعي"
              ]}
              warnings={[
                "تصميم شبه مخصص",
                "ميزات قياسية",
                "استضافة أساسية (سنة واحدة)"
              ]}
              buttonText="ابدأ الآن"
            />

            <PricingCard
              title="الباقة الاحترافية"
              price="$799"
              period="/دفعة واحدة"
              features={[
                "موقع مخصص من 10 صفحات",
                "تصميم متقدم مع حركات متقدمة",
                "نماذج اتصال متقدمة",
                "تحسين SEO كامل",
                "نظام إدارة المحتوى",
                "دعم واتساب وإيميل لمدة 90 يوم",
                "تحسين السرعة",
                "جاهز للغات متعددة",
                "وظيفة المدونة",
                "إعداد Google My Business"
              ]}
              warnings={[
                "استضافة متقدمة (سنة واحدة)",
                "تخصيص كامل مشمول"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-purple-600"
            />
          </div>
        </section>

        {/* Google Ads & Digital Marketing */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              📈 إعلانات جوجل والتسويق الرقمي
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              حلول إعلانية رقمية شاملة. ميزانية الإعلانات منفصلة عن رسوم الإدارة. اختر الخدمة التي تناسب احتياجات عملك.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="إعلانات شبكة البحث"
              price="$99"
              period="/الإعداد"
              features={[
                "إعداد حملة شبكة البحث Google",
                "بحث الكلمات المفتاحية",
                "إنشاء نصوص إعلانية (5 متغيرات)",
                "إعدادات الكلمات المفتاحية السلبية",
                "تحسين العروض",
                "إعداد تتبع التحويلات",
                "إعدادات الاستهداف الأساسية",
                "إطلاق الحملة",
                "دعم واتساب وإيميل"
              ]}
              warnings={[
                "خدمة إعداد فقط",
                "الإدارة الشهرية منفصلة",
                "وقت الاستجابة 48 ساعة"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-green-600"
            />

            <PricingCard
              title="إعلانات Performance Max"
              price="$149"
              period="/الإعداد"
              features={[
                "إعداد حملة Google Performance Max",
                "إعدادات تحسين مدعومة بالذكاء الاصطناعي",
                "إعداد إعلانات متعددة القنوات",
                "إنشاء مجموعات الأصول",
                "تحسين إشارات الجمهور المستهدف",
                "اختبارات الأصول الإبداعية",
                "تتبع التحويلات المتقدم",
                "إطلاق الحملة",
                "دعم واتساب وإيميل"
              ]}
              warnings={[
                "خدمة إعداد فقط",
                "الإدارة الشهرية منفصلة",
                "وقت الاستجابة 24 ساعة"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-blue-600"
            />

            <PricingCard
              title="إعلانات التجارة الإلكترونية"
              price="$697"
              period="/شهرياً"
              features={[
                "حملات Google Shopping",
                "تحسين تغذية المنتجات",
                "إدارة إنفاق إعلاني حتى $7,000",
                "إعداد إعلانات التسوق",
                "إعلانات قائمة المنتجات",
                "إعادة استهداف ديناميكية",
                "إدارة Merchant Center",
                "تحليل أداء المنتجات",
                "عروض أسعار قائمة على المخزون",
                "دعم واتساب وإيميل"
              ]}
              warnings={[
                "مخصص للتجارة الإلكترونية",
                "يتطلب كتالوج منتجات"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-orange-600"
              isPopular={true}
              badge="التجارة الإلكترونية"
            />

            <PricingCard
              title="إعلانات YouTube - أساسي"
              price="$149"
              period="/الإعداد"
              features={[
                "إعداد حملة إعلانات YouTube",
                "اختيار تنسيق الإعلانات المرئية",
                "إعدادات الجمهور المستهدف الأساسية",
                "إعدادات ميزانية الحملة",
                "تحسين إبداعي أساسي",
                "إعداد تتبع التحويلات",
                "إطلاق الحملة",
                "دعم واتساب وإيميل"
              ]}
              warnings={[
                "خدمة إعداد أساسية",
                "محتوى الفيديو غير مشمول",
                "الإدارة الشهرية منفصلة"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-red-600"
            />

            <PricingCard
              title="إعلانات YouTube - احترافي"
              price="$599"
              period="/الإعداد + شهر إدارة"
              features={[
                "إعداد حملة YouTube احترافية",
                "إنتاج إعلان مرئي (30 ثانية)",
                "تقسيم الجمهور المستهدف المتقدم",
                "إعداد اختبارات A/B",
                "إعداد حملة إعادة التسويق",
                "إعداد تحليلات مفصلة",
                "إدارة الحملة لشهر واحد",
                "تحسين الأداء",
                "دعم واتساب وإيميل"
              ]}
              warnings={[
                "محتوى فيديو واحد مشمول",
                "الإدارة بعد الشهر الأول منفصلة"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-red-600"
            />

            {/* Custom Consulting Card */}
            <div className="relative p-6 lg:p-8 rounded-3xl border-2 border-gradient-to-r from-purple-500 to-blue-500 bg-gradient-to-br from-purple-50 to-blue-50 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">استشارة مخصصة</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-purple-600">اتصل للاستفسار</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "حل مخصص لاحتياجاتك",
                  "تحليل مفصل للمشروع",
                  "استراتيجية شخصية",
                  "تحسين الميزانية",
                  "تحليل المنافسين",
                  "تصميم حملة مخصصة",
                  "مدير حساب مخصص",
                  "شراكة طويلة المدى",
                  "استشارة أولى مجانية"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "السعر يحدد حسب المشروع",
                  "قد تحتاج ميزانية أدنى"
                ].map((warning, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L3.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <span className="text-gray-600 text-sm leading-relaxed">{warning}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('مرحباً، أريد استشارة مخصصة لمشروعي')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg bg-green-600 text-white hover:bg-green-700 shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  واتساب للتواصل
                </a>
                <a
                  href={`mailto:info@falconprodigital.com?subject=طلب استشارة مخصصة`}
                  className="w-full py-2 px-6 rounded-2xl font-medium text-sm border border-gray-300 text-gray-600 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <span>📧</span>
                  إرسال إيميل
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Automation */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              🤖 أتمتة الذكاء الاصطناعي
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              اجعل عملك أكثر كفاءة مع الأتمتة الذكية. وفر الوقت وزد الكفاءة مع حلول مدعومة بالذكاء الاصطناعي.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="الأتمتة الأساسية"
              price="$799"
              period="/إعداد لمرة واحدة"
              features={[
                "أتمتة سير العمل البسيط",
                "إعداد أتمتة الإيميل",
                "تكامل chatbot أساسي",
                "أتمتة التقاط العملاء المحتملين",
                "جدولة وسائل التواصل الاجتماعي",
                "دعم واتساب وإيميل لمدة 30 يوم",
                "وثائق التدريب"
              ]}
              warnings={[
                "حتى 3 سير عمل أتمتة",
                "تكاملات أساسية فقط",
                "قوالب قياسية"
              ]}
              buttonText="ابدأ الآن"
              priceColor="text-cyan-600"
            />

            <PricingCard
              title="الأعمال الذكية"
              price="$1,599"
              period="/إعداد لمرة واحدة"
              badge="الأكثر شعبية"
              isPopular={true}
              features={[
                "chatbot ذكي متقدم",
                "أتمتة نظام إدارة العلاقات",
                "نظام تسجيل العملاء المحتملين",
                "متابعات تلقائية",
                "تقسيم العملاء",
                "تكامل مع أكثر من 10 أدوات",
                "تصميم سير العمل المخصص",
                "تحليلات الأداء",
                "دعم واتساب وإيميل لمدة 90 يوم"
              ]}
              warnings={[
                "حتى 10 سير عمل أتمتة",
                "تحسين شهري مشمول"
              ]}
              buttonText="ابدأ الآن"
            />

            <PricingCard
              title="الذكاء الاصطناعي للمؤسسات"
              price="$3,299"
              period="/إعداد لمرة واحدة"
              features={[
                "حلول ذكاء اصطناعي مخصصة",
                "تعلم آلة متقدم",
                "تحليلات تنبؤية",
                "أتمتة متعددة القنوات",
                "تكاملات API",
                "لوحة تحكم مخصصة",
                "تقارير متقدمة",
                "متخصص ذكاء اصطناعي مخصص",
                "دعم واتساب وإيميل لمدة 6 أشهر",
                "تحسين مستمر"
              ]}
              warnings={[]}
              buttonText="ابدأ الآن"
              priceColor="text-purple-600"
            />
          </div>
        </section>

        {/* Company Email Setup */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              📧 إعداد البريد الإلكتروني للشركة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              خدمات إعداد ودعم حسابات البريد الإلكتروني الاحترافية. جميع الباقات تشمل عناوين بريد إلكتروني تحتوي على نطاق شركتك.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="باقة البريد الأساسية"
              price="$17"
              period="/الإعداد + شهر واحد"
              features={[
                "حساب بريد إلكتروني بنطاق الشركة",
                "واجهة Gmail الاحترافية", 
                "حماية متقدمة من الرسائل المزعجة والأمان",
                "تكامل الجوال وسطح المكتب",
                "مساحة تخزين 30GB (لكل حساب)",
                "مؤتمرات فيديو Google Meet",
                "توقيعات بريد إلكتروني أساسية",
                "رسوم ترخيص شهر واحد مشمولة",
                "دعم واتساب وإيميل لمدة 15 يوم"
              ]}
              warnings={[
                "كل مستخدم إضافي +$17",
                "بعد الشهر الثاني $8.40/مستخدم/شهر",
                "ميزات أساسية"
              ]}
              buttonText="ابدأ - $17"
              priceColor="text-blue-600"
            />

            <PricingCard
              title="باقة البريد للأعمال"
              price="$32"
              period="/الإعداد + شهر واحد"
              badge="الأكثر شعبية"
              isPopular={true}
              features={[
                "حساب بريد إلكتروني بنطاق الشركة",
                "Gmail متقدم و Google Workspace",
                "ميزات Google Meet المتقدمة",
                "مساحة تخزين 2TB (لكل حساب)",
                "Google Drive, Docs, Sheets, Slides",
                "لوحة أمان وإدارة متقدمة",
                "نسخ احتياطي تلقائي",
                "توقيعات بريد إلكتروني احترافية",
                "رسوم ترخيص شهر واحد مشمولة",
                "دعم واتساب وإيميل لمدة 30 يوم"
              ]}
              warnings={[
                "كل مستخدم إضافي +$32",
                "بعد الشهر الثاني $16.80/مستخدم/شهر",
                "يمكن إضافة مستخدمين إضافيين"
              ]}
              buttonText="ابدأ - $32"
            />

            <PricingCard
              title="حلول البريد المؤسسية"
              price="$53"
              period="/الإعداد + شهر واحد"
              features={[
                "حساب بريد إلكتروني بنطاق الشركة",
                "Google Workspace Plus المؤسسي",
                "أمان وامتثال متقدم",
                "مساحة تخزين 5TB (لكل حساب)",
                "تقارير وتحليلات متقدمة",
                "مصادقة متعددة العوامل",
                "Vault for eDiscovery",
                "دعم مستوى المؤسسة",
                "تدريب الموظفين مشمول",
                "رسوم ترخيص شهر واحد مشمولة",
                "دعم واتساب وإيميل لمدة 60 يوم"
              ]}
              warnings={[
                "كل مستخدم إضافي +$53",
                "بعد الشهر الثاني $26.40/مستخدم/شهر",
                "يمكن إضافة مستخدمين إضافيين"
              ]}
              buttonText="ابدأ - $53"
              priceColor="text-purple-600"
            />
          </div>
        </section>

        {/* Custom Solutions CTA */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">تحتاج شيئاً مخصصاً؟</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              كل عمل فريد من نوعه. دعنا نناقش متطلباتك المحددة وننشئ حلاً مخصصاً يناسب احتياجاتك وميزانيتك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent('مرحباً، أحتاج حلاً مخصصاً لعملي')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span className="text-2xl ml-3">💬</span>
                دردش على واتساب
              </a>
              <a
                href="mailto:info@falconprodigital.com?subject=طلب حل مخصص"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                <span className="text-2xl ml-3">📧</span>
                إرسال إيميل
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              ❓ الأسئلة الشائعة
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وأسعارنا
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <FAQItem
              question="💳 ما طرق الدفع المقبولة؟"
              answer="نقبل جميع بطاقات الائتمان الرئيسية، PayPal، التحويلات البنكية، ومدفوعات العملات المشفرة لراحتك."
            />
            <FAQItem
              question="⏱️ كم يستغرق تسليم المشروع؟"
              answer="أوقات التسليم تختلف حسب تعقيد المشروع. المواقع: 1-4 أسابيع، إعداد الإعلانات: 3-5 أيام، التجارة الإلكترونية: 2-6 أسابيع."
            />
            <FAQItem
              question="🔄 هل تقدمون استرداد الأموال؟"
              answer="نعم، لدينا سياسة استرداد شاملة. يرجى مراجعة صفحة سياسة الاسترداد للحصول على الشروط والأحكام التفصيلية."
            />
            <FAQItem
              question="📞 ما الدعم الذي تقدمونه؟"
              answer="نقدم دعم واتساب وإيميل فوري. الخطط المتقدمة تشمل دعم أولوية مع أوقات استجابة أسرع."
            />
            <FAQItem
              question="🌍 في أي البلدان تعملون؟"
              answer="نعمل في دول الخليج العربي: السعودية، الإمارات، قطر، والكويت، مع خدمات مخصصة لكل سوق محلي."
            />
            <FAQItem
              question="⚡ هل يمكنكم بدء مشروعي فوراً؟"
              answer="نعم! بعد الموافقة على المشروع والدفع، نبدأ العمل خلال 24-48 ساعة. بعض الخدمات تبدأ في نفس اليوم."
            />
          </div>
        </section>

      </Container>
    </main>
    </>
  )
}
