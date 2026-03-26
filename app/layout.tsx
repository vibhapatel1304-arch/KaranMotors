import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0e27',
}

export const metadata: Metadata = {
  title: 'Karan Motor - Professional Driving School | Premium Driver Training',
  description:
    'Master safe, confident driving with Karan Motor. Professional driving school offering 20-day standard and 1-week intensive courses. Expert instructors, modern vehicles, 98% success rate. Join 500+ trained students.',
  generator: 'v0.app',
  keywords:
    'driving school, driving lessons, professional driving training, learner courses, defensive driving, road safety',
  authors: [{ name: 'Karan Motor Private Training' }],
  openGraph: {
    type: 'website',
    url: 'https://karanmotor.com',
    title: 'Karan Motor - Professional Driving School',
    description:
      'Premium driving training courses for confident, safe drivers.',
    images: [
      {
        url: '/logo.png',
        width: 200,
        height: 200,
        alt: 'Karan Motor Logo',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
