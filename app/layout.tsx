import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maison Austral — Relocation Suisse · Espagne · Portugal',
  description:
    "Service haut de gamme de relocation et d'accompagnement immobilier entre la Suisse et la péninsule ibérique. Un seul interlocuteur, de la recherche à l'installation.",
  metadataBase: new URL('https://maison-austral.ch'),
  openGraph: {
    title: 'Maison Austral',
    description:
      "Service haut de gamme de relocation entre la Suisse et la péninsule ibérique.",
    locale: 'fr_CH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
