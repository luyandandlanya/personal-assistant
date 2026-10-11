'use client'

const FOCUS = ['IT operations automation', 'Endpoint intelligence', 'AI & platform integrations', 'Custom applications']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/20 via-[#030712]/70 to-[#030712]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <p className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono mb-8 border border-cyan-500/25 rounded-full px-4 py-2 bg-cyan-500/5">AUTOMATION & SYSTEMS ENGINEER · DURBAN, SOUTH AFRICA</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-7 leading-tight">I build systems that make <span className="gradient-text">technology work smarter.</span></h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">From enterprise IT automation and endpoint intelligence to AI-powered workflows and custom applications.</p>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">I connect platforms, data and engineering to turn operational challenges into reliable, measurable solutions.</p>
        <div className="flex flex-wrap justify-center gap-3 mb-12">{FOCUS.map(f => <span key={f} className="px-3 py-2 text-sm border border-slate-700 rounded-lg bg-slate-900/70 text-slate-300">{f}</span>)}</div>
        <div className="flex flex-wrap justify-center gap-4"><a href="#projects" className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-colors">Explore my work</a><a href="#contact" className="px-8 py-3.5 border border-slate-700 hover:border-cyan-500 text-slate-200 rounded-xl transition-colors">Get in touch</a></div>
      </div>
    </section>
  )
}
