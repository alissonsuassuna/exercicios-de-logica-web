const sexo = prompt('Digite seu sexo: ')
const altura = prompt('Digite sua altura: ')

const pesoIdeal = sexo == 'm' ? (72.7 * altura) - 58 : (62.1 * altura) - 44.7

console.log(`Seu peso ideal é: ', ${pesoIdeal}`)