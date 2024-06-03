const precoNormal = parseFloat(prompt("Informe o preço normal da fita (R$):"));
const diaSemana = parseInt(prompt("Informe o dia da semana (1 a 7):"));
const categoria = prompt("Informe a categoria do filme (comum ou lançamento):").toLowerCase();


if (isNaN(diaSemana) || diaSemana < 1 || diaSemana > 7) {

  console.log("Dia da semana inválido!");

} else if (categoria !== "comum" && categoria !== "lançamento") {

  console.log("Categoria do filme inválida!");

} else {

  let valorFinal = precoNormal;

  if (categoria === "lançamento") {
    valorFinal += (precoNormal * 15) / 100;
  }

  switch (diaSemana) {
    case 2:
    case 3:
    case 5:
      valorFinal -= (valorFinal * 40) / 100;
      break;
    default:
      // Ignora dias sem desconto
      break;
  }

  // Exibindo o valor final
  console.log(`O valor final do aluguel é de R$${valorFinal.toFixed(2)}`);
}
/**
 * Segunda = 2
 * Terça = 3
 * Quinta = 5
 * 
 * Quarta = 4
 * Sexta = 6
 * Sábado = 7
 * Domingo = 1
 * 
 */