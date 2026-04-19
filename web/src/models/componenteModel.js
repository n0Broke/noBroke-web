var database = require("../database/config");

function cadastrarComponentes(idServidor, componentes) {
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

        console.log("SQL:", sql);

        promises.push(database.executar(sql));
    });

    return Promise.all(promises);
}

module.exports = {
    cadastrarComponentes
};