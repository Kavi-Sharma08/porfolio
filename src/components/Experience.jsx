import { motion } from 'framer-motion'

export default function Experience(){
  const items = [
    {
      company: 'Agami Technologies',
      role: 'Full Stack Developer',
      type: 'Remote',
      start: '12 Dec 2025',
      end: 'Present',
      duties: [
        'Design and implement scalable backend APIs with Node.js and Express.',
        'Build responsive React front-end components and reusable UI patterns.',
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">EXPERIENCE</motion.h2>
      <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="mt-2 text-slate-400">Where I've worked and contributed</motion.p>

      <div className="mt-8 relative">
        {/* vertical timeline line - shown on md+ */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-white/6" />

        <div className="space-y-8 md:pl-16 pl-0">
          {items.map((it, idx) => (
            <motion.div key={it.company} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="relative">
              <div className="hidden md:block absolute -left-10 top-6 h-4 w-4 rounded-full bg-white/90 ring-2 ring-black" />

              <div className="glass p-6 rounded-xl neon-glow">
                <div className="md:flex md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                      <div className="text-white font-semibold text-lg">{it.company}</div>
                      <div className="text-sm muted">{it.role}</div>
                      <span className="md:ml-3 inline-flex items-center gap-2 text-sm font-ibm text-green-300">
                        <span className="h-2 w-2 rounded-full bg-green-400 inline-block" />
                        Current
                      </span>
                    </div>

                    <div className="mt-2 text-slate-300 text-sm">{it.type}</div>

                    <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
                      {it.duties.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 md:mt-0 text-sm text-slate-400">{it.start} – {it.end}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
