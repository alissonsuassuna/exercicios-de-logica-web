const cargo = prompt('Digite seu cargo')
const salario = Number(prompt('Digite seu salario'))
console.log(salario)
let porcentagem = 0

switch (cargo) {
    case 'estagíario':
        porcentagem = (salario * 10 ) / 100

        break;
    case 'trainee':
        porcentagem = (salario * 9 ) / 100
                break;
    case 'júnior':
        porcentagem = (salario * 8 ) / 100
                break;
    case 'pleno':
        porcentagem = (salario * 7 ) / 100
        break;
    case 'sênior':
        porcentagem = (salario * 6 ) / 100
        break;
    default:
        console.log('Cargo desconhecido!')
        break;
}

let novoSal = salario + porcentagem


console.log(`Seu seu cargo é ${cargo} e seu novo salario é ${novoSal}`)