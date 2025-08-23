'use client'

import { useEffect, useState } from 'react'
import { ABOUT_CONTENT, COMPANY_INFO, SERVICE_AREAS } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      
      <Container className="relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className={`
            inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `}>
            <span className="w-2 h-2 bg-primary-500 rounded-full ml-2"></span>
            من نحن
          </div>
          
          <h2 className={`
            text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `} style={{ animationDelay: '0.1s' }}>
            <span className="text-primary-600">قصة نجاح</span>
            <br />
            تتواصل معكم
          </h2>
          
          <p className={`
            text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `} style={{ animationDelay: '0.2s' }}>
            نحن فريق من الخبراء المتخصصين في التسويق الرقمي والذكاء الاصطناعي، 
            نعمل بشغف لتحقيق أهدافكم التجارية في منطقة الخليج
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Modern Content Side */}
          <div className="order-2 lg:order-1">
            {/* Mission Statement */}
            <div className={`
              relative p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl mb-12
              ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '0.3s' }}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100 rounded-full -translate-y-10 translate-x-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center ml-4">
                    <img 
                      src="/logo.png" 
                      alt="Falcon Pro Digital Logo" 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
                    <p className="text-primary-600 font-medium">نحو مستقبل رقمي متميز</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  نهدف إلى أن نكون الشريك الأول في التحول الرقمي لكل شركة في منطقة الخليج، 
                  من خلال تقديم حلول تقنية مبتكرة تمزج بين الخبرة الدولية والفهم المحلي العميق.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-6 mb-12">
              {[
                {
                  title: 'خبرة دولية متطورة',
                  description: 'نستفيد من الخبرة الأمريكية لشركة Aptiro LLC في تقديم أحدث التقنيات',
                  icon: '🌟',
                  color: 'bg-blue-600'
                },
                {
                  title: 'فهم عميق للسوق الخليجي',
                  description: 'نعرف السوق المحلي واحتياجاته الفريدة في كل دولة خليجية',
                  icon: '🎯',
                  color: 'bg-green-600'
                },
                {
                  title: 'الذكاء الاصطناعي المتقدم',
                  description: 'نوظف أحدث تقنيات الذكاء الاصطناعي لحلول تسويقية فعالة',
                  icon: '🚀',
                  color: 'bg-purple-600'
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className={`
                    group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg 
                    hover:shadow-xl hover:-translate-y-2 transition-all duration-300
                    ${isVisible ? 'animate-slide-up' : 'opacity-0'}
                  `}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Company Heritage */}
            <div className={`
              relative p-8 bg-white/60 backdrop-blur-lg rounded-3xl border border-white/30 shadow-xl mb-8
              ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '0.8s' }}>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-100 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent-600 rounded-2xl flex items-center justify-center ml-4">
                    <span className="text-white font-black text-2xl">A</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      فرع من {COMPANY_INFO.parentCompany}
                    </h4>
                    <p className="text-accent-600 font-medium">شركة أمريكية رائدة في التكنولوجيا</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  نستفيد من الخبرة الدولية لشركة Aptiro LLC الأمريكية في تقديم حلول تقنية متقدمة، 
                  مع التركيز على احتياجات السوق الخليجي الفريدة وثقافته المحلية.
                </p>
              </div>
            </div>

            {/* Service Areas */}
            <div className={`
              mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '1s' }}>
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                نخدم في دول الخليج الكبرى
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {SERVICE_AREAS.map((area, index) => (
                  <div 
                    key={area.name}
                    className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-3xl ml-3 group-hover:scale-110 transition-transform duration-300">{area.flag}</span>
                      <span className="font-bold text-gray-800">{area.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`
              text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '1.2s' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                ابدأ رحلتك الرقمية معنا
              </Button>
            </div>
          </div>

          {/* Ultra Modern Visual Side */}
          <div className="order-1 lg:order-2">
            <div className={`
              relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}
            `} style={{ animationDelay: '0.4s' }}>
              
              {/* Main Achievement Card */}
              <div className="relative p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 mb-8">
                <div className="absolute top-0 left-0 w-32 h-32 bg-primary-100 rounded-full -translate-y-16 -translate-x-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-100 rounded-full translate-y-12 translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                      <span className="text-4xl">🏆</span>
                    </div>
                    <h5 className="text-2xl font-black text-gray-900 mb-2">
                      الريادة في الخليج
                    </h5>
                    <p className="text-primary-600 font-medium">
                      أكبر شركة رقمية متخصصة
                    </p>
                  </div>
                  
                  {/* Enhanced Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { number: '2019', label: 'سنة التأسيس', icon: '📅', color: 'bg-blue-600' },
                      { number: '500+', label: 'مشروع ناجح', icon: '✨', color: 'bg-green-600' },
                      { number: '50+', label: 'خبير متخصص', icon: '👥', color: 'bg-purple-600' },
                      { number: '4', label: 'دول خليجية', icon: '🌍', color: 'bg-orange-600' }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className="group text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
                        style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                      >
                        <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-xl">{stat.icon}</span>
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-1">
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us Features */}
              <div className="space-y-4 mb-8">
                <h5 className="text-xl font-black text-gray-900 mb-6 text-center">
                  لماذا تختارنا؟
                </h5>
                
                {[
                  { feature: 'خبرة دولية مع فهم محلي', icon: '🌐' },
                  { feature: 'فريق متخصص في الذكاء الاصطناعي', icon: '🤖' },
                  { feature: 'دعم مستمر باللغة العربية', icon: '💬' },
                  { feature: 'حلول مخصصة لكل عميل', icon: '🎯' },
                  { feature: 'أسعار تنافسية وشفافة', icon: '💎' },
                  { feature: 'ضمان جودة الخدمة', icon: '✅' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`
                      group flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 
                      shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                      ${isVisible ? 'animate-slide-up' : 'opacity-0'}
                    `}
                    style={{ animationDelay: `${0.8 + index * 0.05}s` }}
                  >
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                      {item.feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-6 -left-6 bg-green-600 text-white rounded-2xl shadow-xl p-4 border-4 border-white animate-pulse">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full ml-2"></div>
                  <span className="text-sm font-bold">متاح الآن</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white rounded-2xl shadow-xl p-4 border-4 border-white">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-white ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-sm font-bold">جودة مضمونة</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-accent-600 text-white rounded-2xl shadow-xl p-3 border-4 border-white transform -rotate-12">
                <span className="text-xs font-bold">⭐ 5 نجوم</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Modern Section - Team Expertise */}
        <div className={`
          text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}
        `} style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full ml-2"></span>
            فريق الخبراء
          </div>
          
          <h3 className="text-3xl font-black text-gray-900 mb-8">
            نجمع بين الخبرة والإبداع
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'خبراء التسويق الرقمي',
                description: 'فريق متخصص في استراتيجيات التسويق الرقمي المتقدمة',
                icon: '📈',
                color: 'bg-blue-600'
              },
              {
                title: 'مطوري الذكاء الاصطناعي',
                description: 'مهندسون متخصصون في تطوير حلول الذكاء الاصطناعي',
                icon: '🧠',
                color: 'bg-purple-600'
              },
              {
                title: 'مصممي التجربة',
                description: 'فنانون رقميون يصممون تجارب مستخدم استثنائية',
                icon: '🎨',
                color: 'bg-green-600'
              }
            ].map((expert, index) => (
              <div 
                key={index}
                className={`
                  group p-8 bg-white/80 backdrop-blur-lg rounded-3xl border border-white/50 shadow-xl 
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
                  ${isVisible ? 'animate-slide-up' : 'opacity-0'}
                `}
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${expert.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{expert.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{expert.title}</h4>
                <p className="text-gray-600 leading-relaxed">{expert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
