var tokenModel = require("../models/tokenModel");
/*
function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  tokenModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

*/


function buscarPorId(req, res) {
  var id = req.params.id;
  
  tokenModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}
 
/*
function cadastrar(req, res) {
  var cnpj = req.body.cnpj;
  var razaoSocial = req.body.razaoSocial;

  tokenModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a token com o cnpj ${cnpj} já existe` });
    } else {
      tokenModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}
*/
module.exports = {
  buscarPorId
};
