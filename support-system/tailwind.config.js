/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#37517e",
        page: "#2b3441",
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#f1f3f5",
        "blue-accent-hover": "#009fff",
      },
    },
  },
  plugins: [],
};
