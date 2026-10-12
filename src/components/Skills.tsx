const groups = [
 {id:'01',title:'Engineering & Development',description:'Designing and building applications, interfaces and the code behind them.',items:['C#','ASP.NET','HTML / CSS','MySQL','Web Design','E-Commerce Development','TypeScript','React']},
 {id:'02',title:'Automation & IT Operations',description:'Connecting platforms and reducing manual operational work.',items:['PowerShell','Power Automate','N-central / N-able','Halo PSA','Rewst','Passportal','Make.com','API Integration']},
 {id:'03',title:'Data & Intelligence',description:'Turning datasets into useful reporting and operational insight.',items:['Power BI / Fabric','Data Visualisation','Business Analytics','Predictive Analysis','SQL','Excel']},
 {id:'04',title:'Digital Experience & Platforms',description:'Delivering websites, digital experiences and deployed products.',items:['Cloudflare Pages','WordPress','Google Analytics','Microsoft Clarity','Metricool','Supabase']}
]
export default function Skills(){
 return <section id="skills" className="px-6 py-28 bg-[#030407] border-t border-white/10">
  <div className="max-w-6xl mx-auto">
   <p className="section-kicker">03 / CAPABILITIES</p>
   <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"><h2 className="section-title">My technical <span className="text-royal">toolkit.</span></h2><p className="max-w-md text-slate-400 leading-relaxed">A blend of development, operations, analytics and automation — applied to practical challenges.</p></div>
   <div className="grid md:grid-cols-2 gap-4">
    {groups.map(g=><article key={g.id} className="project-panel !min-h-0">
     <p className="text-sm font-mono text-blue-400 mb-8">{g.id} / EXPERTISE</p>
     <h3 className="text-2xl font-semibold text-white mb-3">{g.title}</h3>
     <p className="text-slate-400 leading-relaxed mb-7">{g.description}</p>
     <div className="flex flex-wrap gap-2">{g.items.map(s=><span className="stack-chip" key={s}>{s}</span>)}</div>
    </article>)}
   </div>
  </div>
 </section>
}