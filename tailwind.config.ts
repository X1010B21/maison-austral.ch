import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm near-black (espresso) — remplace le bleu froid
        ink: '#1F1B17',
        pure: '#FFFFFF',
        // Off-white / sable / pierre — palette Aman/Soho House
        sand: {
          50: '#FAF6EE',   // blanc cassé chaud (bg principal)
          100: '#F0E9DA',  // sable clair
          200: '#E5D6BC',  // sable
          300: '#C9B89F',  // beige pierre
        },
        // Bronze subtil (au lieu du cuivre orange)
        copper: {
          DEFAULT: '#9A6D3F',
          light: '#B68957',
          dark: '#7A5630',
        },
      },
      fontFamily: {
        // Italique serif éditorial — pour les accents dans les titres style Edmiston
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        // Sans-serif body
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        // Display caps — typographie principale des titres
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider: '0.08em',
        widest: '0.18em',
      },
      transitionTimingFunction: {
        austral: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
