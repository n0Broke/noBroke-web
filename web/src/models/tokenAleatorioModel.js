var database = require("../database/config");

function buscarUltimoId(id) {
  var instrucaoSql = `SELECT * FROM token ORDER BY id_token DESC LIMIT 1`;

  return database.executar(instrucaoSql);
}

function listaCodigos() {
  var instrucaoSql = `SELECT codigo FROM token`;

  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimoId,
  listaCodigos
};
