import { experience } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'

export default function Experience() {
  const [current, ...others] = experience
  return (
    <section id="experience" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title="Where I've shipped."
          description="Real products, real teams, real consequences."
        />

        <Reveal className="mt-14">
          <article className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-white/15 hover:shadow-card sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold text-white">{current.company}</h3>
                </div>
                <p className="mt-1.5 text-sm text-white/50">{current.role}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-white/50">{current.period}</p>
                <p className="mt-1 font-mono text-[11px] text-white/35">{current.location}</p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60">{current.summary}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {current.highlights.map((h) => (
                <li
                  key={h}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                >
                  <Icon name="check" size={12} className="text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {others.map((item, i) => (
            <Reveal key={item.company} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold text-white">{item.company}</h3>
                  <p className="font-mono text-[11px] text-white/40">{item.period}</p>
                </div>
                <p className="mt-1 text-sm text-white/50">{item.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{item.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-white/45">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
