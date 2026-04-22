let idade = parseInt(prompt("Digite sua idade: "));
let estudante = prompt("Você é estudante? (sim/não)").toLowerCase();
let preco = 40;

if(idade < 12 || idade > 60 || estudante === "sim") {
    preco = 20;
}
alert("Valor do ingresso: R$ " + preco.toFixed(2));