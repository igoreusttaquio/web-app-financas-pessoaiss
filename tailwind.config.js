/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./templates/**/*.{html,pug}",
    "./contas/**/*.{html,pug}",
    "./dashboard/**/*.{html,pug}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
