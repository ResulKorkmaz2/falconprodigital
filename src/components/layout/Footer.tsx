'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { FOOTER_CONTENT, COMPANY_INFO, WHATSAPP_CONFIG } from '@/lib/constants'
import { scrollToElement } from '@/lib/utils'
import Container from '@/components/ui/Container'

const Footer = () => {
  const router = useRouter()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  
  // Check if we're on a service page or other page (not home)
  const isHomePage = pathname === '/'

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (isHomePage) {
        // We're on home page, just scroll to element
        const elementId = href.substring(1)
        scrollToElement(elementId)
      } else {
        // We're on another page, navigate to home with hash
        router.push(`/${href}`)
      }
    }
  }

  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_CONFIG.link, '_blank')
  }

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      {/* Ultra Modern Background */}
      <div className="absolute inset-0 bg-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-green-900/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-primary-600/5 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-600/5 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-600/3 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <Container className="relative z-10">
        {/* Ultra Modern Main Footer Content */}
        <div className="py-12 lg:py-20">
          
          {/* Company Showcase - Full Width Top */}
          <div className="mb-12 lg:mb-16">
            <div className="relative p-6 lg:p-8 bg-white/5 backdrop-blur-lg rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-8">
                  <div className="flex flex-col sm:flex-row items-center text-center sm:text-right w-full lg:w-auto">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:ml-4 shadow-xl">
                      <img 
                        src="/logo.png" 
                        alt="Falcon Pro Digital Logo" 
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
                        {COMPANY_INFO.name}
                      </h3>
                      <p className="text-green-400 font-bold text-base lg:text-lg">
                        فرع من {COMPANY_INFO.parentCompany}
                      </p>
                      <p className="text-gray-300 leading-relaxed mt-4 max-w-md text-sm lg:text-base">
                        {FOOTER_CONTENT.companyDescription}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center lg:text-right w-full lg:w-auto">
                    <h4 className="text-xl lg:text-2xl font-black text-green-400 mb-3">
                      {COMPANY_INFO.tagline}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                      {COMPANY_INFO.taglineEnglish}
                    </p>
                    
                    {/* Premium WhatsApp CTA */}
                    <button
                      onClick={handleWhatsAppClick}
                      className="group bg-green-600 hover:bg-green-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-bold text-base lg:text-lg w-full sm:w-auto"
                    >
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 lg:w-6 lg:h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        ابدأ مشروعك الآن
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Gulf Countries Section - Full Width */}
          <div className="mb-12 lg:mb-16">
            <div className="relative p-6 lg:p-10 bg-white/5 backdrop-blur-lg rounded-2xl lg:rounded-3xl border border-white/10 shadow-2xl">
              <div className="absolute top-0 left-0 w-40 h-40 bg-green-600/10 rounded-full -translate-y-20 -translate-x-20"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8 lg:mb-10">
                  <div className="inline-flex items-center bg-green-600/20 text-green-400 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-base lg:text-lg font-bold mb-4 lg:mb-6">
                    <span className="text-2xl lg:text-3xl ml-3">🌍</span>
                    دول الخليج التي نخدمها
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto">
                    نفخر بخدمة أكبر الأسواق في منطقة الخليج العربي بخبرة عالمية ولمسة محلية
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                  {[
                    { flag: '🇸🇦', name: 'المملكة العربية السعودية', shortName: 'السعودية', color: 'bg-green-600', borderColor: 'border-green-500' },
                    { flag: '🇶🇦', name: 'دولة قطر', shortName: 'قطر', color: 'bg-red-600', borderColor: 'border-red-500' },
                    { flag: '🇰🇼', name: 'دولة الكويت', shortName: 'الكويت', color: 'bg-blue-600', borderColor: 'border-blue-500' },
                    { flag: '🇦🇪', name: 'دولة الإمارات العربية المتحدة', shortName: 'الإمارات', color: 'bg-orange-600', borderColor: 'border-orange-500' }
                  ].map((area, index) => (
                    <div 
                      key={index} 
                      className={`group relative p-4 sm:p-6 lg:p-8 bg-white/10 hover:bg-white/15 rounded-2xl lg:rounded-3xl border-2 ${area.borderColor} hover:border-white/40 transition-all duration-500 hover:scale-105 lg:hover:scale-110 hover:-translate-y-1 lg:hover:-translate-y-2 text-center shadow-xl lg:shadow-2xl hover:shadow-2xl lg:hover:shadow-3xl`}
                    >
                      {/* Background Glow */}
                      <div className={`absolute inset-0 ${area.color}/10 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      <div className="relative z-10">
                        {/* Large Flag Container */}
                        <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 ${area.color} rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg lg:shadow-xl group-hover:scale-110 lg:group-hover:scale-125 transition-transform duration-500`}>
                          <span className="text-2xl sm:text-3xl lg:text-4xl">{area.flag}</span>
                        </div>
                        
                        {/* Country Name */}
                        <h6 className="text-white font-black text-lg lg:text-xl mb-2 group-hover:text-green-400 transition-colors duration-300">
                          {area.shortName}
                        </h6>
                        
                        {/* Full Country Name */}
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {area.name}
                        </p>
                        
                        {/* Service Indicator */}
                        <div className="mt-3 lg:mt-4 flex items-center justify-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                          <span className="text-green-400 text-xs sm:text-sm font-medium">متاح الآن</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services & Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Services Card */}
            <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center ml-3">
                  <span className="text-white font-bold">🎯</span>
                </div>
                <h4 className="text-xl font-black text-white">
                  {FOOTER_CONTENT.sections.services.title}
                </h4>
              </div>
              <div className="space-y-3">
                {FOOTER_CONTENT.sections.services.links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-right p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 border border-white/5 hover:border-white/20"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center ml-3">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <h4 className="text-xl font-black text-white">
                  {FOOTER_CONTENT.sections.quickLinks.title}
                </h4>
              </div>
              <div className="space-y-3">
                {FOOTER_CONTENT.sections.quickLinks.links.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-right p-3 bg-white/5 hover:bg-white/10 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 border border-white/5 hover:border-white/20"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Stats Card */}
            <div className="p-6 bg-green-600/20 backdrop-blur-lg rounded-2xl border border-green-500/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-accent-600 rounded-xl flex items-center justify-center ml-3">
                  <span className="text-white font-bold">📊</span>
                </div>
                <h4 className="text-xl font-black text-white">إحصائياتنا</h4>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center p-3 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">دقائق رد</div>
                    <div className="text-green-400 text-sm">متوسط الوقت</div>
                  </div>
                </div>
                
                <div className="group flex items-center p-3 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">24</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">ساعة متاح</div>
                    <div className="text-primary-400 text-sm">دائماً معك</div>
                  </div>
                </div>
                
                <div className="group flex items-center p-3 bg-white/10 rounded-xl">
                  <div className="w-12 h-12 bg-accent-600 rounded-xl flex items-center justify-center ml-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">+</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">استشارة مجانية</div>
                    <div className="text-accent-400 text-sm">ابدأ الآن</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Modern Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-lg"></div>
          <div className="relative z-10 border-t border-white/10 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              
              {/* Copyright & Company Info */}
              <div className="text-center lg:text-right order-2 lg:order-1">
                <p className="text-white font-medium mb-2 text-sm lg:text-base">
                  © {currentYear} فالكون برو ديجيتال - فرع من Aptiro LLC
                </p>
                <p className="text-gray-400 text-xs lg:text-sm">
                  جميع الحقوق محفوظة. تصميم وتطوير بواسطة فريقنا المتخصص
                </p>
              </div>

              {/* Policy Links - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 order-1 lg:order-2 w-full sm:w-auto">
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-2 px-3 py-2 lg:px-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-all duration-300 hover:scale-105 border border-blue-500/20 w-full sm:w-auto justify-center"
                >
                  <span className="text-blue-400 text-sm">🔒</span>
                  <span className="text-blue-400 font-medium text-xs lg:text-sm">سياسة الخصوصية</span>
                </Link>
                
                <div className="hidden sm:block w-1 h-6 bg-white/20"></div>
                
                <Link
                  href="/cookie-policy"
                  className="flex items-center gap-2 px-3 py-2 lg:px-4 bg-orange-600/20 hover:bg-orange-600/30 rounded-full transition-all duration-300 hover:scale-105 border border-orange-500/20 w-full sm:w-auto justify-center"
                >
                  <span className="text-orange-400 text-sm">🍪</span>
                  <span className="text-orange-400 font-medium text-xs lg:text-sm">سياسة ملفات الارتباط</span>
                </Link>
                
                <div className="hidden sm:block w-1 h-6 bg-white/20"></div>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 px-3 py-2 lg:px-4 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white font-medium text-xs lg:text-sm">تواصل الآن</span>
                </button>
              </div>
            </div>

            {/* Modern Decorative Elements */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-20 h-1 bg-primary-600 rounded-full"></div>
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <div className="w-16 h-1 bg-accent-600 rounded-full"></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
              <div className="w-12 h-1 bg-green-500 rounded-full"></div>
            </div>
            
            {/* Premium Badge */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white font-medium text-sm ml-2">🏆</span>
                <span className="text-white font-medium text-sm">
                  كوكبة الخليج الأولى في التكنولوجيا والإعلانات
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-40 w-24 h-24 bg-green-600/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-20 w-40 h-40 bg-accent-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-primary-400/20 rounded-full blur-2xl"></div>
      </div>
    </footer>
  )
}

export default Footer
