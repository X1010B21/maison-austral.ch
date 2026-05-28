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
        <div className="reveal mx-auto max-w-3xl text-center">
          <p className="eyebrow">Entamons le dialogue</p>
          <h2 className="h-display mt-6 text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] text-ink">
            Parlez-nous
            <br />
            <em className="not-italic text-copper">de votre projet.</em>
          </h2>
          <p className="mx-auto mt-10 max-w-lg text-base leading-relaxed text-ink/65 md:text-lg">
            Quelques lignes suffisent. Une vraie personne lit chaque message
            et vous répond sous vingt-quatre heures.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-16 inline-flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink/55">
              Écrivez-nous
            </span>
            <span className="font-serif text-3xl text-ink underline decoration-copper decoration-1 underline-offset-[12px] transition-colors duration-500 group-hover:text-copper md:text-5xl">
              {CONTACT_EMAIL}
            </span>
          </a>

          <p className="mt-16 text-xs uppercase tracking-[0.3em] text-ink/50">
            Confidentialité · Réponse personnelle · Sous 24 heures
          </p>
        </div>
      </div>
    </section>
  );
}
