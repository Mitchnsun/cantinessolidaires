import { HeroBanner } from '@/components/HeroBanner';
import { PartnersBanner } from '@/components/Partners';

export default function Page(): JSX.Element {
  return (
    <main>
      <HeroBanner />
      <PartnersBanner />
    </main>
  );
}
