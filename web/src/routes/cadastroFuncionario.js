var express = require("express");
var router = express.Router();

var cadastroFuncionarioController = require("../controllers/cadastroFuncionarioController")

router.post("/cadastrar", function (req, res) {
     cadastroFuncionarioController.cadastrar(req, res);
});

router.post("/atualizarFunc", function (req, res) {
     cadastroFuncionarioController.atualizar(req, res);
});

router.get("/listar", function(req, res) {
     cadastroFuncionarioController.listar(req, res);
});

module.exports = router;