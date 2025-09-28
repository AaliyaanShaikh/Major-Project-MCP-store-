export const servers = [
  {
    id: 1,
    name: "Development Server",
    status: "online",
    description: "Main development environment for testing and development",
    uptime: "99.9%",
    location: "US East",
    lastUpdated: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "Production Server",
    status: "online",
    description: "Live production environment serving end users",
    uptime: "99.95%",
    location: "US West",
    lastUpdated: "2024-01-15T10:29:00Z"
  },
  {
    id: 3,
    name: "Staging Server",
    status: "maintenance",
    description: "Pre-production testing environment",
    uptime: "98.5%",
    location: "EU Central",
    lastUpdated: "2024-01-15T09:45:00Z"
  },
  {
    id: 4,
    name: "Backup Server",
    status: "offline",
    description: "Backup and disaster recovery server",
    uptime: "95.2%",
    location: "Asia Pacific",
    lastUpdated: "2024-01-14T18:20:00Z"
  }
]

export const getServerStatus = (status) => {
  const statusMap = {
    online: { color: 'green', text: 'Online' },
    offline: { color: 'red', text: 'Offline' },
    maintenance: { color: 'yellow', text: 'Maintenance' }
  }
  return statusMap[status] || { color: 'gray', text: 'Unknown' }
}
