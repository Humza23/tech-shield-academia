// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all your source files are included
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
