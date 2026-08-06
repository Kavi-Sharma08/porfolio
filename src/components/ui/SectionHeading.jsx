import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'
  return (
    <div className={centered ? 'text-center' : ''}>
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
          {index && <span className="text-accent">{index}</span>}
          {index ? ' — ' : ''}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl font-display ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`mt-4 max-w-2xl text-base leading-relaxed text-white/55 ${
              centered ? 'mx-auto' : ''
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
