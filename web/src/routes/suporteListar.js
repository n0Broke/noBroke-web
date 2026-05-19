const express = require("express");
const router = express.Router();

router.get("/buscar-chamados", async (req, res) => {
    const JIRA_DOMAIN = "";  
    const JIRA_EMAIL = ""; 
    const JIRA_TOKEN = "".trim();
    const JIRA_PROJECT_KEY = ""; 

    const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_TOKEN}`, "utf-8").toString("base64");

    // Mantendo a busca de tudo que não está Concluído (Done)
    const jqlQuery = `project = '${JIRA_PROJECT_KEY}' AND status != 'Done' ORDER BY created DESC`;
    const urlNova = `https://${JIRA_DOMAIN}/rest/api/3/search/jql`;

    try {
        const response = await fetch(urlNova, {
            method: "POST", 
            headers: {
                "Authorization": `Basic ${auth}`,
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "jql": jqlQuery,
                "maxResults": 50,
                // O SEGREDO ESTÁ AQUI: Forçar o Jira a trazer os dados dos campos!
                "fields": ["summary", "created"] 
            })
        });

        if (!response.ok) {
            const textoErro = await response.text();
            console.error(`=> Detalhes da recusa do Jira [Status ${response.status}]:`, textoErro);
            throw new Error(`Erro Jira API: ${response.status}`);
        }

        const data = await response.json();
        const listaIssues = data.issues || data.results || [];

        if (listaIssues.length === 0) {
            return res.status(200).json([]);
        }

        const chamadosFormatados = listaIssues.map(issue => {
            const dataCriacao = new Date(issue.fields?.created);
            
            // O issue.key costuma vir por padrão (Ex: NOB-35)
            const chaveIssue = issue.key || `NOB-${issue.id}`; 

            return {
                titulo: issue.fields?.summary || "Chamado sem título", 
                dataHora: issue.fields?.created ? dataCriacao.toLocaleDateString('pt-BR') + ' ' + dataCriacao.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : "Sem data",
                link: `https://${JIRA_DOMAIN}/browse/${chaveIssue}` 
            };
        });

        // Retorna a lista linda para o seu HTML montar as linhas da tabela
        res.status(200).json(chamadosFormatados);

    } catch (error) {
        console.error("Erro interno ao buscar do Jira:", error.message);
        res.status(500).send("Erro interno ao processar chamados");
    }
});

module.exports = router;