'use client';

import Image from 'next/image';
import useImageSize from '@/hooks/useImageSize';

const PartnersBanner = () => {
  const imageSize = useImageSize();

  return (
    <div className="bg-gray-50">
      <div className="m-auto flex max-w-screen-xl items-center justify-around  p-4 md:py-4">
        <Image src="/logo-papacuisine.png" alt="Papa Cuisine" width={100 / imageSize} height={100 / imageSize} />
        <Image src="/logo-sudovege.png" alt="Papa Cuisine" width={200 / imageSize} height={50 / imageSize} />
        <Image src="/logo-bolapapa.png" alt="Papa Cuisine" width={140 / imageSize} height={85 / imageSize} />
      </div>
    </div>
  );
};

export default PartnersBanner;
