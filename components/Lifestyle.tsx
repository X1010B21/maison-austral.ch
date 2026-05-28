const REASONS = [
  {
    eyebrow: 'I',
    title: 'Le climat',
    italic: 'doux',
    body: "Trois cents jours de soleil. Des hivers tempérés. Une autre relation au temps.",
    img: 'https://images.unsplash.com/photo-1544951493-01c350afa408?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'II',
    title: "L'architecture",
    italic: 'd\'hier',
    body: "Patios, pierre, lumière. L'héritage andalou et portugais, des quintas aux maisons blanchies.",
    img: 'https://images.unsplash.com/photo-1600818767171-fde3f6e1d275?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'III',
    title: "L'art de vivre",
    italic: 'lent',
    body: "Le rythme du Sud. Les marchés, les terrasses, les soirs longs. La lenteur retrouvée.",
    img: 'https://images.unsplash.com/photo-1719760907022-7e83e8181d50?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'IV',
    title: 'La discrétion',
    italic: 'retrouvée',
    body: "Des lieux préservés. Des conversations confidentielles. Une relation tenue dans la durée.",
    img: 'https://images.unsplash.com/photo-1649609658815-e184a101c9f3?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'V',
    title: 'La sécurité',
    italic: 'simple',
    body: "Des destinations stables, des cadres rassurants pour vos proches. Un quotidien serein.",
    img: 'https://images.unsplash.com/photo-1763112825634-1ceff451dda0?auto=format&fit=crop&w=900&q=80',
  },
  {
    eyebrow: 'VI',
    title: 'La fiscalité',
    italic: 'claire',
    body: "Des régimes maîtrisés, étudiés avec nos conseils partenaires. Une lecture sans angle mort.",
    img: 'https://images.unsplash.com/photo-1719760907059-71323f4b2b35?auto=format&fit=crop&w=900&q=80',
  },
] as const;

export function Lifestyle() {
  return (
    <section id="lifestyle" className="bg-sand-50 py-28 md:py-40">
      <div className="container-austral">
        {/* En-tête de section style Edmiston */}
        <div className="mb-16 flex flex-col gap-10 md:mb-24 md:flex-row md:items-end md:justify-between md:gap-16">
          <div>
            <p className="eyebrow reveal">L'art de vivre ibérique</p>
            <h2 className="h-display reveal reveal-delay-1 mt-5 text-[clamp(2.25rem,6vw,5rem)] text-ink max-w-2xl">
              Pourquoi <em>y</em> partir
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-sm text-base leading-relaxed text-ink/65 md:text-[15px]">
            Six raisons que nos clients formulent, à voix basse,
            lors du premier rendez-vous.
          </p>
        </div>

        {/* Grid de cards photo */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {REASONS.map((r) => (
            <article
              key={r.title}
              className="reveal group relative isolate aspect-[4/5] overflow-hidden bg-ink"
            >
              {/* Image */}
              <div
                className="absolute inset-0 -z-10 bg-cover bg-center transition-transform duration-[1500ms] ease-austral group-hover:scale-105"
                style={{ backgroundImage: `url(${r.img})` }}
              />
              {/* Voile pour lisibilité */}
              <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
              />

              {/* Contenu — façon yacht-card Edmiston */}
              <div className="relative flex h-full flex-col justify-between p-7 text-pure md:p-8">
                <p className="font-serif text-2xl text-copper-light italic md:text-3xl">
                  {r.eyebrow}
                </p>

                <div>
                  <h3 className="h-display text-2xl text-pure md:text-3xl">
                    {r.title.replace(/^(Le |La |L')/, '')}
                    <em className="ml-2">{r.italic}</em>
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-pure/75">
                    {r.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
