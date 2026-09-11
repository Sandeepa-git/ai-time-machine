import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Time Machine - Explore Historical Eras',
  description:
    'Travel through time with AI-powered historical experiences. Explore Ancient Egypt, Rome, Greece, and medieval Europe with immersive animations.',
  keywords: ['history', 'time machine', 'AI', 'interactive', 'educational'],
  authors: [{ name: 'Copilot' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}