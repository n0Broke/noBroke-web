var tokenAleatorioModel = require("../models/tokenAleatorioModel");

function buscarUltimoId(req, res) {
  var id = req.params.id;

  tokenAleatorioModel.buscarUltimoId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listaCodigos(req, res) {
  tokenAleatorioModel.listaCodigos().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  buscarUltimoId,
  listaCodigos
};
