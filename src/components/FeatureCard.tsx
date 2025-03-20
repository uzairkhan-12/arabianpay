import React from 'react'
import { FeatureCardI } from '../../shared.interface'

const FeatureCard = ({svgCode, title, description}: FeatureCardI) => {
  return (
    <div className="p-6 bg-white/90 rounded-lg shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm">
            <div className="flex justify-center mb-4">
            <svg
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={svgCode}
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
  )
}

export default FeatureCard