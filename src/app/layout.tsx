import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luyanda Ndlanya | Automation & Systems Engineer',
  description: 'Automation and systems engineering portfolio: endpoint intelligence, IT operations, workflow automation, platform integrations and custom applications.',
  keywords: ['Automation Engineer', 'Systems Engineer', 'PowerShell', 'Rewst', 'N-central', 'Halo PSA', 'Cloudflare', 'Power BI', 'IT Operations', 'South Africa'],
  authors: [{ name: 'Luyanda Ndlanya' }],
  openGraph: {
    title: 'Luyanda Ndlanya | Automation & Systems Engineer',
    description: 'Engineering smarter systems for IT operations and digital workflows.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="scroll-smooth"><body>{children}</body></html>
}
