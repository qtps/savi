import { SiteHeader } from '@/src/components/layout/site-header';
import Hero from '@/src/components/sections/Hero';
import KeyInsights from '@/src/components/sections/KeyInsights';
import KeyFeatures from '@/src/components/sections/KeyFeatures';
import Revolution from '@/src/components/sections/Revolution';
import CurrencyExchange from '@/src/components/sections/CurrencyExchange';
import TrackAndReach from '@/src/components/sections/TrackAndReach';

export default function Page() {
  return (
    <main className="bg-neutral-1 min-h-screen text-[#17231e]">
      <SiteHeader />
      <Hero />
      <KeyInsights />
      <KeyFeatures />
      <Revolution />
      <CurrencyExchange />
      <TrackAndReach />

      {/* <FeatureGrid />
      <SiteFooter /> */}
    </main>
  );
}
