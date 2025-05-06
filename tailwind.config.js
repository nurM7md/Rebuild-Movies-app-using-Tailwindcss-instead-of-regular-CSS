module.exports = {
  content:[
    "./*.html" ,
    "./src/**/*.css" 
  ],

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/img/home3.jpg')",
      },
      spacing: {
        '30': '2rem', // 30px = 7.5rem
      },
      lineHeight: {
        'extra-loose': '4rem',  // تخصيص مسافة إضافية
        '5xl': '5rem',  // تخصيص مسافة 5rem
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
