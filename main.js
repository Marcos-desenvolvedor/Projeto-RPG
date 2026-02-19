import {
  fluxoBatalha,
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
    3 - BATALHA
    4 - SAIR `);

    const opcao = prompt("Qual sua opção: ");

    switch (opcao) {
      case "1":
        fluxoCriarPersonagem();
        break;
      case "2":
        fluxoMostrarPersonagens();
        break;
      case "3":
        fluxoBatalha();
        break;
      case "4":
        console.log("Saindo");
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
}

Menu();
