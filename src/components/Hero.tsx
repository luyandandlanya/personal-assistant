'use client'

export default function Hero() {
 return <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-24">
  <div className="absolute inset-0 dot-grid pointer-events-none"/>
  <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at 83% 40%,rgba(40,85,255,.23),transparent 42%),linear-gradient(180deg,transparent 65%,#030407)'}}/>
  <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-5 gap-12 items-center">
    <div className="lg:col-span-4">
      <div className="inline-flex gap-3 items-center text-xs tracking-[.2em] font-mono text-blue-300 mb-9"><span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_14px_#2855ff]"/>AUTOMATION / SYSTEMS / ENGINEERING</div>
      <p className="text-white/70 text-lg mb-3">Luyanda Ndlanya</p>
      <h1 className="text-white font-black tracking-[-.065em] leading-[.99] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-5xl">Building smarter <span className="gradient-text">systems.</span><br/>Solving real problems.</h1>
      <p className="mt-9 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">I turn complex IT operations into connected, automated and measurable solutions — from enterprise workflows and endpoint intelligence to custom digital products.</p>
      <div className="flex flex-wrap gap-4 mt-10"><a href="#projects" className="px-7 py-4 rounded-lg bg-[#2855ff] text-white font-semibold hover:bg-[#4169ff] transition-colors">Explore selected work <span aria-hidden="true">↗</span></a><a href="#about" className="px-7 py-4 rounded-lg border border-white/20 text-white font-medium hover:border-blue-500 transition-colors">My approach</a></div>
    </div>
    <div className="hidden lg:flex flex-col gap-6 border-l border-blue-500/30 pl-6 text-xs font-mono text-slate-400 tracking-wider"><span>01 / AUTOMATION</span><span>02 / INTELLIGENCE</span><span>03 / PLATFORMS</span><span>04 / DEVELOPMENT</span><div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent ml-1"/></div>
  </div>
  <a href="#projects" className="absolute bottom-9 left-1/2 -translate-x-1/2 text-xs text-slate-500 font-mono tracking-widest">SCROLL TO EXPLORE ↓</a>
 </section>
}
