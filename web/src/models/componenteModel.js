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
                capacidade
            )
            VALUES (
                ${c.fk_componente},
                ${idServidor},
                ${c.fk_formato},
                '${c.nome_componente}',
                ${c.valor_max_critico},
                ${c.valor_min_critico},
                ${null}
            );
        `;

        var p = database.executar(sql).then(result => {
            return result.insertId;
        });

        promises.push(p);
    });

    return Promise.all(promises);
}

module.exports = {
    cadastrarComponente
};