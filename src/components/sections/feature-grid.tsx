import { FeatureCard } from "@/src/components/ui/feature-card";

const features = [
  {
    number: "01",
    title: "Layout components",
    description:
      "Keep shared navigation and footer pieces together in one predictable home.",
  },
  {
    number: "02",
    title: "Page sections",
    description:
      "Build pages from focused sections instead of turning one file into a monolith.",
  },
  {
    number: "03",
    title: "UI primitives",
    description:
      "Collect reusable buttons, cards, badges, and controls as the product grows.",
  },
];

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8"
    >
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e07851]">
            Suggested structure
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
            Small pieces, clear homes.
          </h2>
        </div>
        <span className="hidden text-sm text-[#68776e] sm:block">
          src/components
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.number} {...feature} />
        ))}
      </div>
    </section>
  );
}
