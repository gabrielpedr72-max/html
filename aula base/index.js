var lista = [];
var produto = "";

while (true) {
    produto = prompt("Informe um produto ou 'sair' para encerrar: ");

    if (produto === null || produto.toUpperCase() === "SAIR") {
        break;
    }

    lista.push(produto);
}

// Mostra a lista no console
console.log(lista);

// Mostra a lista na página HTML
var resultado = document.getElementById("resultado");

if (lista.length === 0) {
    resultado.textContent = "Nenhum produto informado.";
} else {
    var ul = document.createElement("ul");

    lista.forEach((elemento) => {
        var li = document.createElement("li");
        li.textContent = elemento;
        ul.appendChild(li);
    });

    resultado.appendChild(ul);
}

// Calcula e mostra a média

// alert(calcularMedia(10, 7)); // tornei um comentário para adicionar posteriormente

// function calcularMedia(primeiroValor, segundoValor) {
//     return (primeiroValor + segundoValor) / 2;
// }
