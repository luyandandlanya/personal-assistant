'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const CERTS = [
  {
    title: 'Microsoft Certified: Power Platform Fundamentals',
    issuer: 'Microsoft',
    icon: '🪟',
    color: 'blue',
  },
  {
    title: 'FCP – FortiGate Security 7.2',
    issuer: 'Fortinet · Self-paced',
    icon: '🛡️',
    color: 'orange',
  },
  {
    title: 'Digital Skills: Social Media, UX, AI & Web Analytics',
    issuer: 'Accenture',
    icon: '◈',
    color: 'purple',
  },
]

const EDUCATION = [
  {
    degree: 'BCom Honours in Information Systems & Technology',
    school: 'University of KwaZulu-Natal (UKZN)',
    location: 'Durban, South Africa',
    period: '2024',
    note: 'incomplete',
    color: 'cyan',
  },
  {
    degree: 'BCom General — Double Major',
    school: 'University of KwaZulu-Natal (UKZN)',
    location: 'Durban, South Africa',
    period: '2020 – 2023',
    note: 'Information Systems & Technology · Information Systems Computing',
    color: 'blue',
  },
]

const certColor: Record<string, string> = {
  blue: 'border-blue-500/20 bg-blue-500/5',
  orange: 'border-orange-500/20 bg-orange-500/5',
  purple: 'border-purple-500/20 bg-purple-500/5',
}

const eduColor: Record<string, string> = {
  cyan: 'border-cyan-500/30',
  blue: 'border-blue-500/30',
}

export default function Certifications() {
  const ref = useScrollAnimation<HTMLElement>()

  return (
    <section id="certifications" ref={ref} className="relative py-28 px-6">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div data-animate className="mb-14">
          <span className="text-cyan-400 font-mono text-sm mb-3 block tracking-widest">
            05 // credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            Certifications &amp; Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div data-animate>
            <h3 className="text-lg font-semibold text-slate-200 mb-5 flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </h3>
            <div className="space-y-4">
              {CERTS.map((cert) => (
                <div
                  key={cert.title}
                  className={`card p-4 flex items-start gap-4 border ${certColor[cert.color]}`}
                >
                  <div className="text-2xl w-10 h-10 flex items-center justify-center shrink-0">
                    {cert.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-200 leading-snug">
                      {cert.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 font-mono">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div data-animate data-animate-delay="150">
            <h3 className="text-lg font-semibold text-slate-200 mb-5 flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className={`card p-5 border-l-2 ${eduColor[edu.color]}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="text-sm font-semibold text-slate-200 leading-snug">
                      {edu.degree}
                    </div>
                    <span className="text-xs font-mono text-slate-500 shrink-0">{edu.period}</span>
                  </div>
                  <div className="text-xs text-cyan-400/80 font-medium">{edu.school}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{edu.location}</div>
                  {edu.note && (
                    <div className="text-xs text-slate-500 mt-2 italic">{edu.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
