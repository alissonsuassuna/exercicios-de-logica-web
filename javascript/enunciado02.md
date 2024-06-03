Exercício 02
ENUNCIADO:

No arquivo script.js, siga as etapas abaixo:

    Adicione o break, no lugar correto do bloco switch
    O algoritmo, deve retornar a mensagem 1

OBSERVAÇÕES:

    A mensagem, deve ser impressa no console
    Não crie outros arquivos, apenas utilize os arquivos presentes no Files


CONTEUDO DO ARQUIVO SCRIPT.JS

const num = 1;

switch (num) {
  case '1':
    answer = "one";
  case 1:
    answer = 1;
  case 2:
    answer = "this is the one";
    break;
  default:
    answer = "not working";
}

console.log(answer);
