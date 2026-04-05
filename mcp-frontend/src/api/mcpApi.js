import axios from 'axios';

const BASE_URL = "https://mcp-backend-oh48.onrender.com";

// axios instance with timeout (important — backend has cold starts on free tier)
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 60000, // 60 seconds
  headers: {
    'Content-Type': 'application/json'
  }
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
