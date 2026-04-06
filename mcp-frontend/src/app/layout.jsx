import './globals.css'
import ClientShell from './client-shell'

export const metadata = {
  title: 'MCP Store - Server Management Platform',
  description:
    'Directory of MCP servers and clients to connect AI agents with your favorite tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className="min-h-full bg-claude-bg text-neutral-200 antialiased"
        style={{
          backgroundColor: '#171717',
          color: '#e5e5e5',
          minHeight: '100vh',
        }}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
