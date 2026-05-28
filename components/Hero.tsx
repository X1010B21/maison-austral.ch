export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-pure"
    >
      {/* Vidéo de fond — remplacer /public/hero.mp4 + /public/hero-poster.jpg lorsqu'ils seront fournis */}
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Voile chaud pour lisibilité — moins agressif que l'ancien */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,27,23,0.35) 0%, rgba(31,27,23,0.15) 40%, rgba(31,27,23,0.55) 100%)',
        }}
      />

      <div className="container-austral relative">
        <div className="max-w-3xl">
          <h1 className="h-display hero-fade text-[clamp(2.75rem,7vw,5.75rem)] leading-[1.02] text-pure">
            Vivre ailleurs,
            <br />
            <em className="not-italic text-sand-100">sans compromis.</em>
          </h1>
        </div>
      </div>

      {/* CTA discret en bas de hero */}
      <a
        href="#lifestyle"
        aria-label="Découvrir"
        className="hero-fade hero-delay-2 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-pure md:bottom-14"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-pure/80">
          Découvrir
        </span>
        <span aria-hidden className="h-12 w-px bg-pure/40" />
      </a>
    </section>
  );
}
