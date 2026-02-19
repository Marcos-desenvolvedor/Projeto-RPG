import {
  fluxoCriarPersonagem,
  fluxoMostrarPersonagens,
} from "./fluxos/fluxos.js";

import PromptSync from "prompt-sync";
import { iniciarBatalha } from "./src/batalha.js";
const prompt = PromptSync();

function Menu() {
  while (true) {
    console.log(`---- MENU ----
    1 - CRIAR PERSONAGEM
    2 - MOSTRAR PERSONAGENS 
    3 - SAIR `);

    const opcao = prompt("Qual sua opção: ");

    switch (opcao) {
      case "1":
        fluxoCriarPersonagem();
        break;
      case "2":
        fluxoMostrarPersonagens();
        break;
      case "3":
        console.log("Saindo");
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
}

// Menu();
const personagem = {
  id: 4,
  nome: "Marcos",
  classe: "Mago",
  nivel: 1,
  xp: 0,
  ouro: 0,
  vidaMax: 90,
  dano: 22,
  vidaAtual: 90,
};

const inimigo = {
  id: 1,
  nome: "Goblin",
  vida: 40,
  vidaAtual: 40,
  dano: 6,
  xpDrop: 20,
  ouroDrop: 10,
};

iniciarBatalha({
  player: personagem,
  inimigo: inimigo,
});
