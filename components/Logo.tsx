type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const color = variant === 'light' ? 'text-pure' : 'text-ink';
  return (
    <a href="/#top" className={`group inline-flex flex-col leading-none ${color} ${className}`}>
      <span className="font-serif text-2xl tracking-tightest md:text-[1.65rem]">
        Maison Austral
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-widest opacity-70">
        Suisse · Ibérique
      </span>
    </a>
  );
}
