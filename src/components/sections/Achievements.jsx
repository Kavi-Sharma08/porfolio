import { achievements } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Achievements() {
  const [featured, ...rest] = achievements

  return (
    <section id="achievements" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Achievements"
          title="Proof of work."
          description="Numbers and honours earned the hard way — through consistency, not luck."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Reveal className="md:col-span-2">
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-accent/[0.1] via-white/[0.02] to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
              <Icon name={featured.icon} size={26} className="text-accent" />
              <div className="mt-8">
                <div className="font-display text-5xl font-semibold tracking-tight text-white">{featured.value}</div>
                <div className="mt-1 font-mono text-sm text-white/50">{featured.label}</div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">{featured.note}</p>
              </div>
            </div>
          </Reveal>

          {rest.map((a, i) => (
            <Reveal key={a.label} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                <Icon name={a.icon} size={20} className="text-white/50 transition group-hover:text-accent" />
                <div className="mt-6 font-display text-3xl font-semibold tracking-tight text-white">{a.value}</div>
                <div className="mt-1 font-mono text-xs text-white/50">{a.label}</div>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{a.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
