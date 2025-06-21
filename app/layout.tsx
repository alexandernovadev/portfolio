import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://alexandernova.pro'),
  title: 'Alexander Nova - React Engineer & Software Architect',
  description: 'Personal portfolio of Alexander Nova, a React Engineer and Software Architect with expertise in modern web development, cloud technologies, and scalable applications.',
  keywords: ['React', 'Node.js', 'TypeScript', 'Software Engineer', 'Full Stack Developer', 'Portfolio'],
  authors: [{ name: 'Alexander Nova' }],
  creator: 'Alexander Nova',
  openGraph: {
    title: 'Alexander Nova - React Engineer & Software Architect',
    description: 'Personal portfolio showcasing modern web development projects and professional experience.',
    type: 'website',
    images: ['/logonovaDesing.png'],
  },
  icons: {
    icon: '/logonovaDesing.png',
    shortcut: '/logonovaDesing.png',
    apple: '/logonovaDesing.png',
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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
