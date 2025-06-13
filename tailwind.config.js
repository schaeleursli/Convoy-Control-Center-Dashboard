export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#0f172a',
          'navy-light': '#1e293b',
        },
        accent: {
          orange: '#ff8200',
          'orange-light': '#ffb366',
          'orange-dark': '#cc6600',
        },
        status: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(255, 130, 0, 0.3)',
        'glow-md': '0 0 20px rgba(255, 130, 0, 0.4)',
        'glow-lg': '0 0 30px rgba(255, 130, 0, 0.5)',
      },
    },
  },
  plugins: [],
};