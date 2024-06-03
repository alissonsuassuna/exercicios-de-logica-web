const operador = prompt('Qual calculo deseja? ')
const numero1 = Number(prompt('Informe o primeiro número: '))
const numero2 = Number(prompt('Informe o segundo número: '))
let calculo = 0

switch (operador) {
    case '+':
        calculo = numero1 + numero2
        console.log(`A soma é ${calculo}`)
        break;
    case '-':
        calculo = numero1 - numero2
        console.log(`A subtração é ${calculo}`)
        break;
    case '*':
        calculo = numero1 * numero2
        console.log(`A multiplicação é ${calculo}`)
        break;
    case '/':
        if (numero2 === 0) {
            alert("Erro: Divisão por zero!");
          } else {
            calculo = numero1 / numero2;
            console.log(`A divisão é ${calculo}`)
          }
        break;

    default:
        console.log('Operador inválido')
        break;
}