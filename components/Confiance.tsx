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
        <div className="mb-20 max-w-3xl md:mb-28">
          <p className="eyebrow reveal text-copper-light">La maison</p>
          <h2 className="h-display reveal reveal-delay-1 mt-6 text-[clamp(2rem,5vw,4.25rem)] leading-[1.05] text-pure">
            Une relation tenue
            <br />
            <em className="not-italic text-sand-100">dans la durée.</em>
          </h2>
          <p className="reveal reveal-delay-2 mt-10 max-w-xl text-base leading-relaxed text-pure/70 md:text-lg">
            Maison Austral n'est pas une agence. C'est un cabinet de
            relocation, à taille restreinte, qui choisit ses clients autant
            que ses dossiers.
          </p>
        </div>

        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 md:gap-y-20">
          {PROMISES.map((p, i) => (
            <article key={p.title} className="reveal max-w-md">
              <p className="font-serif text-3xl text-copper-light">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-serif text-2xl text-pure md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-pure/65">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
