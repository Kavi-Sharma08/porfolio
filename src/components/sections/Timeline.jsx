import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { timeline } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

function Entry({ entry, flip }) {
  return (
    <Reveal className="relative">
      <span className="absolute left-4 top-2.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent/20 md:left-1/2" />
      <div className={`md:grid md:grid-cols-2 md:gap-16`}>
        <div className={`pl-12 md:pl-0 ${flip ? 'md:order-2' : ''}`}>
          <article className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-card">
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-accent/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">{entry.tag}</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">{entry.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">{entry.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {entry.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
            {entry.detail?.length > 0 && (
              <ul className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:transition-all md:duration-300 md:group-hover:grid-rows-[1fr]">
                <li className="overflow-hidden">
                  <div className="mt-3 space-y-1.5 border-t border-white/5 pt-3">
                    {entry.detail.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-white/45">
                        <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </div>
                </li>
              </ul>
            )}
          </article>
        </div>
      </div>
    </Reveal>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 72%', 'end 55%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 })

  return (
    <section id="journey" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/[0.03] sm:w-[560px] sm:bg-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="01"
          eyebrow="The journey"
          title="Every engineer has a story."
        />

        <div ref={ref} className="relative mt-20">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent/70 to-accent/30 shadow-glow md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((group, gi) => (
              <div key={group.year} className="relative">
                <div className="absolute left-4 top-0 z-10 -translate-x-1/2 md:left-1/2">
                  <span className="rounded-full border border-white/10 bg-ink px-4 py-1.5 font-mono text-sm text-accent">
                    {group.year}
                  </span>
                </div>
                <div className="space-y-10 pt-12 md:space-y-14">
                  {group.entries.map((e, ei) => (
                    <Entry key={e.title} entry={e} flip={(gi + ei) % 2 === 1} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
