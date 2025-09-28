import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our services? Need technical support? 
              We're here to help! Reach out to us using the form or contact information below.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">📧</div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">support@mcpstore.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">📞</div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">📍</div>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="text-blue-600 mr-3">⏰</div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
