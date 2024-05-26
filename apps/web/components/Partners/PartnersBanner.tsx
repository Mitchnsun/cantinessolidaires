'use client';

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import useImageSize from '@/hooks/useImageSize';

const PartnersBanner = () => {
  const imageSize = useImageSize();

  return (
    <div className="bg-gray-50">
      <Layout className="flex items-center justify-around md:py-4">
        <Image src="/logo-papacuisine.png" alt="Papa Cuisine" width={100 / imageSize} height={100 / imageSize} />
        <Image src="/logo-sudovege.png" alt="Papa Cuisine" width={200 / imageSize} height={50 / imageSize} />
        <Image src="/logo-bolapapa.png" alt="Papa Cuisine" width={140 / imageSize} height={85 / imageSize} />
      </Layout>
    </div>
  );
};

export default PartnersBanner;
