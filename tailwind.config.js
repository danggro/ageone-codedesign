/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sasns-serif", "ui-system"],
    },
    extend: {
      fontSize: {
        md: "16px",
        "3xl": "28px",
        "4xl": "32px",
        "5xl": "36px",
        "6xl": "44px",
        "display-sm": "44px ",
        "display-lg": "72px ",
      },
      dropShadow: {
        // "3xl": "0px 32px 54px -12px rgba(56, 198, 130, 0.14)",
        xl: "0px 24px 48px -12px rgba(56, 198, 130, 0.18)",
      },
      boxShadow: {
        "3xl": "0px 32px 54px -12px rgba(16, 24, 40, 0.14)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -6px rgba(16, 24, 40, 0.08)",
        lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
        md: "0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        sm: "0px 1px 2px rgba(25, 17, 39, 0.06), 0px 1px 3px rgba(25, 17, 39, 0.06)",
        xs: "0px 1px 2px rgba(25, 17, 39, 0.05)",
      },
      colors: {
        gray: {
          50: "#F3F3F3",
          100: "#CECFD2",
          200: "#B6B8BC",
          300: "#9EA0A5",
          400: "#86888F",
          500: "#6D7079",
          600: "#555962",
          700: "#3D414C",
          800: "#181D2A",
          900: "#0C111F",
        },
        green: "#38C682",
      },
    },
  },
  plugins: [],
};
