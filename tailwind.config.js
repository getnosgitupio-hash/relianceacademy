export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        peace: ['"Peace Sans"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0 },
        },
        shine: {
          '0%': { transform: 'translateX(-150%)' },
          '100%': { transform: 'translateX(350%)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideLTR: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
        shine: 'shine 15s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-ltr': 'slideLTR 10s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = Object.entries(theme("textShadow") || {}).map(
        ([key, value]) => {
          return [`.text-shadow-${key}`, { textShadow: value }];
        }
      );
      addUtilities(Object.fromEntries(newUtilities));
    },
  ],
};
