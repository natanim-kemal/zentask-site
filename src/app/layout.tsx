import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zentask.natanim.dev'),
  title: 'ZenTask — Turn intention into finished work',
  description:
    'ZenTask is a quiet task and focus system: capture the thought, protect the hour, and keep a record of what actually got done.',
  openGraph: {
    title: 'ZenTask — Turn intention into finished work',
    description:
      'A quiet system for loud minds. Capture, focus, keep a rhythm, and finish with evidence.',
    url: 'https://zentask.natanim.dev',
    siteName: 'ZenTask',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#05060a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
