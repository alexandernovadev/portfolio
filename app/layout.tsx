import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://alexandernova.pro'),
  title: 'Alexander Nova - React Engineer & Software Architect',
  description: 'Personal portfolio of Alexander Nova, a React Engineer and Software Architect with 8+ years of experience in modern web development, cloud technologies, and scalable applications. Expert in React, Node.js, TypeScript, and enterprise solutions.',
  keywords: [
    'React Engineer',
    'Node.js Developer', 
    'Software Architect',
    'TypeScript',
    'Full Stack Developer',
    'Web Development',
    'Cloud Technologies',
    'Enterprise Applications',
    'Portfolio',
    'Alexander Nova'
  ],
  authors: [{ name: 'Alexander Nova', url: 'https://alexandernova.pro' }],
  creator: 'Alexander Nova',
  publisher: 'Alexander Nova',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Alexander Nova - React Engineer & Software Architect',
    description: 'Personal portfolio showcasing modern web development projects and professional experience. Expert in React, Node.js, TypeScript, and cloud technologies.',
    url: 'https://alexandernova.pro',
    siteName: 'Alexander Nova Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logonovaDesing.png',
        width: 1200,
        height: 630,
        alt: 'Alexander Nova - React Engineer & Software Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexander Nova - React Engineer & Software Architect',
    description: 'Personal portfolio showcasing modern web development projects and professional experience.',
    images: ['/logonovaDesing.png'],
    creator: '@alexandernova',
  },
  alternates: {
    canonical: 'https://alexandernova.pro',
  },
  icons: {
    icon: '/logonovaDesing.png',
    shortcut: '/logonovaDesing.png',
    apple: '/logonovaDesing.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alexander Nova",
    "jobTitle": "React Engineer & Software Architect",
    "url": "https://alexandernova.pro",
    "sameAs": [
      "https://linkedin.com/in/alexanderdevmern/",
      "https://blog.alexandernova.pro"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "FPT"
    },
    "knowsAbout": [
      "React",
      "Node.js", 
      "TypeScript",
      "Web Development",
      "Cloud Technologies",
      "Software Architecture"
    ],
    "description": "React Engineer and Software Architect with 8+ years of experience in modern web development, cloud technologies, and scalable applications.",
    "image": "https://alexandernova.pro/logonovaDesing.png"
  }

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
