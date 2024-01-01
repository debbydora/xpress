/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#039BF0",
        textBlack: "#1A1619",
        pendingYellow: "#FF9900",
        lightYellow: "rgba(255, 153, 0, 0.10);",
        lightBlue: "#F2FAFF",
        lightGreen: "rgba(39, 167, 19, 0.10);",
        lightRed: "rgba(255, 0, 0, 0.10)",
      },
      boxShadow: {
        "custom-light": "0px 4px 10px 0px rgba(0, 0, 0, 0.06)",
        "button-light": "0px 2px 8px 0px rgba(0, 0, 0, 0.15);",
      },
    },
  },
  plugins: [],
};
