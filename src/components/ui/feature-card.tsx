type FeatureCardProps = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

export function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <article className="min-h-56 rounded-3xl border border-[#dce3dd] bg-white p-6 transition hover:-translate-y-1 hover:border-[#b9c6bd]">
      <span className="text-sm font-semibold text-[#e07851]">{number}</span>
      <h3 className="mt-12 text-xl font-semibold tracking-[-0.02em]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#68776e]">{description}</p>
    </article>
  );
}
