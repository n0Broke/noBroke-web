var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");

router.post("/cadastrarServidor", function (req, res) {
    console.log("BODY:", req.body);
    servidorController.cadastrarServidor(req, res);
});

router.post("/atualizarServidor", function (req, res) {
    console.log("BODY:", req.body);
    servidorController.atualizarServidor(req, res);
});

router.post("/listarServidor", function(req, res) {
    servidorController.listarServidores(req, res)
})
 
module.exports = router;