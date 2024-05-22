import LinkedIn from '@/assets/LinkedIn';
import Logo from '@/assets/Logo';
import { Layout } from '@/components/Layout';

const Footer = (): JSX.Element => (
  <footer className="bg-blue-600 text-justify text-white md:text-left">
    <Layout className="flex flex-col items-center gap-8 p-4 md:flex-row md:gap-16 md:p-8 lg:p-12">
      <div>
        <Logo backgroundClass="fill-blue-600" className="m-auto w-60 md:m-0" />
        <p className="mt-4">
          Cantines Solidaires est une association de loi 1901 composée d'entreprises œuvrant dans la restauration
          collective qui souhaitent rendre accessible à tous les bienfaits des produits servis en cantines scolaires.
        </p>
      </div>
      <div className="shrink-0">
        <a href="https://www.linkedin.com/company/cantinessolidaires/" className="flex items-center gap-3 font-normal">
          Cantines Solidaires <LinkedIn className="w-7" />
        </a>
        <address className="mt-4 md:mt-6">
          ZI Laserre Agropole BP 123
          <br />
          47310 Estillac
        </address>
      </div>
    </Layout>
  </footer>
);

export default Footer;
