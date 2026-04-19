var componenteModel = require("../models/componenteModel");

function cadastrarComponente(req, res) {

    var idServidor = req.body.idServidor;
    var componentes = req.body.componentes;

    if (!idServidor) {
        return res.status(400).json("idServidor inválido");
    }

    if (!Array.isArray(componentes) || componentes.length === 0) {
        return res.status(400).json("Componentes inválidos");
    }
    for (let c of componentes) {
        if (
            c.fk_componente == null ||
            c.fk_formato == null ||
            c.nome_componente == null
        ) {
            return res.status(400).json({
                erro: "Componente com dados inválidos",
                componente: c
            });
        }
    }

    componenteModel.cadastrarComponentes(idServidor, componentes)
        .then(() => {
            res.json({ ok: true });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
}

module.exports = {
    cadastrarComponente
};