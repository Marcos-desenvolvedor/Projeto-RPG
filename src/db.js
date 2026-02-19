import fs from "fs";

export function lerBanco(caminho) {
  const conteudo = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(conteudo);
}

export function salvarBanco(caminho, dados) {
  const texto = JSON.stringify(dados, null, 2);
  fs.writeFileSync(caminho, texto, "utf-8");
}
