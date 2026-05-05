export interface FaqItem {
  q: string
  a: string
}

export interface FaqCategory {
  cat: string
  items: FaqItem[]
}

export const FAQ_DATA: FaqCategory[] = [
  {
    cat: "How it works",
    items: [
      {
        q: "How does the free 30-minute call work?",
        a: "You book a time, we hop on Zoom or phone, and I ask about what you're looking for, your budget, your timeline, and any deal-breakers. You leave with a clearer head and an honest take on whether working together makes sense. No commitment.",
      },
      {
        q: "Do you work with people anywhere in the US?",
        a: "Yes. Everything happens over phone, video, email, and text. If you're US-based, we can work together — your zip code isn't a problem. The Full Service tier includes coordination on title, registration, and shipping for out-of-state purchases.",
      },
      {
        q: "Can you help me buy a car I already have my eye on?",
        a: "Absolutely. Send me the listing — I'll review the price, the dealer, the trim, and the math, and tell you if it's a good move. That can be a one-off Consult, or part of a larger Guided Buy.",
      },
    ],
  },
  {
    cat: "Pricing",
    items: [
      {
        q: "Why is it a flat fee instead of commission?",
        a: "Because commission creates the wrong incentives. If I made more when you spent more, I'd never tell you to walk away — and walking away is sometimes exactly what you need to do. Flat fees keep me honest.",
      },
      {
        q: "Do you take any money from dealers or lenders?",
        a: "No. Zero referral fees, zero kickbacks, no \"preferred lender\" relationships. Your fee is the only money I make on your purchase.",
      },
      {
        q: "What if I decide not to buy a car after the consult?",
        a: "That happens — and it's a fine outcome. Sometimes the right call is to keep your current car, wait six months, or buy used instead of new. The fee covers the advice, not a transaction.",
      },
    ],
  },
  {
    cat: "Cars & specialties",
    items: [
      {
        q: "What kinds of cars do you specialize in?",
        a: "My deepest knowledge is in US domestic — Ford, Chevy, GMC, Ram, Jeep, Cadillac, Lincoln. I'm also happy to help with JDM (Toyota, Honda, Mazda, Subaru, Nissan). If you're looking at European luxury or exotics, I'll be honest if it's outside my wheelhouse.",
      },
      {
        q: "New, used, or lease?",
        a: "All three. We'll talk through which makes sense given your situation — none is universally \"better.\" I'll run the math on each so the choice is clear.",
      },
      {
        q: "Can you help with EVs?",
        a: "Yes. EV total cost of ownership is its own animal — charging, incentives, depreciation curves — and I'll walk you through it specifically.",
      },
    ],
  },
  {
    cat: "Logistics",
    items: [
      {
        q: "How long does the whole process take?",
        a: "Anywhere from a single 60-minute call to 4–6 weeks for a Full Service search. Most Guided Buys land in 2–3 weeks. We'll set a timeline together on the discovery call.",
      },
      {
        q: "What if I need to cancel?",
        a: "Full refund before any work has started. Once we've done the discovery call and started the buying plan, the work-completed portion is non-refundable, but unused future tiers are.",
      },
      {
        q: "Is my information private?",
        a: "Yes. I don't sell, share, or syndicate any of it. I keep your intake form and notes for as long as we're working together, and you can ask me to delete everything any time.",
      },
    ],
  },
]
