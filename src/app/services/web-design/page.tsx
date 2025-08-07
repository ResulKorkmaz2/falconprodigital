'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { 
  Globe, Smartphone, Zap, TrendingUp, CheckCircle, 
  ArrowRight, Palette, Code, Search, DollarSign, Users, Clock, Award,
  Shield, Lightbulb, Rocket, Star, Monitor, Heart
} from 'lucide-react'

export default function WebDesignPage() {
  const [language, setLanguage] = useState('ar')

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="bg-gradient-to-br from-slate-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-green-500 via-accent-300 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-right">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Palette size={20} className="ml-2" />
                <span className="font-arabic font-bold">تصميم مواقع عالية التحويل</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-arabic">
                <span className="block">موقعك الإلكتروني</span>
                <span className="block text-accent-200">يحول الزوار</span>
                <span className="block">إلى عملاء مخلصين</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-green-100 leading-relaxed font-arabic">
                نصمم مواقع إلكترونية حديثة ومتجاوبة مخصصة للسوق الخليجي، محسنة للسرعة وتحسين محركات البحث 
                وتجربة المستخدم المثلى. كل موقع نصممه يهدف إلى زيادة مبيعاتك وتحقيق أهدافك التجارية.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:flex-row-reverse">
                <Link
                  href="https://wa.me/46724003075?text=أريد تصميم موقع إلكتروني احترافي لشركتي"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
                >
                  <Heart size={22} className="mr-3 group-hover:animate-pulse" />
                  <span>ابدأ مشروعك الآن</span>
                </Link>
                
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-300 font-arabic"
                >
                  <Monitor size={22} className="mr-3" />
                  <span>شاهد أعمالنا السابقة</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-arabic text-center mb-6">مزايا مواقعنا</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-yellow-300 mb-2">&lt;3s</div>
                      <div className="text-sm font-arabic">سرعة التحميل</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-blue-300 mb-2">100%</div>
                      <div className="text-sm font-arabic">متجاوب</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-green-300 mb-2">SEO</div>
                      <div className="text-sm font-arabic">محسن للبحث</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-red-300 mb-2">24/7</div>
                      <div className="text-sm font-arabic">دعم فني</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-black text-green-500">30+</div>
              <div className="text-gray-600 font-arabic">موقع مكتمل</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-green-500">98%</div>
              <div className="text-gray-600 font-arabic">رضا العملاء</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-green-500">14</div>
              <div className="text-gray-600 font-arabic">يوم متوسط التسليم</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-green-500">100%</div>
              <div className="text-gray-600 font-arabic">ضمان الجودة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Web Design Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              خدمات تصميم المواقع الشاملة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              نقدم حلول تصميم مواقع متكاملة تناسب جميع أنواع الأعمال في منطقة الخليج
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "تصميم متجاوب وسريع",
                description: "مواقع تعمل بسلاسة على جميع الأجهزة مع سرعة تحميل فائقة أقل من 3 ثوان",
                features: ["تصميم Mobile-First", "تحسين الصور والمحتوى", "CDN وتخزين مؤقت متقدم"]
              },
              {
                icon: Search,
                title: "تحسين محركات البحث",
                description: "مواقع محسنة بالكامل لمحركات البحث لضمان ظهورك في النتائج الأولى",
                features: ["بنية SEO احترافية", "محتوى محسن للكلمات المفتاحية", "Schema markup متقدم"]
              },
              {
                icon: Palette,
                title: "تصميم مخصص وإبداعي",
                description: "تصاميم فريدة تعكس هوية علامتك التجارية وتميزك عن المنافسين",
                features: ["تصميم UI/UX احترافي", "هوية بصرية متكاملة", "تجربة مستخدم مثلى"]
              },
              {
                icon: Shield,
                title: "أمان وحماية متقدمة",
                description: "مواقع آمنة ومحمية بأحدث تقنيات الأمان وشهادات SSL",
                features: ["شهادة SSL مجانية", "حماية من الهجمات", "نسخ احتياطية تلقائية"]
              },
              {
                icon: Code,
                title: "برمجة نظيفة ومتطورة",
                description: "كود نظيف ومنظم باستخدام أحدث التقنيات والمعايير العالمية",
                features: ["Next.js & React", "TypeScript", "أفضل ممارسات البرمجة"]
              },
              {
                icon: TrendingUp,
                title: "تحسين معدل التحويل",
                description: "تصميم مدروس لزيادة معدلات التحويل وتحقيق أهدافك التجارية",
                features: ["أزرار CTA فعالة", "مسار مستخدم محسن", "اختبار A/B للعناصر"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-accent-300 rounded-2xl mb-6 mx-auto">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-arabic">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-arabic text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 font-arabic">
                      <CheckCircle size={16} className="text-green-500 ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              أنواع المواقع التي نصممها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              لدينا خبرة في تصميم جميع أنواع المواقع التي يحتاجها عملك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "مواقع الشركات",
                description: "مواقع احترافية تعرض خدمات ومنتجات شركتك بطريقة جذابة",
                icon: "🏢"
              },
              {
                title: "المتاجر الإلكترونية",
                description: "متاجر إلكترونية متكاملة لبيع منتجاتك أونلاين",
                icon: "🛍️"
              },
              {
                title: "المواقع الشخصية",
                description: "مواقع شخصية للأطباء والمحامين والاستشاريين",
                icon: "👨‍💼"
              },
              {
                title: "مواقع الخدمات",
                description: "مواقع مخصصة لشركات الخدمات والصيانة",
                icon: "🔧"
              }
            ].map((type, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic">
                  {type.title}
                </h3>
                <p className="text-gray-600 font-arabic">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              مراحل تصميم موقعك
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              عملية واضحة ومنظمة تضمن حصولك على موقع يفوق توقعاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "التخطيط والتحليل",
                description: "نحلل متطلباتك ونضع خطة شاملة للمشروع",
                icon: Lightbulb
              },
              {
                step: "02", 
                title: "التصميم والمراجعة",
                description: "نصمم الموقع ونراجعه معك حتى نصل للشكل المثالي",
                icon: Palette
              },
              {
                step: "03",
                title: "البرمجة والتطوير",
                description: "نبرمج الموقع باستخدام أحدث التقنيات والمعايير",
                icon: Code
              },
              {
                step: "04",
                title: "الاختبار والإطلاق",
                description: "نختبر الموقع بدقة ونطلقه مع الدعم الفني",
                icon: Rocket
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-accent-300 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <process.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic">
                  {process.title}
                </h3>
                <p className="text-gray-600 font-arabic">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              باقات تصميم المواقع
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              باقات مرنة تناسب جميع الميزانيات والمتطلبات
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "الباقة الأساسية",
                price: "2,999 ر.س",
                description: "مثالية للشركات الصغيرة والمواقع البسيطة",
                features: [
                  "تصميم حتى 5 صفحات",
                  "تصميم متجاوب بالكامل",
                  "تحسين أساسي للسرعة",
                  "شهادة SSL مجانية",
                  "3 شهور دعم فني"
                ],
                popular: false
              },
              {
                name: "الباقة المتقدمة",
                price: "4,999 ر.س",
                description: "الأنسب للشركات المتوسطة والمتاجر",
                features: [
                  "تصميم حتى 10 صفحات",
                  "تحسين متقدم لمحركات البحث",
                  "تحليلات Google Analytics",
                  "نماذج اتصال متقدمة",
                  "6 شهور دعم فني",
                  "تدريب على إدارة المحتوى"
                ],
                popular: true
              },
              {
                name: "الباقة الاحترافية",
                price: "7,999 ر.س",
                description: "للشركات الكبيرة والمتاجر الإلكترونية",
                features: [
                  "عدد صفحات غير محدود",
                  "متجر إلكتروني متكامل",
                  "تحسين متقدم للتحويل",
                  "تكامل مع وسائل الدفع",
                  "12 شهر دعم فني",
                  "تقارير أداء شهرية"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold font-arabic">
                      الأكثر طلباً
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic">{plan.name}</h3>
                  <div className="text-4xl font-black text-green-500 mb-2">{plan.price}</div>
                  <p className="text-gray-600 font-arabic">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 font-arabic">
                      <CheckCircle size={20} className="text-green-500 ml-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`https://wa.me/46724003075?text=أريد معرفة تفاصيل أكثر عن ${plan.name} لتصميم موقع شركتي`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 font-arabic flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>اختر هذه الباقة</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-accent-400 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-arabic">
            هل أنت مستعد لإطلاق موقعك الجديد؟
          </h2>
          <p className="text-xl mb-8 font-arabic max-w-2xl mx-auto">
            انضم إلى أكثر من 30 شركة ناجحة اختارت فالكون برو ديجيتال لتصميم مواقعها الإلكترونية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:flex-row-reverse">
            <Link
              href="https://wa.me/46724003075?text=أريد تصميم موقع إلكتروني احترافي لشركتي. هل يمكنكم مساعدتي؟"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
            >
              <Heart size={22} className="mr-3 group-hover:animate-pulse" />
              <span>ابدأ مشروعك الآن</span>
            </Link>
            
            <Link
              href="/"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-300 font-arabic"
            >
              <span>العودة للرئيسية</span>
              <ArrowRight size={20} className="mr-2 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
