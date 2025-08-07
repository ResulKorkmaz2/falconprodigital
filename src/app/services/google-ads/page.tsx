'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { 
  MousePointer, Target, TrendingUp, BarChart3, CheckCircle, 
  ArrowRight, Zap, DollarSign, Users, Clock, Award,
  Shield, Lightbulb, Rocket, Star
} from 'lucide-react'

export default function GoogleAdsPage() {
  const [language, setLanguage] = useState('ar')

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="bg-gradient-to-br from-slate-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-right">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Award size={20} className="ml-2" />
                <span className="font-arabic font-bold">خدمات إعلانات جوجل الاحترافية</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-arabic">
                <span className="block">احصل على</span>
                <span className="block text-accent-300">300% زيادة</span>
                <span className="block">في عائد استثمار إعلاناتك</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-arabic">
                نحن وكالة متخصصة في إدارة حملات إعلانات جوجل للشركات في السعودية والكويت وقطر. 
                نضمن لك تحقيق أقصى عائد من كل ريال تنفقه على الإعلانات.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:flex-row-reverse">
                <Link
                  href="https://wa.me/46724003075?text=أريد استشارة مجانية لتحسين حملات إعلانات جوجل لشركتي"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
                >
                  <Zap size={22} className="mr-3 group-hover:animate-pulse" />
                  <span>استشارة مجانية - اتصل الآن</span>
                </Link>
                
                <Link
                  href="#audit"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-300 font-arabic"
                >
                  <BarChart3 size={22} className="mr-3" />
                  <span>تحليل مجاني للحملات الحالية</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-arabic text-center mb-6">نتائج حقيقية لعملائنا</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-accent-300 mb-2">347%</div>
                      <div className="text-sm font-arabic">زيادة المبيعات</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-green-300 mb-2">-67%</div>
                      <div className="text-sm font-arabic">انخفاض التكلفة</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-yellow-300 mb-2">4.8x</div>
                      <div className="text-sm font-arabic">عائد الإنفاق</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-blue-300 mb-2">24س</div>
                      <div className="text-sm font-arabic">وقت الاستجابة</div>
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
              <div className="text-3xl font-black text-primary-500">50+</div>
              <div className="text-gray-600 font-arabic">عميل راضٍ</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-primary-500">5+</div>
              <div className="text-gray-600 font-arabic">سنوات خبرة</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-primary-500">95%</div>
              <div className="text-gray-600 font-arabic">معدل الاحتفاظ</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-primary-500">24/7</div>
              <div className="text-gray-600 font-arabic">دعم فني</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Google Ads Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              خدماتنا المتخصصة في إعلانات جوجل
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              نقدم حلول شاملة لإدارة حملات إعلانات جوجل بطريقة احترافية تضمن أقصى عائد على استثمارك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "إعداد وتحسين الحملات",
                description: "إعداد احترافي للحملات الإعلانية مع استراتيجيات مخصصة لكل نوع عمل وسوق",
                features: ["بحث متقدم للكلمات المفتاحية", "تحسين العروض والميزانيات", "استهداف دقيق للجمهور"]
              },
              {
                icon: Lightbulb,
                title: "إنشاء إعلانات إبداعية",
                description: "كتابة نصوص إعلانية جذابة باللغة العربية تحقق أعلى معدلات نقر وتحويل",
                features: ["نصوص باللغة العربية احترافية", "تصميم إعلانات مرئية", "اختبار A/B للأداء الأمثل"]
              },
              {
                icon: BarChart3,
                title: "تتبع وتحليل الأداء",
                description: "مراقبة مستمرة للحملات مع تقارير مفصلة وتوصيات للتحسين المستمر",
                features: ["تقارير أسبوعية مفصلة", "تحليل سلوك المستخدمين", "قياس عائد الاستثمار بدقة"]
              },
              {
                icon: Shield,
                title: "حماية الميزانية",
                description: "تحسين الإنفاق الإعلاني لتجنب الهدر وضمان استخدام أمثل للميزانية المتاحة",
                features: ["مراقبة الإنفاق اليومي", "تحسين تكلفة النقرة", "منع النقرات الوهمية"]
              },
              {
                icon: Rocket,
                title: "تحسين معدل التحويل",
                description: "تحسين مسار المستخدم من النقر على الإعلان حتى إتمام عملية الشراء أو التحويل",
                features: ["تحسين صفحات الهبوط", "تتبع التحويلات المتقدم", "تحليل مسار العميل"]
              },
              {
                icon: Users,
                title: "إدارة حسابات متعددة",
                description: "خبرة في إدارة حملات متعددة لشركات مختلفة الأحجام في السوق الخليجي",
                features: ["إدارة مركزية للحملات", "تقارير موحدة", "فريق دعم متخصص"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-400 rounded-2xl mb-6 mx-auto">
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              لماذا تختار فالكون برو ديجيتال؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              نحن الخيار الأول للشركات الناجحة في منطقة الخليج لإدارة إعلانات جوجل
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "خبرة عميقة في السوق الخليجي",
                  description: "نفهم طبيعة المستهلك الخليجي وسلوكه الشرائي، مما يمكننا من إنشاء حملات أكثر فعالية",
                  icon: Star
                },
                {
                  title: "فريق معتمد من جوجل",
                  description: "فريقنا حاصل على شهادات جوجل الاحترافية ولديه خبرة مباشرة مع أحدث أدوات الإعلان",
                  icon: Award
                },
                {
                  title: "نتائج مضمونة أو استرداد الأموال",
                  description: "نضمن تحسين أداء حملاتك خلال 90 يوم أو نسترد لك قيمة الخدمة كاملة",
                  icon: Shield
                },
                {
                  title: "دعم باللغة العربية 24/7",
                  description: "فريق دعم متاح على مدار الساعة للإجابة على استفساراتك وحل أي مشاكل فورياً",
                  icon: Clock
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 space-x-reverse">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-400 rounded-xl flex-shrink-0">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-arabic">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-accent-400 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 font-arabic text-center">
                  احصل على تدقيق مجاني لحملاتك
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-green-300" />
                    <span className="font-arabic">تحليل شامل للحملات الحالية</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-green-300" />
                    <span className="font-arabic">تحديد نقاط الضعف والقوة</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-green-300" />
                    <span className="font-arabic">خطة عمل مفصلة للتحسين</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <CheckCircle size={20} className="text-green-300" />
                    <span className="font-arabic">توقعات واقعية للنتائج</span>
                  </div>
                </div>
                <Link
                  href="https://wa.me/46724003075?text=أريد تدقيق مجاني لحملات إعلانات جوجل الخاصة بشركتي"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center font-arabic"
                >
                  <span>احصل على التدقيق المجاني</span>
                  <ArrowRight size={20} className="mr-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              كيف نعمل معك؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              عملية واضحة ومنظمة تضمن نجاح حملاتك الإعلانية من البداية حتى النهاية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "التحليل والتقييم",
                description: "نحلل وضعك الحالي ونحدد الأهداف والمتطلبات",
                icon: BarChart3
              },
              {
                step: "02", 
                title: "التخطيط والاستراتيجية",
                description: "نضع خطة مفصلة واستراتيجية مخصصة لعملك",
                icon: Target
              },
              {
                step: "03",
                title: "التنفيذ والإطلاق",
                description: "ننفذ الحملات ونطلقها بطريقة احترافية ومدروسة",
                icon: Rocket
              },
              {
                step: "04",
                title: "المراقبة والتحسين",
                description: "نراقب الأداء ونحسن النتائج بشكل مستمر",
                icon: TrendingUp
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-arabic">
            هل أنت مستعد لمضاعفة مبيعاتك؟
          </h2>
          <p className="text-xl mb-8 font-arabic max-w-2xl mx-auto">
            انضم إلى أكثر من 50 شركة ناجحة اختارت فالكون برو ديجيتال لإدارة حملات إعلانات جوجل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:flex-row-reverse">
            <Link
              href="https://wa.me/46724003075?text=أريد بدء حملة إعلانات جوجل احترافية لشركتي الآن"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
            >
              <Zap size={22} className="mr-3 group-hover:animate-pulse" />
              <span>ابدأ الآن - اتصل بنا</span>
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
