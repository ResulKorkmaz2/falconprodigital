'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { NAVIGATION_MENU, COMPANY_INFO, WHATSAPP_CONFIG } from '@/lib/constants'
import { scrollToElement, cn } from '@/lib/utils'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const Navigation = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mounted, setMounted] = useState(false)
  
  // Check if we're NOT on the home page (only after mounting)
  const isNotHomePage = mounted && pathname !== '/' && pathname !== null

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return // Only run on client side
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Only update active section if we're on the home page
      if (!isNotHomePage) {
        const sections = NAVIGATION_MENU.map(item => item.id)
        const current = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        
        if (current) {
          setActiveSection(current)
        }
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isNotHomePage, mounted])

  // Set active section based on current page
  useEffect(() => {
    if (!mounted) return // Only run on client side
    
    if (pathname?.startsWith('/services/')) {
      // On service pages, set services as active
      setActiveSection('services')
    } else if (pathname === '/pricing') {
      // On pricing page, set pricing as active
      setActiveSection('pricing')
    } else if (pathname === '/') {
      // On home page, set home as active by default
      setActiveSection('home')
    } else {
      // On other pages (privacy-policy, cookie-policy, etc.), set home as default
      setActiveSection('home')
    }
  }, [pathname, mounted])

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id)
    setIsOpen(false)
    
    if (href.startsWith('#')) {
      const elementId = href.substring(1)
      
      // If we're NOT on the home page, navigate to home first
      if (isNotHomePage) {
        // Navigate to home with hash
        router.push(`/${href}`)
      } else {
        // We're already on home, just scroll to element
        scrollToElement(elementId)
      }
    } else {
      // For direct page navigation (like /pricing)
      router.push(href)
    }
  }

  const handleWhatsAppClick = () => {
    // GTM DataLayer Event with click ID 056914
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'whatsapp_click',
        'event_category': 'Contact',
        'event_action': 'Navigation WhatsApp Click',
        'event_label': 'Navigation Contact',
        'click_id': '056914',
        'button_location': 'navigation',
        'lead_value': 12
      })
    }
    
    window.open(WHATSAPP_CONFIG.link, '_blank')
    setIsOpen(false) // Close mobile menu if open
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    )}>
      <Container>
        <div className="flex items-center justify-between h-18 lg:h-22 py-2">
          {/* Enhanced Logo */}
          <div 
            className="flex items-center cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => {
              if (isNotHomePage) {
                router.push('/')
              } else {
                handleNavClick('#home', 'home')
              }
            }}
          >
            <div className="flex items-center">
              {/* Company Logo */}
              <div className={cn(
                "w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center ml-3 transition-all duration-300 shadow-lg hover:scale-110 overflow-hidden",
                isScrolled 
                  ? "bg-white shadow-gray-200" 
                  : "bg-white shadow-white/30"
              )}>
                <img 
                  src="/logo.png" 
                  alt="Falcon Pro Digital Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
                />
              </div>
              <div className="transition-all duration-300">
                <h1 className={cn(
                  "text-xl lg:text-2xl font-bold transition-all duration-300",
                  isScrolled ? "text-gray-900" : "text-white"
                )}>
                  {COMPANY_INFO.name}
                </h1>
                <p className={cn(
                  "text-xs lg:text-sm leading-none transition-all duration-300 font-medium",
                  isScrolled ? "text-primary-600" : "text-white/80"
                )}>
                  فرع من Aptiro LLC
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {NAVIGATION_MENU.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={cn(
                  'relative px-4 py-2.5 text-base font-semibold transition-all duration-300 rounded-xl group',
                  activeSection === item.id
                    ? isScrolled 
                      ? 'text-primary-600 bg-primary-50 shadow-md' 
                      : 'text-white bg-white/20 backdrop-blur-sm shadow-lg'
                    : isScrolled
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className={cn(
                    "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-6 rounded-full transition-all duration-300",
                    isScrolled ? "bg-primary-600" : "bg-white"
                  )} />
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? "primary" : "secondary"}
              size="md"
              onClick={handleWhatsAppClick}
              className={cn(
                "transition-all duration-300 shadow-lg hover:shadow-xl",
                !isScrolled && "bg-white text-primary-600 hover:bg-gray-50 border-white"
              )}
            >
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              تواصل عبر الواتساب
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              "lg:hidden mobile-menu-button p-3 rounded-xl transition-all duration-300 shadow-md",
              isScrolled 
                ? "text-gray-700 hover:text-primary-600 hover:bg-gray-100 bg-white" 
                : "text-white hover:text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
            )}
            aria-label="Toggle menu"
          >
            <svg
              className={cn(
                "w-6 h-6 transition-all duration-300",
                isOpen && "rotate-90"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={cn(
          "lg:hidden mobile-menu absolute top-full left-0 right-0 transition-all duration-500 ease-in-out z-50",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-4 pt-4 pb-6 mt-4 space-y-3 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 mx-4 relative z-50">
            {/* Mobile Navigation Items */}
            {NAVIGATION_MENU.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                className={cn(
                  'w-full text-right px-6 py-4 text-lg font-semibold transition-all duration-300 rounded-xl relative group',
                  activeSection === item.id
                    ? 'text-white bg-primary-600 shadow-lg shadow-primary-600/30'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50 hover:shadow-md'
                )}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  transform: isOpen ? 'translateY(0)' : 'translateY(-20px)'
                }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {activeSection === item.id && (
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
            
            {/* Mobile CTA Section */}
            <div className="pt-6 border-t border-gray-200 space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-lg hover:shadow-xl"
                onClick={handleWhatsAppClick}
              >
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                تواصل عبر الواتساب
              </Button>
              
              {/* Company info in mobile */}
              <div className="text-center py-2">
                <p className="text-sm text-gray-500">
                  أكبر شركة رقمية في الخليج
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation
