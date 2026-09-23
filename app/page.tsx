import { SiteHeader } from "@/src/components/layout/site-header";
import Hero from "@/src/components/sections/Hero.tsx";
import KeyInsights from "@/src/components/sections/KeyInsights.tsx";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-1 text-[#17231e] ">
      <SiteHeader />
      <Hero />
      <KeyInsights />

      {/* <FeatureGrid />
      <SiteFooter /> */}
    </main>
  );
}
