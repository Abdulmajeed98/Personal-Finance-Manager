module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        22: ["22px", "30px"],
      },
      colors: {
        "sidebar-dark": "#30475E",
        "sidebar-dark-alt": "#222831",
        "sidebar-red": "#F05454",
        "top-bar-light": "#F7F4F3",
      },

      boxShadow: {
        "top-bar": "0px 1px 8px rgba(34, 40, 49, 0.15)",
      },
    },
  },
  plugins: [],
};
