'use client'

import { useEffect, useState } from 'react'
import { CONTACT_CONTENT, WHATSAPP_CONFIG, COMPANY_INFO } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const Contact = () => {
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

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_CONFIG.link, '_blank')
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0 bg-primary-600"></div>
      <div className="absolute inset-0 bg-white/95"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-green-500/10 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary-600/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-500/5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <Container className="relative z-10">
        {/* Ultra Modern Section Header */}
        <div className="text-center mb-20">
          <div className={`
            inline-flex items-center bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `}>
            <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
            تواصل معنا
          </div>
          
          <h2 className={`
            text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `} style={{ animationDelay: '0.1s' }}>
            <span className="text-green-600">نحن في انتظارك</span>
            <br />
            دعنا نبدأ معاً
          </h2>
          
          <p className={`
            text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed
            ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `} style={{ animationDelay: '0.2s' }}>
            مستعدون لتحويل أحلامك الرقمية إلى واقع ملموس. 
            تواصل معنا عبر واتساب واحصل على استشارة مجانية فورية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Ultra Modern Contact Information */}
          <div className={`
            space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}
          `} style={{ animationDelay: '0.3s' }}>
            
            {/* Main WhatsApp Card */}
            <div className="group relative p-8 bg-white/80 backdrop-blur-lg rounded-3xl border border-white/50 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              {/* Background Decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-50 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 text-center">
                {/* WhatsApp Icon Container */}
                <div className="relative inline-block mb-8">
                  <div className="w-24 h-24 bg-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  {/* Glow Ring */}
                  <div className="absolute inset-0 w-24 h-24 bg-green-600 rounded-3xl opacity-20"></div>
                </div>
                
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  تواصل فوري عبر واتساب
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  الطريقة الوحيدة والأسرع للتواصل معنا. 
                  احصل على رد فوري واستشارة مجانية خلال دقائق
                </p>
                
                {/* Enhanced WhatsApp Button */}
                <Button
                  variant="primary"
                  size="xl"
                  onClick={handleWhatsAppClick}
                  className="group w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 mb-6"
                >
                  <svg className="w-7 h-7 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  ابدأ المحادثة الآن
                </Button>
                
                {/* Auto Message Preview */}
                <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                    <span className="text-green-700 font-medium text-sm">
                      رسالة تلقائية ستُرسل:
                    </span>
                  </div>
                  <p className="text-green-600 text-sm italic">
                    &ldquo;{COMPANY_INFO.autoMessage}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas Card */}
            <div className={`
              p-6 bg-white/80 backdrop-blur-lg rounded-3xl border border-white/50 shadow-xl
              ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '0.5s' }}>
              <h4 className="text-xl font-black text-gray-900 mb-6 text-center">
                نخدم في دول الخليج الكبرى
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {CONTACT_CONTENT.serviceAreas.areas.map((area, index) => (
                  <div 
                    key={area.name}
                    className="group p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-3xl ml-3 group-hover:scale-110 transition-transform duration-300">{area.flag}</span>
                      <span className="font-bold text-gray-800">{area.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ultra Modern Visual Side */}
          <div className={`
            ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `} style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              
              {/* Main Company Card */}
              <div className="relative p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/50 mb-8 group hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary-100 rounded-full -translate-y-20 -translate-x-20"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-100 rounded-full translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10 text-center mb-8">
                  <div className="w-20 h-20 bg-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/logo.png" 
                      alt="Falcon Pro Digital Logo" 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-primary-600 font-bold">
                    فرع من {COMPANY_INFO.parentCompany}
                  </p>
                </div>

                {/* Contact Benefits */}
                <div className="space-y-4 relative z-10">
                  <h5 className="text-xl font-black text-gray-900 mb-6 text-center">
                    مميزات التواصل معنا:
                  </h5>
                  
                  {[
                    { icon: '⚡', text: 'رد فوري خلال دقائق', color: 'bg-yellow-600' },
                    { icon: '🇸🇦', text: 'دعم باللغة العربية', color: 'bg-green-600' },
                    { icon: '💡', text: 'استشارة مجانية', color: 'bg-blue-600' },
                    { icon: '📊', text: 'تحليل مجاني لاحتياجاتك', color: 'bg-purple-600' },
                    { icon: '💰', text: 'عروض أسعار شفافة', color: 'bg-orange-600' },
                    { icon: '🛡️', text: 'ضمان الخصوصية', color: 'bg-red-600' }
                  ].map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`
                        group flex items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 
                        shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                        ${isVisible ? 'animate-slide-up' : 'opacity-0'}
                      `}
                      style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                    >
                      <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-xl">{benefit.icon}</span>
                      </div>
                      <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Response Time */}
                <div className="mt-8 p-6 bg-green-600 text-white rounded-2xl shadow-xl relative z-10">
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full ml-3"></div>
                    <span className="font-bold text-lg">
                      متاح الآن - متوسط وقت الرد: 5 دقائق
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Chat Bubbles */}
              <div className="absolute -top-8 left-8 bg-primary-600 text-white px-6 py-3 rounded-2xl rounded-tr-none shadow-xl border-4 border-white">
                <span className="text-sm font-medium">مرحباً! كيف يمكنني مساعدتك؟</span>
              </div>

              <div className="absolute -bottom-8 right-8 bg-green-600 text-white px-6 py-3 rounded-2xl rounded-bl-none shadow-xl border-4 border-white">
                <span className="text-sm font-medium">نحن هنا لخدمتك 24/7</span>
              </div>

              {/* Floating Status Indicators */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-600 rounded-full shadow-xl"></div>
              <div className="absolute top-1/3 -left-6 w-6 h-6 bg-primary-600 rounded-full shadow-xl"></div>
              <div className="absolute bottom-1/3 -right-6 w-10 h-10 bg-accent-600 rounded-full shadow-xl flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Modern Bottom CTA */}
        <div className={`
          relative p-12 bg-green-600 rounded-3xl text-white shadow-2xl overflow-hidden
          ${isVisible ? 'animate-slide-up' : 'opacity-0'}
        `} style={{ animationDelay: '0.7s' }}>
          {/* Background Patterns */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-24 translate-x-24"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
              آخر خطوة نحو النجاح
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-black mb-6">
              جاهز لبدء 
              <span className="text-green-200"> مشروعك الرقمي؟ </span>
            </h3>
            
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              لا تضيع الوقت، ابدأ رحلتك نحو النجاح الرقمي الآن. 
              فريقنا المتخصص جاهز لتحويل أحلامك إلى واقع ملموس
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="secondary"
                size="xl"
                onClick={handleWhatsAppClick}
                className="group bg-white text-green-600 hover:bg-green-50 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-7 h-7 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                ابدأ المحادثة الآن
              </Button>
              
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white font-bold text-lg rounded-2xl hover:bg-white hover:text-green-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                العودة للأعلى
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
