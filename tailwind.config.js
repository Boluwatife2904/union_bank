/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                satoshi: ["Satoshi"],
                satoshi_light: ["SatoshiLight"],
                satoshi_medium: ["SatoshiMedium"],
                satoshi_bold: ["SatoshiBold"],
                inter: ["Inter"],
                inter_medium: ["InterMedium"],
                inter_semibold: ["InterSemibold"],
                inter_bold: ["InterBold"],
            },
            colors: {
                primary: "#009FDF",
                "gray-dark": "#1E1E1E",
            },
        },
    },
    plugins: [],
};
