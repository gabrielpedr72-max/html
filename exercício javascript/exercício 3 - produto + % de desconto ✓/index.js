let valor_produto = Number(prompt("Digite o valor do produto:"));
let percentual_desconto = Number(prompt("Digite o percentual de desconto:"));

let valor_desconto = valor_produto * (percentual_desconto / 100);
let valor_com_desconto = valor_produto - valor_desconto;

alert(
    "valor_com_desconto: R$ " + valor_com_desconto.toFixed(2) +
    "\nvalor_desconto: R$ " + valor_desconto.toFixed(2)
);