import { achievements } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Achievements() {
  return (
    <section id="highlights" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Highlights"
          title="Highlights."
          description="Academic and problem-solving highlights."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-accent/[0.08] via-white/[0.02] to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-10">
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
                <div className="flex items-center justify-between">
                  <Icon name={item.icon} size={26} className="text-accent" />
                  {item.sublabel && (
                    <span className="font-mono text-xs uppercase tracking-wider text-white/40">{item.sublabel}</span>
                  )}
                </div>
                <div className="mt-8">
                  <div className="font-display text-5xl font-semibold tracking-tight text-white">{item.value}</div>
                  <div className="mt-2 font-mono text-sm text-white/60">{item.label}</div>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">{item.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
