"use client"

import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check, ChevronRight, ChevronLeft, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

/* ─── Zod schema ──────────────────────────────────────────────────── */
const intakeSchema = z.object({
  name: z.string().min(1, "Please share your name so I know who I'm talking to."),
  email: z.string().email("That email doesn't look right — double-check?"),
  phone: z
    .string()
    .refine(
      (v) => !v || /^[+()\d\s\-.]{7,}$/.test(v),
      "Use digits and spaces — e.g. (555) 123-4567."
    ),
  location: z.string().min(1, "City + state helps me think about local market and taxes."),
  budget: z.enum(
    ["<15k", "15-25k", "25-40k", "40-60k", "60-90k", "90k+", "unsure"] as const,
    { error: "Pick a range — we can refine on the call." }
  ),
  purchaseType: z.enum(["new", "used", "lease", "open"] as const),
  timeline: z.enum(["now", "1-3mo", "3-6mo", "exploring"] as const),
  carsConsidered: z.string().min(1, "Even one or two helps me start. \"Not sure\" is fine too."),
  mustHaves: z.array(z.string()),
  niceToHaves: z.array(z.string()),
  currentCar: z.string().optional(),
  tradeIn: z.enum(["yes", "sell", "keep", "na"] as const).optional(),
  financing: z.enum(["cash", "preapproved", "shopping", "unsure"] as const),
  concern: z.string().min(1, "What worries you most? Even one sentence helps."),
  callTime: z.enum(["weekday-am", "weekday-pm", "evening", "weekend"] as const),
})

type IntakeValues = z.infer<typeof intakeSchema>

/* ─── Feature options ─────────────────────────────────────────────── */
const FEATURE_OPTIONS = [
  "AWD / 4WD", "Towing capability", "Three rows", "Heated seats",
  "CarPlay / Android Auto", "Sunroof / moonroof", "Adaptive cruise",
  "Lane keep assist", "Premium audio", "Leather interior",
  "Manual transmission", "Hybrid powertrain", "EV / electric",
  "Roof rack", "Cargo space", "Fuel economy", "Performance / power", "Quiet cabin",
]

/* ─── Step field maps ─────────────────────────────────────────────── */
const STEP_FIELDS: Record<number, (keyof IntakeValues)[]> = {
  1: ["name", "email", "phone", "location"],
  2: ["budget", "purchaseType", "timeline", "carsConsidered"],
  3: ["financing", "concern", "callTime"],
}

const STEP_LABELS = ["About you", "The car", "Your situation", "Review"]

