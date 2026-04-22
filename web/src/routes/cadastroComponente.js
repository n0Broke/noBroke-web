var express = require("express");
var router = express.Router();
var componenteController = require("../controllers/componenteController");

router.post("/", function (req, res) {
    console.log("BODY COMPLETO:", req.body);
    console.log("COMPONENTES:", req.body.componentes);

    return componenteController.cadastrarComponente(req, res);
});

module.exports = router;