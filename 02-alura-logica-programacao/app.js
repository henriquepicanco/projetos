alert("Boas-vindas ao jogo do número secreto!");
let multiplicador = 1000;
let numeroSecreto = parseInt(Math.random() * multiplicador + 1);
// console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto ${chute} não for igual ao ${numeroSecreto}
while (chute != numeroSecreto) {
    chute = prompt(`Qual o número secreto (entre 1 e ${multiplicador})?`);
    
    // se chute for igual ao número secreto
    if (numeroSecreto == chute) {
        // Para PARA não continua!
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }

    // tentativas = tentativas + 1;
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// }

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)

// let resposta = prompt(`Qual o dia da semana?`)

// if (resposta == "Sábado" || resposta == "Domingo") {
//     alert("Bom final de semana!")
// }

// let numero = prompt("Digite um número");

// if (numero < 0) {
//     alert("O número digitado é negativo")
// } else {
//     alert("O número digitado é positivo")
// }