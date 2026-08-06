import { profile } from '../../data/content'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kavi-sharma-29b487284', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', value: profile.githubUser, href: profile.github, icon: 'github' },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: 'phone' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,139,248,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Software Engineer roles
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            Let's build something <span className="text-gradient">great together.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55">
            I'm currently looking for a Full Stack Software Engineer role where I can build, learn and own
            impactful systems. One email is all it takes.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-mono text-sm text-white transition hover:border-accent/40 hover:bg-accent/[0.06] sm:text-base"
          >
            <Icon name="mail" size={16} className="text-accent" />
            {profile.email}
            <Icon
              name="arrow-up-right"
              size={15}
              className="text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]"
              >
                <Icon name={c.icon} size={17} className="text-white/50 transition group-hover:text-accent" />
                <div className="mt-4 font-mono text-[11px] uppercase tracking-widest text-white/40">{c.label}</div>
                <div className="mt-1 truncate text-sm font-medium text-white">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
