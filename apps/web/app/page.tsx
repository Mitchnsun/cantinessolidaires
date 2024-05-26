import { HeroBanner } from '@/components/HeroBanner';
import { HomeContent1, HomeContent2 } from '@/components/HomeContent';
import { PartnersBanner } from '@/components/Partners';

export default function Page(): JSX.Element {
  return (
    <main>
      <HeroBanner />
      <PartnersBanner />
      <HomeContent1 />
      <HomeContent2 />
    </main>
  );
}
