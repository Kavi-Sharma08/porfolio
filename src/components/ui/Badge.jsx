export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 font-mono text-[11px] leading-none text-white/60 ${className}`}
    >
      {children}
    </span>
  )
}
