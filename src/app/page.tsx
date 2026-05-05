import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Eyebrow from "@/components/Eyebrow"
import Section from "@/components/Section"
import PricingCard from "@/components/PricingCard"
import HeroCard from "@/app/_components/HeroCard"
import RemoteVisual from "@/app/_components/RemoteVisual"
import { TIERS } from "@/app/_data/pricing"

export const metadata: Metadata = {
  title: "OnTheMarques — Car buying, made easy.",
  description:
    "Independent car-buying consultancy. Expert guidance through research, negotiation, and paperwork — so you drive away confident.",
}

/* ─── Stat strip data ─────────────────────────────────────────────── */
const STATS = [
  { value: "20+", label: "Years around the industry" },
  { value: "Flat", label: "Fee structure — never commission" },
  { value: "100%", label: "Independent advice" },
  { value: "0", label: "Dealer kickbacks" },
]

/* ─── How it works data ───────────────────────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "Free 30-min call",
    body: "We talk needs, budget, and timeline. You leave with a clearer head — no commitment.",
  },
  {
    num: "02",
    title: "Shortlist & compare",
    body: "I build a side-by-side of cars that actually fit you, with total cost, reliability, and resale.",
  },
  {
    num: "03",
    title: "Negotiate the deal",
    body: "I handle dealer back-and-forth or coach you through it. You see the math behind every number.",
  },
  {
    num: "04",
    title: "After-purchase support",
    body: "First-week walkthrough, maintenance plan, and a text-line for the questions that come up later.",
  },
]

/* ─── Bullets for "Why people trust me" ──────────────────────────── */
const TRUST_BULLETS = [
  "Flat-fee, never commission-based",
  "Specialty: US domestic & JDM",
  "20+ years around the industry",
  "Transparent math — every number explained",
]

/* ─── Remote help badge labels ────────────────────────────────────── */
const REMOTE_BADGES = [
  "Video call walk-throughs",
  "Listing review by text",
  "Contract review (PDF)",
  "Live negotiation coaching",
  "Out-of-state deals",
]

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <Section className="pt-20 md:pt-28 pb-28 md:pb-36">
        <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7 fade-up">
            <Eyebrow>Independent car-buying advisor</Eyebrow>

            <h1
              className="display-tight text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] leading-[0.98] text-[var(--ink)]"
            >
              Buying a car shouldn&apos;t<br />feel like a fight.
            </h1>

            <p className="max-w-[560px] text-[17px] md:text-[18px] text-[var(--ink-muted)] leading-relaxed">
              I help you choose the right car, compare options honestly, and walk
              into the dealer (or not at all) with a plan. No kickbacks, no
              pressure — just one calm advisor on your side.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-started"
                className="inline-flex h-14 items-center justify-center rounded-full px-7 text-[15px] font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
              >
                📅 Book a free 30-min call
              </Link>
              <Link
                href="/get-started"
                className="inline-flex h-14 items-center justify-center rounded-full px-7 text-[15px] font-medium border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
              >
                Fill out the intake form →
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-[var(--ink-subtle)]">
              {["No dealer kickbacks", "100% remote", "Plain English"].map((t) => (
                <span key={t} className="flex items-center gap-1">
                  <span className="text-emerald-500 font-bold">✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — HeroCard */}
          <div className="fade-up" style={{ animationDelay: "120ms" }}>
            <HeroCard />
          </div>
        </div>
      </Section>

      {/* ── 2. TRUST STRIP ───────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="rounded-2xl border border-[var(--line)] bg-white overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--line)]">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-1 px-8 py-8">
                <span className="display text-[28px] md:text-[34px] text-[var(--ink)]">
                  {value}
                </span>
                <span className="text-[13px] text-[var(--ink-muted)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 3. HOW IT WORKS ──────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="mb-12">
          <h2 className="display-tight text-[32px] md:text-[44px] text-[var(--ink)]">
            One advisor, four steps,<br />zero dealership stress.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map(({ num, title, body }) => (
            <div
              key={num}
              className="relative flex flex-col gap-4 rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[13px] font-medium text-[var(--ink-subtle)]">
                  {num}
                </span>
                <div className="h-7 w-7 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--ink-muted)]">
                  <ArrowRight size={13} />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="display text-[20px] text-[var(--ink)]">{title}</h3>
                <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. WHY PEOPLE TRUST ME ───────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Eyebrow>Why people trust me</Eyebrow>
              <h2 className="display-tight text-[32px] md:text-[40px] text-[var(--ink)]">
                I work for you.<br />Not the dealer.
              </h2>
              <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">
                Most people navigate the biggest purchase of their year alone,
                against salespeople who do this every day. I even the odds.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {TRUST_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-[var(--ink-soft)]">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <span className="text-emerald-600 text-[11px] font-bold">✓</span>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — 2×2 placeholder testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative flex flex-col justify-between gap-4 rounded-2xl border-2 border-dashed border-[var(--line-strong)] p-5"
              >
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center rounded-full bg-[var(--bg-dim)] px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-[var(--ink-subtle)] font-medium">
                    Placeholder
                  </span>
                </div>
                <p className="mt-6 text-[13px] italic text-[var(--ink-subtle)] leading-relaxed">
                  "Add a real client quote here once you've gathered one. Two to
                  three sentences works best — a specific outcome, in their voice."
                </p>
                <p className="text-[12px] text-[var(--ink-subtle)]">
                  Client name / Vehicle · situation
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 5. REMOTE HELP ───────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="relative rounded-3xl border border-[var(--line)] bg-white overflow-hidden">
          {/* bg-grid overlay at 40% opacity */}
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 p-8 md:p-12 lg:p-16 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Eyebrow>Remote help, anywhere</Eyebrow>
                <h2 className="display-tight text-[32px] md:text-[44px] text-[var(--ink)]">
                  You stay home.<br />I do the running around.
                </h2>
                <p className="text-[15px] text-[var(--ink-muted)] leading-relaxed">
                  Calls happen over Zoom or phone. Listings, contracts, and offers
                  move over text and email. Your zip code isn't a problem — if
                  you're US-based, we can work together.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {REMOTE_BADGES.map((b) => (
                  <span
                    key={b}
                    className="inline-flex rounded-full border border-[var(--line-strong)] bg-white px-3 py-1.5 text-[13px] text-[var(--ink-muted)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — RemoteVisual */}
            <RemoteVisual />
          </div>
        </div>
      </Section>

      {/* ── 6. PRICING PREVIEW ───────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="flex items-baseline justify-between mb-10 gap-4">
          <h2 className="display-tight text-[32px] md:text-[40px] text-[var(--ink)]">
            Three ways to work together.
          </h2>
          <Link
            href="/services"
            className="text-sm text-[var(--accent)] font-medium hover:underline underline-offset-2 shrink-0"
          >
            See full details →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </Section>

      {/* ── 7. FINAL CTA ─────────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="rounded-3xl bg-[var(--accent)] px-8 md:px-16 py-16 md:py-20 flex flex-col items-start gap-8">
          <h2 className="display-tight text-[36px] md:text-[52px] leading-[0.98] text-[var(--accent-fg)]">
            The first call is free.<br />Thirty minutes, no pitch.
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium bg-white text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
            >
              Book a free call
            </Link>
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Fill out the intake form →
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
