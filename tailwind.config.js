/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2A60',
        deep: '#061437',
        aqua: '#1FDFD0',
        teal: '#087A88',
        mist: '#EEF1F7',
        cloud: '#F3F6FB',
      },
    },
  },
  plugins: [],
}
