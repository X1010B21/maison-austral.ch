import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Famille unique Lora (style Barnes) — sert pour le display caps, le body et les italiques
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
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
    <html lang="fr" className={lora.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
