/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "10xl": "10rem",
      },
      fontSize: {
        xxs: "0.68rem",
      },
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        poppinsbold: ["Poppins-Bold", "sans-serif"],
        poppinsextrabold: ["Poppins-Extra-Bold", "sans-serif"],
        poppinsextrabolditalic: ["Poppins-Extra-Bold-Italic", "sans-serif"],
        poppinsbolditalic: ["Poppins-Bold-Italic", "sans-serif"],
        poppinsitalic: ["Poppins-Italic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
