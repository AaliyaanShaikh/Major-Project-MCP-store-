'use client'

import { useState } from 'react'

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Developer Tools',
    'API Development',
    'Data Science & ML',
    'Other',
    'Productivity & Workflow',
  ]

  const mcpServers = [
    {
      id: 1,
      name: 'Bright Data',
      logo: '🔵',
      rating: 1408,
      description:
        'Empowers AI agents to access, discover, and extract real-time web data, bypassing common web scraping challenges.',
      tag: 'Official',
      category: 'Data Science & ML',
    },
    {
      id: 2,
      name: 'Firecrawl',
      logo: '🔥',
      rating: 4195,
      description:
        'Empowers LLMs with advanced web scraping capabilities for content extraction, data collection, and automation.',
      tag: 'Web Scraping & Data Collection',
      category: 'Developer Tools',
    },
    {
      id: 3,
      name: 'ElevenLabs',
      logo: '🎵',
      rating: 1004,
      description: 'Enables interaction with Text to Speech and audio processing APIs for MCP clients.',
      tag: 'API Development',
      category: 'API Development',
    },
    {
      id: 4,
      name: 'Magic',
      logo: '✨',
      rating: 3775,
      description:
        'Generate modern UI components instantly from natural language descriptions within your development workflow.',
      tag: 'Developer Tools',
      category: 'Developer Tools',
    },
    {
      id: 5,
      name: 'Browserbase',
      logo: '🌐',
      rating: 2693,
      description:
        'Enables LLMs to control cloud browsers for web interaction, data extraction, and task automation.',
      tag: 'Browser Automation',
      category: 'Developer Tools',
    },
    {
      id: 6,
      name: 'Exa',
      logo: '🔍',
      rating: 2859,
      description: 'Enables AI assistants like Claude to perform web searches using the Exa AI Search API.',
      tag: 'API Development',
      category: 'API Development',
    },
    {
      id: 7,
      name: 'GitHub',
      logo: '🐙',
      rating: 5234,
      description: 'Integrate GitHub repositories, issues, and pull requests directly into your AI workflow.',
      tag: 'Developer Tools',
      category: 'Developer Tools',
    },
    {
      id: 8,
      name: 'Notion',
      logo: '📝',
      rating: 1892,
      description: 'Connect your Notion workspace to AI agents for document management and knowledge retrieval.',
      tag: 'Productivity & Workflow',
      category: 'Productivity & Workflow',
    },
    {
      id: 9,
      name: 'OpenAI',
      logo: '🤖',
      rating: 4567,
      description: "Access OpenAI's latest models and APIs through MCP for enhanced AI capabilities.",
      tag: 'API Development',
      category: 'API Development',
    },
  ]

  const filteredServers = mcpServers.filter((server) => {
    const matchesSearch =
      server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      server.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || server.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getTagColor = (tag) => {
    const colors = {
      Official: 'border-white/[0.08] bg-white/[0.04] text-neutral-400',
      'Web Scraping & Data Collection': 'border-blue-500/20 bg-blue-500/10 text-blue-300/90',
      'API Development': 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300/90',
      'Developer Tools': 'border-violet-500/20 bg-violet-500/10 text-violet-300/90',
      'Browser Automation': 'border-amber-500/20 bg-amber-500/10 text-amber-300/90',
      'Productivity & Workflow': 'border-rose-500/20 bg-rose-500/10 text-rose-300/90',
    }
    return colors[tag] || 'border-white/[0.08] bg-white/[0.04] text-neutral-400'
  }

  return (
    <div className="min-h-[60vh] bg-claude-bg">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-10 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search MCP servers…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mcp-omnibox !py-3.5 pl-12 pr-4 text-sm"
            />
          </div>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                selectedCategory === category
                  ? 'border-white/[0.14] bg-white/[0.08] text-neutral-100'
                  : 'border-white/[0.06] bg-transparent text-neutral-500 hover:border-white/[0.1] hover:text-neutral-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h1 className="text-3xl font-bold text-neutral-100">Official MCP servers</h1>
          <button type="button" className="text-sm text-neutral-500 transition hover:text-neutral-300">
            View all official servers →
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredServers.map((server) => (
            <div
              key={server.id}
              className="rounded-2xl border border-white/[0.06] bg-claude-surface/40 p-6 transition hover:border-white/[0.12]"
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-claude-bg text-2xl">
                  {server.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-medium text-neutral-100">{server.name}</h3>
                  <div className="mt-1 flex items-center gap-1 text-sm text-neutral-600">
                    <svg className="h-3.5 w-3.5 text-[#e8a87c]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {server.rating.toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="line-clamp-3 text-sm text-neutral-500">{server.description}</p>
              <div className="mt-4">
                <span className={`inline-block rounded-full border px-3 py-1 text-xs ${getTagColor(server.tag)}`}>
                  {server.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredServers.length === 0 && (
          <div className="py-16 text-center">
            <div className="text-4xl opacity-40">🔍</div>
            <h3 className="mt-4 text-xl font-semibold text-neutral-200">No servers found</h3>
            <p className="mt-2 text-sm text-neutral-500">Try a different search or filter</p>
          </div>
        )}

        {filteredServers.length > 0 && (
          <div className="mt-12 text-center">
            <button
              type="button"
              className="rounded-xl border border-white/[0.1] px-6 py-3 text-sm text-neutral-400 transition hover:bg-white/[0.05] hover:text-neutral-200"
            >
              Load more servers
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Resources
