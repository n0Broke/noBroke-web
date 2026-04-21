var database = require("../database/config");

function cadastrarComponente(idServidor, componentes) {

    var promises = [];

    componentes.forEach(c => {

        var sql = `
            INSERT INTO tipo_componente (
                fk_componente,
                fk_servidor,
                fk_formato,
                nome_componente,
                valor_max_critico,
                valor_min_critico,
                valor_max_atencao,
                valor_min_atencao
            )
            VALUES (
                ${c.fk_componente},
                ${idServidor},
                ${c.fk_formato},
                '${c.nome_componente}',
                ${c.valor_max_critico},
                ${c.valor_min_critico},
                ${c.valor_max_atencao},
                ${c.valor_min_atencao}
            );
        `;

        var p = database.executar(sql).then(result => {
            return result.insertId;
        });

        promises.push(p);
    });

    return Promise.all(promises);
}

function cadastrarLegendas(idServidor, legendas, idsTipo, fkEmpresa) {

    var promises = [];

    legendas.forEach((l, index) => {

        var fkTipo = idsTipo[index];

        var sql = `
            INSERT INTO nivel_alerta (
                critico,
                alerta,
                normal,
                fkEmpresa,
                fkServidor,
                fkTipo_componente
            )
            VALUES (
                ${l.critico},
                ${l.atencao},
                ${l.saudavel},
                ${fkEmpresa},
                ${idServidor},
                ${fkTipo}
            );
        `;

        promises.push(database.executar(sql));
    });

    return Promise.all(promises);
}

module.exports = {
    cadastrarComponente,
    cadastrarLegendas
};