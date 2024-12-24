/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "nunito-regular": ["nunito-regular", "sans-serif"],
        "nunito-bold": ["nunito-bold", "sans-serif"],
        "nunito-extrabold": ["Nunito-ExtraBold", "sans-serif"],
        "nunito-light": ["nunito-light", "sans-serif"],
        "nunito-medium": ["nunito-medium", "sans-serif"],
      },
      colors: {
        primary: "#F3FAF1",
      },
    },
  },
  plugins: [],
};
