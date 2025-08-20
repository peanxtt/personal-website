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
        blue: '#3E6868',
        red: '#C94E44',
        milk: '#C1ABB85',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'neon-pink': '#ff4dff',
        'neon-blue': '#4dffff',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 77, 255, 0.6)',
        neon: '0 0 15px rgba(77, 255, 255, 0.8)',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(#EDD793 0%, #E0C977 15%, #B88C3E 60%, #6A4912 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-selection':
          'linear-gradient(180deg, #EDD793 0%, #E0C977 15%, #B88C3E 60%, #6A4912 100%)',
        'gradient-gold':
          'linear-gradient(90deg, #F1DC83 0%, #BD8100 25.8%, #FFF5A8 35%, #BD8100 47%, #FFF5A8 57%, #BD8100 76%, #FFF5A8 100%)',
      },
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
