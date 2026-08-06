/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: 'rgb(var(--white-rgb) / <alpha-value>)',
        black: 'rgb(var(--black-rgb) / <alpha-value>)',
        ink: 'rgb(var(--background-rgb) / <alpha-value>)',
        panel: 'rgb(var(--surface-rgb) / <alpha-value>)',
        line: 'rgb(var(--border-rgb) / 0.08)',
        accent: {
          DEFAULT: 'rgb(var(--accent-rgb) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft-rgb) / <alpha-value>)',
          dim: 'rgb(var(--accent-dim-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        soft: '0 24px 70px -24px var(--shadow)',
        card: '0 1px 0 var(--card-inset) inset, 0 24px 60px -24px var(--shadow)',
        glow: '0 0 90px -24px var(--glow)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        pulseSoft: {
          '0%,100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 24s linear infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
