const SERVICES = [
  {
    eyebrow: 'I — Clé en main',
    title: 'Relocation',
    italic: 'complète',
    description:
      "De la recherche du bien à votre installation. Vente en Suisse si nécessaire, notariat, courtage, déménagement, vie quotidienne. Une seule personne, du premier mot au dernier carton.",
    img: 'https://images.unsplash.com/photo-1710883734891-93709398496d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    eyebrow: 'II — Résidence secondaire',
    title: 'Maison de',
    italic: 'vacances',
    description:
      "Sélection privée, en Espagne et au Portugal. Achat ou location longue durée. Accompagnement de A à Z, dans la discrétion d'un cabinet plutôt que d'une agence.",
    img: 'https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1200&q=80',
  },
  {
    eyebrow: 'III — Suisse · Ibérique',
    title: 'Rénovation',
    italic: 'sur mesure',
    description:
      "Maison, appartement, transformation lourde ou simple rafraîchissement. Nous orchestrons les artisans et tenons le calendrier.",
    img: 'https://images.unsplash.com/photo-1601086540476-7d9fa9dd6023?auto=format&fit=crop&w=1200&q=80',
  },
] as const;

export function Services() {
  return (
    <section id="services" className="bg-sand-100 py-28 md:py-40">
      <div className="container-austral">
        {/* En-tête */}
        <div className="mb-20 flex flex-col gap-10 md:mb-28 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <p className="eyebrow reveal">Le service</p>
            <h2 className="h-display reveal reveal-delay-1 mt-5 text-[clamp(2.25rem,6vw,5rem)] text-ink max-w-3xl">
              Trois <em>manières</em> d'avancer
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-sm text-base leading-relaxed text-ink/65">
            Une seule exigence : la vôtre. Un seul interlocuteur, de l'idée
            à l'installation.
          </p>
        </div>

        {/* Services en grandes lignes éditoriales alternées */}
        <div className="space-y-24 md:space-y-32">
          {SERVICES.map((service, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={service.title}
                className={`reveal grid items-center gap-10 md:gap-16 lg:gap-24 ${
                  reverse ? 'md:grid-cols-[1.1fr_1fr]' : 'md:grid-cols-[1fr_1.1fr]'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[5/6] overflow-hidden bg-ink md:aspect-[4/5] ${
                    reverse ? 'md:order-2' : ''
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-austral hover:scale-105"
                    style={{ backgroundImage: `url(${service.img})` }}
                  />
                </div>

                {/* Texte */}
                <div className={reverse ? 'md:order-1' : ''}>
                  <p className="eyebrow text-ink/55">{service.eyebrow}</p>
                  <h3 className="h-display mt-6 text-[clamp(2rem,4.5vw,3.75rem)] text-ink">
                    {service.title}
                    <br />
                    <em>{service.italic}</em>
                  </h3>
                  <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="link-arrow mt-10 text-ink hover:text-copper transition-colors"
                  >
                    <span>Échanger</span>
                    <span aria-hidden className="arrow">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
