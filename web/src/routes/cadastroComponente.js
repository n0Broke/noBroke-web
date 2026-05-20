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

module.exports = router;