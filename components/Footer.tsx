import { Faq } from './Faq';
import { CONTACT_EMAIL, DESTINATIONS, NAV_LINKS } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-ink text-pure">
      <div className="container-austral py-20 md:py-28">
        {/* Identité éditoriale en tête de footer */}
        <div className="mb-16 grid gap-10 border-b border-pure/15 pb-12 md:mb-20 md:grid-cols-[1fr_auto] md:items-end md:pb-16">
          <h2 className="h-display text-[clamp(2rem,5vw,4rem)] text-pure max-w-xl">
            Maison <em>Austral</em>
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-arrow text-pure hover:text-copper-light transition-colors"
          >
            <span>Écrivez-nous</span>
            <span aria-hidden className="arrow">→</span>
          </a>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-6">Questions fréquentes</p>
            <Faq />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-5">Navigation</p>
              <ul className="space-y-3 text-sm text-pure/80">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="hover:text-copper-light transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-5">Destinations</p>
              <ul className="space-y-3 text-sm text-pure/80">
                {[...DESTINATIONS.espagne, ...DESTINATIONS.portugal]
                  .slice(0, 6)
                  .map((d) => (
                    <li key={d.name}>{d.name}</li>
                  ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="eyebrow mb-5">Contact</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display text-xl uppercase tracking-tight text-pure hover:text-copper-light transition-colors md:text-2xl"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-pure/55">
                Un seul interlocuteur. Prise en charge sous quatre heures,
                réponse personnalisée sous vingt-quatre heures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pure/10">
        <div className="container-austral flex flex-col items-start justify-between gap-3 py-6 text-[10px] uppercase tracking-[0.28em] text-pure/45 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Maison Austral</p>
          <p>Suisse · Espagne · Portugal</p>
          <p>MMXXVI</p>
        </div>
      </div>
    </footer>
  );
}
