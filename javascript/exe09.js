let tipo = prompt("Digite o tipo de consumidor (residencial, comercial, industrial):");
let consumo = Number(prompt("Digite o consumo de água em metros cúbicos:"));
let gasto = 0

switch (tipo.toLowerCase()) {
    case "residencial":
      gasto = 5 + consumo * 0.05;
      console.log(`Residencial e o valor gasto foi de ${gasto}`)
      break
    case "comercial":
      if (consumo <= 80) {
        console.log(`Comercial e o valor gasto foi abaixo dos 80: R$500`)
      } else {
        gasto = 500 + (consumo - 80) * 0.25;
        console.log(`Comercial e o valor gasto foi acima dos 80: ${gasto}`)
      }
      break
    case "industrial":
      if (consumo <= 100) {
        console.log(`Industrial e o valor gasto foi abaixo dos 100: R$800`)
      } else {
        gasto = 800 + (consumo - 100) * 0.04;
        console.log(`Industrial e o valor gasto foi acima dos 100: ${gasto}`)
      }
      break
    default:
      alert("Tipo de consumidor inválido!");
  }