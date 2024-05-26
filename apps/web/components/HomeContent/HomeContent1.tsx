import Circle from '@/assets/Circle';
import { Layout } from '@/components/Layout';

const HomeContent1 = () => (
  <Layout className="gap-6 md:flex">
    <div className="relative px-8 py-14 text-white">
      <Circle className="fill-primary absolute -left-16 -top-2 right-0 m-auto w-[450px]" />
      <div className="relative m-auto flex w-80 gap-2 pr-12">
        <p className="text-6xl font-medium">75%</p>
        <p className="text-sm">Des élèves issus de familles défavorisées ne déjeunent pas à la cantine</p>
      </div>
      <div className="relative m-auto flex w-80 gap-2 pl-12 pt-6">
        <p className="text-sm">Des établissements n’ont pas de politique tarifaire pour les élèves les plus démunis</p>
        <p className="text-6xl font-medium">55%</p>
      </div>
      <div className="relative m-auto flex w-80 gap-2 pr-12 pt-6">
        <p className="text-6xl font-medium">38%</p>
        <p className="text-sm">La cantine représente 38 % des repas du midi pris par des enfants durant l’année</p>
      </div>
    </div>
    <section className="mt-8">
      <h2 className="text-3xl font-medium text-gray-800 lg:text-4xl">
        La pause déjeuner à l'école est très importante pour les enfants !
      </h2>
      <p className="mt-4 text-justify">
        Chaque année, environ 400 millions de repas sont servis dans les écoles et 600 millions dans les collèges et
        lycées. Avec 4 repas par semaine et jusqu’à environ 140 jours par année scolaire, la cantine représente 38 % des
        repas du midi pris par des enfants durant l’année.
      </p>
      <p className="mt-4 text-justify">
        Il est souvent dit dans les rapports sur la lutte contre la pauvreté et l'exclusion scolaire, qu'il est
        essentiel que les enfants, surtout ceux issus de familles pauvres, puissent manger à la cantine. Car grâce aux
        exigences des lois hashtag EGAlim, c'est un minimum de 20% de produits bio, et de 50% de produits de qualités
        qui y sont consommés.
      </p>
    </section>
  </Layout>
);

export default HomeContent1;
