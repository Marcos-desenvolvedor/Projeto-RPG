import { criarPersonagem } from "../src/personagem.js";
import { lerClasse, lerNome } from "../prompts/lerDados.js";
import { listarPersonagens } from "../src/personagem.js";

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


