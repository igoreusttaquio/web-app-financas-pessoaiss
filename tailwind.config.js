/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./templates/**/*.{html,pug}",
    "./contas/**/*.{html,pug}",
    "./categorias/**/*.{html,pug}",
    "./dashboard/**/*.{html,pug}",
    "./transacoes/**/*.{html,pug}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
