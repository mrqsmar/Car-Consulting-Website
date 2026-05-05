import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OnTheMarques — who we are, how we work, and why independent advice beats the dealership experience every time.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="display-tight text-4xl">About</h1>
      <p className="text-lg" style={{ color: "var(--ink-muted)" }}>
        OnTheMarques — Car buying, made easy.
      </p>
    </main>
  );
}
