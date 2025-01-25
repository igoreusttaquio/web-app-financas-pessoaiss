import { criarConexao } from "../data/conexao-banco.js";

export async function ultimasTransacoes() {
  const query = `
        SELECT 
            contas.nome_conta as conta, 
            transacoes.valor as valor, 
            transacoes.data_transacao, 
            transacoes.descricao as descricao, 
            transacoes.criado_em as data,
            categorias.nome_categoria as categoria
        FROM 
            transacoes
        JOIN 
            contas ON transacoes.conta_id = contas.conta_id
        JOIN
            categorias ON transacoes.categoria_id = categorias.categoria_id; `;
  const conexao = await criarConexao();
  try {
    await conexao.connect();
    const [rows] = await conexao.query(query);
    return rows;
  } catch (err) {
    console.error("erro ao buscar transacoes", err);
  } finally {
    conexao.end();
  }
}
