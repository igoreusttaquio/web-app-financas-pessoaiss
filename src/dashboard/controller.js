import { ultimasTransacoes } from "./model.js";

export async function dashboard(req, res) {
  const transacoes = await ultimasTransacoes();
  console.log(transacoes);
  res.render("dashboard", {
    titulo: "Dashboard",
    transacoes,
  });
}
