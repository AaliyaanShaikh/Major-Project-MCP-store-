const Resources = () => {
  const resources = [
    {
      title: "Getting Started Guide",
      description: "Learn how to set up your first server and deploy your applications",
      type: "Documentation",
      link: "#"
    },
    {
      title: "API Documentation",
      description: "Complete reference for our REST API and SDKs",
      type: "API",
      link: "#"
    },
    {
      title: "Best Practices",
      description: "Industry best practices for server management and security",
      type: "Guide",
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for common tasks",
      type: "Video",
      link: "#"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get help from the community",
      type: "Community",
      link: "#"
    },
    {
      title: "Status Page",
      description: "Real-time status of our services and infrastructure",
      type: "Status",
      link: "#"
    }
  ]

  const getTypeColor = (type) => {
    const colors = {
      Documentation: 'bg-blue-100 text-blue-800',
      API: 'bg-green-100 text-green-800',
      Guide: 'bg-purple-100 text-purple-800',
      Video: 'bg-red-100 text-red-800',
      Community: 'bg-yellow-100 text-yellow-800',
      Status: 'bg-gray-100 text-gray-800'
    }
    return colors[type] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Resources & Documentation
        </h1>
        
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Everything you need to get started with MCP Store. From quick start guides 
          to advanced tutorials, we've got you covered.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.type)}`}>
                  {resource.type}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>
              
              <a 
                href={resource.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need More Help?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default Resources
