import Link from "next/link"
import Logo from "@/components/Logo"

const SITE_LINKS = [
  { label: "Home",        href: "/" },
  { label: "Services",    href: "/services" },
  { label: "About",       href: "/about" },
  { label: "FAQ",         href: "/faq" },
  { label: "Get started", href: "/get-started" },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-warm)] border-t border-[var(--line)] mt-auto">
      {/* 4-column grid */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-14 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

        {/* Col 1 — Logo + tagline + status badges */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Logo />
          <p className="text-sm text-[var(--ink-muted)] leading-relaxed max-w-[220px]">
            An independent car-buying advisor. Honest guidance, no dealer
            kickbacks, calmer decisions.
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--ink-muted)] bg-white border border-[var(--line)] rounded-full px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
              Booking April–May
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[var(--ink-muted)] bg-white border border-[var(--line)] rounded-full px-2.5 py-1">
              Remote · US-wide
            </span>
          </div>
        </div>

        {/* Col 2 — Site links */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.12em] font-medium text-[var(--ink-subtle)]">
            Site
          </p>
          <nav className="flex flex-col gap-2">
            {SITE_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3 — Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] uppercase tracking-[0.12em] font-medium text-[var(--ink-subtle)]">
            Contact
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:marmarbarcar@gmail.com"
              className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            >
              marmarbarcar@gmail.com
            </a>
            <p className="text-sm text-[var(--ink-subtle)]">
              Response within 24 hours
            </p>
          </div>
        </div>

        {/* Col 4 — CTA */}
        <div className="flex flex-col gap-4">
          <p className="text-[11px] uppercase tracking-[0.12em] font-medium text-[var(--ink-subtle)]">
            Ready when you are
          </p>
          <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
            No pressure, no sales pitch. Start with a free 20-minute call to
            see if we're the right fit.
          </p>
          <Link
            href="/get-started"
            className="inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
          >
            Book a free call →
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--line)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[var(--ink-subtle)]">
            © {year} OnTheMarques · Independent automotive advisory
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[var(--ink-subtle)]">
              🔒 Your info stays private
            </span>
            <Link
              href="/privacy"
              className="text-xs text-[var(--ink-subtle)] hover:text-[var(--ink)] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--ink-subtle)] hover:text-[var(--ink)] transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
