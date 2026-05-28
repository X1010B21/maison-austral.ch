const PILLARS = [
  {
    title: 'Sur mesure',
    body: "Chaque projet est unique. Nous écoutons, comprenons et construisons un parcours pensé pour vous, jamais pour la moyenne.",
  },
  {
    title: 'Un seul interlocuteur',
    body: "Du premier appel à la remise des clés, la même personne vous accompagne. Pas de standard, pas d'intermédiaire.",
  },
  {
    title: 'Prise en charge sous 4 h',
    body: "Toute demande est traitée dans les quatre heures ouvrées. Vous n'attendez jamais.",
  },
  {
    title: 'Réponse sous 24 h',
    body: "Une première réponse personnalisée, étayée, vous parvient en moins de 24 heures.",
  },
] as const;

export function Approche() {
  return (
    <section
      id="approche"
      className="relative overflow-hidden bg-ink py-24 text-pure md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 0%, rgba(184,115,51,0.25), transparent 60%)',
        }}
      />
      <div className="container-austral relative">
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-20">
          <div>
            <p className="eyebrow reveal text-copper-light">Notre approche</p>
            <h2 className="h-display reveal reveal-delay-1 mt-5 text-4xl text-pure md:text-6xl">
              La simplicité,
              <br />
              comme principe.
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-xl text-base leading-relaxed text-pure/70 md:text-lg">
            Chez Maison Austral, nous croyons qu&apos;un grand projet
            commence par une conversation calme. Pas de formulaires
            interminables, pas de relances impersonnelles : un échange
            direct, et l&apos;intelligence des bons gestes.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-pure/10 bg-pure/10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`reveal reveal-delay-${(i % 4) + 1} bg-ink p-8 md:p-10`}
            >
              <p className="font-serif text-3xl text-copper-light">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-6 font-serif text-2xl text-pure">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pure/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
