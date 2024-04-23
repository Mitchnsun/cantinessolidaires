import type { Metadata } from 'next';
import { roboto } from '@/styles/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cantines Solidaires',
  description:
    "Cantines Solidaires est une association de loi 1901 composée d'entreprises œuvrant dans la restauration collective qui souhaitent rendre accessible à tous les bienfaits des produits servis en cantines scolaires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
