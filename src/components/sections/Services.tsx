'use client'

import { useEffect, useState, useMemo } from 'react'
import { SERVICES, COMPANY_INFO } from '@/lib/constants'
import Container from '@/components/ui/Container'
import ServiceCard from '@/components/ui/ServiceCard'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

  // Kategoriler
  const categories = [
    { id: 'all', name: 'جميع الخدمات', icon: '🎯' },
    { id: 'ads', name: 'الإعلانات', icon: '📢' },
    { id: 'social', name: 'التواصل الاجتماعي', icon: '📱' },
    { id: 'tech', name: 'التقنية والتطوير', icon: '💻' },
  ]

  // الخدمات حسب الفئة - مُحسَّن بـ useMemo
  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return SERVICES
    if (activeCategory === 'ads') return SERVICES.filter(s => ['google-ads', 'ecommerce-ads', 'google-maps'].includes(s.id))
    if (activeCategory === 'social') return SERVICES.filter(s => ['social-media-ads', 'social-media-management'].includes(s.id))
    if (activeCategory === 'tech') return SERVICES.filter(s => ['web-design', 'desktop-software', 'ai-solutions'].includes(s.id))
    return SERVICES
  }, [activeCategory])

  useEffect(() => {
    // Daha hızlı yükleme için threshold düşürüldü
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.05, rootMargin: '50px' }
    )

    const element = document.getElementById('services')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      
      <Container className="relative z-10">
        {/* Modern Section Header */}
        <div className="text-center mb-16">
          <div className={`
            inline-flex items-center bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-6
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `}>
            <span className="w-2 h-2 bg-primary-500 rounded-full ml-2"></span>
            خدماتنا المتميزة
          </div>
          
          <h2 className={`
            text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `} style={{ animationDelay: '0.05s' }}>
            <span className="text-primary-600">
              حلول رقمية
            </span>
            <br />
            متكاملة لنجاحك
          </h2>
          
          <p className={`
            text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `} style={{ animationDelay: '0.1s' }}>
            نقدم مجموعة شاملة من خدمات التسويق الرقمي والذكاء الاصطناعي المتطورة 
            لرفع مستوى أعمالك في منطقة الخليج
          </p>
        </div>

        {/* Modern Category Tabs */}
        <div className={`
          flex flex-wrap justify-center gap-4 mb-12
          ${isVisible ? 'animate-slide-up' : 'opacity-0'}
        `} style={{ animationDelay: '0.15s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm
                ${activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-gray-200'
                }
              `}
            >
              <span className="flex items-center">
                <span className="text-lg ml-2">{category.icon}</span>
                {category.name}
              </span>

            </button>
          ))}
        </div>

        {/* Modern Services Grid with Animation */}
        <div className={`
          transition-all duration-500 ease-in-out
          ${isVisible ? 'animate-fade-in' : 'opacity-0'}
        `} style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={`${service.id}-${activeCategory}`}
                className={`transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  popular={service.popular}
                  icon={service.icon}
                  image={service.image}
                  delay={isVisible ? index * 25 : 0}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modern CTA Section */}
        <div className={`
          relative mt-20 p-8 lg:p-12 rounded-3xl backdrop-blur-lg bg-white/80
          border border-white/30 shadow-xl overflow-hidden
          ${isVisible ? 'animate-slide-up' : 'opacity-0'}
        `} style={{ animationDelay: '0.6s' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-primary-600/5 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-400/10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary-500/10 rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
              نحن هنا لمساعدتك
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              هل تحتاج حل 
              <span className="text-accent-500"> مخصص </span>
              لأعمالك؟
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              نقدم حلول مخصصة تناسب احتياجات أعمالك الخاصة. تواصل معنا لمناقشة مشروعك والحصول على عرض سعر مخصص
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(COMPANY_INFO.autoMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                تواصل للحصول على عرض مخصص
              </a>
              
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-primary-600 border-2 border-primary-600 font-bold text-lg rounded-2xl hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                تعرف علينا أكثر
              </button>
            </div>
          </div>
        </div>

        {/* Ultra Modern Trust Indicators */}
        <div className={`
          mt-20 
          ${isVisible ? 'animate-fade-in' : 'opacity-0'}
        `} style={{ animationDelay: '0.7s' }}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-accent-500 rounded-full ml-2"></span>
              إنجازاتنا بالأرقام
            </div>
            <h3 className="text-3xl font-black text-gray-900">لماذا يثق بنا العملاء؟</h3>
          </div>

          {/* Modern Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                number: '500+', 
                label: 'مُـمَـيّـزة', 
                sublabel: 'عميل راضٍ', 
                icon: '👥', 
                bgColor: 'bg-blue-600',
                lightBg: 'bg-blue-50',
                description: 'عملاء راضون عن خدماتنا'
              },
              { 
                number: '4', 
                label: 'كُـبـرى', 
                sublabel: 'دول خليجية', 
                icon: '🌍', 
                bgColor: 'bg-green-600',
                lightBg: 'bg-green-50',
                description: 'نخدم في أهم دول الخليج'
              },
              { 
                number: '7/24', 
                label: 'مُـتـوَاصِـل', 
                sublabel: 'دعم فني', 
                icon: '🕐', 
                bgColor: 'bg-purple-600',
                lightBg: 'bg-purple-50',
                description: 'دعم فني متواصل على مدار الساعة'
              },
              { 
                number: '%100', 
                label: 'مَـضـمُـون', 
                sublabel: 'ضمان الجودة', 
                icon: '✨', 
                bgColor: 'bg-orange-600',
                lightBg: 'bg-orange-50',
                description: 'ضمان كامل على جودة الخدمة'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ 
                  animationDelay: `${0.8 + index * 0.1}s` 
                }}
              >
                {/* Main Card */}
                <div className="relative p-8 bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${stat.lightBg} rounded-full -translate-y-10 translate-x-10 opacity-50`}></div>
                  <div className={`absolute bottom-0 left-0 w-16 h-16 ${stat.lightBg} rounded-full translate-y-8 -translate-x-8 opacity-30`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative z-10 w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{stat.icon}</span>
                  </div>
                  
                  {/* Number */}
                  <div className="text-center relative z-10">
                    <div className="text-5xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Labels */}
                    <div className="space-y-1">
                      <div className={`text-lg font-bold ${stat.bgColor.replace('bg-', 'text-')}`}>
                        {stat.label}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.sublabel}
                      </div>
                      <div className="text-sm text-gray-500 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                </div>

                {/* Floating Badge */}
                <div className={`absolute -top-3 -right-3 w-8 h-8 ${stat.bgColor} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90`}>
                  ✓
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Services
