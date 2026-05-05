import type { Metadata } from "next"
import Eyebrow from "@/components/Eyebrow"
import Section from "@/components/Section"
import FaqBody from "@/app/faq/_components/FaqBody"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with OnTheMarques — pricing, process, timeline, and what to expect from your car-buying consultant.",
}

export default function FaqPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="flex flex-col gap-5 max-w-[640px]">
          <Eyebrow>Frequently asked</Eyebrow>
          <h1 className="display-tight text-[44px] md:text-[60px] leading-[0.98] text-[var(--ink)]">
            Questions, answered<br />without the jargon.
          </h1>
          <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed">
            If yours isn't here, the discovery call is free — just ask me there.
          </p>
        </div>
      </Section>

      {/* Body */}
      <Section className="pb-20 md:pb-28">
        <FaqBody />
      </Section>
    </>
  )
}
