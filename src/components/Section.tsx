import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section className={cn("px-6 md:px-10 lg:px-16", className)} id={id}>
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  )
}
