import { useState, useEffect } from 'react';
import { semanticSearch, checkBackendHealth } from '../api/mcpApi';
import ServerCard from './ServerCard';

const ServerList = ({ searchQuery }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [backendReady, setBackendReady] = useState(false);

  // Wake up backend on component mount
  useEffect(() => {
    checkBackendHealth().then(res => {
      if (res) setBackendReady(true);
    });
  }, []);

  // Trigger search when searchQuery changes
  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === '') return;

    const doSearch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await semanticSearch(searchQuery);
        // Adjust this depending on what Saniya's API returns:
        setResults(data.results || data || []);
      } catch (err) {
        setError("Search failed. The backend may be starting up — please try again in 30 seconds.");
      } finally {
        setLoading(false);
      }
    };

    doSearch();
  }, [searchQuery]);

  if (loading) return <p className="text-center text-gray-400">Searching...</p>;
  if (error) return <p className="text-center text-red-400">{error}</p>;
  if (results.length === 0) return <p className="text-center text-gray-400">No results found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((server, index) => (
        <ServerCard key={server.id || index} server={server} />
      ))}
    </div>
  );
};

export default ServerList;
