/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1028px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", '"DM Sans"', "sans-serif"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        "inset-white": "inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
      },
      colors: {
        "custom-blue": "#5a9bfe",
        "custom-blue-transparent": "rgba(90, 155, 254, 0)",
      },
      width: {
        "card-sm": "max-w-[236px]",
        "card-md": "max-w-[216px]",
        "card-lg": "max-w-[271px]",
      },
    },
  },
  plugins: [],
};
