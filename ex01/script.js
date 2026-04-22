let valorCarro = parseFloat(prompt("Digite o valor do carro:"));
let formaPagamento = prompt("Escolha a forma de pagamento:\n1 - À vista no PIX\n2 - Cartão de crédito (até 24x)\n3 - Financiamento (até 48x)");
let valorFinal = 0;
let parcelas = 0;
let valorParcela = 0;

//Processamento

if (formaPagamento === "1") {
    valorFinal = valorCarro * 0.85;
    console.log("Pagamento via PIX (15% de desconto)");
    console.log("Valor final: R$ " + valorFinal.toFixed(2));

} else if (formaPagamento == "2") {
    valorFinal = valorCarro * 1.05;
    parcelas = parseInt(prompt("Em quantas parcelas? (máx 24)"));

  if (!isNaN(parcelas) > 0 && parcelas <= 24) {
    valorParcela = valorFinal / parcelas;
    console.log("Pagamento no Cartão de crédito (5% de juros)");
    console.log("Valor final: R$" + valorFinal.toFixed(2));
    console.log(parcelas + "x de R$" + valorParcela.toFixed(2));
  } else {
    console.log("Número de parcelas inválidos.");
  }
} else if (formaPagamento == "3") {
    valorFinal = valorCarro * 1.20;
    parcelas = parseInt(prompt("Em quantas parcelas? (máx 48)"));

  if (!isNaN(parcelas) > 0 && parcelas <= 48) {
    valorParcela = valorFinal / parcelas;
    console.log("Financiamento (20% de juros)");
    console.log("Valor final: R$" + valorFinal.toFixed(2));
    console.log(parcelas + "x de R$" + valorParcela.toFixed(2));
  } else {
    console.log("Número de parcelas inválido. ");
  }
} else {
  console.log("Opção de pagamento inválida");
}