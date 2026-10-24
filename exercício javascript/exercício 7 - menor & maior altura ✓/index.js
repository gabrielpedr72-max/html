let alturas = [];

for (let i = 0; i < 10; i++) {
    let altura = Number(prompt("Digite a altura da pessoa " + (i + 1) + " em metros:"));

    alturas.push(altura);
}

let menorAltura = alturas[0];
let maiorAltura = alturas[0];

alturas.forEach(function(altura) {
    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
});

alert(
    "Menor altura do grupo: " + menorAltura.toFixed(2) + " m\n" +
    "Maior altura do grupo: " + maiorAltura.toFixed(2) + " m"
);