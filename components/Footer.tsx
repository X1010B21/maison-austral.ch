import { Faq } from './Faq';
import { CONTACT_EMAIL, DESTINATIONS, NAV_LINKS } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-ink text-pure">
      <div className="container-austral py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow mb-6">Questions fréquentes</p>
            <Faq />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Navigation</p>
              <ul className="space-y-2.5 text-sm text-pure/80">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-copper-light transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="/#destinations" className="hover:text-copper-light transition-colors">
                    Découvrir
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <ul className="space-y-2.5 text-sm text-pure/80">
                {[...DESTINATIONS.espagne, ...DESTINATIONS.portugal]
                  .slice(0, 6)
                  .map((d) => (
                    <li key={d.name}>{d.name}</li>
                  ))}
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="eyebrow mb-4">Contact</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-serif text-2xl text-pure hover:text-copper-light transition-colors md:text-3xl"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-4 max-w-sm text-sm text-pure/60">
                Un seul interlocuteur. Prise en charge sous 4 heures, réponse sous 24 heures.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pure/10">
        <div className="container-austral flex flex-col items-start justify-between gap-3 py-6 text-xs text-pure/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Maison Austral — Tous droits réservés</p>
          <p className="tracking-wider">Suisse · Espagne · Portugal</p>
        </div>
      </div>
    </footer>
  );
}
