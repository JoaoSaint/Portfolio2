
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--brand) / <alpha-value>)',
        'brand-foreground': 'rgb(var(--brand-foreground) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'surface-1': 'rgb(var(--surface-1-rgb) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2-rgb) / <alpha-value>)',
        'surface-3': 'rgb(var(--surface-3-rgb) / <alpha-value>)',
        mist: 'rgb(var(--mist-rgb) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-inverted': 'rgb(var(--text-inverted) / <alpha-value>)',
        'border-soft': 'rgb(var(--border-soft-rgb) / <alpha-value>)',
        'border-strong': 'rgb(var(--border-strong-rgb) / <alpha-value>)',
        'chip-text': 'rgb(var(--chip-text) / <alpha-value>)',
      },
      backgroundImage: {
        'hero-glow': 'var(--hero-glow)',
        'card-sheen': 'var(--card-sheen)',
        'section-gradient': 'var(--section-gradient)',
      },
      boxShadow: {
        brand: 'var(--shadow-brand)',
        'card-inner': 'var(--shadow-card-inner)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
