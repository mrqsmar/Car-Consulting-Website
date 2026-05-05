export interface Tier {
  name: string
  price: string
  sub: string
  features: string[]
  featured?: boolean
  ctaHref: string
}

export const TIERS: Tier[] = [
  {
    name: "Consult",
    price: "$99",
    sub: "One-time, 60-minute deep dive",
    features: [
      "Needs & budget review",
      "Shortlist of 3–5 cars",
      "Personalized buying plan",
      "Follow-up notes by email",
      "Reading list of red flags",
    ],
    ctaHref: "/get-started",
  },
  {
    name: "Guided Buy",
    price: "$499",
    sub: "Most popular — start to deal-ready",
    featured: true,
    features: [
      "Everything in Consult",
      "Listing & dealer vetting",
      "Comps & total-cost analysis",
      "Offer & negotiation scripts",
      "Two weeks of text support",
      "Contract review (you sign)",
    ],
    ctaHref: "/get-started",
  },
  {
    name: "Full Service",
    price: "$1,499",
    sub: "I run the whole purchase",
    features: [
      "Everything in Guided Buy",
      "I negotiate on your behalf",
      "Out-of-state coordination",
      "Finance & contract review",
      "Delivery & first-week support",
      "90 days of post-purchase help",
    ],
    ctaHref: "/get-started",
  },
]
