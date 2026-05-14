var database = require("../database/config");

function cadastrar(nome, email, cpf, senha, idAdm, cargoFunc, idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,cpf, senha, idAdm, cargoFunc, idEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
            INSERT INTO usuario(nome, email, cpf, senha, ativo, fk_adm, fk_empresa, fk_funcao) VALUES 
            ('${nome}','${email}', '${cpf}', '${senha}', 1, ${idAdm}, ${idEmpresa}, ${cargoFunc});
                    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} 

function listar() {
    var instrucaoSql = `
       SELECT 
            usuario.id_usuario,
            usuario.nome,
            usuario.email,
            CASE
                WHEN usuario.ativo = 1 THEN 'Ativo'
                ELSE 'Inativo'
            END AS status,
            funcao.nome_funcao
        FROM usuario
        JOIN funcao
            ON usuario.fk_funcao = funcao.id_funcao;   
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar,
    listar
};