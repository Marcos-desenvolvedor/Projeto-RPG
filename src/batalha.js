import { salvarBanco } from "./db.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function iniciarBatalha(personagens) {
  const player = personagens.player;
  const inimigo = personagens.inimigo;

  while (player.vidaAtual > 0 && inimigo.vidaAtual > 0) {
    console.log(`${player.nome} - Vida: ${player.vidaAtual}`);
    console.log(`${inimigo.nome} - Vida: ${inimigo.vidaAtual}\n`);

    const opcao = Number(prompt(" 1 - ATACAR | 2 - FUGIR: "));

    if (opcao === 1) {
      inimigo.vidaAtual -= player.dano;

      if (inimigo.vidaAtual <= 0) break;

      player.vidaAtual -= inimigo.dano;
    } else if (opcao === 2) {
      console.log("Você fugiu");
      return { ok: true, resultado: "fuga" };
    } else {
      console.log("Opção inválida");
    }

    if (player.vidaAtual <= 0) {
      console.log("Você morreu");
      return {
        ok: false,
        resultado: "derrotado",
      };
    }
  }

  console.log(
    `Você venceu! Ganhou  ${inimigo.xpDrop} XP e ${inimigo.ouroDrop} ouro.`,
  );

  player.xp += inimigo.xpDrop;
  player.ourp += inimigo.ouroDrop;

  salvarBanco("personagem.json", player);

  return {
    ok: true,
    resultado: "Vitória",
  };
}
