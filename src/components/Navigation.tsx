'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-slate-800/50 shadow-xl shadow-black/20'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono font-bold text-lg text-cyan-400 hover:text-cyan-300 transition-colors tracking-widest"
        >
          LN<span className="text-slate-600">_</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:luyandandlanya@gmail.com"
            className="px-4 py-2 text-sm font-semibold border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-b border-slate-800' : 'max-h-0'
        }`}
      >
        <div className="bg-[#0a0f1e] px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:luyandandlanya@gmail.com"
            className="text-center py-2.5 border border-cyan-500/50 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/10 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
