module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bn: ["Hind Siliguri"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "1.5xl": "1.3rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      keyframes: {
        open: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        close: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        open: "open 300ms ease-out",
        close: "close 300ms ease-out",
      },
    },
  },
  plugins: [],
};
