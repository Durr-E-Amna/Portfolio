/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base:      '#1B1817',
        surface:   '#241F1D',
        'surface-2': '#2C2622',
        line:      '#38322E',
        ink:       '#F2EDE7',
        'ink-dim': '#B9B2AB',
        mint:      '#8FE3C0',
        'mint-deep': '#1E8A66',
        pink:      '#F0A8C4',
        'pink-deep': '#C9527A',
        peach:     '#F3C9A0',
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        mono:  ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        floatUp: {
          '0%':   { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '8%':   { opacity: '0.55' },
          '92%':  { opacity: '0.4' },
          '100%': { transform: 'translateY(-115vh) translateX(20px)', opacity: '0' },
        },
        blob1: {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(40px,60px) scale(1.15)' },
        },
        blob2: {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(-50px,-30px) scale(0.9)' },
        },
        blob3: {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(30px,-40px) scale(1.1)' },
        },
        pulseDot: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(243,201,160,0.55)' },
          '50%':     { boxShadow: '0 0 0 5px rgba(243,201,160,0)' },
        },
      },
      animation: {
        floatUp: 'floatUp linear infinite',
        blob1: 'blob1 16s ease-in-out infinite alternate',
        blob2: 'blob2 19s ease-in-out infinite alternate',
        blob3: 'blob3 22s ease-in-out infinite alternate',
        pulseDot: 'pulseDot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
