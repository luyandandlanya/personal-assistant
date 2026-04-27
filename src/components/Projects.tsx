'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const PROJECTS = [
  {
    id: 'oobe',
    badge: 'IT Automation',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    title: 'OOBE Device Setup Automation',
    subtitle: 'Zero-touch Windows provisioning at scale',
    description:
      'Engineered an end-to-end automation that provisions any Windows 10/11 laptop, desktop, or workstation from bare metal to production-ready in under 90 minutes. Uses a custom PPKG built with Windows Configuration Designer — embedded with PowerShell and Batch scripts — integrated with N-Central for remote push execution.',
    problems: [
      { label: 'Time per device', before: '2–3 hrs', after: '1–1.5 hrs' },
      { label: 'Concurrent setups', before: '1 at a time', after: '5+ simultaneous' },
    ],
    impact: [
      'Standardised every device setup — zero missed configuration steps',
      'Eliminated human error across all provisioning steps via scripted execution',
      'Engineers freed from repetitive setup, redeployed to higher-value work',
      'New-staff onboarding accelerated — devices ready same day',
      '5 machines provisioned in 1 hour vs 1 machine per 2 hours previously',
    ],
    tech: ['Windows Config Designer', 'PPKG', 'PowerShell', 'Batch Scripting', 'N-Central', 'N-able'],
  },
  {
    id: 'admindroid',
    badge: 'Data Automation',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    title: 'Admin Droid Reporting Pipeline',
    subtitle: 'M365 multi-tenant reporting: 12 days → 1 day',
    description:
      'Built a fully automated reporting pipeline that transforms scheduled Admin Droid exports (delivered to mailbox) into polished, per-tenant Excel reports. A Power Automate flow moves incoming exports to a watched folder; a Python script then compiles 8 export types × 76 tenants into 76 individual client-ready reports — on demand.',
    problems: [
      { label: 'Reporting time', before: '12 days', after: '1 day' },
      { label: 'Tenants covered', before: 'manual per tenant', after: '76 automated' },
    ],
    impact: [
      '92% reduction in reporting time — from 12 working days to 1',
      'Eliminated error-prone manual Excel compilation across 76 tenants',
      'Consistent report structure and formatting every single run',
      'Scalable: adding new tenants requires zero change to the pipeline',
      'Improved compliance visibility for all managed clients',
    ],
    tech: ['Python', 'Power Automate', 'Admin Droid', 'Excel', 'Mailbox Integration', 'File Automation'],
  },
  {
    id: 'websystem',
    badge: 'Full Stack Dev',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    title: 'Healthcare Web System',
    subtitle: 'Final year group project · UKZN · 75% grade',
    description:
      'Led a 4-member team to design and deliver a full-stack client-focused web system for a healthcare provider. Built appointment booking, payment processing, and patient record management as core modules — all designed around operational efficiency for clinic staff.',
    problems: [
      { label: 'Team size', before: '4 members', after: 'Group Leader' },
      { label: 'Final grade', before: 'target: pass', after: '75% achieved' },
    ],
    impact: [
      'Delivered end-to-end appointment booking with calendar management',
      'Integrated payment processing and receipt generation',
      'Patient record module with search and history tracking',
      'Power BI dashboard for clinic operational reporting',
      'Functional, user-tested solution submitted on time',
    ],
    tech: ['C#', 'ASP.NET', 'HTML / CSS', 'MySQL', 'Power BI'],
  },
]

export default function Projects() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-animate className="mb-14">
          <span className="text-cyan-400 font-mono text-sm mb-3 block tracking-widest">
            03 // projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Featured Work</h2>
          <p className="text-slate-400 mt-3 text-base max-w-xl">
            Projects built to solve real problems — measured in time saved, errors eliminated, and
            throughput multiplied.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              data-animate
              data-animate-delay={String(i * 120)}
              className="card p-7 group"
            >
              {/* Top row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 font-mono">{project.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Before / After metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {project.problems.map((p) => (
                  <div key={p.label} className="rounded-lg bg-slate-800/40 border border-slate-700/50 p-3">
                    <div className="text-xs text-slate-500 font-mono mb-2">{p.label}</div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-red-400/70 line-through">{p.before}</span>
                      <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-sm font-bold text-emerald-400">{p.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact bullets */}
              <div className="mb-6">
                <div className="text-xs font-mono text-slate-500 mb-3 tracking-widest">IMPACT</div>
                <ul className="space-y-2">
                  {project.impact.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <svg
                        className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-400 bg-slate-800/60 border border-slate-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
