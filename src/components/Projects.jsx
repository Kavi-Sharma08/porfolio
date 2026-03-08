import { motion } from 'framer-motion'

const projects = [
  {
    id: 'bagspackgo',
    title: 'BagsPackGo',
    year: '2025',
    desc: 'MERN travel app with multi-role architecture, Razorpay payments and route-sharing features.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
    github: '',
    live: 'https://bagspackgo.vercel.app/',
    image: 'https://res.cloudinary.com/dgndczptk/image/upload/v1772976443/portfolio_bags_ogp5tx.png',
  },
  {
    id: 'justshare',
    title: 'JustShare',
    year: '2025',
    desc: 'P2P campus trading platform with JWT auth, Zod validation and Redux.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Redux'],
    github: '',
    live: 'https://rent-project-gray.vercel.app/',
    image: 'https://res.cloudinary.com/dgndczptk/image/upload/v1772976430/portfolio_Rent_l6an0g.png',
  }
]

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold">Projects</motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.id} whileHover={{ scale: 1.02 }} className="group rounded-xl glass neon-glow overflow-hidden">
            <div className="relative w-full h-56 md:h-44 bg-slate-900">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60" />

              {/* overlay buttons appear on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-4 bg-black/60 px-4 py-3 rounded-md">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white rounded-md px-4 py-2 text-sm font-medium text-slate-900 hover:brightness-95">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7v7M10 14L21 3" /></svg>
                      Demo
                    </a>
                  )}
                </div>
              </div>

              {/* featured badge */}
              {p.featured && (
                <div className="absolute top-3 right-3">
                  <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">Featured</span>
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-white font-semibold text-lg">{p.title} <span className="text-muted text-sm">— {p.year}</span></div>
                  <div className="text-slate-300 mt-3">{p.desc}</div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs font-ibm bg-white/6 text-slate-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
