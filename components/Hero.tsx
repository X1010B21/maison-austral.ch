import { CONTACT_EMAIL } from '@/lib/content';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-pure"
    >
      {/* Video layer — remplacer /hero.mp4 + /hero-poster.jpg dans /public lorsqu'ils seront fournis par le client */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Aurora fallback / atmosphere — visible si la vidéo n'est pas encore présente, sinon teinte le rendu */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(184,115,51,0.35), transparent 60%),' +
            'radial-gradient(ellipse 60% 50% at 20% 80%, rgba(80,120,160,0.35), transparent 60%),' +
            'linear-gradient(180deg, #0F1B2D 0%, #142539 60%, #0F1B2D 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-ink/30"
      />

      <div className="container-austral relative pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="max-w-4xl">
          <p className="eyebrow hero-fade text-copper-light">
            Suisse · Espagne · Portugal
          </p>
          <h1 className="h-display hero-fade hero-delay-1 mt-6 text-5xl text-pure md:text-7xl lg:text-[5.5rem]">
            Service haut de gamme de{' '}
            <em className="not-italic text-copper-light">relocation</em> et
            d&apos;accompagnement immobilier entre la Suisse et la péninsule
            ibérique.
          </h1>

          <p className="hero-fade hero-delay-2 mt-10 max-w-xl text-base text-pure/75 md:text-lg">
            <span className="text-copper-light">Notre mission</span> :
            simplifier votre changement de vie. Un seul interlocuteur, du
            premier échange à votre installation.
          </p>

          <div className="hero-fade hero-delay-3 mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group inline-flex items-center gap-3 border border-pure/60 px-7 py-4 text-sm tracking-widest text-pure transition-all duration-500 ease-austral hover:border-copper hover:bg-copper hover:text-pure"
            >
              <span>NOUS ÉCRIRE</span>
              <span className="transition-transform duration-500 ease-austral group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#approche"
              className="link-underline text-sm tracking-wider text-pure/80"
            >
              Découvrir notre approche
            </a>
          </div>
        </div>
      </div>

      <a
        href="#services"
        aria-label="Découvrir nos services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-pure/60 md:flex"
      >
        <span className="text-[10px] uppercase tracking-widest">Faire défiler</span>
        <span className="h-12 w-px animate-pulse bg-pure/40" />
      </a>
    </section>
  );
}
