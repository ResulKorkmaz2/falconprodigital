'use client'

import Link from 'next/link'
import { ArrowRight, TrendingUp, Target, Award, Zap, Globe, BarChart3 } from 'lucide-react'
import { useState } from 'react'

const Hero = () => {
  const [language, setLanguage] = useState('ar') // Varsayılan Arapça
  const isRTL = language === 'ar'
  
  return (
    <section id="home" className="pt-4 bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 min-h-screen flex items-center relative overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Content - Main Message */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Expertise Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-400 text-white rounded-full text-sm font-bold font-arabic shadow-lg">
              <Award size={18} className="ml-3" />
              متخصصون في إعلانات جوجل وتصميم المواقع
            </div>

            {/* Powerful Main Headline */}
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight font-arabic">
                <span className="block text-accent-300">إعلانات جوجل</span>
                <span className="block text-white">تحقق لك</span>
                <span className="block text-primary-400 text-6xl md:text-7xl lg:text-8xl">300% ROI</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-arabic">
                <span className="text-primary-400 font-bold">وكالة تسويق رقمي متخصصة</span> في إدارة إعلانات جوجل المحترفة وتصميم مواقع عالية التحويل للشركات في السعودية والكويت وقطر
              </p>
            </div>

            {/* Core Services */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Target size={24} className="text-primary-400 ml-3" />
                  <span className="text-white font-bold font-arabic">إدارة إعلانات جوجل</span>
                </div>
                <p className="text-gray-300 text-sm font-arabic">حملات محترفة تضمن أقصى عائد</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-2">
                  <Globe size={24} className="text-accent-300 ml-3" />
                  <span className="text-white font-bold font-arabic">تصميم مواقع</span>
                </div>
                <p className="text-gray-300 text-sm font-arabic">مواقع تحقق أعلى معدلات تحويل</p>
              </div>
            </div>

            {/* Impressive Results */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary-400 mb-2">300%</div>
                <div className="text-sm text-gray-300 font-arabic font-medium">متوسط زيادة ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-accent-300 mb-2">-67%</div>
                <div className="text-sm text-gray-300 font-arabic font-medium">انخفاض تكلفة العميل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">24س</div>
                <div className="text-sm text-gray-300 font-arabic font-medium">وقت الاستجابة</div>
              </div>
            </div>

            {/* Powerful CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:flex-row-reverse pt-4">
              <Link
                href="https://wa.me/46724003075?text=أريد استشارة مجانية لتحسين إعلانات جوجل وزيادة المبيعات لشركتي"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 font-arabic"
              >
                <Zap size={22} className="mr-3 group-hover:animate-pulse" />
                <span>استشارة مجانية عبر واتساب</span>
              </Link>
              
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-5 bg-gradient-to-r from-primary-500 to-accent-400 hover:from-primary-600 hover:to-accent-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 font-arabic"
              >
                <BarChart3 size={22} className="mr-3 group-hover:animate-bounce" />
                <span>تحليل حملاتك الحالية</span>
              </Link>
            </div>

            {/* Trust & Credibility */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-gray-400 font-arabic">
              <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <Target size={16} className="ml-2 text-primary-400" />
                خبرة 5+ سنوات في السوق الخليجي
              </div>
              <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <TrendingUp size={16} className="ml-2 text-accent-300" />
                50+ مشروع ناجح
              </div>
            </div>
          </div>

          {/* Left Content - Professional Dashboard Visual */}
          <div className="lg:pr-8 order-1 lg:order-2">
            <div className="relative">
              {/* Google Ads Dashboard Mockup */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 border border-white/20" dir="rtl">
                <div className="space-y-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <h3 className="text-xl font-bold text-gray-900 font-arabic">حملة إعلانية - شركة عقارية</h3>
                    </div>
                    <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      <TrendingUp size={18} />
                      <span className="mr-1 font-bold text-lg">+347%</span>
                    </div>
                  </div>
                  
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-arabic text-sm font-medium">المبيعات</span>
                        <div className="text-2xl font-black text-primary-600">2,847</div>
                      </div>
                      <div className="w-full bg-white rounded-full h-2 mb-2">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full w-5/6 animate-pulse"></div>
                      </div>
                      <span className="text-green-600 text-xs font-bold">↗ +285% من الشهر الماضي</span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 font-arabic text-sm font-medium">تكلفة العميل</span>
                        <div className="text-2xl font-black text-accent-600">47 ر.س</div>
                      </div>
                      <div className="w-full bg-white rounded-full h-2 mb-2">
                        <div className="bg-gradient-to-r from-accent-400 to-accent-500 h-2 rounded-full w-2/3"></div>
                      </div>
                      <span className="text-green-600 text-xs font-bold">↘ -67% انخفاض</span>
                    </div>
                  </div>

                  {/* ROI Showcase */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-arabic font-bold text-lg">عائد الاستثمار (ROI)</span>
                      <BarChart3 size={28} className="opacity-80" />
                    </div>
                    <div className="text-4xl font-black mb-2">347%</div>
                    <div className="flex items-center text-green-100 text-sm">
                      <span className="font-arabic">كل 1 ريال ينتج</span>
                      <span className="mx-2 font-bold text-white">3.47 ريال</span>
                      <span className="font-arabic">ربح</span>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-600">4.8x</div>
                      <div className="text-xs text-gray-500 font-arabic">ROAS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-accent-500">12%</div>
                      <div className="text-xs text-gray-500 font-arabic">معدل النقر</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">8.4%</div>
                      <div className="text-xs text-gray-500 font-arabic">معدل التحويل</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Professional Badges */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="text-center">
                  <Target size={24} className="mx-auto mb-1" />
                  <div className="text-xs font-bold font-arabic">Google Ads</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accent-400 to-accent-500 text-white p-4 rounded-2xl shadow-xl animate-pulse">
                <div className="text-center">
                  <Globe size={24} className="mx-auto mb-1" />
                  <div className="text-xs font-bold font-arabic">Web Design</div>
                </div>
              </div>

              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-accent-100/20 rounded-3xl -z-10 transform rotate-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
