type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const color = variant === 'light' ? 'text-pure' : 'text-ink';
  return (
    <a
      href="/#top"
      className={`group inline-flex flex-col leading-none ${color} ${className}`}
    >
      <span className="font-display text-[15px] uppercase tracking-[0.28em] md:text-base">
        Maison Austral
      </span>
      <span className="mt-2 text-[9px] uppercase tracking-[0.32em] opacity-65">
        Suisse · Ibérique
      </span>
    </a>
  );
}
