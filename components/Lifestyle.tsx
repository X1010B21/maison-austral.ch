const REASONS = [
  {
    title: 'Le climat',
    body:
      "Trois cents jours de soleil par an, des hivers doux et des étés mesurés sur les côtes atlantiques. Une autre relation au temps.",
  },
  {
    title: "L'architecture",
    body:
      "Patios, pierre, lumière. L'héritage andalou et portugais, des quintas du Douro aux maisons blanchies de la Costa Brava.",
  },
  {
    title: "L'art de vivre",
    body:
      "Le rythme du Sud. Les marchés, les terrasses, les soirs longs. La lenteur comme luxe retrouvé.",
  },
  {
    title: 'La discrétion',
    body:
      "Des lieux préservés, encore peu fréquentés. Des conversations confidentielles, une relation tenue dans la durée.",
  },
  {
    title: 'La sécurité',
    body:
      "Des destinations stables, des cadres rassurants pour vos proches. Un quotidien serein, sans renoncement.",
  },
  {
    title: 'La fiscalité',
    body:
      "Des régimes fiscaux maîtrisés, étudiés avec nos conseils partenaires. Une lecture transparente, sans angle mort.",
  },
] as const;

export function Lifestyle() {
  return (
    <section id="lifestyle" className="bg-sand-50 py-28 md:py-40">
      <div className="container-austral">
        <div className="mx-auto mb-20 max-w-3xl text-center md:mb-28">
          <p className="eyebrow reveal">L'art de vivre ibérique</p>
          <h2 className="h-display reveal reveal-delay-1 mt-6 text-[clamp(2rem,5vw,4.25rem)] leading-[1.05] text-ink">
            Pourquoi y partir.
          </h2>
          <p className="reveal reveal-delay-2 mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">
            Six raisons que nos clients formulent souvent, à voix basse,
            lors du premier rendez-vous.
          </p>
        </div>

        <div className="grid gap-y-16 gap-x-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
          {REASONS.map((r, i) => (
            <article key={r.title} className="reveal max-w-sm">
              <p className="font-serif text-2xl text-copper">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-ink md:text-3xl">
                {r.title}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink/65">
                {r.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
