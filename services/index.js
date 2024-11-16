import { frases } from "../data/index.js";

export const retornaMensagemDoDia = () => {
    const data = new Date();
    const dia = data.getDate();
    return frases[dia];
}