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

  const tagList = Array.isArray(tags)
    ? tags
    : tags
      ? String(tags)
          .split(/[;,]/)
          .map((t) => t.trim())
          .filter(Boolean)
      : []

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-claude-surface/50 p-5 transition hover:border-white/[0.14] hover:bg-claude-surface/80">
      <h3 className="font-medium text-neutral-100">{name}</h3>
      {displaySubtitle ? (
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-neutral-500">{displaySubtitle}</p>
      ) : null}

      {tagList.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tagList.map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="rounded-full border border-white/[0.06] bg-claude-bg px-2 py-0.5 text-xs text-neutral-400"
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
          className="mt-4 inline-block text-sm text-neutral-300 underline-offset-4 transition hover:text-white hover:underline"
        >
          View server →
        </a>
      )}

      {scorePercent != null && !Number.isNaN(scorePercent) && (
        <span className="mt-2 block text-xs text-neutral-500">
          Match: {scorePercent.toFixed(0)}%
        </span>
      )}
    </div>
  )
}

export default ServerCard
