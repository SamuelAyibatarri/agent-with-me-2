import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Agent With Me",
  description: "Find, rent, or buy your next home easily and securely.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