/* ─── Sub-components ──────────────────────────────────────────────── */
function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {STEP_LABELS.map((label, i) => {
        const num = i + 1
        const isComplete = num < current
        const isActive = num === current
        return (
          <React.Fragment key={num}>
            <div
              className={cn(
                "flex items-center gap-1.5 shrink-0",
                isActive && "text-[var(--accent)]",
                isComplete && "text-[var(--ink-muted)]",
                !isActive && !isComplete && "text-[var(--ink-subtle)]"
              )}
            >
              <span
                className={cn(
                  "h-6 w-6 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0",
                  isComplete && "bg-[var(--accent)] text-[var(--accent-fg)]",
                  isActive && "border-2 border-[var(--accent)] text-[var(--accent)]",
                  !isActive && !isComplete && "border border-[var(--line-strong)] text-[var(--ink-subtle)]"
                )}
              >
                {isComplete ? <Check size={11} strokeWidth={2.5} /> : num}
              </span>
              <span className="hidden sm:inline text-xs font-medium">{label}</span>
            </div>
            {i < STEP_LABELS.length - 1 && (
              <div
                className={cn(
                  "h-px flex-1 min-w-4 transition-colors",
                  num < current ? "bg-[var(--accent)]" : "bg-[var(--line)]"
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="text-[12px] text-red-500 mt-1">{msg}</p>
}

function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[13px] font-medium text-[var(--ink)] mb-1.5">
      {children}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
  )
}

interface SegOpt { label: string; value: string }
function Segmented({
  options, value, onChange,
}: { options: SegOpt[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
            value === opt.value
              ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)]"
              : "bg-white text-[var(--ink-muted)] border-[var(--line)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

function ChipSelect({
  options, value, onChange,
}: { options: string[]; value: string[]; onChange: (v: string[]) => void }) {
  const toggle = (opt: string) => {
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt])
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => toggle(opt)}
          className={cn(
            "px-3 py-1.5 rounded-full text-[13px] transition-colors border",
            value.includes(opt)
              ? "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/30 font-medium"
              : "bg-white text-[var(--ink-muted)] border-[var(--line)] hover:border-[var(--line-strong)]"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function ReviewRow({
  label, value, onEdit,
}: { label: string; value: string; onEdit: () => void }) {
  return (
    <div className="flex items-start justify-between py-3 border-b border-[var(--line)] last:border-0 gap-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--ink-subtle)]">{label}</p>
        <p className="text-[14px] text-[var(--ink)] mt-0.5">{value || "—"}</p>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="text-xs text-[var(--accent)] hover:underline shrink-0"
      >
        Edit
      </button>
    </div>
  )
}

/* ─── Main component ──────────────────────────────────────────────── */
export default function IntakeForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [stepError, setStepError] = useState(false)

  const form = useForm<IntakeValues>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      name: "", email: "", phone: "", location: "",
      purchaseType: "open", timeline: "exploring",
      mustHaves: [], niceToHaves: [],
      carsConsidered: "", currentCar: "",
      financing: "unsure", concern: "", callTime: "weekday-pm",
    },
    mode: "onTouched",
  })

  const { register, control, watch, setValue, formState: { errors }, getValues, trigger } = form

  const mustHaves = watch("mustHaves") ?? []
  const niceToHaves = watch("niceToHaves") ?? []

  const handleNext = async () => {
    const fields = STEP_FIELDS[step]
    if (!fields) { setStep(4); return }
    const valid = await trigger(fields)
    if (valid) { setStep((s) => Math.min(s + 1, 4)); setStepError(false) }
    else setStepError(true)
  }

  const handleBack = () => { setStep((s) => Math.max(s - 1, 1)); setStepError(false) }

  const onSubmit = async (data: IntakeValues) => {
    setSubmitting(true)
    // TODO: connect to email service (Resend / SendGrid) — confirmation to client + notification to Marques.
    // TODO: persist submission to database (Supabase / Postgres).
    // TODO: integrate Calendly to auto-book the discovery call from the chosen window.
    // TODO: optional Stripe checkout link if user wants to pay for Consult / Guided Buy upfront.
    console.log("Intake form submission:", data)
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  /* ── Success view ────────────────────────────────────────────────── */
  if (submitted) {
    const v = getValues()
    const firstName = v.name.split(" ")[0]
    const CALL_TIME_LABELS: Record<string, string> = {
      "weekday-am": "Weekday morning",
      "weekday-pm": "Weekday afternoon",
      "evening": "Evening",
      "weekend": "Weekend",
    }
    return (
      <div className="flex flex-col items-center text-center gap-8 py-12">
        <div className="h-16 w-16 rounded-full bg-[var(--accent)] flex items-center justify-center">
          <Check size={30} strokeWidth={2} className="text-[var(--accent-fg)]" />
        </div>

        <div>
          <h1 className="display-tight text-[36px] md:text-[48px] text-[var(--ink)]">
            Got it{firstName ? `, ${firstName}` : ""}.<br />Talk soon.
          </h1>
        </div>

        <p className="text-[17px] text-[var(--ink-muted)] leading-relaxed max-w-[460px]">
          I&apos;ll review your intake and reply to{" "}
          <strong className="text-[var(--ink)]">{v.email}</strong> within one
          business day with three specific time slots. Nothing else to do for now.
        </p>

        <div className="w-full max-w-[420px] rounded-2xl border border-[var(--line)] bg-white divide-y divide-[var(--line)] text-left">
          {[
            { label: "Name", value: v.name },
            { label: "Email", value: v.email },
            { label: "Location", value: v.location },
            { label: "Considering", value: v.carsConsidered },
            { label: "Best window", value: CALL_TIME_LABELS[v.callTime] ?? v.callTime },
          ].map(({ label, value }) => (
            <div key={label} className="px-5 py-3.5">
              <p className="text-[11px] uppercase tracking-[0.1em] text-[var(--ink-subtle)]">{label}</p>
              <p className="text-[14px] text-[var(--ink)] mt-0.5">{value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
          >
            Back to home →
          </a>
          <a
            href="/faq"
            className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium border border-[var(--line-strong)] text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
          >
            Read the FAQ
          </a>
        </div>
      </div>
    )
  }

  /* ── Form ────────────────────────────────────────────────────────── */
  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <div className="rounded-2xl border border-[var(--line)] bg-white overflow-hidden">
        {/* Step indicator header */}
        <div className="border-b border-[var(--line)] px-6 py-5 bg-[var(--bg-warm)]">
          <StepIndicator current={step} />
        </div>

        {/* Form body */}
        <div className="px-6 py-8 flex flex-col gap-6">

          {/* ── Step 1: About you ─────────────────────────────────── */}
          {step === 1 && (
            <>
              <div>
                <FormLabel required>Your name</FormLabel>
                <Input {...register("name")} placeholder="Marques Example" />
                <FieldError msg={errors.name?.message} />
              </div>

              <div>
                <FormLabel required>Email address</FormLabel>
                <Input {...register("email")} type="email" placeholder="you@example.com" />
                <FieldError msg={errors.email?.message} />
              </div>

              <div>
                <FormLabel>Phone (optional)</FormLabel>
                <Input {...register("phone")} type="tel" placeholder="(555) 123-4567" />
                <FieldError msg={errors.phone?.message} />
              </div>

              <div>
                <FormLabel required>Your location</FormLabel>
                <Input {...register("location")} placeholder="City, State" />
                <FieldError msg={errors.location?.message} />
              </div>
            </>
          )}

          {/* ── Step 2: The car ────────────────────────────────────── */}
          {step === 2 && (
            <>
              <div>
                <FormLabel required>Budget range</FormLabel>
                <Controller
                  control={control}
                  name="budget"
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<15k">Under $15k</SelectItem>
                        <SelectItem value="15-25k">$15k – $25k</SelectItem>
                        <SelectItem value="25-40k">$25k – $40k</SelectItem>
                        <SelectItem value="40-60k">$40k – $60k</SelectItem>
                        <SelectItem value="60-90k">$60k – $90k</SelectItem>
                        <SelectItem value="90k+">$90k+</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError msg={errors.budget?.message} />
              </div>

              <div>
                <FormLabel>Purchase type</FormLabel>
                <Controller
                  control={control}
                  name="purchaseType"
                  render={({ field }) => (
                    <Segmented
                      options={[
                        { label: "New", value: "new" },
                        { label: "Used", value: "used" },
                        { label: "Lease", value: "lease" },
                        { label: "Open to all", value: "open" },
                      ]}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div>
                <FormLabel>Timeline</FormLabel>
                <Controller
                  control={control}
                  name="timeline"
                  render={({ field }) => (
                    <Segmented
                      options={[
                        { label: "ASAP", value: "now" },
                        { label: "1–3 months", value: "1-3mo" },
                        { label: "3–6 months", value: "3-6mo" },
                        { label: "Just exploring", value: "exploring" },
                      ]}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div>
                <FormLabel required>Cars you're considering</FormLabel>
                <Textarea
                  {...register("carsConsidered")}
                  placeholder='e.g. "2023 Ford Bronco, Toyota 4Runner, or really anything mid-size SUV"'
                  rows={3}
                />
                <FieldError msg={errors.carsConsidered?.message} />
              </div>

              <div>
                <FormLabel>Must-haves</FormLabel>
                <p className="text-[12px] text-[var(--ink-subtle)] mb-2">
                  Select everything that's non-negotiable.
                </p>
                <ChipSelect
                  options={FEATURE_OPTIONS}
                  value={mustHaves}
                  onChange={(v) => setValue("mustHaves", v)}
                />
              </div>

              <div>
                <FormLabel>Nice-to-haves</FormLabel>
                <p className="text-[12px] text-[var(--ink-subtle)] mb-2">
                  Select things you'd love but could live without.
                </p>
                <ChipSelect
                  options={FEATURE_OPTIONS}
                  value={niceToHaves}
                  onChange={(v) => setValue("niceToHaves", v)}
                />
              </div>
            </>
          )}

          {/* ── Step 3: Your situation ─────────────────────────────── */}
          {step === 3 && (
            <>
              <div>
                <FormLabel>Current car (optional)</FormLabel>
                <Input
                  {...register("currentCar")}
                  placeholder='e.g. "2016 Honda CR-V, 87k miles"'
                />
              </div>

              <div>
                <FormLabel>Trade-in?</FormLabel>
                <Controller
                  control={control}
                  name="tradeIn"
                  render={({ field }) => (
                    <Segmented
                      options={[
                        { label: "Yes — trade in", value: "yes" },
                        { label: "Sell it myself", value: "sell" },
                        { label: "Keep it", value: "keep" },
                        { label: "N/A", value: "na" },
                      ]}
                      value={field.value ?? "na"}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div>
                <FormLabel required>Financing</FormLabel>
                <Controller
                  control={control}
                  name="financing"
                  render={({ field }) => (
                    <Segmented
                      options={[
                        { label: "Paying cash", value: "cash" },
                        { label: "Pre-approved", value: "preapproved" },
                        { label: "Still shopping", value: "shopping" },
                        { label: "Not sure", value: "unsure" },
                      ]}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div>
                <FormLabel required>Biggest concern</FormLabel>
                <Textarea
                  {...register("concern")}
                  placeholder={`e.g. "I don't want to overpay or get stuck with a lemon."`}
                  rows={3}
                />
                <FieldError msg={errors.concern?.message} />
              </div>

              <div>
                <FormLabel required>Best time for a call</FormLabel>
                <Controller
                  control={control}
                  name="callTime"
                  render={({ field }) => (
                    <Segmented
                      options={[
                        { label: "Weekday AM", value: "weekday-am" },
                        { label: "Weekday PM", value: "weekday-pm" },
                        { label: "Evening", value: "evening" },
                        { label: "Weekend", value: "weekend" },
                      ]}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
            </>
          )}

          {/* ── Step 4: Review ────────────────────────────────────── */}
          {step === 4 && (() => {
            const v = getValues()
            const BUDGET_LABELS: Record<string, string> = {
              "<15k": "Under $15k", "15-25k": "$15k–$25k", "25-40k": "$25k–$40k",
              "40-60k": "$40k–$60k", "60-90k": "$60k–$90k", "90k+": "$90k+", "unsure": "Not sure yet",
            }
            const PT_LABELS: Record<string, string> = {
              new: "New", used: "Used", lease: "Lease", open: "Open to all",
            }
            const TL_LABELS: Record<string, string> = {
              now: "ASAP", "1-3mo": "1–3 months", "3-6mo": "3–6 months", exploring: "Just exploring",
            }
            const FIN_LABELS: Record<string, string> = {
              cash: "Paying cash", preapproved: "Pre-approved", shopping: "Still shopping", unsure: "Not sure",
            }
            const CT_LABELS: Record<string, string> = {
              "weekday-am": "Weekday AM", "weekday-pm": "Weekday PM", evening: "Evening", weekend: "Weekend",
            }
            const TI_LABELS: Record<string, string> = {
              yes: "Trade in", sell: "Sell it myself", keep: "Keep it", na: "N/A",
            }
            return (
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)] mb-3 font-medium">
                    About you
                  </p>
                  <div className="rounded-xl border border-[var(--line)] overflow-hidden divide-y divide-[var(--line)]">
                    <ReviewRow label="Name" value={v.name} onEdit={() => setStep(1)} />
                    <ReviewRow label="Email" value={v.email} onEdit={() => setStep(1)} />
                    <ReviewRow label="Phone" value={v.phone ?? ""} onEdit={() => setStep(1)} />
                    <ReviewRow label="Location" value={v.location} onEdit={() => setStep(1)} />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)] mb-3 font-medium">
                    The car
                  </p>
                  <div className="rounded-xl border border-[var(--line)] overflow-hidden divide-y divide-[var(--line)]">
                    <ReviewRow label="Budget" value={BUDGET_LABELS[v.budget] ?? v.budget} onEdit={() => setStep(2)} />
                    <ReviewRow label="Type" value={PT_LABELS[v.purchaseType] ?? v.purchaseType} onEdit={() => setStep(2)} />
                    <ReviewRow label="Timeline" value={TL_LABELS[v.timeline] ?? v.timeline} onEdit={() => setStep(2)} />
                    <ReviewRow label="Considering" value={v.carsConsidered} onEdit={() => setStep(2)} />
                    {mustHaves.length > 0 && (
                      <ReviewRow label="Must-haves" value={mustHaves.join(", ")} onEdit={() => setStep(2)} />
                    )}
                    {niceToHaves.length > 0 && (
                      <ReviewRow label="Nice-to-haves" value={niceToHaves.join(", ")} onEdit={() => setStep(2)} />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--ink-subtle)] mb-3 font-medium">
                    Your situation
                  </p>
                  <div className="rounded-xl border border-[var(--line)] overflow-hidden divide-y divide-[var(--line)]">
                    {v.currentCar && (
                      <ReviewRow label="Current car" value={v.currentCar} onEdit={() => setStep(3)} />
                    )}
                    <ReviewRow label="Trade-in" value={TI_LABELS[v.tradeIn ?? "na"]} onEdit={() => setStep(3)} />
                    <ReviewRow label="Financing" value={FIN_LABELS[v.financing] ?? v.financing} onEdit={() => setStep(3)} />
                    <ReviewRow label="Biggest concern" value={v.concern} onEdit={() => setStep(3)} />
                    <ReviewRow label="Best call time" value={CT_LABELS[v.callTime] ?? v.callTime} onEdit={() => setStep(3)} />
                  </div>
                </div>
              </div>
            )
          })()}
        </div>

        {/* Navigation footer */}
        <div className="border-t border-[var(--line)] px-6 py-4 bg-[var(--bg-warm)] flex flex-col gap-3">
          {stepError && (
            <div className="flex items-center gap-2 text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              <AlertCircle size={15} className="shrink-0" />
              A few fields still need your attention. Scroll up — they&apos;re marked in red.
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full text-sm font-medium text-[var(--ink-muted)] border border-[var(--line)] hover:bg-white hover:text-[var(--ink)] transition-colors"
              >
                <ChevronLeft size={15} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors"
              >
                Continue
                <ChevronRight size={15} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-1.5 h-10 px-5 rounded-full text-sm font-medium bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent)]/90 transition-colors disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send intake form →"}
              </button>
            )}
          </div>

          <p className="text-[11px] text-[var(--ink-subtle)] text-center">
            Step {step} of 4 · 🔒 Your info stays private
          </p>
        </div>
      </div>
    </form>
  )
}
