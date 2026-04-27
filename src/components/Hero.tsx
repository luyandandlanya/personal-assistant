'use client'

import { useEffect, useState } from 'react'

const ROLES = [
  'Data Analyst',
  'Automation Engineer',
  'PowerShell Developer',
  'Python Scripter',
  'Process Optimiser',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = ROLES[roleIndex]
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < role.length) {
      timer = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 90)
    } else if (!isDeleting && displayed.length === role.length) {
      timer = setTimeout(() => setIsDeleting(true), 2400)
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/20 via-[#030712]/60 to-[#030712]" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/4 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border border-cyan-500/25 bg-cyan-500/5 text-cyan-400 text-sm font-mono animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 animate-pulse" />
          Open to opportunities · Pretoria, ZA
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-5 animate-fade-up leading-[1.05]">
          <span className="text-slate-100">Luyanda</span>
          <br />
          <span className="gradient-text glow-cyan-text">Ndlanya</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 mb-6 flex items-center justify-center animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-xl md:text-2xl font-mono text-slate-400">
            {'<'}{' '}
            <span className="text-cyan-400 font-semibold">{displayed}</span>
            <span className="text-cyan-400 animate-blink ml-0.5">|</span>
            {' '}
            {'/>'}
          </p>
        </div>

        {/* Tagline */}
        <p
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.25s' }}
        >
          Building automations that turn{' '}
          <span className="text-slate-200 font-medium">days into hours</span>. Turning raw data
          into <span className="text-slate-200 font-medium">decisions that drive business</span>.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-up"
          style={{ animationDelay: '0.35s' }}
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-slate-700 hover:border-cyan-500/60 text-slate-300 hover:text-cyan-400 font-medium rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get In Touch
          </a>
        </div>

        {/* Impact stats */}
        <div
          className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-12 animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { value: '12→1', label: 'days in reporting', title: 'Reporting compressed' },
            { value: '5×', label: 'device throughput', title: 'Setup concurrency' },
            { value: '76', label: 'tenants automated', title: 'Clients served' },
          ].map((stat) => (
            <div
              key={stat.title}
              className="py-4 px-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/20 transition-colors"
            >
              <div className="text-xl md:text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-mono leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social row */}
        <div
          className="flex justify-center items-center gap-6 animate-fade-up"
          style={{ animationDelay: '0.55s' }}
        >
          <a
            href="https://linkedin.com/in/luyanda-ndlanya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm font-mono"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span className="text-slate-800">|</span>
          <a
            href="mailto:luyandandlanya@gmail.com"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm font-mono"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 animate-bounce pointer-events-none">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
