export default function RemoteVisual() {
  return (
    <div className="relative h-[340px] sm:h-[380px]">
      {/* Top-right: Zoom window */}
      <div className="absolute top-0 right-0 w-[88%] rounded-xl bg-white border border-[var(--line)] shadow-lg overflow-hidden z-10">
        {/* Traffic-light chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-[var(--line)] bg-[var(--bg-warm)]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-auto text-[11px] text-[var(--ink-muted)] font-mono tracking-tight">
            zoom · 30:00
          </span>
        </div>
        {/* 16:9 video placeholder */}
        <div className="aspect-video ph flex items-center justify-center">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)]">
            Live walkthrough
          </span>
        </div>
      </div>

      {/* Bottom-left: Message card */}
      <div className="absolute bottom-0 left-0 w-[70%] rounded-xl bg-white border border-[var(--line)] shadow-lg p-4 flex flex-col gap-2 z-20">
        <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--ink-subtle)]">
          Today, 2:14 PM
        </p>
        <p className="text-[13px] text-[var(--ink-soft)] leading-snug">
          Saw the Outer Banks listing — ask them to drop $1,200, here's the comp
          pricing →
        </p>
        <div className="inline-flex items-center gap-1.5 bg-[var(--bg-warm)] rounded-lg px-2.5 py-1.5 w-fit">
          {/* Mini PDF icon */}
          <svg
            width="11"
            height="13"
            viewBox="0 0 11 13"
            fill="none"
            className="text-[var(--accent)] shrink-0"
          >
            <rect
              x="0.625"
              y="0.625"
              width="9.75"
              height="11.75"
              rx="1.375"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <path
              d="M2.5 4.5h6M2.5 6.5h6M2.5 8.5h4"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[11px] font-medium text-[var(--ink-muted)]">
            PDF · comps.pdf
          </span>
        </div>
      </div>
    </div>
  )
}
