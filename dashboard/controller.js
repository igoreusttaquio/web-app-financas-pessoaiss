import { dirname } from "path";
import { fileURLToPath } from "url";

export function dashboard(req, res) {
  const transacoes = [
    {
      data: "20/01/2025",
      conta: "Conta Corrente",
      categoria: "Receita",
      valor: "R$ 100,00",
      descricao: "Salário",
    },
    {
      data: "15/01/2025",
      conta: "Poupança",
      categoria: "Despesa",
      valor: "R$ 50,00",
      descricao: "Supermercado",
    },
  ];

  res.render(`${dirname(fileURLToPath(import.meta.url))}/views/dashboard`, {
    title: "Dashboard",
    transacoes,
  });
}
