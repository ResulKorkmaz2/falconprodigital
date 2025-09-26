'use client'

import { useEffect, useState } from 'react'
import { HERO_CONTENT, SERVICE_AREAS, WHATSAPP_CONFIG } from '@/lib/constants'
import { scrollToElement } from '@/lib/utils'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleStartProject = () => {
    // GTM DataLayer Event
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'whatsapp_click',
      click_id: '056914'
    });
    
    // Debug için console log
    console.log('🚀 WhatsApp Hero Button - GTM Event Fired:', {
      event: 'whatsapp_click',
      click_id: '056914',
      location: 'hero'
    });
    
    // WhatsApp açılış işlemi
    window.open(WHATSAPP_CONFIG.link, '_blank')
  }

  const handleLearnMore = () => {
    scrollToElement('services')
  }

  const stats = [
    { number: '500+', label: 'عميل راضٍ', icon: '👥' },
    { number: '4', label: 'دول خليجية', icon: '🌍' },
    { number: '24/7', label: 'دعم فني', icon: '🔧' },
    { number: '99%', label: 'معدل نجاح', icon: '📈' },
  ]

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Modern Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
        {/* Animated Mesh Gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Floating Orbs */}
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse opacity-60" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse opacity-30" style={{ animationDelay: '4s' }} />
          
          {/* Geometric Patterns */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="60" height="60" patternUnits="userSpaceOnUse">
                <polygon points="30,2 50,16 50,44 30,58 10,44 10,16" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
          
          {/* Floating Icons */}
          <div className="absolute top-32 left-20 text-white/20" style={{ animationDelay: '1s' }}>
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div className="absolute bottom-40 right-32 text-white/20" style={{ animationDelay: '2.5s' }}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="absolute top-2/3 left-16 text-white/20" style={{ animationDelay: '0.5s' }}>
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Column */}
          <div className="text-white order-2 lg:order-1">
            {/* Company Badge */}
            <div className={`
              inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 
              ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `}>
              <span className="w-2 h-2 bg-green-400 rounded-full ml-2"></span>
              <span className="text-sm font-medium">متاح الآن للخدمة</span>
            </div>

            {/* Main Heading with Clean Typography */}
            <h1 className={`
              text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}
            `} style={{ animationDelay: '0.2s' }}>
              <span className="block text-white font-black">
                أكبر شركة إعلانات
              </span>
              <span className="block text-white">
                وتكنولوجيا معلومات
              </span>
              <span className="block text-accent-400 font-black">
                وذكاء اصطناعي دولية
              </span>
              <span className="block text-white text-3xl lg:text-4xl xl:text-5xl">
                في الخليج
              </span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className={`
              text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-2xl
              ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '0.4s' }}>
              نقدم حلول التسويق الرقمي والذكاء الاصطناعي المتقدمة لرفع مستوى أعمالك 
              في منطقة الخليج مع خبرة دولية من{' '}
              <span className="text-accent-400 font-bold">Aptiro LLC</span>
            </p>

            {/* Service Areas with Enhanced Design */}
            <div className={`
              mb-10 ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-semibold text-white mb-4">نخدم في:</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {SERVICE_AREAS.map((area, index) => (
                  <div 
                    key={area.name} 
                    className="group flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 
                             transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <span className="text-xl ml-2 group-hover:scale-110 transition-transform duration-300">{area.flag}</span>
                    <span className="text-white font-medium text-sm">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className={`
              flex flex-col sm:flex-row gap-4 mb-10
              ${isVisible ? 'animate-slide-up' : 'opacity-0'}
            `} style={{ animationDelay: '1s' }}>
              <Button
                variant="secondary"
                size="xl"
                onClick={handleStartProject}
                data-wa-id="056914"
                className="group bg-accent-500 text-white hover:bg-accent-600 shadow-2xl 
                         hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 font-bold"
              >
                <svg className="w-6 h-6 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                ابدأ مشروعك الآن
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                onClick={handleLearnMore}
                className="border-2 border-white text-white !bg-transparent hover:!bg-white hover:text-primary-600 backdrop-blur-sm 
                         transition-all duration-300 font-semibold"
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                تعرف على خدماتنا
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className={`
              flex items-center space-x-6 space-x-reverse text-white text-sm
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}
            `} style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-400 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>فرع من Aptiro LLC الأمريكية</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>ضمان جودة 100%</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>تقييم 5 نجوم</span>
              </div>
            </div>
          </div>

          {/* Visual Column - Sade ve Modern */}
          <div className={`
            order-1 lg:order-2 flex items-center justify-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}
          `} style={{ animationDelay: '0.8s' }}>
            {/* Merkezi Logo veya İllustrasyon */}
            <div className="relative">
              {/* Ana Daire */}
              <div className="w-80 h-80 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center relative group">
                {/* İç Daire */}
                <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  {/* Company Logo */}
                  <img 
                    src="/logo.png" 
                    alt="Falcon Pro Digital Logo" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
                
                {/* Çevresindeki Dönen Elementler */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="relative w-full h-full">
                    {/* Sarı Noktalar */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-400 rounded-full"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-400 rounded-full"></div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent-400 rounded-full"></div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-accent-400 rounded-full"></div>
                    
                    {/* Dijital Platformlar */}
                    {/* Google - Üst Sağ */}
                    <div className="absolute top-12 right-12 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    
                    {/* Instagram - Alt Sağ */}
                    <div className="absolute bottom-12 right-12 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.71-2.13 1.38C1.34 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.71 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.71-1.46-1.38-2.13C19.46 1.34 18.79.93 18 .63 17.24.33 16.36.13 15.09.07 13.81.01 13.4 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.41 4.15a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/>
                      </svg>
                    </div>
                    
                    {/* Facebook - Alt Sol */}
                    <div className="absolute bottom-12 left-12 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    
                    {/* YouTube - Üst Sol */}
                    <div className="absolute top-12 left-12 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Alt Metin */}
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold text-white mb-2">Falcon Pro Digital</h3>
                <p className="text-white/80 text-sm">أكبر وكالة رقمية في الخليج</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`
          absolute bottom-8 left-1/2 transform -translate-x-1/2
          ${isVisible ? 'animate-fade-in' : 'opacity-0'}
        `} style={{ animationDelay: '1.5s' }}>
          <div className="flex flex-col items-center group cursor-pointer" onClick={handleLearnMore}>
            <span className="text-white text-sm mb-3 group-hover:text-accent-400 transition-colors duration-300">
              اكتشف خدماتنا
            </span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center group-hover:border-accent-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-white rounded-full mt-2 group-hover:bg-accent-400 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
