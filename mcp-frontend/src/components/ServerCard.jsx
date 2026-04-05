'use client'

const ServerCard = ({ server }) => {
  const name = server.name ?? server.title ?? 'Untitled'
  const description =
    server.description ?? server.summary ?? server.text ?? server.content ?? ''
  const category = server.category ?? server.type ?? ''
  const url = server.url ?? server.link ?? server.href ?? server.homepage ?? server.repository_url
  const rawScore = server.score ?? server.similarity ?? server.match_score
  const tags = server.tags ?? server.tag_list ?? server.labels

  const displaySubtitle = description || category || ''

  const scorePercent =
    rawScore != null && rawScore !== ''
      ? rawScore > 1
        ? Math.min(100, Number(rawScore))
        : Number(rawScore) * 100
      : null

  const tagList = Array.isArray(tags) ? tags : tags ? String(tags).split(/[;,]/).map((t) => t.trim()).filter(Boolean) : []

  return (
    <div className="p-4 rounded-xl border border-gray-700 bg-gray-900 hover:border-blue-500 transition">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
      {displaySubtitle ? (
        <p className="text-gray-400 text-sm mt-1 line-clamp-4">{displaySubtitle}</p>
      ) : null}

      {tagList.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tagList.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-300 border border-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 text-sm mt-2 inline-block hover:underline"
        >
          View Server →
        </a>
      )}

      {scorePercent != null && !Number.isNaN(scorePercent) && (
        <span className="text-xs text-green-400 mt-2 block">
          Match score: {scorePercent.toFixed(0)}%
        </span>
      )}
    </div>
  )
}

export default ServerCard
