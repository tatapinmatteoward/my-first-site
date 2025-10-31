/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d3748',
        accent: '#ff6b6b',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
