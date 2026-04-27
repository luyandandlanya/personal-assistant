import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-[#030712] text-slate-100 overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  )
}
