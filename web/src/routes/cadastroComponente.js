var express = require("express");
var router = express.Router();
var componenteController = require("../controllers/componenteController");

router.post("/cadastrarComponente", function (req, res) {
    console.log("BODY COMPLETO:", req.body);
    console.log("COMPONENTES:", req.body.componentes);

    return componenteController.cadastrarComponente(req, res);
});

router.post("/atualizarComponente", function (req, res) {
    console.log("BODY COMPLETO:", req.body);
    console.log("COMPONENTES:", req.body.componentes);

    return componenteController.atualizarComponente(req, res);
});

router.get("/listarComponentes/:idServidor", function (req, res) {
    componenteController.listarComponentes(req, res);
});

router.get("/pegarLimiteRAM/:idServidor", function (req, res) {
    componenteController.pegarLimiteRAM(req, res);
});

router.get("/pegarLimites/:idServidor", function (req, res) {
    componenteController.pegarLimites(req, res);
});

router.get("/pegarLimitesHome/:fkEmpresa", function (req, res) {
    componenteController.pegarLimitesHome(req, res);
});

module.exports = router;