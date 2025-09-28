import { servers } from '../data/servers'
import ServerCard from './ServerCard'

const ServerList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servers.map((server) => (
        <ServerCard key={server.id} server={server} />
      ))}
    </div>
  )
}

export default ServerList
