"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "@/components/Logo"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "FAQ",      href: "/faq" },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 transition-all duration-200",
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1280px] mx-auto h-full flex items-center px-6 md:px-10 lg:px-16 gap-4">
        {/* Logo */}
        <Logo />

        {/* Desktop centre nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-sm transition-colors",
                  active
                    ? "bg-[var(--bg-warm)] text-[var(--ink)] font-medium"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-warm)]"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Link
            href="/get-started"
            className="text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            Intake form
          </Link>
          <Button size="sm" asChild>
            <Link href="/get-started">Book a free call</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto p-2 rounded-md text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      {open && (
        <div className="md:hidden border-t border-[var(--line)] bg-[var(--bg)] px-6 pb-6 pt-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "block px-3.5 py-2.5 rounded-xl text-sm transition-colors",
                  active
                    ? "bg-[var(--bg-warm)] text-[var(--ink)] font-medium"
                    : "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-warm)]"
                )}
              >
                {label}
              </Link>
            )
          })}
          <div className="mt-3 flex flex-col gap-2">
            <Link
              href="/get-started"
              className="block px-3.5 py-2.5 rounded-xl text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-warm)] transition-colors"
            >
              Intake form
            </Link>
            <Button size="default" className="w-full" asChild>
              <Link href="/get-started">Book a free call</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
