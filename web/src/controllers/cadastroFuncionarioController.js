var cadastroFuncionarioModel = require("../models/cadastroFuncionarioModel");

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeFuncServer;
  var email = req.body.emailFuncServer;
  var senha = req.body.senhaFuncServer;
  var idAdm = req.body.idAdmServer;
  var cargoFunc = req.body.cargoFuncServer; 
  var idEmpresa = req.body.idEmpresaServer;

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else if (idAdm == undefined) {
    res.status(400).send("Seu ID está undefined!");
  } else if (cargoFunc == undefined) {
    res.status(400).send("Seu Cargo está undefined!");
  } else if (idEmpresa == undefined) {
    res.status(400).send("Seu ID de Empresa está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    cadastroFuncionarioModel
      .cadastrar(nome, email, senha, idAdm, cargoFunc, idEmpresa)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage,
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar,
};
