export class Personagem {
  constructor(nome, classe) {
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
        throw new Error("Classe inválida");
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

  return {
    ok: true,
    mensagem: "Personagem válido",
  };
  const novoPersonagem = new Personagem(nome, classe);
}
