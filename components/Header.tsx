'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Logo } from './Logo';
import { CONTACT_EMAIL, DESTINATIONS, NAV_LINKS, destinationMailto } from '@/lib/content';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ease-austral ${
        open
          ? 'bg-sand-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(31,27,23,0.06)] transition-none'
          : scrolled
            ? 'bg-sand-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(31,27,23,0.06)] transition-all duration-500'
            : 'bg-transparent transition-all duration-500'
      }`}
    >
      <div className="container-austral flex items-center justify-between py-5 md:py-7">
        <Logo variant={scrolled || open ? 'dark' : 'light'} />

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`link-underline text-sm tracking-wider ${
                scrolled ? 'text-ink' : 'text-pure'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setDiscoverOpen(true)}
            onMouseLeave={() => setDiscoverOpen(false)}
          >
            <button
              type="button"
              className={`link-underline text-sm tracking-wider ${
                scrolled ? 'text-ink' : 'text-pure'
              }`}
            >
              Découvrir
            </button>
            <div
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-5 transition-all duration-300 ${
                discoverOpen
                  ? 'pointer-events-auto opacity-100 translate-y-0'
                  : 'pointer-events-none opacity-0 -translate-y-2'
              }`}
            >
              <div className="w-[28rem] bg-sand-50 px-8 py-7 shadow-2xl shadow-ink/10">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="eyebrow mb-4">Espagne</p>
                    <ul className="space-y-2.5">
                      {DESTINATIONS.espagne.map((d) => (
                        <li key={d.name}>
                          <a
                            href={destinationMailto(d.name)}
                            className="block text-sm text-ink hover:text-copper transition-colors"
                          >
                            {d.name}
                            <span className="ml-2 text-xs text-ink/50">
                              {d.region}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-4">Portugal</p>
                    <ul className="space-y-2.5">
                      {DESTINATIONS.portugal.map((d) => (
                        <li key={d.name}>
                          <a
                            href={destinationMailto(d.name)}
                            className="block text-sm text-ink hover:text-copper transition-colors"
                          >
                            {d.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`text-sm tracking-wider transition-colors ${
              scrolled
                ? 'text-ink hover:text-copper'
                : 'text-pure hover:text-sand-100'
            }`}
          >
            Nous écrire
          </a>
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span
            className={`absolute h-px w-6 transition-all duration-300 ${
              scrolled || open ? 'bg-ink' : 'bg-pure'
            } ${open ? 'rotate-45' : '-translate-y-1.5'}`}
          />
          <span
            className={`absolute h-px w-6 transition-all duration-300 ${
              scrolled || open ? 'bg-ink' : 'bg-pure'
            } ${open ? '-rotate-45' : 'translate-y-1.5'}`}
          />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [destOpen, setDestOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset submenu when drawer closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => setDestOpen(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`lg:hidden ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      {/* Background layer — appears instantly when opening, fades out when closing */}
      <div
        className={`fixed inset-0 top-[72px] bg-sand-50 transition-opacity ease-austral ${
          open
            ? 'opacity-100 duration-0'
            : 'pointer-events-none opacity-0 duration-300'
        }`}
        aria-hidden
      />

      {/* Content layer — slides + fades in over the opaque bg */}
      <div
        className={`fixed inset-0 top-[72px] transition-all duration-300 ease-austral ${
          open ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-2'
        }`}
      >
        <div className="container-austral flex h-[calc(100vh-72px)] flex-col justify-between py-10">
          <nav className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block py-3 font-serif text-3xl text-ink"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setDestOpen((v) => !v)}
              className="flex w-full items-center justify-between py-3 font-serif text-3xl text-ink"
            >
              Découvrir
              <span
                className={`text-copper transition-transform duration-300 ${
                  destOpen ? 'rotate-45' : ''
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-austral ${
                destOpen
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 gap-6 pb-4 pl-4">
                  <div>
                    <p className="eyebrow mb-3">Espagne</p>
                    <ul className="space-y-2">
                      {DESTINATIONS.espagne.map((d) => (
                        <li key={d.name}>
                          <a
                            href={destinationMailto(d.name)}
                            onClick={onClose}
                            className="text-sm text-ink/80 hover:text-copper transition-colors"
                          >
                            {d.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Portugal</p>
                    <ul className="space-y-2">
                      {DESTINATIONS.portugal.map((d) => (
                        <li key={d.name}>
                          <a
                            href={destinationMailto(d.name)}
                            onClick={onClose}
                            className="text-sm text-ink/80 hover:text-copper transition-colors"
                          >
                            {d.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div>
            <p className="eyebrow mb-3">Écrivez-nous</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-serif text-2xl text-ink"
              onClick={onClose}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
