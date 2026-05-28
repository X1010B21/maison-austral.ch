const PROMISES = [
  {
    title: 'Accompagnement privé',
    body:
      "Nous travaillons sur invitation, à petite échelle. Chaque dossier reçoit l'attention que mérite un projet de vie.",
  },
  {
    title: 'Un seul interlocuteur',
    body:
      "Du premier appel à la remise des clés, la même personne vous accompagne. Pas de standard, pas de relais.",
  },
  {
    title: 'Clientèle suisse',
    body:
      "Nous comprenons votre cadre de départ — fiscalité, prévoyance, rythme. Nous parlons votre langue et celle de vos conseillers.",
  },
  {
    title: 'Confidentialité',
    body:
      "Vos projets, vos chiffres, vos arbitrages restent les vôtres. Aucune mention publique, aucune vitrine, aucun témoignage signé.",
  },
] as const;

export function Confiance() {
  return (
    <section
      id="confiance"
      className="relative overflow-hidden bg-ink py-28 text-pure md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 80% 0%, rgba(154,109,63,0.22), transparent 60%)',
        }}
      />

      <div className="container-austral relative">
        {/* En-tête style Edmiston */}
        <div className="mb-20 grid gap-10 md:mb-28 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="eyebrow reveal text-copper-light">La maison</p>
            <h2 className="h-display reveal reveal-delay-1 mt-5 text-[clamp(2.25rem,6vw,5rem)] text-pure">
              Une relation
              <br />
              <em>tenue</em> dans la durée
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-md text-base leading-relaxed text-pure/70 md:text-[15px]">
            Maison Austral n'est pas une agence. C'est un cabinet de
            relocation, à taille restreinte, qui choisit ses clients autant
            que ses dossiers.
          </p>
        </div>

        {/* Promesses en grille verticale, façon Edmiston experience */}
        <div className="grid divide-y divide-pure/15 border-y border-pure/15 md:grid-cols-2 md:divide-x md:divide-y-0">
          {PROMISES.map((p, i) => (
            <article
              key={p.title}
              className={`reveal flex flex-col gap-6 py-10 md:gap-8 md:py-14 ${
                i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              } ${i >= 2 ? 'md:border-t md:border-pure/15' : ''}`}
            >
              <p className="font-serif text-2xl italic text-copper-light md:text-3xl">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="h-display text-xl text-pure md:text-2xl lg:text-3xl">
                {p.title}
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-pure/65 md:text-base">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
