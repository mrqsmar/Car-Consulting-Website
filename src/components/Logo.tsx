import Link from "next/link"

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-[var(--ink)] hover:opacity-80 transition-opacity"
      aria-label="OnTheMarques — home"
    >
      {/* 28px rounded-square monogram */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Rounded square outline */}
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="7"
          stroke="var(--accent)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Letter M */}
        <path
          d="M7.5 19V10L11.5 16L14 12.5L16.5 16L20.5 10V19"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Pixel/circle accent dot below M */}
        <circle cx="14" cy="22" r="1.25" fill="var(--accent)" />
      </svg>

      {/* Wordmark */}
      <span className="text-[15px] font-medium tracking-[-0.02em] leading-none">
        OnTheMarques
      </span>
    </Link>
  )
}
