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

        res.status(500).json({
            erro: "Erro ao buscar dados do S3"
        });
    }
});

module.exports = router;