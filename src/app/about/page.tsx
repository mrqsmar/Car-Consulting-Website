import type { Metadata } from "next"
import Link from "next/link"
import Eyebrow from "@/components/Eyebrow"
import Section from "@/components/Section"

export const metadata: Metadata = {
  title: "About",
  description:
    "Hi, I'm Marques — independent car-buying advisor. 20+ years around the industry. No dealer kickbacks, no commissions. Just honest guidance.",
}

const PRINCIPLES = [
  {
    num: "01",
    title: "Your interest, not theirs",
    body: "No referral fees from dealers, lenders, or warranty companies. Period.",
  },
  {
    num: "02",
    title: "Plain language",
    body: "If a finance term is confusing, I rewrite it until it isn't. You should understand every dollar.",
  },
  {
    num: "03",
    title: "The right car beats the cheap car",
    body: "A car you love at a fair price beats a \"deal\" on the wrong vehicle every time.",
  },
  {
    num: "04",
    title: "Walk away ready",
    body: "Walking away is the strongest move at the table. You should always feel free to.",
  },
  {
    num: "05",
    title: "Show your work",
    body: "Every recommendation comes with the math behind it. You can challenge any number.",
  },
  {
    num: "00",
    title: "Have fun with it",
    body: "Cars are joyful. We can make smart decisions and still enjoy the process.",
  },
]

const BRANDS = [
  "Ford", "Chevrolet", "GMC", "Ram",
  "Jeep", "Cadillac", "Lincoln", "Toyota",
  "Honda", "Mazda", "Subaru", "Nissan",
]

const ABOUT_BADGES = [
  "US Domestic specialist",
  "JDM-friendly",
  "Remote · US-wide",
  "Independent · flat-fee",
]

export default function AboutPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <Section className="pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <Eyebrow>About</Eyebrow>
            <h1 className="display-tight text-[44px] md:text-[60px] leading-[0.98] text-[var(--ink)]">
              Hi, I&apos;m Marques.<br />I help people buy cars.
            </h1>

            <div className="flex flex-col gap-4 max-w-[560px]">
              <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed">
                I've spent 20+ years researching cars and turning that research into
                car purchases. I started OnTheMarques because I kept watching friends
                and family get talked into bad deals on cars they didn't love.
              </p>
              <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed">
                The job is simple: be the person on your side of the table. I don't
                sell cars. I don't take dealer kickbacks. I read the contract slowly
                so you don't have to.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {ABOUT_BADGES.map((b) => (
                <span
                  key={b}
                  className="inline-flex rounded-full border border-[var(--line-strong)] bg-white px-3.5 py-1.5 text-[13px] text-[var(--ink-muted)]"
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/get-started"
                className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
              >
                Book a free call
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
              >
                See services →
              </Link>
            </div>
          </div>

          {/* Right — portrait placeholder */}
          <div className="relative aspect-[4/5] ph rounded-2xl overflow-hidden">
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-[var(--ink)]">
                Founder photo
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent z-10">
              <p className="text-white text-[13px] font-medium">Marques Mar</p>
              <p className="text-white/70 text-[12px]">Founder, advisor</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. PRINCIPLES ────────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="mb-10">
          <h2 className="display-tight text-[32px] md:text-[44px] text-[var(--ink)]">
            Five things I won&apos;t budge on.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRINCIPLES.map(({ num, title, body }) => (
            <div
              key={num + title}
              className="flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-white p-6"
            >
              <span className="font-mono text-[12px] text-[var(--ink-subtle)]">{num}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-medium display text-[var(--ink)]">{title}</h3>
                <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 3. SPECIALTIES ───────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-5 lg:sticky lg:top-24">
            <h2 className="display-tight text-[32px] md:text-[40px] text-[var(--ink)]">
              Domestic-first.<br />JDM-fluent.
            </h2>
            <div className="flex flex-col gap-4 text-[15px] text-[var(--ink-muted)] leading-relaxed">
              <p>
                My deepest knowledge is in US domestic trucks and SUVs — Ford,
                Chevy, GMC, Ram, Jeep, Cadillac, Lincoln. I've tracked these
                lineups through every trim, engine, and model-year change for two
                decades.
              </p>
              <p>
                I'm equally comfortable in the JDM space: Civics, Accords,
                Camrys, 4Runners, Tacomas, Mazda3s, GR86s. Reliability records,
                depreciation curves, known issues — I have the receipts.
              </p>
            </div>
          </div>

          {/* Right — brand cards */}
          <div className="grid grid-cols-3 gap-3">
            {BRANDS.map((brand) => (
              <div
                key={brand}
                className="flex flex-col gap-0.5 rounded-xl border border-[var(--line)] bg-white px-4 py-3.5"
              >
                <span className="text-[14px] font-medium text-[var(--ink)]">{brand}</span>
                <span className="text-[10px] uppercase tracking-[0.1em] text-[var(--ink-subtle)]">
                  Available
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 4. CTA CARD ──────────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="rounded-3xl border border-[var(--line)] bg-white px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-[440px]">
            <h2 className="display text-[22px] md:text-[26px] text-[var(--ink)]">
              Ready to work together?
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
