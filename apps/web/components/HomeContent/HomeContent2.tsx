import Image from 'next/image';
import { Layout } from '@/components/Layout';

const HomeContent2 = () => (
  <div className="bg-gray-50">
    <Layout className="flex flex-col items-center gap-6 md:flex-row">
      <section>
        <h2 className="text-3xl font-medium text-gray-800 lg:text-4xl">
          Un alliance avec le Secours Populaire d’Agen !
        </h2>
        <p className="mt-4 text-justify">
          Les entreprises partenaires qui vendent des produits dans les grandes et moyennes surfaces s'engagent à
          consacrer une partie de leurs revenus pour rendre la cantine scolaire accessible à tous. À chaque achat d'un
          de leurs produits, une portion du montant sera dédiée à l'offre d'un repas aux enfants les plus démunis. Ces
          fonds collectés seront ensuite versés au Secours Populaire d’Agen, une organisation caritative reconnue pour
          son engagement envers les plus vulnérables de notre société. Le Secours Populaire sera chargé d'identifier les
          familles ayant besoin de soutien et de coordonner la distribution équitable des fonds récoltés, garantissant
          ainsi une aide directe et ciblée là où elle est la plus nécessaire.
        </p>
      </section>
      <div className="relative h-60 w-full shrink-0 overflow-hidden rounded-xl md:h-80 md:w-1/3">
        <Image
          className="object-cover object-left-bottom"
          src="/secours-populaire-illustration.png"
          alt="Secours Populaire Français Illustration"
          fill
        />
      </div>
    </Layout>
  </div>
);

export default HomeContent2;
