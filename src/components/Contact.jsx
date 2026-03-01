import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <motion.p className="text-sm muted uppercase tracking-wide font-ibm" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}>
            Contact Me
          </motion.p>

          <motion.h2 className="mt-4 text-5xl md:text-6xl font-syne font-medium leading-tight" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
            Let's talk!
          </motion.h2>

          <motion.p className="mt-6 text-lg muted max-w-xl" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}>
            Feel free to reach out! I'm here to help and will respond within 24 hours. Your questions matter to me!
          </motion.p>
        </div>

        <motion.div className="glass p-8 rounded-2xl shadow-xl" initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.2 3.6a1 1 0 01-.21.96l-2.2 2.8a11.042 11.042 0 005.516 5.516l2.8-2.2a1 1 0 01.96-.21l3.6 1.2A1 1 0 0121 17.72V21a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm muted font-ibm">Call me</div>
                <a href="tel:+917827428895" className="mt-1 inline-block text-white font-semibold">+91 7827428895</a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 110-8H8a4 4 0 110 8m8 0v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6" />
                </svg>
              </div>
              <div>
                <div className="text-sm muted font-ibm">Write an email</div>
                <a href="mailto:kavi.workspaceofficial@gmail.com" className="mt-1 inline-block text-white font-semibold">kavi.workspaceofficial@gmail.com</a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM2 20a10 10 0 0116 0" />
                </svg>
              </div>
              <div>
                <div className="text-sm muted font-ibm">Connect with me on LinkedIn</div>
                <a href="https://www.linkedin.com/in/kavi-sharma-29b487284" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-white font-semibold">linkedin.com/in/kavi-sharma-29b487284</a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="text-white mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </div>
              <div>
                <div className="text-sm muted font-ibm">Connect with me on Github</div>
                <a href="https://www.github.com/Kavi-Sharma08" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-white font-semibold">github.com/Kavi-Sharma08</a>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
