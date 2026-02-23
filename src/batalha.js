import { salvarBanco, lerBanco } from "./db.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function iniciarBatalha(personagens) {
  const listaPersonagens = lerBanco("./data/personagem.json");

  const player = personagens.player;

  const inimigo = personagens.inimigo;

  while (player.vidaAtual > 0 && inimigo.vidaAtual > 0) {
    console.log(`${player.nome} - Vida: ${player.vidaAtual}`);
    console.log(`${inimigo.nome} - Vida: ${inimigo.vidaAtual}\n`);

    const opcao = Number(prompt(" 1 - ATACAR | 2 - FUGIR: "));

    if (opcao === 1) {
      const playerAtaqueAleatorio = Math.floor(Math.random() * player.dano) + 1;

      inimigo.vidaAtual -= playerAtaqueAleatorio;
      console.log(`Você deu ${playerAtaqueAleatorio} dano`);

      if (inimigo.vidaAtual <= 0) break;

      const inimigoAtaqueAleatorio =
        Math.floor(Math.random() * inimigo.dano) + 1;

      player.vidaAtual -= inimigoAtaqueAleatorio;
      console.log(`Inimigo deu ${inimigoAtaqueAleatorio} dano`);
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
  player.ouro += inimigo.ouroDrop;
  player.vidaAtual = player.vidaMax;

  if (player.xp >= 100) {
    const resto = player.xp % 100;
    player.nivel += 1;

    player.xp = resto;
  }

  const indexPersonagem = listaPersonagens.findIndex((p) => p.id === player.id);

  if (indexPersonagem !== -1) {
    listaPersonagens[indexPersonagem] = player;
  }

  salvarBanco("./data/personagem.json", listaPersonagens);

  return {
    ok: true,
    resultado: "Vitória",
  };
}
