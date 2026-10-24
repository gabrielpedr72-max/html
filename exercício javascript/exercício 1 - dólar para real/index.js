
let cotacaoTexto = prompt("Digite a cotação do dólar em reais (R$):");
let dolarTexto = prompt("Digite o valor em dólar (US$):");

let cotacao = Number(cotacaoTexto.replace(",", "."));
let dolar = Number(dolarTexto.replace(",", "."));

if (
    cotacaoTexto.trim() === "" ||
    dolarTexto.trim() === "" ||
    !Number.isFinite(cotacao) ||
    !Number.isFinite(dolar) ||
    cotacao <= 0 ||
    dolar < 0
) {
    alert("Digite valores numéricos válidos!");
} else {
    let real = dolar * cotacao;

    alert(
        "Valor em dólar: US$ " + dolar.toFixed(2) +
        "\nCotação do dólar: R$ " + cotacao.toFixed(2) +
        "\nValor convertido: R$ " + real.toFixed(2)
    );
}
