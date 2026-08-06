import { lazy } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/content'
import Icon from '../ui/Icon'
import Magnetic from '../ui/Magnetic'
import LazyScene from '../three/LazyScene'

const DeskScene = lazy(() => import('../three/DeskScene'))
const Particles = lazy(() => import('../three/Particles'))

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_-10%,rgba(139,139,248,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <LazyScene className="absolute inset-0">
          <Particles count={420} />
        </LazyScene>
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-0">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/75 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to Full Stack Engineer roles
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.2rem]"
          >
            <span className="block text-white/35">Hello, I'm</span>
            <span className="text-gradient block">Kavi</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-accent"
          >
            Full Stack Software Engineer
          </motion.p>

          <motion.p variants={item} className="mt-5 max-w-md text-base leading-relaxed text-white/55">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                View Projects
                <Icon name="arrow-up-right" size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
              >
                <Icon name="download" size={15} />
                Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-5">
            {[
              { href: profile.github, icon: 'github', label: 'GitHub' },
              { href: profile.linkedin, icon: 'linkedin', label: 'LinkedIn' },
              { href: `mailto:${profile.email}`, icon: 'mail', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/40 transition hover:text-white"
              >
                <Icon name={s.icon} size={20} />
              </a>
            ))}
            <span className="h-4 w-px bg-white/10" />
            <span className="font-mono text-xs text-white/35">{profile.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[360px] sm:h-[460px] lg:h-[600px]"
        >
          <LazyScene className="h-full w-full">
            <DeskScene />
          </LazyScene>
        </motion.div>
      </div>

      <motion.a
        href="#journey"
        aria-label="Scroll to journey"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/35 transition hover:text-white/70 lg:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <Icon name="chevron" size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
