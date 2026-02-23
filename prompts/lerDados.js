import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function lerNome(valor) {
  while (true) {
    const nome = prompt(valor).trim();

    const nomeFormatado =
      nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (nomeFormatado === "" || nomeFormatado === undefined) {
      console.log("Nome inválido");
      continue;
    }

    if (!isNaN(nomeFormatado)) {
      console.loh("Nome não pode ser um número");
      continue;
    }
    return nomeFormatado;
  }
}

export function lerClasse(valor) {
  while (true) {
    const classe = prompt(valor).trim().toLowerCase();

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
