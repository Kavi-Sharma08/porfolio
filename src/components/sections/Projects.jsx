import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, profile } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ScreenMock from '../ui/ScreenMock'
import Icon from '../ui/Icon'
import Badge from '../ui/Badge'

function ProjectCard({ project, onOpen, className = '' }) {
  return (
    <article
      onClick={() => onOpen(project)}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      tabIndex={0}
      role="button"
      aria-label={`Open case study for ${project.name}`}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-card ${className}`}
    >
      <div className="relative border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-4 sm:p-6">
        <ScreenMock variant={project.mock} accent={project.accent} />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-white/40">{project.category}</p>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/60 transition group-hover:border-white/25 group-hover:text-white">
            <Icon name="arrow-up-right" size={15} />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/55">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              Live demo <Icon name="external" size={12} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/5"
          >
            <Icon name="github" size={13} /> GitHub
          </a>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onOpen(project)
            }}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/70 transition hover:border-accent/40 hover:text-white"
          >
            Case study <Icon name="arrow-up-right" size={12} />
          </button>
        </div>
      </div>
    </article>
  )
}

function GitHubTile({ className = '' }) {
  return (
    <a
      href={profile.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-accent/[0.08] via-white/[0.02] to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
      <div>
        <div className="font-mono text-xs uppercase tracking-widest text-white/40">The rest of the code</div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white">
          Explore more on <span className="text-accent">GitHub</span>
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
          Everything public — experiments, tools and the products above. Starred, committed, shipped.
        </p>
      </div>
      <div className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-white/70 transition group-hover:text-white">
        <Icon name="github" size={16} />
        {profile.githubUser}
        <Icon name="arrow-up-right" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  )
}

function Detail({ title, items }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">{title}</h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm leading-relaxed text-white/65">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CaseStudy({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
    >
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mx-auto my-8 w-[calc(100%-2rem)] max-w-3xl">
        <motion.div
          initial={{ y: 40, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 26, stiffness: 300 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-soft"
        >
          <div className="relative border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-5 sm:p-7">
            <ScreenMock variant={project.mock} accent={project.accent} />
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
              aria-label="Close case study"
            >
              <Icon name="close" size={15} />
            </button>
          </div>

          <div className="p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-white/40">{project.category}</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white">{project.name}</h3>
            <p className="mt-3 text-base leading-relaxed text-white/60">{project.description}</p>

            <p className="mt-4 rounded-2xl border border-accent/20 bg-accent/[0.06] px-4 py-3 font-mono text-xs leading-relaxed text-white/70">
              {project.highlight}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <Detail title="Problem" items={[project.problem]} />
              <Detail title="Solution" items={[project.solution]} />
            </div>

            <div className="mt-8">
              <Detail title="Challenges" items={project.challenges} />
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Architecture</h4>
              <ol className="mt-3 space-y-2.5">
                {project.architecture.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 font-mono text-[10px] text-accent">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Features</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <Badge key={f} className="bg-white/[0.03]">
                    {f}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40">Tech stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/5 pt-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  View live demo <Icon name="external" size={13} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Icon name="github" size={14} /> View on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Products, not exercises."
          description="Every project below went from problem to production. Click any card for the full case study."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <ProjectCard project={projects[0]} onOpen={setActive} className="lg:col-span-2" />
          <ProjectCard project={projects[1]} onOpen={setActive} />
        </div>
      </div>

      <AnimatePresence>
        {active && <CaseStudy project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
