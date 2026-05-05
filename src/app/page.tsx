import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OnTheMarques — Car buying, made easy.",
  description:
    "Independent car-buying consultancy. Expert guidance through every step — research, negotiation, and paperwork — so you drive away confident.",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="display-tight text-4xl">OnTheMarques</h1>
      <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
        Car buying, made easy.
      </p>
    </main>
  );
}
