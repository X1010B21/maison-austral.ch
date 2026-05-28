import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Approche } from '@/components/Approche';
import { Apropos } from '@/components/Apropos';
import { Destinations } from '@/components/Destinations';
import { Contact } from '@/components/Contact';
import { RevealOnScroll } from '@/components/RevealOnScroll';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Approche />
      <Apropos />
      <Destinations />
      <Contact />
      <RevealOnScroll />
    </>
  );
}
