/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg))',
        fg: 'rgb(var(--color-fg))',
        muted: 'rgb(var(--color-muted))',
        primary: 'rgb(var(--color-primary))',
        'primary-foreground': 'rgb(var(--color-primary-foreground))',
        secondary: 'rgb(var(--color-secondary))',
        'secondary-foreground': 'rgb(var(--color-secondary-foreground))',
        destructive: 'rgb(var(--color-destructive))',
        'destructive-foreground': 'rgb(var(--color-destructive-foreground))'
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)'
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/container-queries')]
};