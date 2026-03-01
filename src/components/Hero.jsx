import { motion } from 'framer-motion'
import ThreeBackground from './ThreeBackground'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <ThreeBackground className="h-[720px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center">
          <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.05 }} className="text-6xl md:text-[96px] font-extrabold tracking-tight text-white font-syne">
            Kavi
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-md bg-white text-black font-semibold">View Projects</a>
            <a href="https://drive.google.com/file/d/1AMS6atReIPT9wJgec3Tfjodu1UzGiWF8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md border border-white/10 text-white">View Resume</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8 text-slate-300">
            <span className="mr-2">Forever curious —</span>
            <span className="text-white font-ibm"><Typewriter words={["learning new tech.", "building experiments.", "exploring ideas."]} /></span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
