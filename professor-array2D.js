const alunos = ["João", "Juliana", "Ana", "Caio"];
const notas = [
    [10, 8, 7.5, 9],
    [8, 8, 7, 7],
    [10, 10, 10, 10],
    [10, 9, 8, 7],
];

for (let i = 0; i < alunos.length; i++) {  // vamos percorrer o array de alunos
    const aluno = alunos[i];  // salvamos o aluno da vez na constante `aluno`
    const notasDoAluno = notas[i]; // o array de notas do aluno está guardado dentro do array `notas`. Ou seja, `notas[i]` é o array de notas do aluno da posição `i`

    let somaDasNotas = 0;

    for (let j = 0; j < notasDoAluno.length; j++) { // agora, vamos percorrer as notas desse aluno para calcular sua média. Criei a variável `j` para ficar diferente da variável `i`
        somaDasNotas+= notasDoAluno[j];
    }

    const mediaDoAluno = somaDasNotas / notasDoAluno.length;

    console.log(`O(a) aluno(a) ${aluno} tem média ${mediaDoAluno}.`);
}