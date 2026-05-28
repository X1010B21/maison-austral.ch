const SERVICES = [
  {
    eyebrow: '01',
    title: 'Relocation complète',
    tagline: 'Service clé en main',
    description:
      "Un accompagnement intégral, de la recherche du bien à la pose de vos cartons. Vous n'avez qu'une seule personne à joindre.",
    items: [
      'Recherche de logement en Espagne ou Portugal',
      'Vente de votre bien en Suisse, si nécessaire',
      'Notaire et démarches administratives',
      'Courtage et financement',
      'Organisation du déménagement',
      'Installation sur place',
    ],
  },
  {
    eyebrow: '02',
    title: 'Maison de vacances',
    tagline: 'Résidence secondaire',
    description:
      "Acheter ou louer en longue durée une seconde maison sur la péninsule ibérique. Sélection premium, accompagnement humain.",
    items: [
      'Recherche de résidence secondaire',
      'Sélection premium en Espagne et au Portugal',
      'Achat ou location longue durée',
      "Accompagnement de A à Z",
    ],
  },
  {
    eyebrow: '03',
    title: 'Rénovation',
    tagline: 'Suisse et péninsule ibérique',
    description:
      "Maison ou appartement : nous orchestrons artisans et corps de métier pour transformer votre bien à votre image.",
    items: [
      'Maison en Suisse',
      'Appartement en Suisse',
      'Rénovation lourde ou rafraîchissement',
      'Coordination des corps de métier',
    ],
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-sand-50 py-24 md:py-32">
      <div className="container-austral">
        <div className="mb-16 max-w-3xl md:mb-24">
          <p className="eyebrow reveal">Nos services</p>
          <h2 className="h-display reveal reveal-delay-1 mt-5 text-4xl text-ink md:text-6xl">
            Trois manières de vous accompagner, une seule exigence&nbsp;:
            <em className="not-italic text-copper"> la vôtre.</em>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {SERVICES.map((service, idx) => (
            <article
              key={service.title}
              className="reveal grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-[1fr_1.4fr] md:gap-16 md:pt-16"
            >
              <div>
                <p className="font-serif text-5xl text-copper md:text-6xl">
                  {service.eyebrow}
                </p>
                <p className="eyebrow mt-4 text-ink/60">{service.tagline}</p>
                <h3 className="h-display mt-3 text-3xl text-ink md:text-5xl">
                  {service.title}
                </h3>
              </div>

              <div>
                <p className="max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                  {service.description}
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink/80 md:text-base"
                    >
                      <span
                        aria-hidden
                        className="mt-2 inline-block h-px w-4 flex-shrink-0 bg-copper"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
