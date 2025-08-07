'use client'

import { LucideIcon, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import Link from 'next/link'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: string
  link?: string
}

const ServiceCard = ({ icon: Icon, title, description, features, color, link }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { isRTL } = useTranslation()
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Header */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-r ${color} shadow-lg transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
          {title}
        </h3>
        
        <p className={`text-gray-600 mb-6 leading-relaxed ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
          {description}
        </p>

        {/* Learn More Button */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200 group/btn"
        >
          <span>{showDetails ? (isRTL ? 'عرض أقل' : 'Show Less') : (isRTL ? 'اعرف المزيد' : 'Learn More')}</span>
          <ArrowRight 
            size={16} 
            className={`ml-2 transform transition-all duration-200 group-hover/btn:translate-x-1 ${showDetails ? 'rotate-90' : ''}`} 
          />
        </button>
      </div>

      {/* Expandable Details */}
      <div className={`overflow-hidden transition-all duration-500 ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-8 pb-8 border-t border-gray-100">
          <div className="pt-6">
            <h5 className={`font-semibold text-gray-900 mb-4 ${isRTL ? 'text-right font-arabic' : 'text-left'}`}>
              {isRTL ? 'ما يتضمنه:' : 'What\'s Included:'}
            </h5>
            <ul className={`space-y-3 ${isRTL ? 'space-x-reverse' : ''}`}>
              {features.map((feature, index) => (
                <li key={index} className={`flex items-start ${isRTL ? 'space-x-3 space-x-reverse' : 'space-x-3'}`}>
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                  <span className={`text-gray-700 text-sm ${isRTL ? 'font-arabic text-right' : 'text-left'}`}>{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* View Details Button */}
            {link && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  href={link}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r ${color} hover:shadow-lg text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 font-arabic`}
                >
                  <span>{isRTL ? 'عرض التفاصيل الكاملة' : 'View Full Details'}</span>
                  <ArrowRight 
                    size={16} 
                    className={`${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-transform`} 
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
      
      {/* Corner Accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${color} opacity-10 rounded-2xl transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`}></div>
    </div>
  )
}

export default ServiceCard
