import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'Redux'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Appwrite'] },
  { title: 'Languages', items: ['Java', 'Python', 'C++'] },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL', 'SQL Server'] },
]

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Skills</motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((g, i) => (
          <motion.div key={g.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="glass p-6 rounded-xl neon-glow">
            <div className="text-sm muted">{g.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map(s => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/3 text-sm text-slate-200 font-ibm">{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
