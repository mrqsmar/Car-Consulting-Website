import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import Eyebrow from "@/components/Eyebrow"
import Section from "@/components/Section"
import IntakeForm from "@/app/get-started/_components/IntakeForm"

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Fill out the OnTheMarques intake form. Takes about 4 minutes — I'll review it before our call so we don't waste your 30 minutes on basics.",
}

const NEXT_STEPS = [
  {
    label: "I review your intake",
    body: "Usually within a few hours. I read everything before we talk.",
  },
  {
    label: "You get three time slots",
    body: "I reply within one business day with specific options that fit your window.",
  },
  {
    label: "We talk for 30 minutes",
    body: "Goals, budget, timeline. You'll leave with a clearer picture — no commitment.",
  },
  {
    label: "I send a written plan",
    body: "After the call, if it's a good fit, you get a written proposal within 24 hours.",
  },
]

export default function GetStartedPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────────────── */}
      <Section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="flex flex-col gap-5 max-w-[640px]">
          <div className="flex items-center justify-between gap-4">
            <Eyebrow>Get started</Eyebrow>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-[11px] text-[var(--ink-subtle)]">
              🔒 Private · never shared
            </span>
          </div>
          <h1 className="display-tight text-[44px] md:text-[60px] leading-[0.98] text-[var(--ink)]">
            Tell me about your<br />car situation.
          </h1>
          <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Takes about 4 minutes. I'll review it before our call so we don't
            waste any of your 30 minutes on basics. Your info stays private —
            never shared, never sold.
          </p>
        </div>
      </Section>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <Section className="pb-20 md:pb-28">
        <div className="grid lg:grid-cols-[8fr_4fr] gap-10 lg:gap-14 items-start">
          {/* Left — form */}
          <IntakeForm />

          {/* Right — sticky sidebar */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-5">
            {/* What happens next */}
            <div className="rounded-2xl border border-[var(--line)] bg-white p-6 flex flex-col gap-5">
              <h2 className="text-[15px] font-medium text-[var(--ink)]">
                What happens next
              </h2>
              <ol className="flex flex-col gap-4">
                {NEXT_STEPS.map(({ label, body }, i) => (
                  <li key={label} className="flex gap-3">
                    <span className="h-6 w-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[11px] font-semibold text-[var(--accent)] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-[13px] font-medium text-[var(--ink)]">{label}</p>
                      <p className="text-[12px] text-[var(--ink-muted)] mt-0.5 leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Privacy footer */}
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-warm)] p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--ink-muted)]">
                <Check size={14} className="text-emerald-500 shrink-0" />
                Your information is never shared or sold
              </div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--ink-muted)]">
                <Check size={14} className="text-emerald-500 shrink-0" />
                No spam — ever
              </div>
              <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--ink-muted)]">
                <Check size={14} className="text-emerald-500 shrink-0" />
                Ask to delete your data any time
              </div>
              <div className="mt-1 pt-3 border-t border-[var(--line)]">
                <p className="text-[12px] text-[var(--ink-subtle)]">
                  Questions?{" "}
                  <Link
                    href="/faq"
                    className="text-[var(--accent)] hover:underline"
                  >
                    Read the FAQ
                  </Link>{" "}
                  or email{" "}
                  <a
                    href="mailto:marmarbarcar@gmail.com"
                    className="text-[var(--accent)] hover:underline"
                  >
                    marmarbarcar@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
