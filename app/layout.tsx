import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Aspire International - HR Solutions & Talent Consulting",
  description:
    "Empowering Organizations Through People Excellence. Comprehensive HR solutions including recruitment, training, and consulting services.",
  generator: "v0.app",
  keywords: ["HR consulting", "recruitment", "talent acquisition", "training", "employee development", "HR advisory"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.ico",
        media: "(prefers-color-scheme: dark)",
      },
     
    ],
    apple: "/apple-touch-icon.png",
  },
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
