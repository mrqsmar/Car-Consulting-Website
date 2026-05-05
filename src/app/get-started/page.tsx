import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Start your OnTheMarques journey. Tell us what you're looking for and we'll match you with the right service package.",
};

export default function GetStartedPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="display-tight text-4xl">Get Started</h1>
      <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
        OnTheMarques — Car buying, made easy.
      </p>
    </main>
  );
}
