import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors (default)
        dark: {
          bg: '#1a1a18',
          surface: '#252321',
          'text-primary': '#ece7e1',
          'text-secondary': '#a8a39a',
          accent: '#d4cfc7',
          border: '#333230',
        },
        // Light theme colors
        light: {
          bg: '#ece7e1',
          surface: '#f5f2ee',
          'text-primary': '#1a1a18',
          'text-secondary': '#6b6760',
          accent: '#333230',
          border: '#d4cfc7',
        },
      },
      fontFamily: {
        sora: ['var(--sora)', 'system-ui', 'sans-serif'],
        inter: ['var(--inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--jetBrain)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'loading-dots': 'loadingDots 1.4s infinite ease-in-out both',
        'loading-bar': 'loadingBar 2s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        loadingDots: {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
          '40%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        loadingBar: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
