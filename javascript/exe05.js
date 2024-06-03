const pesoPeixe = Number(prompt('Digite o peso: '))
const limitePeso = 50

const pespExcendente = pesoPeixe - limitePeso

if(pespExcendente > 0) {
    const multa = pespExcendente * 4
    console.log(`Passou o limite, valor da multa é ${multa}`)
} else {
    console.log(`Não existi multa`)
}