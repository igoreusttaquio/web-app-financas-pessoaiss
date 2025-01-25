import { criarConexao } from "../data/conexao-banco.js";
import { ultimasTransacoes } from "./model-queries.js";

export async function ultimasTransacoes() {
  const conexao = await criarConexao();
  try {
    await conexao.connect();
    const [rows] = await conexao.query(ultimasTransacoes);
    return rows;
  } catch (err) {
    console.error("erro ao buscar transacoes", err);
  } finally {
    conexao.end();
  }
}
