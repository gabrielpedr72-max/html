let palavra = prompt("Digite uma palavra:");

let letras = palavra.toLowerCase().split("");
let inverso = [...letras].reverse();

if (letras.join("") === inverso.join("")) {
    alert("A palavra " + palavra + " é um palíndromo!");
} else {
    alert("A palavra " + palavra + " não é um palíndromo!");
}