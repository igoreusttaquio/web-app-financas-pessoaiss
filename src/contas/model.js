import { criarConexao } from "../data/conexao-banco.js";

export async function obterContas() {
  var query = "SELECT conta_id, nome_conta, tipo_conta, saldo FROM contas";
  let conexao;

  try {
    conexao = await criarConexao();
    await conexao.connect();
    const [rows] = await conexao.query(query);
    console.log(rows);
    return rows;
  } catch (err) {
    return [conta];
  } finally {
    if (conexao) conexao.end();
  }
}

export async function salvar(conta) {
  let conexao;
  var query =
    "INSERT INTO contas (usuario_id, nome_conta, tipo_conta, saldo, criado_em) VALUES (?,?,?,?,?);";

  try {
    conexao = await criarConexao();
    await conexao.connect();
    const [result] = await conexao.query(query, [
      conta.usuario_id,
      conta.nome_conta,
      conta.tipo_conta,
      conta.saldo,
      conta.criado_em,
    ]);

    return { ...conta, conta_id: result.insertId };
  } catch (err) {
    // log???
    console.log(err);
  } finally {
    if (conexao) conexao.end();
  }
}

const conta = {
  usuario_id: null,
  nome_conta: null,
  tipo_conta: null,
  saldo: null,
  criado_em: null,
};
