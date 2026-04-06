'use client'

import ServerList from '../components/ServerList'
import { useEffect, useRef, useState } from 'react'

function greetingForHour() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

const Home = () => {
  const searchContainerRef = useRef(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [activeQuery, setActiveQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)

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

  const suggestPanel =
    'absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-white/[0.08] bg-claude-surface/95 shadow-xl backdrop-blur-md'

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    if (showSuggestions) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showSuggestions])

  const handleSearch = (query) => {
    setSearchQuery(query)
    setIsSearching(true)
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

  const handleInputChange = (e) => {
    const value = e.target.value
    handleSearch(value)
    setShowSuggestions(value.length > 0)
  }

  const runLiveSearch = () => {
    const q = searchQuery.trim()
    if (q) setActiveQuery(q)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      runLiveSearch()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    runLiveSearch()
  }

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setSpeechSupported(true)
    }
  }, [])

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

    recognition.onstart = () => setIsListening(true)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setSearchQuery(transcript)
      setShowSuggestions(true)
      handleSearch(transcript)
      if (transcript.trim()) setActiveQuery(transcript.trim())
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.onend = () => setIsListening(false)

    recognition.start()
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col bg-claude-bg px-4 py-8 text-neutral-200 sm:px-6">
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center">
        <div className="mb-10 text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
            <svg className="h-7 w-7 shrink-0 text-[#e8a87c]" width={28} height={28} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.5l1.8 5.5h5.8l-4.7 3.4 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.7-3.4h5.8L12 2.5z" />
            </svg>
            <span>{greetingForHour()}, there</span>
          </p>
        </div>

        <div ref={searchContainerRef} className="relative w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="overflow-hidden rounded-2xl bg-claude-surface ring-1 ring-white/[0.06]">
              <label htmlFor="mcp-search" className="sr-only">
                Search MCP servers
              </label>
              <textarea
                id="mcp-search"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="How can I help you today?"
                rows={3}
                className="w-full resize-none border-0 bg-transparent px-4 pb-2 pt-4 text-[15px] leading-relaxed text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-0"
              />

              <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-3 py-2.5">
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition hover:bg-white/[0.06] hover:text-neutral-200"
                  aria-label="Add"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  <span className="hidden rounded-lg border border-white/[0.08] bg-claude-bg/80 px-2.5 py-1.5 text-xs text-neutral-400 sm:inline">
                    Semantic search
                    <span className="ml-1 text-neutral-600" aria-hidden>▾</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleSpeechRecognition}
                    disabled={!speechSupported}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      isListening
                        ? 'bg-red-500/15 text-red-300'
                        : speechSupported
                          ? 'text-neutral-400 hover:bg-white/[0.06]'
                          : 'cursor-not-allowed opacity-40'
                    }`}
                    aria-label="Voice input"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                  <div className="flex h-9 items-center gap-0.5 px-1" aria-hidden>
                    <span className="w-0.5 rounded-full bg-neutral-500" style={{ height: '10px' }} />
                    <span className="w-0.5 animate-pulse rounded-full bg-neutral-400" style={{ height: '16px' }} />
                    <span className="w-0.5 rounded-full bg-neutral-500" style={{ height: '8px' }} />
                    <span className="w-0.5 animate-pulse rounded-full bg-neutral-400" style={{ height: '14px', animationDelay: '0.15s' }} />
                  </div>
                </div>
              </div>
            </div>
          </form>

          {showSuggestions && searchResults.length > 0 && (
            <div className={suggestPanel}>
              {searchResults.map((tool) => (
                <div
                  key={tool.id}
                  role="button"
                  tabIndex={0}
                  className="cursor-pointer border-b border-white/[0.06] p-3.5 text-left transition last:border-b-0 hover:bg-white/[0.04]"
                  onClick={() => {
                    setSearchQuery(tool.name)
                    setShowSuggestions(false)
                    setActiveQuery(tool.name)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setSearchQuery(tool.name)
                      setShowSuggestions(false)
                      setActiveQuery(tool.name)
                    }
                  }}
                >
                  <div className="font-medium text-neutral-100">{tool.name}</div>
                  <div className="mt-0.5 text-xs text-neutral-500 line-clamp-2">{tool.description}</div>
                </div>
              ))}
            </div>
          )}

          {showSuggestions && searchQuery && searchResults.length === 0 && !isSearching && (
            <div className={`${suggestPanel} p-4 text-center text-sm text-neutral-500`}>
              No quick match for &ldquo;{searchQuery}&rdquo;. Press Enter to search the directory.
            </div>
          )}

          {isSearching && (
            <div className={`${suggestPanel} flex items-center justify-center gap-2 p-4 text-sm text-neutral-500`}>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/15 border-t-neutral-300" />
              Searching…
            </div>
          )}
        </div>

        <div className="mx-auto mt-4 w-full max-w-2xl rounded-full border border-white/[0.06] bg-claude-sidebar/90 px-4 py-2">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="text-neutral-500">Connect your tools to MCP Store</span>
            <div className="flex shrink-0 gap-1 text-sm opacity-85" aria-hidden>
              {['🔵', '📝', '🐙', '💬', '🤖', '📊'].map((e, i) => (
                <span key={i}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeQuery ? (
        <div className="mx-auto mt-12 w-full max-w-5xl border-t border-white/[0.06] pt-10">
          <h2 className="mb-6 text-center text-lg font-semibold text-neutral-300">Results</h2>
          <ServerList searchQuery={activeQuery} />
        </div>
      ) : null}
    </div>
  )
}

export default Home
