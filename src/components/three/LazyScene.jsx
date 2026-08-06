import { Suspense, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

function StaticPanel() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-3/4 w-3/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,139,248,0.06),transparent_70%)] animate-pulse-soft" />
    </div>
  )
}

export default function LazyScene({ children, className = '' }) {
  const reduce = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const observer = useRef(null)

  const setRef = (node) => {
    if (observer.current) {
      observer.current.disconnect()
      observer.current = null
    }
    if (!node) return
    if (reduce) return
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true)
          observer.current?.disconnect()
        }
      },
      { rootMargin: '240px 0px 240px 0px' },
    )
    observer.current.observe(node)
  }

  return (
    <div ref={setRef} className={className}>
      {!reduce && mounted ? <Suspense fallback={<StaticPanel />}>{children}</Suspense> : <StaticPanel />}
    </div>
  )
}
