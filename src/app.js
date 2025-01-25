import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { rota as rotasConta } from "./contas/index.js";
import { rota as rotasDashboard } from "./dashboard/index.js";
import { rota as rotasTrancao } from "./transacoes/index.js";
import { rotas as rotasCategoria } from "./categorias/index.js";
import { servirArquivosEstaticos } from "./utils/arquivos-estaticos.js";

const PORT = 8383;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

servirArquivosEstaticos(app);

app.set("view engine", "pug");

app.set("views", [
  path.join(__dirname, "contas", "views"),
  path.join(__dirname, "dashboard", "views"),
  path.join(__dirname, "transacoes", "views"),
  path.join(__dirname, "categorias", "views"),
  path.join(__dirname, "templates"),
]);

app.use("/contas", rotasConta);
app.use("/transacoes", rotasTrancao);
app.use("/categorias", rotasCategoria);

app.get("/", (request, response) => response.redirect("/dashboard"));

app.use("/dashboard", rotasDashboard);

app.listen(PORT, () => {
  console.log(`Servidor ouvindo em http://localhost:${PORT}`);
});
