import { lazy } from 'react'
import { useReducedMotion } from 'framer-motion'
import { skillGroups } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import LazyScene from '../three/LazyScene'

const SkillsGalaxy = lazy(() => import('../three/SkillsGalaxy'))

export default function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="The stack"
          title="Tools that ship products."
          description="A deliberately small, deeply-used toolkit. Hover the galaxy to explore — or read the categories below."
          align="center"
        />

        {!reduce && (
          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02]">
              <LazyScene className="h-[360px] sm:h-[440px]">
                <SkillsGalaxy />
              </LazyScene>
            </div>
          </Reveal>
        )}

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-card">
                <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                <p className="mt-1 text-xs text-white/40">{group.note}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-white/70 transition-colors group-hover:border-white/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
