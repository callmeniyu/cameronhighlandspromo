/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': 'rgb(var(--forest-green) / <alpha-value>)',
        'moss-green': 'rgb(var(--moss-green) / <alpha-value>)',
        'highland-blue': 'rgb(var(--highland-blue) / <alpha-value>)',
        'mist-gray': 'rgb(var(--mist-gray) / <alpha-value>)',
        'earth-brown': 'rgb(var(--earth-brown) / <alpha-value>)',
        'sunset-orange': 'rgb(var(--sunset-orange) / <alpha-value>)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

