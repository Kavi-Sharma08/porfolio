import { lazy, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { architecture } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import LazyScene from '../three/LazyScene'

const ArchitectureScene = lazy(() => import('../three/ArchitectureScene'))

const layerOrder = architecture.map((l) => l.name).join(' → ')

export default function Architecture() {
  const [selected, setSelected] = useState('api')
  const reduce = useReducedMotion()
  const layer = architecture.find((a) => a.key === selected)

  return (
    <section id="architecture" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_20%,rgba(139,139,248,0.06),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Architecture"
          title="How products are built."
          description="The layers of every system I ship — from the browser to the database. Click a node to inspect it."
          align="center"
        />

        <Reveal className="mt-6 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/35">{layerOrder}</p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {!reduce && (
            <Reveal className="overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]">
              <LazyScene className="h-[380px] sm:h-[460px]">
                <ArchitectureScene selected={selected} onSelect={setSelected} />
              </LazyScene>
            </Reveal>
          )}

          <div className="flex flex-col gap-2.5">
            {architecture.map((a) => {
              const isActive = selected === a.key
              return (
                <button
                  key={a.key}
                  onClick={() => setSelected(a.key)}
                  className={`flex items-center gap-3 rounded-2xl border px-5 py-3.5 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-accent/40 bg-accent/[0.08]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition ${
                      isActive ? 'border-accent/30 bg-accent/15 text-accent' : 'border-white/10 text-white/50'
                    }`}
                  >
                    <Icon name={a.icon} size={16} />
                  </span>
                  <span>
                    <span className={`block text-sm font-medium ${isActive ? 'text-white' : 'text-white/70'}`}>
                      {a.name}
                    </span>
                    <span className="block font-mono text-[11px] text-white/40">{a.tech.join(' · ')}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.div
          key={layer.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 sm:p-9"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-2xl font-semibold text-white">{layer.name}</h3>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/50">
              {layer.role}
            </span>
          </div>
          <div className="mt-7 grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Responsibilities</h4>
              <ul className="mt-3 space-y-2.5">
                {layer.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm leading-relaxed text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Challenges</h4>
              <ul className="mt-3 space-y-2.5">
                {layer.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm leading-relaxed text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Implementation</h4>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{layer.implementation}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
