var servidorModel = require("../models/servidorModel");
 
function cadastrarServidor(req, res) {
   
    var nomeServidor = req.body.nomeServer;
    var SOservidor = req.body.SOServer;  
    var serialServidor = req.body.SerialServer;  
    var hostServidor = req.body.hostServer;
    var enderecoIPServidor = req.body.enderecoIPServer;
    var sshServidor = req.body.SSHServer;
    var ambienteServidor = req.body.ambienteServer; 
    var localizacaoServidor = req.body.localizacaoServer;
    var fk_empresa = req.body.fk_empresaServer
 

    if (nomeServidor == undefined) {
        res.status(400).send("O nome do Servidor está undefined!");
    } else if (SOservidor == undefined) {
        res.status(400).send("Seu SO está indefinido!");
    } else {

          servidorModel
              .cadastrar(nomeServidor, SOservidor, serialServidor, hostServidor, enderecoIPServidor, sshServidor,ambienteServidor,localizacaoServidor, fk_empresa)
              .then(function (resultado) {
    console.log("RESULTADO:", resultado);

    res.json({
        idServidor: resultado.insertId,
        resultado: resultado 
    });
})
              .catch(function (erro) {
                console.log(erro);
                console.log(
                  "\nHouve um erro ao realizar o cadastro do servidor! Erro: ",
                  erro.sqlMessage,
                );
                res.status(500).json(erro.sqlMessage);
              });
          }
        }
module.exports = {
    cadastrarServidor,
}