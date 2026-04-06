import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lyset - Algorithmic Trading Systems',
  description: 'Building high-performance trading bots for crypto markets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
