const sexo = prompt('Digite seu sexo H para homen ou F para mulher: ')
const idade = Number(prompt('Digite sua idade: ')) 
const viagens = Number(prompt('Digite número de viagens que já fez? : ')) 

console.log(`sexo é ${sexo}`)

console.log(`idade é ${idade}`)

console.log(`viagens ${viagens}`)

if(sexo == 'h') {
    if(idade <= 40 || viagens >= 2 ||  idade >= 30 && viagens == 2 || idade <= 35 && viagens == 1 ) {
        console.log(`Você é ${sexo} e pode viaja`)
    } else {
        console.log('Você não poderá viaja')
    }
}

if(sexo == 'f') {
    if(idade >= 35 || viagens >= 3 || idade >= 30 && viagens == 2 ) {
        console.log(`Você é ${sexo} e pode viaja`)
    } else {
        console.log('Você não viaja')
    }
}