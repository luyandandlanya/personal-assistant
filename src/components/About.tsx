'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const stats = [
  { value: '2+', label: 'Years Experience', sub: 'data & automation' },
  { value: '76', label: 'Tenants', sub: 'reporting automated' },
  { value: '5×', label: 'Faster', sub: 'device provisioning' },
  { value: '3', label: 'Certifications', sub: 'Microsoft · Fortinet · Accenture' },
]

export default function About() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="about" ref={ref} className="relative py-28 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-animate className="mb-14">
          <span className="text-cyan-400 font-mono text-sm mb-3 block tracking-widest">
            01 // about
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Who I Am</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div data-animate className="space-y-5 text-slate-400 leading-relaxed text-[15px]">
            <p>
              I&apos;m a{' '}
              <span className="text-slate-200 font-medium">
                Data Analyst &amp; Automation Engineer
              </span>{' '}
              based in Pretoria, South Africa — currently at{' '}
              <span className="text-cyan-400 font-medium">First Technology Group</span>, one of
              South Africa&apos;s leading managed service providers.
            </p>
            <p>
              I build systems that{' '}
              <span className="text-slate-200">eliminate repetitive work</span>. Whether it&apos;s
              a device provisioning automation that simultaneously sets up five machines in the time
              it used to take for one, or a Python pipeline that compresses 12 days of manual
              reporting into a single automated run — I find the bottleneck and engineer it away.
            </p>
            <p>
              My work spans{' '}
              <span className="text-slate-200">IT automation</span>,{' '}
              <span className="text-slate-200">data analytics</span>, and{' '}
              <span className="text-slate-200">business intelligence</span> — backed by a BCom in
              Information Systems from UKZN and hands-on experience across real enterprise
              environments serving multiple clients at scale.
            </p>
            <p>
              I care about clean process design, measurable outcomes, and building tools that
              actually get used.
            </p>
          </div>

          {/* Stats grid */}
          <div data-animate className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5">
                <div className="text-2xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-slate-200">{s.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            ))}

            {/* Current role */}
            <div className="card p-5 col-span-2 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500 font-mono mb-1">currently at</div>
                <div className="text-cyan-400 font-semibold">First Technology Group</div>
                <div className="text-slate-400 text-sm mt-0.5">
                  Junior Data Analyst &amp; Automation Engineer L1
                </div>
              </div>
              <div className="shrink-0 w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
