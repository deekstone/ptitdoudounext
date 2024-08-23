const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./types/**/*.{js,ts,jsx,tsx,mdx}",
        "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: "#9682FF",
                purple: "#7F1EDD",
                gray: "#54595F",
            },
            fontFamily: {
                LobsterRegular: "LobsterRegular",
                MonserratBold: "MontserratBold",
                MontserratLight: "MontserratLight",
                MontserratMedium: "MontserratMedium",
                MontserratThin: "MontserratThin",
                RobotoBlack: "RobotoBlack",
                RobotoBold: "RobotoBold",
                RobotoLight: "RobotoLight",
                RobotoMedium: "RobotoMedium",
                RobotoRegular: "RobotoRegular",
            },
        },
    },
});
