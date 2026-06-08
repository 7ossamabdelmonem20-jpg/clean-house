import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['var(--font-cairo)', 'Cairo', 'sans-serif'],
        tajawal: ['var(--font-tajawal)', 'Tajawal', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        // Design System Primary Blue (#0A84FF)
        primary: {
          50:  '#e5f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b1ff',
          400: '#3397ff',
          500: '#0A84FF',
          600: '#0068cc',
          700: '#004e99',
          800: '#003566',
          900: '#001b33',
        },
        // Design System Teal Accent (#14B8A6)
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14B8A6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Design System Dark Navy (#1E2937)
        navy: {
          700: '#1E2937',
          800: '#16202c',
          900: '#0f161e',
        },
        // Design System Success / Fresh Green (#22C55E)
        accent: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22C55E',
          600: '#16a34a',
          700: '#15803d',
        },
        // Warning
        amber: { 400: '#F59E0B', 500: '#d97706' },
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
        'fade-in':     'fadeIn 0.8s ease-out forwards',
        'slide-up':    'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow':          '0 0 24px rgba(10,132,255,0.25)',
        'glow-green':    '0 0 24px rgba(34,197,94,0.25)',
        'glow-teal':     '0 0 24px rgba(20,184,166,0.25)',
        'card':          '0 2px 20px rgba(0,0,0,0.06)',
        'card-hover':    '0 12px 40px rgba(0,0,0,0.12)',
        'section':       '0 4px 32px rgba(10,132,255,0.08)',
      },
    },
  },
  plugins: [],
}
export default config
