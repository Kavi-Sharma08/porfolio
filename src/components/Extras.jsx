import { motion } from 'framer-motion'

const extras = [
  { title: 'Namespace Society', note: 'Senior Tech Team Member' },
  { title: 'NSS', note: 'Community initiatives & content writing' },
]

export default function Extras() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Extras</motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {extras.map(e => (
          <motion.div key={e.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-4 rounded-xl glass neon-glow">
            <div className="font-semibold text-white">{e.title}</div>
            <div className="text-slate-300 text-sm">{e.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
