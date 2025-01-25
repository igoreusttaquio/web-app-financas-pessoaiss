import { criarConexao } from "../data/conexao-banco.js";
import * as queries from "./model-queries.js";

export async function ultimasTransacoes() {
  let conexao;
  try {
    conexao = await criarConexao();
    await conexao.connect();
    const [rows] = await conexao.query(queries.ultimasTransacoes);
    return rows;
  } catch (err) {
    console.error("erro ao buscar transacoes", err);
    return [transacao];
  } finally {
    if (conexao) conexao.end();
  }
}

const transacao = {
  conta: null,
  valor: 0,
  data: null,
  descricao: null,
  categoria: null,
};
