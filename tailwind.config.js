const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors:{
            ...colors,
            lg:'#C1EDE2',
            dg:'#649B8E',
            br:'#707070',
            vlg:'#E6F2EF',
            lb:'#666666'
        },
        fontFamily:{
            'roboto':['Roboto','sans-serif'],
            
        }
    },
    plugins: [],
}