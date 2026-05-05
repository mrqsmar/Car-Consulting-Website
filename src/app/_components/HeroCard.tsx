import Link from "next/link"

export default function HeroCard() {
  return (
    <div className="relative pb-8 pl-2">
      {/* Card — no overflow-hidden so chat bubble can escape */}
      <div className="relative rounded-2xl bg-white border border-[var(--line)] shadow-xl">
        {/* 4:3 placeholder image */}
        <div className="relative aspect-[4/3] ph rounded-t-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[var(--ink-subtle)] text-sm">[ vehicle photo ]</span>
          </div>
          {/* Corner badges */}
          <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-[var(--ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              In review
            </span>
            <span className="inline-flex rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] text-[var(--ink-muted)]">
              2023 · 12,400 mi
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[15px] font-medium text-[var(--ink)] leading-snug">
              2023 Ford Bronco Outer Banks
            </h3>
            <span className="font-mono text-sm font-semibold text-[var(--ink)] shrink-0">
              $42,900
            </span>
          </div>

          {/* 3-col metrics */}
          <div className="grid grid-cols-3 divide-x divide-[var(--line)] rounded-xl border border-[var(--line)] overflow-hidden text-center">
            <div className="py-2.5 px-2">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs font-mono font-semibold text-[var(--ink)]">$48.1k</span>
              </div>
              <div className="text-[10px] text-[var(--ink-subtle)]">Total cost</div>
            </div>
            <div className="py-2.5 px-2">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-[var(--ink)]">B+</span>
              </div>
              <div className="text-[10px] text-[var(--ink-subtle)]">Reliability</div>
            </div>
            <div className="py-2.5 px-2">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                <span className="text-[11px] font-semibold text-[var(--ink)]">$1.6k high</span>
              </div>
              <div className="text-[10px] text-[var(--ink-subtle)]">Market</div>
            </div>
          </div>

          <Link
            href="/get-started"
            className="text-sm text-[var(--accent)] font-medium hover:underline underline-offset-2"
          >
            See the full breakdown →
          </Link>
        </div>
      </div>

      {/* Floating chat bubble */}
      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 flex items-start gap-2.5 bg-white rounded-2xl shadow-xl border border-[var(--line)] p-3 max-w-[210px] z-10">
        <div className="h-8 w-8 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--accent-fg)] text-[11px] font-bold shrink-0">
          MM
        </div>
        <p className="text-[12px] text-[var(--ink-soft)] leading-snug">
          <span className="font-semibold">Marques:</span> The third one is overpriced for its trim. Skip it.
        </p>
      </div>
    </div>
  )
}
