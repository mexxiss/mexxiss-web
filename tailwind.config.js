const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      '2xs': "400px",
      xs: "470px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1140px",
      '2xl': "1280px",
      '3xl': "1320px",
      '4xl': "1400px",
    },
    extend: {
      backgroundImage: {
        'red-gradient': 'linear-gradient(to left, #ff4545, #fe574f, #fd6659, #fc7363, #fa806e) !important',
      },
      colors: {
        'primary': '#FF4545',
        'text1': '#2e2e2e',
        'text2': '#d4d4d4',
        'heading': '#f8f9fa',
        'border1': '#D3D3D3',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
};
