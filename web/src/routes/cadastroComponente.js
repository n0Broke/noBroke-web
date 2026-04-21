var express = require("express");
var router = express.Router();
var componenteController = require("../controllers/componenteController");

router.post("/", function (req, res) {
    console.log("BODY COMPLETO:", req.body);
    console.log("COMPONENTES:", req.body.componentes);

    return componenteController.cadastrarComponente(req, res);
});

router.post("/legendas", function (req, res) {
    console.log("BODY COMPLETO:", req.body);
    console.log("LEGENDAS:", req.body.legendas);

    return componenteController.cadastrarLegendas(req, res);
});

module.exports = router;