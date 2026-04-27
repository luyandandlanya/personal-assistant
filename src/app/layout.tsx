import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luyanda Ndlanya | Data Analyst & Automation Engineer',
  description:
    'Portfolio of Luyanda Ndlanya — Data Analyst & Automation Engineer specialising in process optimisation, IT automation, and data visualisation. Based in Pretoria, South Africa.',
  keywords: [
    'Data Analyst',
    'Automation Engineer',
    'PowerShell',
    'Power BI',
    'Python',
    'N-Central',
    'Power Automate',
    'Pretoria',
    'South Africa',
  ],
  authors: [{ name: 'Luyanda Ndlanya' }],
  openGraph: {
    title: 'Luyanda Ndlanya | Data Analyst & Automation Engineer',
    description: 'Building automations that turn days into hours.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
