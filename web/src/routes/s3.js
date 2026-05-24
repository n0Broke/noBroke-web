const express = require("express");
const router = express.Router();

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        sessionToken: process.env.AWS_SESSION_TOKEN
    }
});

// Rota da Isabela
router.get("/client", async (req, res) => {
    try {

        const comando = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "CLIENT/isa.json"
        });

        const resposta = await s3.send(comando);
        const dados = await resposta.Body.transformToString();
        res.json(JSON.parse(dados));

    } catch (erro) {

        console.error("Erro S3:", erro);
        res.status(500).json({ erro: "Erro ao buscar dados do S3" });

    }
});



// Rota do Gabriuel
router.get("/gabriel", async (req, res) => {
    try {

        const comando = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "CLIENT/gabriel.json"
        });

        const resposta = await s3.send(comando);
        const dados = await resposta.Body.transformToString();
        res.json(JSON.parse(dados));

    } catch (erro) {

        console.error("Erro S3:", erro);
        res.status(500).json({ erro: "Erro ao buscar dados do S3" });

    }
});

// Rota do Richard  
router.get("/richard", async (req, res) => {
    try {

        const comando = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "CLIENT/richard.json"
        });

        const resposta = await s3.send(comando);
        const dados = await resposta.Body.transformToString();
        res.json(JSON.parse(dados));

    } catch (erro) {

        console.error("Erro S3:", erro);
        res.status(500).json({ erro: "Erro ao buscar dados do S3" });

    }
});

// Rota do Matheus  
router.get("/pegarDados", async (req, res) => {
    try {
        const comando = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "CLIENT/matheus.json"
        });
        const resposta = await s3.send(comando);
        const dados = await resposta.Body.transformToString();
        res.json(JSON.parse(dados));
    } catch (erro) {
        console.error("Erro S3:", erro);
        res.status(500).json({ erro: "Erro ao buscar dados do S3" });
    }
});


router.get("/buscar_RAM", async (req,res) => {
    try{
        const get_json = new GetObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: "CLIENT/luiz.json" 
        });

        const resp = await s3.send(get_json);
        const porra = await resp.Body.transformToString();

        res.json(JSON.parse(porra));
    } catch (e) {
        console.error("Erro S3:", e);

        res.status(500).json({
            e: "Erro ao buscar dados do S3"
        });
    }
});

module.exports = router;