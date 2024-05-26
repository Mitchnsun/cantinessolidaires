import clsx from 'clsx';
import localFont from 'next/font/local';
import { Layout } from '@/components/Layout';

const pecita = localFont({ src: '../../styles/Pecita.otf', display: 'swap' });

const Thanks = () => (
  <Layout>
    <h2 className={clsx('text-center text-7xl', pecita.className)}>Merci !</h2>
    <p className="m-auto my-4 text-center md:w-4/5 lg:w-3/4 xl:w-2/3">
      Cantines Solidaires a été créée grâce à l’implication de plusieurs bénévoles qui nous permettent de garder nos
      frais de fonctionnement le plus bas possible.
    </p>
    <ul className="m-auto flex list-disc flex-col gap-2 lg:w-4/5">
      <li>
        Merci à <strong className="font-extrabold">Vincent Gobil</strong> de Vektor Graphik pour l’optimisation de notre
        logo et des étiquettes qui accompagnent les produits qui participent à l’opération.
      </li>
      <li>
        Merci à <strong className="font-extrabold">Matthieu Compérat</strong> pour la conception et le développement de
        notre site web.
      </li>
      <li>
        Merci à <strong className="font-extrabold">SudOvégé</strong> pour le financement initiale de l’association qui
        nous permet de garder des frais de fonctionnement bas, ainsi que la mise à disposition de leurs locaux.
      </li>
    </ul>
  </Layout>
);

export default Thanks;
