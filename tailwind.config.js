/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#004bff",

          secondary: "#006bcd",

          accent: "#00999f",

          neutral: "#121b13",

          "base-100": "#e6ffff",

          info: "#00b2d7",

          success: "#009454",

          warning: "#ffba00",

          error: "#ff3d72",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

