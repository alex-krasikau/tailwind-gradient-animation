import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        gradient: "--tw-gradient-from-color, --tw-gradient-to-color",
      },

      animation: {
        fancy: "rainbow 10s linear infinite",
      },
      keyframes: ({ theme }) => ({
        rainbow: {
          "0%, 100%": {
            "--tw-gradient-from-color": theme("colors.red.500"),
            "--tw-gradient-to-color": theme("colors.yellow.500"),
          },
          "25%": {
            "--tw-gradient-from-color": theme("colors.green.500"),
          },
          "50%": {
            "--tw-gradient-to-color": theme("colors.blue.500"),
          },
          "75%": {
            "--tw-gradient-from-color": theme("colors.purple.500"),
          },
        },
      }),
    },
  },
  corePlugins: {
    gradientColorStops: false,
  },
  plugins: [require("./tailwind/gradient")],
};
export default config;
