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

function atualizarComponente(req, res) {
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

    return componenteModel.atualizarComponente(idServidor, componentes)
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

function listarComponentes(req, res) {

    var idServidor = req.params.idServidor;

    componenteModel.listarComponentes(idServidor)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });

}

function pegarLimiteRAM(req, res) {
    var idServidor = req.params.idServidor;

    componenteModel.pegarLimiteRAM(idServidor)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function pegarLimites(req, res) {
    var idServidor = req.params.idServidor;

    componenteModel.pegarLimites(idServidor)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

function pegarLimitesHome(req, res) {
    var fkEmpresa = req.params.fkEmpresa;

    componenteModel.pegarLimitesHome(fkEmpresa)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    cadastrarComponente,
    atualizarComponente,
    listarComponentes,
    pegarLimites,
    pegarLimitesHome,
    pegarLimiteRAM
};