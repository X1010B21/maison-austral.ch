'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero vidéo — montage 6 destinations
 *
 * Le fichier /public/hero.mp4 est un montage de 37 s qui enchaîne avec
 * crossfade 1 s :
 *   1. Cascais (PT) — Casa da Guia & Atlantique
 *   2. Barcelone (ES) — skyline panoramique
 *   3. Lisbonne (PT) — parc Eduardo VII
 *   4. Valencia (ES) — Cité des Arts et des Sciences
 *   5. Porto (PT) — centre historique
 *   6. Algarve (PT) — côte sud, falaises
 *
 * Sources Pexels libres de droits, concaténées avec ffmpeg.
 * Pour swap par les rushes du client : remplacer simplement `public/hero.mp4`.
 */

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Force les bonnes propriétés AVANT toute tentative de lecture (iOS Safari)
    v.muted = true;
    v.playsInline = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay bloqué (iOS Low Power Mode notamment)
        // → relance dès qu'il y a une interaction utilisateur
        const onInteract = () => {
          v.play().catch(() => {});
        };
        window.addEventListener('touchstart', onInteract, { passive: true, once: true });
        window.addEventListener('click', onInteract, { once: true });
        window.addEventListener('scroll', onInteract, { passive: true, once: true });
      });
    };

    if (v.readyState >= 2) tryPlay();
    else v.addEventListener('loadeddata', tryPlay, { once: true });
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink text-pure"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,27,23,0.45) 0%, rgba(31,27,23,0.15) 40%, rgba(31,27,23,0.65) 100%)',
        }}
      />

      <div className="container-austral relative flex-1 flex flex-col justify-end pb-28 pt-40 md:pb-36 md:pt-48">
        <p className="hero-fade text-[11px] uppercase tracking-[0.32em] text-pure/80 md:text-xs">
          Maison Austral &nbsp;—&nbsp; Suisse · Ibérique
        </p>

        <h1 className="h-display hero-fade hero-delay-1 mt-8 text-[clamp(2.75rem,8.5vw,8rem)] text-pure max-w-5xl">
          Vivre <em>ailleurs</em>,
          <br />
          <em>sans</em> compromis.
        </h1>

        <div className="hero-fade hero-delay-2 mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a href="#lifestyle" className="link-arrow text-pure">
            <span>Découvrir</span>
            <span aria-hidden className="arrow">→</span>
          </a>
          <a href="#contact" className="link-arrow text-pure/70 hover:text-pure">
            <span>Nous écrire</span>
            <span aria-hidden className="arrow">→</span>
          </a>
        </div>
      </div>

      <div className="container-austral relative pb-8 md:pb-10">
        <div className="hero-fade hero-delay-3 flex items-end justify-between border-t border-pure/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.32em] text-pure/60">
            Relocation privée
          </p>
          <p className="hidden text-[10px] uppercase tracking-[0.32em] text-pure/60 md:block">
            Espagne &nbsp;·&nbsp; Portugal
          </p>
          <p className="text-[10px] uppercase tracking-[0.32em] text-pure/60">
            MMXXVI
          </p>
        </div>
      </div>
    </section>
  );
}
