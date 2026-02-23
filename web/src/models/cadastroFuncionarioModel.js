console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, fk_token);
 
var instrucaoSql = `
    INSERT INTO usuario (nome, email, senha, fk_token) VALUES ('${nome}', '${email}', '${senha}', '${fk_token}');`

console.log("Executando a instrução SQL: \n" + instrucaoSql);

return database.executar(instrucaoSql);