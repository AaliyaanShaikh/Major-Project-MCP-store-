import { Link } from 'react-router-dom'
import ServerList from '../components/ServerList'
import Spline from '@splinetool/react-spline/react'
import { useEffect, useRef, useState } from 'react'

// Custom hook for counting animation
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])
// Counting animation for stats
  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (end - start) + start)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration, start])

  return { count, ref }
}

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const welcomeRef = useRef(null)
  const searchContainerRef = useRef(null)
  
  // Search functionality state
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isZooming, setIsZooming] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  
  // Counting animations for stats
  const toolsCount = useCountUp(150, 2500)
  const uptimeCount = useCountUp(99.9, 2000, 0)
  const supportCount = useCountUp(24, 1500, 0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Handle clicking outside search container to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false)
        setIsSearchFocused(false)
      }
    }

    // Add event listener when suggestions are shown or search is focused
    if (showSuggestions || isSearchFocused) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSuggestions, isSearchFocused])

  // Prevent body scrolling when in focused mode
  useEffect(() => {
    if (isSearchFocused) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scrolling
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isSearchFocused])

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

  // Handle entering focused search mode
  const handleSearchFocus = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSearchFocused(true)
      setShowSuggestions(true)
    }, 300) // 300ms loading animation
  }

  // Handle exiting focused search mode
  const handleSearchBlur = () => {
    setIsSearchFocused(false)
    setShowSuggestions(false)
    setIsLoading(false)
  }

  // Check for speech recognition support
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setSpeechSupported(true)
    }
  }, [])

  // Handle speech recognition
  const handleSpeechRecognition = () => {
    if (!speechSupported) {
      alert('Speech recognition is not supported in this browser')
      return
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setSearchQuery(transcript)
      setShowSuggestions(true)
      handleSearch(transcript)
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognition.start()
  }

  // Main Content***/
  return (
    <>
      <style jsx>{`
      `}</style>
      <div className="min-h-full bg-black">
      {/* Focused Search Overlay */}
      {(isSearchFocused || isLoading) && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-4xl mx-auto px-4">
            {/* Exit Arrow */}
            <button
              onClick={handleSearchBlur}
              className="absolute top-8 right-8 w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-all duration-200 z-50"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Loading Animation */}
            {isLoading && (
              <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white text-lg animate-pulse">Loading...</p>
              </div>
            )}
            
            
            {/* Focused Search Interface */}
            {isSearchFocused && (
            <div className="text-center relative animate-in fade-in zoom-in-95 duration-300 ease-out">
              {/* Spline Background */}
              <div className="fixed inset-0 w-screen h-screen opacity-30 -z-10">
                <Spline
                  scene="https://prod.spline.design/ftkHqvGz6SXmWXdq/scene.splinecode" 
                />
              </div>
              <div className="relative z-10">
                <h1 className="text-5xl font-bold text-gray-400 mb-4 mt-38">
                  Ready when you are.
                </h1>
                <p className="text-xl text-gray-600 mb-8">Directory of awesome MCP servers and clients to connect AI agents with your favorite tools.</p>
              </div>
              
              {/* Search Bar Container */}
              <div ref={searchContainerRef} className="w-full max-w-4xl mx-auto relative z-10">
                <form onSubmit={handleSubmit} className="relative">
                  <div className="relative">
                    {/* Search Input */}
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                      placeholder="Ask anything"
                      className="w-full px-6 py-4 pl-16 pr-20 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-transparent backdrop-blur-sm text-lg"
                    />
                    
                    {/* Plus Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <button
                        type="button"
                        className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-600/50 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>

                    {/* Right Icons */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
                      {/* Microphone Icon */}
                      <button
                        type="button"
                        onClick={handleSpeechRecognition}
                        disabled={!speechSupported}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                          isListening 
                            ? 'bg-red-500/50 hover:bg-red-600/50' 
                            : speechSupported 
                              ? 'hover:bg-gray-700/50' 
                              : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <svg className={`w-5 h-5 ${isListening ? 'text-red-400' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </button>

                      {/* Sound Waves Icon */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-1 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Search Suggestions Dropdown */}
                {showSuggestions && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
                    {searchResults.map((tool) => (
                      <div
                        key={tool.id}
                        className="p-4 hover:bg-gray-700/50 cursor-pointer border-b border-gray-700/30 last:border-b-0 transition-colors"
                        onClick={() => {
                          setSearchQuery(tool.name)
                          setShowSuggestions(false)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-white font-medium mb-1">{tool.name}</h3>
                            <p className="text-gray-400 text-sm">{tool.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                                {tool.category}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                tool.status === 'online' ? 'bg-green-500/20 text-green-400' :
                                tool.status === 'maintenance' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {tool.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-400 text-xs">{tool.uptime} uptime</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* No Results Message */}
                {showSuggestions && searchQuery && searchResults.length === 0 && !isSearching && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 p-4">
                    <div className="text-center text-gray-400">
                      <p>No MCP tools found for "{searchQuery}"</p>
                      <p className="text-sm mt-1">Try searching for different keywords</p>
                    </div>
                  </div>
                )}

                {/* Loading State */}
                {isSearching && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 p-4">
                    <div className="flex items-center justify-center text-gray-400">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Searching...
                    </div>
                  </div>
                )}
              </div>
              
              {/* Quick Access Categories */}
              <div className="mt-12 w-full max-w-4xl mx-auto mb-16 relative z-10">
                <div className="text-center mb-6">
                  <p className="text-gray-400 text-sm">Popular categories</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Development', 'Analytics', 'AI', 'Security', 'Storage', 'Communication'].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSearchQuery(category)
                        handleSearch(category)
                        setShowSuggestions(true)
                      }}
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 transition-colors border border-gray-700/30"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      )}

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
            <h1 className="text-5xl font-bold text-gray-400 mb-4 mt-32">Ready when you are.</h1>
            <p className="text-xl text-gray-600 mb-8">Directory of awesome MCP servers and clients to connect AI agents with your favorite tools.</p>
            
            {/* Search Interface */}
            <div className="mb-16">
              {/* Search Bar Container */}
              <div ref={searchContainerRef} className="w-full max-w-4xl mx-auto relative cursor-pointer" onClick={handleSearchFocus}>
                <form onSubmit={handleSubmit} className="relative">
                  <div className="relative">
                    {/* Search Input */}
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleInputChange}
                      placeholder="Ask anything"
                      className="w-full px-6 py-4 pl-16 pr-20 bg-gray-800/50 border border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-transparent backdrop-blur-sm text-lg"
                    />
                    
                    {/* Plus Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <button
                        type="button"
                        className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center hover:bg-gray-600/50 transition-colors"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>

                    {/* Right Icons */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
                      {/* Microphone Icon */}
                      <button
                        type="button"
                        onClick={handleSpeechRecognition}
                        disabled={!speechSupported}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                          isListening 
                            ? 'bg-red-500/50 hover:bg-red-600/50' 
                            : speechSupported 
                              ? 'hover:bg-gray-700/50' 
                              : 'opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <svg className={`w-5 h-5 ${isListening ? 'text-red-400' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </button>

                      {/* Sound Waves Icon */}
                      <div className="w-8 h-8 flex items-center justify-center">
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-4 bg-white rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-1 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1 h-5 bg-white rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Search Suggestions Dropdown */}
                {showSuggestions && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
                    {searchResults.map((tool) => (
                      <div
                        key={tool.id}
                        className="p-4 hover:bg-gray-700/50 cursor-pointer border-b border-gray-700/30 last:border-b-0 transition-colors"
                        onClick={() => {
                          setSearchQuery(tool.name)
                          setShowSuggestions(false)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-white font-medium mb-1">{tool.name}</h3>
                            <p className="text-gray-400 text-sm">{tool.description}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                                {tool.category}
                              </span>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                tool.status === 'online' ? 'bg-green-500/20 text-green-400' :
                                tool.status === 'maintenance' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {tool.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-gray-400 text-xs">{tool.uptime} uptime</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* No Results Message */}
                {showSuggestions && searchQuery && searchResults.length === 0 && !isSearching && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 p-4">
                    <div className="text-center text-gray-400">
                      <p>No MCP tools found for "{searchQuery}"</p>
                      <p className="text-sm mt-1">Try searching for different keywords</p>
                    </div>
                  </div>
                )}

                {/* Loading State */}
                {isSearching && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-2xl z-50 p-4">
                    <div className="flex items-center justify-center text-gray-400">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Searching...
                    </div>
                  </div>
                )}
              </div>
              
              {/* Quick Access Categories */}
              <div className="mt-12 w-full max-w-4xl mx-auto mb-16 relative z-10">
                <div className="text-center mb-6">
                  <p className="text-gray-400 text-sm">Popular categories</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Development', 'Analytics', 'AI', 'Security', 'Storage', 'Communication'].map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSearchQuery(category)
                        handleSearch(category)
                        setShowSuggestions(true)
                      }}
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm hover:bg-gray-700/50 transition-colors border border-gray-700/30"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Get Started and Learn More Buttons */}
            {/*
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
            */}
          </div>

          {/* MCP Tools Store Section */}
          <div className="text-center mb-16 mt-48">
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
              <Link to="/resources" className="inline-block px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl border border-gray-600/30">
                View All 150+ Tools
              </Link>
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
    </>
  )
}

export default Home
