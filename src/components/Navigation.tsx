'use client'
import {useEffect,useState} from 'react'
const links=[{label:'About',href:'#about'},{label:'Expertise',href:'#skills'},{label:'Work',href:'#projects'},{label:'Experience',href:'#experience'},{label:'Credentials',href:'#certifications'}]
export default function Navigation(){
 const [open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false)
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>18);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[])
 return <header className={'fixed inset-x-0 top-0 z-50 transition-colors duration-300 '+(scrolled?'bg-[#030407]/95 backdrop-blur-xl border-b border-white/10':'bg-transparent')}>
  <nav className="max-w-6xl mx-auto h-20 px-6 flex justify-between items-center" aria-label="Primary navigation">
   <a className="inline-flex items-center gap-3 text-white font-semibold tracking-tight" href="#home"><span className="flex items-center justify-center h-10 w-10 bg-[#2855ff] rounded-lg font-black">LN</span><span className="hidden sm:inline">LUYANDA<span className="text-blue-400">.</span></span></a>
   <div className="hidden lg:flex items-center gap-7">{links.map(l=><a className="text-sm text-slate-300 hover:text-white transition-colors" href={l.href} key={l.href}>{l.label}</a>)}</div>
   <a href="#contact" className="hidden lg:inline-flex text-sm font-semibold text-white border border-blue-500/60 px-5 py-2.5 rounded-lg hover:bg-[#2855ff] transition-colors">Let's connect ↗</a>
   <button className="lg:hidden text-white border border-white/20 rounded-lg px-3 py-2" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation">{open?'Close':'Menu'}</button>
  </nav>
  {open&&<div id="mobile-nav" className="lg:hidden bg-[#080b14] border-t border-white/10 px-6 py-5 flex flex-col gap-5">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-slate-200">{l.label}</a>)}<a href="#contact" onClick={()=>setOpen(false)} className="text-blue-300">Contact ↗</a></div>}
 </header>
}
