import { lerBanco } from "../src/db.js";

export function sorteaInimigo() {
  const PATH = "./data/inimigos.json";
  const inimigos = lerBanco(PATH);

  const indice = Math.floor(Math.random() * inimigos.length);
  const inimigoAleatorio = inimigos[indice];

  return inimigoAleatorio;
}
