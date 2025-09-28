import { getServerStatus } from '../data/servers'

const ServerCard = ({ server }) => {
  const status = getServerStatus(server.status)
  
  const getStatusColor = (color) => {
    const colors = {
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      gray: 'bg-gray-100 text-gray-800'
    }
    return colors[color] || colors.gray
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{server.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status.color)}`}>
          {status.text}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{server.description}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Uptime:</span>
          <span className="text-sm font-medium text-gray-900">{server.uptime}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Location:</span>
          <span className="text-sm font-medium text-gray-900">{server.location}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Last Updated:</span>
          <span className="text-sm font-medium text-gray-900">
            {formatDate(server.lastUpdated)}
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${
            server.status === 'online' ? 'bg-green-500' :
            server.status === 'offline' ? 'bg-red-500' :
            server.status === 'maintenance' ? 'bg-yellow-500' : 'bg-gray-500'
          }`}></div>
          <span className="text-sm text-gray-600">
            {server.status === 'online' ? 'All systems operational' :
             server.status === 'offline' ? 'Service unavailable' :
             server.status === 'maintenance' ? 'Scheduled maintenance' : 'Status unknown'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ServerCard
