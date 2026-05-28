import { CONTACT_EMAIL } from '@/lib/content';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-sand-100 py-32 md:py-44"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(154,109,63,0.18), transparent 70%)',
        }}
      />

      <div className="container-austral relative">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="eyebrow">Entamons le dialogue</p>
          <h2 className="h-display mt-6 text-[clamp(2.5rem,7vw,6rem)] text-ink">
            Parlez-nous <em>de votre</em>
            <br />
            projet
          </h2>
          <p className="mx-auto mt-10 max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
            Quelques lignes suffisent. Une vraie personne lit chaque
            message et vous répond sous vingt-quatre heures.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-16 inline-flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.32em] text-ink/55">
              Écrivez-nous
            </span>
            <span className="font-display text-2xl uppercase tracking-tight text-ink transition-colors duration-500 group-hover:text-copper md:text-3xl">
              {CONTACT_EMAIL}
            </span>
            <span className="mt-2 h-px w-16 bg-copper transition-all duration-500 group-hover:w-24" />
          </a>

          <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center justify-center gap-3 border-t border-ink/10 pt-10 text-[10px] uppercase tracking-[0.32em] text-ink/55 sm:flex-row sm:gap-10">
            <span>Confidentialité</span>
            <span aria-hidden className="hidden h-px w-6 bg-ink/20 sm:block" />
            <span>Réponse personnelle</span>
            <span aria-hidden className="hidden h-px w-6 bg-ink/20 sm:block" />
            <span>Sous 24 heures</span>
          </div>
        </div>
      </div>
    </section>
  );
}
