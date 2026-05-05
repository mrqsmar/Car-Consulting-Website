import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import Eyebrow from "@/components/Eyebrow"
import Section from "@/components/Section"
import PricingCard from "@/components/PricingCard"
import { TIERS } from "@/app/_data/pricing"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OnTheMarques services — Consult, Guided Buy, or Full Service. Flat fees, no commissions. Every package starts with a free 30-min call.",
}

/* ─── Comparison table ────────────────────────────────────────────── */
type CellValue = boolean | string

interface TableRow {
  label: string
  consult: CellValue
  guided: CellValue
  full: CellValue
}

const TABLE_ROWS: TableRow[] = [
  { label: "Free 30-minute discovery call", consult: true, guided: true, full: true },
  { label: "Personalized car shortlist", consult: true, guided: true, full: true },
  { label: "Total-cost-of-ownership math", consult: false, guided: true, full: true },
  { label: "Listing & dealer vetting", consult: false, guided: true, full: true },
  { label: "Negotiation scripts (you negotiate)", consult: false, guided: true, full: false },
  { label: "I negotiate on your behalf", consult: false, guided: false, full: true },
  { label: "Contract & finance review", consult: false, guided: true, full: true },
  { label: "Out-of-state purchase coordination", consult: false, guided: false, full: true },
  { label: "Post-purchase support", consult: "7 days email", guided: "14 days text", full: "90 days text" },
]

/* ─── Process steps ───────────────────────────────────────────────── */
const PROCESS = [
  { num: "00", title: "Discovery call", body: "30 min, free. Goals, budget, timeline, deal-breakers." },
  { num: "01", title: "Written buying plan", body: "Shortlist with comps, ownership math, and a search strategy in writing." },
  { num: "02", title: "Active search", body: "I review listings as you find them — or do the searching for you on Full Service." },
  { num: "03", title: "Offer & negotiate", body: "Scripts and live coaching, or I handle dealer comms directly." },
  { num: "04", title: "Contract review", body: "Line-by-line check before you sign. Catches add-ons, gotchas, and rate markups." },
  { num: "05", title: "Post-purchase", body: "First-week walkthrough, maintenance plan, ongoing text support per tier." },
]

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <span className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <Check size={13} strokeWidth={2.5} className="text-emerald-600" />
        </span>
      </div>
    )
  }
  if (value === false) {
    return <div className="text-center text-[var(--ink-subtle)]">—</div>
  }
  return <div className="text-center text-[13px] text-[var(--ink-muted)]">{value}</div>
}

export default function ServicesPage() {
  return (
    <>
      {/* ── 1. PAGE HEADER ─────────────────────────────────────────── */}
      <Section className="pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="flex flex-col gap-5 max-w-[640px]">
          <Eyebrow>Services &amp; pricing</Eyebrow>
          <h1 className="display-tight text-[44px] md:text-[60px] leading-[0.98] text-[var(--ink)]">
            Pick the level of help<br />that fits your moment.
          </h1>
          <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Every package is a flat fee — I don't make more when you spend more.
            No commissions, no referral arrangements. All of them start with the
            same free 30-minute discovery call.
          </p>
        </div>
      </Section>

      {/* ── 2. PRICING TIERS ───────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-[var(--ink-subtle)]">
          Add-ons available: pre-purchase inspection coordination ($75),
          trade-in valuation ($75), out-of-state title/registration help ($150).
        </p>
      </Section>

      {/* ── 3. COMPARISON TABLE ────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <h2 className="display-tight text-[32px] md:text-[40px] text-[var(--ink)] mb-10">
          Side by side.
        </h2>

        <div className="rounded-2xl border border-[var(--line)] overflow-auto">
          <table className="w-full min-w-[540px] text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[var(--bg-warm)]">
                <th className="text-left px-5 py-4 text-[var(--ink-subtle)] font-medium text-[13px] w-[40%]">
                  Feature
                </th>
                <th className="px-4 py-4 text-center text-[var(--ink)] font-medium text-[13px]">
                  Consult
                </th>
                <th className="px-4 py-4 text-center text-[var(--accent)] font-semibold text-[13px]">
                  Guided Buy
                </th>
                <th className="px-4 py-4 text-center text-[var(--ink)] font-medium text-[13px]">
                  Full Service
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={i < TABLE_ROWS.length - 1 ? "border-b border-[var(--line)]" : ""}
                >
                  <td className="px-5 py-3.5 text-[var(--ink-soft)] text-[13px]">
                    {row.label}
                  </td>
                  <td className="px-4 py-3.5">
                    <Cell value={row.consult} />
                  </td>
                  <td className="px-4 py-3.5 bg-[var(--accent)]/[0.03]">
                    <Cell value={row.guided} />
                  </td>
                  <td className="px-4 py-3.5">
                    <Cell value={row.full} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 4. PROCESS DETAIL ──────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[4fr_8fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-4 lg:sticky lg:top-24">
            <h2 className="display-tight text-[28px] md:text-[36px] text-[var(--ink)]">
              No surprises, ever.
            </h2>
            <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">
              Every step has a clear output — something you hold in your hand
              (or inbox) before we move forward. You always know exactly where we
              are.
            </p>
          </div>

          {/* Right — stacked process cards */}
          <div className="flex flex-col gap-3">
            {PROCESS.map(({ num, title, body }) => (
              <div
                key={num}
                className="flex gap-5 rounded-2xl border border-[var(--line)] bg-white p-5"
              >
                <span className="font-mono text-[13px] text-[var(--ink-subtle)] shrink-0 mt-0.5">
                  {num}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-medium text-[var(--ink)]">{title}</h3>
                  <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 5. CTA CARD ────────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="rounded-3xl border border-[var(--line)] bg-white px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-[440px]">
            <h2 className="display text-[22px] md:text-[26px] text-[var(--ink)]">
              Not sure which fits?
            </h2>
            <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">
              Book the free call. We'll figure it out in 30 minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/get-started"
              className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
            >
              Book free call
            </Link>
            <Link
              href="/faq"
              className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
            >
              Read the FAQ →
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
