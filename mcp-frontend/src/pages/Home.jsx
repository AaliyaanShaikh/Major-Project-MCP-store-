import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Sample MCP tools data - in a real app, this would come from an API
  const mcpTools = [
    { id: 1, name: 'GitHub Integration', description: 'Connect AI agents with GitHub repositories, issues, and pull requests', category: 'Development', status: 'online', uptime: '99.8%' },
    { id: 2, name: 'Data Analytics', description: 'Advanced data processing and visualization tools for AI agents', category: 'Analytics', status: 'online', uptime: '99.9%' },
    { id: 3, name: 'AI Assistant', description: 'Intelligent task automation and workflow optimization', category: 'AI', status: 'maintenance', uptime: '98.5%' },
    { id: 4, name: 'Security Suite', description: 'Advanced security monitoring and threat detection', category: 'Security', status: 'offline', uptime: '95.2%' },
    { id: 5, name: 'Cloud Storage', description: 'Seamless file management and cloud integration', category: 'Storage', status: 'online', uptime: '99.7%' },
    { id: 6, name: 'Communication', description: 'Multi-channel messaging and notification systems', category: 'Communication', status: 'online', uptime: '99.6%' },
    { id: 7, name: 'Database Manager', description: 'Connect to various databases and manage data operations', category: 'Database', status: 'online', uptime: '99.5%' },
    { id: 8, name: 'API Gateway', description: 'Centralized API management and routing for AI agents', category: 'API', status: 'online', uptime: '99.4%' },
    { id: 9, name: 'File Processor', description: 'Process and transform files in various formats', category: 'File Processing', status: 'online', uptime: '99.3%' },
    { id: 10, name: 'Email Service', description: 'Send and receive emails through AI agents', category: 'Communication', status: 'online', uptime: '99.2%' }
  ]

  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)
    setIsSearching(true)
    
    // Simulate search delay
    setTimeout(() => {
      if (query.trim() === '') {
        setSearchResults([])
      } else {
        const filtered = mcpTools.filter(tool => 
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase()) ||
          tool.category.toLowerCase().includes(query.toLowerCase())
        )
        setSearchResults(filtered)
      }
      setIsSearching(false)
    }, 300)
  }

  // Handle search input
  const handleInputChange = (e) => {
    const value = e.target.value
    handleSearch(value)
    setShowSuggestions(value.length > 0)
  }

  // Handle search submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // In a real app, this would trigger a more comprehensive search
      console.log('Searching for:', searchQuery)
    }
  }

  // Main Content***/
  return (
    <div className="min-h-full bg-black">
      {/* Spline Scene - Standalone */}
      <div className="h-screen w-full">
        <Spline scene="https://prod.spline.design/ZGx9q1YuEXk1eXYP/scene.splinecode" />
      </div>

      {/* Main Content*/}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Welcome Section with Scroll Animation */}
          <div 
            ref={welcomeRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl font-bold text-gray-400 mb-4">Welcome to MCP Store</h1>
            <p className="text-xl text-gray-600 mb-8">Directory of awesome MCP servers and clients to connect AI agents with your favorite tools.</p>
            
            {/* Connect AI Agents Section */}
            <div className="relative mb-16">
              {/* Premium Dark Container */}
              <div className="relative w-full bg-gradient-to-br from-black via-gray-900/80 to-black rounded-3xl border border-gray-800/50 overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Sophisticated Background Effects */}
                <div className="absolute inset-0">
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* Animated Orbs */}
                  <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
                  
                  {/* Subtle Light Rays */}
                  <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-600/20 to-transparent"></div>
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/20 to-transparent"></div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-16">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Premium Content */}
                    <div className="text-center lg:text-left">
                      {/* Status Badge */}
                      <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-gray-600/30 backdrop-blur-sm">
                        <div className="relative">
                          <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-3 h-3 bg-gray-400 rounded-full animate-ping opacity-30"></div>
                        </div>
                        <span className="text-gray-300 text-sm font-bold tracking-wider">SYSTEM ACTIVE</span>
                      </div>
                      
                      {/* Main Title */}
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Connect AI Agents
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                        Seamlessly integrate AI agents with 150+ powerful tools through our advanced MCP (Model Context Protocol) infrastructure.
                      </p>
                      
                      {/* Feature Pills - Dark Theme */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-semibold border border-gray-600/30 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
                          Real-time Sync
                        </span>
                        <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-semibold border border-gray-600/30 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
                          Secure API
                        </span>
                        <span className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-semibold border border-gray-600/30 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300">
                          Auto-Scale
                        </span>
                      </div>
                    </div>
                    
                    {/* Right Side - Sophisticated Visual */}
                    <div className="relative">
                      {/* Central Dark Hub */}
                      <div className="relative mx-auto w-56 h-56 flex items-center justify-center">
                        {/* Outer Dark Rings */}
                        <div className="absolute inset-0 border-2 border-gray-700/40 rounded-full animate-spin-slow"></div>
                        <div className="absolute inset-4 border-2 border-gray-600/30 rounded-full animate-spin-reverse"></div>
                        <div className="absolute inset-8 border-2 border-gray-500/20 rounded-full animate-spin-slow"></div>
                        
                        {/* Central Dark Hub */}
                        <div className="relative z-10 w-36 h-36 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-full flex items-center justify-center shadow-2xl border border-gray-600/30">
                          <div className="w-24 h-24 bg-gray-900/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
                            <span className="text-5xl filter drop-shadow-lg">🔗</span>
                          </div>
                        </div>
                        
                        {/* Floating Dark Nodes */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 w-8 h-8 bg-gray-600 rounded-full animate-bounce shadow-xl border border-gray-500/30"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 w-8 h-8 bg-gray-600 rounded-full animate-bounce shadow-xl border border-gray-500/30" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-8 h-8 bg-gray-600 rounded-full animate-bounce shadow-xl border border-gray-500/30" style={{animationDelay: '1s'}}></div>
                        <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-8 h-8 bg-gray-600 rounded-full animate-bounce shadow-xl border border-gray-500/30" style={{animationDelay: '1.5s'}}></div>
                      </div>
                      
                      {/* Dark Stats Display */}
                      <div className="mt-12 grid grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
                          <div className="text-2xl font-bold text-white">150+</div>
                          <div className="text-xs text-gray-500 font-semibold">Tools</div>
                        </div>
                        <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
                          <div className="text-2xl font-bold text-white">99.9%</div>
                          <div className="text-xs text-gray-500 font-semibold">Uptime</div>
                        </div>
                        <div className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
                          <div className="text-2xl font-bold text-white">24/7</div>
                          <div className="text-xs text-gray-500 font-semibold">Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Dark Info Bar */}
                  <div className="mt-12 pt-8 border-t border-gray-800/50">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold">Enterprise Ready</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold">Open Source</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold">Community Driven</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Get Started and Learn More Buttons */}
            <div className="flex gap-4 justify-center mb-22">
              <Link 
                to="/sign" 
                className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-gray-600/30"
              >
                Get Started
              </Link>
              <Link 
                to="/info" 
                className="px-6 py-3 bg-gray-900/50 text-gray-300 border border-gray-700/50 rounded-xl hover:bg-gray-800/50 hover:text-white transition-all duration-200 font-semibold backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* MCP Tools Store Section */}
          <div className="text-center mb-16 mt-20">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">LIVE</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MCP Tools Marketplace
            </h2>
            <p className="text-xl text-gray-300 mb-8">Discover and connect with powerful AI tools</p>
            
            {/* Stats Bar with Counting Animation */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center" ref={toolsCount.ref}>
                <div className="text-2xl font-bold text-white">
                  {toolsCount.count}+
                </div>
                <div className="text-sm text-gray-400">Available Tools</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center" ref={uptimeCount.ref}>
                <div className="text-2xl font-bold text-white">
                  {uptimeCount.count.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="w-px h-8 bg-gray-700"></div>
              <div className="text-center" ref={supportCount.ref}>
                <div className="text-2xl font-bold text-white">
                  {supportCount.count}/7
                </div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Featured MCP Tools */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Featured MCP Tools</h3>
              <p className="text-gray-400">Handpicked tools for maximum productivity</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tool Card 1 */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">GitHub Integration</h4>
                  <p className="text-gray-400 text-sm">Connect AI agents with GitHub repositories, issues, and pull requests</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm font-medium">Online</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">99.8% uptime</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>

              {/* Tool Card 2 */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Data Analytics</h4>
                  <p className="text-gray-400 text-sm">Advanced data processing and visualization tools for AI agents</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm font-medium">Online</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">99.9% uptime</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-green-600 hover:to-teal-700 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>

              {/* Tool Card 3 */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">AI Assistant</h4>
                  <p className="text-gray-400 text-sm">Intelligent task automation and workflow optimization</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-sm font-medium">Maintenance</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">98.5% uptime</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-orange-700 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>

              {/* Tool Card 4 */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Security Suite</h4>
                  <p className="text-gray-400 text-sm">Advanced security monitoring and threat detection</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-sm font-medium">Offline</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">95.2% uptime</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>

              {/* Tool Card 5 */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">☁️</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Cloud Storage</h4>
                  <p className="text-gray-400 text-sm">Seamless file management and cloud integration</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm font-medium">Online</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">99.7% uptime</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>

              {/* Tool Card 6 */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Communication</h4>
                  <p className="text-gray-400 text-sm">Multi-channel messaging and notification systems</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400 text-sm font-medium">Online</span>
                    <span className="text-gray-500 text-xs">•</span>
                    <span className="text-gray-400 text-xs">99.6% uptime</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg text-sm font-medium hover:from-pink-600 hover:to-rose-700 transition-all duration-200">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* View All Tools Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-gray-600/30">
                View All 150+ Tools
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Fast Deployment</h3>
              <p className="text-gray-400">Deploy your applications quickly and efficiently with our optimized infrastructure</p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Monitoring</h3>
              <p className="text-gray-400">Monitor your servers with real-time analytics and comprehensive dashboards</p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Secure & Reliable</h3>
              <p className="text-gray-400">Enterprise-grade security and reliability with 99.9% uptime guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
