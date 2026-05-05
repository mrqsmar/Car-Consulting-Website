import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  price: string
  sub: string
  features: string[]
  featured?: boolean
  ctaHref: string
}

export default function PricingCard({
  name,
  price,
  sub,
  features,
  featured = false,
  ctaHref,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl bg-white p-7 gap-6 transition-shadow",
        featured
          ? "ring-2 ring-[var(--accent)] shadow-lg"
          : "border border-[var(--line)] shadow-sm hover:shadow-md"
      )}
    >
      {/* "Most popular" badge */}
      {featured && (
        <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-semibold text-[var(--accent-fg)]">
          <Sparkles size={11} />
          Most popular
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[11px] uppercase tracking-[0.12em] font-medium text-[var(--ink-subtle)]">
          {name}
        </p>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-semibold tracking-tight text-[var(--ink)]">
            {price}
          </span>
        </div>
        <p className="text-sm text-[var(--ink-muted)]">{sub}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--line)]" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--ink-soft)]">
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-[var(--accent)]"
              strokeWidth={2.5}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={ctaHref}
        className={cn(
          "mt-auto inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-medium transition-colors",
          featured
            ? "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90"
            : "border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--bg-warm)]"
        )}
      >
        Get started
      </Link>
    </div>
  )
}
