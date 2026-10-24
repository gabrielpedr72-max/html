let alunos = [];
let nome = "";

while (true) {
    nome = prompt("Digite o nome do aluno ou 'sair' para finalizar:");

    if (nome === null || nome.trim().toLowerCase() === "sair") {
        break;
    }

    nome = nome.trim();

    if (nome !== "") {
        alunos.push(nome);
    }
}

console.log("Lista de presença:");

alunos.forEach(function(aluno) {
    console.log(aluno);
});