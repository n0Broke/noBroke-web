var express = require("express");
var router = express.Router();

var servidorController = require("../controllers/servidorController");


router.post("/", function (req, res) {
    console.log("BODY:", req.body);
    servidorController.cadastrarServidor(req, res);
});

router.get("/servidor", function(req, res) {
    servidorController.listarServidores(req, res)
})
 
module.exports = router;