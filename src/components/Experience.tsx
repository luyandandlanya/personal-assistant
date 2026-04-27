'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const EXPERIENCES = [
  {
    company: 'First Technology Group',
    location: 'Durban, South Africa',
    role: 'Junior Data Analyst & Automation Engineer L1',
    period: 'Feb 2025 – Present',
    current: true,
    color: 'cyan',
    bullets: [
      'Develop and implement automated workflows with PowerShell, N-Central Automation Manager, and Power Automate to reduce SLA turnaround times and eliminate repetitive tasks.',
      'Integrate applications through API connections to enable seamless data exchange and reliable automation of key business processes.',
      'Utilise N-Central and N-able to remotely deploy software, execute scripts, and perform proactive maintenance on client devices.',
      'Extract and analyse datasets from multiple platforms to deliver actionable insights that support business and client decision-making.',
      'Build interactive dashboards in Power BI to provide real-time visibility into operational and client data.',
      'Manage IT service requests and audits with Halo PSA, RapidFire, and Passportal to strengthen service delivery and security.',
    ],
  },
  {
    company: 'Asante Tech Solutions',
    location: 'Durban, South Africa',
    role: 'Data Analyst Intern',
    period: 'Mar 2024 – Jan 2025',
    current: false,
    color: 'blue',
    bullets: [
      'Simplified and analysed complex client datasets using Microsoft Clarity and MetriCool, transforming raw data into actionable insights for strategic decision-making.',
      'Enhanced client onboarding and operational efficiency through Asante Power Platform for data visualisation and workflow automation.',
      'Conducted predictive analyses to forecast market and customer behaviour, recommending strategies that optimised client outcomes.',
      'Collaborated with the web development team to design and launch e-commerce websites using WordPress.',
      'Leveraged Generative AI and VR to design avatars and voiceovers, delivering immersive digital solutions for clients.',
      'Implemented workflow automation via Make.com, streamlining social media content scheduling and campaign efficiency.',
    ],
  },
  {
    company: 'Red Bull ZA',
    location: 'Durban, South Africa',
    role: 'Student Marketeer',
    period: 'Jan 2023 – Dec 2023',
    current: false,
    color: 'purple',
    bullets: [
      'Represented the Red Bull brand across campus and events, engaging 200+ students weekly and driving brand awareness.',
      'Collaborated with event partners to execute promotional campaigns, improving campus visibility.',
      'Leveraged social media platforms to expand digital reach and engagement.',
    ],
  },
]

const dotColor: Record<string, string> = {
  cyan: 'bg-cyan-400 shadow-cyan-400/50',
  blue: 'bg-blue-400 shadow-blue-400/50',
  purple: 'bg-purple-400 shadow-purple-400/50',
}

const badgeColor: Record<string, string> = {
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
}

export default function Experience() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 bg-[#060b14]">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-animate className="mb-14">
          <span className="text-cyan-400 font-mono text-sm mb-3 block tracking-widest">
            04 // experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Work History</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan-500/40 via-slate-700/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.company}
                data-animate
                data-animate-delay={String(i * 120)}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-3 w-3.5 h-3.5 rounded-full shadow-lg hidden md:block ${dotColor[exp.color]}`}
                />

                <div className="card p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h3 className="text-lg font-bold text-slate-100">{exp.company}</h3>
                        {exp.current && (
                          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-slate-300 font-medium text-sm">{exp.role}</p>
                      <p className="text-slate-500 text-xs mt-0.5 font-mono">{exp.location}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono border shrink-0 ${badgeColor[exp.color]}`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mt-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dotColor[exp.color].split(' ')[0]}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
