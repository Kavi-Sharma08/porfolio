import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Timeline from './components/sections/Timeline'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Timeline />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
