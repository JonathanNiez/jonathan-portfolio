/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light_blue: "#B2D1D8",
          sky_blue_1: "#81C5D5",
          skt_blue_2: "#65C0D9",
          lapis_lazuli: "#00669D",
          prussian_blue: "#002742",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        "montserrat-400": ["var(--font-montserrat-400)"],
        "montserrat-500": ["var(--font-montserrat-500)"],
        "montserrat-600": ["var(--font-montserrat-600)"],
      },
    },
  },
};
