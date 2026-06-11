import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#E85D26",
          light: "#F2845A",
          dark: "#C44A18",
        },
        ink: {
          50: "#F7F7F6",
          100: "#EEEEEC",
          200: "#D8D8D4",
          300: "#AEAEA8",
          400: "#888882",
          500: "#6A6A64",
          600: "#52524D",
          700: "#3A3A37",
          800: "#252522",
          900: "#141412",
          950: "#0A0A09",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Fira Code", "monospace"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      typography: (theme: (path: string) => string) => ({
        DEFAULT: {
          css: {
            color: theme("colors.ink.800"),
            a: { color: "#E85D26", textDecorationColor: "#E85D26" },
            "h1,h2,h3,h4": { color: theme("colors.ink.900"), fontWeight: "500" },
            code: {
              background: theme("colors.ink.100"),
              borderRadius: "4px",
              padding: "2px 5px",
              fontWeight: "400",
              color: "#E85D26",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: {
              borderLeftColor: "#E85D26",
              color: theme("colors.ink.600"),
              fontStyle: "normal",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.ink.200"),
            "h1,h2,h3,h4": { color: theme("colors.ink.50") },
            code: { background: theme("colors.ink.800"), color: "#F2845A" },
            blockquote: { color: theme("colors.ink.400") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};

export default config;
