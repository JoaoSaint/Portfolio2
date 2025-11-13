
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#7f5af0',
        'brand-foreground': '#0f0e17',
        accent: '#2cb67d',
        'surface-1': '#11131d',
        'surface-2': '#1a1d2b',
        'surface-3': '#23273a',
        mist: '#7f5af026',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 20% 20%, rgba(127, 90, 240, 0.28), transparent 55%), radial-gradient(circle at 80% 0%, rgba(44, 182, 125, 0.18), transparent 50%)',
        'card-sheen': 'linear-gradient(135deg, rgba(127, 90, 240, 0.2), rgba(35, 39, 58, 0.4))',
        'section-gradient': 'linear-gradient(180deg, rgba(17, 19, 29, 0.5), rgba(26, 29, 43, 0.5))',
      },
      boxShadow: {
        brand: '0 24px 80px -40px rgba(127, 90, 240, 0.6)',
        'card-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
