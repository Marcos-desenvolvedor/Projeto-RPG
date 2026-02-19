import { lerNome } from "../prompts/lerDados.js";
import { lerBanco, salvarBanco } from "./db.js";

const PATH = "./data/personagem.json";
const personagens = lerBanco(PATH);

export class Personagem {
  constructor(nome, classe) {
    this.id = personagens.length += 1;
    this.nome = nome;
    this.classe = classe;
    this.nivel = 1;
    this.xp = 0;
    this.ouro = 0;

    switch (classe) {
      case "Guerreiro":
        this.vidaMax = 120;
        this.dano = 14;
        break;

      case "Mago":
        this.vidaMax = 90;
        this.dano = 22;
        break;

      case "Arqueiro":
        this.vidaMax = 100;
        this.dano = 15;
        break;

      default:
        return {
          ok: false,
          mensagem: "Classe inválida",
        };
    }

    this.vidaAtual = this.vidaMax;
  }
}

export function criarPersonagem(nome, classe) {
  const regrasClasses = ["Arqueiro", "Mago", "Guerreiro"];

  if (nome === "" || nome === undefined) {
    return {
      ok: false,
      mensagem: "Nome inválido",
    };
  }

  if (!regrasClasses.includes(classe)) {
    return {
      ok: false,
      mensagem: "Classe do personagem inválida",
    };
  }

  const novoPersonagem = new Personagem(nome, classe);

  personagens.push(novoPersonagem);
  salvarBanco(PATH, personagens);

  return {
    ok: true,
    mensagem: "Personagem salvo",
  };
}

export function listarPersonagens() {
  const PATH = "./data/personagem.json";
  const personagens = lerBanco(PATH);

  if (personagens === "" || undefined) {
    return {
      ok: false,
      mensagem: "Erro no sistema",
    };
  }
  return {
    ok: true,
    mensagem: "Buscar finalizada",
    lista: personagens,
  };
}

export function verificaPersonagem(valor) {
  const PATH = "./data/personagem.json";
  const personagens = lerBanco(PATH);

  const personagem = lerNome(valor);

  const personagemExiste = personagens.find((p) => p.nome === personagem);

  if (!personagemExiste) {
    return {
      ok: false,
      mensagem: "Personagem não existe",
    };
  }

  return {
    ok: true,
    mensagem: "Personagem existe",
    personagem: personagemExiste,
  };
}
