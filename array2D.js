// listas dentro de lista
const alunos = ["Rodrigo", "Felipe", "Fernanda", "Yasmin"]
const notas = [7, 8, 5.5, 10]

const alunosEMedias = [alunos, notas]

console.log(`O aluno da posição 1 é: ${alunosEMedias[0][1]} e tirou ${alunosEMedias[1][1]} pontos na prova.
A aluna da posição 3 é ${alunosEMedias[0][3]} e sua nota foi ${alunosEMedias[1][3]} pontos`)