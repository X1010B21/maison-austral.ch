export function Apropos() {
  return (
    <section id="a-propos" className="bg-sand-100 py-24 md:py-32">
      <div className="container-austral">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
          <div className="reveal">
            <p className="eyebrow">À propos</p>
            <h2 className="h-display mt-5 text-4xl text-ink md:text-6xl">
              Tout a commencé par une <em className="not-italic text-copper">recherche</em>,
              loin de chez nous.
            </h2>
          </div>

          <div className="reveal reveal-delay-1 space-y-6 text-base leading-relaxed text-ink/75 md:text-lg">
            <p>
              Maison Austral est né d&apos;une évidence&nbsp;: trouver un bien
              à l&apos;étranger ne devrait pas se faire seul, ni au hasard.
              Derrière chaque projet de relocation, il y a une famille, une
              histoire, parfois une rupture, toujours une envie de
              renouveau.
            </p>
            <p>
              Nous accompagnons l&apos;humain avant le bien. Le contact direct
              prime, toujours. Chaque dossier mérite un regard neuf, une
              intention sincère. Vous n&apos;êtes pas un numéro sur une
              ligne&nbsp;: vous êtes un projet de vie.
            </p>
            <p>
              C&apos;est cet engagement, cette qualité d&apos;attention, qui
              fait la différence — et qui nous fait préférer cinq dossiers
              traités avec soin à cinquante traités à la chaîne.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-ink/10 pt-8">
              <div>
                <p className="font-serif text-3xl text-copper">4 h</p>
                <p className="text-xs uppercase tracking-widest text-ink/60">
                  Prise en charge
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-copper">24 h</p>
                <p className="text-xs uppercase tracking-widest text-ink/60">
                  Première réponse
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-copper">1</p>
                <p className="text-xs uppercase tracking-widest text-ink/60">
                  Seul interlocuteur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
