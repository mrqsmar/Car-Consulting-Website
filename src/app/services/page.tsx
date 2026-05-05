import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OnTheMarques services — from full-service car buying to inspection-only and negotiation support. We fit your budget and timeline.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="display-tight text-4xl">Services</h1>
      <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
        OnTheMarques — Car buying, made easy.
      </p>
    </main>
  );
}
