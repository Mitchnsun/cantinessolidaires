'use client';

import Image from 'next/image';
import { Layout } from '@/components/Layout';
import useImageSize from '@/hooks/useImageSize';

const HomeContent3 = () => {
  const imageSize = useImageSize();

  return (
    <Layout>
      <h2 className="text-3xl font-medium text-gray-800 lg:text-4xl">Comment nous soutenir ?</h2>
      <p className="my-6 text-justify md:w-2/3">
        Pour soutenir Cantines Solidaires et aider les enfants défavorisés à accéder à la cantine scolaire.
      </p>
      <div className="flex items-center gap-6">
        <Image
          src="/bowl-chili-illustration.png"
          alt="Bowl Chili Illustration"
          width={200 / imageSize}
          height={200 / imageSize}
        />
        <p className="text-justify">
          Repérer en magasin les produits arborant le logo Cantines Solidaires. En achetant ces produits, une partie des
          bénéfices sera dédiée à financer la cantine d’enfants dans le besoin.
        </p>
      </div>
      <p className="mt-6 text-justify">
        Chaque contribution, quelle que soit sa forme, contribue à rendre la cantine scolaire accessible aux enfants
        issus de familles démunies et à leur offrir une alimentation saine et équilibrée.
      </p>
    </Layout>
  );
};

export default HomeContent3;
