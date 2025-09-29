import { useState, useEffect } from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className={`text-5xl md:text-6xl font-bold text-black mb-6 transition-all duration-1000 delay-200 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Get in Touch
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-400 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Ready to transform your business? Let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-600 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our MCP services? Need technical support? 
                  We're here to help! Reach out to us using any of the methods below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-gray-600 mb-1">support@mcpstore.com</p>
                      <p className="text-sm text-gray-500">24/7 technical assistance</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                      <p className="text-gray-600 mb-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-800 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <ContactForm />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact
