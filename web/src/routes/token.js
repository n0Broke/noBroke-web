var express = require("express");
var router = express.Router();

var tokenController = require("../controllers/tokenController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
/*
router.post("/cadastrar", function (req, res) {
    tokenController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    tokenController.buscarPorCnpj(req, res);
});

router.get("/listar", function (req, res) {
  tokenController.listar(req, res);
});
*/

router.get("/buscar/:id", function (req, res) {
  tokenController.buscarPorId(req, res);
});
module.exports = router; 