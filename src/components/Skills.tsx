'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const SKILL_CATEGORIES = [
  {
    title: 'Programming & Scripting',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: 'cyan',
    skills: ['Python', 'PowerShell', 'C#', 'Batch Scripting', 'HTML / CSS', 'ASP.NET', 'MySQL'],
  },
  {
    title: 'Data & Analytics',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'blue',
    skills: ['Power BI (Fabric)', 'Data Visualisation', 'Business Analytics', 'Predictive Analysis', 'Excel', 'Google Analytics'],
  },
  {
    title: 'Automation & IT',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'purple',
    skills: ['Power Automate', 'N-Central / N-able', 'Make.com', 'Windows Config Designer', 'API Integration', 'Halo PSA'],
  },
  {
    title: 'Monitoring & Reporting',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    color: 'emerald',
    skills: ['Admin Droid', 'Microsoft Clarity', 'MetriCool', 'RapidFire', 'Passportal', 'WordPress'],
  },
  {
    title: 'Interpersonal Toolkit',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'amber',
    skills: ['Adaptive', 'Determined', 'Collaborative', 'Analytical', 'Vocal'],
    wide: true,
  },
]

const colorMap: Record<string, string> = {
  cyan: 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5',
  blue: 'border-blue-500/20 text-blue-400 bg-blue-500/5',
  purple: 'border-purple-500/20 text-purple-400 bg-purple-500/5',
  emerald: 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5',
  amber: 'border-amber-500/20 text-amber-400 bg-amber-500/5',
}

const iconBgMap: Record<string, string> = {
  cyan: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
  amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
}

export default function Skills() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6 bg-[#060b14]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-animate className="mb-14">
          <span className="text-cyan-400 font-mono text-sm mb-3 block tracking-widest">
            02 // skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Technical Toolkit</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              data-animate
              data-animate-delay={String(i * 100)}
              className={`card p-6${'wide' in cat && cat.wide ? ' sm:col-span-2' : ''}`}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 rounded-lg border flex items-center justify-center ${iconBgMap[cat.color]}`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-200">{cat.title}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${colorMap[cat.color]}`}
                  >
                    {skill}
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
