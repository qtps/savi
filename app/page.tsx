import { SiteHeader } from '@/src/components/layout/site-header';
import Hero from '@/src/components/sections/Hero.tsx';
import KeyInsights from '@/src/components/sections/KeyInsights.tsx';

export default function Page() {
  return (
    <main className="bg-neutral-1 min-h-screen text-[#17231e]">
      <SiteHeader />
      <Hero />
      <KeyInsights />

      {/* <FeatureGrid />
      <SiteFooter /> */}
    </main>
  );
}
