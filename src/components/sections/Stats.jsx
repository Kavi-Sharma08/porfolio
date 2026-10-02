import { stats } from '../../data/content'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="group bg-panel p-6 transition-colors hover:bg-white/[0.03]">
                <div className="font-display text-3xl font-semibold tracking-tight text-white">
                  {s.text ? (
                    <span className="text-gradient">{s.text}</span>
                  ) : (
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-white/40">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
