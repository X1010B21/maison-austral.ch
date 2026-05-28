const SERVICES = [
  {
    eyebrow: 'I',
    title: 'Relocation complète',
    tagline: 'Clé en main',
    description:
      "De la recherche du bien à votre installation. Vente en Suisse si nécessaire, notariat, courtage, déménagement, vie quotidienne. Une seule personne, du premier mot au dernier carton.",
  },
  {
    eyebrow: 'II',
    title: 'Maison de vacances',
    tagline: 'Résidence secondaire',
    description:
      "Sélection privée, en Espagne et au Portugal. Achat ou location longue durée. Accompagnement de A à Z, dans la discrétion d'un cabinet plutôt que d'une agence.",
  },
  {
    eyebrow: 'III',
    title: 'Rénovation',
    tagline: 'Suisse · Péninsule ibérique',
    description:
      "Maison, appartement, transformation lourde ou simple rafraîchissement. Nous orchestrons les artisans et tenons le calendrier.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-sand-100 py-28 md:py-40">
      <div className="container-austral">
        <div className="mb-24 max-w-3xl md:mb-32">
          <p className="eyebrow reveal">Le service</p>
          <h2 className="h-display reveal reveal-delay-1 mt-6 text-[clamp(2rem,5vw,4.25rem)] leading-[1.05] text-ink">
            Trois manières d'avancer.
            <br />
            <em className="not-italic text-copper">Une seule exigence&nbsp;: la vôtre.</em>
          </h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="reveal grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-[auto_1fr] md:gap-20 md:pt-16"
            >
              <div className="md:w-48">
                <p className="font-serif text-3xl text-copper md:text-4xl">
                  {service.eyebrow}
                </p>
                <p className="eyebrow mt-6 text-ink/55">{service.tagline}</p>
              </div>

              <div className="max-w-2xl">
                <h3 className="h-display text-3xl text-ink md:text-5xl">
                  {service.title}
                </h3>
                <p className="mt-8 text-base leading-relaxed text-ink/70 md:text-lg">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
