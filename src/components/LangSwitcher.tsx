'use client'

import { useState, useEffect } from 'react'
import { Globe, ChevronDown } from 'lucide-react'

const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')

  // Detect device language on component mount
  useEffect(() => {
    const detectLanguage = () => {
      if (typeof window !== 'undefined') {
        // First, check if user has a saved preference
        const savedLang = localStorage.getItem('preferred-language')
        
        let finalLang = 'en' // default fallback
        
        if (savedLang && ['en', 'ar'].includes(savedLang)) {
          // Use saved preference
          finalLang = savedLang
          console.log('Using saved language preference:', savedLang)
        } else {
          // Auto-detect from browser
          const browserLang = navigator.language || navigator.languages?.[0] || 'en'
          
          // Check if browser language is Arabic or from Arabic-speaking countries
          const arabicLanguages = [
            'ar', 'ar-SA', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 
            'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-OM', 
            'ar-QA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-YE'
          ]
          
          const isArabic = arabicLanguages.some(lang => 
            browserLang.toLowerCase().startsWith(lang.toLowerCase())
          )
          
          finalLang = isArabic ? 'ar' : 'en'
          console.log('Auto-detected browser language:', browserLang, '→', finalLang)
        }
        
        // Set the determined language
        setCurrentLang(finalLang)
        
        // Apply RTL/LTR to document
        document.documentElement.dir = finalLang === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.lang = finalLang === 'ar' ? 'ar-SA' : 'en-US'
        
        // Add language class to body for CSS targeting
        document.body.classList.remove('lang-en', 'lang-ar')
        document.body.classList.add(`lang-${finalLang}`)
        
        console.log('Final language set to:', finalLang)
      }
    }
    
    detectLanguage()
  }, [])

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ]

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsOpen(false)
    
    // Apply RTL/LTR to document
    document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = langCode === 'ar' ? 'ar-SA' : 'en-US'
    
    // Update body class for CSS targeting
    document.body.classList.remove('lang-en', 'lang-ar')
    document.body.classList.add(`lang-${langCode}`)
    
    // Store language preference in localStorage
    localStorage.setItem('preferred-language', langCode)
    
    // Trigger a custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }))
    
    console.log('Language manually changed to:', langCode)
  }

  const currentLanguage = languages.find(lang => lang.code === currentLang)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
      >
        <Globe size={16} />
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-3 ${
                currentLang === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
              {currentLang === language.code && (
                <span className="ml-auto text-primary-500">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LangSwitcher
