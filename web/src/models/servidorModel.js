var database = require("../database/config");

function cadastrar(nomeServidor,SOservidor,serialServidor,hostServidor,enderecoServidor,sshServidor,ambienteServidor,localizacaoServidor,fk_empresa){
  var instrucaoSql = `
    INSERT INTO servidor (id_servidor,nome,sistema_operacional,fk_empresa,portaSerial,hostServer,endereco,chaveSSH,ambiente,localizacao) VALUES (
      DEFAULT,
      '${nomeServidor}',
      '${SOservidor}',
      ${fk_empresa},
      '${serialServidor}',
      '${hostServidor}',
      '${enderecoServidor}',
      '${sshServidor}',
      '${ambienteServidor}',
      '${localizacaoServidor}');
        `;
  console.log("Executando SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar(fk_empresa) {
  var instrucao = `SELECT * FROM servidor Where fk_empresa = ${fk_empresa}`;
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
  listar
};