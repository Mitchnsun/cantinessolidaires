import Image from 'next/image';
import { Layout } from '@/components/Layout';

const HomeContent4 = () => (
  <div className="bg-gray-50">
    <Layout className="flex flex-col items-center gap-6 md:py-4 lg:flex-row lg:py-0">
      <section className="lg:w-1/2">
        <h2 className="text-3xl font-medium text-gray-800 lg:text-4xl">Un fonctionnement transparent</h2>
        <p className="mt-4 text-justify">
          La transparence dans l'utilisation des dons est une valeur fondamentale pour Cantines Solidaires. Chaque euro
          reçu, que ce soit par le biais de l'achat de produits arborant le logo Cantines Solidaires ou par des dons
          directs, sera minutieusement enregistré et documenté. Nous rendrons régulièrement des comptes à nos donateurs,
          en fournissant des rapports détaillés sur la manière dont leurs contributions ont été utilisées pour rendre la
          cantines plus accessibles aux enfants.
        </p>
      </section>
      <div className="relative shrink-0 lg:w-1/2">
        <Image
          className="object-contain"
          src="/schema-repartition.png"
          alt="Schéma répartition"
          width={600}
          height={400}
        />
      </div>
    </Layout>
  </div>
);

export default HomeContent4;
