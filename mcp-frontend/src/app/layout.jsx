import './globals.css'
import ClientShell from './client-shell'

export const metadata = {
  title: 'MCP Store - Server Management Platform',
  description:
    'Directory of MCP servers and clients to connect AI agents with your favorite tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
