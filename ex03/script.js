let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
let regiao = parseInt(prompt("Digite a região (1-Sul, 2-Sudeste, 3-Outras):"));
let frete = 0
 if(valorCompra > 250) {
    frete = 0
 } else {
    switch (regiao) {
        case 1:
            frete = 20
            break;
        case 2:
            frete = 10
            break;
        case 3:
            frete = 30
            break;
        default:
            alert("Região inválida!");
    }
 }
 let total = valorCompra + frete;

 alert("Valor da compra: R$ " + valorCompra.toFixed(2));
 alert("Frete: R$ " + frete.toFixed(2));
 alert("Total a pagar: R$ " + total.toFixed(2));