import { criarPersonagem } from "../src/personagem.js";
import { lerClasse, lerNome } from "../prompts/lerDados.js";
import { listarPersonagens } from "../src/personagem.js";
import { iniciarBatalha } from "../src/batalha.js";
import { sorteaInimigo } from "../src/inimigos.js";
import { verificaPersonagem } from "../src/personagem.js";

export function fluxoCriarPersonagem() {
  const nome = lerNome("Qual nome do personagem: ");
  const classe = lerClasse("Qual a classe do personagem: ");

  const resultadoPersonagemCriado = criarPersonagem(nome, classe);

  console.log(resultadoPersonagemCriado.mensagem);
}

export function fluxoMostrarPersonagens() {
  const resultadoListaPersonagens = listarPersonagens();

  if (!resultadoListaPersonagens.ok) {
    console.log(resultadoListaPersonagens.mensagem);
  }

  for (const p of resultadoListaPersonagens.lista) {
    console.log(`
      NOME: ${p.nome} 
      CLASSE: ${p.classe}
      VIDA: ${p.vidaMax}
      DANO: ${p.dano}`);
  }
}

export function fluxoBatalha() {
  const personagem = verificaPersonagem("Qual personagem escolhido: ");

  if (!personagem.ok) {
    console.log(personagem.mensagem);
    return;
  }

  const inimigoAleatorio = sorteaInimigo();
  console.log("Inimigo escolhido foi: ", inimigoAleatorio);

  const personagens = {
    player: personagem.personagem,
    inimigo: inimigoAleatorio,
  };

  const resultadoBatalha = iniciarBatalha(personagens);

  console.log(resultadoBatalha.resultado);
}
