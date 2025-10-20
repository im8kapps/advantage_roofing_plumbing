/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#DB7F2B',
          light: '#F5B567',
          dark: '#A35412',
        },
        slate: {
          950: '#0B1320',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top right, rgba(219,127,43,0.35), transparent 55%), linear-gradient(135deg, #0B1320 0%, #1F6AA6 60%, #0B1320 100%)',
        'texture-diagonal':
          'linear-gradient(135deg, rgba(15,28,45,0.92), rgba(15,28,45,0.92)), url("https://images.unsplash.com/photo-1457342813143-a1ae27448a82?auto=format&fit=crop&w=1000&q=80")',
      },
      boxShadow: {
        glow: '0 25px 50px -12px rgba(33, 150, 243, 0.35)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
};
