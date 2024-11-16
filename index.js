import express from "express";
import { retornaMensagemDoDia } from "./services/index.js";

const app = express();

const PORTA = 8080;

app.get("/", (req, res) => {
    const mensagemSelecionada = retornaMensagemDoDia();
    res.json({ mensagem: mensagemSelecionada });
})

app.listen(PORTA, () => {
    const data = new Date();
    console.log(`Servidor node iniciado em ${data.toLocaleString()}, na porta ${PORTA}`);
})