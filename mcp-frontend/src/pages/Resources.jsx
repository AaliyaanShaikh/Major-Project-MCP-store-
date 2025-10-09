import { useState } from 'react'

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Developer Tools', 'API Development', 'Data Science & ML', 'Other', 'Productivity & Workflow']

  const mcpServers = [
    {
      id: 1,
      name: "Bright Data",
      logo: "🔵",
      rating: 1408,
      description: "Empowers AI agents to access, discover, and extract real-time web data, bypassing common web scraping challenges.",
      tag: "Official",
      category: "Data Science & ML"
    },
    {
      id: 2,
      name: "Firecrawl",
      logo: "🔥",
      rating: 4195,
      description: "Empowers LLMs with advanced web scraping capabilities for content extraction, data collection, and automation.",
      tag: "Web Scraping & Data Collection",
      category: "Developer Tools"
    },
    {
      id: 3,
      name: "ElevenLabs",
      logo: "🎵",
      rating: 1004,
      description: "Enables interaction with Text to Speech and audio processing APIs for MCP clients.",
      tag: "API Development",
      category: "API Development"
    },
    {
      id: 4,
      name: "Magic",
      logo: "✨",
      rating: 3775,
      description: "Generate modern UI components instantly from natural language descriptions within your development workflow.",
      tag: "Developer Tools",
      category: "Developer Tools"
    },
    {
      id: 5,
      name: "Browserbase",
      logo: "🌐",
      rating: 2693,
      description: "Enables LLMs to control cloud browsers for web interaction, data extraction, and task automation.",
      tag: "Browser Automation",
      category: "Developer Tools"
    },
    {
      id: 6,
      name: "Exa",
      logo: "🔍",
      rating: 2859,
      description: "Enables AI assistants like Claude to perform web searches using the Exa AI Search API.",
      tag: "API Development",
      category: "API Development"
    },
    {
      id: 7,
      name: "GitHub",
      logo: "🐙",
      rating: 5234,
      description: "Integrate GitHub repositories, issues, and pull requests directly into your AI workflow.",
      tag: "Developer Tools",
      category: "Developer Tools"
    },
    {
      id: 8,
      name: "Notion",
      logo: "📝",
      rating: 1892,
      description: "Connect your Notion workspace to AI agents for document management and knowledge retrieval.",
      tag: "Productivity & Workflow",
      category: "Productivity & Workflow"
    },
    {
      id: 9,
      name: "OpenAI",
      logo: "🤖",
      rating: 4567,
      description: "Access OpenAI's latest models and APIs through MCP for enhanced AI capabilities.",
      tag: "API Development",
      category: "API Development"
    }
  ]

  const filteredServers = mcpServers.filter(server => {
    const matchesSearch = server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         server.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || server.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTagColor = (tag) => {
    const colors = {
      'Official': 'bg-gray-700 text-gray-300',
      'Web Scraping & Data Collection': 'bg-blue-900 text-blue-300',
      'API Development': 'bg-green-900 text-green-300',
      'Developer Tools': 'bg-purple-900 text-purple-300',
      'Browser Automation': 'bg-orange-900 text-orange-300',
      'Productivity & Workflow': 'bg-pink-900 text-pink-300'
    }
    return colors[tag] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for MCP servers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-700 text-white'
                    : 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
            <button className="px-3 py-2 rounded-full bg-gray-800 text-gray-400 border border-gray-700 hover:bg-gray-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Official MCP Servers</h1>
            <button className="flex items-center text-blue-400 hover:text-blue-300 font-medium">
              View all official servers
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Server Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServers.map((server) => (
              <div key={server.id} className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 p-6 hover:shadow-md hover:border-gray-700 transition-all">
                {/* Logo */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-2xl mr-4">
                    {server.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{server.name}</h3>
                    <div className="flex items-center mt-1">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-400">{server.rating.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {server.description}
                </p>

                {/* Tag */}
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(server.tag)}`}>
                    {server.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredServers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No servers found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Load More Button */}
          {filteredServers.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gray-800 border border-gray-700 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Load More Servers
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Resources
