import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Inter_Tight } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Italique éditorial pour les accents dans les titres (signature Edmiston)
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Body
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

// Display tight pour les caps en gros (signature Edmiston)
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
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
    <html lang="fr" className={`${cormorant.variable} ${inter.variable} ${interTight.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
