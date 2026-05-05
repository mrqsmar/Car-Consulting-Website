import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about working with OnTheMarques — pricing, process, timeline, and what to expect from your car-buying consultant.",
};

export default function FaqPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="display-tight text-4xl">FAQ</h1>
      <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
        OnTheMarques — Car buying, made easy.
      </p>
    </main>
  );
}
