type Project = {number:string;category:string;title:string;summary:string;outcome:string;stack:string[];url?:string}
const projects:Project[]=[
 {number:'01',category:'FULL-STACK APPLICATION',title:'Service Management',summary:'A connected operations and contract management system for multi-site service delivery, covering staff, inventory, assets and document deadlines.',outcome:'Operational visibility, auditable stock records and role-based workflows.',stack:['React','Supabase','PostgreSQL','Python']},
 {number:'02',category:'WEB DESIGN & DELIVERY',title:'Everything Tecknology',summary:'Designed and delivered a professional website and digital brand experience for an IT consulting and cybersecurity business.',outcome:'From brand strategy and content architecture to a responsive Cloudflare deployment.',stack:['Astro','TypeScript','Tailwind CSS','Cloudflare'],url:'https://everything-tecknology.luyandandlanya.workers.dev'},
 {number:'03',category:'DATA AUTOMATION',title:'AdminDroid Reporting Pipeline',summary:'Built an automated workflow that transforms Microsoft 365 multi-tenant exports into structured, client-ready Excel reporting packs.',outcome:'Reporting turnaround documented as reduced from 12 working days to 1.',stack:['Python','Power Automate','AdminDroid','Excel']}
]
export default function Projects(){
 return <section id="projects" className="portfolio-section relative px-6 py-24 border-t border-white/10">
  <div className="max-w-6xl mx-auto">
   <p className="section-kicker">02 / SELECTED WORK</p>
   <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-11">
    <div><h2 className="section-title">Projects that <span className="text-royal">deliver.</span></h2><p className="text-slate-400 max-w-2xl mt-4 leading-relaxed">Three examples of how I combine development, automation and business understanding to build useful solutions.</p></div>
    <span className="text-sm text-slate-500 font-mono">03 FEATURED PROJECTS</span>
   </div>
   <div className="grid md:grid-cols-3 gap-4">
    {projects.map(p=><article key={p.number} className="project-panel !min-h-0 group flex flex-col">
     <div className="relative z-10 flex flex-col flex-1">
      <div className="flex justify-between items-start gap-2 mb-10"><span className="text-xs text-blue-300 font-mono tracking-wider">{p.category}</span><span className="text-sm text-white/30 font-mono">{p.number}</span></div>
      <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{p.title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-5">{p.summary}</p>
      <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-blue-500/60 pl-3 mb-7">{p.outcome}</p>
      <div className="flex flex-wrap gap-2 mt-auto">{p.stack.map(s=><span className="stack-chip" key={s}>{s}</span>)}</div>
      {p.url&&<a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 text-blue-300 hover:text-white font-medium text-sm transition-colors">View live website ↗</a>}
     </div>
    </article>)}
   </div>
   <p className="mt-6 text-xs text-slate-500">Projects are summarised at a high level. Sensitive client and implementation details are excluded.</p>
  </div>
 </section>
}
