'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Montage de 3 séquences Pexels (libres de droits, usage commercial OK) :
 *  1. Cascais — Casa da Guia + Atlantique (Portugal)
 *  2. Porto — vue aérienne du centre historique
 *  3. Mallorca — falaises et côte sud
 *
 * Pour swap par les images du client : remplacer ces URLs par /public/hero-1.mp4 etc.
 */
const SOURCES = [
  'https://videos.pexels.com/video-files/17480422/17480422-uhd_2560_1440_25fps.mp4',
  'https://videos.pexels.com/video-files/34286709/14526189_2560_1440_24fps.mp4',
  'https://videos.pexels.com/video-files/31805420/13550438_2560_1440_30fps.mp4',
] as const;

export function Hero() {
  // Deux balises vidéo qu'on alterne (A/B) pour un crossfade entre clips
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showA, setShowA] = useState(true);

  // Force les bonnes propriétés iOS + lance la lecture
  useEffect(() => {
    const setup = (v: HTMLVideoElement | null) => {
      if (!v) return;
      v.muted = true;
      v.playsInline = true;
      v.setAttribute('muted', '');
      v.setAttribute('playsinline', '');
      v.setAttribute('webkit-playsinline', '');
    };
    setup(videoA.current);
    setup(videoB.current);

    const tryPlay = (v: HTMLVideoElement | null) => {
      v?.play().catch(() => {
        const onInteract = () => {
          v?.play().catch(() => {});
        };
        window.addEventListener('touchstart', onInteract, { passive: true, once: true });
        window.addEventListener('click', onInteract, { once: true });
      });
    };
    tryPlay(videoA.current);
    tryPlay(videoB.current);
  }, []);

  // Quand une vidéo se termine, swap vers l'autre + précharge la suivante
  const handleEnded = (which: 'A' | 'B') => {
    const next = (activeIndex + 1) % SOURCES.length;
    setActiveIndex(next);

    // Précharge la prochaine vidéo dans la balise inactive
    const target = which === 'A' ? videoB.current : videoA.current;
    if (target) {
      target.src = SOURCES[(next + 1) % SOURCES.length];
      target.load();
    }
    setShowA(which === 'B'); // si A vient de finir, B prend la main
  };

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink text-pure"
    >
      {/* Vidéo A */}
      <video
        ref={videoA}
        className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1200ms] ease-austral ${
          showA ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => handleEnded('A')}
      >
        <source src={SOURCES[0]} type="video/mp4" />
      </video>

      {/* Vidéo B */}
      <video
        ref={videoB}
        className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-[1200ms] ease-austral ${
          showA ? 'opacity-0' : 'opacity-100'
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => handleEnded('B')}
      >
        <source src={SOURCES[1]} type="video/mp4" />
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
