module.exports = {
    content: ["./src/**/*.{html,js}", "*.html"],
    theme: {
        container: {
            center: true,
            padding: "20px",
        },
        extend: {},
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#EA5455",
                    secondary: "#FFCE5B",
                    accent: "#2D4059",
                    neutral: "#3D4451",
                    "base-100": "#FFFFFF",
                    info: "#3ABFF8",
                    success: "#1DC197",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
