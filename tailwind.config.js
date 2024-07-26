export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "850px",
        Desktop: "1440px",
      },
      
      colors: {
          'primary': '#FDFAF6',
          'secondary': '#F8F2F0',
          'accent': '#A1DD70',
          'accent-dark' : '#14AE5C',
          'gray-white' : '#F6EEC9' ,
          'dark-gray' : '#776E6E',
          'gray-whity' : '#EEEEEE',
          'gray-bg' : '#F6F6F6'


      },
    },
  },
  plugins: [],
};