import { useEffect, useState } from 'react'
import FAQAccordion from '../components/FAQAccordion'

const Info = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`container mx-auto px-4 py-8 transition-all duration-1000 transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-4xl font-bold text-gray-900 mb-8 text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          About MCP Store
        </h1>
        
        <div className={`prose prose-lg mx-auto mb-12 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className={`text-xl text-gray-600 mb-6 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            MCP Store is a comprehensive platform for server management, monitoring, and deployment. 
            We provide enterprise-grade solutions for businesses of all sizes.
          </p>
          
          <h2 className={`text-2xl font-semibold text-gray-900 mb-4 transition-all duration-1000 delay-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>Our Mission</h2>
          <p className={`text-gray-600 mb-6 transition-all duration-1000 delay-1500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            To simplify server management and provide reliable, scalable infrastructure solutions 
            that help businesses focus on what matters most - their core operations.
          </p>
          
          <h2 className={`text-2xl font-semibold text-gray-900 mb-4 transition-all duration-1000 delay-2000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>Key Features</h2>
          <ul className={`list-disc list-inside text-gray-600 mb-6 space-y-2 transition-all duration-1000 delay-2500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <li className="transition-all duration-500 delay-3000 transform hover:translate-x-2 hover:text-blue-600 hover:scale-105">Real-time server monitoring and analytics</li>
            <li className="transition-all duration-500 delay-3500 transform hover:translate-x-2 hover:text-blue-600 hover:scale-105">Automated deployment and scaling</li>
            <li className="transition-all duration-500 delay-4000 transform hover:translate-x-2 hover:text-blue-600 hover:scale-105">Advanced security and compliance features</li>
            <li className="transition-all duration-500 delay-4500 transform hover:translate-x-2 hover:text-blue-600 hover:scale-105">24/7 customer support</li>
            <li className="transition-all duration-500 delay-5000 transform hover:translate-x-2 hover:text-blue-600 hover:scale-105">Global infrastructure with multiple data centers</li>
            <li className="transition-all duration-500 delay-5500 transform hover:translate-x-2 hover:text-blue-600 hover:scale-105">Cost-effective pricing plans</li>
          </ul>
        </div>

        <div className={`mb-12 transition-all duration-1000 delay-6000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className={`text-2xl font-semibold text-gray-900 mb-6 transition-all duration-1000 delay-6500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>Frequently Asked Questions</h2>
          <div className={`transition-all duration-1000 delay-7000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <FAQAccordion />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
