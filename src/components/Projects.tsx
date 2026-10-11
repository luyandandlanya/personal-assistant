'use client'

import { useState } from 'react'

type Category = 'Automation' | 'Platforms' | 'Web' | 'Intelligence'
type Project = {
  title: string; eyebrow: string; category: Category; status: string; number: string;
  description: string; stack: string[]; proof: string; url?: string
}

const projects: Project[] = [
  {number:'01',title:'Everything Tecknology',eyebrow:'IT CONSULTING / BRAND & WEB',category:'Web',status:'Live website',description:'Designed and delivered a modern technology consulting and cybersecurity brand experience — from positioning and content architecture to a responsive website deployed on Cloudflare.',stack:['Astro','TypeScript','Tailwind','Cloudflare'],proof:'Live deployment and brand development',url:'https://everything-tecknology.luyandandlanya.workers.dev'},
  {number:'02',title:'Endpoint Experience Intelligence',eyebrow:'EUX / ENDPOINT TELEMETRY',category:'Intelligence',status:'V1 in development',description:'A device-experience assessment system built around endpoint telemetry, weighted scoring, data quality, and automated collection. Current work focuses on credible readings and explainable evaluations.',stack:['PowerShell','N-central','Rewst','SQL'],proof:'Five-pillar scoring and collection framework'},
  {number:'03',title:'NetPath V2',eyebrow:'NETWORK / OBSERVABILITY',category:'Automation',status:'Documented project',description:'Designed a self-hosted network-path monitoring approach with persistent collectors, live operational visibility and alerting for TCP availability, latency, loss and route changes.',stack:['PowerShell','Windows Services','Chart.js','SMTP'],proof:'Network operations architecture and deployment guide'},
  {number:'04',title:'Team Glory',eyebrow:'OPERATIONS / PRODUCTIVITY',category:'Platforms',status:'Implementation in progress',description:'An internal sprint-operations portal for automation and analytics teams, combining work planning, KPI visibility, database-backed records and repeatable delivery processes.',stack:['Supabase','SQL','Web Apps','Automation'],proof:'Sprint operations portal and system design'},
  {number:'05',title:'Service Provider Management',eyebrow:'BUSINESS OPERATIONS / FULL STACK',category:'Platforms',status:'Project case study',description:'A connected operations and contract-management platform covering staff, inventory movements, document expiry and role-based access for multi-site service delivery.',stack:['React','Supabase','PostgreSQL','Python'],proof:'Two connected applications and operational workflows'},
  {number:'06',title:'AdminDroid Reporting Pipeline',eyebrow:'DATA / REPORT AUTOMATION',category:'Automation',status:'Project case study',description:'Automated the transformation of multi-tenant Microsoft 365 exports into consistent per-customer reporting packs, replacing repetitive manual compilation.',stack:['Python','Power Automate','Excel','M365'],proof:'Documented 12-day to 1-day reporting improvement'},
  {number:'07',title:'Windows Device Provisioning',eyebrow:'ENDPOINT / WORKFLOW AUTOMATION',category:'Automation',status:'Project case study',description:'Automated repeatable Windows workstation setup through provisioning packages, scripting and remote management to reduce manual effort and support concurrent deployments.',stack:['PowerShell','PPKG','N-central','Windows'],proof:'Standardised onboarding workflow'},
  {number:'08',title:'Doorman Operations Demo',eyebrow:'PRODUCT / PROTOTYPING',category:'Web',status:'Prototype',description:'A clickable multi-store operations prototype created to align stakeholder feedback before full implementation, with Cloudflare-powered preview delivery.',stack:['React','Vite','Tailwind','Cloudflare Pages'],proof:'Interactive demonstration and iteration'},
  {number:'09',title:'Healthcare Web System',eyebrow:'ACADEMIC / FULL STACK',category:'Platforms',status:'Completed academic project',description:'A team-built healthcare management system covering appointments, patient information, payment workflows and operational reporting.',stack:['C#','ASP.NET','MySQL','Power BI'],proof:'University capstone project'}
]

const filters = ['All','Automation','Platforms','Web','Intelligence'] as const
export default function Projects() {
  const [filter,setFilter]=useState<(typeof filters)[number]>('All')
  const visible=filter==='All'?projects:projects.filter(p=>p.category===filter)
  return <section id="projects" className="portfolio-section relative px-6 py-28">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 mb-10">
        <div><p className="section-kicker">02 / SELECTED ENGINEERING WORK</p><h2 className="section-title">Proof, not <span className="text-royal">buzzwords.</span></h2><p className="text-slate-400 max-w-2xl mt-4 leading-relaxed">A cross-section of automation systems, operational platforms, digital products and data engineering. Each project starts with a real problem.</p></div>
        <div className="text-sm font-mono text-slate-500">{String(projects.length).padStart(2,'0')} PROJECTS / GROWING</div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-5 mb-5" aria-label="Filter projects">
        {filters.map(item=><button key={item} onClick={()=>setFilter(item)} aria-pressed={filter===item} className={'filter-chip '+(filter===item?'filter-chip-active':'')}>{item}</button>)}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {visible.map((p,index)=><article key={p.number} className={'project-panel group '+(index===0&&filter==='All'?'md:col-span-2 featured-panel':'')}>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex flex-wrap justify-between items-center gap-3 mb-9"><span className="text-xs font-mono tracking-widest text-blue-300">{p.eyebrow}</span><span className="text-xs text-slate-400 border border-white/10 rounded-full px-3 py-1">{p.status}</span></div>
            <div className="mt-auto"><div className="text-5xl font-semibold text-white/10 mb-4 tracking-tight">{p.number}</div><h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">{p.title}</h3><p className="text-slate-400 leading-relaxed max-w-2xl mb-6">{p.description}</p>
              <div className="mb-6 flex items-center gap-2 text-sm text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"/>{p.proof}</div>
              <div className="flex flex-wrap gap-2">{p.stack.map(s=><span className="stack-chip" key={s}>{s}</span>)}</div>
              {p.url&&<a className="inline-flex items-center gap-2 mt-7 font-medium text-blue-300 hover:text-white transition-colors" href={p.url} target="_blank" rel="noopener noreferrer">Explore live site <span aria-hidden="true">↗</span></a>}
            </div>
          </div>
        </article>)}
      </div>
      <p className="mt-7 text-sm text-slate-500">Selected client and internal systems are described at a high level to protect confidential implementation details. Project status is shown where work is ongoing.</p>
    </div>
  </section>
}
