'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatPrice } from '@/lib/utils'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  features: readonly string[]
  price: number
  popular?: boolean
  icon: string
  image?: string
  delay?: number
}

const ServiceCard = ({ 
  id,
  title, 
  description, 
  features, 
  price,
  popular = false,
  icon,
  image,
  delay = 0
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)



  return (
    <div 
      className={`
        relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 transform hover:-translate-y-1
        border border-gray-200 h-[620px] flex flex-col
        ${popular ? 'ring-2 ring-blue-500' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 -right-3 z-50">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            الأكثر طلباً ⭐
          </span>
        </div>
      )}

      {/* Image Header - Lazy Loading Optimized */}
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Floating Icon */}
          <div className="absolute bottom-4 right-4">
            <div className={`
              w-12 h-12 rounded-full flex items-center justify-center text-2xl
              bg-white/90 backdrop-blur-sm shadow-lg
              ${popular ? 'text-blue-600' : 'text-gray-700'}
            `}>
              {icon}
            </div>
          </div>
        </div>
      )}

      {/* Header Section for cards without images */}
      <div className={`relative ${image ? 'p-6 pt-4' : 'p-6 pb-4'}`}>
        {/* Icon for cards without image */}
        {!image && (
          <div className="text-center mb-4">
            <div className={`
              inline-flex items-center justify-center w-16 h-16 rounded-full text-3xl
              ${popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}
              transition-transform duration-300
              ${isHovered ? 'scale-110' : ''}
            `}>
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
          {title}
        </h3>

        {/* Price */}
        <div className="text-center">
          <div className="text-3xl font-black text-blue-600 mb-1">
            {formatPrice(price)}
          </div>
          <div className="text-sm font-semibold text-green-600">
            دفعة واحدة
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 pb-6 flex flex-col">
        {/* Description */}
        <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="flex-1 mb-6">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <span className="text-green-500 mr-2 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button - Always at bottom */}
        <div className="mt-auto">
          <Link 
            href={`/services/${id}`} 
            className={`
              block w-full text-center px-6 py-3 rounded-xl font-bold
              transition-all duration-300 hover:shadow-lg
              ${popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }
            `}
          >
            تفاصيل الخدمة
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard