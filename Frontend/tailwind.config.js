module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "75vw": "75vw",
      },
      colors: {
        "orange-100": "rgb(255 237 213)",
        "orange-300": "rgb(253 186 116)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};