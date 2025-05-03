/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        breath: 'breath 1.8s ease-in-out infinite',
      },
      keyframes: {
        breath: {
          '0%,100%': { opacity: '0.4', transform: 'scaleY(0.95)' },
          '50%': { opacity: '1', transform: 'scaleY(1.05)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
