'use client'

import { useState, useEffect } from 'react'
import { semanticSearch, checkBackendHealth } from '../api/mcpApi'
import ServerCard from './ServerCard'

const ServerList = ({ searchQuery }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkBackendHealth().then(() => {})
  }, [])

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') return

    const doSearch = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await semanticSearch(searchQuery)
        setResults(data.results || data || [])
      } catch (err) {
        setError('Search failed. The backend may be starting up — please try again in 30 seconds.')
      } finally {
        setLoading(false)
      }
    }

    doSearch()
  }, [searchQuery])

  if (loading)
    return <p className="text-center text-sm text-neutral-500">Searching…</p>
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
