'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { 
  Bot, MessageCircle, Zap, TrendingUp, CheckCircle, 
  ArrowRight, Brain, Cpu, Users, Clock, Award,
  Shield, Lightbulb, Rocket, Star, Headphones, Settings,
  BarChart3, Globe, Heart, ChevronRight, PlayCircle
} from 'lucide-react'

export default function AIChatbotPage() {
  const [language, setLanguage] = useState('ar')

  return (
    <main className="min-h-screen">
      <Nav />
      <div className="bg-gradient-to-br from-slate-50 to-white" dir="rtl">
      {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-right">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Bot size={20} className="ml-2" />
                <span className="font-arabic font-bold">روبوتات الذكاء الاصطناعي المتقدمة</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-arabic">
                <span className="block">روبوت ذكي يخدم</span>
                <span className="block text-pink-300">عملاءك 24/7</span>
                <span className="block">ويضاعف مبيعاتك</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed font-arabic">
                نطور لك روبوتات محادثة ذكية مدعومة بالذكاء الاصطناعي تتفاعل مع عملائك بالعربية والإنجليزية، 
                تجيب على استفساراتهم، تحل مشاكلهم، وتحولهم إلى عملاء فعليين. متاحة 24 ساعة دون توقف.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:flex-row-reverse">
                <Link
                  href="https://wa.me/46724003075?text=أريد روبوت محادثة ذكي لشركتي يخدم العملاء 24/7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
                >
                  <Bot size={22} className="mr-3 group-hover:animate-bounce" />
                  <span>اطلب روبوتك الذكي الآن</span>
                </Link>
                
                <Link
                  href="#pricing"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all duration-300 font-arabic"
                >
                  <PlayCircle size={22} className="mr-3" />
                  <span>شاهد الباقات والأسعار</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-arabic text-center mb-6">قوة الذكاء الاصطناعي</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-green-300 mb-2">24/7</div>
                      <div className="text-sm font-arabic">خدمة مستمرة</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-blue-300 mb-2">95%</div>
                      <div className="text-sm font-arabic">دقة الإجابات</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-yellow-300 mb-2">3s</div>
                      <div className="text-sm font-arabic">وقت الاستجابة</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-3xl font-black text-pink-300 mb-2">∞</div>
                      <div className="text-sm font-arabic">محادثات متزامنة</div>
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
              <div className="text-3xl font-black text-indigo-500">25+</div>
              <div className="text-gray-600 font-arabic">روبوت مفعل</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-indigo-500">99.9%</div>
              <div className="text-gray-600 font-arabic">وقت التشغيل</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-indigo-500">50K+</div>
              <div className="text-gray-600 font-arabic">محادثة شهرياً</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-black text-indigo-500">85%</div>
              <div className="text-gray-600 font-arabic">رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              أنواع الروبوتات الذكية التي نطورها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              حلول ذكاء اصطناعي متخصصة لكل نوع من أنواع الأعمال والصناعات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Headphones,
                title: "روبوت خدمة العملاء",
                description: "يجيب على استفسارات العملاء، يحل المشاكل، ويقدم الدعم الفني على مدار الساعة",
                features: ["إجابات فورية", "حل المشاكل الشائعة", "تصعيد للفريق البشري"]
              },
              {
                icon: Users,
                title: "روبوت المبيعات والتسويق",
                description: "يؤهل العملاء المحتملين، يقدم العروض، ويحولهم إلى مبيعات فعلية",
                features: ["تأهيل العملاء", "عروض مخصصة", "متابعة المبيعات"]
              },
              {
                icon: Settings,
                title: "روبوت العمليات الداخلية",
                description: "يساعد موظفيك في المهام اليومية، إدارة المواعيد، والعمليات الإدارية",
                features: ["حجز المواعيد", "إدارة الطلبات", "تقارير تلقائية"]
              },
              {
                icon: Globe,
                title: "روبوت متعدد اللغات",
                description: "يتفاعل مع عملائك بالعربية والإنجليزية وعدة لغات أخرى بطلاقة تامة",
                features: ["دعم 15+ لغة", "ترجمة فورية", "فهم اللهجات"]
              },
              {
                icon: BarChart3,
                title: "روبوت التحليلات والتقارير",
                description: "يحلل بيانات محادثات العملاء ويقدم تقارير ذكية لتحسين خدماتك",
                features: ["تحليل المشاعر", "تقارير الأداء", "توصيات التحسين"]
              },
              {
                icon: Shield,
                title: "روبوت آمن ومتوافق",
                description: "مصمم ليتوافق مع قوانين حماية البيانات ومعايير الأمان العالمية",
                features: ["حماية البيانات", "تشفير متقدم", "توافق GDPR"]
              }
            ].map((bot, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 mx-auto">
                  <bot.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center font-arabic">
                  {bot.title}
                </h3>
                <p className="text-gray-600 mb-6 font-arabic text-center leading-relaxed">
                  {bot.description}
                </p>
                <ul className="space-y-2">
                  {bot.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 font-arabic">
                      <CheckCircle size={16} className="text-indigo-500 ml-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 font-arabic">
              باقات الروبوتات الذكية
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
              اختر الباقة التي تناسب حجم عملك واحتياجاتك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "الروبوت الأساسي",
                price: "1,500 ر.س",
                description: "مثالي للشركات الصغيرة",
                features: [
                  "حتى 1000 محادثة شهرياً",
                  "إعداد أساسي للأسئلة والأجوبة",
                  "دعم العربية والإنجليزية",
                  "تكامل مع الواتساب",
                  "تقارير شهرية"
                ],
                popular: false
              },
              {
                name: "الروبوت المتقدم",
                price: "2,999 ر.س", 
                description: "الأنسب للشركات النامية",
                features: [
                  "حتى 5000 محادثة شهرياً",
                  "ذكاء اصطناعي متقدم",
                  "تكامل مع CRM",
                  "تحليلات العملاء",
                  "دعم فني أولوية",
                  "تقارير أسبوعية"
                ],
                popular: true
              },
              {
                name: "الروبوت الاحترافي", 
                price: "4,999 ر.س",
                description: "للمؤسسات الكبيرة",
                features: [
                  "محادثات غير محدودة",
                  "ذكاء اصطناعي متطور",
                  "روبوتات متعددة",
                  "تكامل شامل",
                  "دعم فني 24/7",
                  "تدريب الفريق"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-3xl p-8 shadow-xl ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold font-arabic">الأكثر طلباً</div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic">{plan.name}</h3>
                  <div className="text-4xl font-black text-indigo-500 mb-2">{plan.price}</div>
                  <div className="text-gray-600 font-arabic mb-2">شهرياً</div>
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
                  href={`https://wa.me/46724003075?text=أريد تفاصيل أكثر عن ${plan.name} وكيفية تطبيقه لشركتي`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 font-arabic flex items-center justify-center ${
                    plan.popular ? 'bg-indigo-500 hover:bg-indigo-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 font-arabic">
            هل أنت مستعد لأتمتة خدمة عملائك؟
          </h2>
          <p className="text-xl mb-8 font-arabic max-w-2xl mx-auto">
            انضم إلى أكثر من 25 شركة ناجحة اختارت فالكون برو ديجيتال لتطوير روبوتاتها الذكية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:flex-row-reverse">
            <Link
              href="https://wa.me/46724003075?text=أريد روبوت محادثة ذكي لشركتي وأتمتة خدمة العملاء"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl font-arabic"
            >
              <Bot size={22} className="mr-3 group-hover:animate-pulse" />
              <span>اطلب روبوتك الآن</span>
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
