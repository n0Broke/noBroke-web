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

    return componenteModel.cadastrarComponente(idServidor, componentes)
        .then(idsTipo => {
            res.json({
                ok: true,
                idsTipo
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
}
function cadastrarLegendas(req, res) {
    var { idServidor, legendas } = req.body;

    var idsTipo = req.body.idsTipo;
    var fkEmpresa = req.body.fkEmpresa;
    if (!Array.isArray(legendas) || legendas.length === 0) {
    return res.status(400).json("Legendas inválidas");
}

if (!Array.isArray(idsTipo) || idsTipo.length === 0) {
    return res.status(400).json("idsTipo inválido");
}

    return componenteModel.cadastrarLegendas(
        idServidor,
        legendas,
        idsTipo,
        fkEmpresa
    )
    .then(r => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
}

module.exports = {
    cadastrarComponente,
    cadastrarLegendas
};