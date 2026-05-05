import { cn } from "@/lib/utils"

interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--ink-muted)]",
        className
      )}
    >
      <span className="inline-block h-px w-6 bg-[var(--line-strong)]" />
      {children}
    </div>
  )
}
