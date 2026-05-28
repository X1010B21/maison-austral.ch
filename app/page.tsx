import { Hero } from '@/components/Hero';
import { Lifestyle } from '@/components/Lifestyle';
import { Services } from '@/components/Services';
import { Confiance } from '@/components/Confiance';
import { Contact } from '@/components/Contact';
import { RevealOnScroll } from '@/components/RevealOnScroll';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Lifestyle />
      <Services />
      <Confiance />
      <Contact />
      <RevealOnScroll />
    </>
  );
}
