// Adicione esta rota no seu arquivo de backend de suporte do Express
const express = require("express");
const router = express.Router();

router.get("/buscar-chamados", async (req, res) => {
    // Configurações do seu Jira (Mude para os seus dados do painel da Atlassian)
    const JIRA_DOMAIN = "";  // Dominio sem https
    const JIRA_EMAIL = ""; // Email
    const JIRA_TOKEN = ""; // API Token
    const JIRA_PROJECT_KEY = ""; // Sigla

    // Autenticação Basic em Base64 exigida pela Atlassian
    const auth = Buffer.from(`${JIRA_EMAIL}:${JIRA_TOKEN}`).toString("base64");

    // JQL (Query do Jira): Busca tarefas no projeto específico que não estão concluídas
    const jql = `project=${JIRA_PROJECT_KEY} AND status != Done ORDER BY created DESC`;

    try {
        const response = await fetch(`https://${JIRA_DOMAIN}/rest/api/3/search?jql=${encodeURIComponent(jql)}`, {
            method: "GET",
            headers: {
                "Authorization": `Basic ${auth}`,
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Erro Jira API: ${response.status}`);
        }

        const data = await response.json();

        // Mapeia o JSON bruto e complexo do Jira para o formato limpo que seu HTML precisa
        const chamadosFormatados = data.issues.map(issue => {
            const dataCriacao = new Date(issue.fields.created);
            return {
                titulo: issue.fields.summary, // Ex: "RAM Acima do Limite Crítico"
                dataHora: dataCriacao.toLocaleDateString('pt-BR') + ' ' + dataCriacao.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                link: `https://${JIRA_DOMAIN}/browse/${issue.key}` // Link direto para abrir o chamado
            };
        });

        res.status(200).json(chamadosFormatados);

    } catch (error) {
        console.error("Erro ao buscar do Jira:", error);
        res.status(500).send("Erro interno ao processar chamados");
    }
});

module.exports = router;