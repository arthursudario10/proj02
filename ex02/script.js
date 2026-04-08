let valorPedido = parseFloat(prompt("Digite o valor do pedido:"));
let valorFinal = valorPedido;
let mensagem = "";

if (!isNaN(valorPedido) || valorPedido <= 0) {
    let fidelidade = prompt("Você possui cartão fidelidade? (S/N)");

    if(fidelidade && fidelidade.toLowerCase() === "s") {
        valorFinal = valorPedido * 0.90;
        mensagem = "Você recebeu 10% de desconto!";
    } else {
        mensagem = "Você ganhou um cookie de brinde!";
    }
} else {
    mensagem = "Compra abaixo de R$50.00 - sem benefícios.";
}
console.log("Valor final: R$" + valorFinal.toFixed(2));
console.log(mensagem);