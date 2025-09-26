'use client'

import { useState, useEffect } from 'react'
import { WHATSAPP_CONFIG } from '@/lib/constants'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000) // Show after 2 seconds

    return () => clearTimeout(timer)
  }, [mounted])

  const handleClick = () => {
    // GTM DataLayer Event
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'whatsapp_click',
      click_id: '056914'
    });
    
    // Debug için console log
    console.log('🚀 WhatsApp Float Button - GTM Event Fired:', {
      event: 'whatsapp_click',
      click_id: '056914',
      location: 'floating'
    });
    
    // WhatsApp açılış işlemi
    window.open(WHATSAPP_CONFIG.link, '_blank')
  }

  // Don't render on server to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div 
      className={`
        fixed bottom-6 left-6 transition-all duration-500 pointer-events-auto
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
      `}
      style={{ 
        zIndex: 99999,
        position: 'fixed'
      }}
    >
      {/* Clean Tooltip - No Arrow */}
      {isHovered && (
        <div className="absolute bottom-full mb-2 right-0 bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
          تواصل معنا عبر الواتساب
        </div>
      )}
      
      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-wa-id="056914"
        className={`
          flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full
          shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-500
          focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer
          pointer-events-auto relative
          ${isHovered ? 'w-auto px-4' : ''}
        `}
        style={{
          boxShadow: '0 0 15px rgba(34, 197, 94, 0.4), 0 5px 20px rgba(0, 0, 0, 0.2)',
          zIndex: 100000,
          position: 'relative'
        }}
        aria-label="Contact us on WhatsApp"
        type="button"
      >
        {/* WhatsApp Icon */}
        <svg 
          className="w-7 h-7 flex-shrink-0" 
          fill="#ffffff"
          fillOpacity="1"
          viewBox="0 0 24 24"
          style={{
            filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4))',
            opacity: '1'
          }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
        
        {/* Expanded Text */}
        {isHovered && (
          <span className="mr-2 text-sm font-bold whitespace-nowrap">
            واتساب
          </span>
        )}
      </button>
      
      {/* Simple Pulse Ring */}
      <div 
        className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-25 pointer-events-none" 
        style={{
          animationDuration: '3s',
          zIndex: -1
        }}
      ></div>
    </div>
  )
}

export default WhatsAppFloat
