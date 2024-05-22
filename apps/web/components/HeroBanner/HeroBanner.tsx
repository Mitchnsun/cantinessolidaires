import Image from 'next/image';
import { baloo } from '@/styles/fonts';
import { Layout } from '@/components/Layout';
import clsx from 'clsx';

const HeroBanner = (): JSX.Element => (
  <div className="relative">
    <Image className="object-cover" src="/hero-banner.jpg" alt="Herro banner" fill priority />
    <Layout className="px-3 py-12 text-center md:px-8 md:py-20 lg:px-12 lg:py-32">
      <h1
        className={clsx(
          'text-xl font-bold text-white text-shadow-sm sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl',
          baloo.className,
        )}
      >
        Cantines Solidaires a pour vocation de rendre la cantine accessible à tous !
      </h1>
      <p className="text-xs font-light text-white text-shadow-sm sm:text-sm md:text-base lg:text-lg">
        Cantines Solidaires est une association de loi 1901 composée d'entreprises œuvrant dans la restauration
        collective qui souhaitent rendre accessible à tous les bienfaits des produits servis en cantines scolaires.
      </p>
    </Layout>
  </div>
);

export default HeroBanner;