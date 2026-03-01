/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,html}",  // ← ADDED .jsx + index.html!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
