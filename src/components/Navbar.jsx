import { useState } from 'react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full z-40 top-0 left-0">
      <div className="max-w-6xl mx-auto px-4">
          <div className="glass rounded-xl my-3 p-3 flex items-center justify-between">
          <a href="#hero" className="text-white font-bold text-lg">Kavi</a>
          <div className="hidden md:flex gap-6 items-center">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-slate-200 hover:text-white/90 transition">{l.label}</a>
            ))}
            <a href="https://drive.google.com/file/d/1AMS6atReIPT9wJgec3Tfjodu1UzGiWF8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="ml-4 px-3 py-1 rounded-md bg-white/10 text-white border border-white/10 hover:brightness-105">Resume</a>
          </div>
          <button className="md:hidden p-2 rounded-md bg-white/5" onClick={() => setOpen(v => !v)} aria-label="menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#9be8ff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4">
          <div className="glass rounded-lg p-4 mx-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/90">{l.label}</a>
            ))}
            <a href="https://drive.google.com/file/d/1AMS6atReIPT9wJgec3Tfjodu1UzGiWF8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block text-white">View Resume</a>
          </div>
        </div>
      )}
    </nav>
  )
}
