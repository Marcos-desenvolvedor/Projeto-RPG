import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function lerNome(valor) {
  while (true) {
    const nome = prompt(valor).trim();

    if (nome === "" || nome === undefined) {
      console.log("Nome inválido");
      continue;
    }

    if (!isNaN(nome)) {
      console.loh("Nome não pode ser um número");
      continue;
    }
    return nome;
  }
}

export function lerClasse(valor) {
  while (true) {
    const classe = prompt(valor).trim();

    const regrasClasses = ["Arqueiro", "Mago", "Guerreiro"];

    if (!regrasClasses.includes(classe)) {
      console.log(`Classe inválida...
            DEVE SER UM DESSES ("Arqueiro", "Mago", "Guerreiro")
            `);
      continue;
    }

    return classe;
  }
}
