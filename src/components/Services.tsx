type Service = {id:string;title:string;promise:string;deliverables:string[];example:string;anchor:string}
const services:Service[]=[
{id:'01',title:'Workflow & IT Automation',promise:'Remove repetitive tasks and connect the tools your team already uses.',deliverables:['PowerShell and Power Automate workflows','Microsoft 365 and IT platform integrations','Provisioning and operational process automation'],example:'AdminDroid Reporting Pipeline',anchor:'projects'},
{id:'02',title:'Business Applications & Systems',promise:'Replace disconnected spreadsheets and manual coordination with purpose-built tools.',deliverables:['Internal operations web applications','Role-based access and database-backed workflows','Asset, stock and contract tracking'],example:'Service Management',anchor:'projects'},
{id:'03',title:'Data Analytics & Reporting',promise:'Turn operational data into reliable reports that support better decisions.',deliverables:['Power BI dashboards and reporting models','Python and Excel reporting pipelines','Multi-source data preparation and analysis'],example:'AdminDroid Reporting Pipeline',anchor:'projects'},
{id:'04',title:'Websites & Digital Experiences',promise:'Build professional, responsive online experiences for growing businesses.',deliverables:['Company and portfolio websites','Technical implementation and responsive UI','Cloudflare deployment and version-controlled delivery'],example:'Everything Tecknology',anchor:'projects'}
]
export default function Services(){
return <section id="services" className="px-6 py-24 bg-[#030407] border-t border-white/10">
<div className="max-w-6xl mx-auto">
<p className="section-kicker">04 / HOW I CAN HELP</p>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
<div><h2 className="section-title">Capabilities into <span className="text-royal">solutions.</span></h2><p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">Practical services shaped by the systems I've worked on — designed for teams and businesses that need technology to do more.</p></div>
<a href="#contact" className="text-blue-300 hover:text-white font-semibold shrink-0 transition-colors">Discuss a project ↗</a>
</div>
<div className="grid md:grid-cols-2 gap-4">
{services.map(service=><article key={service.id} className="project-panel !min-h-0">
<div className="relative z-10"><div className="flex items-start justify-between gap-3 mb-7"><p className="text-xs text-blue-300 tracking-widest font-mono">SERVICE / {service.id}</p><span className="text-blue-400 text-xl" aria-hidden="true">↗</span></div>
<h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3><p className="text-slate-300 mb-6 leading-relaxed">{service.promise}</p>
<p className="text-xs text-slate-500 tracking-widest mb-3 font-mono">TYPICAL DELIVERABLES</p>
<ul className="space-y-2 mb-7">{service.deliverables.map(item=><li key={item} className="text-sm text-slate-400 flex gap-3"><span className="text-blue-400" aria-hidden="true">—</span>{item}</li>)}</ul>
<div className="border-t border-white/10 pt-5 text-sm"><span className="text-slate-500">Related work: </span><a href={'#'+service.anchor} className="text-blue-300 hover:text-white transition-colors">{service.example} ↗</a></div>
</div></article>)}
</div>
<p className="text-xs text-slate-500 mt-7">Scope and deliverables are defined per engagement; these are capability areas, not fixed-price packages or managed-service commitments.</p>
</div></section>
}