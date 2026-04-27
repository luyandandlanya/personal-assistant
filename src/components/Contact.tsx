'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'luyandandlanya@gmail.com',
    href: 'mailto:luyandandlanya@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'cyan',
  },
  {
    label: 'Phone',
    value: '061 191 3557',
    href: 'tel:+27611913557',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    label: 'LinkedIn',
    value: 'luyanda-ndlanya',
    href: 'https://linkedin.com/in/luyanda-ndlanya',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    label: 'Location',
    value: 'Pretoria, South Africa',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'emerald',
  },
]

const iconBg: Record<string, string> = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
}

export default function Contact() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 bg-[#060b14]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-animate className="mb-14 text-center">
          <span className="text-cyan-400 font-mono text-sm mb-3 block tracking-widest">
            06 // contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Whether you&apos;re looking to automate a workflow, build a data pipeline, or just want
            to talk shop — my inbox is open.
          </p>
        </div>

        {/* Contact cards */}
        <div
          data-animate
          data-animate-delay="100"
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {CONTACT_ITEMS.map((item) => {
            const inner = (
              <div className="flex flex-col items-center text-center p-5 gap-3">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${iconBg[item.color]}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-slate-200 break-all">{item.value}</div>
                </div>
              </div>
            )

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card hover:border-cyan-500/30 block"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className="card">
                {inner}
              </div>
            )
          })}
        </div>

        {/* CTA button */}
        <div data-animate data-animate-delay="200" className="text-center mb-20">
          <a
            href="mailto:luyandandlanya@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/25 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send a Message
          </a>
        </div>

        {/* Footer */}
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-600 text-sm font-mono">
          <span>© 2025 Luyanda Ndlanya. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with
            <span className="text-cyan-500/60">Next.js</span>
            &amp;
            <span className="text-cyan-500/60">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </section>
  )
}
