import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-white">About Me</motion.h2>
      <motion.div className="mt-4 text-slate-300 leading-relaxed space-y-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <p>Hey! I'm Kavi, a full-stack developer who loves crafting web apps that deliver real impact. I thrive on turning complex ideas into seamless user experiences—from intuitive React frontends to robust Node.js backends.</p>

        <p>Currently interning at Agami Technologies, I'm passionate about clean code, endlessly curious about new technologies, and focused on solving problems that matter. Always exploring new tools and ready for projects that push boundaries.</p>

        <div className="pt-3 flex gap-4">
          <a href="#projects" className="px-4 py-2 rounded-md bg-white text-black font-semibold">View projects →</a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-white/6 text-white">Contact me →</a>
        </div>
      </motion.div>
    </div>
  )
}

function Stat({ title, value, link }) {
  return (
    <div className="glass p-4 rounded-xl neon-glow">
      <div className="text-sm muted">{title}</div>
      {link ? (
        <a href={link} className="text-white font-semibold">{value}</a>
      ) : (
        <div className="text-white font-bold text-lg">{value}</div>
      )}
    </div>
  )
}
