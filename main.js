import { criarPersonagem } from "./src/personagem.js";

import PromptSync from "prompt-sync";
const prompt = PromptSync();

function Menu() {
  while (true) {
    console.log(`---- MENU ----
    1 - CRIAR PERSONAGEM
    2 - SAIR `);

    const opcao = prompt("Qual sua opção: ");

    switch (opcao) {
      case "1":
        criarPersonagem();
        break;
      case "2":
        console.log("Saindo");
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
}

Menu();
