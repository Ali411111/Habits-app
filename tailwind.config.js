/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/**/*.html"
  ],
  theme: {
    extend: {
      fontSize:{
        'xxxs':'8px',
        'xxs':'10px',
      },
      spacing:{
          "4.5":"1.125rem"
      },

    colors:{
      "whitebg":"#F1F8FB",
      "bluegaz":"#1271a6",
      "bluebg":"#B3DCF9",
      'hgreen':'#85d2b8',
      'gorange':'#e88614',
      'fsky':'#17c1d9',
      'pred':'#b62020',
      'cblue':'#3085c2',
      'cgreen':'#107d1b',
      'fblue':'#03539d',
      'spurple':'#7400cf',
      'lpink':'#df5495',
      'ebrown':'#8d7538',
      'num-purple':'#102699',
      'light-black':'#1b2a3d',
      'light-white':'#f4f4f4',
      'lwhite':'#feffff',
      "darkblue":"#202641",
      "graydark":"#343a40",
      "Gray":"#6c757d",
      "CGray":"#F5F5F5",
      "lGreen":"#b6e3da",
      "lOrange":"#e7e5d5",
      "lSky":"#c3e8ed",
      "lRed":"#e89f9f",
      "lBlue":"#add5e7",
      "llGreen":"#c8e8cb",
      "llBlue":"#8ab7e0",
      "lPurple":"#7400cf",
      "llpink":"#f2d7df",
      "lBrown":"#d3cdbe",

    }
      ,
      fontFamily:{
        "PoppinsMedium":"Poppins Medium",
        "PoppinsRegular":"Poppins Regular",
        "PoppinsSemiBold":"Poppins SemiBold",
        "PoppinsBold":"Poppins Bold",
        "PoppinsExtraBold":"Poppins ExtraBold",
        "InterMedium":"Inter Medium",
        "InterSemiBold":"Inter SemiBold",
        "RobotoMedium":"Roboto Medium",
        "RobotoBold":"Roboto Bold"

        
      }
    },
    screens:{
      'xsm':'400px',
      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'blg':'993px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xlarge':'1257px',

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl':'1541px',
    }
  },
  plugins: [],
}

