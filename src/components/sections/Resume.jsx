import { profile } from '../../data/content'
import Reveal from '../ui/Reveal'
import Icon from '../ui/Icon'
import Magnetic from '../ui/Magnetic'

export default function Resume() {
  return (
    <section id="resume" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-white/[0.01] to-transparent px-8 py-16 text-center sm:px-14 sm:py-24">
            <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">Want the full story?</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              One page. Four years. Every detail.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
              Everything you need to know — experience, projects, education and more — in a clean, honest résumé.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  <Icon name="download" size={15} />
                  Download Resume
                </a>
              </Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/5"
              >
                Get in touch <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
