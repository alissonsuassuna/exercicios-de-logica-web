Exercício 01
ENUNCIADO:

No arquivo script.js, siga as etapas abaixo:

    Altere o comentário CASO
    O algoritmo, deve funcionar para qualquer entrada do usuário que seja diferente das opções anteriores

OBSERVAÇÕES:

    A atualização salarial, deve ser impressa no console
    Não crie outros arquivos, apenas utilize os arquivos presentes no Files



conteudo do arquivo script.js

const nivel = prompt("Nível");
switch (nivel) {
  case "Estágio": console.log("R$ 1500.00"); break;
  case "Trainee": console.log("R$ 2000.00"); break;
  case "Júnior": console.log("R$ 2500.00"); break;
  case "Pleno": console.log("R$ 4000.00"); break;
  case "Sênior": console.log("R$ 6000.00"); break;
    /*Caso: */ console.log("Nível desconhecido.");
}
