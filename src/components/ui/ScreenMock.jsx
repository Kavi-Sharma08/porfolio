import Icon from './Icon'

function Clinic({ accent }) {
  return (
    <div className="flex gap-3">
      <div className="hidden w-20 shrink-0 flex-col gap-2 sm:flex">
        <div className="h-2 w-10 rounded bg-white/10" />
        <div className="h-2 w-12 rounded bg-white/5" />
        <div className="h-2 w-9 rounded bg-white/5" />
        <div className="mt-1 h-2 w-11 rounded" style={{ background: `${accent}55` }} />
      </div>
      <div className="flex-1 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] p-2">
              <div className="h-1.5 w-8 rounded bg-white/10" />
              <div className="h-3 w-6 rounded" style={{ background: accent }} />
            </div>
          ))}
        </div>
        <div className="relative h-20 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03]">
          <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 L20 42 L40 46 L60 32 L80 36 L100 24 L120 28 L140 16 L160 20 L180 10 L200 14 L200 60 L0 60 Z"
              fill="url(#chartFill)"
            />
            <path
              d="M0 50 L20 42 L40 46 L60 32 L80 36 L100 24 L120 28 L140 16 L160 20 L180 10 L200 14"
              fill="none"
              stroke={accent}
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="space-y-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
              <div className="h-1.5 flex-1 rounded bg-white/5" />
              <div className="h-1.5 w-10 rounded bg-white/[0.08]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Survey({ accent }) {
  const blocks = [
    { w: 'w-24', active: false },
    { w: 'w-32', active: false },
    { w: 'w-20', active: true },
    { w: 'w-28', active: false },
  ]
  return (
    <div className="flex gap-3">
      <div className="flex-1 space-y-2">
        {blocks.map((b, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 rounded-lg border px-2.5 py-2 ${
              b.active ? 'border-accent/40 bg-accent/[0.06]' : 'border-dashed border-white/15 bg-white/[0.03]'
            }`}
          >
            <Icon name="menu" size={12} className="text-white/30" />
            <div className={`h-1.5 rounded ${b.w} ${b.active ? 'bg-white/20' : 'bg-white/[0.08]'}`} />
            <div
              className="ml-auto h-4 w-4 rounded"
              style={{
                background: b.active ? `${accent}33` : 'transparent',
                border: b.active ? 'none' : '1px solid rgba(255,255,255,0.12)',
              }}
            />
          </div>
        ))}
      </div>
      <div className="hidden w-24 shrink-0 flex-col gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 sm:flex">
        <div className="h-2 w-12 rounded bg-white/10" />
        <div className="h-1.5 w-10 rounded bg-white/5" />
        <div className="mt-1 h-5 rounded" style={{ background: accent }} />
        <div className="h-1.5 w-8 rounded bg-white/5" />
      </div>
    </div>
  )
}

function Rent({ accent }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1.5">
        <Icon name="search" size={11} className="text-white/40" />
        <div className="h-1.5 w-24 rounded bg-white/5" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.03]">
            <div
              className="h-10"
              style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.06), ${accent}22)` }}
            />
            <div className="space-y-1.5 p-2">
              <div className="h-1.5 w-14 rounded bg-white/10" />
              <div className="h-1.5 w-9 rounded bg-white/5" />
              <div className="h-3 w-10 rounded" style={{ background: accent }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ScreenMock({ variant = 'clinic', accent = '#8b8bf8', className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c11] ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="mx-auto flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1 font-mono text-[10px] text-white/40">
          <Icon name="lock" size={9} />
          {variant}.app
        </div>
      </div>
      <div className="p-4">
        {variant === 'clinic' && <Clinic accent={accent} />}
        {variant === 'survey' && <Survey accent={accent} />}
        {variant === 'rent' && <Rent accent={accent} />}
      </div>
    </div>
  )
}
