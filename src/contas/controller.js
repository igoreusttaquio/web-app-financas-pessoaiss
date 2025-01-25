import { salvar, obterContas } from "./model.js";

export async function contas(request, response) {
  var contas = await obterContas();
  response.render("contas", {
    titulo: "Contas",
    contas,
  });
}

export async function criarConta(request, response) {
  const conta = {
    nome_conta: request.body.nome_conta,
    tipo_conta: request.body.tipo_conta,
    saldo: request.body.saldo,
    criado_em: new Date(),
    usuario_id: 1,
  };

  await salvar(conta);
  console.log(conta);
  response.redirect("/contas");
}
