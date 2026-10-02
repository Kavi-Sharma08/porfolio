import { navLinks, profile } from '../../data/content'
import Icon from '../ui/Icon'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#home" className="font-display text-lg font-semibold text-white">
              Kavi<span className="text-accent">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-white/40">
              Full Stack Software Engineer — building scalable web applications and software projects.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/50 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {[
              { href: profile.github, icon: 'github', label: 'GitHub' },
              { href: profile.linkedin, icon: 'linkedin', label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: 'mail', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 transition hover:text-white"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Kavi Sharma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
