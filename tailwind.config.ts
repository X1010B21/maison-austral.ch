import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1B2D',
        pure: '#FFFFFF',
        sand: {
          50: '#FBF8F2',
          100: '#F5EFE3',
          200: '#EDE3CE',
          300: '#E0D2B0',
        },
        copper: {
          DEFAULT: '#B87333',
          light: '#C8895A',
          dark: '#8F571E',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
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
