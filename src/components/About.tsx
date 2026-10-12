export default function About() {
  return <section id="about" className="portfolio-section px-6 py-28 border-t border-white/10">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
      <div className="lg:col-span-5">
        <p className="section-kicker">01 / THE ENGINEER BEHIND THE WORK</p>
        <h2 className="section-title">Technology with <span className="text-royal">purpose.</span></h2>
        <p className="mt-8 text-blue-300 font-mono text-sm">ANALYTICS × AUTOMATION × SYSTEMS</p>
      </div>
      <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base md:text-lg">
        <p>I'm Luyanda Ndlanya, a data analyst and automation engineer focused on building practical technology that simplifies operations and supports better decisions.</p>
        <p>My experience spans process optimisation, IT automation and data visualisation. I work across PowerShell, Power Automate, N-central, Halo PSA and Power BI, connecting tools and data to make everyday processes more reliable, measurable and scalable.</p>
        <p>With a foundation in C#, ASP.NET, MySQL and web development, I approach technical challenges from both the systems and business perspectives — from shaping requirements to designing workflows, building solutions and reviewing results.</p>
        <div className="grid sm:grid-cols-3 gap-3 pt-5">
          {['Automate repetitive work','Connect disconnected systems','Translate data into decisions'].map(x=><div key={x} className="rounded-xl border border-blue-500/20 bg-[#0d1427] p-5 text-sm font-medium text-white">{x}</div>)}
        </div>
        <p className="text-slate-400 text-sm pt-4">Explore the selected work below to see how these capabilities translate into real engineering projects.</p>
      </div>
    </div>
  </section>
}