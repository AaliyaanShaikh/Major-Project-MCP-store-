import FAQAccordion from '../components/FAQAccordion'

const Info = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About MCP Store
        </h1>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-xl text-gray-600 mb-6">
            MCP Store is a comprehensive platform for server management, monitoring, and deployment. 
            We provide enterprise-grade solutions for businesses of all sizes.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To simplify server management and provide reliable, scalable infrastructure solutions 
            that help businesses focus on what matters most - their core operations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Real-time server monitoring and analytics</li>
            <li>Automated deployment and scaling</li>
            <li>Advanced security and compliance features</li>
            <li>24/7 customer support</li>
            <li>Global infrastructure with multiple data centers</li>
            <li>Cost-effective pricing plans</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion />
        </div>
      </div>
    </div>
  )
}

export default Info
