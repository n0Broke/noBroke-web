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

async function atualizarComponente(idServidor, componentes) {
    for (let c of componentes) {
        var sqlSelect = `
        SELECT * FROM tipo_componente WHERE fk_servidor = ${idServidor} AND fk_componente = ${c.fk_componente};
        `
        try {
            var result = await database.executar(sqlSelect);
            console.log("Teste" + result)

            if (result.length == 0) {
                var sqlInsert = `
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
                await database.executar(sqlInsert);
                console.log("Inserido com sucesso!");
            } else {
                var sqlUpdate = `
            UPDATE tipo_componente SET 
                fk_servidor = ${idServidor},
                fk_formato = ${c.fk_formato},
                nome_componente = "${c.nome_componente}",
                valor_max_critico = ${c.valor_max_critico},
                valor_min_critico = ${c.valor_min_critico} WHERE fk_servidor = ${idServidor} AND fk_componente = ${c.fk_componente};
        `;
                await database.executar(sqlUpdate);
                console.log("Atualizado com sucesso!");
            }
        } catch (erro) {
            console.error("Erro ao executar banco:", erro);
        }
    };
}

function listarComponentes(idServidor) {

    var sql = `
        SELECT *
        FROM tipo_componente
        WHERE fk_servidor = ${idServidor};
    `;

    return database.executar(sql);
}

module.exports = {
    cadastrarComponente,
    atualizarComponente,
    listarComponentes
};