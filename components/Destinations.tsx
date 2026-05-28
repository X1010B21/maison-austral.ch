import { DESTINATIONS } from '@/lib/content';

type DestItem = { name: string; region: string };

const DEST_META: Record<string, { tag: string; tone: string }> = {
  Oliva: { tag: 'Méditerranée · Valence', tone: 'from-[#1a2c44] to-[#3a5779]' },
  'Costa Blanca Nord': {
    tag: 'Méditerranée · Alicante',
    tone: 'from-[#2a3a52] to-[#5a7a96]',
  },
  Galicia: { tag: 'Atlantique · Nord', tone: 'from-[#0f1b2d] to-[#27425e]' },
  Lisbonne: { tag: 'Capitale · Atlantique', tone: 'from-[#1b2a40] to-[#496883]' },
  Porto: { tag: 'Atlantique · Douro', tone: 'from-[#0f1b2d] to-[#3a5066]' },
  Algarve: { tag: 'Sud · Côte', tone: 'from-[#2b3953] to-[#7a8aa4]' },
  Comporta: { tag: 'Alentejo · Pinèdes', tone: 'from-[#1a2738] to-[#4a6177]' },
  'Alcácer do Sal': { tag: 'Alentejo · Rivière', tone: 'from-[#142035] to-[#3d566f]' },
  'Santa Cruz': { tag: 'Estoril · Falaises', tone: 'from-[#0f1b2d] to-[#2f4660]' },
  'Douro Valley': { tag: 'Vignobles · Intérieur', tone: 'from-[#1c2942] to-[#516a85]' },
};

function Card({ d }: { d: DestItem }) {
  const meta = DEST_META[d.name] ?? { tag: d.region, tone: 'from-ink to-[#3a5066]' };
  return (
    <a
      href={`mailto:contact@maison-austral.ch?subject=${encodeURIComponent(
        `Demande — ${d.name}`,
      )}`}
      className="group relative isolate block aspect-[4/5] overflow-hidden bg-ink"
    >
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-br ${meta.tone} transition-transform duration-[1200ms] ease-austral group-hover:scale-105`}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 70% 90%, rgba(184,115,51,0.4), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-transparent to-transparent"
      />

      <div className="relative flex h-full flex-col justify-between p-7 text-pure">
        <p className="text-[10px] uppercase tracking-widest text-pure/70">
          {meta.tag}
        </p>

        <div>
          <h3 className="h-display text-3xl md:text-4xl">{d.name}</h3>
          <div className="mt-4 flex items-center gap-3 text-xs tracking-widest opacity-80 transition-all duration-500 group-hover:translate-x-1 group-hover:text-copper-light">
            <span>EN SAVOIR PLUS</span>
            <span aria-hidden>→</span>
          </div>
        </div>
      </div>
    </a>
  );
}

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand-50 py-24 md:py-32">
      <div className="container-austral">
        <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="eyebrow reveal">Découvrir</p>
            <h2 className="h-display reveal reveal-delay-1 mt-5 text-4xl text-ink md:text-6xl">
              Une sélection de lieux où poser ses valises,
              <em className="not-italic text-copper"> et son histoire.</em>
            </h2>
          </div>
          <p className="reveal reveal-delay-2 max-w-lg text-base leading-relaxed text-ink/70 md:text-lg md:justify-self-end">
            De la Galice à l&apos;Algarve, du Douro à l&apos;Alentejo. Nous
            connaissons nos terrains. Cliquez sur une destination pour entamer
            la conversation.
          </p>
        </div>

        <div className="mb-16">
          <p className="eyebrow reveal mb-6">Espagne</p>
          <div className="reveal reveal-delay-1 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {DESTINATIONS.espagne.map((d) => (
              <Card key={d.name} d={d} />
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow reveal mb-6">Portugal</p>
          <div className="reveal reveal-delay-1 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {DESTINATIONS.portugal.map((d) => (
              <Card key={d.name} d={d} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
