var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT id_token FROM token WHERE id_token = '${id}'`;

  return database.executar(instrucaoSql);
}

/*
function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
}
function listar() {
  var instrucaoSql = `SELECT id_token FROM token`;

  return database.executar(instrucaoSql);
}
function cadastrar(razaoSocial, cnpj) {
  var instrucaoSql = `INSERT INTO empresa (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

  return database.executar(instrucaoSql);
}
*/ 
module.exports = { buscarPorId };
