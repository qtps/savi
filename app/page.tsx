import { SiteHeader } from '@/src/components/layout/site-header';
import Hero from '@/src/components/sections/Hero';
import KeyInsights from '@/src/components/sections/KeyInsights';
import KeyFeatures from '@/src/components/sections/KeyFeatures';

export default function Page() {
  return (
    <main className="bg-neutral-1 min-h-screen text-[#17231e]">
      <SiteHeader />
      <Hero />
      <KeyInsights />
      <KeyFeatures />

      {/* <FeatureGrid />
      <SiteFooter /> */}
    </main>
  );
}
