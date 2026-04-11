import axios from 'axios';

const BASE_URL = "https://mcp-backend-oh48.onrender.com";
const RAG_AGENT_BASE_URL = 'https://mcp-rag-agent.onrender.com';

// axios instance with timeout (important — backend has cold starts on free tier)
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60 seconds
  headers: {
    'Content-Type': 'application/json'
  }
});

/** RAG agent on Render free tier — cold starts can exceed 60s */
const ragAgentClient = axios.create({
  baseURL: RAG_AGENT_BASE_URL,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Main semantic search — use this for the search bar
export const semanticSearch = async (query, topK = 5) => {
  try {
    const response = await apiClient.post('/api/search/semantic', {
      query: query,
      top_k: topK
    });
    return response.data;
  } catch (error) {
    console.error('Semantic search failed:', error);
    throw error;
  }
};

// Hybrid search — combines semantic + keyword
export const hybridSearch = async (query) => {
  try {
    const response = await apiClient.post('/api/search/hybrid', {
      query: query
    });
    return response.data;
  } catch (error) {
    console.error('Hybrid search failed:', error);
    throw error;
  }
};

// Health check — call this on app load to wake up the backend
export const checkBackendHealth = async () => {
  try {
    const response = await apiClient.get('/api/search/health');
    return response.data;
  } catch (error) {
    console.error('Backend health check failed:', error);
    return null;
  }
};

/**
 * Map one RAG `/agent/search` hit to the shape ServerCard expects.
 * @param {object} item
 * @param {number} index
 */
export function normalizeRagAnswerItem(item, index) {
  if (item == null) return { id: `rag-${index}`, name: 'Result', description: '' }
  if (typeof item === 'string') {
    return { id: `rag-${index}`, name: item.slice(0, 80), description: item }
  }
  const meta = item.metadata && typeof item.metadata === 'object' ? item.metadata : {}
  const name = meta.name || meta.title || `Match ${index + 1}`
  const description = typeof item.content === 'string' ? item.content : meta.description || ''
  const url = meta.url || meta.link || meta.homepage
  const tags = meta.topics || meta.categories || meta.tags
  const category =
    Array.isArray(meta.categories) && meta.categories.length
      ? meta.categories[0]
      : typeof meta.category === 'string'
        ? meta.category
        : undefined

  const id =
    (typeof url === 'string' && url) || (typeof name === 'string' && name)
      ? `${String(name)}-${index}`
      : `rag-${index}`

  return {
    id,
    name,
    description,
    url,
    category,
    tags: Array.isArray(tags) ? tags : undefined,
    score: typeof item.score === 'number' ? item.score : undefined,
  }
}

/** POST { query } → normalized list for the directory UI */
export const ragAgentSearch = async (query) => {
  const q = String(query ?? '').trim()
  if (!q) return []

  const response = await ragAgentClient.post('/agent/search', { query: q })
  const data = response.data

  if (!data || data.success !== true) {
    const msg = data && (data.message || data.error)
    throw new Error(msg || 'RAG search was not successful')
  }

  const answers = Array.isArray(data.answer) ? data.answer : []
  return answers.map(normalizeRagAnswerItem)
}

/** Ping root to wake Render instance (optional warm-up) */
export const checkRagAgentHealth = async () => {
  try {
    const response = await ragAgentClient.get('/', { timeout: 30000 })
    return response.data
  } catch (error) {
    console.error('RAG agent health check failed:', error)
    return null
  }
}
