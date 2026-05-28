import { CONTACT_EMAIL } from '@/lib/content';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-sand-100 py-28 md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(184,115,51,0.18), transparent 70%)',
        }}
      />
      <div className="container-austral relative">
        <div className="reveal mx-auto max-w-4xl text-center">
          <p className="eyebrow">Entamons la conversation</p>
          <h2 className="h-display mt-6 text-4xl text-ink md:text-7xl">
            Parlons de votre <em className="not-italic text-copper">projet</em>.
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            Pas de formulaire interminable. Écrivez-nous directement, une vraie
            personne vous répondra sous 24 heures.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-14 inline-flex flex-col items-center gap-3"
          >
            <span className="text-[10px] uppercase tracking-widest text-ink/60">
              Écrivez-nous
            </span>
            <span className="font-serif text-3xl text-ink underline decoration-copper decoration-1 underline-offset-[10px] transition-colors duration-500 group-hover:text-copper md:text-5xl">
              {CONTACT_EMAIL}
            </span>
          </a>

          <div className="mt-16 flex flex-col items-center justify-center gap-3 text-xs uppercase tracking-widest text-ink/60 sm:flex-row sm:gap-10">
            <span>Prise en charge sous 4 h</span>
            <span aria-hidden className="hidden h-px w-8 bg-ink/20 sm:block" />
            <span>Réponse personnalisée sous 24 h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
