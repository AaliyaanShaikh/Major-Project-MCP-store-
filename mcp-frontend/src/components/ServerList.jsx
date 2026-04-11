'use client'

import { useState, useEffect } from 'react'
import { ragAgentSearch, checkRagAgentHealth } from '../api/mcpApi'
import ServerCard from './ServerCard'

const ServerList = ({ searchQuery }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkRagAgentHealth().then(() => {})
  }, [])

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') return

    const doSearch = async () => {
      setLoading(true)
      setError(null)
      try {
        const items = await ragAgentSearch(searchQuery)
        setResults(items)
      } catch (err) {
        const detail = err?.response?.data?.message || err?.message
        setError(
          detail
            ? `Search failed: ${detail}`
            : 'Search failed. The RAG service may be waking up (first request can take a minute on free hosting) — try again shortly.',
        )
      } finally {
        setLoading(false)
      }
    }

    doSearch()
  }, [searchQuery])

  if (loading)
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-3 px-4 py-8 text-center">
        <span
          className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-neutral-300"
          aria-hidden
        />
        <p className="text-sm leading-relaxed text-neutral-400">
          Results come from the RAG agent at mcp-rag-agent.onrender.com — please wait.
        </p>
      </div>
    )
  if (error) return <p className="text-center text-sm text-amber-500/90">{error}</p>
  if (results.length === 0)
    return <p className="text-center text-sm text-neutral-500">No results found.</p>

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {results.map((server, index) => (
        <ServerCard key={server.id || index} server={server} />
      ))}
    </div>
  )
}

export default ServerList
