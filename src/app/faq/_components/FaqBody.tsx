"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_DATA } from "@/app/faq/_data/faq"

const ALL_CATS = ["All", "How it works", "Pricing", "Cars & specialties", "Logistics"]

export default function FaqBody() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? FAQ_DATA
      : FAQ_DATA.filter((c) => c.cat === active)

  // Build flat list of all items with their IDs for Accordion
  // We open the very first item by default
  const firstItemId = "faq-0-0"

  return (
    <div className="grid lg:grid-cols-[8fr_4fr] gap-10 lg:gap-14 items-start">
      {/* Left — filters + accordion */}
      <div className="flex flex-col gap-8">
        {/* Category filter chips */}
        <div className="flex flex-wrap gap-2">
          {ALL_CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                active === cat
                  ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)]"
                  : "bg-white text-[var(--ink-muted)] border-[var(--line)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <Accordion
          type="multiple"
          defaultValue={[firstItemId]}
          className="flex flex-col gap-6"
        >
          {filtered.map((category, catIdx) => {
            const realCatIdx = FAQ_DATA.findIndex((c) => c.cat === category.cat)
            return (
              <div key={category.cat} className="flex flex-col gap-0">
                {/* Category label */}
                <p className="text-[11px] uppercase tracking-[0.14em] font-medium text-[var(--ink-subtle)] mb-2">
                  {category.cat}
                </p>

                <div className="rounded-2xl border border-[var(--line)] bg-white overflow-hidden divide-y divide-[var(--line)]">
                  {category.items.map((item, itemIdx) => {
                    const id = `faq-${realCatIdx}-${itemIdx}`
                    return (
                      <AccordionItem
                        key={id}
                        value={id}
                        className="border-none px-5"
                      >
                        <AccordionTrigger className="text-[15px] font-medium text-[var(--ink)] text-left hover:no-underline py-4">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[14px] text-[var(--ink-muted)] leading-relaxed pb-5 pt-0">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </Accordion>
      </div>

      {/* Right — sticky sidebar */}
      <div className="lg:sticky lg:top-24">
        <div className="rounded-2xl border border-[var(--line)] bg-white p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-[16px] font-medium text-[var(--ink)]">
              Still have questions?
            </h3>
            <p className="text-[14px] text-[var(--ink-muted)] leading-relaxed">
              The discovery call is free — just ask me there.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="/get-started"
              className="inline-flex h-10 w-full items-center justify-center rounded-full px-5 text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
            >
              Book the free call
            </a>
            <a
              href="mailto:marmarbarcar@gmail.com"
              className="inline-flex h-10 w-full items-center justify-center rounded-full px-5 text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
            >
              Send an email
            </a>
          </div>

          <div className="pt-2 border-t border-[var(--line)]">
            <a
              href="mailto:marmarbarcar@gmail.com"
              className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
            >
              marmarbarcar@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
