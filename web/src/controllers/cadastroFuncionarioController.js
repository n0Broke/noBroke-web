var cadastroFuncionarioModel = require("../models/cadastroFuncionarioModel");

tokenModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });

  tokenModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
        .json({ mensagem: `a token com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
      tokenModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
  buscarPorId
};

