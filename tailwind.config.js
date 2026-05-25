/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Trust & Authority palette — deep, authoritative trust-navy
        // (per UI UX Pro Max skill recommendation for professional / real-estate services)
        brand: {
          50: '#eef2fb',
          100: '#d9e2f5',
          200: '#b9c9ec',
          300: '#8ba5dd',
          400: '#5a79c9',
          500: '#3a59b4',
          600: '#1e40af',
          700: '#1c3992',
          800: '#1c3175',
          900: '#1c2b5d',
          950: '#121a3c',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f3dc99',
          400: '#e7b948',
          500: '#dba022',
          600: '#bd7f16',
        },
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#dde0e8',
          300: '#c2c8d4',
          400: '#929bae',
          500: '#677289',
          600: '#4d586e',
          700: '#3b4458',
          800: '#28303f',
          900: '#161c28',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(22,28,40,0.05)',
        soft: '0 1px 3px 0 rgba(22,28,40,0.06), 0 1px 2px -1px rgba(22,28,40,0.04)',
        card: '0 1px 2px 0 rgba(22,28,40,0.04), 0 14px 30px -12px rgba(22,28,40,0.12)',
        'card-hover': '0 2px 6px 0 rgba(22,28,40,0.05), 0 30px 54px -14px rgba(22,28,40,0.24)',
        lift: '0 12px 26px -10px rgba(30,64,175,0.45)',
        ring: '0 0 0 1px rgba(22,28,40,0.06)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
