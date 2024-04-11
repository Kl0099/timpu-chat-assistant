/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainwhite: "rgba(255, 255, 255, 1)",
        maindarkwhite: "rgba(244,244,244,1)",
        mainblack: "rgba(51, 51, 51, 1)",
        headercolor: "rgba(239, 243, 253, 1)",
        maingreen: "rgba(63, 226, 37, 1)",
        mainblue: "rgba(76, 130, 239, 1)",
        mainyellow: "rgba(242, 207, 24, 1)",
        mainlightgreen: "rgba(220, 247, 197, 1)",
        mainslategray: "rgba(148, 148, 148, 1)",
        mainlightblue: "rgba(242, 247, 255, 1)",
        mainlightblue_2: "rgba(246, 249, 255, 1)",
        maindarkgrey: "rgba(102, 102, 102, 1)",
        lineargradient:
          "linear-gradient(to right,rgba(230, 238, 255, 1),rgba(230, 238, 255, 0))",
        lineargradient_2:
          "linear-gradient(to right,rgba(230, 238, 255, 1),rgba(250, 252, 255, 1))",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        400: "400",
      },
      maxWidth: {
        maxContent: "1920px",
        maxContentTab: "800px",
      },
    },
  },
  plugins: [],
};
