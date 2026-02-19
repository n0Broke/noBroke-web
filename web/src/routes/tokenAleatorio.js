var express = require("express");
var router = express.Router();

var tokenAleatorioController = require("../controllers/tokenAleatorioController");

router.get("/buscarUltimo/:id", function (req, res) {
  tokenAleatorioController.buscarUltimoId(req, res);
});

router.get("/listaCodigos", function (req, res){
  tokenAleatorioController.listaCodigos(req, res);
});

module.exports = router; 